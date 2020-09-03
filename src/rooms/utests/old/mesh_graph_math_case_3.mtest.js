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
import { DEFAULT_GEOM_THRESHOLD, PERFECT_NUMBER } from '@core/math.js';
import { Point } from '@game/math/index.js';

const name = 'plane-face-4';

/**
 * Simple test for modular windows
 */
class MeshGraphMathCase3 extends Thingy {
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

		this.app.set(
			'config',
			new SimpleTestInputs({
				speed: 0.01,
				r: 0.7,
				config: {
					ranges: {
						speed: {
							max: 0.1,
							min: -0.1,
							key: 'speed'
						},
						r: {
							max: 1,
							min: DEFAULT_GEOM_THRESHOLD,
							key: 'r'
						}
					}
				}
			})
		);

		this.t = 0;
		this.app.events.on('/env/time.frame', () => {
			this.update();
		});
	}

	/**
	 * .
	 */
	update() {
		const debug = this.app.render.debug;
		debug.clearLines();
		const sphere = this.touch('sphere1', () => debug.makeSphere(2));
		const points = this.prepare();
		this.app.del('root');
		this.app.set('root', points);

		const r = this.app.path('config/r');
		const speed = PERFECT_NUMBER * this.app.path('config/speed');
		this.t += speed;
		sphere.position.set(Math.sin(this.t) * r, 1, Math.cos(this.t) * r);

		this.calculate(points, sphere.position);

		const graphdebug = this.app.touch('debug', () => new MeshGraphDebug());
		graphdebug.redrawSegments(points.faces.graph);
	}

	/**
	 * @returns {MeshGraphPointsManager} points manager
	 */
	prepare() {
		const points = this.app.path('buffer/MeshGraphPointsManager').clone();
		const debug = this.app.render.debug;
		const sphere = this.touch('sphere2', () => debug.makeSphere(1, 'bright'));
		points.events.on('point_inserted', (point) => {
			sphere.position.copy(point.pos);
		});
		points.events.on('segment_inserted', (segment) => {
			debug.drawLine(segment.points.a.pos, segment.points.b.pos, 'bright');
		});

		return points;
	}

	/**
	 * @param {MeshGraphPointsManager} points .
	 * @param {Vector3} target .
	 * @returns {Point} created point
	 */
	calculate(points, target) {
		const dir = new Vector3(0, -1, 0);
		points.rayToNextPoint(new Vector3(-0.2, 0, 0.2), dir);
		points.rayToNextPoint(new Vector3(0.2, 0, 0.2), dir);

		const point = points.rayToNextPoint(new Vector3(0, 0, 0.5), dir, false);
		const result = points.operations.makeDirectionInsertions(point, target);

		return result;
	}
}

export default MeshGraphMathCase3;
