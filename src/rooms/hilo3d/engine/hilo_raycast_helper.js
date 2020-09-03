/**
 * @file hilo_raycast_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */

import { Thingy } from '@core/exchange/index.js';
import { Matrix4, Mesh, Ray, Vector2, Vector3 } from 'hilo3d';

/**
 * @typedef Hit
 * @property {boolean} hit
 * @property {Vector3} [pos]
 * @property {Vector3} [normal]
 * @property {Array<number>} [face] indexes of vertices for face
 */

/**
 * Hilo3d raycast helper
 */
class HiloRaycastHelper extends Thingy {
	ray = new Ray();

	/**
	 * #chain
	 *
	 * @param {Vector3} origin origin point
	 * @param {Vector3} direction direction normal
	 * @returns {HiloRaycastHelper} this
	 */
	setup(origin, direction) {
		this.ray.origin.copy(origin);
		this.ray.direction.copy(direction).normalize();

		return this;
	}

	/**
	 * #chain
	 *
	 * @param {Vector2} pos screen coordinates
	 * @returns {HiloRaycastHelper} this
	 */
	setupFromCamera(pos) {
		const stage = this.path('/render/stage');
		this.ray.fromCamera(this.path('/render/camera').hilo, pos.x, pos.y, stage.width, stage.height);

		return this;
	}

	/**
	 * you have to setup() ray first
	 *
	 * @param {Mesh} mesh mesh to check for ray
	 * @returns {Hit} hit result
	 */
	raycast(mesh) {
		const hit = { hit: false };
		if (!mesh.visible || !mesh.geometry) {
			return hit;
		}
		const worldMatrix = mesh.worldMatrix;
		const tempMatrix4 = this.cache.matrix4_0.invert(worldMatrix);
		this.ray.transformMat4(tempMatrix4);

		const vertices = mesh.geometry.vertices;

		if (!vertices) {
			return hit;
		}

		const points = this._rayIntersects(mesh);

		if (points.length) {
			hit.hit = true;
			hit.pos = points[0].pos;
			hit.normal = points[0].normal;
			hit.face = points[0].face;
		}

		return hit;
	}

	/* eslint-disable no-magic-numbers, max-statements, camelcase */
	/**
	 * @param {Mesh} mesh .
	 * @returns {Array<Hit>} sorted hits
	 */
	_rayIntersects(mesh) {
		const ray = this.ray;
		const worldMatrix = mesh.worldMatrix;
		const vertices = mesh.geometry.vertices;
		const indices = mesh.geometry.indices;
		const triangle = [];
		const len = indices.realLength;

		const points = [];
		for (let i = 0; i < len; i += 3) {
			/**
			 * @type {Array<number>}
			 */
			const face = [indices.get(i), indices.get(i + 1), indices.get(i + 2)];
			const p0 = this.cache.vec3_0.copy(vertices.get(face[0]));
			const p1 = this.cache.vec3_1.copy(vertices.get(face[1]));
			const p2 = this.cache.vec3_2.copy(vertices.get(face[2]));

			triangle[0] = p0.elements;
			triangle[1] = p1.elements;
			triangle[2] = p2.elements;
			/**
			 * @type {Vector3}
			 */
			const pos = ray.intersectsTriangle(triangle);

			if (pos) {
				const v0 = p0.sub(p1); //                           V0 = P0-P1
				const v1 = p2.sub(p1); //                           V1 = P2-P1
				const normal = v1.cross(v0).normalize().clone(); // N = cross (V1, V0)

				pos.transformMat4(worldMatrix);
				points.push({
					hit: true,
					pos,
					// it's important to clone that in new object
					normal: normal.clone(),
					face
				});
			}
		}

		points.sort((a, b) => {
			return ray.origin.squaredDistance(a.pos) - ray.origin.squaredDistance(b.pos);
		});

		return points;
	}

	cache = {
		vec3_0: new Vector3(),
		vec3_1: new Vector3(),
		vec3_2: new Vector3(),
		matrix4_0: new Matrix4()
	};
	/* eslint-enable no-magic-numbers, max-statements, camelcase */
}

export default HiloRaycastHelper;
