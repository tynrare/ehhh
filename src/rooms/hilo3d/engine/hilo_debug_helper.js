import { Thingy } from '@core/exchange/index.js';
import HiloLineRender from './hilo_line_render.js';
import { Vector3, Node, Mesh, SphereGeometry, BasicMaterial } from 'hilo3d';
import { cache, DEFAULT_GEOM_NORMALS_SIZE } from '@core/math.js';

/**
 * Assists with debug primitives
 */
class HiloDebugHelper extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			geometry: new Thingy(),
			materials: new Thingy(),
			lines: new Thingy(),
			hilo: new Node({ name: 'debug' })
		};
	}

	/**
	 * .
	 */
	initCallback() {
		this.owner.stage.addChild(this.hilo);
	}

	/**
	 * Removes node
	 */
	disposeCallback() {
		this.hilo.removeFromParent();
	}

	/**
	 * Removes all debug data
	 */
	cleanup() {
		this.hilo.removeFromParent();
		this.set('hilo', new Node());
		this.owner.stage.addChild(this.hilo);
		this.clearLines();
	}

	/**
	 * @param {Vector3} normal .
	 * @param {Vector3} pos .
	 * @param {string} color name
	 */
	drawNormal(normal, pos, color = 'matrix') {
		const line = this.properties.lines.touch(color, () => {
			return new HiloLineRender({ color: cgn.appearance.palette.get(color) });
		});

		line.addLine(pos, cache.vec3.v0.copy(normal).scale(DEFAULT_GEOM_NORMALS_SIZE).add(pos));
	}

	/**
	 * @param {Vector3} a .
	 * @param {Vector3} b .
	 * @param {string} color name
	 */
	drawLine(a, b, color = 'matrix') {
		const line = this.properties.lines.touch(color, () => {
			return new HiloLineRender({ color: cgn.appearance.palette.get(color) });
		});

		line.addLine(a, b);
	}

	/**
	 * @param {string} color name
	 */
	clearLine(color) {
		const line = this.properties.lines.get(color);
		if (line) {
			line.clear();
		}
	}

	/**
	 * .
	 */
	clearLines() {
		for (const color in this.properties.lines.cache) {
			this.clearLine(color);
		}
	}

	/**
	 * @param {number} [radius=1] radius scale
	 * @param {string} [color='attention'] .
	 * @returns {Mesh} .
	 */
	makeSphere(radius = 1, color = 'attention') {
		const mesh = new Mesh({
			useInstanced: true,
			geometry: this.properties.geometry.touch(radius, () => {
				return new SphereGeometry({
					radius: radius * DEFAULT_GEOM_NORMALS_SIZE,
					heightSegments: 4,
					widthSegments: 4
				});
			}),
			material: this.properties.materials.touch(color, () => {
				return new BasicMaterial({
					lightType: 'NONE',
					diffuse: cgn.appearance.getColor(color)
				});
			})
		});

		this.hilo.addChild(mesh);

		return mesh;
	}

	/**
	 * @returns {Node} .
	 */
	get hilo() {
		return this.properties.hilo;
	}
}

export default HiloDebugHelper;
