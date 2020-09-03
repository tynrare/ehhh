/**
 * @file hilo3d.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { MeshFacesHelper } from '@game/math/index.js';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';

/**
 * Simple test for modular windows
 */
class HiloNormalsMeshDebugTest extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		const app = new AppRoot();
		await app.initWithPreload();
		app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		app.get('game').set('map', new HiloMeshThingy({ name: 'cube', debugNormalsEnabled: true }));
		const faces = app.get('game').set('surface', new MeshFacesHelper({ name: 'cube' }));
		const debug = app.get('game').set('debug', new MeshGraphDebug());
		debug.redraw(faces.graph);
	}
}

export default HiloNormalsMeshDebugTest;
