/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/Hilo3d
 */

import { Thingy } from '@core/exchange/index.js';
import { HiloMeshThingy, AppRoot } from '@rooms/hilo3d/index.js';
import DefaultDevHiloEnvMap from '@rooms/hilo3d/environment/dev_default_env.js';

/**
 * Simple test for modular windows
 */
class Hilo3dRoom extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		this.app = new AppRoot();
		this.app.init();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		//app.get('game').set('map', new HiloMeshThingy({ name: 'cube' }));
	}

	/**
	 * .
	 */
	disposeCallback() {
		this.app.dispose();
	}
}

export default Hilo3dRoom;
