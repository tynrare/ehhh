/**
 * @file app_root.js
 *
 * @author tynrare
 * @version 2
 * @module Engine
 */

import { Thingy } from '@core/exchange/index.js';

//import PageManager from '@app/page_helpers/page_manager.js';
import { DomElementThingy } from '@rooms/html/index.js';
import { CanvasAppEvents } from '@client/index.js';
import ResourcesManager from './resources_manager.js';
import Hilo3dEngineThingy from './engine/hilo3d_engine.js';

/**
 * Root application class
 *
 * @property {DomElementThingy} div dom element
 * @property {Hilo3dEngineThingy} render hilo engine render
 * @property {CanvasAppEvents} env system events and other
 * @property {object} game game state storage
 * @property {ResourcesManager} resources resources manager
 */
class AppRoot extends Thingy {
	/**
	 * Assigns new fields to events
	 */
	initCallback() {
		this.events.on('env/window.contextmenu', (evt) => {
			evt.preventDefault();
		});
	}

	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			strictInit: true,
			div: new DomElementThingy({ id: 'hilo3d-room-content' }),
			//page: new PageManager({ dom: new DomElementThingy({ parentId: 'app-root' }) }),
			resources: new ResourcesManager(), // #order 1
			render: new Hilo3dEngineThingy(), // #order 2
			env: new CanvasAppEvents(), // #order 3
			game: new Thingy()
		};
	}

	/**
	 * Allows to stop all application on init error
	 *
	 * @override
	 */
	init() {
		try {
			super.init();
		} catch (err) {
			if (this.get('strictInit')) {
				//cgn.log.error('(/strictInit) Critical error in app init():', err);
				this.dispose();
			}
			throw err;
		}
	}

	/**
	 * @returns {ResourcesManager} .
	 */
	get resources() {
		return this.properties.resources;
	}

	/**
	 * @returns {Hilo3dEngineThingy} .
	 */
	get render() {
		return this.properties.render;
	}

	/**
	 * @returns {Thingy} .
	 */
	get game() {
		return this.properties.game;
	}
}

export default AppRoot;
