/* eslint-disable no-undefined */
/**
 * @file flags_mixin.js
 * @author tynrare
 * @version 1
 * @module Exchange/Utils
 */

/**
 * NanoThingy mixin
 *
 * @mixin
 */
const FlagsMixin = {
	/**
	 * Access boolean flags storage
	 *
	 * @param {number} index flag index
	 * @returns {boolean} flag value
	 */
	getFlag(index) {
		return Boolean(this.properties.flags && this.properties.flags & (1 << index));
	},

	/**
	 * Set flag value
	 *
	 * @param {number} index flag index
	 * @param {boolean} value flag value
	 */
	setFlag(index, value) {
		// Чот туплю, это же можно без if/else сделать?
		if (value) {
			this.properties.flags |= 1 << index;
		} else {
			this.properties.flags &= ~(1 << index);
		}
	},

	/**
	 * Toggle flag value
	 *
	 * @param {number} index flag index
	 */
	toggleFlag(index) {
		this.properties.flags ^= 1 << index;
	},

	/**
	 * Triggers flag only once
	 * #interface 1
	 *
	 * @param {number} index flag index
	 * @returns {boolean} returns true if flag was false
	 */
	triggerFlag(index) {
		const result = !this.getFlag(index);
		this.setFlag(index, true);

		return result;
	}
};

export default FlagsMixin;
