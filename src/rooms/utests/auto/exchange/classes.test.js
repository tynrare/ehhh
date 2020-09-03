/* eslint-disable max-lines-per-function, max-classes-per-file, max-statements, max-nested-callbacks */
import { Thingy } from '@core/exchange/index.js';
const assert = require('assert');

describe('Exchange::Classes', () => {
	let t = new Thingy();
	beforeEach(() => {
		t = new Thingy();
	});
	describe('Core', () => {
		it('FlagsMixin 1', () => {
			assert.equal(t.getFlag(0), false);
			t.setFlag(0, true);
			assert.equal(t.getFlag(0), true);
			t.setFlag(0, false);
			assert.equal(t.getFlag(0), false);
		});
		it('FlagsMixin 2', () => {
			t.toggleFlag(0);
			assert.equal(t.getFlag(0), true);
			t.toggleFlag(0);
			assert.equal(t.getFlag(0), false);
		});
	});
});
