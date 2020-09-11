/**
 * @file dom_element_thingy.js
 *
 * @author tynrare
 * @version 3
 * @module Rooms/HTML
 */

import { Thingy } from '@core/exchange/index.js';

/**
 * Thingy to control html element lifecycle
 * Id's and Thingies tree reflects dom tree
 *
 * properties
 *
 * @class
 * @property {string?} [id] dom element id
 * @property {string} [class='div'] dom element class
 * @property {string?} [parentId] parent dom element id
 * @property {Element} [_div] dom element ref
 */
class DomElementThingy extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			parentId: 'ehhh-app-content-root'
		};
	}

	/**
	 * Creates page dom. div by default
	 */
	preinitCallback() {
		const container = document.createElement(this.touch('class', () => 'div'));
		if (this.get('id')) {
			container.id = this.get('id');
		}
		this.set('div', container);
		const parentId = this.get('parentId') ?? this.owner?.get('id');
		if (parentId) {
			this.set('parentId', parentId);
			document.getElementById(parentId).appendChild(container);
		} else {
			document.body.appendChild(container);
		}
	}

	/**
	 * Cleanups data
	 */
	disposeCallback() {
		const div = this.get('div');
		div.parentNode.removeChild(div);
	}
}

export default DomElementThingy;
