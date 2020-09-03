/* eslint-disable no-magic-numbers */
/**
 * @file paperio_math_case_2.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import { Thingy } from '@core/exchange/index.js';
import { HiloMeshThingy, AppRoot } from '@game/engine/index.js';
import { MeshGraphPointsManager } from '@game/gameplay/index.js';
import { Node, Mesh, SphereGeometry, BasicMaterial, Color, Vector3 } from 'hilo3d';

const name = 'plane-face-4';

/**
 * Simple test for modular windows
 */
class PaperioMathCase2 extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		this.app = new AppRoot();
		await this.app.resources.preload({ meshes: { mesh: `res/assets/test/test_mesh.glb` } });
		this.app.init();
		this.app.get('game').set('map', new HiloMeshThingy({ name }));

		this.run();
	}

	/**
	 * .
	 */
	run() {
		this.zones = this.app.set('points', new MeshGraphPointsManager({ name }));

		if (this.meshRoot) {
			this.meshRoot.removeFromParent();
		}
		this.meshRoot = new Node();
		this.app.render.stage.addChild(this.meshRoot);

		try {
			this.case1();
			this.case2();
			this.case3();
			this.case4();
			this.case5();
		} catch (err) {
			cgn.log.error(err);
		} finally {
			const debug = this.app.set('debug', new MeshGraphDebug());
			debug.redrawSegments(this.zones.graph);
		}
	}

	/**
	 * Unlinked points
	 */
	case1() {
		const dir = new Vector3(0, -1, 0);
		this.makeSphere().position.copy(
			this.zones.rayToNextPoint(new Vector3(-0.75, 0, -0.75), dir).pos
		);
		this.makeSphere().position.copy(
			this.zones.rayToNextPoint(new Vector3(-0.53, 0, -0.75), dir).pos
		);
		this.makeSphere().position.copy(this.zones.rayToNextPoint(new Vector3(-0, 0, -0.75), dir).pos);
	}

	/**
	 * linked points
	 */
	case2() {
		const POINTS = 2;
		const origin = new Vector3(-0.5, 0, -0.4);
		const dir = new Vector3(0, -1, 0);
		for (let i = 0; i < POINTS; i++) {
			const p = (2 / POINTS) * i;
			const shift = new Vector3(p, 0, 0);
			const hit = this.zones.rayToNextPoint(shift.add(origin), dir, Boolean(i));
			this.makeSphere().position.copy(hit.pos);
		}
	}

	/**
	 * linked points 2
	 */
	case3() {
		const POINTS = 10;
		const origin = new Vector3(-0.9, 0, -0.2);
		const dir = new Vector3(0, -1, 0);
		for (let i = 0; i < POINTS; i++) {
			const p = (2 / POINTS) * i;
			const shift = new Vector3(p, 0, 0);
			const hit = this.zones.rayToNextPoint(shift.add(origin), dir, Boolean(i));
			this.makeSphere().position.copy(hit.pos);
		}
	}

	/**
	 * linked points 3
	 */
	case4() {
		const POINTS = 10;
		const origin = new Vector3(-0.91, 0, 0);
		const dir = new Vector3(0, -1, 0);
		for (let i = 0; i < POINTS; i++) {
			const p = (2 / POINTS) * i;
			const shift = new Vector3(p, 0, 0);
			const hit = this.zones.rayToNextPoint(shift.add(origin), dir, Boolean(i));
			this.makeSphere().position.copy(hit.pos);
		}
	}

	/**
	 * linked points sin wave
	 */
	case5() {
		const POINTS = 16;
		const POINTS_CREATE = POINTS;
		const origin = new Vector3(-0.97, 0, 0.4);
		const dir = new Vector3(0, -1, 0);
		const maxH = 0.5;
		const sinH = 0.5;
		for (let i = 0; i < POINTS_CREATE; i++) {
			const p = (2 / POINTS) * i;
			const y = Math.sin((i / POINTS) * 2 * Math.PI * 2) * maxH * sinH;
			const shift = new Vector3(p, 0, y);
			const hit = this.zones.rayToNextPoint(shift.add(origin), dir, Boolean(i));
			this.makeSphere().position.copy(hit.pos);
		}
	}

	/**
	 * @param {Color} color .
	 * @returns {Mesh} .
	 */
	makeSphere(color = cgn.appearance.getColor('attention')) {
		const mesh = new Mesh({
			geometry: new SphereGeometry({
				radius: 0.01,
				heightSegments: 8,
				widthSegments: 16
			}),
			material: new BasicMaterial({
				lightType: 'NONE',
				diffuse: color
			})
		});

		this.meshRoot.addChild(mesh);

		return mesh;
	}
}

export default PaperioMathCase2;
