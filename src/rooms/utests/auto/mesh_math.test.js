/* eslint-disable no-magic-numbers, max-lines-per-function, max-classes-per-file, max-statements, max-nested-callbacks */
import { Point, Triangle, MeshGraph, MeshFacesHelper } from '@game/math/index.js';
import { Vector3 } from 'hilo3d';

const assert = require('assert');

describe('Mesh math', () => {
	describe('Base classes', () => {
		it('Point 1', () => {
			const p = new Point();

			p.pos.x = 10;

			const p2 = p.clone();

			assert.equal(p2.pos.x, 10);

			p.pos.x = 5;

			assert.equal(p2.pos.x, 10);
		});
		it('Segment 1', () => {
			const pa = new Point();
			const pb = new Point();

			pa.linkWith(pb);

			assert.ok(pa.segments[pb.id]);
		});
		it('Segment 2', () => {
			const pa = new Point();
			const pb = new Point();

			pa.linkWith(pb);

			assert.equal(pa.segments[pb.id], pa.linkWith(pb));
		});
		it('Triangle 1', () => {
			const tri = new Triangle();
			tri.calculate(new Point(), new Point(), new Point());
		});
		it('Triangle 2', () => {
			const tri = new Triangle();
			tri.calculate(new Point(), new Point(), new Point());
			tri.points.a.pos.x = 10;

			const tri2 = tri.clone();

			assert.ok(tri2.geometry !== tri.geometry);

			assert.equal(tri2.points.a.pos.x, 10);
		});
		it('Triangle 3', () => {
			const pa = new Point();
			const pb = new Point();
			const pc = new Point();
			const tri = new Triangle();
			pa.id = 'pa';
			pb.id = 'pb';
			pc.id = 'pc';

			tri.calculate(pa, pb, pc);

			assert.ok(pa.segments[pb.id]);
			assert.ok(pb.segments[pc.id]);
			assert.ok(pc.segments[pa.id]);

			assert.equal(pa.linkWith(pb).triangles.a, tri);
		});
		it('Triangle 4 (area)', () => {
			const tri = new Triangle();
			const a = new Point();
			a.pos.set(1, 0, 1);
			const b = new Point();
			b.pos.set(1, 0, -1);
			const c = new Point();
			c.pos.set(-1, 0, -1);
			tri.calculate(a, b, c);

			assert.equal(tri.geometry.area, 0.5);
		});
		it('Triangle 4.1 (area)', () => {
			const tri = new Triangle();
			const a = new Point();
			a.pos.set(0, 0, 0);
			const b = new Point();
			b.pos.set(1, 0, 0);
			const c = new Point();
			c.pos.set(2, 0, 0);
			tri.calculate(a, b, c);

			assert.equal(tri.geometry.area, 0);
		});
		it('Triangle 5 (recalculate)', () => {
			const tri = new Triangle();
			const a = new Point();
			const b = new Point();
			const c = new Point();
			tri.calculate(a, b, c);
			a.segments[b.id].setFlag(0, true);
			tri.calculate(a, b, c);
			assert.equal(a.segments[b.id].getFlag(0), true);
		});
	});
	describe('MeshGraph', () => {
		let graph = new MeshGraph();
		beforeEach(() => {
			graph = new MeshGraph();
			graph.init();
		});
		it('buildTriangle', () => {
			/*

			    b
			 		*
				/   \
			 * --- *
			a       c

			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();

			const triangle = graph.buildTriangle(a, b, c);

			assert.ok(triangle.points.a.triangles[triangle.id]);
		});
		it('removeTriangle', () => {
			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();

			const triangle = graph.buildTriangle(a, b, c);

			graph.removeTriangle(triangle.id);

			assert.ok(!a.segments[b.id]);
			assert.ok(!b.segments[c.id]);
			assert.ok(!c.segments[a.id]);
		});
		it('buildTriangle x2', () => {
			/*
			    b      d
			 		* --- *
				/   \ /
			 * --- *
			a       c
			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(b, d, c);

			// Two triangles (abc, bcd) shares same (bc) segment
			assert.equal(
				// trianglex.b is B (const b) point id
				trianglex.points.b.segments[c.id],
				// triangley.a is B (const b) point id
				triangley.points.a.segments[c.id]
			);

			const segment = b.segments[c.id];
			assert.equal(segment.triangles.a, trianglex);
			assert.equal(segment.triangles.b, triangley);

			assert.equal(trianglex.neighbors[triangley.id], segment);
		});
		it('buildTriangle x2 remove', () => {
			/*
			    b      d
			 		* --- *
				/   \ /
			 * --- *
			a       c
			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(b, d, c);

			graph.removeTriangle(triangley.id);

			const segment = b.segments[c.id];
			assert.equal(segment.triangles.a, trianglex);
			assert.equal(segment.triangles.b, null);

			assert.ok(!trianglex.neighbors[triangley.id]);
		});
		it('buildTriangle x3', () => {
			/*
       a      c      e
        * --- * --- *
					\ /   \ /
					 * --- *
					b       d
			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();
			const e = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(b, d, c);
			const trianglez = graph.buildTriangle(c, d, e);

			assert.ok(!trianglex.isTriangleNeighbor(trianglez));
			assert.ok(triangley.isTriangleNeighbor(trianglex));
			assert.ok(triangley.isTriangleNeighbor(trianglez));
		});
		it('areTrisNeighbors a', () => {
			/*
			    b
			 		*
				/   \
			 * --- * --- * d
			a       c\  /
                 * e
			*/
			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();
			const e = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(c, d, e);

			assert.ok(!trianglex.isTriangleNeighbor(triangley));
		});
		it('removeTriangle (one of linked)', () => {
			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();

			graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(b, d, c);

			graph.removeTriangle(triangley.id);

			//whole trianglex (a, b, c) segmens stay ontouched
			assert.ok(b.segments[c.id]);
		});
		it('clone', () => {
			const a = graph.buildPoint(new Vector3(0, 5, 0));
			const b = graph.buildPoint();
			const c = graph.buildPoint();

			const tri = graph.buildTriangle(a, b, c);

			const newgraph = graph.clone();

			a.pos.y = 10;

			assert.equal(newgraph.points.get(a.id).pos.y, 5);
			assert.ok(newgraph.triangles.get(tri.id) !== tri);
			assert.ok(newgraph.triangles.get(tri.id).points.a !== tri.points.a);
		});
	});
	describe('TriangleOperations', () => {
		let graph = new MeshGraph();
		beforeEach(() => {
			graph = new MeshGraph();
			graph.init();
		});

		it('shatterTriangle', () => {
			/*
			    b
			 		*
				/* d\
			 * --- *
			a       c
			*/

			//a triangle - dab
			//b triangle - dbc
			//c triangle - dca

			const a = graph.buildPoint(new Vector3(0, 0, -1));
			const b = graph.buildPoint(new Vector3(-1, 0, 1));
			const c = graph.buildPoint(new Vector3(1, 0, 1));
			const d = graph.buildPoint(new Vector3(0, 0, 0));
			const firsttri = graph.buildTriangle(a, b, c);
			const firstarea = firsttri.geometry.area;

			graph.operations.shatterTriangle(firsttri, d);

			const tris = Object.values(d.triangles);
			const atri = tris[0];
			const btri = tris[1];
			const ctri = tris[2];

			assert.equal(atri.points.c, d);
			assert.equal(btri.points.c, d);
			assert.equal(ctri.points.c, d);

			assert.equal(a.segments[d.id], atri.segments.c);
			assert.equal(b.segments[d.id], btri.segments.c);
			assert.equal(c.segments[d.id], ctri.segments.c);

			assert.ok(a.segments[d.id].triangles.a);
			assert.ok(a.segments[d.id].triangles.b);
			assert.ok(b.segments[d.id].triangles.a);
			assert.ok(b.segments[d.id].triangles.b);
			assert.ok(c.segments[d.id].triangles.a);
			assert.ok(c.segments[d.id].triangles.b);

			assert.equal(firstarea, atri.geometry.area + btri.geometry.area + ctri.geometry.area);
		});
		it('...goin deep: shatterTriangle few times', () => {
			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();

			// shatter each shattered triangle 5 times (364 operations)
			const maxDepth = 5;
			/**
			 * @param {Triangle} tri .
			 * @param {number} [depth] depth limit
			 */
			function shatter(tri, depth = 0) {
				if (depth > maxDepth) {
					return;
				}
				const d = graph.buildPoint();

				graph.operations.shatterTriangle(tri, d);

				const tris = Object.values(d.triangles);
				const atri = tris[0];
				const btri = tris[1];
				const ctri = tris[2];

				assert.equal(atri.points.c, d);
				assert.equal(btri.points.c, d);
				assert.equal(ctri.points.c, d);

				const nd = depth + 1;
				shatter(atri, nd);
				shatter(btri, nd);
				shatter(ctri, nd);
			}

			shatter(graph.buildTriangle(a, b, c));
		});
		it('flipTriangles', () => {
			/*
			 1.
			    b
			 		*
				/ X \    ···· -> X, Y - triangle names
			a* --- *c
			  \ Y /
				  *
					d

			2.
			    b
			 		*
				/ | \
			a* X|Y *c
			  \ | /
				  *
					d
			*/
			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();

			graph.buildTriangle(a, b, c);
			graph.buildTriangle(a, c, d);

			graph.operations.flipTriangles(a.segments[c.id]);

			assert.ok(b.segments[d.id]);
			assert.ok(!a.segments[c.id]);
		});
		it('splitSegment', () => {
			/*
			 1.
			    b
			 		*
				/   \
			a* --- *c
			  \   /
				  *
					d

			 2.
			    b
			 		*
				/ | \
			a* -*- *c
			  \ |p/
				  *
					d
			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();
			const p = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(a, c, d);

			const segment = trianglex.neighbors[triangley.id];
			graph.operations.splitSegment(segment, p);

			// a points links
			assert.ok(a.segments[b.id]);
			assert.ok(a.segments[p.id]);
			assert.ok(a.segments[d.id]);
			assert.ok(!a.segments[c.id]); //old connection

			// p points links
			assert.ok(p.segments[a.id]);
			assert.ok(p.segments[b.id]);
			assert.ok(p.segments[c.id]);
			assert.ok(p.segments[d.id]);
		});
		it('disposeSegment', () => {
			/*
			    b
			 		*
				/ | \
			a* -*- *c
			  \ |p/
				  *
					d
			*/

			const a = graph.buildPoint();
			const b = graph.buildPoint();
			const c = graph.buildPoint();
			const d = graph.buildPoint();
			const p = graph.buildPoint();

			const trianglex = graph.buildTriangle(a, b, c);
			const triangley = graph.buildTriangle(a, c, d);

			const segment = trianglex.neighbors[triangley.id];
			graph.operations.splitSegment(segment, p);
			graph.operations.disposeSegment(p, c);

			assert.ok(a.segments[c.id]);
			assert.ok(!a.segments[p.id]);
			assert.ok(!b.segments[p.id]);
			assert.ok(!c.segments[p.id]);
			assert.ok(!d.segments[p.id]);
			assert.ok(!Object.keys(p.segments).length);
			assert.equal(a.segments[b.id].triangles.a, b.segments[c.id].triangles.a);
		});
	});
});
