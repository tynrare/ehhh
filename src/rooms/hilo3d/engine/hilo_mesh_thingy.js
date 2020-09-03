/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */
import { Mesh } from 'hilo3d';
import HiloLineRender from './hilo_line_render.js';
import { Thingy } from '@core/exchange/index.js';

/**
 * hilo3d Node wrapper. Does two things:
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 * @property {boolean} [debugNormalsEnabled=false] draws mesh normals
 */
class HiloMeshThingy extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			debugNormalsEnabled: false
		};
	}

	/**
	 * Creates node
	 */
	postinitCallback() {
		//code debt по идее нельзя получать доступ к функции "какого-то там класса",
		//в идеале копирование должно происходить напрямую из другого HiloMeshThingy
		const mesh = this.path('/resources').getMeshClone(this.get('name'));
		this.set('hilo', mesh);

		(this.owner?.hilo ?? this.path('/render').stage).addChild(mesh);

		if (this.properties.debugNormalsEnabled) {
			this.enableDebugNormals();
		}
	}

	/**
	 * Displays normals directions
	 */
	enableDebugNormals() {
		cgn.delays.immediate(() => {
			/* eslint-disable no-magic-numbers */
			this.properties.debugNormalsEnabled = true;
			if (this.get('debugLinesThingy')) {
				return;
			}
			const lines = this.set('debugLinesThingy', new HiloLineRender());

			const g = this.hilo.geometry;
			const indices = g.indices;
			const len = indices.realLength;

			for (let i = 0; i < len; i += 3) {
				const idx = indices.get(i);
				const p = g.vertices.get(idx).clone();
				const n = g.normals.get(idx).clone();
				lines.addLine(p, n.add(p));
			}
			/* eslint-enable no-magic-numbers */
		});
	}

	/**
	 * Displays normals directions
	 */
	disableDebugNormals() {
		this.properties.debugNormalsEnabled = false;
		this.del('debugLinesThingy', true);
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
}

export default HiloMeshThingy;
