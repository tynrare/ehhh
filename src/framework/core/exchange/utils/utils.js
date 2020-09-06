/**
 * @file utils.js
 * @author tynrare
 * @version 1
 * @module Exchange/Utils
 */

import NanoThingy from '../core/nano_thingy.js';

/**
 * @param {NanoThingy} thingy .
 * @returns {NanoThingy} root owner
 */
export function root(thingy) {
	let node = thingy;
	while (node.owner) {
		node = node.owner;
	}

	return node;
}

/* eslint-disable complexity */
/**
 * @param {NanoThingy} thingy .
 */
export function initChildren(thingy) {
	for (const k in thingy.properties) {
		const v = thingy.properties[k];
		if (v && v.init) {
			v.init(thingy);
		}
	}
	for (const k in thingy.cache) {
		const v = thingy.cache[k];
		if (v && v.init) {
			v.init(thingy);
		}
	}
}

/**
 * Finds properties by pass. Uses standart pathes
 *
 * @param {NanoThingy} thingy thingy to operate on
 * @param {string} path path to access to
 * @returns {*} any property
 * @example
 * t.path('/node'); finds root.node
 * t.path('./node'); finds t.node
 * t.path('node'); same as above
 * t.path('../node'); t.owner.node
 * t.path('* /node'); finds closes property name somewhere in owner
 */
export function traverse(thingy, path) {
	let p = path;
	const move = p.substring(0, 2);

	let next = null;

	// #draft
	switch (move) {
		case '..': //step back
			next = thingy.owner;
			p = p.substring(p.indexOf('/') + 1);
			break;
		case '*/': {
			//find closest prop
			next = thingy.owner;
			p = p.substring(p.indexOf('/') + 1);
			const slashpos = p.indexOf('/');
			const prop = slashpos < 0 ? p : p.substring(0, slashpos);
			while (next && next.get(prop) === null) {
				next = next.owner;
			}
			break;
		}
		case './': //step forward
			p = p.substring(p.indexOf('/') + 1);
		// falls through
		default: {
			const slashpos = p.indexOf('/');
			if (slashpos < 0) {
				return thingy.get(p);
			} else if (slashpos === 0) {
				//step to root
				next = root(thingy);
			} else {
				next = thingy.get(slashpos < 0 ? p : p.substring(0, slashpos));
			}
			p = p.substring(p.indexOf('/') + 1);
		}
	}
	if (!next) {
		throw new Error(`no node ('${p}') found for ${path} path`);
	}

	return next.path(p);
}
/* eslint-enable complexity */
