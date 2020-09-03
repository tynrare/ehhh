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
import { Vector3 } from 'hilo3d';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
import { Point, MeshGraph } from '@game/math/index.js';
import SimpleTestInputs from '@app/page_helpers/simple_test_inputs.js';
import { PERFECT_NUMBER, projectOnPlane } from '@core/math.js';

const PI2 = Math.PI * 2;

const v0 = new Vector3();
const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();

/**
 * Math logic explanation
 * See case 3 for real classes logic usage
 */
class MeshGraphMathCase2 extends Thingy {
	app = new AppRoot();

	/**
	 * .
	 */
	initCallback() {
		this.app.init();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		this.line = this.app.get('game').set('line', new HiloLineRender());

		this.app.set(
			'config',
			new SimpleTestInputs({
				speed: 0.01,
				config: {
					ranges: {
						speed: {
							max: 0.1,
							min: -0.1,
							key: 'speed'
						}
					}
				}
			})
		);

		this.t = 0;
		this.app.events.on('/env/time.frame', () => {
			this.update();
		});
	}

	/**
	 * .
	 */
	update() {
		const r = 2;
		const debug = this.app.render.debug;
		debug.clearLines();
		const sphere = this.touch('sphere1', () => debug.makeSphere(2));
		const center = this.touch('center1', () => this.prepare());

		const speed = PERFECT_NUMBER * this.app.path('config/speed');
		this.t += speed;
		sphere.position.set(Math.sin(this.t) * r, 2, Math.cos(this.t) * r);

		this.calculate(center, sphere.position);
	}

	/**
	 * @returns {Point} center point
	 */
	prepare() {
		const debug = this.app.render.debug;
		const graphdebug = this.app.touch('debug', () => new MeshGraphDebug());
		const graph = new MeshGraph();
		this.graph = graph;

		const origin = new Vector3(0, 1, 0);
		const a = graph.buildPoint(new Vector3(0, 0, 0).add(origin));
		const points = [];
		const TOTAL_POINTS = 10;
		const R = 2;
		const h = 1;
		const waves = 2;
		for (let i = 0; i < TOTAL_POINTS; i++) {
			const r = 1 + Math.abs(Math.sin((i / TOTAL_POINTS) * Math.PI)) * R;
			const pos = v0.set(
				Math.sin((i / TOTAL_POINTS) * PI2) * r,
				Math.sin((i / TOTAL_POINTS) * PI2 * waves) * h,
				Math.cos((i / TOTAL_POINTS) * PI2) * r
			);

			const c = graph.buildPoint(pos.add(origin));
			const b = points[points.length - 1];
			if (b) {
				graph.buildTriangle(a, b, c);
			}

			points.push(c);

			// --- debug
			debug.makeSphere(0.5).position.copy(c.pos);
		}
		graph.buildTriangle(a, points[points.length - 1], points[0]);

		graphdebug.redraw(graph);

		return a;
	}

	/**
	 * @param {Point} point .
	 * @param {Vector3} target .
	 * @returns {Vector3} cross point
	 */
	calculate(point, target) {
		const debug = this.app.render.debug;
		const sphere2 = this.touch('sphere2', () => debug.makeSphere(0.5));
		const sphere3 = this.touch('sphere3', () => debug.makeSphere(1, 'matrix'));
		const sphere4 = this.touch('sphere4', () => debug.makeSphere(1, 'bright'));
		let result = null;

		// 0. Target in world coordinates

		for (const k in point.triangles) {
			const triangle = point.triangles[k];
			const arranged = triangle.arrangedPoints(point);

			const a = point;
			const b = arranged[1];
			const c = arranged[2];

			// 1. Project all position into point coords
			const pt = v2.copy(projectOnPlane(target, a.pos, a.normal)); // <- target in local coords
			sphere2.position.copy(pt);
			debug.drawLine(pt, target, 'accent');
			const pb = v0.copy(projectOnPlane(b.pos, a.pos, a.normal));
			const pc = v1.copy(projectOnPlane(c.pos, a.pos, a.normal));
			debug.drawLine(pb, pc, 'matrix');

			const px = this.graph.operations.findCevianForTriangle(
				a.normal,
				a.pos,
				pb,
				pc,
				v3.copy(pt).sub(a.pos).normalize()
			);
			if (px) {
				sphere3.position.copy(px); // <- point on local coords ring
				debug.drawLine(pt, px, 'accent');

				const bxlen = pb.dist(px);
				const bclen = pb.dist(pc);
				const scale = bxlen / bclen;
				const fin = v0.copy(b.pos).scaleAndAdd(scale, v1.copy(c.pos).sub(b.pos));
				sphere4.position.copy(fin); // <- point in world coords
				debug.drawLine(px, fin, 'accent');
				debug.drawLine(a.pos, fin, 'bright');

				result = fin;
			}
		}

		cgn.assert.ok(result);

		return result;
	}
}

export default MeshGraphMathCase2;
