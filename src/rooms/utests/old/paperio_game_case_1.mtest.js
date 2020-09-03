/* eslint-disable no-magic-numbers */
/**
 * @file paperio_game_case_1.mtest.js
 * @author tynrare
 * @version 1
 * @module Tests/Manual
 */

import { Thingy } from '@core/exchange/index.js';
import { PaperioApp } from '@game/gameplay/index.js';
import MeshGraphDebug from '@game/math/debug/mesh_graph.js';
//import { DefaultDevHiloEnvMap } from '@game/thingies/index.js';

/**
 * Simple test for modular windows
 */
class PaperioGameCase1 extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			app: new PaperioApp()
		};
	}

	/**
	 * @override
	 */
	initCallback() {
		this.on('./app.async_init_done', this.debubDrawsInit);
	}

	/**
	 * .
	 */
	debubDrawsInit() {
		const debug = this.app.app.render.debug;
		this.on('./app/app/paperio/zones/points/operations.point_inserted', (point) => {
			debug.makeSphere(0.5, 'matrix').position.copy(point.pos);
		});
		this.on('./app/app/paperio/zones.zone_trigger', (point) => {
			debug.makeSphere().position.copy(point.pos);
		});

		let interrupt = false;
		this.on('./app/app/env/time.frame', () => {
			if (interrupt) {
				throw new Error('Manual interrupt');
			}
		});
		// #draft
		this.on('./app/app/env/input.esc', () => {
			interrupt = true;
		});

		//this.app.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());

		this.on('./app/app/env.critical_error', () => {
			const graph = this.path('./app/app/paperio/zones/points/faces/graph');
			const meshdebug = this.app.app.touch('debug', () => new MeshGraphDebug());
			meshdebug.redrawSegments(graph);
			meshdebug.redrawNormals(graph);
			this.app.app.render.stage.tick(1);
		});
	}

	/**
	 * @returns {PaperioApp} .
	 */
	get app() {
		return this.properties.app;
	}
}

export default PaperioGameCase1;
