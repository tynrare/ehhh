/**
 * @file nano_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

import { traverse, initChildren } from '../utils/utils.js';
import FlagsMixin from '../utils/flags_mixin.js';

/**
 * @enum {number}
 * @readonly
 */
const LIFECYCLE_STATUS = {
	DISPOSED: 0,
	INITIALIZED: 1,
	CONSTRUCTED: 2
};

/**
 * Minimal core Exchange class (for private puposes mostly)
 *
 * - 1 В js (и ts) нет проверки имплементации интерфейса, и костылить ее особо смысла нет.
 *   Поэтому все проверки на вызовы функций (вроде dispose в del) предполагают проверку того что объект имплементирует интерфейс Thingy (Может не являться дочерним для него классом)
 *
 * @mixes FlagsMixin
 * @class
 * @template U
 */
class NanoThingy {
	// ===
	// Lifecycle

	/**
	 * @param {object} [properties={}] default Thingy configuration (state)
	 */
	constructor(properties = {}) {
		this.describe(properties);
		this.lifestatus = LIFECYCLE_STATUS.CONSTRUCTED;
	}

	/**
	 * Sets this.properties. Param properies will be proto.
	 * getDefaultProperties will set other keys
	 * #chain
	 *
	 * @param {object} properties .
	 * @returns {NanoThingy} this
	 */
	describe(properties) {
		this.properties = Object.create(properties);

		const def = this.getDefaultProperties();
		for (const k in def) {
			if (!(k in this.properties)) {
				this.properties[k] = def[k];
			}
		}

		return this;
	}

	/**
	 * Called by constructor. Override to pass you own props
	 *
	 * Я так и не придумал как сохранить декларативность конфигурации для класса по умолчанию, при этом оставив возможность
	 * передавать кастомные конфиги.
	 * Поэтому пока как есть (Ага, "пока", по всему проекту уже эти функции распихал)
	 *
	 * @abstract
	 * @returns {object?} properties Thingy needs to operate
	 */
	getDefaultProperties() {
		return null;
	}

	/**
	 * @param {NanoThingy?} [owner=null] owner Thingy
	 */
	init(owner = null) {
		if (this.lifestatus <= LIFECYCLE_STATUS.INITIALIZED) {
			throw new Error('Thingy already initialized');
		}

		this.owner = owner;

		initChildren(this);

		this.lifestatus = LIFECYCLE_STATUS.INITIALIZED;
	}

	/**
	 * Disposes self and all properties
	 */
	dispose() {
		if (this.lifestatus <= LIFECYCLE_STATUS.DISPOSED) {
			throw new Error('Thingy already disposed');
		}

		for (const k in this.properties) {
			const v = this.properties[k];
			if (v && v.owner === this) {
				this.del(k, true);
			}
		}

		this.owner = null; // remove circular reference

		this.lifestatus = LIFECYCLE_STATUS.DISPOSED;
	}

	// ===
	// Properties access

	/**
	 * returns any property
	 *
	 * @param {string} key property name
	 * @returns {*?} any value
	 */
	get(key) {
		return this.properties[key] ?? this.cache[key] ?? null;
	}

	/* eslint-disable complexity */
	/**
	 * Calls init for value if it has init function
	 * Sets `value.id = key` if possible
	 *
	 * @param {string} key property name
	 * @param {*|NanoThingy} value property value
	 * @param {object} opts .
	 * @param {object?} [opts.forceScope] pass any object if you want write property into it
	 * @returns {*?} passed value
	 */
	set(key, value, { forceScope = null } = {}) {
		const scope = forceScope ?? (key in this.properties ? this.properties : this.cache);

		scope[key] = value;

		if (value instanceof NanoThingy) {
			value.id = key;

			if (value.init && this.lifestatus === LIFECYCLE_STATUS.INITIALIZED) {
				value.init(this);
			}
		}

		return value;
	}

	/**
	 * Access property or create one if it doesnt exists
	 *
	 * @param {string} key property name to access
	 * @param {Function} construct function will be called if value yet doesnt exists
	 * @example
	 * // Create or access 'prop' property and write date to it:
	 * thingy.touch('prop', () => new Thingy()).set('value', 'test');
	 * @returns {*} property[key]
	 */
	touch(key, construct) {
		return this.get(key) ?? this.set(key, construct());
	}

