/* eslint-disable no-magic-numbers */
/**
 * @file paperio_math_case_3.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import { Thingy } from '@core/exchange/index.js';
import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { Vector3 } from 'hilo3d';
import { MeshGraphPointsManager, PaperioCharacterZone } from '@game/gameplay/index.js';
import SimpleTestInputs from '@app/page_helpers/simple_test_inputs.js';
import { DEFAULT_GEOM_THRESHOLD } from '@core/math.js';

const name = 'plane-face-4';

/**
 * Simple test for modular windows
 */
class PaperioPointsCase3 extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		this.app = new AppRoot();
		await this.app.resources.preload({ meshes: { mesh: `res/assets/test/test_mesh.glb` } });
		this.app.init();
		this.app.get('game').set('map', new HiloMeshThingy({ name }));
		this.app
			.set('buffer', new Thingy())
			.set('MeshGraphPointsManager', new MeshGraphPointsManager({ name }));

		const config = this.app.set(
			'config',
			new SimpleTestInputs({
				r: 0.35,
				config: {
					ranges: {
						sinH: {
							max: 1,
							min: DEFAULT_GEOM_THRESHOLD,
							key: 'r'
						}
					}
				}
			})
		);

		config.events.on('update', this.run.bind(this));

		this.run();
	}

	/**
	 * .
	 */
	run() {
		this.app.get('game').del('zones');
		this.zones = this.app.get('game').set(
			'zones',
			new PaperioCharacterZone({
				points: this.app.path('buffer/MeshGraphPointsManager').clone(),
				initialZoneSize: this.app.path('config/r')
			})
		);
		this.app.render.debug.cleanup();
		this.zones.events.on('zone_trigger', (point) => {
			this.app.render.debug.makeSphere().position.copy(point.pos);
		});

		try {
			this.case1();
		} catch (err) {
			cgn.log.error(err);
		} finally {
			const debug = this.app.touch('debug', () => new MeshGraphDebug());
			debug.redrawSegments(this.zones.points.graph);
			debug.redrawNormals(this.zones.points.graph);
		}
	}

	/**
	 * Unlinked points
	 */
	case1() {
		const dir = new Vector3(0, -1, 0);

		this.zones.drawInitialZone(new Vector3(0, 0, 0.2), dir);
		this.zones.drawInitialZone(new Vector3(0, 0, -0.2), dir);
	}
}

export default PaperioPointsCase3;
