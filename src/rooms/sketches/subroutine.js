/**
 * @file subroutine.js
 *
 * @author tynrare
 * @version 1
 * @module Sketches
 */
/* eslint-disable global-require, camelcase, max-len, max-statements */

// #draft scope
import commands from './COMMANDS.md';
import cgn from '@core/core_namespace.js';

import { Thingy } from '@core/exchange/index.js';

const cases = {
	Private: require('./private/room.js'),
	ArtGuidelines: require('./art_guidelines/app.js'),
};

/**
 * Class to run manual tests
 */
class SketchesSubroutine extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		this.listenHash();
		window.onhashchange = this.listenHash.bind(this);
	}

	/**
	 * #draft
	 */
	listenHash() {
		const urlParams = new URLSearchParams(window.location.search);
		const h = window.location.hash.substr(1);

		this.del('active');

		if (h.length > 0) {
			document.getElementById('ehhh-app-content-root').innerHTML = '';

			const Case = cases[h].default;

			this.set('active', new Case());
		} else {
			document.getElementById('ehhh-app-content-root').innerHTML = commands;
		}
	}
}

window.cgn = cgn;

const instance = new SketchesSubroutine();
instance.init();
