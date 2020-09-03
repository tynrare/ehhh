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
import { Node, Mesh, Geometry, BasicMaterial, Color, Vector3 } from 'hilo3d';
import { cache } from '@core/math.js';

const name = 'plane';

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
		const mesh = this.makeMesh();
		this.zones.events.on('operations.segment_inserted', (segment) => {
			const scale = 0.1;
			const v0 = cache.vec3.v0;
			const v1 = cache.vec3.v1;
			const v2 = cache.vec3.v2;
			const a = segment.points.a.pos;
			const b = segment.points.b.pos;
			const right = cache.vec3.v3.copy(segment.cache.right).scale(scale);
			const left = cache.vec3.v4.copy(right).negate();

			mesh.geometry.addFace(
				v0.copy(a).add(left).elements,
				v1.copy(a).add(right).elements,
				v2.copy(b).add(left).elements
			);
			mesh.geometry.addFace(
				v2.copy(a).add(right).elements,
				v1.copy(b).add(right).elements,
				v0.copy(b).add(left).elements
			);
		});

		const dir = new Vector3(0, -1, 0);
		this.zones.rayToNextPoint(new Vector3(-0.5, 0, 0), dir);
		this.zones.rayToNextPoint(new Vector3(0.5, 0, 0), dir);
	}

	/**
	 * @returns {Mesh} .
	 */
	makeMesh() {
		const mesh = new Mesh({
			geometry: new Geometry({
				isStatic: false
			}),
			material: new BasicMaterial({
				diffuse: new Color(1, 1, 1),
				lightType: 'NONE'
			})
		});

		this.app.render.stage.addChild(mesh);

		return mesh;
	}
}

export default PaperioMathCase2;
