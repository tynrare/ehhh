/* eslint-disable no-magic-numbers */
/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */
import { BasicMaterial, Geometry, Mesh, Color, constants, Vector3 } from 'hilo3d';
import { Thingy } from '@core/exchange/index.js';

/**
 * hilo3d line draw
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 */
class HiloLineRender extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return { color: '#FF0000' };
	}

	/**
	 * Creates node
	 */
	initCallback() {
		const material = new BasicMaterial({
			diffuse: new Color().fromHEX(this.get('color')),
			lightType: 'NONE'
		});
		const geometry = new Geometry({ mode: constants.LINES });

		const mesh = new Mesh({
			geometry,
			material
		});

		this.set('hilo', mesh);

		this.path('/render').stage.addChild(mesh);
	}

	/**
	 * #bug: erases addPoints()'s draw
	 * #chain
	 *
	 * @param {Vector3} a line point start
	 * @param {Vector3} b line point end
	 * @returns {HiloLineRender} this
	 */
	addLine(a, b) {
		const g = this.hilo.geometry;
		g.addLine(a.elements, b.elements);

		return this;
	}

	/**
	 * #chain
	 *
	 * @param {Vector3} a line next point
	 * @returns {HiloLineRender} this
	 */
	addPoint(a) {
		const g = this.hilo.geometry;
		const c = g.indices?.count || 0;
		if (c) {
			const data = g.vertices.data;
			g.addLine([data[data.length - 3], data[data.length - 2], data[data.length - 1]], a.elements);
		} else {
			g.addPoints(a.elements);
		}

		return this;
	}

	/**
	 * Removes points info
	 */
	clear() {
		const geometry = new Geometry({ mode: constants.LINES });
		this.hilo.geometry = geometry;
	}

	/**
	 * Removes node
	 */
	disposeCallback() {
		this.hilo.removeFromParent();
	}

	/**
	 * @returns {Mesh} .
	 */
	get hilo() {
		return this.get('hilo');
	}

	/**
	 * @returns {Color} .
	 */
	get color() {
		return this.hilo.material.diffuse;
	}

	/**
	 * @param {Color} c .
	 */
	set color(c) {
		this.hilo.material.diffuse = c;
	}
}

export default HiloLineRender;
