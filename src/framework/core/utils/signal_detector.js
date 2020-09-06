/**
 * @file signal_detector.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */

import { Thingy } from '@core/exchange/index.js';

/**
 * Detects signal edges
 */
class SignalDetector extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			value: false
		};
	}

	/**
	 * @param {boolean} value signal value
	 * @returns {boolean} true if value not equal prev value
	 * @fires SignalDetector#trigger
	 */
	step(value) {
		const old = this.properties.value;
		this.properties.value = value;

		const trigger = old !== this.properties.value;

		if (trigger) {
			this.events.emit('trigger', value);
		}

		return trigger;
	}
}

export default SignalDetector;
