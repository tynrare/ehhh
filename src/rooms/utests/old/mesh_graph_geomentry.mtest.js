/* eslint-disable no-magic-numbers */
/**
 * @file mesh_graph_geomentry.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { MeshGraph } from '@game/math/index.js';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import { AppRoot } from '@game/engine/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Vector3 } from 'hilo3d';

/**
 * Simple test for modular windows
 */
class MeshGraphGeomentryTest extends Thingy {
	/**
	 * .
	 */
	async initCallback() {
		this.app = new AppRoot({
			graph: new MeshGraph(),
			debug: new MeshGraphDebug()
		});
		await this.app.initWithPreload();

		this.case1();
	}

	/**
	 * .
	 */
	case1() {
		const graph = this.app.get('graph');
		const debug = this.app.get('debug');
		const v = new Vector3(0, 0, 0);
		const size = 1;

		const a = graph.buildPoint(v.set(-size, 0, 0));
		const b = graph.buildPoint(v.set(0, 0, size));
		const c = graph.buildPoint(v.set(size, 0, 0));
		const d = graph.buildPoint(v.set(0, 0, -size));

		graph.buildTriangle(a, b, d);
		graph.buildTriangle(b, c, d);

		debug.redraw(graph);
	}
}

export default MeshGraphGeomentryTest;
