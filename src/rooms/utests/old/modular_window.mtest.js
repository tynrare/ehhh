/**
 * @file modular_window.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual/ModularWindow
 */

/* eslint-disable max-statements */

import PageManager from '@app/page_helpers/page_manager.js';
import ModularWindow from '@app/page_helpers/modular_window.js';
import { Thingy, ShelfThingy } from '@core/exchange/index.js';

/**
 * Simple test for modular windows
 */
class ModularWindowTest extends Thingy {
	/**
	 * One way to declare logic:
	 *
	 * @override
	 */
	getDefaultProperties() {
		return {
			page: new PageManager(),
			windows: new ShelfThingy({
				// ===
				a: new ModularWindow(
					{ name: 'set content' },
					{
						init() {
							const element = document.createElement('div');
							element.innerHTML = `<a href='https://google.com'>
			<img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'>
			</a>`;
							this.setContent(element);
						}
					}
				),
				// ===
				b: new ModularWindow(
					{ name: 'append content' },
					{
						init() {
							const TOTAL_LINES = 15;
							for (let i = 0; i < TOTAL_LINES; i++) {
								this.appendTextContent('line ' + i);
							}
						}
					}
				)
			})
		};
	}

	/**
	 * Other way to declare logic:
	 */
	initCallback() {
		{
			const wind = new ModularWindow({ name: 'prepend content' });
			this.properties.windows.add(wind);

			const TOTAL_LINES = 15;
			for (let i = 0; i < TOTAL_LINES; i++) {
				wind.prependTextContent('line ' + i);
			}
		}
		{
			//Logging events implementation removed
			const wind = new ModularWindow({ name: 'logging example' });
			this.properties.windows.add(wind);

			cgn.events.on('message_logged', (type, arg) => {
				wind.prependTextContent(`(${new Date().toLocaleTimeString()}, ${type})> ${arg}`);
			});

			const TOTAL_LINES = 15;
			for (let i = 0; i < TOTAL_LINES; i++) {
				cgn.log.log('log ' + i);
			}

			cgn.log.log('test message');
			cgn.log.warn('test warn');
			cgn.log.error('test error');
		}
	}
}

export default ModularWindowTest;
