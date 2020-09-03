/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/EhhhBoard
 */

import { DomElementThingy } from '@rooms/html/index.js';
import { Thingy } from '@core/exchange/index.js';
import { CanvasAppEvents } from '@client/index.js';

/**
 * Simple test for modular windows
 */
class EhhhBoardRoom extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		// #draft	
		const app = new Thingy({
			div: new DomElementThingy({ id: 'app-content-root' }),
			render: new Thingy(
				{ canvas: document.createElement('canvas') },
				{
					init() {
						this.owner.path('div/div').appendChild(this.get('canvas'));
					}
				}
			),
			env: new CanvasAppEvents()
		});
		app.init();
	}

	/**
	 * .
	 */
	disposeCallback() {
		//..
	}
}

export default EhhhBoardRoom;