	/**
	 * @param {string} key remove property with name
	 * @param {boolean} [dispose] in default mode will dispose if property owner === this
	 */
	del(key, dispose) {
		const q = this.get(key);
		if (q === null) {
			return;
		}

		const needToDispose = dispose ?? q.owner === this;
		if (needToDispose && q.dispose) {
			q.dispose();
		}

		if (Object.prototype.hasOwnProperty.call(this.properties, key)) {
			delete this.properties[key];
		} else {
			delete this.cache[key];
		}
	}
	/* eslint-enable complexity */

	/**
	 * Finds properties by pass. Uses standart pathes
	 *
	 * @param {string} path path to access to
	 * @returns {NanoThingy|*} any property
	 * @see Exchange/Utils#traverse
	 */
	path(path) {
		return traverse(this, path);
	}

	// ===
	// Serialization and instance management

	/**
	 * Copies data (only properties!) from that thingy to this thingy
	 * #chain
	 *
	 * @param {NanoThingy} thingy .
	 * @param {boolean} [deep=true] recursive copy ovned thingies
	 * @returns {NanoThingy} this
	 */
	copy(thingy, deep = true) {
		for (const k in thingy.properties) {
			const v = thingy.properties[k];
			if (deep && v && v.clone) {
				this.properties[k] = v.clone(true);
			} else {
				this.properties[k] = v;
			}
		}

		return this;
	}

	/**
	 * Creates copy on this thingy (only properties!)
	 * override it if you want less general solution.
	 * Be careful with objects in properties
	 *
	 * @param {boolean} [deep=true] recursive clone owned thingies
	 * @returns {NanoThingy} new thingy
	 */
	clone(deep = true) {
		const thingy = new this.constructor().copy(this, deep);
		thingy.id = this.id;

		return thingy;
	}

	/**
	 * Creates new thingy, but uses this.propertes as prototype for new thingy properties.
	 * Saves memory but careful with changing original properties. It will affect new one too
	 *
	 * @param {boolean} [deep=true] recursive populate owned thingies
	 * @returns {NanoThingy} new thingy
	 */
	populate(deep = true) {
		const thingy = new this.constructor(this.properties);

		if (deep) {
			for (const k in thingy.properties) {
				const v = thingy.properties[k];
				if (v && v.populate) {
					thingy.properties[k] = v.populate(deep);
				}
			}
		}

		return thingy;
	}

	/**
	 * @returns {object} JSON serializable object
	 */
	store() {
		const result = {};

		for (const k in this.properties) {
			const v = this.properties[k];
			if (v && v.store) {
				result[k] = v.store();
			} else {
				result[k] = v;
			}
		}

		return result;
	}

	/**
	 * #chain
	 *
	 * @param {object} data data from store
	 * @returns {NanoThingy} .
	 */
	restore(data) {
		for (const k in data) {
			const v = this.properties[k];
			if (v && v.restore) {
				v.restore(data[k]);
			} else {
				this.set(k, data[k]);
			}
		}

		return this;
	}

	/**
	 * @member {object} properties
	 */

	/**
	 * @member {object} cache
	 */

	/**
	 * All runtime data stored here
	 */
	cache = {};

	/**
	 * Owner instance
	 */
	owner = null;

	/**
	 * @type {LIFECYCLE_STATUS}
	 */
	lifestatus = LIFECYCLE_STATUS.CONSTRUCTED;

	/**
	 * Name that owner knows
	 */
	id = '';
}

// ---
//Object.assign(NanoThingy.prototype, FlagsMixin);
// Задаю поля миксинов вручную, чтоб tscompleter подхватил нормально
// ---
NanoThingy.prototype.getFlag = FlagsMixin.getFlag;
NanoThingy.prototype.setFlag = FlagsMixin.setFlag;
NanoThingy.prototype.toggleFlag = FlagsMixin.toggleFlag;
NanoThingy.prototype.triggerFlag = FlagsMixin.triggerFlag;

export default NanoThingy;
export { NanoThingy, LIFECYCLE_STATUS };
