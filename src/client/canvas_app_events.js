/* eslint-disable max-classes-per-file */
/**
 * @file canvas_app_events.js
 * @author tynrare
 * @version 2
 * @module Engine
 */

import { LIFECYCLE_STATUS } from '@core/exchange/core/nano_thingy.js';
import { Thingy, ShelfThingy } from '@core/exchange/index.js';

/**
 * Manages events for
 */
class WindowEvents extends Thingy {
	/**
	 * Init handler. Listens events data
	 */
	initCallback() {
		this.addEvent('resize', window);

		try {
			//uncovered branch!
			const canvas = this.set('canvas', this.path('/render/canvas'));

			this.addEvent('keydown', document);
			this.addEvent('keyup', document);

			this.addEvent('wheel', canvas);
			if ('ontouchmove' in window) {
				this.addEvent('touchstart', canvas, 'mousedown');
				this.addEvent('touchmove', canvas, 'mousemove');
				this.addEvent('touchend', canvas, 'mouseup');
			} else {
				this.addEvent('contextmenu', document);
				this.addEvent('mousedown', canvas);
				this.addEvent('mousemove', canvas);
				this.addEvent('mouseup', canvas);
			}
		} catch (err) {
			cgn.log.groupWarn(
				'CORE_WARNS',
				`AppEventsWrapper: Canvas events init error, make sure Hilo3dEngineThingy on right place`,
				err
			);
		}
	}

	/**
	 * @param {string} type event name to listen
	 * @param {object} element dom element to listen on
	 * @param {string} alias event name to fire
	 */
	addEvent(type, element, alias = type) {
		const func = (evt) => {
			this.events.emit(alias, evt);
		};
		element.addEventListener(type, func);

		this.touch('eventIds', () => new ShelfThingy()).add({ type, func, element });
	}

	/**
	 * removes events
	 */
	disposeCallback() {
		const events = this.get('eventIds');
		for (const k in events.properties) {
			const e = events.properties[k];
			e.element.removeEventListener(e.type, e.func);
		}
	}
}

/**
 * Manages events for
 */
class InputEvents extends Thingy {
	/* eslint-disable complexity, max-lines-per-function */
	/**
	 * @fires input#left
	 * @fires input#leftup
	 * @fires input#leftdown
	 * @fires input#right
	 * @fires input#rightup
	 * @fires input#rightdown
	 */
	initCallback() {
		this.events.on('../window.keydown', (event) => {
			if (!event.repeat) {
				this.keypress(event, true);
			}
		});
		this.events.on('../window.keyup', (event) => {
			if (!event.repeat) {
				this.keypress(event, false);
			}
		});
	}

	/**
	 * @param {object} event .
	 * @param {boolean} down was button down or up
	 */
	keypress(event, down) {
		const action = down ? 'down' : 'up';
		switch (event.code) {
			case 'KeyA':
			case 'KeyH':
				/**
				 * @event input#leftup
				 * @type {KeyboardEvent}
				 */
				/**
				 * @event input#leftdown
				 * @type {KeyboardEvent}
				 */
				this.events.emit('left' + action, event);
				/**
				 * @event input#left
				 * @type {object}
				 * @property {KeyboardEvent} event
				 * @property {boolean} down
				 */
				this.events.emit('left', { event, down });
				break;
			case 'KeyD':
			case 'KeyL':
				/**
				 * @event input#rightup
				 * @type {KeyboardEvent}
				 */
				/**
				 * @event input#rightdown
				 * @type {KeyboardEvent}
				 */
				this.events.emit('right' + action, event);
				/**
				 * @event input#right
				 * @type {object}
				 * @property {KeyboardEvent} event
				 * @property {boolean} down
				 */
				this.events.emit('right', { event, down });
				break;
			case 'Space':
				/**
				 * @event input#spaceup
				 * @type {KeyboardEvent}
				 */
				/**
				 * @event input#spacedown
				 * @type {KeyboardEvent}
				 */
				this.events.emit('space' + action, event);
				/**
				 * @event input#space
				 * @type {object}
				 * @property {KeyboardEvent} event
				 * @property {boolean} down
				 */
				this.events.emit('space', { event, down });
				break;
			case 'Escape':
				/**
				 * @event input#spaceup
				 * @type {KeyboardEvent}
				 */
				/**
				 * @event input#spacedown
				 * @type {KeyboardEvent}
				 */
				this.events.emit('esc' + action, event);
				/**
				 * @event input#space
				 * @type {object}
				 * @property {KeyboardEvent} event
				 * @property {boolean} down
				 */
				this.events.emit('esc', { event, down });
				break;
			//no default
		}
	}
	/* eslint-enable complexity, max-lines-per-function */
}

/**
 * Manages events for
 */
class TimeEvents extends Thingy {
	/**
	 * Init handler. Listens events data
	 */
	initCallback() {
		this.nextFrame();
	}

	/**
	 * Removes interval
	 */
	disposeCallback() {
		cgn.delays.clearInterval(this._frameId);
	}

	/**
	 * Triggers next frame events
	 *
	 * @private
	 */
	nextFrame() {
		const interval = 1000 / this.properties.fps;

		/* eslint-disable max-statements */
		const id = cgn.delays.timeout(() => {
			if (this.lifestatus <= LIFECYCLE_STATUS.DISPOSED) {
				return;
			}

			try {
				this.properties.frame += 1;
				this.events.emit('frame', this.properties.frame);
				this.nextFrame();
			} catch (err) {
				if (this.properties.strictLoop) {
					// #draft
					cgn.log.error('(/env/time.strictLoop) Critical error in main loop:', err);
					{
						const el = document.createElement('div');
						el.classList.add('error-notify');

						const a = document.createElement('a');
						a.innerHTML = 'Critical error! Press [Space] to ';

						const b = document.createElement('button');
						b.innerHTML = 'restart';
						b.onclick = () => {
							this.owner.events.emit('app_restart_input');
						};

						el.appendChild(a);
						el.appendChild(b);

						document.getElementById('app-root').appendChild(el);
					}

					this.owner.events.emit('critical_error');
				} else {
					this.nextFrame();
				}
			}
		}, interval);
		this._frameId = id;
		/* eslint-enable max-statements */
	}

	/**
	 * @override
	 * @returns {object} class default props
	 */
	getDefaultProperties() {
		return {
			fps: 60,
			strictLoop: true,
			frame: 0
		};
	}
}

/**
 * Class wraps and emits canvas, window, and input events
 */
class CanvasAppEvents extends Thingy {
	/**
	 * @override
	 */
	getDefaultProperties() {
		return {
			window: new WindowEvents(),
			time: new TimeEvents(),
			input: new InputEvents()
		};
	}
}

export default CanvasAppEvents;
export { CanvasAppEvents, WindowEvents, TimeEvents };
