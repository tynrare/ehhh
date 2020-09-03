/* eslint-disable complexity, max-lines-per-function, max-statements, no-magic-numbers, camelcase */
/**
 * @file mesh_graph_math_case_1.test.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { MeshGraphPointsManager } from '@game/gameplay/index.js';
import { POINTS_FLAGS } from '@game/gameplay/paperio_points/mesh_graph_points_operations.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Point } from '@game/math/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Vector3 } from 'hilo3d';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import SimpleTestInputs from '@app/page_helpers/simple_test_inputs.js';
import { PERFECT_NUMBER } from '@core/math.js';

const name = 'plane-face-4';

/**
 * Free to change case. Does not have to work
 */
class MeshGraphMathCase4 extends Thingy {
	app = new AppRoot();

	/**
	 * .
	 */
	async initCallback() {
		this.app.init();
		await this.app.resources.preload({ meshes: { mesh: `res/assets/test/test_mesh.glb` } });
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		this.app.get('game').set('map', new HiloMeshThingy({ name }));
		this.app
			.set('buffer', new Thingy())
			.set('MeshGraphPointsManager', new MeshGraphPointsManager({ name }));

		// disabled input for now
		const config = this.app.set(
			'config',
			new SimpleTestInputs({
				speed: 0,
				r: 0.7,
				depth: 0,
				config: {
					ranges: {
						speed: {
							max: 0.1,
							min: -0.1,
							key: 'speed'
						},
						r: {
							max: 1,
							min: 0,
							key: 'r'
						},
						depth: {
							max: 10,
							min: 0,
							key: 'depth'
						}
					}
				}
			})
		);

		this.t = Math.PI * 0.65;
		this.app.events.on('/env/time.frame', () => {
			const speed = PERFECT_NUMBER * this.app.path('config/speed');
			this.t += speed;
			if (speed) {
				this.update();
			}
		});
		config.events.on('update', this.update.bind(this));
		this.update();
	}

	/**
	 * .
	 */
	update() {
		const debug = this.app.render.debug;
		debug.clearLines();
		const points = this.prepare();
		this.app.del('root');
		this.app.set('root', points);

		this.calculate(points);

		const graphdebug = this.app.touch('debug', () => new MeshGraphDebug());
		graphdebug.redrawSegments(points.faces.graph);
	}

	/**
	 * @returns {MeshGraphPointsManager} points manager
	 */
	prepare() {
		const points = this.app.path('buffer/MeshGraphPointsManager').clone();
		const debug = this.app.render.debug;
		debug.cleanup();
		points.events.on('point_inserted', (point) => {
			debug.makeSphere(1, 'bright').position.copy(point.pos);
		});
		points.events.on('segment_inserted', (segment) => {
			debug.drawLine(segment.points.a.pos, segment.points.b.pos, 'bright');
		});

		return points;
	}

	/**
	 * @param {MeshGraphPointsManager} points .
	 */
	calculate(points) {
		const dir = new Vector3(0, -1, 0);
		const r = this.app.path('config/r');

		const t = this.t;
		const point = points.rayToNextPoint(new Vector3(0, 0, 0.5), dir, false);
		points.operations.makeDirectionInsertions(
			point,
			new Vector3(Math.sin(t) * r, 1, Math.cos(t) * r)
		);

		const list = points.operations.cache.buffer.insertedPoints;
		this.calculatePathInsertion(points, list);
	}

	/**
	 * @param {MeshGraphPointsManager} points .
	 * @param {Array<Point>} list .
	 */
	calculatePathInsertion(points, list) {
		const depth = Math.max(0, list.length - this.app.path('config/depth') - 1);
		list[list.length - 1].setFlag(POINTS_FLAGS.INSERTED, true);

		// 1. cleanup nearby points around every point in list
		for (let i = list.length - 1; i >= depth; i--) {
			const point = list[i];

			for (const k in point.segments) {
				const segment = point.segments[k];
				const p = segment.points.a === point ? segment.points.b : segment.points.a;
				if (segment.length < this.properties.pointSnapDist) {
					point.setFlag(POINTS_FLAGS.INSERTED, true);
					points.operations.disposeSegment(p, point);

					//? always has to be (I hope will be) pindex === i + 1
					const pindex = list.indexOf(p);
					if (pindex >= 0) {
						list.splice(pindex, 1);
					}
				}
			}
		}

		// 2. Cleanup
		// 2.1 Unnecessary path points
		// 2.2 Small triangles
		for (let i = list.length - 1; i >= depth + 1; i--) {
			const b = list[i];
			let a = list[i - 1];

			// 2.1
			while (!a.getFlag(POINTS_FLAGS.INSERTED)) {
				points.operations.disposeSegment(a, b);
				list.splice(i - 1, 1);
				a = list[i - 1];
			}

			// 2.2
			const segment = a.segments[b.id];
			if (segment) {
				segment.register(a, b);
				//cleanupTriangle(segment, segment.triangles.a);
				//cleanupTriangle(segment, segment.triangles.b);
			}
		}
	}
}

export default MeshGraphMathCase4;
