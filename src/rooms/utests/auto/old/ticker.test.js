/* eslint-disable
  max-lines-per-function, max-params, no-magic-numbers,
  require-jsdoc, jsdoc/require-jsdoc, complexity, max-statements,
	max-nested-callbacks, max-classes-per-file,
  no-underscore-dangle
 */

const assert = require('assert');
import Ticker from '@game/ticker.js';

describe('Ticker', () => {
	before(() => {
		Ticker.instance.stopAll();
		Ticker.instance.ticks = 0;
	});
	it('registerInterval, stop', (done) => {
		Ticker.instance.registerInterval('tick_test', 10);
		cgn.events.on('tick_test', () => {
			Ticker.instance.stop('tick_test');
			done();
		});
	});
	it('registerMainTickInterval', (done) => {
		Ticker.instance.registerMainTickInterval();
		cgn.events.once('tick_frame', (tick) => {
			assert.equal(tick, 1);
			done();
		});
	});
	it('init', () => {
		Ticker.instance.init();
		assert.ok(Ticker.instance._deltas.tick_sec);
		assert.ok(Ticker.instance._deltas.tick_lazy);
		assert.ok(Ticker.instance._deltas.tick_idle);
	});
});
