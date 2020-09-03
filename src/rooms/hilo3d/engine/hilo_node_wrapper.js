/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */
import { Node } from 'hilo3d';
import { Thingy } from '@core/exchange/index.js';

/**
 * hilo3d Node wrapper. Does two things:
 */
class HiloNodeWrapper extends Thingy {
	/**
	 * Creates node
	 */
	initCallback() {
		const container = new Node({ name: this.get('id') });
		this.set('_hilo', container, { pointer: true });

		(this.owner?.hilo ?? this.path('/render').stage).addChild(container);
	}

	/**
	 * Removes node
	 */
	disposeCallback() {
		this.hilo.removeFromParent();
	}

	/**
	 * @returns {Node} .
	 */
	get hilo() {
		return this.get('_hilo');
	}
}

export default HiloNodeWrapper;
