/**
 * @file id_helper.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

import { NanoThingy } from '../core/nano_thingy.js';

const RUNTIME_PROP_PREFIX = '*';

/**
 * Event management based on Thingy
 */
class IdHelper extends NanoThingy {
	/**
	 * returns next id value
	 *
	 * @returns {number} new id
	 */
	nextId() {
		return this.set('uids_generated', this.touch('uids_generated', () => -1) + 1);
	}

	/**
	 * Finds id that isn't in scope
	 * #pure
	 *
	 * @param {string} id id to validate and build from
	 * @param {object|NanoThingy} [scope=this] scope to check
	 * @returns {string} id that doesn't conflict in scope
	 */
	genSuitableId(id = null, scope = this) {
		let newid = id?.length > 0 && id;
		const nextid = this.nextId();
		while (!newid || scope[newid]) {
			newid = RUNTIME_PROP_PREFIX + (newid || nextid);
		}

		return newid;
	}
}

export default IdHelper;
export { IdHelper };
