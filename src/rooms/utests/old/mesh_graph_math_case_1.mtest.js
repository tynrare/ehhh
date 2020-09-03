/* eslint-disable complexity, max-lines-per-function, max-statements, no-magic-numbers, camelcase */
/**
 * @file mesh_graph_math_case_1.test.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { AppRoot, HiloLineRender } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Mesh, Geometry, BasicMaterial, Color, Vector3 } from 'hilo3d';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import { MeshGraph } from '@game/math/index.js';

/**
 * Simple test for modular windows
 */
class MeshGraphMathCase1 extends Thingy {
	app = new AppRoot();

	/**
	 * .
	 */
	initCallback() {
		this.app.init();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		this.line = this.app.get('game').set('line', new HiloLineRender());

		this.case1();
	}

	/**
	 * .
	 */
	case1() {
		const debug = this.app.render.debug;
		const graphdebug = this.app.touch('debug', () => new MeshGraphDebug());
		const graph = new MeshGraph();

		const origin = new Vector3(-1, 1, 1);

		const a = graph.buildPoint(new Vector3(0, 0, 0).add(origin));
		const b = graph.buildPoint(new Vector3(2, 0, 1).add(origin));
		const c = graph.buildPoint(new Vector3(2, 0, -1).add(origin));
		const tri = graph.buildTriangle(a, b, c);

		// target point
		const x = new Vector3(0.5, 0, 0.1).add(origin);
		const xnormal = x.clone().sub(a.pos).normalize();

		const p = graph.operations.findCevianForTriangle(tri.normal, a.pos, b.pos, c.pos, xnormal);
		if (p) {
			debug.makeSphere().position.copy(p);
		}

		graphdebug.redraw(graph);
		this.line.addLine(a.pos, x);
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

export default MeshGraphMathCase1;
