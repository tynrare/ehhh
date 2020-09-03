/**
 * @file hilo3d.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { AppRoot } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Mesh, Geometry, SphereGeometry } from 'hilo3d';
import StarsSkyEffectMaterial from '@app/graphics/materials/stars_sky_effect.js';

/**
 * Simple test for modular windows
 */
class HiloMinimalShaderTest extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		this.app = new AppRoot();
		await this.app.initWithPreload();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());

		this.case1();
	}

	/**
	 * .
	 */
	case1() {
		this.makeSphere();
	}

	/**
	 * @returns {Mesh} .
	 */
	makeMesh() {
		const mesh = new Mesh({
			geometry: new Geometry({
				isStatic: false
			}),
			material: StarsSkyEffectMaterial
		});

		this.app.render.stage.addChild(mesh);

		return mesh;
	}

	/**
	 * @returns {Mesh} .
	 */
	makeSphere() {
		const mesh = new Mesh({
			geometry: new SphereGeometry({
				radius: 1,
				heightSegments: 8,
				widthSegments: 16
			}),
			material: StarsSkyEffectMaterial
		});

		this.app.render.stage.addChild(mesh);

		return mesh;
	}
}

export default HiloMinimalShaderTest;
