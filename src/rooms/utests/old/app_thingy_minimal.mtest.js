/**
 * @file hilo3d.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';

/**
 * Simple test for modular windows
 */
class AppThingyMinimalTest extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		const app = new AppRoot();
		await app.initWithPreload();
		app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		app.get('game').set('map', new HiloMeshThingy({ name: 'cube' }));
	}
}

export default AppThingyMinimalTest;
