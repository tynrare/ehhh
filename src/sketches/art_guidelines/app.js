/**
 * @file app.js
 * @author tynrare
 * @version 2
 * @module Rooms/ArtGuidelinesDraft
 */

import { Thingy } from '@core/exchange/index.js';
import { HiloMeshThingy, AppRoot } from '@rooms/hilo3d/index.js';
import DefaultDevHiloEnvMap from '@rooms/hilo3d/environment/dev_default_env.js';

/**
 *
 */
class ArtGuidelinesDraft extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		this.app = new AppRoot();
		this.app.resources.preloadMeshes({ head: '/res/assets/meshes/art-head.glb' }).then(() => {
			this.app.init();
			this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
			this.app.get('game').touch('mesh', () => new HiloMeshThingy({ name: 'sphere' }));
		});
	}

	/**
	 * .
	 */
	disposeCallback() {
		this.app.dispose();
	}
}

export default ArtGuidelinesDraft;
