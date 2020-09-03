/**
 * @file shelf_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

import { IdHelper } from '../utils/id_helper.js';
import { NanoThingy } from './nano_thingy.js';

/**
 * Event management based on Thingy
 */
class ShelfThingy extends NanoThingy {
	/**
	 * @param {object|NanoThingy|*} item item to add
	 * @returns {string} given id
	 */
	add(item) {
		let id = item.id;
		id = this.getIdsHelper().genSuitableId(id, this.properties);
		this.set(id, item, { forceScope: this.properties });

		return id;
	}

	/**
	 * @param {NanoThingy|string} thingy reference or id
	 */
	remove(thingy) {
		this.del(typeof thingy === 'string' ? thingy : thingy.id);
	}

	/**
	 * @returns {IdHelper} .
	 */
	getIdsHelper() {
		return this.touch('idsHelper', () => new IdHelper());
	}
}

export default ShelfThingy;
export { ShelfThingy };
