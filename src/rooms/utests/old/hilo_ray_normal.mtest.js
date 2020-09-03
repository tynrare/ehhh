/* eslint-disable no-magic-numbers */
/**
 * @file hilo3d.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { AppRoot, HiloLineRender, HiloMeshThingy, HiloRaycastHelper } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';

import { Vector3, BasicMaterial, Color, Mesh, SphereGeometry } from 'hilo3d';

/**
 * @typedef hit
 * @property {boolean} hit
 * @property {Vector3} [pos]
 * @property {Vector3} [normal]
 * @property {Array<number>} [face] indexes of vertices
 */

/**
 * Simple test for modular windows
 */
class HiloRayNormalTest extends Thingy {
	app = new AppRoot();

	/**
	 * .
	 */
	async initCallback() {
		this.app.init();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		const line = this.app.get('game').set('line', new HiloLineRender());
		const ray = this.app.get('game').set('ray', new HiloRaycastHelper());

		const meshname = 'Suzanne';
		await this.app.resources.preload({ meshes: { mesh: `res/assets/test/${meshname}.glb` } });
		const mesh = this.app.get('game').set('mesh', new HiloMeshThingy({ name: meshname }));
		const points = [
			this.makeSphere(new Color(1, 0, 0)),
			this.makeSphere(new Color(0, 0, 1)),
			this.makeSphere(new Color(0, 0, 1)),
			this.makeSphere(new Color(0, 0, 1))
		];

		this.app.on('env/window.mousemove', function mousemove(e) {
			const t = e.changedTouches ? e.changedTouches[0] : e;

			ray.setupFromCamera({ x: t.clientX, y: t.clientY });
			const result = ray.raycast(mesh.hilo);

			if (result.hit) {
				line.clear();

				const start = result.pos;
				const p0 = mesh.hilo.geometry.vertices.get(result.face[0]).clone();
				const p1 = mesh.hilo.geometry.vertices.get(result.face[1]).clone();
				const p2 = mesh.hilo.geometry.vertices.get(result.face[2]).clone();

				points[0].position.copy(start);
				points[1].position.copy(p0);
				points[2].position.copy(p1);
				points[3].position.copy(p2);

				const end = result.normal.add(start);

				line.addLine(start, end).addLine(p0, p1).addLine(p1, p2).addPoint(p0);
			}
		});
	}

	/**
	 * @param {Color} [color] .
	 * @returns {Mesh} .
	 */
	makeSphere(color = new Color(0, 0, 1)) {
		const mesh = new Mesh({
			geometry: new SphereGeometry({
				radius: 0.1,
				heightSegments: 8,
				widthSegments: 16
			}),
			material: new BasicMaterial({
				lightType: 'NONE',
				diffuse: color
			})
		});

		this.app.render.stage.addChild(mesh);

		return mesh;
	}
}

export default HiloRayNormalTest;
