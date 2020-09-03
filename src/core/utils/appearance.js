/* eslint-disable max-classes-per-file */
/**
 * Stuff related with application appearance constants
 *
 * @file appearance.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */

import { Thingy } from '@core/exchange/index.js';
import { Color } from 'hilo3d';

/**
 * Pallete data
 */
class Palette extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			background: '#293b49',
			first: '#bfc3c6',
			attention: '#d9243c',
			bright: '#77d6c1',
			dark: '#030710',
			accent: '#d1401f',
			matrix: '#458239',
			neutral: '#ffffe4',
			'neutral_second': '#ffe0dc',
			'neutral_dark': '#bfc3c6'
		};
	}

	/**
	 * Creates new Color object
	 *
	 * @param {string} color .
	 * @returns {Color} new Color object
	 */
	getColor(color) {
		return new Color().fromHEX(this.get(color));
	}
}

/**
 * Application Appearance data
 */
class Appearance extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			palette: new Palette()
		};
	}

	/**
	 * @returns {Palette} .
	 */
	get palette() {
		return this.properties.palette;
	}

	/**
	 * this.palette.getColor alias
	 *
	 * @param {string} color .
	 * @returns {Color} new Color object
	 */
	getColor(color) {
		return this.palette.getColor(color);
	}
}

export default Appearance;
export { Appearance, Palette };
