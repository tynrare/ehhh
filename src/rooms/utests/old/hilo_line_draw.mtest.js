/**
 * @file hilo_line_draw.mtest.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { AppRoot, HiloLineRender } from '@game/engine/index.js';
import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';
import { Thingy } from '@core/exchange/index.js';
import { Vector3 } from 'hilo3d';

/**
 * Simple test for modular windows
 */
class HiloLineDrawTest extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		const app = new AppRoot();
		app.init();
		app.get('game').touch('env', () => new DefaultDevHiloEnvMap());
		const line = app.get('game').set('line', new HiloLineRender());

		for (let i = 10; i > 0; i--) {
			line.addLine(new Vector3(0, i, 0), new Vector3(1, i + 1, 1));
		}

		line.addPoint(new Vector3(1, 0, 1));
		line.addPoint(new Vector3(1, 0, 1)).addPoint(new Vector3(2, 0, 2));
	}
}

export default HiloLineDrawTest;
