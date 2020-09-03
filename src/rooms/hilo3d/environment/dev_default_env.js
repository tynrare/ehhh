/**
 * @file dev_default_env.js
 * @author tynrare
 * @version 1
 * @module Game/Objects
 */

import {
	Node,
	PlaneGeometry,
	Mesh,
	AxisHelper,
	BasicMaterial,
	LazyTexture,
	constants,
	Matrix3,
	Vector2
} from 'hilo3d';
import { Thingy } from '@core/exchange/index.js';
import { HiloNodeWrapper } from '@rooms/hilo3d/index.js';
import { PRECISE_GEOM_THRESHOLD } from '@core/math.js';

const DEFAULT_PLANE_UNITS = 10;
const PLANE_SIZE = 100;

/**
 * Map with debug props
 */
class DefaultDevHiloEnvMap extends Thingy {
	/**
	 * inits scene container
	 */
	postinitCallback() {
		this.makeMap();
	}

	/**
	 * @returns {Node} created container (add it to stage)
	 */
	makeMap() {
		const container = this.set('container', new HiloNodeWrapper({ id: 'default_dev_map' })).hilo;

		const plane = new Mesh({
			rotationX: -90,
			y: -PRECISE_GEOM_THRESHOLD,
			//x: PLANE_SIZE / 2,
			//z: PLANE_SIZE / 2,
			geometry: new PlaneGeometry({ width: PLANE_SIZE, height: PLANE_SIZE }),
			material: new BasicMaterial({
				uvMatrix: new Matrix3().fromScaling(
					new Vector2(PLANE_SIZE / DEFAULT_PLANE_UNITS, PLANE_SIZE / DEFAULT_PLANE_UNITS)
				),
				lightType: 'NONE',
				side: constants.FRONT,
				diffuse: new LazyTexture({
					flipY: true,
					src: '/res/assets/dev/metric_grid.png'
				})
			})
		});
		container.addChild(plane);

		container.addChild(new AxisHelper({ size: 10 }));

		return container;
	}
}

export default DefaultDevHiloEnvMap;
