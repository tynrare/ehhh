/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/Speedruns
 */

import { Thingy } from '@core/exchange/index.js';
import { load } from '@core/utils/http.js';
import alea from 'alea';

/**
 * Simple test for modular windows
 */
class SpeedrunRoom extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		// #draft
		const doc = document.getElementById('speedrun-a-data-root');

		document.getElementById('speedrun-a-button-generate').onclick = this.generate.bind(this);

		this.content = document.getElementById('speedrun-a-data-root');
		doc.appendChild(this.content);
	}

	/**
	 * .
	 */
	generate() {
		this.content.innerHTML = '';
		const input = document.getElementById('speedrun-a-seed-input');
		const seed = input.value;
		input.value = Number(input.value) + 1;
		const rand = alea(seed);

		// #draft
		const source = document.getElementById('speedrun-a-source-input').value;
		//const source = '/ehhh/src/rooms/sketches/speedruns/a/data.json';

		load(source, (json) => {
			const data = JSON.parse(json);

			let index = 0;
			let summary = '';

			for (const k in data) {
				const arr = data[k];
				const len = arr.length - 1;
				const val = rand();
				const result = arr[Math.round(val * len)];
				this.appendCategoty(k, result, index++);
				summary += `${k}: ${result}, `;
			}

			this.appendCategoty('...Summary', summary, ++index);
		});
	}

	/**
	 * @param {string} name .
	 * @param {string} result .
	 * @returns {HTMLElement} .
	 */
	appendCategoty(name, result, index) {
		const el = document.createElement('div');
		el.classList.add('appear-anim');
		el.style.animationDelay = `${index++ * 0.1}s`;

		el.innerHTML = `<H2>${name}:</H2><mark>${result}</mark>`;

		this.content.appendChild(el);

		return el;
	}

	/**
	 * .
	 */
	disposeCallback() {
		//..
	}
}

export default SpeedrunRoom;
