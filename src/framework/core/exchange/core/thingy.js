/**
 * @file thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

import { NanoThingy, LIFECYCLE_STATUS } from './nano_thingy.js';
//import { initChilds } from '../utils/utils.js';
import { EventThingy } from './event_thingy.js';

/**
 * Core Exchange class
 *
 * - Adds events to NanoThingy
 * - Callbacks over inheritance - все эвенты в этом классе добавляются для избавления от необходимости переопределять методы в дочерних классах для добавления логики при определенных событиях (init, dispose, etc.);
 */
class Thingy extends NanoThingy {
	/**
	 * This constructor behavior mach better described as
	 * `new NanoThingy({new EventThingy()})`
	 *
	 * @param {object} [properties={}] default Thingy configuration (state)
	 * @param {object} [events] callbacks for events
	 * @fires Thingy#constructed
	 */
	constructor(properties = {}, events) {
		super(properties);

		this.events = new EventThingy();
		// #code-debt для срабатывания эвента преинита
		this.events.owner = this;

		for (const k in events) {
			this.on(k, events[k]);
		}

		/**
		 * @event Thingy#constructed
		 * @type {object}
		 * @property {EventThingy} default event
		 */
		this.events.emit('constructed', properties);
	}

	/**
	 * @param {NanoThingy?} [owner=null] owner Thingy
	 * @fires Thingy#preinit
	 * @fires Thingy#postinit
	 * @fires Thingy#init
	 */
	init(owner = null) {
		if (this.lifestatus <= LIFECYCLE_STATUS.INITIALIZED) {
			throw new Error('Thingy already initialized');
		}

		this.owner = owner;

		this.events.init(this);

		super.init(owner);
		//initChilds(this); //Я без понятия почему вызов напрямую не работает. Это 1 в 1 с super.init

		/**
		 * Event triggered before all properties init
		 *
		 * @event Thingy#postinit
		 * @type {Thingy?} owner if exists
		 */
		this.events.emit('postinit', owner);

		this.lifestatus = LIFECYCLE_STATUS.INITIALIZED;
	}

	/**
	 * @fires Thingy#dispose
	 */
	dispose() {
		this.events.dispose();

		super.dispose();
	}

	/**
	 * Calls this.events.on but with callback.bind(this)
	 *
	 * @param {string} type event name. Or path to node
	 * @param {Function} callback .
	 * @returns {string} event id
	 */
	on(type, callback) {
		return this.events.on(type, callback.bind(this));
	}

	/**
	 * Calls this.events.once but with callback.bind(this)
	 *
	 * @param {string} type event name. Or path to node
	 * @param {Function} callback .
	 * @returns {string} event id
	 */
	once(type, callback) {
		return this.events.once(type, callback.bind(this));
	}
}

export default Thingy;
