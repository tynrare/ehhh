/* eslint-disable
  max-lines-per-function, max-params, no-magic-numbers,
  require-jsdoc, jsdoc/require-jsdoc, complexity, max-statements,
	max-nested-callbacks, max-classes-per-file
 */

const assert = require('assert');
import { Thingy } from '@core/exchange/index.js';
import { ResourcesManager, CanvasAppEvents, AppRoot, HiloMeshThingy } from '@game/engine/index.js';
import DomElementThingy from '@app/page_helpers/dom_element_thingy.js';

describe('Game classes', () => {
	describe('CanvasAppEvents', () => {
		it('construction', () => {
			const events = new CanvasAppEvents();
			events.init();

			assert.ok(events.get('window'));
			assert.ok(events.get('input'));
			assert.ok(events.get('time'));
		});
		it('window.resize', () => {
			let tested = false;
			const t = new CanvasAppEvents();
			t.init();
			t.events.on('./window.resize', () => {
				tested = true;
			});
			window.dispatchEvent(new CustomEvent('resize'));
			assert.ok(tested);
		});
		it('window events dispose', () => {
			let tested = false;
			const t = new CanvasAppEvents();
			t.init();
			t.events.on('./window.resize', () => {
				tested = true;
			});
			t.dispose();
			window.dispatchEvent(new CustomEvent('resize'));
			assert.ok(!tested);
		});
		it('time.frame', (done) => {
			const t = new CanvasAppEvents();
			t.init();
			t.events.once('./time.frame', () => {
				done();
				t.dispose();
			});
		});
	});
	describe('DomElementThingy', () => {
		it('init without id', () => {
			const t = new DomElementThingy();
			t.init();
			t.dispose();
		});
		it('init, id set', () => {
			const t = new DomElementThingy({ id: 'test-id' });
			t.init();
			assert.ok(document.getElementById('test-id'));
			t.dispose();
		});
		it('dispose', () => {
			const t = new DomElementThingy({ id: 'test-id-2' });
			t.init();
			assert.ok(document.getElementById('test-id-2'));
			t.dispose();
			assert.ok(!document.getElementById('test-id-2'));
		});
		it('parenting', () => {
			const t2 = new DomElementThingy({ id: 'test-id-2' });
			const t1 = new DomElementThingy({ child: t2, id: 'test-id-1' });
			t1.init();
			assert.ok(document.getElementById('test-id-1'));
			assert.ok(document.getElementById('test-id-2'));
			assert.ok(document.getElementById('test-id-1').querySelector('#test-id-2'));
			t1.dispose();
			assert.ok(!document.getElementById('test-id-1'));
			assert.ok(!document.getElementById('test-id-2'));
		});
		it('parentId', () => {
			const t1 = new DomElementThingy({ id: 'test-id-1' });
			t1.init();
			const t2 = new DomElementThingy({ parentId: 'test-id-1', id: 'test-id-2' });
			t2.init();
			assert.ok(document.getElementById('test-id-1').querySelector('#test-id-2'));
			t1.dispose();
			t2.dispose();
		});
	});
	describe('AppRoot', () => {
		it('init', () => {
			const app = new AppRoot();
			app.init();
			assert.ok(document.getElementById('app-root'));
			assert.ok(document.querySelector('#app-root canvas'));
			assert.ok(app.properties.render.stage);
			app.dispose();
		});
		it('events /env/window.resize', () => {
			let tested = false;
			const app = new AppRoot({
				t: new Thingy({
					initCallback() {
						this.events.on('/env/window.resize', () => {
							tested = true;
						});
					}
				})
			});
			app.init();
			//emulate resize
			window.dispatchEvent(new CustomEvent('resize'));
			assert.ok(tested);
			app.dispose();
		});
	});
	describe('Hilo', () => {
		it('ResourcesManager preload', (done) => {
			const res = new ResourcesManager({
				locations: { meshes: { Suzanne: 'res/assets/test/Suzanne.glb' } }
			});
			res.init();
			res.preload().then(() => {
				assert.ok(res.getMeshClone('Suzanne'));
				done();
			});
		});
		it('HiloMeshThingy', (done) => {
			const app = new AppRoot();
			app.init();
			app.resources.preload({ meshes: { Suzanne: 'res/assets/test/Suzanne.glb' } }).then(() => {
				app.game.set('test', new HiloMeshThingy({ name: 'Suzanne' }));
				assert.ok(app.game.get('test').hilo);
				app.dispose();
				done();
			});
		});
	});
	describe('DefaultDevHiloEnvMap', () => {
		it('init', () => {
			/*
			const app = new AppRoot();
			app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
			app.init();
			assert.ok(app.render.stage.getChildByName('default_dev_map'));
			app.dispose();
			*/
		});
	});
});
