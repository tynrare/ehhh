/* eslint-disable complexity, max-lines-per-function, max-statements, no-magic-numbers, camelcase */
/**
 * @file mesh_graph_math_case_1.test.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { MeshGraphPointsManager } from '@game/gameplay/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Vector3 } from 'hilo3d';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import SimpleTestInputs from '@app/page_helpers/simple_test_inputs.js';
import { PERFECT_NUMBER } from '@core/math.js';

const name = 'plane-face-4';

/**
 * Free to change case. Does not have to work
 */
class MeshGraphMathSandboxCase extends Thingy {
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
				r: 0.55,
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
						}
					}
				}
			})
		);

		//this.t = Math.PI * 0.77; // case 1
		this.t = Math.PI * 0.9;
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

		try {
			this.calculate(points);
		} catch (err) {
			cgn.log.error(err);
		} finally {
			const graphdebug = this.app.touch('debug', () => new MeshGraphDebug());
			graphdebug.redrawSegments(points.faces.graph);
		}
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
		/*
		const point = points.rayToNextPoint(
			new Vector3(Math.sin(t) * r, 1, Math.cos(t) * r),
			dir,
			false
		);
		*/
		{
			const point = points.rayToNextPoint(new Vector3(0, 0, 0), dir, false);
			points.operations.makeDirectionInsertions(
				point,
				new Vector3(Math.sin(t) * r, 1, Math.cos(t) * r)
			);
		}
		/*
		{
			const t = this.t + Math.PI * 0.35;
			const point = points.rayToNextPoint(new Vector3(0, 0, 0.5), dir, false);
			points.operations.makeDirectionInsertions(
				point,
				new Vector3(Math.sin(t) * r, 1, Math.cos(t) * r)
			);
		}
		*/
	}
}

export default MeshGraphMathSandboxCase;
