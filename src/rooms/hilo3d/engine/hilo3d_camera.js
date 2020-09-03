/**
 * - 06.07.20
 *
 * @file hilo3d_camera.js
 * @author tynrare
 * @version 2
 * @module Game/Engine
 */

import { BasicOrbitalCamera } from '@rooms/hilo3d/input/index.js';
import { Thingy } from '@core/exchange/index.js';
import { PerspectiveCamera } from 'hilo3d';

/**
 * Wrapper for hilo camera
 */
class Hilo3dCameraManager extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			controls: new BasicOrbitalCamera()
		};
	}

	/**
	 * Creates hilo camera
	 */
	preinitCallback() {
		const camera = this.set(
			'camera',
			new PerspectiveCamera({
				aspect: innerWidth / innerHeight,
				far: 1000,
				near: 0.1,
				z: 20,
				y: 20,
				rotationX: -45
			})
		);
		this.path('*/stage').camera = camera;
	}

	/**
	 * @returns {PerspectiveCamera} .
	 */
	get hilo() {
		return this.get('camera');
	}
}

export default Hilo3dCameraManager;
