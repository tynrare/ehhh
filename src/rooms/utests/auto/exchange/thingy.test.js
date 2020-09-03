/* eslint-disable max-lines-per-function, max-classes-per-file, max-statements, max-nested-callbacks */
import { NanoThingy, LIFECYCLE_STATUS } from '@core/exchange/core/nano_thingy.js';
import { Thingy, ShelfThingy } from '@core/exchange/index.js';
const assert = require('assert');

describe('Exchange::Thingy', () => {
	/**
	 * Class for tests
	 */
	class Berry extends NanoThingy {
		/**
		 * @override
		 */
		getDefaultProperties() {
			return { testBerryProp: true };
		}
	}

	let strawberry = new Berry();
	beforeEach(() => {
		strawberry = new Berry();
	});

	describe('Core', () => {
		it('main interface 1', () => {
			strawberry.set('test', '5');
			assert.equal(strawberry.get('test'), '5');

			// just random prop writes in cache
			assert.equal(strawberry.cache.test, '5');
		});
		it('main interface 2 (property change)', () => {
			strawberry.set('testBerryProp', false);
			assert.equal(strawberry.get('testBerryProp'), false);

			// declared prop writes in properties
			assert.equal(strawberry.properties.testBerryProp, false);
		});
		it('main interface 2 (touch string)', () => {
			strawberry.touch('test', () => '5');
			assert.equal(strawberry.get('test'), '5');
		});
		it('main interface 2 (touch constructor)', () => {
			strawberry.touch('subberry', () => new Berry({ test: '5' }));
			assert.equal(strawberry.get('subberry').get('test'), '5');
		});
		it('constructor', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);

			// default value here
			assert.equal(strawberry.get('color'), 'red');

			strawberry.set('color', 'blue');
			// config value untouched
			assert.equal(conf.color, 'red');
			// instance value changed
			assert.equal(strawberry.get('color'), 'blue');
		});
		it('describe 1', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);
			assert.equal(Object.getPrototypeOf(strawberry.properties).color, 'red');
		});
		it('getDefaultProperties', () => {
			assert.ok(new Berry().get('testBerryProp'));
		});
	});
	describe('Lifecycle, Node tree lifecycle', () => {
		it('init 1 (owner)', () => {
			const owner = new NanoThingy();
			strawberry.init(owner);
			assert.equal(strawberry.owner, owner);
			assert.equal(strawberry.lifestatus, LIFECYCLE_STATUS.INITIALIZED);
		});
		it('init 2 (error)', () => {
			strawberry.init();
			assert.throws(() => strawberry.init());
		});
		it('init 3 (owner init)', () => {
			const owner = new NanoThingy({
				test: null
			});
			owner.set('test', strawberry);
			owner.init();
			assert.equal(strawberry.owner, owner);
			assert.equal(strawberry.lifestatus, LIFECYCLE_STATUS.INITIALIZED);
		});
		it('init 4 (owner init other order)', () => {
			const owner = new NanoThingy();
			owner.init();
			owner.set('test', strawberry);
			assert.equal(strawberry.owner, owner);
			assert.equal(strawberry.lifestatus, LIFECYCLE_STATUS.INITIALIZED);
		});
		it('init 5 (owner init in cache object)', () => {
			const owner = new NanoThingy();
			owner.set('test', strawberry);
			owner.init();
			assert.equal(strawberry.owner, owner);
			assert.equal(strawberry.lifestatus, LIFECYCLE_STATUS.INITIALIZED);
		});
		it('dispose 1', () => {
			const owner = new NanoThingy({
				test: null
			});
			owner.init();
			owner.set('test', strawberry);
			owner.dispose();
			assert.equal(owner.lifestatus, LIFECYCLE_STATUS.DISPOSED);
			assert.equal(strawberry.lifestatus, LIFECYCLE_STATUS.DISPOSED);
		});
	});
	describe('Serialization, data processing', () => {
		it('copy 1', () => {
			const strawberry1 = new Berry({ color: 'red' });
			const strawberry2 = new Berry();

			strawberry2.copy(strawberry1);
			assert.equal(strawberry2.get('color'), 'red');
		});
		it('clone 1', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);
			strawberry.set('color', 'blue');
			const strawberry2 = strawberry.clone();

			assert.equal(strawberry2.get('color'), 'blue');

			strawberry2.set('color', 'green');

			assert.equal(strawberry.get('color'), 'blue');
			assert.equal(strawberry2.get('color'), 'green');
		});
		it('clone 2', () => {
			const strawberry1 = new Berry();
			const strawberry2 = new Berry({ prop: strawberry1 });

			const strawberry3 = strawberry2.clone();
			strawberry3.get('prop').set('testBerryProp', false);

			assert.equal(strawberry3.path('prop/testBerryProp'), false);
			assert.equal(strawberry2.path('prop/testBerryProp'), true);
			assert.ok(strawberry2.properties.prop !== strawberry3.properties.prop);
		});
		it('clone 3', () => {
			/**
			 * .
			 */
			class TestThingy extends NanoThingy {
				/**
				 * @override
				 */
				getDefaultProperties() {
					return {
						berry: new Berry()
					};
				}
			}

			const t1 = new TestThingy();
			const t2 = t1.clone();

			assert.ok(t1.properties.berry !== t2.properties.berry);
		});
		it('populate', () => {
			strawberry = new Berry();
			const strawberry2 = strawberry.populate();

			assert.equal(strawberry2.get('testBerryProp'), true);

			strawberry.set('testBerryProp', false);

			assert.equal(strawberry2.get('testBerryProp'), false);

			strawberry2.set('testBerryProp', true);
			assert.equal(strawberry2.get('testBerryProp'), true);
			assert.equal(strawberry.get('testBerryProp'), false);
		});
		it('store', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);
			strawberry.set('color', 'blue');
			const obj = strawberry.store();
			assert.equal(obj.color, 'blue');
		});
		it('restore', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);
			strawberry.set('color', 'blue');
			const obj = strawberry.store();

			strawberry = new Berry(obj);
			assert.equal(strawberry.get('color'), 'blue');
		});
		it('owner store', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);

			const owner = new NanoThingy({ test: null });
			owner.set('test', strawberry);
			strawberry.set('color', 'blue');
			const obj = owner.store();

			assert.equal(obj.test.color, 'blue');
		});
		it('owner store 2 (cached object ignore)', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);

			const owner = new NanoThingy(); //test field removed in default config
			owner.set('test', strawberry);
			strawberry.set('color', 'blue');
			const obj = owner.store();

			assert.ok(!obj.test);
		});
		it('owner restore', () => {
			const conf = { color: 'red' };
			strawberry = new Berry(conf);

			const owner = new NanoThingy({ test: null });
			owner.set('test', strawberry);
			strawberry.set('color', 'blue');
			const obj = owner.store();

			assert.equal(obj.test.color, 'blue');
		});
	});
	describe('Shelf', () => {
		it('add 1', () => {
			const shelf = new ShelfThingy();
			shelf.add(strawberry);
			assert.equal(shelf.get(strawberry.id), strawberry);
		});
		it('add 2', () => {
			const shelf = new ShelfThingy();
			strawberry.id = 'test';
			shelf.add(strawberry);
			assert.equal(shelf.get('test'), strawberry);
		});
		it('add 3', () => {
			const shelf = new ShelfThingy();

			strawberry.id = 'test';
			const strawberry2 = new Berry();
			strawberry2.id = 'test';

			shelf.add(strawberry);
			shelf.add(strawberry2);

			assert.equal(shelf.get('test'), strawberry); //old id
			assert.equal(shelf.get(strawberry2.id), strawberry2); //generated changed id
		});
		it('remove 1', () => {
			const shelf = new ShelfThingy();
			shelf.add(strawberry);
			shelf.remove(strawberry.id);
			assert.equal(shelf.get(strawberry.id), null);
		});
		it('remove 2', () => {
			const shelf = new ShelfThingy();
			shelf.add(strawberry);
			shelf.remove(strawberry);
			assert.equal(shelf.get(strawberry.id), null);
		});
	});
	describe('Events', () => {
		it('init 1', () => {
			let tested = false;
			/**
			 * .
			 */
			class T extends Thingy {
				/**
				 * .
				 */
				initCallback() {
					tested = true;
				}
			}

			const c = new T();
			c.init();

			assert.ok(tested);
		});
		it('dispose 1', () => {
			let tested = false;
			/**
			 * .
			 */
			class T extends Thingy {
				/**
				 * .
				 */
				disposeCallback() {
					tested = true;
				}
			}

			const c = new T();
			c.init();
			c.dispose();

			assert.ok(tested);
		});
		it('constructor events', () => {
			let tested = false;
			const t = new Thingy(
				{},
				{
					init() {
						assert.equal(t, this);
						tested = true;
					}
				}
			);
			t.init();

			assert.ok(tested);
		});
		it('Thingy.on', () => {
			/* eslint-disable no-invalid-this */
			const t = new Thingy();
			t.on('event', function e() {
				assert.equal(this, t);
			});
			t.events.on('event', function e() {
				assert.ok(this !== t);
			});
			t.events.emit('event');
			/* eslint-enable no-invalid-this */
		});
	});
	describe('path', () => {
		it('./node', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			t2.set('test', true);
			t.set('node', t2);

			assert.ok(t.path('./node/test'));
			assert.ok(t.path('node/test'));
		});
		it('../test 1', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			t.set('test', true);
			t.set('node', t2);

			assert.throws(() => t2.path('../test')); //because it has to be initialized
		});
		it('../test 2', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			t.set('test', true);
			t.set('node', t2);

			t.init();

			assert.ok(t2.path('../test'));
		});
		it('/node/test', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			t2.set('test', true);
			t.set('node', t2);

			t.init();

			assert.ok(t2.path('/node/test'));
			//same as:
			assert.ok(t.path('node/test'));
		});
		it('/test 2', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			t2.set('test', true);
			t.set('node', t2);

			t.init();

			assert.ok(t2.path('/node/test'));
			//same as:
			assert.ok(t.path('node/test'));
		});
		it('*/test 1', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			const t3 = new Thingy();
			t.set('test', true);
			t.set('node', t2);
			t2.set('node', t3);

			t.init();

			assert.ok(t3.path('*/test'));
		});
		it('*/test 2', () => {
			const t = new Thingy();
			const t2 = new Thingy();
			const t3 = new Thingy();
			t.set('node', t2);
			t2.set('node', t3);

			t.init();

			assert.throws(() => t3.path('*/test'));
		});
	});
});
