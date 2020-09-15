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
			//this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
			this.app.get('game').touch('cube-bounds', () => new HiloMeshThingy({ name: 'cube-bounds' }));
			this.app.get('game').touch('cube-back', () => new HiloMeshThingy({ name: 'cube-back' }));
			this.app.get('game').touch('head', () => new HiloMeshThingy({ name: 'head-smooth' }));
			this.app.get('game').touch('lines', () => new HiloMeshThingy({ name: 'head-lines' }));
			//this.app.get('game').touch('mesh3', () => new HiloMeshThingy({ name: 'head-lowpoly' }));
			//this.app.get('game').touch('mesh4', () => new HiloMeshThingy({ name: 'sphere-smooth' }));
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
