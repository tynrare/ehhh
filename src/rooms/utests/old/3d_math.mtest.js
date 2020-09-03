/* eslint-disable max-lines-per-function, no-magic-numbers */
/**
 * @file 3d_math.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { AppRoot, HiloLineRender } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Mesh, Geometry, SphereGeometry, BasicMaterial, Color, Vector3 } from 'hilo3d';
import {
	pos2dto3d,
	getIntersectPoint,
	posOnPlane,
	projectOnPlane,
	projectOnLine,
	projectLineOnLine,
	triangleNormal
} from '@core/math.js';

/**
 * Simple test for modular windows
 */
class Math3dTest extends Thingy {
	app = new AppRoot();

	/**
	 * .
	 */
	initCallback() {
		this.app.init();
		this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		this.line = this.app.get('game').set('line', new HiloLineRender());

		this.case1();
		this.case2();
		this.case3();
		this.case4();
		this.case5();
		this.case6();
	}

	/**
	 * Проекция точки на треугольник c получением позиции в 3d пространстве.
	 *
	 * Expexted: точка на позиции 5, 7, 5, от которой идет линия к другой точке,
	 * находящейся на треугольнике
	 */
	case1() {
		const triangle = this.makeMesh();

		const origin = new Vector3(0, 0, 5);

		const tri1 = new Vector3(0, 0, 0).add(origin);
		const tri2 = new Vector3(10, 0, -5).add(origin);
		const tri3 = new Vector3(0, 10, -10).add(origin);

		triangle.geometry.addFace(tri1.elements, tri2.elements, tri3.elements);

		const normal = triangleNormal(tri1, tri2, tri3).clone();

		const point = new Vector3(5, 7, 5);
		const onplane = projectOnPlane(point, origin, normal).clone();

		this.makeSphere().position.copy(point);
		this.makeSphere().position.copy(onplane);

		this.line.addLine(point, onplane);
	}

	/**
	 * Проекция точки на треугольник c получением позиции в 2d пространстве
	 *
	 * Expexted: точка на позиции 5, 7, 5, от которой идет линия к другой точке,
	 * находящейся на позиции 5, 0, 5 (Проекции на поверхность)
	 */
	case2() {
		const point = new Vector3(5, 7, 5);
		const normal = new Vector3(0, 1, 0).normalize();
		const origin = new Vector3(0, 1, 0);
		const p = posOnPlane(point, origin, normal);
		const p3d = pos2dto3d(p, origin, normal);

		this.makeSphere().position.copy(p3d);

		this.line.addLine(point, p3d);
	}

	/**
	 * Точка проектится на плейн другим способом
	 */
	case3() {
		const origin = new Vector3(0, 0, 5);

		const tri1 = new Vector3(0, 0, 0).add(origin);
		const tri2 = new Vector3(10, 0, -5).add(origin);
		const tri3 = new Vector3(0, 10, -10).add(origin);

		const normal = triangleNormal(tri1, tri2, tri3);

		const point = new Vector3(5, 6, 5);

		const p = posOnPlane(point, origin, normal);
		const p3d = pos2dto3d(p, origin, normal);

		this.makeSphere().position.copy(p3d);
	}

	/**
	 * Два 3d отрезка пересекаются на плейне
	 */
	case4() {
		const origin = new Vector3(0, 0, 5);

		const tri1 = new Vector3(0, 0, 0).add(origin);
		const tri2 = new Vector3(10, 0, -5).add(origin);
		const tri3 = new Vector3(0, 10, -10).add(origin);

		const normal = triangleNormal(tri1, tri2, tri3);

		const a1 = posOnPlane(new Vector3(2, 2, 5), origin, normal);
		const a2 = posOnPlane(new Vector3(8, 8, 5), origin, normal);
		const b1 = posOnPlane(new Vector3(2, 8, 5), origin, normal);
		const b2 = posOnPlane(new Vector3(8, 2, 5), origin, normal);
		const p = getIntersectPoint(a1, a2, b1, b2);

		this.makeSphere().position.copy(pos2dto3d(p, origin, normal));
		this.line.addLine(pos2dto3d(a1, origin, normal), pos2dto3d(a2, origin, normal));
		this.line.addLine(pos2dto3d(b1, origin, normal), pos2dto3d(b2, origin, normal));
	}

	/**
	 * Проекция точки на отрезок
	 */
	case5() {
		const a = new Vector3(6, 5, 6);
		const b = new Vector3(10, 6, 10);
		const p = new Vector3(10, 7, 7);

		const projected = projectOnLine(a, b, p);

		this.line.addLine(a, b);
		this.makeSphere().position.copy(p);
		this.makeSphere().position.copy(projected);
	}

	/**
	 * Проекция отрезка на отрезок
	 */
	case6() {
		const a1 = new Vector3(-10, 1, 0);
		const b1 = new Vector3(20, 1, 0);
		const a2 = new Vector3(-5, 1, -10);
		const b2 = new Vector3(5, 1, 10);

		const center = projectLineOnLine(a1, b1, a2, b2);

		this.line.addLine(a1, b1);
		this.line.addLine(a2, b2);
		this.app.render.debug.makeSphere().position.copy(center);
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
				lightType: 'NONE',
				wireframe: true
			})
		});

		this.app.render.stage.addChild(mesh);

		return mesh;
	}
}

export default Math3dTest;
