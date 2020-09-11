/**
 * @file index.js
 * @author tynrare
 * @version 3
 * @module Render/Hilo3d
 */

import { Thingy } from '@core/exchange/index.js';
import { Camera, Fog, AmbientLight, Color, DirectionalLight, Stage, Vector3 } from 'hilo3d';
import HiloDebugHelper from './hilo_debug_helper.js';
import Hilo3dCameraManager from './hilo3d_camera.js';

/**
 * Wrapper class for Hilo3d management
 */
class Hilo3dEngineThingy extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			camera: new Hilo3dCameraManager(),
			debug: new HiloDebugHelper()
		};
	}

	/**
	 * Creates Hilo instance
	 *
	 * @listens window#onresize
	 */
	preinitCallback() {
		const clearColor = cgn.appearance.getColor('first');
		const stage = new Stage({
			container: this.path('/div').get('div'),
			clearColor: new Color(0, 0, 0, 0),
			alpha: true,
			width: innerWidth,
			height: innerHeight,
			fog: new Fog({
				mode: 'LINEAR', // LINEAR, EXP, EXP2
				start: 100,
				end: 150,
				density: 0.01,
				color: clearColor
			})
		});
		this.set('stage', stage);

		this.events.on('/env/window.resize', () => {
			stage.resize(innerWidth, innerHeight);
			this.camera.aspect = innerWidth / innerHeight;
		});
		this.events.on('/env/time.frame', () => {
			const hardcodedDt = 10;
			stage.tick(hardcodedDt);
		});

		//this.renderer = this.world.renderer;
		//this.gl = this.renderer.gl;
		this.set('canvas', stage.canvas);
		//stage.canvas.style.backgroundImage = `background-image: radial-gradient(circle, ${cgn.appearance.get('background')}, ${cgn.appearance.get('dark')});`
		//this.canvas = this.world.canvas;
		// this.renderer.useInstanced = true;

		const angle = 0.7;
		new DirectionalLight({
			color: new Color().fromHEX('#f6edc9'),
			direction: new Vector3(-angle, -1, 0),
			amount: 1
		}).addTo(stage);
		new DirectionalLight({
			color: new Color().fromHEX('#bfe8f5'),
			direction: new Vector3(angle / 2, 0.5, 0),
			amount: 0.1
		}).addTo(stage);

		new AmbientLight({ color: new Color().fromHEX('#c9e9f6'), amount: 0.6 }).addTo(stage);
	}

	/**
	 * @returns {Stage} .
	 */
	get stage() {
		return this.get('stage');
	}

	/**
	 * @returns {object} .
	 */
	get canvas() {
		return this.get('canvas');
	}

	/**
	 * @returns {Camera} .
	 */
	get camera() {
		return this.stage.camera;
	}

	/**
	 * @returns {HiloDebugHelper} .
	 */
	get debug() {
		return this.properties.debug;
	}

	/**
	 * cleanup
	 */
	disposeCallback() {
		this.get('stage').destroy();
	}
}

export default Hilo3dEngineThingy;
