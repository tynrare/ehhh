/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/rooms/subroutine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/framework/client/canvas_app_events.js":
/*!****************************************************!*\
  !*** ../src/framework/client/canvas_app_events.js ***!
  \****************************************************/
/*! exports provided: default, CanvasAppEvents, WindowEvents, TimeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasAppEvents", function() { return CanvasAppEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEvents", function() { return WindowEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeEvents", function() { return TimeEvents; });
/* harmony import */ var _core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-classes-per-file */

/**
 * @file canvas_app_events.js
 * @author tynrare
 * @version 2
 * @module Engine
 */


/**
 * Manages events for
 */

var WindowEvents = /*#__PURE__*/function (_Thingy) {
  _inherits(WindowEvents, _Thingy);

  var _super = _createSuper(WindowEvents);

  function WindowEvents() {
    _classCallCheck(this, WindowEvents);

    return _super.apply(this, arguments);
  }

  _createClass(WindowEvents, [{
    key: "initCallback",

    /**
     * Init handler. Listens events data
     */
    value: function initCallback() {
      this.addEvent('resize', window);

      try {
        //uncovered branch!
        var canvas = this.set('canvas', this.path('/render/canvas'));
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
        cgn.log.groupWarn('CORE_WARNS', "AppEventsWrapper: Canvas events init error, make sure Hilo3dEngineThingy on right place", err);
      }
    }
    /**
     * @param {string} type event name to listen
     * @param {object} element dom element to listen on
     * @param {string} alias event name to fire
     */

  }, {
    key: "addEvent",
    value: function addEvent(type, element) {
      var _this = this;

      var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : type;

      var func = function func(evt) {
        _this.events.emit(alias, evt);
      };

      element.addEventListener(type, func);
      this.touch('eventIds', function () {
        return new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["ShelfThingy"]();
      }).add({
        type: type,
        func: func,
        element: element
      });
    }
    /**
     * removes events
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      var events = this.get('eventIds');

      for (var k in events.properties) {
        var e = events.properties[k];
        e.element.removeEventListener(e.type, e.func);
      }
    }
  }]);

  return WindowEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Manages events for
 */


var InputEvents = /*#__PURE__*/function (_Thingy2) {
  _inherits(InputEvents, _Thingy2);

  var _super2 = _createSuper(InputEvents);

  function InputEvents() {
    _classCallCheck(this, InputEvents);

    return _super2.apply(this, arguments);
  }

  _createClass(InputEvents, [{
    key: "initCallback",

    /* eslint-disable complexity, max-lines-per-function */

    /**
     * @fires input#left
     * @fires input#leftup
     * @fires input#leftdown
     * @fires input#right
     * @fires input#rightup
     * @fires input#rightdown
     */
    value: function initCallback() {
      var _this2 = this;

      this.events.on('../window.keydown', function (event) {
        if (!event.repeat) {
          _this2.keypress(event, true);
        }
      });
      this.events.on('../window.keyup', function (event) {
        if (!event.repeat) {
          _this2.keypress(event, false);
        }
      });
    }
    /**
     * @param {object} event .
     * @param {boolean} down was button down or up
     */

  }, {
    key: "keypress",
    value: function keypress(event, down) {
      var action = down ? 'down' : 'up';

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

          this.events.emit('left', {
            event: event,
            down: down
          });
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

          this.events.emit('right', {
            event: event,
            down: down
          });
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

          this.events.emit('space', {
            event: event,
            down: down
          });
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

          this.events.emit('esc', {
            event: event,
            down: down
          });
          break;
        //no default
      }
    }
    /* eslint-enable complexity, max-lines-per-function */

  }]);

  return InputEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Manages events for
 */


var TimeEvents = /*#__PURE__*/function (_Thingy3) {
  _inherits(TimeEvents, _Thingy3);

  var _super3 = _createSuper(TimeEvents);

  function TimeEvents() {
    _classCallCheck(this, TimeEvents);

    return _super3.apply(this, arguments);
  }

  _createClass(TimeEvents, [{
    key: "initCallback",

    /**
     * Init handler. Listens events data
     */
    value: function initCallback() {
      this.nextFrame();
    }
    /**
     * Removes interval
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      cgn.delays.clearInterval(this._frameId);
    }
    /**
     * Triggers next frame events
     *
     * @private
     */

  }, {
    key: "nextFrame",
    value: function nextFrame() {
      var _this3 = this;

      var interval = 1000 / this.properties.fps;
      /* eslint-disable max-statements */

      var id = cgn.delays.timeout(function () {
        if (_this3.lifestatus <= _core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].DISPOSED) {
          return;
        }

        try {
          _this3.properties.frame += 1;

          _this3.events.emit('frame', _this3.properties.frame);

          _this3.nextFrame();
        } catch (err) {
          if (_this3.properties.strictLoop) {
            // #draft
            cgn.log.error('(/env/time.strictLoop) Critical error in main loop:', err);
            {
              var el = document.createElement('div');
              el.classList.add('error-notify');
              var a = document.createElement('a');
              a.innerHTML = 'Critical error! Press [Space] to ';
              var b = document.createElement('button');
              b.innerHTML = 'restart';

              b.onclick = function () {
                _this3.owner.events.emit('app_restart_input');
              };

              el.appendChild(a);
              el.appendChild(b);
              document.getElementById('app-root').appendChild(el);
            }

            _this3.owner.events.emit('critical_error');
          } else {
            _this3.nextFrame();
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

  }, {
    key: "getDefaultProperties",
    value: function getDefaultProperties() {
      return {
        fps: 60,
        strictLoop: true,
        frame: 0
      };
    }
  }]);

  return TimeEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Class wraps and emits canvas, window, and input events
 */


var CanvasAppEvents = /*#__PURE__*/function (_Thingy4) {
  _inherits(CanvasAppEvents, _Thingy4);

  var _super4 = _createSuper(CanvasAppEvents);

  function CanvasAppEvents() {
    _classCallCheck(this, CanvasAppEvents);

    return _super4.apply(this, arguments);
  }

  _createClass(CanvasAppEvents, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        window: new WindowEvents(),
        time: new TimeEvents(),
        input: new InputEvents()
      };
    }
  }]);

  return CanvasAppEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (CanvasAppEvents);


/***/ }),

/***/ "../src/framework/client/index.js":
/*!****************************************!*\
  !*** ../src/framework/client/index.js ***!
  \****************************************/
/*! exports provided: CanvasAppEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_app_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_app_events.js */ "../src/framework/client/canvas_app_events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasAppEvents", function() { return _canvas_app_events_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Client
 */



/***/ }),

/***/ "../src/framework/core/core_namespace.js":
/*!***********************************************!*\
  !*** ../src/framework/core/core_namespace.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/logger.js */ "../src/framework/core/utils/logger.js");
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/events_manager.js */ "../src/framework/core/utils/events_manager.js");
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_utils_delays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/delays.js */ "../src/framework/core/utils/delays.js");
/* harmony import */ var _core_utils_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/assert.js */ "../src/framework/core/utils/assert.js");
/* harmony import */ var _core_utils_appearance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/appearance.js */ "../src/framework/core/utils/appearance.js");
/**
 * @file core_namespace.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */





/**
 * От core game namespace. Глобальный объект, доступный во всем коде.
 * Хранит в себе основные игровые и сервисные методы и параметры
 *
 * @namespace
 * @public
 * @borrows module:Utils/Logger.Logger as logger
 * @borrows module:Utils/EventsManager.EventsManager as events
 */

var cgn = {
  /**
   * @see {@link module:Core/Utils/Logger.Logger}
   * @static
   */
  log: _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a,

  /**
   * @see {@link module:Core/Utils/EventsManager.EventsManager}
   * @static
   */
  events: _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1___default.a,

  /**
   * @see {@link module:Core/Utils/Delays.Delays}
   * @static
   */
  delays: _core_utils_delays_js__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see https://nodejs.org/api/assert.html
   * @static
   */
  assert: _core_utils_assert_js__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @static
   */
  appearance: new _core_utils_appearance_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
};
/* harmony default export */ __webpack_exports__["default"] = (cgn);

/***/ }),

/***/ "../src/framework/core/exchange/core/event_thingy.js":
/*!***********************************************************!*\
  !*** ../src/framework/core/exchange/core/event_thingy.js ***!
  \***********************************************************/
/*! exports provided: default, EventThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThingy", function() { return EventThingy; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thingy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thingy.js */ "../src/framework/core/exchange/core/thingy.js");
/* harmony import */ var _shelf_thingy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shelf_thingy.js */ "../src/framework/core/exchange/core/shelf_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file event_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */




var CALLBACH_FUNC_POSTFIX = 'Callback';
/**
 * Event management based on Thingy
 */

var EventThingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(EventThingy, _NanoThingy);

  var _super = _createSuper(EventThingy);

  function EventThingy() {
    _classCallCheck(this, EventThingy);

    return _super.apply(this, arguments);
  }

  _createClass(EventThingy, [{
    key: "on",

    /**
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     * @example
     * on('/prop/prop.event') //will listen event from
     * rootnode.prop.prop.on('event')
     */
    value: function on(type, callback) {
      return this.registerListener(type, callback, 'on');
    }
    /**
     * @param {string} type event name
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "once",
    value: function once(type, callback) {
      return this.registerListener(type, callback, 'once');
    }
    /**
     * @param {string} key id fenereted by 'on'
     */

  }, {
    key: "off",
    value: function off(key) {
      var evt = this.cacheEvents.get(key);

      if (evt) {
        evt.listener.lowlevel.off(evt.type, evt.callback);
        this.del(key);
      }
    }
    /**
     * Listens any other event and emits it
     *
     * @param {string} type event name
     */

  }, {
    key: "pipe",
    value: function pipe(type) {
      var _this = this;

      var id = this.on(type, function () {
        var t = _this.cacheEvents.get(id).type;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.emit.apply(_this, [t].concat(args));
      });
    }
    /**
     * @param {string} type event name
     * @param {Function} callback .
     * @param {string} func function to call in EventEmitter
     * @returns {string} event id
     */

  }, {
    key: "registerListener",
    value: function registerListener(type, callback) {
      var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'on';

      /* eslint-disable consistent-this */
      var evt = type;
      var listener = this;
      var dotpos = evt.lastIndexOf('.');

      if (dotpos >= 0) {
        listener = this.owner.path(evt.substring(0, dotpos)).events;
        evt = evt.substring(dotpos + 1);
      }
      /* eslint-enable consistent-this */


      var id = this.cacheEvents.add({
        type: evt,
        callback: callback,
        listener: listener
      });
      listener.lowlevel[func](evt, callback);
      return id;
    }
    /**
     * Will emit event and call function %type%Callback on owner
     *
     * @param {string} type event name
     * @param {Array} args list of arguments
     */

  }, {
    key: "emit",
    value: function emit(type) {
      var _this$lowlevel, _this$owner$get, _this$owner, _this$owner2;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_this$lowlevel = this.lowlevel).emit.apply(_this$lowlevel, [type].concat(args)); // call owner %type%Callback function if it exists


      var funcName = type + CALLBACH_FUNC_POSTFIX;
      var func = (_this$owner$get = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.get(funcName)) !== null && _this$owner$get !== void 0 ? _this$owner$get : (_this$owner2 = this.owner) === null || _this$owner2 === void 0 ? void 0 : _this$owner2[funcName];

      if (func) {
        func.apply(this.owner, args);
      }
    }
    /**
     * @returns {EventEmitter} .
     */

  }, {
    key: "init",

    /**
     * @override
     * @fires Thingy#init
     * @fires Thingy#preinit
     */
    value: function init(owner) {
      _get(_getPrototypeOf(EventThingy.prototype), "init", this).call(this, owner);
      /**
       * preinit alias
       *
       * @event Thingy#init
       * @type {Thingy?} owner if exists
       */


      this.emit('init', owner);
      /**
       * Event triggered before all properties init
       *
       * @event Thingy#preinit
       * @type {Thingy?} owner if exists
       */

      this.emit('preinit', owner);
    }
    /**
     * Disposes self and all properties
     *
     * @fires Thingy#dispose
     */

  }, {
    key: "dispose",
    value: function dispose() {
      /**
       * Fires before childs disposion
       *
       * @event Thingy#dispose
       */
      this.emit('dispose');

      _get(_getPrototypeOf(EventThingy.prototype), "dispose", this).call(this);

      for (var k in this.cacheEvents.properties) {
        this.off(k);
      }
    }
  }, {
    key: "lowlevel",
    get: function get() {
      if (!this.cache.lowlevel) {
        this.cache.lowlevel = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      return this.cache.lowlevel;
    }
    /**
     * Cache data with stored events info
     *
     * @returns {ShelfThingy} .
     */

  }, {
    key: "cacheEvents",
    get: function get() {
      return this.touch('events', function () {
        return new _shelf_thingy_js__WEBPACK_IMPORTED_MODULE_3__["ShelfThingy"]();
      });
    }
  }]);

  return EventThingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (EventThingy);


/***/ }),

/***/ "../src/framework/core/exchange/core/nano_thingy.js":
/*!**********************************************************!*\
  !*** ../src/framework/core/exchange/core/nano_thingy.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/x/workspace/code/ehhh/src/framework/core/exchange/core/nano_thingy.js: Support for the experimental syntax 'classProperties' isn't currently enabled (310:8):\n\n\u001b[0m \u001b[90m 308 | \u001b[39m\u001b[90m\t * All runtime data stored here\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 309 | \u001b[39m\u001b[90m\t */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 310 | \u001b[39m\tcache \u001b[33m=\u001b[39m {}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\t      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 311 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 312 | \u001b[39m\t\u001b[90m/**\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 313 | \u001b[39m\u001b[90m\t * Owner instance\u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.expectPlugin (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Parser.parseClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Parser.pushClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Parser.parseClassMemberWithIsStatic (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Parser.parseClassMember (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12241:14\n    at Parser.withTopicForbiddingContext (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Parser.parseClassBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Parser.parseClass (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Parser.parseStatementContent (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Parser.parseStatement (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Parser.parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:254:32)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "../src/framework/core/exchange/core/shelf_thingy.js":
/*!***********************************************************!*\
  !*** ../src/framework/core/exchange/core/shelf_thingy.js ***!
  \***********************************************************/
/*! exports provided: default, ShelfThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelfThingy", function() { return ShelfThingy; });
/* harmony import */ var _utils_id_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id_helper.js */ "../src/framework/core/exchange/utils/id_helper.js");
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file shelf_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */


/**
 * Event management based on Thingy
 */

var ShelfThingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(ShelfThingy, _NanoThingy);

  var _super = _createSuper(ShelfThingy);

  function ShelfThingy() {
    _classCallCheck(this, ShelfThingy);

    return _super.apply(this, arguments);
  }

  _createClass(ShelfThingy, [{
    key: "add",

    /**
     * @param {object|NanoThingy|*} item item to add
     * @returns {string} given id
     */
    value: function add(item) {
      var id = item.id;
      id = this.getIdsHelper().genSuitableId(id, this.properties);
      this.set(id, item, {
        forceScope: this.properties
      });
      return id;
    }
    /**
     * @param {NanoThingy|string} thingy reference or id
     */

  }, {
    key: "remove",
    value: function remove(thingy) {
      this.del(typeof thingy === 'string' ? thingy : thingy.id);
    }
    /**
     * @returns {IdHelper} .
     */

  }, {
    key: "getIdsHelper",
    value: function getIdsHelper() {
      return this.touch('idsHelper', function () {
        return new _utils_id_helper_js__WEBPACK_IMPORTED_MODULE_0__["IdHelper"]();
      });
    }
  }]);

  return ShelfThingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ShelfThingy);


/***/ }),

/***/ "../src/framework/core/exchange/core/thingy.js":
/*!*****************************************************!*\
  !*** ../src/framework/core/exchange/core/thingy.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_thingy.js */ "../src/framework/core/exchange/core/event_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */
 //import { initChilds } from '../utils/utils.js';


/**
 * Core Exchange class
 *
 * - Adds events to NanoThingy
 * - Callbacks over inheritance - все эвенты в этом классе добавляются для избавления от необходимости переопределять методы в дочерних классах для добавления логики при определенных событиях (init, dispose, etc.);
 */

var Thingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(Thingy, _NanoThingy);

  var _super = _createSuper(Thingy);

  /**
   * This constructor behavior mach better described as
   * `new NanoThingy({new EventThingy()})`
   *
   * @param {object} [properties={}] default Thingy configuration (state)
   * @param {object} [events] callbacks for events
   * @fires Thingy#constructed
   */
  function Thingy() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Thingy);

    _this = _super.call(this, properties);
    _this.events = new _event_thingy_js__WEBPACK_IMPORTED_MODULE_1__["EventThingy"](); // #code-debt для срабатывания эвента преинита

    _this.events.owner = _assertThisInitialized(_this);

    for (var k in events) {
      _this.on(k, events[k]);
    }
    /**
     * @event Thingy#constructed
     * @type {object}
     * @property {EventThingy} default event
     */


    _this.events.emit('constructed', properties);

    return _this;
  }
  /**
   * @param {NanoThingy?} [owner=null] owner Thingy
   * @fires Thingy#preinit
   * @fires Thingy#postinit
   * @fires Thingy#init
   */


  _createClass(Thingy, [{
    key: "init",
    value: function init() {
      var owner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.lifestatus <= _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].INITIALIZED) {
        throw new Error('Thingy already initialized');
      }

      this.owner = owner;
      this.events.init(this);

      _get(_getPrototypeOf(Thingy.prototype), "init", this).call(this, owner); //initChilds(this); //Я без понятия почему вызов напрямую не работает. Это 1 в 1 с super.init

      /**
       * Event triggered before all properties init
       *
       * @event Thingy#postinit
       * @type {Thingy?} owner if exists
       */


      this.events.emit('postinit', owner);
      this.lifestatus = _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].INITIALIZED;
    }
    /**
     * @fires Thingy#dispose
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this.events.dispose();

      _get(_getPrototypeOf(Thingy.prototype), "dispose", this).call(this);
    }
    /**
     * Calls this.events.on but with callback.bind(this)
     *
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      return this.events.on(type, callback.bind(this));
    }
    /**
     * Calls this.events.once but with callback.bind(this)
     *
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "once",
    value: function once(type, callback) {
      return this.events.once(type, callback.bind(this));
    }
  }]);

  return Thingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Thingy);

/***/ }),

/***/ "../src/framework/core/exchange/index.js":
/*!***********************************************!*\
  !*** ../src/framework/core/exchange/index.js ***!
  \***********************************************/
/*! exports provided: NanoThingy, Thingy, ShelfThingy, EventThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "NanoThingy", function() { return _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _core_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/thingy.js */ "../src/framework/core/exchange/core/thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thingy", function() { return _core_thingy_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_shelf_thingy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/shelf_thingy.js */ "../src/framework/core/exchange/core/shelf_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShelfThingy", function() { return _core_shelf_thingy_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_event_thingy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/event_thingy.js */ "../src/framework/core/exchange/core/event_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThingy", function() { return _core_event_thingy_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */






/***/ }),

/***/ "../src/framework/core/exchange/utils/id_helper.js":
/*!*********************************************************!*\
  !*** ../src/framework/core/exchange/utils/id_helper.js ***!
  \*********************************************************/
/*! exports provided: default, IdHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdHelper", function() { return IdHelper; });
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file id_helper.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

var RUNTIME_PROP_PREFIX = '*';
/**
 * Event management based on Thingy
 */

var IdHelper = /*#__PURE__*/function (_NanoThingy) {
  _inherits(IdHelper, _NanoThingy);

  var _super = _createSuper(IdHelper);

  function IdHelper() {
    _classCallCheck(this, IdHelper);

    return _super.apply(this, arguments);
  }

  _createClass(IdHelper, [{
    key: "nextId",

    /**
     * returns next id value
     *
     * @returns {number} new id
     */
    value: function nextId() {
      return this.set('uids_generated', this.touch('uids_generated', function () {
        return -1;
      }) + 1);
    }
    /**
     * Finds id that isn't in scope
     * #pure
     *
     * @param {string} id id to validate and build from
     * @param {object|NanoThingy} [scope=this] scope to check
     * @returns {string} id that doesn't conflict in scope
     */

  }, {
    key: "genSuitableId",
    value: function genSuitableId() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var newid = (id === null || id === void 0 ? void 0 : id.length) > 0 && id;
      var nextid = this.nextId();

      while (!newid || scope[newid]) {
        newid = RUNTIME_PROP_PREFIX + (newid || nextid);
      }

      return newid;
    }
  }]);

  return IdHelper;
}(_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (IdHelper);


/***/ }),

/***/ "../src/framework/core/math.js":
/*!*************************************!*\
  !*** ../src/framework/core/math.js ***!
  \*************************************/
/*! exports provided: cache, PERFECT_NUMBER, DEFAULT_GEOM_THRESHOLD, PRECISE_GEOM_THRESHOLD, ZERO_THRESHOLD, LOOSE_GEOM_THRESHOLD, DEFAULT_GEOM_NORMALS_SIZE, getDirection, alignToNormal, sortByDistance, crossProduct2Vector, posOnPlane, pos2dto3d, alignNormal, projectOnPlane, projectOnLine, projectLineOnLine, isPointOnLine, isPointOnLineThresholded, isPointInPlanePositive, isPointInPlanePositiveThresholded, findCevianForTriangle, getIntersectPointValues, getIntersectPoint, getPositionOnSegment, triangleNormal, triangleArea, divideVec3, posCenter, clamp, lerp, intersectsTriangle, fromRotationMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_NUMBER", function() { return PERFECT_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GEOM_THRESHOLD", function() { return DEFAULT_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRECISE_GEOM_THRESHOLD", function() { return PRECISE_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO_THRESHOLD", function() { return ZERO_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOSE_GEOM_THRESHOLD", function() { return LOOSE_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GEOM_NORMALS_SIZE", function() { return DEFAULT_GEOM_NORMALS_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirection", function() { return getDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignToNormal", function() { return alignToNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDistance", function() { return sortByDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossProduct2Vector", function() { return crossProduct2Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posOnPlane", function() { return posOnPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos2dto3d", function() { return pos2dto3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignNormal", function() { return alignNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectOnPlane", function() { return projectOnPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectOnLine", function() { return projectOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectLineOnLine", function() { return projectLineOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointOnLine", function() { return isPointOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointOnLineThresholded", function() { return isPointOnLineThresholded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPlanePositive", function() { return isPointInPlanePositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPlanePositiveThresholded", function() { return isPointInPlanePositiveThresholded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCevianForTriangle", function() { return findCevianForTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectPointValues", function() { return getIntersectPointValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectPoint", function() { return getIntersectPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionOnSegment", function() { return getPositionOnSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleNormal", function() { return triangleNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleArea", function() { return triangleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divideVec3", function() { return divideVec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posCenter", function() { return posCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsTriangle", function() { return intersectsTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationMatrix", function() { return fromRotationMatrix; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* eslint-disable camelcase, complexity, max-params, no-magic-numbers, max-statements */

var cache = {
  vec3: {
    v0: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v1: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v2: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v3: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v4: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v5: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v6: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v7: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v8: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    v9: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
  }
}; // buffer vectors

var vec0 = cache.vec3.v0;
var vec1 = cache.vec3.v1;
var vec2 = cache.vec3.v2;
var vec3 = cache.vec3.v3;
var vec4 = cache.vec3.v4;
var vecR = cache.vec3.v5; // functions return this vector

/**
 * @constant
 */

var PERFECT_NUMBER = Math.sin(Math.PI / Math.pow(2, 2)); // 0.707

/**
 * PERFECT_NUMBER^2 * 0.1
 *
 * @constant
 */

var DEFAULT_GEOM_THRESHOLD = Math.pow(PERFECT_NUMBER, 2) * 0.1; // 0.049

/**
 * DEFAULT_GEOM_THRESHOLD^2
 *
 * @constant
 */

var PRECISE_GEOM_THRESHOLD = Math.pow(DEFAULT_GEOM_THRESHOLD, 2); // 0.00249

/**
 * DEFAULT_GEOM_THRESHOLD^5
 *
 * @constant
 */

var ZERO_THRESHOLD = Math.pow(DEFAULT_GEOM_THRESHOLD, 5); // e-7

/**
 * DEFAULT_GEOM_THRESHOLD
 *
 * @constant
 */

var LOOSE_GEOM_THRESHOLD = PERFECT_NUMBER * 0.1;
/**
 * Use it for any meta-purpused data such debug normals and mesh/grids scales
 * DEFAULT_GEOM_THRESHOLD * PERFECT_NUMBER
 *
 * @constant
 */

var DEFAULT_GEOM_NORMALS_SIZE = DEFAULT_GEOM_THRESHOLD * PERFECT_NUMBER;
/**
 * https://github.com/BabylonJS/Babylon.js/blob/master/src/Maths/math.vector.ts#L1585
 *
 * @param {Vector3} axis local axis
 * @param {Matrix4} matrix world matrix
 * @returns {Vector3} world axis
 */

function getDirection(axis, matrix) {
  var mat = matrix.elements;
  var v = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  return v.set(axis.x * mat[0] + axis.y * mat[4] + axis.z * mat[8], axis.x * mat[1] + axis.y * mat[5] + axis.z * mat[9], axis.x * mat[2] + axis.y * mat[6] + axis.z * mat[10]);
}
/**
 * @param {Vector3} normal .
 * @param {Node} node .
 */

function alignToNormal(normal, node) {
  var nx = getDirection(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 0, 1), node.worldMatrix);
  var nz = getDirection(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(-1, 0, 0), node.worldMatrix);
  node.quaternion.rotateX(normal.dot(nx));
  node.quaternion.rotateZ(normal.dot(nz));
}
/**
 * @param {Vector3} origin point distance to
 * @param {Array<Vector3>} points array of vectors to sort
 */

function sortByDistance(origin, points) {
  points.sort(function (a, b) {
    return origin.squaredDistance(a) - origin.squaredDistance(b);
  });
}
/**
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {number} cross
 */

function crossProduct2Vector(a1, a2, b1, b2) {
  return (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
}
/**
 * Converts world coords into pos on plane
 *
 * @param {Vector3} point point to work with
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector2} pos on plane
 */

function posOnPlane(point, origin, normal) {
  var axis = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 1, 0);
  var dist = point.clone().sub(origin);
  var v = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var u = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var dot = normal.dot(axis);

  if (dot === 0 || Math.abs(dot) === 1) {
    v.set(0, 0, 1);
    u.set(1, 0, 0);
  } else {
    v.copy(axis).cross(normal).normalize();
    u.copy(v).cross(normal).normalize();
  }

  var x = dist.dot(u);
  var y = dist.dot(v);
  return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(x, y);
}
/**
 * Returns pos on plane as 3d coordinate
 *
 * @param {Vector2} pos pos on plane
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector3} 3d space coordinate
 */

function pos2dto3d(pos, origin, normal) {
  var axis = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 1, 0);
  var v = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var u = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var dot = normal.dot(axis);

  if (dot === 0 || Math.abs(dot) === 1) {
    v.set(0, 0, 1);
    u.set(1, 0, 0);
  } else {
    v.copy(axis).cross(normal).normalize();
    u.copy(v).cross(normal).normalize();
  }

  return u.scale(pos.x).add(v.scale(pos.y)).add(origin);
}
/**
 * "rotates" normal to another normal "plane"
 *
 * @param {Vector3} normal normal to shift
 * @param {Vector3} axis axis to shift around
 *
 * @returns {Vector3} aligned normal
 */

function alignNormal(normal, axis) {
  var dot = axis.dot(normal);
  return vecR.copy(normal).sub(vec0.copy(axis).scale(dot));
}
/**
 * Converts world coords into pos on plane
 *
 * @param {Vector3} point point to work with
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector3} point on plane
 */

function projectOnPlane(point, origin, normal) {
  var local = vec3.copy(point).sub(origin);
  var forward = vec1.copy(normal).cross(local).normalize();
  var right = vec2.copy(normal).cross(forward).normalize();
  var x = local.dot(right);
  var z = local.dot(forward);
  return vecR.copy(origin).add(right.scale(x)).add(forward.scale(z));
}
/**
 * Closest point on segment
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {Vector3} closest to line point
 */

function projectOnLine(a, b, point) {
  var local = vec0.copy(point).sub(a);
  var line = vecR.copy(b).sub(a).normalize();
  var dist = local.dot(line);
  return line.scale(dist).add(a);
}
/**
 * Project one segment on another. It isn't "crossing"
 * Uses vec0-3
 *
 * @param {Vector3} a1 line 1 start
 * @param {Vector3} b1 line 1 end
 * @param {Vector3} a2 line 2 start
 * @param {Vector3} b2 line 2 end
 * @returns {Vector3?} a1->b1 projection on a2->b2. Null if projection out of a2->b2 segment
 */

function projectLineOnLine(a1, b1, a2, b2) {
  var y = vec1.copy(projectOnLine(a1, b1, a2));
  var z = vec2.copy(projectOnLine(a1, b1, b2));
  var yDist = a2.distance(y);
  var zDist = b2.distance(z);
  var proportion = yDist / (yDist + zDist);
  var yz = z.sub(y).scale(proportion || 0);
  var p = vecR.copy(y).add(yz);

  if (!isPointOnLineThresholded(a2, b2, p)) {
    return null;
  }

  return p;
}
/**
 * Closest point on segment. Thresholds a-b segment for validation
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {boolean} .
 */

function isPointOnLine(a, b, point) {
  var n = vec1.copy(b).sub(a).normalize();
  return isPointInPlanePositive(a, n, point) && isPointInPlanePositive(b, n.negate(), point);
}
/**
 * Closest point on segment. Thresholds a-b segment for validation
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {boolean} .
 */

function isPointOnLineThresholded(a, b, point) {
  var n = vec3.copy(b).sub(a).normalize();
  return isPointInPlanePositiveThresholded(a, n, point) && isPointInPlanePositiveThresholded(b, n.negate(), point);
}
/**
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal direction
 * @param {Vector3} point point to check
 * @returns {boolean} .
 */

function isPointInPlanePositive(origin, normal, point) {
  var po = vec0.copy(point).sub(origin);
  return po.dot(normal) >= 0;
}
/**
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal direction
 * @param {Vector3} point point to check
 * @returns {boolean} .
 */

function isPointInPlanePositiveThresholded(origin, normal, point) {
  var threshold = vec1.copy(normal).scale(DEFAULT_GEOM_THRESHOLD);
  var o = vec2.copy(origin).sub(threshold);
  return isPointInPlanePositive(o, normal, point);
}
/**
 * Finds closest to X point on segment AX that lays on triangle ABC. (A shared
 * for segment and triagnle)
 * #interface 1
 * Uses vec0-4
 *
 * @param {Vector3} up up triangle direction
 * @param {Vector3} a a point for triangle and normal origin
 * @param {Vector3} b b triangle point
 * @param {Vector3} c c triangle point
 * @param {Vector3} normal normal from a in bc direction
 *
 * @returns {Vector3} point on BC. null if it isn't on BC
 */

function findCevianForTriangle(up, a, b, c, normal) {
  var h = vec1.copy(projectOnLine(b, c, a)).sub(a);
  var forward = h.normalize();

  if (forward.dot(normal) <= 0) {
    return null;
  }

  var right = vec3.copy(forward).cross(up);
  var abdot = vec1.copy(b).sub(a).normalize().dot(right);
  var acdot = vec2.copy(c).sub(a).normalize().dot(right);
  var leftdot = Math.min(abdot, acdot);
  var rightdot = Math.max(abdot, acdot);
  var normaldot = normal.dot(right);
  var threshold = ZERO_THRESHOLD;

  if (normaldot >= leftdot - threshold && normaldot <= rightdot + threshold) {
    return projectLineOnLine(a, vec4.copy(a).add(normal), b, c);
  }

  return null;
}
/**
 * #interface -1
 *
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {object?} {at:number, bt:number} a and b intersection point
 *     percentage
 */

function getIntersectPointValues(a1, a2, b1, b2) {
  if (a1.equals(a2) || b1.equals(b2)) {
    return null;
  }

  var denom = crossProduct2Vector(a1, a2, b1, b2);

  if (denom === 0) {
    // Lines parallel or overlap
    return null;
  }

  var at = crossProduct2Vector(b1, b2, b1, a1) / denom;
  var bt = crossProduct2Vector(a1, a2, b1, a1) / denom;
  return {
    at: at,
    bt: bt
  };
}
/**
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {Vector2?} intersection point
 */

function getIntersectPoint(a1, a2, b1, b2) {
  var intersect = getIntersectPointValues(a1, a2, b1, b2);

  if (!intersect) {
    return null;
  }

  if (!intersect || intersect.at < 0 || intersect.at > 1 || intersect.bt < 0 || intersect.bt > 1) {
    return null;
  }

  return getPositionOnSegment(a1, a2, intersect.at);
}
/**
 * #interface -1
 *
 * @param {Vector2} a start segment point
 * @param {Vector2} b end segment point
 * @param {number} t percentage (0-1) on segmment
 * @returns {Vector2} position on segment
 */

function getPositionOnSegment(a, b, t) {
  var x = a.x + t * (b.x - a.x);
  var y = a.y + t * (b.y - a.y);
  return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(x, y);
}
/**
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {Vector3} normalized triangle face vec
 */

function triangleNormal(a, b, c) {
  var v0 = vec0.copy(a).sub(b); //                V0 = P0-P1

  var v1 = vecR.copy(c).sub(b); //                V1 = P2-P1

  var normal = v1.cross(v0).normalize(); // N = cross (V1, V0)

  return normal;
}
/**
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {number} triangle area
 */

function triangleArea(a, b, c) {
  var ab = vec0.copy(b).sub(a);
  var ac = vec1.copy(c).sub(a); // Не знаю почему 8. Подставил под значение для площади квадрата 1х1
  // 8 = 2^3
  // 1. Первая сперень - Параллограм пополам
  // 2. Вторая степень - Единицы измерения площади (m^2, например) (наверное)

  return vec2.copy(ab).cross(ac).len() / 8;
}
/**
 * Divides vec on val. Changes vec inplace
 * #nonpure
 *
 * @param {Vector3} vec vec to divide
 * @param {number} val .
 * @returns {Vector3} same vector
 */

function divideVec3(vec, val) {
  vec.elements[0] /= val;
  vec.elements[1] /= val;
  vec.elements[2] /= val;
  return vec;
}
/**
 * Returns vectors middle position
 *
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {Vector3} .
 */

function posCenter(a, b, c) {
  return divideVec3(vecR.copy(a).add(b).add(c), 3);
}
/**
 * @param {number} val input value
 * @param {number} min minumum clamp value
 * @param {number} max maximum clamp value
 * @returns {number} [min, max]
 */

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
/**
 * @param {number} a initial value
 * @param {number} b target value
 * @param {number} t factor
 * @returns {number} .
 */

function lerp(a, b, t) {
  return a + t * (b - a);
}
/**
 * uses 0-4 buffer vectors
 *
 * @param {Vector3} a triangle point
 * @param {Vector3} b triangle point
 * @param {Vector3} c triangle point
 * @param {Vector3} origin ray origin
 * @param {Vector3} direction ray direction
 * @returns {Vector3?} intersection point
 */

function intersectsTriangle(a, b, c, origin, direction) {
  var edge1 = vec0.copy(b).sub(a);
  var edge2 = vec1.copy(c).sub(a);
  var pvec = vec2.copy(direction).cross(edge2);
  var det = edge1.dot(pvec);

  if (det < ZERO_THRESHOLD) {
    return null;
  }

  var tvec = vec3.copy(origin).sub(a);
  var u = tvec.dot(pvec);

  if (u < 0 || u > det) {
    return null;
  }

  var qvec = vec4.copy(tvec).cross(edge1);
  var v = direction.dot(qvec);

  if (v < 0 || u + v > det) {
    return null;
  }

  var t = edge2.dot(qvec) / det;
  return vecR.set(origin.x + t * direction.x, origin.y + t * direction.y, origin.z + t * direction.z);
}
/**
 * @param {Matrix4} matrix matrix to ger data from
 * @param {Quaternion} result result to write into
 *
 * @returns {Quaternion} result
 */

function fromRotationMatrix(matrix, result) {
  var data = matrix.elements;
  var m11 = data[0],
      m12 = data[4],
      m13 = data[8];
  var m21 = data[1],
      m22 = data[5],
      m23 = data[9];
  var m31 = data[2],
      m32 = data[6],
      m33 = data[10];
  var trace = m11 + m22 + m33;
  var s;

  if (trace > 0) {
    s = 0.5 / Math.sqrt(trace + 1.0);
    result.w = 0.25 / s;
    result.x = (m32 - m23) * s;
    result.y = (m13 - m31) * s;
    result.z = (m21 - m12) * s;
  } else if (m11 > m22 && m11 > m33) {
    s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
    result.w = (m32 - m23) / s;
    result.x = 0.25 * s;
    result.y = (m12 + m21) / s;
    result.z = (m13 + m31) / s;
  } else if (m22 > m33) {
    s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
    result.w = (m13 - m31) / s;
    result.x = (m12 + m21) / s;
    result.y = 0.25 * s;
    result.z = (m23 + m32) / s;
  } else {
    s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
    result.w = (m21 - m12) / s;
    result.x = (m13 + m31) / s;
    result.y = (m23 + m32) / s;
    result.z = 0.25 * s;
  }

  return result;
}

/***/ }),

/***/ "../src/framework/core/utils/appearance.js":
/*!*************************************************!*\
  !*** ../src/framework/core/utils/appearance.js ***!
  \*************************************************/
/*! exports provided: default, Appearance, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appearance", function() { return Appearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-classes-per-file */

/**
 * Stuff related with application appearance constants
 *
 * @file appearance.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */


/**
 * Pallete data
 */

var Palette = /*#__PURE__*/function (_Thingy) {
  _inherits(Palette, _Thingy);

  var _super = _createSuper(Palette);

  function Palette() {
    _classCallCheck(this, Palette);

    return _super.apply(this, arguments);
  }

  _createClass(Palette, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        background: '#293b49',
        first: '#bfc3c6',
        attention: '#d9243c',
        bright: '#77d6c1',
        dark: '#030710',
        accent: '#d1401f',
        matrix: '#458239',
        neutral: '#ffffe4',
        'neutral_second': '#ffe0dc',
        'neutral_dark': '#bfc3c6'
      };
    }
    /**
     * Creates new Color object
     *
     * @param {string} color .
     * @returns {Color} new Color object
     */

  }, {
    key: "getColor",
    value: function getColor(color) {
      return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromHEX(this.get(color));
    }
  }]);

  return Palette;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);
/**
 * Application Appearance data
 */


var Appearance = /*#__PURE__*/function (_Thingy2) {
  _inherits(Appearance, _Thingy2);

  var _super2 = _createSuper(Appearance);

  function Appearance() {
    _classCallCheck(this, Appearance);

    return _super2.apply(this, arguments);
  }

  _createClass(Appearance, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        palette: new Palette()
      };
    }
    /**
     * @returns {Palette} .
     */

  }, {
    key: "getColor",

    /**
     * this.palette.getColor alias
     *
     * @param {string} color .
     * @returns {Color} new Color object
     */
    value: function getColor(color) {
      return this.palette.getColor(color);
    }
  }, {
    key: "palette",
    get: function get() {
      return this.properties.palette;
    }
  }]);

  return Appearance;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Appearance);


/***/ }),

/***/ "../src/framework/core/utils/assert.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/assert.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file assert.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */

/**
 * Proxy for assert methods which can't display error in console if they unhandled
 */

/* harmony default export */ __webpack_exports__["default"] = (new Proxy(assert__WEBPACK_IMPORTED_MODULE_0___default.a, {
  get: function get(target, prop) {
    var field = target[prop];

    if (typeof field === 'function') {
      return function () {
        try {
          field.apply(void 0, arguments);
        } catch (err) {
          throw new Error(err);
        }
      };
    }

    return field;
  }
}));

/***/ }),

/***/ "../src/framework/core/utils/delays.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/delays.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/logger.js */ "../src/framework/core/utils/logger.js");
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/events_manager.js */ "../src/framework/core/utils/events_manager.js");
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file delays.js
 * @author tynrare
 * @version 1
 * @module Core/Utils/Delays
 */


/**
 * неймспейс c обертками для делеев, интервалов, реквестов и т.п.
 *
 * @namespace
 */

var Delays = {
  /**
   * callbacks on nearest game update
   *
   * @param {Function} callback callback function
   * @returns {number} id from {@link module:Core/Utils/EventsManager.EventsManager.on}
   */
  update: function update(callback) {
    return _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1___default.a.once('update', function (ms, dt) {
      try {
        callback(ms, dt);
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.error(err);
      }
    });
  },

  /**
   * callbacks on animation frame
   *
   * @param {Function} callback callback function
   * @returns {number} id requestAnimationFrame
   */
  immediate: function immediate(callback) {
    return requestAnimationFrame(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.error(err);
      }
    });
  },

  /**
   * callbacks intervals
   *
   * @param {Function} callback interval callback
   * @param {number} time interval delay
   * @returns {number} id setInterval
   */
  interval: function interval(callback, time) {
    return setInterval(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.error(err);
      }
    }, time);
  },

  /**
   * stops interval
   *
   * @param {number} id interval id
   */
  clearInterval: function (_clearInterval) {
    function clearInterval(_x) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (id) {
    clearInterval(id);
  }),

  /**
   * stops timeout
   *
   * @param {number} id timeout id
   */
  clearTimeout: function (_clearTimeout) {
    function clearTimeout(_x2) {
      return _clearTimeout.apply(this, arguments);
    }

    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };

    return clearTimeout;
  }(function (id) {
    clearTimeout(id);
  }),

  /**
   * callbacks timeouts
   *
   * @param {Function} callback timeout callback
   * @param {number} time timeout delay
   * @returns {number} id setTimeout
   */
  timeout: function timeout(callback, time) {
    return setTimeout(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.error(err);
      }
    }, time);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Delays);

/***/ }),

/***/ "../src/framework/core/utils/events_manager.js":
/*!*****************************************************!*\
  !*** ../src/framework/core/utils/events_manager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/x/workspace/code/ehhh/src/framework/core/utils/events_manager.js: Support for the experimental syntax 'classProperties' isn't currently enabled (20:18):\n\n\u001b[0m \u001b[90m 18 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mEventsManager\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mCoreEvents\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m\t_listenersCount \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\t_listeners \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mMap\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.expectPlugin (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Parser.parseClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Parser.pushClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Parser.parseClassMemberWithIsStatic (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Parser.parseClassMember (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12241:14\n    at Parser.withTopicForbiddingContext (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Parser.parseClassBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Parser.parseClass (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Parser.parseStatementContent (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Parser.parseStatement (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Parser.parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:254:32)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "../src/framework/core/utils/logger.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/logger.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/x/workspace/code/ehhh/src/framework/core/utils/logger.js: Support for the experimental syntax 'classProperties' isn't currently enabled (39:9):\n\n\u001b[0m \u001b[90m 37 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mLogger\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 | \u001b[39m\tgroups \u001b[33m=\u001b[39m \u001b[33mGROUPS\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m\t\u001b[90m/**\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 | \u001b[39m\u001b[90m\t * logging level for groups\u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.expectPlugin (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Parser.parseClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Parser.pushClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Parser.parseClassMemberWithIsStatic (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Parser.parseClassMember (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12241:14\n    at Parser.withTopicForbiddingContext (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Parser.parseClassBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Parser.parseClass (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Parser.parseStatementContent (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Parser.parseStatement (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Parser.parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:254:32)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "../src/rooms/COMMANDS.md":
/*!********************************!*\
  !*** ../src/rooms/COMMANDS.md ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # ehhh rooms\n| \n| ## Hilo3d");

/***/ }),

/***/ "../src/rooms/ehhh-board/room.js":
/*!***************************************!*\
  !*** ../src/rooms/ehhh-board/room.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rooms/html/index.js */ "../src/rooms/html/index.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/index.js */ "../src/framework/client/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/EhhhBoard
 */



/**
 * Simple test for modular windows
 */

var EhhhBoardRoom = /*#__PURE__*/function (_Thingy) {
  _inherits(EhhhBoardRoom, _Thingy);

  var _super = _createSuper(EhhhBoardRoom);

  function EhhhBoardRoom() {
    _classCallCheck(this, EhhhBoardRoom);

    return _super.apply(this, arguments);
  }

  _createClass(EhhhBoardRoom, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      // #draft	
      var app = new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]({
        div: new _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_0__["DomElementThingy"]({
          id: 'app-content-root'
        }),
        render: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]({
          canvas: document.createElement('canvas')
        }, {
          init: function init() {
            this.owner.path('div/div').appendChild(this.get('canvas'));
          }
        }),
        env: new _client_index_js__WEBPACK_IMPORTED_MODULE_2__["CanvasAppEvents"]()
      });
      app.init();
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {//..
    }
  }]);

  return EhhhBoardRoom;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (EhhhBoardRoom);

/***/ }),

/***/ "../src/rooms/hilo3d/app_root.js":
/*!***************************************!*\
  !*** ../src/rooms/hilo3d/app_root.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/html/index.js */ "../src/rooms/html/index.js");
/* harmony import */ var _client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/index.js */ "../src/framework/client/index.js");
/* harmony import */ var _resources_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources_manager.js */ "../src/rooms/hilo3d/resources_manager.js");
/* harmony import */ var _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/hilo3d_engine.js */ "../src/rooms/hilo3d/engine/hilo3d_engine.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file app_root.js
 *
 * @author tynrare
 * @version 2
 * @module Engine
 */
 //import PageManager from '@app/page_helpers/page_manager.js';





/**
 * Root application class
 *
 * @property {DomElementThingy} div dom element
 * @property {Hilo3dEngineThingy} render hilo engine render
 * @property {CanvasAppEvents} env system events and other
 * @property {object} game game state storage
 * @property {ResourcesManager} resources resources manager
 */

var AppRoot = /*#__PURE__*/function (_Thingy) {
  _inherits(AppRoot, _Thingy);

  var _super = _createSuper(AppRoot);

  function AppRoot() {
    _classCallCheck(this, AppRoot);

    return _super.apply(this, arguments);
  }

  _createClass(AppRoot, [{
    key: "initCallback",

    /**
     * Assigns new fields to events
     */
    value: function initCallback() {
      this.events.on('env/window.contextmenu', function (evt) {
        evt.preventDefault();
      });
    }
    /**
     * @override
     */

  }, {
    key: "getDefaultProperties",
    value: function getDefaultProperties() {
      return {
        strictInit: true,
        div: new _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_1__["DomElementThingy"]({
          id: 'hilo3d-room-content'
        }),
        //page: new PageManager({ dom: new DomElementThingy({ parentId: 'app-root' }) }),
        resources: new _resources_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
        // #order 1
        render: new _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
        // #order 2
        env: new _client_index_js__WEBPACK_IMPORTED_MODULE_2__["CanvasAppEvents"](),
        // #order 3
        game: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]()
      };
    }
    /**
     * Allows to stop all application on init error
     *
     * @override
     */

  }, {
    key: "init",
    value: function init() {
      try {
        _get(_getPrototypeOf(AppRoot.prototype), "init", this).call(this);
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

  }, {
    key: "resources",
    get: function get() {
      return this.properties.resources;
    }
    /**
     * @returns {Hilo3dEngineThingy} .
     */

  }, {
    key: "render",
    get: function get() {
      return this.properties.render;
    }
    /**
     * @returns {Thingy} .
     */

  }, {
    key: "game",
    get: function get() {
      return this.properties.game;
    }
  }]);

  return AppRoot;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (AppRoot);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo3d_camera.js":
/*!***************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo3d_camera.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rooms_hilo3d_input_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rooms/hilo3d/input/index.js */ "../src/rooms/hilo3d/input/index.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * - 06.07.20
 *
 * @file hilo3d_camera.js
 * @author tynrare
 * @version 2
 * @module Game/Engine
 */



/**
 * Wrapper for hilo camera
 */

var Hilo3dCameraManager = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dCameraManager, _Thingy);

  var _super = _createSuper(Hilo3dCameraManager);

  function Hilo3dCameraManager() {
    _classCallCheck(this, Hilo3dCameraManager);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dCameraManager, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        controls: new _rooms_hilo3d_input_index_js__WEBPACK_IMPORTED_MODULE_0__["BasicOrbitalCamera"]()
      };
    }
    /**
     * Creates hilo camera
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var camera = this.set('camera', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        aspect: innerWidth / innerHeight,
        far: 1000,
        near: 0.1,
        z: 20,
        y: 20,
        rotationX: -45
      }));
      this.path('*/stage').camera = camera;
    }
    /**
     * @returns {PerspectiveCamera} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('camera');
    }
  }]);

  return Hilo3dCameraManager;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dCameraManager);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo3d_engine.js":
/*!***************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo3d_engine.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _hilo_debug_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hilo_debug_helper.js */ "../src/rooms/hilo3d/engine/hilo_debug_helper.js");
/* harmony import */ var _hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hilo3d_camera.js */ "../src/rooms/hilo3d/engine/hilo3d_camera.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file index.js
 * @author tynrare
 * @version 3
 * @module Render/Hilo3d
 */




/**
 * Wrapper class for Hilo3d management
 */

var Hilo3dEngineThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dEngineThingy, _Thingy);

  var _super = _createSuper(Hilo3dEngineThingy);

  function Hilo3dEngineThingy() {
    _classCallCheck(this, Hilo3dEngineThingy);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dEngineThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        camera: new _hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
        debug: new _hilo_debug_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
      };
    }
    /**
     * Creates Hilo instance
     *
     * @listens window#onresize
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var _this = this;

      var clearColor = cgn.appearance.getColor('first');
      var stage = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        container: this.path('/div').get('div'),
        clearColor: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 0, 0, 0),
        alpha: true,
        width: innerWidth,
        height: innerHeight,
        fog: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          mode: 'LINEAR',
          // LINEAR, EXP, EXP2
          start: 100,
          end: 150,
          density: 0.01,
          color: clearColor
        })
      });
      this.set('stage', stage);
      this.events.on('/env/window.resize', function () {
        stage.resize(innerWidth, innerHeight);
        _this.camera.aspect = innerWidth / innerHeight;
      });
      this.events.on('/env/time.frame', function () {
        var hardcodedDt = 10;
        stage.tick(hardcodedDt);
      }); //this.renderer = this.world.renderer;
      //this.gl = this.renderer.gl;

      this.set('canvas', stage.canvas); //stage.canvas.style.backgroundImage = `background-image: radial-gradient(circle, ${cgn.appearance.get('background')}, ${cgn.appearance.get('dark')});`
      //this.canvas = this.world.canvas;
      // this.renderer.useInstanced = true;

      var angle = 0.7;
      new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        color: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromHEX('#f6edc9'),
        direction: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(-angle, -1, 0),
        amount: 1
      }).addTo(stage);
      new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        color: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromHEX('#bfe8f5'),
        direction: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(angle / 2, 0.5, 0),
        amount: 0.1
      }).addTo(stage);
      new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        color: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromHEX('#c9e9f6'),
        amount: 0.6
      }).addTo(stage);
    }
    /**
     * @returns {Stage} .
     */

  }, {
    key: "disposeCallback",

    /**
     * cleanup
     */
    value: function disposeCallback() {
      this.get('stage').destroy();
    }
  }, {
    key: "stage",
    get: function get() {
      return this.get('stage');
    }
    /**
     * @returns {object} .
     */

  }, {
    key: "canvas",
    get: function get() {
      return this.get('canvas');
    }
    /**
     * @returns {Camera} .
     */

  }, {
    key: "camera",
    get: function get() {
      return this.stage.camera;
    }
    /**
     * @returns {HiloDebugHelper} .
     */

  }, {
    key: "debug",
    get: function get() {
      return this.properties.debug;
    }
  }]);

  return Hilo3dEngineThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dEngineThingy);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_debug_helper.js":
/*!*******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_debug_helper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _core_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/math.js */ "../src/framework/core/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Assists with debug primitives
 */

var HiloDebugHelper = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloDebugHelper, _Thingy);

  var _super = _createSuper(HiloDebugHelper);

  function HiloDebugHelper() {
    _classCallCheck(this, HiloDebugHelper);

    return _super.apply(this, arguments);
  }

  _createClass(HiloDebugHelper, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        geometry: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        materials: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        lines: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        hilo: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          name: 'debug'
        })
      };
    }
    /**
     * .
     */

  }, {
    key: "initCallback",
    value: function initCallback() {
      this.owner.stage.addChild(this.hilo);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * Removes all debug data
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      this.hilo.removeFromParent();
      this.set('hilo', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
      this.owner.stage.addChild(this.hilo);
      this.clearLines();
    }
    /**
     * @param {Vector3} normal .
     * @param {Vector3} pos .
     * @param {string} color name
     */

  }, {
    key: "drawNormal",
    value: function drawNormal(normal, pos) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'matrix';
      var line = this.properties.lines.touch(color, function () {
        return new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          color: cgn.appearance.palette.get(color)
        });
      });
      line.addLine(pos, _core_math_js__WEBPACK_IMPORTED_MODULE_3__["cache"].vec3.v0.copy(normal).scale(_core_math_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GEOM_NORMALS_SIZE"]).add(pos));
    }
    /**
     * @param {Vector3} a .
     * @param {Vector3} b .
     * @param {string} color name
     */

  }, {
    key: "drawLine",
    value: function drawLine(a, b) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'matrix';
      var line = this.properties.lines.touch(color, function () {
        return new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          color: cgn.appearance.palette.get(color)
        });
      });
      line.addLine(a, b);
    }
    /**
     * @param {string} color name
     */

  }, {
    key: "clearLine",
    value: function clearLine(color) {
      var line = this.properties.lines.get(color);

      if (line) {
        line.clear();
      }
    }
    /**
     * .
     */

  }, {
    key: "clearLines",
    value: function clearLines() {
      for (var color in this.properties.lines.cache) {
        this.clearLine(color);
      }
    }
    /**
     * @param {number} [radius=1] radius scale
     * @param {string} [color='attention'] .
     * @returns {Mesh} .
     */

  }, {
    key: "makeSphere",
    value: function makeSphere() {
      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attention';
      var mesh = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        useInstanced: true,
        geometry: this.properties.geometry.touch(radius, function () {
          return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            radius: radius * _core_math_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GEOM_NORMALS_SIZE"],
            heightSegments: 4,
            widthSegments: 4
          });
        }),
        material: this.properties.materials.touch(color, function () {
          return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            lightType: 'NONE',
            diffuse: cgn.appearance.getColor(color)
          });
        })
      });
      this.hilo.addChild(mesh);
      return mesh;
    }
    /**
     * @returns {Node} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.properties.hilo;
    }
  }]);

  return HiloDebugHelper;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloDebugHelper);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_line_render.js":
/*!******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_line_render.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-magic-numbers */

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */


/**
 * hilo3d line draw
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 */

var HiloLineRender = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloLineRender, _Thingy);

  var _super = _createSuper(HiloLineRender);

  function HiloLineRender() {
    _classCallCheck(this, HiloLineRender);

    return _super.apply(this, arguments);
  }

  _createClass(HiloLineRender, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        color: '#FF0000'
      };
    }
    /**
     * Creates node
     */

  }, {
    key: "initCallback",
    value: function initCallback() {
      var material = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        diffuse: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromHEX(this.get('color')),
        lightType: 'NONE'
      });
      var geometry = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        mode: !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).LINES
      });
      var mesh = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        geometry: geometry,
        material: material
      });
      this.set('hilo', mesh);
      this.path('/render').stage.addChild(mesh);
    }
    /**
     * #bug: erases addPoints()'s draw
     * #chain
     *
     * @param {Vector3} a line point start
     * @param {Vector3} b line point end
     * @returns {HiloLineRender} this
     */

  }, {
    key: "addLine",
    value: function addLine(a, b) {
      var g = this.hilo.geometry;
      g.addLine(a.elements, b.elements);
      return this;
    }
    /**
     * #chain
     *
     * @param {Vector3} a line next point
     * @returns {HiloLineRender} this
     */

  }, {
    key: "addPoint",
    value: function addPoint(a) {
      var _g$indices;

      var g = this.hilo.geometry;
      var c = ((_g$indices = g.indices) === null || _g$indices === void 0 ? void 0 : _g$indices.count) || 0;

      if (c) {
        var data = g.vertices.data;
        g.addLine([data[data.length - 3], data[data.length - 2], data[data.length - 1]], a.elements);
      } else {
        g.addPoints(a.elements);
      }

      return this;
    }
    /**
     * Removes points info
     */

  }, {
    key: "clear",
    value: function clear() {
      var geometry = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        mode: !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).LINES
      });
      this.hilo.geometry = geometry;
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Mesh} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('hilo');
    }
    /**
     * @returns {Color} .
     */

  }, {
    key: "color",
    get: function get() {
      return this.hilo.material.diffuse;
    }
    /**
     * @param {Color} c .
     */
    ,
    set: function set(c) {
      this.hilo.material.diffuse = c;
    }
  }]);

  return HiloLineRender;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloLineRender);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_mesh_thingy.js":
/*!******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_mesh_thingy.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */



/**
 * hilo3d Node wrapper. Does two things:
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 * @property {boolean} [debugNormalsEnabled=false] draws mesh normals
 */

var HiloMeshThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloMeshThingy, _Thingy);

  var _super = _createSuper(HiloMeshThingy);

  function HiloMeshThingy() {
    _classCallCheck(this, HiloMeshThingy);

    return _super.apply(this, arguments);
  }

  _createClass(HiloMeshThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        debugNormalsEnabled: false
      };
    }
    /**
     * Creates node
     */

  }, {
    key: "postinitCallback",
    value: function postinitCallback() {
      var _this$owner$hilo, _this$owner;

      //code debt по идее нельзя получать доступ к функции "какого-то там класса",
      //в идеале копирование должно происходить напрямую из другого HiloMeshThingy
      var mesh = this.path('/resources').getMeshClone(this.get('name'));
      this.set('hilo', mesh);
      ((_this$owner$hilo = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.hilo) !== null && _this$owner$hilo !== void 0 ? _this$owner$hilo : this.path('/render').stage).addChild(mesh);

      if (this.properties.debugNormalsEnabled) {
        this.enableDebugNormals();
      }
    }
    /**
     * Displays normals directions
     */

  }, {
    key: "enableDebugNormals",
    value: function enableDebugNormals() {
      var _this = this;

      cgn.delays.immediate(function () {
        /* eslint-disable no-magic-numbers */
        _this.properties.debugNormalsEnabled = true;

        if (_this.get('debugLinesThingy')) {
          return;
        }

        var lines = _this.set('debugLinesThingy', new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]());

        var g = _this.hilo.geometry;
        var indices = g.indices;
        var len = indices.realLength;

        for (var i = 0; i < len; i += 3) {
          var idx = indices.get(i);
          var p = g.vertices.get(idx).clone();
          var n = g.normals.get(idx).clone();
          lines.addLine(p, n.add(p));
        }
        /* eslint-enable no-magic-numbers */

      });
    }
    /**
     * Displays normals directions
     */

  }, {
    key: "disableDebugNormals",
    value: function disableDebugNormals() {
      this.properties.debugNormalsEnabled = false;
      this.del('debugLinesThingy', true);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Mesh} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('hilo');
    }
  }]);

  return HiloMeshThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloMeshThingy);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_node_wrapper.js":
/*!*******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_node_wrapper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */


/**
 * hilo3d Node wrapper. Does two things:
 */

var HiloNodeWrapper = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloNodeWrapper, _Thingy);

  var _super = _createSuper(HiloNodeWrapper);

  function HiloNodeWrapper() {
    _classCallCheck(this, HiloNodeWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HiloNodeWrapper, [{
    key: "initCallback",

    /**
     * Creates node
     */
    value: function initCallback() {
      var _this$owner$hilo, _this$owner;

      var container = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        name: this.get('id')
      });
      this.set('_hilo', container, {
        pointer: true
      });
      ((_this$owner$hilo = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.hilo) !== null && _this$owner$hilo !== void 0 ? _this$owner$hilo : this.path('/render').stage).addChild(container);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Node} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('_hilo');
    }
  }]);

  return HiloNodeWrapper;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloNodeWrapper);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_raycast_helper.js":
/*!*********************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_raycast_helper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/x/workspace/code/ehhh/src/rooms/hilo3d/engine/hilo_raycast_helper.js: Support for the experimental syntax 'classProperties' isn't currently enabled (23:6):\n\n\u001b[0m \u001b[90m 21 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mHiloRaycastHelper\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mThingy\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m\tray \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mRay\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m\t\u001b[90m/**\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m\u001b[90m\t * #chain\u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.expectPlugin (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Parser.parseClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Parser.pushClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Parser.parseClassMemberWithIsStatic (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Parser.parseClassMember (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12241:14\n    at Parser.withTopicForbiddingContext (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Parser.parseClassBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Parser.parseClass (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Parser.parseStatementContent (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Parser.parseStatement (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Parser.parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:254:32)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "../src/rooms/hilo3d/environment/dev_default_env.js":
/*!**********************************************************!*\
  !*** ../src/rooms/hilo3d/environment/dev_default_env.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _core_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/math.js */ "../src/framework/core/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file dev_default_env.js
 * @author tynrare
 * @version 1
 * @module Game/Objects
 */




var DEFAULT_PLANE_UNITS = 10;
var PLANE_SIZE = 100;
/**
 * Map with debug props
 */

var DefaultDevHiloEnvMap = /*#__PURE__*/function (_Thingy) {
  _inherits(DefaultDevHiloEnvMap, _Thingy);

  var _super = _createSuper(DefaultDevHiloEnvMap);

  function DefaultDevHiloEnvMap() {
    _classCallCheck(this, DefaultDevHiloEnvMap);

    return _super.apply(this, arguments);
  }

  _createClass(DefaultDevHiloEnvMap, [{
    key: "postinitCallback",

    /**
     * inits scene container
     */
    value: function postinitCallback() {
      this.makeMap();
    }
    /**
     * @returns {Node} created container (add it to stage)
     */

  }, {
    key: "makeMap",
    value: function makeMap() {
      var container = this.set('container', new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_2__["HiloNodeWrapper"]({
        id: 'default_dev_map'
      })).hilo;
      var plane = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        rotationX: -90,
        y: -_core_math_js__WEBPACK_IMPORTED_MODULE_3__["PRECISE_GEOM_THRESHOLD"],
        //x: PLANE_SIZE / 2,
        //z: PLANE_SIZE / 2,
        geometry: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          width: PLANE_SIZE,
          height: PLANE_SIZE
        }),
        material: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          uvMatrix: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().fromScaling(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(PLANE_SIZE / DEFAULT_PLANE_UNITS, PLANE_SIZE / DEFAULT_PLANE_UNITS)),
          lightType: 'NONE',
          side: !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).FRONT,
          diffuse: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            flipY: true,
            src: '/res/assets/dev/metric_grid.png'
          })
        })
      });
      container.addChild(plane);
      container.addChild(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        size: 10
      }));
      return container;
    }
  }]);

  return DefaultDevHiloEnvMap;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (DefaultDevHiloEnvMap);

/***/ }),

/***/ "../src/rooms/hilo3d/index.js":
/*!************************************!*\
  !*** ../src/rooms/hilo3d/index.js ***!
  \************************************/
/*! exports provided: Hilo3dEngineThingy, Hilo3dCameraManager, HiloMeshThingy, HiloLineRender, HiloNodeWrapper, HiloRaycastHelper, ResourcesManager, AppRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources_manager.js */ "../src/rooms/hilo3d/resources_manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourcesManager", function() { return _resources_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _app_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app_root.js */ "../src/rooms/hilo3d/app_root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppRoot", function() { return _app_root_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/hilo3d_engine.js */ "../src/rooms/hilo3d/engine/hilo3d_engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hilo3dEngineThingy", function() { return _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _engine_hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/hilo3d_camera.js */ "../src/rooms/hilo3d/engine/hilo3d_camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hilo3dCameraManager", function() { return _engine_hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _engine_hilo_mesh_thingy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/hilo_mesh_thingy.js */ "../src/rooms/hilo3d/engine/hilo_mesh_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloMeshThingy", function() { return _engine_hilo_mesh_thingy_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _engine_hilo_line_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloLineRender", function() { return _engine_hilo_line_render_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _engine_hilo_node_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/hilo_node_wrapper.js */ "../src/rooms/hilo3d/engine/hilo_node_wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloNodeWrapper", function() { return _engine_hilo_node_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/hilo_raycast_helper.js */ "../src/rooms/hilo3d/engine/hilo_raycast_helper.js");
/* harmony import */ var _engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "HiloRaycastHelper", function() { return _engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7___default.a; });
/**
 * @file index.js
 * @author tynrare
 * @version 2
 * @module Rooms/Hilo3d
 */

 // ===
// Hilo3d









/***/ }),

/***/ "../src/rooms/hilo3d/input/basic_orbital_camera.js":
/*!*********************************************************!*\
  !*** ../src/rooms/hilo3d/input/basic_orbital_camera.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/x/workspace/code/ehhh/src/rooms/hilo3d/input/basic_orbital_camera.js: Support for the experimental syntax 'classProperties' isn't currently enabled (151:8):\n\n\u001b[0m \u001b[90m 149 | \u001b[39m\t}\u001b[0m\n\u001b[0m \u001b[90m 150 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 151 | \u001b[39m\tcache \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\t      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 152 | \u001b[39m\t\tzoom\u001b[33m:\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 153 | \u001b[39m\t\tdistance\u001b[33m:\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 154 | \u001b[39m\t\tdirection\u001b[33m:\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mVector2\u001b[39m()\u001b[33m,\u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.expectPlugin (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Parser.parseClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Parser.pushClassProperty (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Parser.parseClassMemberWithIsStatic (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Parser.parseClassMember (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12241:14\n    at Parser.withTopicForbiddingContext (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Parser.parseClassBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Parser.parseClass (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Parser.parseStatementContent (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Parser.parseStatement (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Parser.parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:254:32)\n    at /home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/x/workspace/code/ehhh/dev_subroutine/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "../src/rooms/hilo3d/input/index.js":
/*!******************************************!*\
  !*** ../src/rooms/hilo3d/input/index.js ***!
  \******************************************/
/*! exports provided: BasicOrbitalCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_orbital_camera.js */ "../src/rooms/hilo3d/input/basic_orbital_camera.js");
/* harmony import */ var _basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "BasicOrbitalCamera", function() { return _basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Rooms/Hilo3d
 */



/***/ }),

/***/ "../src/rooms/hilo3d/resources_manager.js":
/*!************************************************!*\
  !*** ../src/rooms/hilo3d/resources_manager.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file resources_manager.js
 * @author tynrare
 * @version 1
 * @module Engine
 */


var res = {};
/**
 * Handles assets files and caches
 *
 * @example
 *
 * @property {object} locations files paths
 */

var ResourcesManager = /*#__PURE__*/function (_Thingy) {
  _inherits(ResourcesManager, _Thingy);

  var _super = _createSuper(ResourcesManager);

  function ResourcesManager() {
    _classCallCheck(this, ResourcesManager);

    return _super.apply(this, arguments);
  }

  _createClass(ResourcesManager, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        locations: res,
        gltfLoader: new !(function webpackMissingModule() { var e = new Error("Cannot find module 'hilo3d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
      };
    }
    /**
     * @override
     * @param {ResourcesManager} resources other manager
     * @returns {ResourcesManager} this
     */

  }, {
    key: "copy",
    value: function copy(resources) {
      this.cache = resources.cache;
      return this;
    }
    /**
     * Call it before any actions
     *
     *
     * @param {object} [locations=this.properties.locations] .
     * @param {object} locations.meshes paths to meshes
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preload",
    value: function preload() {
      var locations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.properties.locations;
      this.properties.locations = locations;
      return this.preloadMeshes(this.properties.locations.meshes);
    } //==== Methods

    /**
     * Same as getMash but creates clone
     *
     * @param {string} name cached mesh name
     * @returns {Mesh} clone of cached mesh
     */

  }, {
    key: "getMeshClone",
    value: function getMeshClone(name) {
      return this.getMesh(name).clone(false);
    }
    /**
     * Finds previously preloaded model/scene and cretes clone
     *
     * @example
     * AssetManager.instance
     *              .preloadMesh('my_mesh', '/path/to/my/mesh')
     *              .then(()=>{
     *                AssetManager.instance.getMeshClone('my_mesh');
     *               });
     * @param {string} name cached mesh name
     * @returns {Mesh} clone of cached mesh
     */

  }, {
    key: "getMesh",
    value: function getMesh(name) {
      var meshes = this.cache.meshes;
      cgn.assert.ok(meshes && meshes[name], "No model ".concat(name, " found in cache. You have to preloadModel(name, src)"));
      return meshes[name];
    }
    /**
     * Preloads and saves models in memory.
     * You can access them by
     *
     * @async
     * @param {string} name name you can access model after
     * @param {string} path file path
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preloadMesh",
    value: function preloadMesh(name, path) {
      var _this = this;

      this.cache.GLTFs = this.cache.GLTFs || {};
      this.cache.meshes = this.cache.meshes || {};
      return new Promise(function (resolve, reject) {
        _this.get('gltfLoader').load({
          src: path
        }).then(function (model) {
          cgn.log.group('GAME_RES_OPERATION', "Node from ".concat(path, " preloaded as '").concat(name, "' scene"));
          _this.cache.GLTFs[name] = model;

          for (var i in model.meshes) {
            var mesh = model.meshes[i];
            var meshname = mesh.parent.name;
            cgn.log.group('GAME_RES_OPERATION', "Mesh from scene '".concat(name, "' preloaded as '").concat(meshname, "' mesh"));
            _this.cache.meshes[meshname] = mesh;
          }

          resolve();
        })["catch"](function (reason) {
          reject(reason);
        });
      });
    }
    /**
     * @param {object} meshes list of .gltf files to preload. Keys will be used as names. Path field as src
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preloadMeshes",
    value: function preloadMeshes(meshes) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var promises = [];

        for (var k in meshes) {
          promises.push(_this2.preloadMesh(k, meshes[k]));
        }

        Promise.all(promises).then(function () {
          return resolve();
        })["catch"](function (reason) {
          reject(reason);
        });
      });
    }
  }]);

  return ResourcesManager;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourcesManager);

/***/ }),

/***/ "../src/rooms/hilo3d/room.js":
/*!***********************************!*\
  !*** ../src/rooms/hilo3d/room.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/environment/dev_default_env.js */ "../src/rooms/hilo3d/environment/dev_default_env.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/Hilo3d
 */



/**
 * Simple test for modular windows
 */

var Hilo3dRoom = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dRoom, _Thingy);

  var _super = _createSuper(Hilo3dRoom);

  function Hilo3dRoom() {
    _classCallCheck(this, Hilo3dRoom);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dRoom, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      this.app = new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["AppRoot"]();
      this.app.init();
      this.app.get('game').touch('env', function () {
        return new _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }); //app.get('game').set('map', new HiloMeshThingy({ name: 'cube' }));
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.app.dispose();
    }
  }]);

  return Hilo3dRoom;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dRoom);

/***/ }),

/***/ "../src/rooms/html/dom_element_thingy.js":
/*!***********************************************!*\
  !*** ../src/rooms/html/dom_element_thingy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file dom_element_thingy.js
 *
 * @author tynrare
 * @version 3
 * @module Rooms/HTML
 */

/**
 * Thingy to control html element lifecycle
 * Id's and Thingies tree reflects dom tree
 *
 * properties
 *
 * @class
 * @property {string?} [id] dom element id
 * @property {string} [class='div'] dom element class
 * @property {string?} [parentId] parent dom element id
 * @property {Element} [_div] dom element ref
 */

var DomElementThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(DomElementThingy, _Thingy);

  var _super = _createSuper(DomElementThingy);

  function DomElementThingy() {
    _classCallCheck(this, DomElementThingy);

    return _super.apply(this, arguments);
  }

  _createClass(DomElementThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        parentId: 'ehhh-app-content-root'
      };
    }
    /**
     * Creates page dom. div by default
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var _this$get, _this$owner;

      var container = document.createElement(this.touch('class', function () {
        return 'div';
      }));

      if (this.get('id')) {
        container.id = this.get('id');
      }

      this.set('div', container);
      var parentId = (_this$get = this.get('parentId')) !== null && _this$get !== void 0 ? _this$get : (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.get('id');

      if (parentId) {
        this.set('parentId', parentId);
        document.getElementById(parentId).appendChild(container);
      } else {
        document.body.appendChild(container);
      }
    }
    /**
     * Cleanups data
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      var div = this.get('div');
      div.parentNode.removeChild(div);
    }
  }]);

  return DomElementThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (DomElementThingy);

/***/ }),

/***/ "../src/rooms/html/index.js":
/*!**********************************!*\
  !*** ../src/rooms/html/index.js ***!
  \**********************************/
/*! exports provided: DomElementThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_element_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_element_thingy.js */ "../src/rooms/html/dom_element_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomElementThingy", function() { return _dom_element_thingy_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Rooms/HTML
 */



/***/ }),

/***/ "../src/rooms/subroutine.js":
/*!**********************************!*\
  !*** ../src/rooms/subroutine.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _COMMANDS_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COMMANDS.md */ "../src/rooms/COMMANDS.md");
/* harmony import */ var _COMMANDS_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_COMMANDS_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_core_namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core_namespace.js */ "../src/framework/core/core_namespace.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file index.js
 *
 * @author tynrare
 * @version 2
 * @module Rooms
 */

/* eslint-disable global-require, camelcase, max-len, max-statements */
// #draft scope



var cases = {
  Hilo3d: __webpack_require__(/*! ./hilo3d/room.js */ "../src/rooms/hilo3d/room.js"),
  EhhhBoard: __webpack_require__(/*! ./ehhh-board/room.js */ "../src/rooms/ehhh-board/room.js") //ModularWindowTest: require('@test/manual/modular_window.mtest.js'),
  //AppThingyMinimalTest: require('@test/manual/app_thingy_minimal.mtest.js'),
  //HiloLineDrawTest: require('@test/manual/hilo_line_draw.mtest.js'),
  //Math3dTest: require('./math/math3d.js'),
  //HiloNormalsMeshDebugTest: require('@test/manual/hilo_normals_debug_draw.mtest.js'),
  //HiloRayNormalTest: require('@test/manual/hilo_ray_normal.mtest.js'),
  //MeshGraphGeomentryTest: require('@test/manual/mesh_graph_geomentry.mtest.js'),
  //MeshGraphMathCase1: require('@test/manual/mesh_graph_math_case_1.mtest.js'),
  //MeshGraphMathCase2: require('@test/manual/mesh_graph_math_case_2.mtest.js'),
  //MeshGraphMathCase3: require('@test/manual/mesh_graph_math_case_3.mtest.js'),
  //MeshGraphMathCase4: require('@test/manual/mesh_graph_math_case_4.mtest.js'),
  //MeshGraphMathSandbox: require('@test/manual/mesh_graph_math_case_x.mtest.js'),
  //PaperioPointsCase1: require('@test/manual/paperio_points_case_1.mtest.js'),
  //PaperioPointsCase2: require('@test/manual/paperio_points_case_2.mtest.js'),
  //PaperioPointsCase3: require('@test/manual/paperio_points_case_3.mtest.js'),
  //HiloMinimalShaderTest: require('@test/manual/hilo_minimal_shader.mtest.js'),
  //PaperioDrawCase1: require('@test/manual/paperio_draw_case_1.mtest.js'),
  //PaperioGameCase1: require('@test/manual/paperio_game_case_1.mtest.js')

};
/**
 * Class to run manual tests
 */

var RoomsSubroutine = /*#__PURE__*/function (_Thingy) {
  _inherits(RoomsSubroutine, _Thingy);

  var _super = _createSuper(RoomsSubroutine);

  function RoomsSubroutine() {
    _classCallCheck(this, RoomsSubroutine);

    return _super.apply(this, arguments);
  }

  _createClass(RoomsSubroutine, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      this.listenHash();
      window.onhashchange = this.listenHash.bind(this);
    }
    /**
     * #draft
     */

  }, {
    key: "listenHash",
    value: function listenHash() {
      var urlParams = new URLSearchParams(window.location.search);
      var h = window.location.hash.substr(1);
      this.del('active');

      if (h.length > 0) {
        document.getElementById('ehhh-app-content-root').innerHTML = '';
        var Case = cases[h]["default"];
        this.set('active', new Case());
      } else {
        document.getElementById('ehhh-app-content-root').innerHTML = _COMMANDS_md__WEBPACK_IMPORTED_MODULE_0___default.a;
      }
    }
  }]);

  return RoomsSubroutine;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__["Thingy"]);

window.cgn = _core_core_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"];
var instance = new RoomsSubroutine();
instance.init();

/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mcmFtZXdvcmsvY2xpZW50L2NhbnZhc19hcHBfZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvZnJhbWV3b3JrL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZyYW1ld29yay9jb3JlL2NvcmVfbmFtZXNwYWNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvZnJhbWV3b3JrL2NvcmUvZXhjaGFuZ2UvY29yZS9ldmVudF90aGluZ3kuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mcmFtZXdvcmsvY29yZS9leGNoYW5nZS9jb3JlL3NoZWxmX3RoaW5neS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZyYW1ld29yay9jb3JlL2V4Y2hhbmdlL2NvcmUvdGhpbmd5LmpzIiwid2VicGFjazovLy8uLi9zcmMvZnJhbWV3b3JrL2NvcmUvZXhjaGFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mcmFtZXdvcmsvY29yZS9leGNoYW5nZS91dGlscy9pZF9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mcmFtZXdvcmsvY29yZS9tYXRoLmpzIiwid2VicGFjazovLy8uLi9zcmMvZnJhbWV3b3JrL2NvcmUvdXRpbHMvYXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZyYW1ld29yay9jb3JlL3V0aWxzL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZyYW1ld29yay9jb3JlL3V0aWxzL2RlbGF5cy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2VoaGgtYm9hcmQvcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9hcHBfcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9lbmdpbmUvaGlsbzNkX2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9lbmdpbmUvaGlsbzNkX2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9lbmdpbmUvaGlsb19kZWJ1Z19oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yb29tcy9oaWxvM2QvZW5naW5lL2hpbG9fbGluZV9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yb29tcy9oaWxvM2QvZW5naW5lL2hpbG9fbWVzaF90aGluZ3kuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yb29tcy9oaWxvM2QvZW5naW5lL2hpbG9fbm9kZV93cmFwcGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvcm9vbXMvaGlsbzNkL2Vudmlyb25tZW50L2Rldl9kZWZhdWx0X2Vudi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9yZXNvdXJjZXNfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Jvb21zL2hpbG8zZC9yb29tLmpzIiwid2VicGFjazovLy8uLi9zcmMvcm9vbXMvaHRtbC9kb21fZWxlbWVudF90aGluZ3kuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yb29tcy9odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvcm9vbXMvc3Vicm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJXaW5kb3dFdmVudHMiLCJhZGRFdmVudCIsIndpbmRvdyIsImNhbnZhcyIsInNldCIsInBhdGgiLCJkb2N1bWVudCIsImVyciIsImNnbiIsImxvZyIsImdyb3VwV2FybiIsInR5cGUiLCJlbGVtZW50IiwiYWxpYXMiLCJmdW5jIiwiZXZ0IiwiZXZlbnRzIiwiZW1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b3VjaCIsIlNoZWxmVGhpbmd5IiwiYWRkIiwiZ2V0IiwiayIsInByb3BlcnRpZXMiLCJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlRoaW5neSIsIklucHV0RXZlbnRzIiwib24iLCJldmVudCIsInJlcGVhdCIsImtleXByZXNzIiwiZG93biIsImFjdGlvbiIsImNvZGUiLCJUaW1lRXZlbnRzIiwibmV4dEZyYW1lIiwiZGVsYXlzIiwiY2xlYXJJbnRlcnZhbCIsIl9mcmFtZUlkIiwiaW50ZXJ2YWwiLCJmcHMiLCJpZCIsInRpbWVvdXQiLCJsaWZlc3RhdHVzIiwiTElGRUNZQ0xFX1NUQVRVUyIsIkRJU1BPU0VEIiwiZnJhbWUiLCJzdHJpY3RMb29wIiwiZXJyb3IiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhIiwiaW5uZXJIVE1MIiwiYiIsIm9uY2xpY2siLCJvd25lciIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJDYW52YXNBcHBFdmVudHMiLCJ0aW1lIiwiaW5wdXQiLCJsb2dnZXIiLCJhc3NlcnQiLCJhcHBlYXJhbmNlIiwiQXBwZWFyYW5jZSIsIkNBTExCQUNIX0ZVTkNfUE9TVEZJWCIsIkV2ZW50VGhpbmd5IiwiY2FsbGJhY2siLCJyZWdpc3Rlckxpc3RlbmVyIiwia2V5IiwiY2FjaGVFdmVudHMiLCJsaXN0ZW5lciIsImxvd2xldmVsIiwib2ZmIiwiZGVsIiwidCIsImFyZ3MiLCJkb3Rwb3MiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsImZ1bmNOYW1lIiwiYXBwbHkiLCJjYWNoZSIsIkV2ZW50RW1pdHRlciIsIk5hbm9UaGluZ3kiLCJpdGVtIiwiZ2V0SWRzSGVscGVyIiwiZ2VuU3VpdGFibGVJZCIsImZvcmNlU2NvcGUiLCJ0aGluZ3kiLCJJZEhlbHBlciIsIklOSVRJQUxJWkVEIiwiRXJyb3IiLCJpbml0IiwiZGlzcG9zZSIsImJpbmQiLCJvbmNlIiwiUlVOVElNRV9QUk9QX1BSRUZJWCIsInNjb3BlIiwibmV3aWQiLCJsZW5ndGgiLCJuZXh0aWQiLCJuZXh0SWQiLCJ2ZWMzIiwidjAiLCJWZWN0b3IzIiwidjEiLCJ2MiIsInYzIiwidjQiLCJ2NSIsInY2IiwidjciLCJ2OCIsInY5IiwidmVjMCIsInZlYzEiLCJ2ZWMyIiwidmVjNCIsInZlY1IiLCJQRVJGRUNUX05VTUJFUiIsIk1hdGgiLCJzaW4iLCJQSSIsInBvdyIsIkRFRkFVTFRfR0VPTV9USFJFU0hPTEQiLCJQUkVDSVNFX0dFT01fVEhSRVNIT0xEIiwiWkVST19USFJFU0hPTEQiLCJMT09TRV9HRU9NX1RIUkVTSE9MRCIsIkRFRkFVTFRfR0VPTV9OT1JNQUxTX1NJWkUiLCJnZXREaXJlY3Rpb24iLCJheGlzIiwibWF0cml4IiwibWF0IiwiZWxlbWVudHMiLCJ2IiwieCIsInkiLCJ6IiwiYWxpZ25Ub05vcm1hbCIsIm5vcm1hbCIsIm5vZGUiLCJueCIsIndvcmxkTWF0cml4IiwibnoiLCJxdWF0ZXJuaW9uIiwicm90YXRlWCIsImRvdCIsInJvdGF0ZVoiLCJzb3J0QnlEaXN0YW5jZSIsIm9yaWdpbiIsInBvaW50cyIsInNvcnQiLCJzcXVhcmVkRGlzdGFuY2UiLCJjcm9zc1Byb2R1Y3QyVmVjdG9yIiwiYTEiLCJhMiIsImIxIiwiYjIiLCJwb3NPblBsYW5lIiwicG9pbnQiLCJkaXN0IiwiY2xvbmUiLCJzdWIiLCJ1IiwiYWJzIiwiY29weSIsImNyb3NzIiwibm9ybWFsaXplIiwiVmVjdG9yMiIsInBvczJkdG8zZCIsInBvcyIsInNjYWxlIiwiYWxpZ25Ob3JtYWwiLCJwcm9qZWN0T25QbGFuZSIsImxvY2FsIiwiZm9yd2FyZCIsInJpZ2h0IiwicHJvamVjdE9uTGluZSIsImxpbmUiLCJwcm9qZWN0TGluZU9uTGluZSIsInlEaXN0IiwiZGlzdGFuY2UiLCJ6RGlzdCIsInByb3BvcnRpb24iLCJ5eiIsInAiLCJpc1BvaW50T25MaW5lVGhyZXNob2xkZWQiLCJpc1BvaW50T25MaW5lIiwibiIsImlzUG9pbnRJblBsYW5lUG9zaXRpdmUiLCJuZWdhdGUiLCJpc1BvaW50SW5QbGFuZVBvc2l0aXZlVGhyZXNob2xkZWQiLCJwbyIsInRocmVzaG9sZCIsIm8iLCJmaW5kQ2V2aWFuRm9yVHJpYW5nbGUiLCJ1cCIsImMiLCJoIiwiYWJkb3QiLCJhY2RvdCIsImxlZnRkb3QiLCJtaW4iLCJyaWdodGRvdCIsIm1heCIsIm5vcm1hbGRvdCIsImdldEludGVyc2VjdFBvaW50VmFsdWVzIiwiZXF1YWxzIiwiZGVub20iLCJhdCIsImJ0IiwiZ2V0SW50ZXJzZWN0UG9pbnQiLCJpbnRlcnNlY3QiLCJnZXRQb3NpdGlvbk9uU2VnbWVudCIsInRyaWFuZ2xlTm9ybWFsIiwidHJpYW5nbGVBcmVhIiwiYWIiLCJhYyIsImxlbiIsImRpdmlkZVZlYzMiLCJ2ZWMiLCJ2YWwiLCJwb3NDZW50ZXIiLCJjbGFtcCIsImxlcnAiLCJpbnRlcnNlY3RzVHJpYW5nbGUiLCJkaXJlY3Rpb24iLCJlZGdlMSIsImVkZ2UyIiwicHZlYyIsImRldCIsInR2ZWMiLCJxdmVjIiwiZnJvbVJvdGF0aW9uTWF0cml4IiwicmVzdWx0IiwiZGF0YSIsIm0xMSIsIm0xMiIsIm0xMyIsIm0yMSIsIm0yMiIsIm0yMyIsIm0zMSIsIm0zMiIsIm0zMyIsInRyYWNlIiwicyIsInNxcnQiLCJ3IiwiUGFsZXR0ZSIsImJhY2tncm91bmQiLCJmaXJzdCIsImF0dGVudGlvbiIsImJyaWdodCIsImRhcmsiLCJhY2NlbnQiLCJuZXV0cmFsIiwiY29sb3IiLCJDb2xvciIsImZyb21IRVgiLCJwYWxldHRlIiwiZ2V0Q29sb3IiLCJQcm94eSIsInRhcmdldCIsInByb3AiLCJmaWVsZCIsIkRlbGF5cyIsInVwZGF0ZSIsIm1zIiwiZHQiLCJpbW1lZGlhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJFaGhoQm9hcmRSb29tIiwiYXBwIiwiZGl2IiwiRG9tRWxlbWVudFRoaW5neSIsInJlbmRlciIsImVudiIsIkFwcFJvb3QiLCJwcmV2ZW50RGVmYXVsdCIsInN0cmljdEluaXQiLCJyZXNvdXJjZXMiLCJSZXNvdXJjZXNNYW5hZ2VyIiwiSGlsbzNkRW5naW5lVGhpbmd5IiwiZ2FtZSIsIkhpbG8zZENhbWVyYU1hbmFnZXIiLCJjb250cm9scyIsIkJhc2ljT3JiaXRhbENhbWVyYSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiYXNwZWN0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZmFyIiwibmVhciIsInJvdGF0aW9uWCIsImRlYnVnIiwiSGlsb0RlYnVnSGVscGVyIiwiY2xlYXJDb2xvciIsInN0YWdlIiwiU3RhZ2UiLCJjb250YWluZXIiLCJhbHBoYSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9nIiwiRm9nIiwibW9kZSIsInN0YXJ0IiwiZW5kIiwiZGVuc2l0eSIsInJlc2l6ZSIsImhhcmRjb2RlZER0IiwidGljayIsImFuZ2xlIiwiRGlyZWN0aW9uYWxMaWdodCIsImFtb3VudCIsImFkZFRvIiwiQW1iaWVudExpZ2h0IiwiZGVzdHJveSIsImdlb21ldHJ5IiwibWF0ZXJpYWxzIiwibGluZXMiLCJoaWxvIiwiTm9kZSIsIm5hbWUiLCJhZGRDaGlsZCIsInJlbW92ZUZyb21QYXJlbnQiLCJjbGVhckxpbmVzIiwiSGlsb0xpbmVSZW5kZXIiLCJhZGRMaW5lIiwiY2xlYXIiLCJjbGVhckxpbmUiLCJyYWRpdXMiLCJtZXNoIiwiTWVzaCIsInVzZUluc3RhbmNlZCIsIlNwaGVyZUdlb21ldHJ5IiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWF0ZXJpYWwiLCJCYXNpY01hdGVyaWFsIiwibGlnaHRUeXBlIiwiZGlmZnVzZSIsIkdlb21ldHJ5IiwiY29uc3RhbnRzIiwiTElORVMiLCJnIiwiaW5kaWNlcyIsImNvdW50IiwidmVydGljZXMiLCJhZGRQb2ludHMiLCJIaWxvTWVzaFRoaW5neSIsImRlYnVnTm9ybWFsc0VuYWJsZWQiLCJnZXRNZXNoQ2xvbmUiLCJlbmFibGVEZWJ1Z05vcm1hbHMiLCJyZWFsTGVuZ3RoIiwiaSIsImlkeCIsIm5vcm1hbHMiLCJIaWxvTm9kZVdyYXBwZXIiLCJwb2ludGVyIiwiREVGQVVMVF9QTEFORV9VTklUUyIsIlBMQU5FX1NJWkUiLCJEZWZhdWx0RGV2SGlsb0Vudk1hcCIsIm1ha2VNYXAiLCJwbGFuZSIsIlBsYW5lR2VvbWV0cnkiLCJ1dk1hdHJpeCIsIk1hdHJpeDMiLCJmcm9tU2NhbGluZyIsInNpZGUiLCJGUk9OVCIsIkxhenlUZXh0dXJlIiwiZmxpcFkiLCJzcmMiLCJBeGlzSGVscGVyIiwic2l6ZSIsInJlcyIsImxvY2F0aW9ucyIsImdsdGZMb2FkZXIiLCJHTFRGTG9hZGVyIiwicHJlbG9hZE1lc2hlcyIsIm1lc2hlcyIsImdldE1lc2giLCJvayIsIkdMVEZzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkIiwidGhlbiIsIm1vZGVsIiwiZ3JvdXAiLCJtZXNobmFtZSIsInBhcmVudCIsInJlYXNvbiIsInByb21pc2VzIiwicHVzaCIsInByZWxvYWRNZXNoIiwiYWxsIiwiSGlsbzNkUm9vbSIsInBhcmVudElkIiwiYm9keSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhc2VzIiwiSGlsbzNkIiwicmVxdWlyZSIsIkVoaGhCb2FyZCIsIlJvb21zU3Vicm91dGluZSIsImxpc3Rlbkhhc2giLCJvbmhhc2hjaGFuZ2UiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhc2giLCJzdWJzdHIiLCJDYXNlIiwiY29tbWFuZHMiLCJpbnN0YW5jZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7QUFPQTtBQUNBO0FBRUE7Ozs7SUFHTUEsWTs7Ozs7Ozs7Ozs7Ozs7QUFDTDs7O21DQUdlO0FBQ2QsV0FBS0MsUUFBTCxDQUFjLFFBQWQsRUFBd0JDLE1BQXhCOztBQUVBLFVBQUk7QUFDSDtBQUNBLFlBQU1DLE1BQU0sR0FBRyxLQUFLQyxHQUFMLENBQVMsUUFBVCxFQUFtQixLQUFLQyxJQUFMLENBQVUsZ0JBQVYsQ0FBbkIsQ0FBZjtBQUVBLGFBQUtKLFFBQUwsQ0FBYyxTQUFkLEVBQXlCSyxRQUF6QjtBQUNBLGFBQUtMLFFBQUwsQ0FBYyxPQUFkLEVBQXVCSyxRQUF2QjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxvQkFBb0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsMEVBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsNkRBQVU7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0NBQWtDO0FBQzdELDJCQUEyQixtREFBbUQ7QUFDOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOXJCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vc3JjL3Jvb21zL3N1YnJvdXRpbmUuanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuLyoqXG4gKiBAZmlsZSBjYW52YXNfYXBwX2V2ZW50cy5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIEVuZ2luZVxuICovXG5cbmltcG9ydCB7IExJRkVDWUNMRV9TVEFUVVMgfSBmcm9tICdAY29yZS9leGNoYW5nZS9jb3JlL25hbm9fdGhpbmd5LmpzJztcbmltcG9ydCB7IFRoaW5neSwgU2hlbGZUaGluZ3kgfSBmcm9tICdAY29yZS9leGNoYW5nZS9pbmRleC5qcyc7XG5cbi8qKlxuICogTWFuYWdlcyBldmVudHMgZm9yXG4gKi9cbmNsYXNzIFdpbmRvd0V2ZW50cyBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBJbml0IGhhbmRsZXIuIExpc3RlbnMgZXZlbnRzIGRhdGFcblx0ICovXG5cdGluaXRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmFkZEV2ZW50KCdyZXNpemUnLCB3aW5kb3cpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vdW5jb3ZlcmVkIGJyYW5jaCFcblx0XHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMuc2V0KCdjYW52YXMnLCB0aGlzLnBhdGgoJy9yZW5kZXIvY2FudmFzJykpO1xuXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCdrZXlkb3duJywgZG9jdW1lbnQpO1xuXHRcdFx0dGhpcy5hZGRFdmVudCgna2V5dXAnLCBkb2N1bWVudCk7XG5cblx0XHRcdHRoaXMuYWRkRXZlbnQoJ3doZWVsJywgY2FudmFzKTtcblx0XHRcdGlmICgnb250b3VjaG1vdmUnIGluIHdpbmRvdykge1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCd0b3VjaHN0YXJ0JywgY2FudmFzLCAnbW91c2Vkb3duJyk7XG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoJ3RvdWNobW92ZScsIGNhbnZhcywgJ21vdXNlbW92ZScpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCd0b3VjaGVuZCcsIGNhbnZhcywgJ21vdXNldXAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoJ2NvbnRleHRtZW51JywgZG9jdW1lbnQpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCdtb3VzZWRvd24nLCBjYW52YXMpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCdtb3VzZW1vdmUnLCBjYW52YXMpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCdtb3VzZXVwJywgY2FudmFzKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNnbi5sb2cuZ3JvdXBXYXJuKFxuXHRcdFx0XHQnQ09SRV9XQVJOUycsXG5cdFx0XHRcdGBBcHBFdmVudHNXcmFwcGVyOiBDYW52YXMgZXZlbnRzIGluaXQgZXJyb3IsIG1ha2Ugc3VyZSBIaWxvM2RFbmdpbmVUaGluZ3kgb24gcmlnaHQgcGxhY2VgLFxuXHRcdFx0XHRlcnJcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGV2ZW50IG5hbWUgdG8gbGlzdGVuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50IGRvbSBlbGVtZW50IHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWxpYXMgZXZlbnQgbmFtZSB0byBmaXJlXG5cdCAqL1xuXHRhZGRFdmVudCh0eXBlLCBlbGVtZW50LCBhbGlhcyA9IHR5cGUpIHtcblx0XHRjb25zdCBmdW5jID0gKGV2dCkgPT4ge1xuXHRcdFx0dGhpcy5ldmVudHMuZW1pdChhbGlhcywgZXZ0KTtcblx0XHR9O1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcblxuXHRcdHRoaXMudG91Y2goJ2V2ZW50SWRzJywgKCkgPT4gbmV3IFNoZWxmVGhpbmd5KCkpLmFkZCh7IHR5cGUsIGZ1bmMsIGVsZW1lbnQgfSk7XG5cdH1cblxuXHQvKipcblx0ICogcmVtb3ZlcyBldmVudHNcblx0ICovXG5cdGRpc3Bvc2VDYWxsYmFjaygpIHtcblx0XHRjb25zdCBldmVudHMgPSB0aGlzLmdldCgnZXZlbnRJZHMnKTtcblx0XHRmb3IgKGNvbnN0IGsgaW4gZXZlbnRzLnByb3BlcnRpZXMpIHtcblx0XHRcdGNvbnN0IGUgPSBldmVudHMucHJvcGVydGllc1trXTtcblx0XHRcdGUuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgZS5mdW5jKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBNYW5hZ2VzIGV2ZW50cyBmb3JcbiAqL1xuY2xhc3MgSW5wdXRFdmVudHMgZXh0ZW5kcyBUaGluZ3kge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5LCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uICovXG5cdC8qKlxuXHQgKiBAZmlyZXMgaW5wdXQjbGVmdFxuXHQgKiBAZmlyZXMgaW5wdXQjbGVmdHVwXG5cdCAqIEBmaXJlcyBpbnB1dCNsZWZ0ZG93blxuXHQgKiBAZmlyZXMgaW5wdXQjcmlnaHRcblx0ICogQGZpcmVzIGlucHV0I3JpZ2h0dXBcblx0ICogQGZpcmVzIGlucHV0I3JpZ2h0ZG93blxuXHQgKi9cblx0aW5pdENhbGxiYWNrKCkge1xuXHRcdHRoaXMuZXZlbnRzLm9uKCcuLi93aW5kb3cua2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKCFldmVudC5yZXBlYXQpIHtcblx0XHRcdFx0dGhpcy5rZXlwcmVzcyhldmVudCwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5ldmVudHMub24oJy4uL3dpbmRvdy5rZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKCFldmVudC5yZXBlYXQpIHtcblx0XHRcdFx0dGhpcy5rZXlwcmVzcyhldmVudCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZG93biB3YXMgYnV0dG9uIGRvd24gb3IgdXBcblx0ICovXG5cdGtleXByZXNzKGV2ZW50LCBkb3duKSB7XG5cdFx0Y29uc3QgYWN0aW9uID0gZG93biA/ICdkb3duJyA6ICd1cCc7XG5cdFx0c3dpdGNoIChldmVudC5jb2RlKSB7XG5cdFx0XHRjYXNlICdLZXlBJzpcblx0XHRcdGNhc2UgJ0tleUgnOlxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQGV2ZW50IGlucHV0I2xlZnR1cFxuXHRcdFx0XHQgKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH1cblx0XHRcdFx0ICovXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjbGVmdGRvd25cblx0XHRcdFx0ICogQHR5cGUge0tleWJvYXJkRXZlbnR9XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KCdsZWZ0JyArIGFjdGlvbiwgZXZlbnQpO1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQGV2ZW50IGlucHV0I2xlZnRcblx0XHRcdFx0ICogQHR5cGUge29iamVjdH1cblx0XHRcdFx0ICogQHByb3BlcnR5IHtLZXlib2FyZEV2ZW50fSBldmVudFxuXHRcdFx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvd25cblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoJ2xlZnQnLCB7IGV2ZW50LCBkb3duIH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0tleUQnOlxuXHRcdFx0Y2FzZSAnS2V5TCc6XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjcmlnaHR1cFxuXHRcdFx0XHQgKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH1cblx0XHRcdFx0ICovXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjcmlnaHRkb3duXG5cdFx0XHRcdCAqIEB0eXBlIHtLZXlib2FyZEV2ZW50fVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdCgncmlnaHQnICsgYWN0aW9uLCBldmVudCk7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjcmlnaHRcblx0XHRcdFx0ICogQHR5cGUge29iamVjdH1cblx0XHRcdFx0ICogQHByb3BlcnR5IHtLZXlib2FyZEV2ZW50fSBldmVudFxuXHRcdFx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvd25cblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoJ3JpZ2h0JywgeyBldmVudCwgZG93biB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjc3BhY2V1cFxuXHRcdFx0XHQgKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH1cblx0XHRcdFx0ICovXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjc3BhY2Vkb3duXG5cdFx0XHRcdCAqIEB0eXBlIHtLZXlib2FyZEV2ZW50fVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdCgnc3BhY2UnICsgYWN0aW9uLCBldmVudCk7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAZXZlbnQgaW5wdXQjc3BhY2Vcblx0XHRcdFx0ICogQHR5cGUge29iamVjdH1cblx0XHRcdFx0ICogQHByb3BlcnR5IHtLZXlib2FyZEV2ZW50fSBldmVudFxuXHRcdFx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvd25cblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoJ3NwYWNlJywgeyBldmVudCwgZG93biB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdFc2NhcGUnOlxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQGV2ZW50IGlucHV0I3NwYWNldXBcblx0XHRcdFx0ICogQHR5cGUge0tleWJvYXJkRXZlbnR9XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQGV2ZW50IGlucHV0I3NwYWNlZG93blxuXHRcdFx0XHQgKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH1cblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoJ2VzYycgKyBhY3Rpb24sIGV2ZW50KTtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBldmVudCBpbnB1dCNzcGFjZVxuXHRcdFx0XHQgKiBAdHlwZSB7b2JqZWN0fVxuXHRcdFx0XHQgKiBAcHJvcGVydHkge0tleWJvYXJkRXZlbnR9IGV2ZW50XG5cdFx0XHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZG93blxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdCgnZXNjJywgeyBldmVudCwgZG93biB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL25vIGRlZmF1bHRcblx0XHR9XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5LCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uICovXG59XG5cbi8qKlxuICogTWFuYWdlcyBldmVudHMgZm9yXG4gKi9cbmNsYXNzIFRpbWVFdmVudHMgZXh0ZW5kcyBUaGluZ3kge1xuXHQvKipcblx0ICogSW5pdCBoYW5kbGVyLiBMaXN0ZW5zIGV2ZW50cyBkYXRhXG5cdCAqL1xuXHRpbml0Q2FsbGJhY2soKSB7XG5cdFx0dGhpcy5uZXh0RnJhbWUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGludGVydmFsXG5cdCAqL1xuXHRkaXNwb3NlQ2FsbGJhY2soKSB7XG5cdFx0Y2duLmRlbGF5cy5jbGVhckludGVydmFsKHRoaXMuX2ZyYW1lSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIG5leHQgZnJhbWUgZXZlbnRzXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRuZXh0RnJhbWUoKSB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5wcm9wZXJ0aWVzLmZwcztcblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cdFx0Y29uc3QgaWQgPSBjZ24uZGVsYXlzLnRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMubGlmZXN0YXR1cyA8PSBMSUZFQ1lDTEVfU1RBVFVTLkRJU1BPU0VEKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5wcm9wZXJ0aWVzLmZyYW1lICs9IDE7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQoJ2ZyYW1lJywgdGhpcy5wcm9wZXJ0aWVzLmZyYW1lKTtcblx0XHRcdFx0dGhpcy5uZXh0RnJhbWUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wZXJ0aWVzLnN0cmljdExvb3ApIHtcblx0XHRcdFx0XHQvLyAjZHJhZnRcblx0XHRcdFx0XHRjZ24ubG9nLmVycm9yKCcoL2Vudi90aW1lLnN0cmljdExvb3ApIENyaXRpY2FsIGVycm9yIGluIG1haW4gbG9vcDonLCBlcnIpO1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdlcnJvci1ub3RpZnknKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0XHRcdGEuaW5uZXJIVE1MID0gJ0NyaXRpY2FsIGVycm9yISBQcmVzcyBbU3BhY2VdIHRvICc7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRcdGIuaW5uZXJIVE1MID0gJ3Jlc3RhcnQnO1xuXHRcdFx0XHRcdFx0Yi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm93bmVyLmV2ZW50cy5lbWl0KCdhcHBfcmVzdGFydF9pbnB1dCcpO1xuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoYSk7XG5cdFx0XHRcdFx0XHRlbC5hcHBlbmRDaGlsZChiKTtcblxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1yb290JykuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMub3duZXIuZXZlbnRzLmVtaXQoJ2NyaXRpY2FsX2Vycm9yJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0RnJhbWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIGludGVydmFsKTtcblx0XHR0aGlzLl9mcmFtZUlkID0gaWQ7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBjbGFzcyBkZWZhdWx0IHByb3BzXG5cdCAqL1xuXHRnZXREZWZhdWx0UHJvcGVydGllcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZnBzOiA2MCxcblx0XHRcdHN0cmljdExvb3A6IHRydWUsXG5cdFx0XHRmcmFtZTogMFxuXHRcdH07XG5cdH1cbn1cblxuLyoqXG4gKiBDbGFzcyB3cmFwcyBhbmQgZW1pdHMgY2FudmFzLCB3aW5kb3csIGFuZCBpbnB1dCBldmVudHNcbiAqL1xuY2xhc3MgQ2FudmFzQXBwRXZlbnRzIGV4dGVuZHMgVGhpbmd5IHtcblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Z2V0RGVmYXVsdFByb3BlcnRpZXMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpbmRvdzogbmV3IFdpbmRvd0V2ZW50cygpLFxuXHRcdFx0dGltZTogbmV3IFRpbWVFdmVudHMoKSxcblx0XHRcdGlucHV0OiBuZXcgSW5wdXRFdmVudHMoKVxuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzQXBwRXZlbnRzO1xuZXhwb3J0IHsgQ2FudmFzQXBwRXZlbnRzLCBXaW5kb3dFdmVudHMsIFRpbWVFdmVudHMgfTtcbiIsIi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBDbGllbnRcbiAqL1xuXG5pbXBvcnQgQ2FudmFzQXBwRXZlbnRzIGZyb20gJy4vY2FudmFzX2FwcF9ldmVudHMuanMnO1xuXG5leHBvcnQgeyBDYW52YXNBcHBFdmVudHMgfTtcbiIsIi8qKlxuICogQGZpbGUgY29yZV9uYW1lc3BhY2UuanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBDb3JlL0NvcmVOYW1lc3BhY2VcbiAqL1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0Bjb3JlL3V0aWxzL2xvZ2dlci5qcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJ0Bjb3JlL3V0aWxzL2V2ZW50c19tYW5hZ2VyLmpzJztcbmltcG9ydCBkZWxheXMgZnJvbSAnQGNvcmUvdXRpbHMvZGVsYXlzLmpzJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnQGNvcmUvdXRpbHMvYXNzZXJ0LmpzJztcbmltcG9ydCBBcHBlYXJhbmNlIGZyb20gJ0Bjb3JlL3V0aWxzL2FwcGVhcmFuY2UuanMnO1xuXG4vKipcbiAqINCe0YIgY29yZSBnYW1lIG5hbWVzcGFjZS4g0JPQu9C+0LHQsNC70YzQvdGL0Lkg0L7QsdGK0LXQutGCLCDQtNC+0YHRgtGD0L/QvdGL0Lkg0LLQviDQstGB0LXQvCDQutC+0LTQtS5cbiAqINCl0YDQsNC90LjRgiDQsiDRgdC10LHQtSDQvtGB0L3QvtCy0L3Ri9C1INC40LPRgNC+0LLRi9C1INC4INGB0LXRgNCy0LjRgdC90YvQtSDQvNC10YLQvtC00Ysg0Lgg0L/QsNGA0LDQvNC10YLRgNGLXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHB1YmxpY1xuICogQGJvcnJvd3MgbW9kdWxlOlV0aWxzL0xvZ2dlci5Mb2dnZXIgYXMgbG9nZ2VyXG4gKiBAYm9ycm93cyBtb2R1bGU6VXRpbHMvRXZlbnRzTWFuYWdlci5FdmVudHNNYW5hZ2VyIGFzIGV2ZW50c1xuICovXG5jb25zdCBjZ24gPSB7XG5cdC8qKlxuXHQgKiBAc2VlIHtAbGluayBtb2R1bGU6Q29yZS9VdGlscy9Mb2dnZXIuTG9nZ2VyfVxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRsb2c6IGxvZ2dlcixcblx0LyoqXG5cdCAqIEBzZWUge0BsaW5rIG1vZHVsZTpDb3JlL1V0aWxzL0V2ZW50c01hbmFnZXIuRXZlbnRzTWFuYWdlcn1cblx0ICogQHN0YXRpY1xuXHQgKi9cblx0ZXZlbnRzLFxuXHQvKipcblx0ICogQHNlZSB7QGxpbmsgbW9kdWxlOkNvcmUvVXRpbHMvRGVsYXlzLkRlbGF5c31cblx0ICogQHN0YXRpY1xuXHQgKi9cblx0ZGVsYXlzLFxuXHQvKipcblx0ICogQHNlZSBodHRwczovL25vZGVqcy5vcmcvYXBpL2Fzc2VydC5odG1sXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdGFzc2VydCxcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdGFwcGVhcmFuY2U6IG5ldyBBcHBlYXJhbmNlKClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNnbjtcbiIsIi8qKlxuICogQGZpbGUgZXZlbnRfdGhpbmd5LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDJcbiAqIEBtb2R1bGUgRXhjaGFuZ2VcbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IHsgTmFub1RoaW5neSB9IGZyb20gJy4vbmFub190aGluZ3kuanMnO1xuaW1wb3J0IFRoaW5neSBmcm9tICcuL3RoaW5neS5qcyc7XG5pbXBvcnQgeyBTaGVsZlRoaW5neSB9IGZyb20gJy4vc2hlbGZfdGhpbmd5LmpzJztcblxuY29uc3QgQ0FMTEJBQ0hfRlVOQ19QT1NURklYID0gJ0NhbGxiYWNrJztcblxuLyoqXG4gKiBFdmVudCBtYW5hZ2VtZW50IGJhc2VkIG9uIFRoaW5neVxuICovXG5jbGFzcyBFdmVudFRoaW5neSBleHRlbmRzIE5hbm9UaGluZ3kge1xuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgZXZlbnQgbmFtZS4gT3IgcGF0aCB0byBub2RlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC5cblx0ICogQHJldHVybnMge3N0cmluZ30gZXZlbnQgaWRcblx0ICogQGV4YW1wbGVcblx0ICogb24oJy9wcm9wL3Byb3AuZXZlbnQnKSAvL3dpbGwgbGlzdGVuIGV2ZW50IGZyb21cblx0ICogcm9vdG5vZGUucHJvcC5wcm9wLm9uKCdldmVudCcpXG5cdCAqL1xuXHRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyTGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssICdvbicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGV2ZW50IG5hbWVcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBldmVudCBpZFxuXHQgKi9cblx0b25jZSh0eXBlLCBjYWxsYmFjaykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyTGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssICdvbmNlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBpZCBmZW5lcmV0ZWQgYnkgJ29uJ1xuXHQgKi9cblx0b2ZmKGtleSkge1xuXHRcdGNvbnN0IGV2dCA9IHRoaXMuY2FjaGVFdmVudHMuZ2V0KGtleSk7XG5cdFx0aWYgKGV2dCkge1xuXHRcdFx0ZXZ0Lmxpc3RlbmVyLmxvd2xldmVsLm9mZihldnQudHlwZSwgZXZ0LmNhbGxiYWNrKTtcblx0XHRcdHRoaXMuZGVsKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExpc3RlbnMgYW55IG90aGVyIGV2ZW50IGFuZCBlbWl0cyBpdFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBldmVudCBuYW1lXG5cdCAqL1xuXHRwaXBlKHR5cGUpIHtcblx0XHRjb25zdCBpZCA9IHRoaXMub24odHlwZSwgKC4uLmFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IHQgPSB0aGlzLmNhY2hlRXZlbnRzLmdldChpZCkudHlwZTtcblx0XHRcdHRoaXMuZW1pdCh0LCAuLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBldmVudCBuYW1lXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgZnVuY3Rpb24gdG8gY2FsbCBpbiBFdmVudEVtaXR0ZXJcblx0ICogQHJldHVybnMge3N0cmluZ30gZXZlbnQgaWRcblx0ICovXG5cdHJlZ2lzdGVyTGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZ1bmMgPSAnb24nKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC10aGlzICovXG5cdFx0bGV0IGV2dCA9IHR5cGU7XG5cdFx0bGV0IGxpc3RlbmVyID0gdGhpcztcblxuXHRcdGNvbnN0IGRvdHBvcyA9IGV2dC5sYXN0SW5kZXhPZignLicpO1xuXHRcdGlmIChkb3Rwb3MgPj0gMCkge1xuXHRcdFx0bGlzdGVuZXIgPSB0aGlzLm93bmVyLnBhdGgoZXZ0LnN1YnN0cmluZygwLCBkb3Rwb3MpKS5ldmVudHM7XG5cdFx0XHRldnQgPSBldnQuc3Vic3RyaW5nKGRvdHBvcyArIDEpO1xuXHRcdH1cblx0XHQvKiBlc2xpbnQtZW5hYmxlIGNvbnNpc3RlbnQtdGhpcyAqL1xuXG5cdFx0Y29uc3QgaWQgPSB0aGlzLmNhY2hlRXZlbnRzLmFkZCh7IHR5cGU6IGV2dCwgY2FsbGJhY2ssIGxpc3RlbmVyIH0pO1xuXHRcdGxpc3RlbmVyLmxvd2xldmVsW2Z1bmNdKGV2dCwgY2FsbGJhY2spO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdpbGwgZW1pdCBldmVudCBhbmQgY2FsbCBmdW5jdGlvbiAldHlwZSVDYWxsYmFjayBvbiBvd25lclxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBldmVudCBuYW1lXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgbGlzdCBvZiBhcmd1bWVudHNcblx0ICovXG5cdGVtaXQodHlwZSwgLi4uYXJncykge1xuXHRcdHRoaXMubG93bGV2ZWwuZW1pdCh0eXBlLCAuLi5hcmdzKTtcblxuXHRcdC8vIGNhbGwgb3duZXIgJXR5cGUlQ2FsbGJhY2sgZnVuY3Rpb24gaWYgaXQgZXhpc3RzXG5cdFx0Y29uc3QgZnVuY05hbWUgPSB0eXBlICsgQ0FMTEJBQ0hfRlVOQ19QT1NURklYO1xuXHRcdGNvbnN0IGZ1bmMgPSB0aGlzLm93bmVyPy5nZXQoZnVuY05hbWUpID8/IHRoaXMub3duZXI/LltmdW5jTmFtZV07XG5cdFx0aWYgKGZ1bmMpIHtcblx0XHRcdGZ1bmMuYXBwbHkodGhpcy5vd25lciwgYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IC5cblx0ICovXG5cdGdldCBsb3dsZXZlbCgpIHtcblx0XHRpZiAoIXRoaXMuY2FjaGUubG93bGV2ZWwpIHtcblx0XHRcdHRoaXMuY2FjaGUubG93bGV2ZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUubG93bGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FjaGUgZGF0YSB3aXRoIHN0b3JlZCBldmVudHMgaW5mb1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7U2hlbGZUaGluZ3l9IC5cblx0ICovXG5cdGdldCBjYWNoZUV2ZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy50b3VjaCgnZXZlbnRzJywgKCkgPT4gbmV3IFNoZWxmVGhpbmd5KCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKiBAZmlyZXMgVGhpbmd5I2luaXRcblx0ICogQGZpcmVzIFRoaW5neSNwcmVpbml0XG5cdCAqL1xuXHRpbml0KG93bmVyKSB7XG5cdFx0c3VwZXIuaW5pdChvd25lcik7XG5cblx0XHQvKipcblx0XHQgKiBwcmVpbml0IGFsaWFzXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgVGhpbmd5I2luaXRcblx0XHQgKiBAdHlwZSB7VGhpbmd5P30gb3duZXIgaWYgZXhpc3RzXG5cdFx0ICovXG5cdFx0dGhpcy5lbWl0KCdpbml0Jywgb3duZXIpO1xuXG5cdFx0LyoqXG5cdFx0ICogRXZlbnQgdHJpZ2dlcmVkIGJlZm9yZSBhbGwgcHJvcGVydGllcyBpbml0XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgVGhpbmd5I3ByZWluaXRcblx0XHQgKiBAdHlwZSB7VGhpbmd5P30gb3duZXIgaWYgZXhpc3RzXG5cdFx0ICovXG5cdFx0dGhpcy5lbWl0KCdwcmVpbml0Jywgb3duZXIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc3Bvc2VzIHNlbGYgYW5kIGFsbCBwcm9wZXJ0aWVzXG5cdCAqXG5cdCAqIEBmaXJlcyBUaGluZ3kjZGlzcG9zZVxuXHQgKi9cblx0ZGlzcG9zZSgpIHtcblx0XHQvKipcblx0XHQgKiBGaXJlcyBiZWZvcmUgY2hpbGRzIGRpc3Bvc2lvblxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFRoaW5neSNkaXNwb3NlXG5cdFx0ICovXG5cdFx0dGhpcy5lbWl0KCdkaXNwb3NlJyk7XG5cblx0XHRzdXBlci5kaXNwb3NlKCk7XG5cdFx0Zm9yIChjb25zdCBrIGluIHRoaXMuY2FjaGVFdmVudHMucHJvcGVydGllcykge1xuXHRcdFx0dGhpcy5vZmYoayk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50VGhpbmd5O1xuZXhwb3J0IHsgRXZlbnRUaGluZ3kgfTtcbiIsIi8qKlxuICogQGZpbGUgc2hlbGZfdGhpbmd5LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDJcbiAqIEBtb2R1bGUgRXhjaGFuZ2VcbiAqL1xuXG5pbXBvcnQgeyBJZEhlbHBlciB9IGZyb20gJy4uL3V0aWxzL2lkX2hlbHBlci5qcyc7XG5pbXBvcnQgeyBOYW5vVGhpbmd5IH0gZnJvbSAnLi9uYW5vX3RoaW5neS5qcyc7XG5cbi8qKlxuICogRXZlbnQgbWFuYWdlbWVudCBiYXNlZCBvbiBUaGluZ3lcbiAqL1xuY2xhc3MgU2hlbGZUaGluZ3kgZXh0ZW5kcyBOYW5vVGhpbmd5IHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fE5hbm9UaGluZ3l8Kn0gaXRlbSBpdGVtIHRvIGFkZFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBnaXZlbiBpZFxuXHQgKi9cblx0YWRkKGl0ZW0pIHtcblx0XHRsZXQgaWQgPSBpdGVtLmlkO1xuXHRcdGlkID0gdGhpcy5nZXRJZHNIZWxwZXIoKS5nZW5TdWl0YWJsZUlkKGlkLCB0aGlzLnByb3BlcnRpZXMpO1xuXHRcdHRoaXMuc2V0KGlkLCBpdGVtLCB7IGZvcmNlU2NvcGU6IHRoaXMucHJvcGVydGllcyB9KTtcblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05hbm9UaGluZ3l8c3RyaW5nfSB0aGluZ3kgcmVmZXJlbmNlIG9yIGlkXG5cdCAqL1xuXHRyZW1vdmUodGhpbmd5KSB7XG5cdFx0dGhpcy5kZWwodHlwZW9mIHRoaW5neSA9PT0gJ3N0cmluZycgPyB0aGluZ3kgOiB0aGluZ3kuaWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtJZEhlbHBlcn0gLlxuXHQgKi9cblx0Z2V0SWRzSGVscGVyKCkge1xuXHRcdHJldHVybiB0aGlzLnRvdWNoKCdpZHNIZWxwZXInLCAoKSA9PiBuZXcgSWRIZWxwZXIoKSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hlbGZUaGluZ3k7XG5leHBvcnQgeyBTaGVsZlRoaW5neSB9O1xuIiwiLyoqXG4gKiBAZmlsZSB0aGluZ3kuanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMlxuICogQG1vZHVsZSBFeGNoYW5nZVxuICovXG5cbmltcG9ydCB7IE5hbm9UaGluZ3ksIExJRkVDWUNMRV9TVEFUVVMgfSBmcm9tICcuL25hbm9fdGhpbmd5LmpzJztcbi8vaW1wb3J0IHsgaW5pdENoaWxkcyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcbmltcG9ydCB7IEV2ZW50VGhpbmd5IH0gZnJvbSAnLi9ldmVudF90aGluZ3kuanMnO1xuXG4vKipcbiAqIENvcmUgRXhjaGFuZ2UgY2xhc3NcbiAqXG4gKiAtIEFkZHMgZXZlbnRzIHRvIE5hbm9UaGluZ3lcbiAqIC0gQ2FsbGJhY2tzIG92ZXIgaW5oZXJpdGFuY2UgLSDQstGB0LUg0Y3QstC10L3RgtGLINCyINGN0YLQvtC8INC60LvQsNGB0YHQtSDQtNC+0LHQsNCy0LvRj9GO0YLRgdGPINC00LvRjyDQuNC30LHQsNCy0LvQtdC90LjRjyDQvtGCINC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LzQtdGC0L7QtNGLINCyINC00L7Rh9C10YDQvdC40YUg0LrQu9Cw0YHRgdCw0YUg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC70L7Qs9C40LrQuCDQv9GA0Lgg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9GFINGB0L7QsdGL0YLQuNGP0YUgKGluaXQsIGRpc3Bvc2UsIGV0Yy4pO1xuICovXG5jbGFzcyBUaGluZ3kgZXh0ZW5kcyBOYW5vVGhpbmd5IHtcblx0LyoqXG5cdCAqIFRoaXMgY29uc3RydWN0b3IgYmVoYXZpb3IgbWFjaCBiZXR0ZXIgZGVzY3JpYmVkIGFzXG5cdCAqIGBuZXcgTmFub1RoaW5neSh7bmV3IEV2ZW50VGhpbmd5KCl9KWBcblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBkZWZhdWx0IFRoaW5neSBjb25maWd1cmF0aW9uIChzdGF0ZSlcblx0ICogQHBhcmFtIHtvYmplY3R9IFtldmVudHNdIGNhbGxiYWNrcyBmb3IgZXZlbnRzXG5cdCAqIEBmaXJlcyBUaGluZ3kjY29uc3RydWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSwgZXZlbnRzKSB7XG5cdFx0c3VwZXIocHJvcGVydGllcyk7XG5cblx0XHR0aGlzLmV2ZW50cyA9IG5ldyBFdmVudFRoaW5neSgpO1xuXHRcdC8vICNjb2RlLWRlYnQg0LTQu9GPINGB0YDQsNCx0LDRgtGL0LLQsNC90LjRjyDRjdCy0LXQvdGC0LAg0L/RgNC10LjQvdC40YLQsFxuXHRcdHRoaXMuZXZlbnRzLm93bmVyID0gdGhpcztcblxuXHRcdGZvciAoY29uc3QgayBpbiBldmVudHMpIHtcblx0XHRcdHRoaXMub24oaywgZXZlbnRzW2tdKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAZXZlbnQgVGhpbmd5I2NvbnN0cnVjdGVkXG5cdFx0ICogQHR5cGUge29iamVjdH1cblx0XHQgKiBAcHJvcGVydHkge0V2ZW50VGhpbmd5fSBkZWZhdWx0IGV2ZW50XG5cdFx0ICovXG5cdFx0dGhpcy5ldmVudHMuZW1pdCgnY29uc3RydWN0ZWQnLCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05hbm9UaGluZ3k/fSBbb3duZXI9bnVsbF0gb3duZXIgVGhpbmd5XG5cdCAqIEBmaXJlcyBUaGluZ3kjcHJlaW5pdFxuXHQgKiBAZmlyZXMgVGhpbmd5I3Bvc3Rpbml0XG5cdCAqIEBmaXJlcyBUaGluZ3kjaW5pdFxuXHQgKi9cblx0aW5pdChvd25lciA9IG51bGwpIHtcblx0XHRpZiAodGhpcy5saWZlc3RhdHVzIDw9IExJRkVDWUNMRV9TVEFUVVMuSU5JVElBTElaRUQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhpbmd5IGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm93bmVyID0gb3duZXI7XG5cblx0XHR0aGlzLmV2ZW50cy5pbml0KHRoaXMpO1xuXG5cdFx0c3VwZXIuaW5pdChvd25lcik7XG5cdFx0Ly9pbml0Q2hpbGRzKHRoaXMpOyAvL9CvINCx0LXQtyDQv9C+0L3Rj9GC0LjRjyDQv9C+0YfQtdC80YMg0LLRi9C30L7QsiDQvdCw0L/RgNGP0LzRg9GOINC90LUg0YDQsNCx0L7RgtCw0LXRgi4g0K3RgtC+IDEg0LIgMSDRgSBzdXBlci5pbml0XG5cblx0XHQvKipcblx0XHQgKiBFdmVudCB0cmlnZ2VyZWQgYmVmb3JlIGFsbCBwcm9wZXJ0aWVzIGluaXRcblx0XHQgKlxuXHRcdCAqIEBldmVudCBUaGluZ3kjcG9zdGluaXRcblx0XHQgKiBAdHlwZSB7VGhpbmd5P30gb3duZXIgaWYgZXhpc3RzXG5cdFx0ICovXG5cdFx0dGhpcy5ldmVudHMuZW1pdCgncG9zdGluaXQnLCBvd25lcik7XG5cblx0XHR0aGlzLmxpZmVzdGF0dXMgPSBMSUZFQ1lDTEVfU1RBVFVTLklOSVRJQUxJWkVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBmaXJlcyBUaGluZ3kjZGlzcG9zZVxuXHQgKi9cblx0ZGlzcG9zZSgpIHtcblx0XHR0aGlzLmV2ZW50cy5kaXNwb3NlKCk7XG5cblx0XHRzdXBlci5kaXNwb3NlKCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbHMgdGhpcy5ldmVudHMub24gYnV0IHdpdGggY2FsbGJhY2suYmluZCh0aGlzKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBldmVudCBuYW1lLiBPciBwYXRoIHRvIG5vZGVcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBldmVudCBpZFxuXHQgKi9cblx0b24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudHMub24odHlwZSwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbHMgdGhpcy5ldmVudHMub25jZSBidXQgd2l0aCBjYWxsYmFjay5iaW5kKHRoaXMpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGV2ZW50IG5hbWUuIE9yIHBhdGggdG8gbm9kZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IGV2ZW50IGlkXG5cdCAqL1xuXHRvbmNlKHR5cGUsIGNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzLm9uY2UodHlwZSwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhpbmd5O1xuIiwiLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIEV4Y2hhbmdlXG4gKi9cblxuaW1wb3J0IE5hbm9UaGluZ3kgZnJvbSAnLi9jb3JlL25hbm9fdGhpbmd5LmpzJztcbmltcG9ydCBUaGluZ3kgZnJvbSAnLi9jb3JlL3RoaW5neS5qcyc7XG5pbXBvcnQgU2hlbGZUaGluZ3kgZnJvbSAnLi9jb3JlL3NoZWxmX3RoaW5neS5qcyc7XG5pbXBvcnQgRXZlbnRUaGluZ3kgZnJvbSAnLi9jb3JlL2V2ZW50X3RoaW5neS5qcyc7XG5cbmV4cG9ydCB7IE5hbm9UaGluZ3ksIFRoaW5neSwgU2hlbGZUaGluZ3ksIEV2ZW50VGhpbmd5IH07XG4iLCIvKipcbiAqIEBmaWxlIGlkX2hlbHBlci5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIEV4Y2hhbmdlXG4gKi9cblxuaW1wb3J0IHsgTmFub1RoaW5neSB9IGZyb20gJy4uL2NvcmUvbmFub190aGluZ3kuanMnO1xuXG5jb25zdCBSVU5USU1FX1BST1BfUFJFRklYID0gJyonO1xuXG4vKipcbiAqIEV2ZW50IG1hbmFnZW1lbnQgYmFzZWQgb24gVGhpbmd5XG4gKi9cbmNsYXNzIElkSGVscGVyIGV4dGVuZHMgTmFub1RoaW5neSB7XG5cdC8qKlxuXHQgKiByZXR1cm5zIG5leHQgaWQgdmFsdWVcblx0ICpcblx0ICogQHJldHVybnMge251bWJlcn0gbmV3IGlkXG5cdCAqL1xuXHRuZXh0SWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0KCd1aWRzX2dlbmVyYXRlZCcsIHRoaXMudG91Y2goJ3VpZHNfZ2VuZXJhdGVkJywgKCkgPT4gLTEpICsgMSk7XG5cdH1cblxuXHQvKipcblx0ICogRmluZHMgaWQgdGhhdCBpc24ndCBpbiBzY29wZVxuXHQgKiAjcHVyZVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gdmFsaWRhdGUgYW5kIGJ1aWxkIGZyb21cblx0ICogQHBhcmFtIHtvYmplY3R8TmFub1RoaW5neX0gW3Njb3BlPXRoaXNdIHNjb3BlIHRvIGNoZWNrXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IGlkIHRoYXQgZG9lc24ndCBjb25mbGljdCBpbiBzY29wZVxuXHQgKi9cblx0Z2VuU3VpdGFibGVJZChpZCA9IG51bGwsIHNjb3BlID0gdGhpcykge1xuXHRcdGxldCBuZXdpZCA9IGlkPy5sZW5ndGggPiAwICYmIGlkO1xuXHRcdGNvbnN0IG5leHRpZCA9IHRoaXMubmV4dElkKCk7XG5cdFx0d2hpbGUgKCFuZXdpZCB8fCBzY29wZVtuZXdpZF0pIHtcblx0XHRcdG5ld2lkID0gUlVOVElNRV9QUk9QX1BSRUZJWCArIChuZXdpZCB8fCBuZXh0aWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXdpZDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJZEhlbHBlcjtcbmV4cG9ydCB7IElkSGVscGVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIGNvbXBsZXhpdHksIG1heC1wYXJhbXMsIG5vLW1hZ2ljLW51bWJlcnMsIG1heC1zdGF0ZW1lbnRzICovXG5pbXBvcnQgeyBNYXRyaXg0LCBOb2RlLCBRdWF0ZXJuaW9uLCBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSAnaGlsbzNkJztcblxuZXhwb3J0IGNvbnN0IGNhY2hlID0ge1xuXHR2ZWMzOiB7XG5cdFx0djA6IG5ldyBWZWN0b3IzKCksXG5cdFx0djE6IG5ldyBWZWN0b3IzKCksXG5cdFx0djI6IG5ldyBWZWN0b3IzKCksXG5cdFx0djM6IG5ldyBWZWN0b3IzKCksXG5cdFx0djQ6IG5ldyBWZWN0b3IzKCksXG5cdFx0djU6IG5ldyBWZWN0b3IzKCksXG5cdFx0djY6IG5ldyBWZWN0b3IzKCksXG5cdFx0djc6IG5ldyBWZWN0b3IzKCksXG5cdFx0djg6IG5ldyBWZWN0b3IzKCksXG5cdFx0djk6IG5ldyBWZWN0b3IzKClcblx0fVxufTtcblxuLy8gYnVmZmVyIHZlY3RvcnNcbmNvbnN0IHZlYzAgPSBjYWNoZS52ZWMzLnYwO1xuY29uc3QgdmVjMSA9IGNhY2hlLnZlYzMudjE7XG5jb25zdCB2ZWMyID0gY2FjaGUudmVjMy52MjtcbmNvbnN0IHZlYzMgPSBjYWNoZS52ZWMzLnYzO1xuY29uc3QgdmVjNCA9IGNhY2hlLnZlYzMudjQ7XG5jb25zdCB2ZWNSID0gY2FjaGUudmVjMy52NTsgLy8gZnVuY3Rpb25zIHJldHVybiB0aGlzIHZlY3RvclxuXG4vKipcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgUEVSRkVDVF9OVU1CRVIgPSBNYXRoLnNpbihNYXRoLlBJIC8gTWF0aC5wb3coMiwgMikpOyAvLyAwLjcwN1xuLyoqXG4gKiBQRVJGRUNUX05VTUJFUl4yICogMC4xXG4gKlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dFT01fVEhSRVNIT0xEID0gTWF0aC5wb3coUEVSRkVDVF9OVU1CRVIsIDIpICogMC4xOyAvLyAwLjA0OVxuLyoqXG4gKiBERUZBVUxUX0dFT01fVEhSRVNIT0xEXjJcbiAqXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFBSRUNJU0VfR0VPTV9USFJFU0hPTEQgPSBNYXRoLnBvdyhERUZBVUxUX0dFT01fVEhSRVNIT0xELCAyKTsgLy8gMC4wMDI0OVxuLyoqXG4gKiBERUZBVUxUX0dFT01fVEhSRVNIT0xEXjVcbiAqXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFpFUk9fVEhSRVNIT0xEID0gTWF0aC5wb3coREVGQVVMVF9HRU9NX1RIUkVTSE9MRCwgNSk7IC8vIGUtN1xuLyoqXG4gKiBERUZBVUxUX0dFT01fVEhSRVNIT0xEXG4gKlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBMT09TRV9HRU9NX1RIUkVTSE9MRCA9IFBFUkZFQ1RfTlVNQkVSICogMC4xO1xuLyoqXG4gKiBVc2UgaXQgZm9yIGFueSBtZXRhLXB1cnB1c2VkIGRhdGEgc3VjaCBkZWJ1ZyBub3JtYWxzIGFuZCBtZXNoL2dyaWRzIHNjYWxlc1xuICogREVGQVVMVF9HRU9NX1RIUkVTSE9MRCAqIFBFUkZFQ1RfTlVNQkVSXG4gKlxuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dFT01fTk9STUFMU19TSVpFID0gREVGQVVMVF9HRU9NX1RIUkVTSE9MRCAqIFBFUkZFQ1RfTlVNQkVSO1xuXG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9CYWJ5bG9uSlMvQmFieWxvbi5qcy9ibG9iL21hc3Rlci9zcmMvTWF0aHMvbWF0aC52ZWN0b3IudHMjTDE1ODVcbiAqXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGF4aXMgbG9jYWwgYXhpc1xuICogQHBhcmFtIHtNYXRyaXg0fSBtYXRyaXggd29ybGQgbWF0cml4XG4gKiBAcmV0dXJucyB7VmVjdG9yM30gd29ybGQgYXhpc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKGF4aXMsIG1hdHJpeCkge1xuXHRjb25zdCBtYXQgPSBtYXRyaXguZWxlbWVudHM7XG5cblx0Y29uc3QgdiA9IG5ldyBWZWN0b3IzKCk7XG5cblx0cmV0dXJuIHYuc2V0KFxuXHRcdGF4aXMueCAqIG1hdFswXSArIGF4aXMueSAqIG1hdFs0XSArIGF4aXMueiAqIG1hdFs4XSxcblx0XHRheGlzLnggKiBtYXRbMV0gKyBheGlzLnkgKiBtYXRbNV0gKyBheGlzLnogKiBtYXRbOV0sXG5cdFx0YXhpcy54ICogbWF0WzJdICsgYXhpcy55ICogbWF0WzZdICsgYXhpcy56ICogbWF0WzEwXVxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VmVjdG9yM30gbm9ybWFsIC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblRvTm9ybWFsKG5vcm1hbCwgbm9kZSkge1xuXHRjb25zdCBueCA9IGdldERpcmVjdGlvbihuZXcgVmVjdG9yMygwLCAwLCAxKSwgbm9kZS53b3JsZE1hdHJpeCk7XG5cdGNvbnN0IG56ID0gZ2V0RGlyZWN0aW9uKG5ldyBWZWN0b3IzKC0xLCAwLCAwKSwgbm9kZS53b3JsZE1hdHJpeCk7XG5cdG5vZGUucXVhdGVybmlvbi5yb3RhdGVYKG5vcm1hbC5kb3QobngpKTtcblx0bm9kZS5xdWF0ZXJuaW9uLnJvdGF0ZVoobm9ybWFsLmRvdChueikpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VmVjdG9yM30gb3JpZ2luIHBvaW50IGRpc3RhbmNlIHRvXG4gKiBAcGFyYW0ge0FycmF5PFZlY3RvcjM+fSBwb2ludHMgYXJyYXkgb2YgdmVjdG9ycyB0byBzb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEaXN0YW5jZShvcmlnaW4sIHBvaW50cykge1xuXHRwb2ludHMuc29ydCgoYSwgYikgPT4ge1xuXHRcdHJldHVybiBvcmlnaW4uc3F1YXJlZERpc3RhbmNlKGEpIC0gb3JpZ2luLnNxdWFyZWREaXN0YW5jZShiKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWZWN0b3IyfSBhMSBsaW5lIDEgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yMn0gYTIgbGluZSAxIGVuZFxuICogQHBhcmFtIHtWZWN0b3IyfSBiMSBsaW5lIDIgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yMn0gYjIgbGluZSAyIGVuZFxuICogQHJldHVybnMge251bWJlcn0gY3Jvc3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzUHJvZHVjdDJWZWN0b3IoYTEsIGEyLCBiMSwgYjIpIHtcblx0cmV0dXJuIChiMi55IC0gYjEueSkgKiAoYTIueCAtIGExLngpIC0gKGIyLnggLSBiMS54KSAqIChhMi55IC0gYTEueSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgd29ybGQgY29vcmRzIGludG8gcG9zIG9uIHBsYW5lXG4gKlxuICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBwb2ludCB0byB3b3JrIHdpdGhcbiAqIEBwYXJhbSB7VmVjdG9yM30gb3JpZ2luIHBsYW5lIG9yaWdpblxuICogQHBhcmFtIHtWZWN0b3IzfSBub3JtYWwgcGxhbmUgbm9ybWFsXG4gKiBAcmV0dXJucyB7VmVjdG9yMn0gcG9zIG9uIHBsYW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NPblBsYW5lKHBvaW50LCBvcmlnaW4sIG5vcm1hbCkge1xuXHRjb25zdCBheGlzID0gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XG5cdGNvbnN0IGRpc3QgPSBwb2ludC5jbG9uZSgpLnN1YihvcmlnaW4pO1xuXHRjb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgdSA9IG5ldyBWZWN0b3IzKCk7XG5cblx0Y29uc3QgZG90ID0gbm9ybWFsLmRvdChheGlzKTtcblx0aWYgKGRvdCA9PT0gMCB8fCBNYXRoLmFicyhkb3QpID09PSAxKSB7XG5cdFx0di5zZXQoMCwgMCwgMSk7XG5cdFx0dS5zZXQoMSwgMCwgMCk7XG5cdH0gZWxzZSB7XG5cdFx0di5jb3B5KGF4aXMpLmNyb3NzKG5vcm1hbCkubm9ybWFsaXplKCk7XG5cdFx0dS5jb3B5KHYpLmNyb3NzKG5vcm1hbCkubm9ybWFsaXplKCk7XG5cdH1cblxuXHRjb25zdCB4ID0gZGlzdC5kb3QodSk7XG5cdGNvbnN0IHkgPSBkaXN0LmRvdCh2KTtcblxuXHRyZXR1cm4gbmV3IFZlY3RvcjIoeCwgeSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBwb3Mgb24gcGxhbmUgYXMgM2QgY29vcmRpbmF0ZVxuICpcbiAqIEBwYXJhbSB7VmVjdG9yMn0gcG9zIHBvcyBvbiBwbGFuZVxuICogQHBhcmFtIHtWZWN0b3IzfSBvcmlnaW4gcGxhbmUgb3JpZ2luXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IG5vcm1hbCBwbGFuZSBub3JtYWxcbiAqIEByZXR1cm5zIHtWZWN0b3IzfSAzZCBzcGFjZSBjb29yZGluYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3MyZHRvM2QocG9zLCBvcmlnaW4sIG5vcm1hbCkge1xuXHRjb25zdCBheGlzID0gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XG5cdGNvbnN0IHYgPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCB1ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRjb25zdCBkb3QgPSBub3JtYWwuZG90KGF4aXMpO1xuXHRpZiAoZG90ID09PSAwIHx8IE1hdGguYWJzKGRvdCkgPT09IDEpIHtcblx0XHR2LnNldCgwLCAwLCAxKTtcblx0XHR1LnNldCgxLCAwLCAwKTtcblx0fSBlbHNlIHtcblx0XHR2LmNvcHkoYXhpcykuY3Jvc3Mobm9ybWFsKS5ub3JtYWxpemUoKTtcblx0XHR1LmNvcHkodikuY3Jvc3Mobm9ybWFsKS5ub3JtYWxpemUoKTtcblx0fVxuXG5cdHJldHVybiB1LnNjYWxlKHBvcy54KS5hZGQodi5zY2FsZShwb3MueSkpLmFkZChvcmlnaW4pO1xufVxuXG4vKipcbiAqIFwicm90YXRlc1wiIG5vcm1hbCB0byBhbm90aGVyIG5vcm1hbCBcInBsYW5lXCJcbiAqXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IG5vcm1hbCBub3JtYWwgdG8gc2hpZnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYXhpcyBheGlzIHRvIHNoaWZ0IGFyb3VuZFxuICpcbiAqIEByZXR1cm5zIHtWZWN0b3IzfSBhbGlnbmVkIG5vcm1hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Ob3JtYWwobm9ybWFsLCBheGlzKSB7XG5cdGNvbnN0IGRvdCA9IGF4aXMuZG90KG5vcm1hbCk7XG5cblx0cmV0dXJuIHZlY1IuY29weShub3JtYWwpLnN1Yih2ZWMwLmNvcHkoYXhpcykuc2NhbGUoZG90KSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgd29ybGQgY29vcmRzIGludG8gcG9zIG9uIHBsYW5lXG4gKlxuICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBwb2ludCB0byB3b3JrIHdpdGhcbiAqIEBwYXJhbSB7VmVjdG9yM30gb3JpZ2luIHBsYW5lIG9yaWdpblxuICogQHBhcmFtIHtWZWN0b3IzfSBub3JtYWwgcGxhbmUgbm9ybWFsXG4gKiBAcmV0dXJucyB7VmVjdG9yM30gcG9pbnQgb24gcGxhbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RPblBsYW5lKHBvaW50LCBvcmlnaW4sIG5vcm1hbCkge1xuXHRjb25zdCBsb2NhbCA9IHZlYzMuY29weShwb2ludCkuc3ViKG9yaWdpbik7XG5cdGNvbnN0IGZvcndhcmQgPSB2ZWMxLmNvcHkobm9ybWFsKS5jcm9zcyhsb2NhbCkubm9ybWFsaXplKCk7XG5cdGNvbnN0IHJpZ2h0ID0gdmVjMi5jb3B5KG5vcm1hbCkuY3Jvc3MoZm9yd2FyZCkubm9ybWFsaXplKCk7XG5cblx0Y29uc3QgeCA9IGxvY2FsLmRvdChyaWdodCk7XG5cdGNvbnN0IHogPSBsb2NhbC5kb3QoZm9yd2FyZCk7XG5cblx0cmV0dXJuIHZlY1IuY29weShvcmlnaW4pLmFkZChyaWdodC5zY2FsZSh4KSkuYWRkKGZvcndhcmQuc2NhbGUoeikpO1xufVxuXG4vKipcbiAqIENsb3Nlc3QgcG9pbnQgb24gc2VnbWVudFxuICpcbiAqIEBwYXJhbSB7VmVjdG9yM30gYSBsaW5lIHN0YXJ0XG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGIgbGluZSBlbmRcbiAqIEBwYXJhbSB7VmVjdG9yM30gcG9pbnQgcG9pbnQgdG8gcHJvamVjdFxuICogQHJldHVybnMge1ZlY3RvcjN9IGNsb3Nlc3QgdG8gbGluZSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE9uTGluZShhLCBiLCBwb2ludCkge1xuXHRjb25zdCBsb2NhbCA9IHZlYzAuY29weShwb2ludCkuc3ViKGEpO1xuXHRjb25zdCBsaW5lID0gdmVjUi5jb3B5KGIpLnN1YihhKS5ub3JtYWxpemUoKTtcblx0Y29uc3QgZGlzdCA9IGxvY2FsLmRvdChsaW5lKTtcblxuXHRyZXR1cm4gbGluZS5zY2FsZShkaXN0KS5hZGQoYSk7XG59XG5cbi8qKlxuICogUHJvamVjdCBvbmUgc2VnbWVudCBvbiBhbm90aGVyLiBJdCBpc24ndCBcImNyb3NzaW5nXCJcbiAqIFVzZXMgdmVjMC0zXG4gKlxuICogQHBhcmFtIHtWZWN0b3IzfSBhMSBsaW5lIDEgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYjEgbGluZSAxIGVuZFxuICogQHBhcmFtIHtWZWN0b3IzfSBhMiBsaW5lIDIgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYjIgbGluZSAyIGVuZFxuICogQHJldHVybnMge1ZlY3RvcjM/fSBhMS0+YjEgcHJvamVjdGlvbiBvbiBhMi0+YjIuIE51bGwgaWYgcHJvamVjdGlvbiBvdXQgb2YgYTItPmIyIHNlZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaW5lT25MaW5lKGExLCBiMSwgYTIsIGIyKSB7XG5cdGNvbnN0IHkgPSB2ZWMxLmNvcHkocHJvamVjdE9uTGluZShhMSwgYjEsIGEyKSk7XG5cdGNvbnN0IHogPSB2ZWMyLmNvcHkocHJvamVjdE9uTGluZShhMSwgYjEsIGIyKSk7XG5cblx0Y29uc3QgeURpc3QgPSBhMi5kaXN0YW5jZSh5KTtcblx0Y29uc3QgekRpc3QgPSBiMi5kaXN0YW5jZSh6KTtcblxuXHRjb25zdCBwcm9wb3J0aW9uID0geURpc3QgLyAoeURpc3QgKyB6RGlzdCk7XG5cdGNvbnN0IHl6ID0gei5zdWIoeSkuc2NhbGUocHJvcG9ydGlvbiB8fCAwKTtcblxuXHRjb25zdCBwID0gdmVjUi5jb3B5KHkpLmFkZCh5eik7XG5cblx0aWYgKCFpc1BvaW50T25MaW5lVGhyZXNob2xkZWQoYTIsIGIyLCBwKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHA7XG59XG5cbi8qKlxuICogQ2xvc2VzdCBwb2ludCBvbiBzZWdtZW50LiBUaHJlc2hvbGRzIGEtYiBzZWdtZW50IGZvciB2YWxpZGF0aW9uXG4gKlxuICogQHBhcmFtIHtWZWN0b3IzfSBhIGxpbmUgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYiBsaW5lIGVuZFxuICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBwb2ludCB0byBwcm9qZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludE9uTGluZShhLCBiLCBwb2ludCkge1xuXHRjb25zdCBuID0gdmVjMS5jb3B5KGIpLnN1YihhKS5ub3JtYWxpemUoKTtcblxuXHRyZXR1cm4gaXNQb2ludEluUGxhbmVQb3NpdGl2ZShhLCBuLCBwb2ludCkgJiYgaXNQb2ludEluUGxhbmVQb3NpdGl2ZShiLCBuLm5lZ2F0ZSgpLCBwb2ludCk7XG59XG5cbi8qKlxuICogQ2xvc2VzdCBwb2ludCBvbiBzZWdtZW50LiBUaHJlc2hvbGRzIGEtYiBzZWdtZW50IGZvciB2YWxpZGF0aW9uXG4gKlxuICogQHBhcmFtIHtWZWN0b3IzfSBhIGxpbmUgc3RhcnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYiBsaW5lIGVuZFxuICogQHBhcmFtIHtWZWN0b3IzfSBwb2ludCBwb2ludCB0byBwcm9qZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludE9uTGluZVRocmVzaG9sZGVkKGEsIGIsIHBvaW50KSB7XG5cdGNvbnN0IG4gPSB2ZWMzLmNvcHkoYikuc3ViKGEpLm5vcm1hbGl6ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0aXNQb2ludEluUGxhbmVQb3NpdGl2ZVRocmVzaG9sZGVkKGEsIG4sIHBvaW50KSAmJlxuXHRcdGlzUG9pbnRJblBsYW5lUG9zaXRpdmVUaHJlc2hvbGRlZChiLCBuLm5lZ2F0ZSgpLCBwb2ludClcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IG9yaWdpbiBwbGFuZSBvcmlnaW5cbiAqIEBwYXJhbSB7VmVjdG9yM30gbm9ybWFsIHBsYW5lIG5vcm1hbCBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7VmVjdG9yM30gcG9pbnQgcG9pbnQgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50SW5QbGFuZVBvc2l0aXZlKG9yaWdpbiwgbm9ybWFsLCBwb2ludCkge1xuXHRjb25zdCBwbyA9IHZlYzAuY29weShwb2ludCkuc3ViKG9yaWdpbik7XG5cblx0cmV0dXJuIHBvLmRvdChub3JtYWwpID49IDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWZWN0b3IzfSBvcmlnaW4gcGxhbmUgb3JpZ2luXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IG5vcm1hbCBwbGFuZSBub3JtYWwgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IHBvaW50IHBvaW50IHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludEluUGxhbmVQb3NpdGl2ZVRocmVzaG9sZGVkKG9yaWdpbiwgbm9ybWFsLCBwb2ludCkge1xuXHRjb25zdCB0aHJlc2hvbGQgPSB2ZWMxLmNvcHkobm9ybWFsKS5zY2FsZShERUZBVUxUX0dFT01fVEhSRVNIT0xEKTtcblx0Y29uc3QgbyA9IHZlYzIuY29weShvcmlnaW4pLnN1Yih0aHJlc2hvbGQpO1xuXG5cdHJldHVybiBpc1BvaW50SW5QbGFuZVBvc2l0aXZlKG8sIG5vcm1hbCwgcG9pbnQpO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgdG8gWCBwb2ludCBvbiBzZWdtZW50IEFYIHRoYXQgbGF5cyBvbiB0cmlhbmdsZSBBQkMuIChBIHNoYXJlZFxuICogZm9yIHNlZ21lbnQgYW5kIHRyaWFnbmxlKVxuICogI2ludGVyZmFjZSAxXG4gKiBVc2VzIHZlYzAtNFxuICpcbiAqIEBwYXJhbSB7VmVjdG9yM30gdXAgdXAgdHJpYW5nbGUgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGEgYSBwb2ludCBmb3IgdHJpYW5nbGUgYW5kIG5vcm1hbCBvcmlnaW5cbiAqIEBwYXJhbSB7VmVjdG9yM30gYiBiIHRyaWFuZ2xlIHBvaW50XG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGMgYyB0cmlhbmdsZSBwb2ludFxuICogQHBhcmFtIHtWZWN0b3IzfSBub3JtYWwgbm9ybWFsIGZyb20gYSBpbiBiYyBkaXJlY3Rpb25cbiAqXG4gKiBAcmV0dXJucyB7VmVjdG9yM30gcG9pbnQgb24gQkMuIG51bGwgaWYgaXQgaXNuJ3Qgb24gQkNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDZXZpYW5Gb3JUcmlhbmdsZSh1cCwgYSwgYiwgYywgbm9ybWFsKSB7XG5cdGNvbnN0IGggPSB2ZWMxLmNvcHkocHJvamVjdE9uTGluZShiLCBjLCBhKSkuc3ViKGEpO1xuXHRjb25zdCBmb3J3YXJkID0gaC5ub3JtYWxpemUoKTtcblxuXHRpZiAoZm9yd2FyZC5kb3Qobm9ybWFsKSA8PSAwKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCByaWdodCA9IHZlYzMuY29weShmb3J3YXJkKS5jcm9zcyh1cCk7XG5cdGNvbnN0IGFiZG90ID0gdmVjMS5jb3B5KGIpLnN1YihhKS5ub3JtYWxpemUoKS5kb3QocmlnaHQpO1xuXHRjb25zdCBhY2RvdCA9IHZlYzIuY29weShjKS5zdWIoYSkubm9ybWFsaXplKCkuZG90KHJpZ2h0KTtcblxuXHRjb25zdCBsZWZ0ZG90ID0gTWF0aC5taW4oYWJkb3QsIGFjZG90KTtcblx0Y29uc3QgcmlnaHRkb3QgPSBNYXRoLm1heChhYmRvdCwgYWNkb3QpO1xuXHRjb25zdCBub3JtYWxkb3QgPSBub3JtYWwuZG90KHJpZ2h0KTtcblxuXHRjb25zdCB0aHJlc2hvbGQgPSBaRVJPX1RIUkVTSE9MRDtcblx0aWYgKG5vcm1hbGRvdCA+PSBsZWZ0ZG90IC0gdGhyZXNob2xkICYmIG5vcm1hbGRvdCA8PSByaWdodGRvdCArIHRocmVzaG9sZCkge1xuXHRcdHJldHVybiBwcm9qZWN0TGluZU9uTGluZShhLCB2ZWM0LmNvcHkoYSkuYWRkKG5vcm1hbCksIGIsIGMpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogI2ludGVyZmFjZSAtMVxuICpcbiAqIEBwYXJhbSB7VmVjdG9yMn0gYTEgbGluZSAxIHN0YXJ0XG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGEyIGxpbmUgMSBlbmRcbiAqIEBwYXJhbSB7VmVjdG9yMn0gYjEgbGluZSAyIHN0YXJ0XG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGIyIGxpbmUgMiBlbmRcbiAqIEByZXR1cm5zIHtvYmplY3Q/fSB7YXQ6bnVtYmVyLCBidDpudW1iZXJ9IGEgYW5kIGIgaW50ZXJzZWN0aW9uIHBvaW50XG4gKiAgICAgcGVyY2VudGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0UG9pbnRWYWx1ZXMoYTEsIGEyLCBiMSwgYjIpIHtcblx0aWYgKGExLmVxdWFscyhhMikgfHwgYjEuZXF1YWxzKGIyKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgZGVub20gPSBjcm9zc1Byb2R1Y3QyVmVjdG9yKGExLCBhMiwgYjEsIGIyKTtcblxuXHRpZiAoZGVub20gPT09IDApIHtcblx0XHQvLyBMaW5lcyBwYXJhbGxlbCBvciBvdmVybGFwXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBhdCA9IGNyb3NzUHJvZHVjdDJWZWN0b3IoYjEsIGIyLCBiMSwgYTEpIC8gZGVub207XG5cdGNvbnN0IGJ0ID0gY3Jvc3NQcm9kdWN0MlZlY3RvcihhMSwgYTIsIGIxLCBhMSkgLyBkZW5vbTtcblxuXHRyZXR1cm4geyBhdCwgYnQgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGExIGxpbmUgMSBzdGFydFxuICogQHBhcmFtIHtWZWN0b3IyfSBhMiBsaW5lIDEgZW5kXG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGIxIGxpbmUgMiBzdGFydFxuICogQHBhcmFtIHtWZWN0b3IyfSBiMiBsaW5lIDIgZW5kXG4gKiBAcmV0dXJucyB7VmVjdG9yMj99IGludGVyc2VjdGlvbiBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0UG9pbnQoYTEsIGEyLCBiMSwgYjIpIHtcblx0Y29uc3QgaW50ZXJzZWN0ID0gZ2V0SW50ZXJzZWN0UG9pbnRWYWx1ZXMoYTEsIGEyLCBiMSwgYjIpO1xuXHRpZiAoIWludGVyc2VjdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKCFpbnRlcnNlY3QgfHwgaW50ZXJzZWN0LmF0IDwgMCB8fCBpbnRlcnNlY3QuYXQgPiAxIHx8IGludGVyc2VjdC5idCA8IDAgfHwgaW50ZXJzZWN0LmJ0ID4gMSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGdldFBvc2l0aW9uT25TZWdtZW50KGExLCBhMiwgaW50ZXJzZWN0LmF0KTtcbn1cblxuLyoqXG4gKiAjaW50ZXJmYWNlIC0xXG4gKlxuICogQHBhcmFtIHtWZWN0b3IyfSBhIHN0YXJ0IHNlZ21lbnQgcG9pbnRcbiAqIEBwYXJhbSB7VmVjdG9yMn0gYiBlbmQgc2VnbWVudCBwb2ludFxuICogQHBhcmFtIHtudW1iZXJ9IHQgcGVyY2VudGFnZSAoMC0xKSBvbiBzZWdtbWVudFxuICogQHJldHVybnMge1ZlY3RvcjJ9IHBvc2l0aW9uIG9uIHNlZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uT25TZWdtZW50KGEsIGIsIHQpIHtcblx0Y29uc3QgeCA9IGEueCArIHQgKiAoYi54IC0gYS54KTtcblx0Y29uc3QgeSA9IGEueSArIHQgKiAoYi55IC0gYS55KTtcblxuXHRyZXR1cm4gbmV3IFZlY3RvcjIoeCwgeSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWZWN0b3IzfSBhIC5cbiAqIEBwYXJhbSB7VmVjdG9yM30gYiAuXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGMgLlxuICogQHJldHVybnMge1ZlY3RvcjN9IG5vcm1hbGl6ZWQgdHJpYW5nbGUgZmFjZSB2ZWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaWFuZ2xlTm9ybWFsKGEsIGIsIGMpIHtcblx0Y29uc3QgdjAgPSB2ZWMwLmNvcHkoYSkuc3ViKGIpOyAvLyAgICAgICAgICAgICAgICBWMCA9IFAwLVAxXG5cdGNvbnN0IHYxID0gdmVjUi5jb3B5KGMpLnN1YihiKTsgLy8gICAgICAgICAgICAgICAgVjEgPSBQMi1QMVxuXHRjb25zdCBub3JtYWwgPSB2MS5jcm9zcyh2MCkubm9ybWFsaXplKCk7IC8vIE4gPSBjcm9zcyAoVjEsIFYwKVxuXG5cdHJldHVybiBub3JtYWw7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWZWN0b3IzfSBhIC5cbiAqIEBwYXJhbSB7VmVjdG9yM30gYiAuXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGMgLlxuICogQHJldHVybnMge251bWJlcn0gdHJpYW5nbGUgYXJlYVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpYW5nbGVBcmVhKGEsIGIsIGMpIHtcblx0Y29uc3QgYWIgPSB2ZWMwLmNvcHkoYikuc3ViKGEpO1xuXHRjb25zdCBhYyA9IHZlYzEuY29weShjKS5zdWIoYSk7XG5cblx0Ly8g0J3QtSDQt9C90LDRjiDQv9C+0YfQtdC80YMgOC4g0J/QvtC00YHRgtCw0LLQuNC7INC/0L7QtCDQt9C90LDRh9C10L3QuNC1INC00LvRjyDQv9C70L7RidCw0LTQuCDQutCy0LDQtNGA0LDRgtCwIDHRhTFcblxuXHQvLyA4ID0gMl4zXG5cdC8vIDEuINCf0LXRgNCy0LDRjyDRgdC/0LXRgNC10L3RjCAtINCf0LDRgNCw0LvQu9C+0LPRgNCw0Lwg0L/QvtC/0L7Qu9Cw0Lxcblx0Ly8gMi4g0JLRgtC+0YDQsNGPINGB0YLQtdC/0LXQvdGMIC0g0JXQtNC40L3QuNGG0Ysg0LjQt9C80LXRgNC10L3QuNGPINC/0LvQvtGJ0LDQtNC4IChtXjIsINC90LDQv9GA0LjQvNC10YApICjQvdCw0LLQtdGA0L3QvtC1KVxuXHRyZXR1cm4gdmVjMi5jb3B5KGFiKS5jcm9zcyhhYykubGVuKCkgLyA4O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdmVjIG9uIHZhbC4gQ2hhbmdlcyB2ZWMgaW5wbGFjZVxuICogI25vbnB1cmVcbiAqXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IHZlYyB2ZWMgdG8gZGl2aWRlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsIC5cbiAqIEByZXR1cm5zIHtWZWN0b3IzfSBzYW1lIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVmVjMyh2ZWMsIHZhbCkge1xuXHR2ZWMuZWxlbWVudHNbMF0gLz0gdmFsO1xuXHR2ZWMuZWxlbWVudHNbMV0gLz0gdmFsO1xuXHR2ZWMuZWxlbWVudHNbMl0gLz0gdmFsO1xuXG5cdHJldHVybiB2ZWM7XG59XG5cbi8qKlxuICogUmV0dXJucyB2ZWN0b3JzIG1pZGRsZSBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSB7VmVjdG9yM30gYSAuXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGIgLlxuICogQHBhcmFtIHtWZWN0b3IzfSBjIC5cbiAqIEByZXR1cm5zIHtWZWN0b3IzfSAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NDZW50ZXIoYSwgYiwgYykge1xuXHRyZXR1cm4gZGl2aWRlVmVjMyh2ZWNSLmNvcHkoYSkuYWRkKGIpLmFkZChjKSwgMyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbCBpbnB1dCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBtaW51bXVtIGNsYW1wIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IG1heGltdW0gY2xhbXAgdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFttaW4sIG1heF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYiB0YXJnZXQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0IGZhY3RvclxuICogQHJldHVybnMge251bWJlcn0gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG5cdHJldHVybiBhICsgdCAqIChiIC0gYSk7XG59XG5cbi8qKlxuICogdXNlcyAwLTQgYnVmZmVyIHZlY3RvcnNcbiAqXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGEgdHJpYW5nbGUgcG9pbnRcbiAqIEBwYXJhbSB7VmVjdG9yM30gYiB0cmlhbmdsZSBwb2ludFxuICogQHBhcmFtIHtWZWN0b3IzfSBjIHRyaWFuZ2xlIHBvaW50XG4gKiBAcGFyYW0ge1ZlY3RvcjN9IG9yaWdpbiByYXkgb3JpZ2luXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IGRpcmVjdGlvbiByYXkgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7VmVjdG9yMz99IGludGVyc2VjdGlvbiBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c1RyaWFuZ2xlKGEsIGIsIGMsIG9yaWdpbiwgZGlyZWN0aW9uKSB7XG5cdGNvbnN0IGVkZ2UxID0gdmVjMC5jb3B5KGIpLnN1YihhKTtcblx0Y29uc3QgZWRnZTIgPSB2ZWMxLmNvcHkoYykuc3ViKGEpO1xuXHRjb25zdCBwdmVjID0gdmVjMi5jb3B5KGRpcmVjdGlvbikuY3Jvc3MoZWRnZTIpO1xuXHRjb25zdCBkZXQgPSBlZGdlMS5kb3QocHZlYyk7XG5cblx0aWYgKGRldCA8IFpFUk9fVEhSRVNIT0xEKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgdHZlYyA9IHZlYzMuY29weShvcmlnaW4pLnN1YihhKTtcblx0Y29uc3QgdSA9IHR2ZWMuZG90KHB2ZWMpO1xuXHRpZiAodSA8IDAgfHwgdSA+IGRldCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHF2ZWMgPSB2ZWM0LmNvcHkodHZlYykuY3Jvc3MoZWRnZTEpO1xuXHRjb25zdCB2ID0gZGlyZWN0aW9uLmRvdChxdmVjKTtcblx0aWYgKHYgPCAwIHx8IHUgKyB2ID4gZGV0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB0ID0gZWRnZTIuZG90KHF2ZWMpIC8gZGV0O1xuXG5cdHJldHVybiB2ZWNSLnNldChcblx0XHRvcmlnaW4ueCArIHQgKiBkaXJlY3Rpb24ueCxcblx0XHRvcmlnaW4ueSArIHQgKiBkaXJlY3Rpb24ueSxcblx0XHRvcmlnaW4ueiArIHQgKiBkaXJlY3Rpb24uelxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TWF0cml4NH0gbWF0cml4IG1hdHJpeCB0byBnZXIgZGF0YSBmcm9tXG4gKiBAcGFyYW0ge1F1YXRlcm5pb259IHJlc3VsdCByZXN1bHQgdG8gd3JpdGUgaW50b1xuICpcbiAqIEByZXR1cm5zIHtRdWF0ZXJuaW9ufSByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbk1hdHJpeChtYXRyaXgsIHJlc3VsdCkge1xuXHRjb25zdCBkYXRhID0gbWF0cml4LmVsZW1lbnRzO1xuXHRjb25zdCBtMTEgPSBkYXRhWzBdLFxuXHRcdG0xMiA9IGRhdGFbNF0sXG5cdFx0bTEzID0gZGF0YVs4XTtcblx0Y29uc3QgbTIxID0gZGF0YVsxXSxcblx0XHRtMjIgPSBkYXRhWzVdLFxuXHRcdG0yMyA9IGRhdGFbOV07XG5cdGNvbnN0IG0zMSA9IGRhdGFbMl0sXG5cdFx0bTMyID0gZGF0YVs2XSxcblx0XHRtMzMgPSBkYXRhWzEwXTtcblx0Y29uc3QgdHJhY2UgPSBtMTEgKyBtMjIgKyBtMzM7XG5cdGxldCBzO1xuXHRpZiAodHJhY2UgPiAwKSB7XG5cdFx0cyA9IDAuNSAvIE1hdGguc3FydCh0cmFjZSArIDEuMCk7XG5cdFx0cmVzdWx0LncgPSAwLjI1IC8gcztcblx0XHRyZXN1bHQueCA9IChtMzIgLSBtMjMpICogcztcblx0XHRyZXN1bHQueSA9IChtMTMgLSBtMzEpICogcztcblx0XHRyZXN1bHQueiA9IChtMjEgLSBtMTIpICogcztcblx0fSBlbHNlIGlmIChtMTEgPiBtMjIgJiYgbTExID4gbTMzKSB7XG5cdFx0cyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMTEgLSBtMjIgLSBtMzMpO1xuXHRcdHJlc3VsdC53ID0gKG0zMiAtIG0yMykgLyBzO1xuXHRcdHJlc3VsdC54ID0gMC4yNSAqIHM7XG5cdFx0cmVzdWx0LnkgPSAobTEyICsgbTIxKSAvIHM7XG5cdFx0cmVzdWx0LnogPSAobTEzICsgbTMxKSAvIHM7XG5cdH0gZWxzZSBpZiAobTIyID4gbTMzKSB7XG5cdFx0cyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMjIgLSBtMTEgLSBtMzMpO1xuXHRcdHJlc3VsdC53ID0gKG0xMyAtIG0zMSkgLyBzO1xuXHRcdHJlc3VsdC54ID0gKG0xMiArIG0yMSkgLyBzO1xuXHRcdHJlc3VsdC55ID0gMC4yNSAqIHM7XG5cdFx0cmVzdWx0LnogPSAobTIzICsgbTMyKSAvIHM7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IDIuMCAqIE1hdGguc3FydCgxLjAgKyBtMzMgLSBtMTEgLSBtMjIpO1xuXHRcdHJlc3VsdC53ID0gKG0yMSAtIG0xMikgLyBzO1xuXHRcdHJlc3VsdC54ID0gKG0xMyArIG0zMSkgLyBzO1xuXHRcdHJlc3VsdC55ID0gKG0yMyArIG0zMikgLyBzO1xuXHRcdHJlc3VsdC56ID0gMC4yNSAqIHM7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbi8qKlxuICogU3R1ZmYgcmVsYXRlZCB3aXRoIGFwcGxpY2F0aW9uIGFwcGVhcmFuY2UgY29uc3RhbnRzXG4gKlxuICogQGZpbGUgYXBwZWFyYW5jZS5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAxXG4gKiBAbW9kdWxlIENvcmUvQ29yZU5hbWVzcGFjZVxuICovXG5cbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnaGlsbzNkJztcblxuLyoqXG4gKiBQYWxsZXRlIGRhdGFcbiAqL1xuY2xhc3MgUGFsZXR0ZSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGdldERlZmF1bHRQcm9wZXJ0aWVzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAnIzI5M2I0OScsXG5cdFx0XHRmaXJzdDogJyNiZmMzYzYnLFxuXHRcdFx0YXR0ZW50aW9uOiAnI2Q5MjQzYycsXG5cdFx0XHRicmlnaHQ6ICcjNzdkNmMxJyxcblx0XHRcdGRhcms6ICcjMDMwNzEwJyxcblx0XHRcdGFjY2VudDogJyNkMTQwMWYnLFxuXHRcdFx0bWF0cml4OiAnIzQ1ODIzOScsXG5cdFx0XHRuZXV0cmFsOiAnI2ZmZmZlNCcsXG5cdFx0XHQnbmV1dHJhbF9zZWNvbmQnOiAnI2ZmZTBkYycsXG5cdFx0XHQnbmV1dHJhbF9kYXJrJzogJyNiZmMzYzYnXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIG5ldyBDb2xvciBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC5cblx0ICogQHJldHVybnMge0NvbG9yfSBuZXcgQ29sb3Igb2JqZWN0XG5cdCAqL1xuXHRnZXRDb2xvcihjb2xvcikge1xuXHRcdHJldHVybiBuZXcgQ29sb3IoKS5mcm9tSEVYKHRoaXMuZ2V0KGNvbG9yKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBBcHBsaWNhdGlvbiBBcHBlYXJhbmNlIGRhdGFcbiAqL1xuY2xhc3MgQXBwZWFyYW5jZSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGdldERlZmF1bHRQcm9wZXJ0aWVzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYWxldHRlOiBuZXcgUGFsZXR0ZSgpXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7UGFsZXR0ZX0gLlxuXHQgKi9cblx0Z2V0IHBhbGV0dGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5wYWxldHRlO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRoaXMucGFsZXR0ZS5nZXRDb2xvciBhbGlhc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLlxuXHQgKiBAcmV0dXJucyB7Q29sb3J9IG5ldyBDb2xvciBvYmplY3Rcblx0ICovXG5cdGdldENvbG9yKGNvbG9yKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFsZXR0ZS5nZXRDb2xvcihjb2xvcik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwZWFyYW5jZTtcbmV4cG9ydCB7IEFwcGVhcmFuY2UsIFBhbGV0dGUgfTtcbiIsIi8qKlxuICogQGZpbGUgYXNzZXJ0LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDFcbiAqIEBtb2R1bGUgQ29yZS9Db3JlTmFtZXNwYWNlXG4gKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG4vKipcbiAqIFByb3h5IGZvciBhc3NlcnQgbWV0aG9kcyB3aGljaCBjYW4ndCBkaXNwbGF5IGVycm9yIGluIGNvbnNvbGUgaWYgdGhleSB1bmhhbmRsZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgbmV3IFByb3h5KGFzc2VydCwge1xuXHRnZXQodGFyZ2V0LCBwcm9wKSB7XG5cdFx0Y29uc3QgZmllbGQgPSB0YXJnZXRbcHJvcF07XG5cdFx0aWYgKHR5cGVvZiBmaWVsZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZmllbGQoLi4uYXJncyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihlcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZDtcblx0fVxufSk7XG4iLCIvKipcbiAqIEBmaWxlIGRlbGF5cy5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAxXG4gKiBAbW9kdWxlIENvcmUvVXRpbHMvRGVsYXlzXG4gKi9cblxuaW1wb3J0IGxvZ2dlciBmcm9tICdAY29yZS91dGlscy9sb2dnZXIuanMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICdAY29yZS91dGlscy9ldmVudHNfbWFuYWdlci5qcyc7XG5cbi8qKlxuICog0L3QtdC50LzRgdC/0LXQudGBIGMg0L7QsdC10YDRgtC60LDQvNC4INC00LvRjyDQtNC10LvQtdC10LIsINC40L3RgtC10YDQstCw0LvQvtCyLCDRgNC10LrQstC10YHRgtC+0LIg0Lgg0YIu0L8uXG4gKlxuICogQG5hbWVzcGFjZVxuICovXG5jb25zdCBEZWxheXMgPSB7XG5cdC8qKlxuXHQgKiBjYWxsYmFja3Mgb24gbmVhcmVzdCBnYW1lIHVwZGF0ZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBjYWxsYmFjayBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBpZCBmcm9tIHtAbGluayBtb2R1bGU6Q29yZS9VdGlscy9FdmVudHNNYW5hZ2VyLkV2ZW50c01hbmFnZXIub259XG5cdCAqL1xuXHR1cGRhdGUoY2FsbGJhY2spIHtcblx0XHRyZXR1cm4gZXZlbnRzLm9uY2UoJ3VwZGF0ZScsIChtcywgZHQpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNhbGxiYWNrKG1zLCBkdCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGVycik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBjYWxsYmFja3Mgb24gYW5pbWF0aW9uIGZyYW1lXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IGlkIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHQgKi9cblx0aW1tZWRpYXRlKGNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGxvZ2dlci5lcnJvcihlcnIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHQvKipcblx0ICogY2FsbGJhY2tzIGludGVydmFsc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBpbnRlcnZhbCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZSBpbnRlcnZhbCBkZWxheVxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBpZCBzZXRJbnRlcnZhbFxuXHQgKi9cblx0aW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpIHtcblx0XHRyZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRsb2dnZXIuZXJyb3IoZXJyKTtcblx0XHRcdH1cblx0XHR9LCB0aW1lKTtcblx0fSxcblx0LyoqXG5cdCAqIHN0b3BzIGludGVydmFsXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBpbnRlcnZhbCBpZFxuXHQgKi9cblx0Y2xlYXJJbnRlcnZhbChpZCkge1xuXHRcdGNsZWFySW50ZXJ2YWwoaWQpO1xuXHR9LFxuXHQvKipcblx0ICogc3RvcHMgdGltZW91dFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWQgdGltZW91dCBpZFxuXHQgKi9cblx0Y2xlYXJUaW1lb3V0KGlkKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KGlkKTtcblx0fSxcblx0LyoqXG5cdCAqIGNhbGxiYWNrcyB0aW1lb3V0c1xuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB0aW1lb3V0IGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIHRpbWVvdXQgZGVsYXlcblx0ICogQHJldHVybnMge251bWJlcn0gaWQgc2V0VGltZW91dFxuXHQgKi9cblx0dGltZW91dChjYWxsYmFjaywgdGltZSkge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGVycik7XG5cdFx0XHR9XG5cdFx0fSwgdGltZSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGF5cztcbiIsIi8qKlxuICogQGZpbGUgcm9vbS5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIFJvb21zL0VoaGhCb2FyZFxuICovXG5cbmltcG9ydCB7IERvbUVsZW1lbnRUaGluZ3kgfSBmcm9tICdAcm9vbXMvaHRtbC9pbmRleC5qcyc7XG5pbXBvcnQgeyBUaGluZ3kgfSBmcm9tICdAY29yZS9leGNoYW5nZS9pbmRleC5qcyc7XG5pbXBvcnQgeyBDYW52YXNBcHBFdmVudHMgfSBmcm9tICdAY2xpZW50L2luZGV4LmpzJztcblxuLyoqXG4gKiBTaW1wbGUgdGVzdCBmb3IgbW9kdWxhciB3aW5kb3dzXG4gKi9cbmNsYXNzIEVoaGhCb2FyZFJvb20gZXh0ZW5kcyBUaGluZ3kge1xuXHQvKipcblx0ICogLlxuXHQgKi9cblx0aW5pdENhbGxiYWNrKCkge1xuXHRcdC8vICNkcmFmdFx0XG5cdFx0Y29uc3QgYXBwID0gbmV3IFRoaW5neSh7XG5cdFx0XHRkaXY6IG5ldyBEb21FbGVtZW50VGhpbmd5KHsgaWQ6ICdhcHAtY29udGVudC1yb290JyB9KSxcblx0XHRcdHJlbmRlcjogbmV3IFRoaW5neShcblx0XHRcdFx0eyBjYW52YXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbml0KCkge1xuXHRcdFx0XHRcdFx0dGhpcy5vd25lci5wYXRoKCdkaXYvZGl2JykuYXBwZW5kQ2hpbGQodGhpcy5nZXQoJ2NhbnZhcycpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCksXG5cdFx0XHRlbnY6IG5ldyBDYW52YXNBcHBFdmVudHMoKVxuXHRcdH0pO1xuXHRcdGFwcC5pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogLlxuXHQgKi9cblx0ZGlzcG9zZUNhbGxiYWNrKCkge1xuXHRcdC8vLi5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFaGhoQm9hcmRSb29tO1xuIiwiLyoqXG4gKiBAZmlsZSBhcHBfcm9vdC5qc1xuICpcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMlxuICogQG1vZHVsZSBFbmdpbmVcbiAqL1xuXG5pbXBvcnQgeyBUaGluZ3kgfSBmcm9tICdAY29yZS9leGNoYW5nZS9pbmRleC5qcyc7XG5cbi8vaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJ0BhcHAvcGFnZV9oZWxwZXJzL3BhZ2VfbWFuYWdlci5qcyc7XG5pbXBvcnQgeyBEb21FbGVtZW50VGhpbmd5IH0gZnJvbSAnQHJvb21zL2h0bWwvaW5kZXguanMnO1xuaW1wb3J0IHsgQ2FudmFzQXBwRXZlbnRzIH0gZnJvbSAnQGNsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgUmVzb3VyY2VzTWFuYWdlciBmcm9tICcuL3Jlc291cmNlc19tYW5hZ2VyLmpzJztcbmltcG9ydCBIaWxvM2RFbmdpbmVUaGluZ3kgZnJvbSAnLi9lbmdpbmUvaGlsbzNkX2VuZ2luZS5qcyc7XG5cbi8qKlxuICogUm9vdCBhcHBsaWNhdGlvbiBjbGFzc1xuICpcbiAqIEBwcm9wZXJ0eSB7RG9tRWxlbWVudFRoaW5neX0gZGl2IGRvbSBlbGVtZW50XG4gKiBAcHJvcGVydHkge0hpbG8zZEVuZ2luZVRoaW5neX0gcmVuZGVyIGhpbG8gZW5naW5lIHJlbmRlclxuICogQHByb3BlcnR5IHtDYW52YXNBcHBFdmVudHN9IGVudiBzeXN0ZW0gZXZlbnRzIGFuZCBvdGhlclxuICogQHByb3BlcnR5IHtvYmplY3R9IGdhbWUgZ2FtZSBzdGF0ZSBzdG9yYWdlXG4gKiBAcHJvcGVydHkge1Jlc291cmNlc01hbmFnZXJ9IHJlc291cmNlcyByZXNvdXJjZXMgbWFuYWdlclxuICovXG5jbGFzcyBBcHBSb290IGV4dGVuZHMgVGhpbmd5IHtcblx0LyoqXG5cdCAqIEFzc2lnbnMgbmV3IGZpZWxkcyB0byBldmVudHNcblx0ICovXG5cdGluaXRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmV2ZW50cy5vbignZW52L3dpbmRvdy5jb250ZXh0bWVudScsIChldnQpID0+IHtcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Z2V0RGVmYXVsdFByb3BlcnRpZXMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0cmljdEluaXQ6IHRydWUsXG5cdFx0XHRkaXY6IG5ldyBEb21FbGVtZW50VGhpbmd5KHsgaWQ6ICdoaWxvM2Qtcm9vbS1jb250ZW50JyB9KSxcblx0XHRcdC8vcGFnZTogbmV3IFBhZ2VNYW5hZ2VyKHsgZG9tOiBuZXcgRG9tRWxlbWVudFRoaW5neSh7IHBhcmVudElkOiAnYXBwLXJvb3QnIH0pIH0pLFxuXHRcdFx0cmVzb3VyY2VzOiBuZXcgUmVzb3VyY2VzTWFuYWdlcigpLCAvLyAjb3JkZXIgMVxuXHRcdFx0cmVuZGVyOiBuZXcgSGlsbzNkRW5naW5lVGhpbmd5KCksIC8vICNvcmRlciAyXG5cdFx0XHRlbnY6IG5ldyBDYW52YXNBcHBFdmVudHMoKSwgLy8gI29yZGVyIDNcblx0XHRcdGdhbWU6IG5ldyBUaGluZ3koKVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQWxsb3dzIHRvIHN0b3AgYWxsIGFwcGxpY2F0aW9uIG9uIGluaXQgZXJyb3Jcblx0ICpcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRzdXBlci5pbml0KCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAodGhpcy5nZXQoJ3N0cmljdEluaXQnKSkge1xuXHRcdFx0XHQvL2Nnbi5sb2cuZXJyb3IoJygvc3RyaWN0SW5pdCkgQ3JpdGljYWwgZXJyb3IgaW4gYXBwIGluaXQoKTonLCBlcnIpO1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2UoKTtcblx0XHRcdH1cblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge1Jlc291cmNlc01hbmFnZXJ9IC5cblx0ICovXG5cdGdldCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5yZXNvdXJjZXM7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0hpbG8zZEVuZ2luZVRoaW5neX0gLlxuXHQgKi9cblx0Z2V0IHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLnJlbmRlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7VGhpbmd5fSAuXG5cdCAqL1xuXHRnZXQgZ2FtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLmdhbWU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwUm9vdDtcbiIsIi8qKlxuICogLSAwNi4wNy4yMFxuICpcbiAqIEBmaWxlIGhpbG8zZF9jYW1lcmEuanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMlxuICogQG1vZHVsZSBHYW1lL0VuZ2luZVxuICovXG5cbmltcG9ydCB7IEJhc2ljT3JiaXRhbENhbWVyYSB9IGZyb20gJ0Byb29tcy9oaWxvM2QvaW5wdXQvaW5kZXguanMnO1xuaW1wb3J0IHsgVGhpbmd5IH0gZnJvbSAnQGNvcmUvZXhjaGFuZ2UvaW5kZXguanMnO1xuaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICdoaWxvM2QnO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGhpbG8gY2FtZXJhXG4gKi9cbmNsYXNzIEhpbG8zZENhbWVyYU1hbmFnZXIgZXh0ZW5kcyBUaGluZ3kge1xuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRnZXREZWZhdWx0UHJvcGVydGllcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29udHJvbHM6IG5ldyBCYXNpY09yYml0YWxDYW1lcmEoKVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBoaWxvIGNhbWVyYVxuXHQgKi9cblx0cHJlaW5pdENhbGxiYWNrKCkge1xuXHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuc2V0KFxuXHRcdFx0J2NhbWVyYScsXG5cdFx0XHRuZXcgUGVyc3BlY3RpdmVDYW1lcmEoe1xuXHRcdFx0XHRhc3BlY3Q6IGlubmVyV2lkdGggLyBpbm5lckhlaWdodCxcblx0XHRcdFx0ZmFyOiAxMDAwLFxuXHRcdFx0XHRuZWFyOiAwLjEsXG5cdFx0XHRcdHo6IDIwLFxuXHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0cm90YXRpb25YOiAtNDVcblx0XHRcdH0pXG5cdFx0KTtcblx0XHR0aGlzLnBhdGgoJyovc3RhZ2UnKS5jYW1lcmEgPSBjYW1lcmE7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge1BlcnNwZWN0aXZlQ2FtZXJhfSAuXG5cdCAqL1xuXHRnZXQgaGlsbygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2NhbWVyYScpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpbG8zZENhbWVyYU1hbmFnZXI7XG4iLCIvKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDNcbiAqIEBtb2R1bGUgUmVuZGVyL0hpbG8zZFxuICovXG5cbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcbmltcG9ydCB7IENhbWVyYSwgRm9nLCBBbWJpZW50TGlnaHQsIENvbG9yLCBEaXJlY3Rpb25hbExpZ2h0LCBTdGFnZSwgVmVjdG9yMyB9IGZyb20gJ2hpbG8zZCc7XG5pbXBvcnQgSGlsb0RlYnVnSGVscGVyIGZyb20gJy4vaGlsb19kZWJ1Z19oZWxwZXIuanMnO1xuaW1wb3J0IEhpbG8zZENhbWVyYU1hbmFnZXIgZnJvbSAnLi9oaWxvM2RfY2FtZXJhLmpzJztcblxuLyoqXG4gKiBXcmFwcGVyIGNsYXNzIGZvciBIaWxvM2QgbWFuYWdlbWVudFxuICovXG5jbGFzcyBIaWxvM2RFbmdpbmVUaGluZ3kgZXh0ZW5kcyBUaGluZ3kge1xuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRnZXREZWZhdWx0UHJvcGVydGllcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FtZXJhOiBuZXcgSGlsbzNkQ2FtZXJhTWFuYWdlcigpLFxuXHRcdFx0ZGVidWc6IG5ldyBIaWxvRGVidWdIZWxwZXIoKVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBIaWxvIGluc3RhbmNlXG5cdCAqXG5cdCAqIEBsaXN0ZW5zIHdpbmRvdyNvbnJlc2l6ZVxuXHQgKi9cblx0cHJlaW5pdENhbGxiYWNrKCkge1xuXHRcdGNvbnN0IGNsZWFyQ29sb3IgPSBjZ24uYXBwZWFyYW5jZS5nZXRDb2xvcignZmlyc3QnKTtcblx0XHRjb25zdCBzdGFnZSA9IG5ldyBTdGFnZSh7XG5cdFx0XHRjb250YWluZXI6IHRoaXMucGF0aCgnL2RpdicpLmdldCgnZGl2JyksXG5cdFx0XHRjbGVhckNvbG9yOiBuZXcgQ29sb3IoMCwgMCwgMCwgMCksXG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdHdpZHRoOiBpbm5lcldpZHRoLFxuXHRcdFx0aGVpZ2h0OiBpbm5lckhlaWdodCxcblx0XHRcdGZvZzogbmV3IEZvZyh7XG5cdFx0XHRcdG1vZGU6ICdMSU5FQVInLCAvLyBMSU5FQVIsIEVYUCwgRVhQMlxuXHRcdFx0XHRzdGFydDogMTAwLFxuXHRcdFx0XHRlbmQ6IDE1MCxcblx0XHRcdFx0ZGVuc2l0eTogMC4wMSxcblx0XHRcdFx0Y29sb3I6IGNsZWFyQ29sb3Jcblx0XHRcdH0pXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXQoJ3N0YWdlJywgc3RhZ2UpO1xuXG5cdFx0dGhpcy5ldmVudHMub24oJy9lbnYvd2luZG93LnJlc2l6ZScsICgpID0+IHtcblx0XHRcdHN0YWdlLnJlc2l6ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSBpbm5lcldpZHRoIC8gaW5uZXJIZWlnaHQ7XG5cdFx0fSk7XG5cdFx0dGhpcy5ldmVudHMub24oJy9lbnYvdGltZS5mcmFtZScsICgpID0+IHtcblx0XHRcdGNvbnN0IGhhcmRjb2RlZER0ID0gMTA7XG5cdFx0XHRzdGFnZS50aWNrKGhhcmRjb2RlZER0KTtcblx0XHR9KTtcblxuXHRcdC8vdGhpcy5yZW5kZXJlciA9IHRoaXMud29ybGQucmVuZGVyZXI7XG5cdFx0Ly90aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcblx0XHR0aGlzLnNldCgnY2FudmFzJywgc3RhZ2UuY2FudmFzKTtcblx0XHQvL3N0YWdlLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJHtjZ24uYXBwZWFyYW5jZS5nZXQoJ2JhY2tncm91bmQnKX0sICR7Y2duLmFwcGVhcmFuY2UuZ2V0KCdkYXJrJyl9KTtgXG5cdFx0Ly90aGlzLmNhbnZhcyA9IHRoaXMud29ybGQuY2FudmFzO1xuXHRcdC8vIHRoaXMucmVuZGVyZXIudXNlSW5zdGFuY2VkID0gdHJ1ZTtcblxuXHRcdGNvbnN0IGFuZ2xlID0gMC43O1xuXHRcdG5ldyBEaXJlY3Rpb25hbExpZ2h0KHtcblx0XHRcdGNvbG9yOiBuZXcgQ29sb3IoKS5mcm9tSEVYKCcjZjZlZGM5JyksXG5cdFx0XHRkaXJlY3Rpb246IG5ldyBWZWN0b3IzKC1hbmdsZSwgLTEsIDApLFxuXHRcdFx0YW1vdW50OiAxXG5cdFx0fSkuYWRkVG8oc3RhZ2UpO1xuXHRcdG5ldyBEaXJlY3Rpb25hbExpZ2h0KHtcblx0XHRcdGNvbG9yOiBuZXcgQ29sb3IoKS5mcm9tSEVYKCcjYmZlOGY1JyksXG5cdFx0XHRkaXJlY3Rpb246IG5ldyBWZWN0b3IzKGFuZ2xlIC8gMiwgMC41LCAwKSxcblx0XHRcdGFtb3VudDogMC4xXG5cdFx0fSkuYWRkVG8oc3RhZ2UpO1xuXG5cdFx0bmV3IEFtYmllbnRMaWdodCh7IGNvbG9yOiBuZXcgQ29sb3IoKS5mcm9tSEVYKCcjYzllOWY2JyksIGFtb3VudDogMC42IH0pLmFkZFRvKHN0YWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7U3RhZ2V9IC5cblx0ICovXG5cdGdldCBzdGFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ3N0YWdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge29iamVjdH0gLlxuXHQgKi9cblx0Z2V0IGNhbnZhcygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2NhbnZhcycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtDYW1lcmF9IC5cblx0ICovXG5cdGdldCBjYW1lcmEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZ2UuY2FtZXJhO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtIaWxvRGVidWdIZWxwZXJ9IC5cblx0ICovXG5cdGdldCBkZWJ1ZygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLmRlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNsZWFudXBcblx0ICovXG5cdGRpc3Bvc2VDYWxsYmFjaygpIHtcblx0XHR0aGlzLmdldCgnc3RhZ2UnKS5kZXN0cm95KCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlsbzNkRW5naW5lVGhpbmd5O1xuIiwiaW1wb3J0IHsgVGhpbmd5IH0gZnJvbSAnQGNvcmUvZXhjaGFuZ2UvaW5kZXguanMnO1xuaW1wb3J0IEhpbG9MaW5lUmVuZGVyIGZyb20gJy4vaGlsb19saW5lX3JlbmRlci5qcyc7XG5pbXBvcnQgeyBWZWN0b3IzLCBOb2RlLCBNZXNoLCBTcGhlcmVHZW9tZXRyeSwgQmFzaWNNYXRlcmlhbCB9IGZyb20gJ2hpbG8zZCc7XG5pbXBvcnQgeyBjYWNoZSwgREVGQVVMVF9HRU9NX05PUk1BTFNfU0laRSB9IGZyb20gJ0Bjb3JlL21hdGguanMnO1xuXG4vKipcbiAqIEFzc2lzdHMgd2l0aCBkZWJ1ZyBwcmltaXRpdmVzXG4gKi9cbmNsYXNzIEhpbG9EZWJ1Z0hlbHBlciBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGdldERlZmF1bHRQcm9wZXJ0aWVzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZW9tZXRyeTogbmV3IFRoaW5neSgpLFxuXHRcdFx0bWF0ZXJpYWxzOiBuZXcgVGhpbmd5KCksXG5cdFx0XHRsaW5lczogbmV3IFRoaW5neSgpLFxuXHRcdFx0aGlsbzogbmV3IE5vZGUoeyBuYW1lOiAnZGVidWcnIH0pXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAuXG5cdCAqL1xuXHRpbml0Q2FsbGJhY2soKSB7XG5cdFx0dGhpcy5vd25lci5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpbG8pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgbm9kZVxuXHQgKi9cblx0ZGlzcG9zZUNhbGxiYWNrKCkge1xuXHRcdHRoaXMuaGlsby5yZW1vdmVGcm9tUGFyZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbGwgZGVidWcgZGF0YVxuXHQgKi9cblx0Y2xlYW51cCgpIHtcblx0XHR0aGlzLmhpbG8ucmVtb3ZlRnJvbVBhcmVudCgpO1xuXHRcdHRoaXMuc2V0KCdoaWxvJywgbmV3IE5vZGUoKSk7XG5cdFx0dGhpcy5vd25lci5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpbG8pO1xuXHRcdHRoaXMuY2xlYXJMaW5lcygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gbm9ybWFsIC5cblx0ICogQHBhcmFtIHtWZWN0b3IzfSBwb3MgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgbmFtZVxuXHQgKi9cblx0ZHJhd05vcm1hbChub3JtYWwsIHBvcywgY29sb3IgPSAnbWF0cml4Jykge1xuXHRcdGNvbnN0IGxpbmUgPSB0aGlzLnByb3BlcnRpZXMubGluZXMudG91Y2goY29sb3IsICgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSGlsb0xpbmVSZW5kZXIoeyBjb2xvcjogY2duLmFwcGVhcmFuY2UucGFsZXR0ZS5nZXQoY29sb3IpIH0pO1xuXHRcdH0pO1xuXG5cdFx0bGluZS5hZGRMaW5lKHBvcywgY2FjaGUudmVjMy52MC5jb3B5KG5vcm1hbCkuc2NhbGUoREVGQVVMVF9HRU9NX05PUk1BTFNfU0laRSkuYWRkKHBvcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gYSAuXG5cdCAqIEBwYXJhbSB7VmVjdG9yM30gYiAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciBuYW1lXG5cdCAqL1xuXHRkcmF3TGluZShhLCBiLCBjb2xvciA9ICdtYXRyaXgnKSB7XG5cdFx0Y29uc3QgbGluZSA9IHRoaXMucHJvcGVydGllcy5saW5lcy50b3VjaChjb2xvciwgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBIaWxvTGluZVJlbmRlcih7IGNvbG9yOiBjZ24uYXBwZWFyYW5jZS5wYWxldHRlLmdldChjb2xvcikgfSk7XG5cdFx0fSk7XG5cblx0XHRsaW5lLmFkZExpbmUoYSwgYik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIG5hbWVcblx0ICovXG5cdGNsZWFyTGluZShjb2xvcikge1xuXHRcdGNvbnN0IGxpbmUgPSB0aGlzLnByb3BlcnRpZXMubGluZXMuZ2V0KGNvbG9yKTtcblx0XHRpZiAobGluZSkge1xuXHRcdFx0bGluZS5jbGVhcigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiAuXG5cdCAqL1xuXHRjbGVhckxpbmVzKCkge1xuXHRcdGZvciAoY29uc3QgY29sb3IgaW4gdGhpcy5wcm9wZXJ0aWVzLmxpbmVzLmNhY2hlKSB7XG5cdFx0XHR0aGlzLmNsZWFyTGluZShjb2xvcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXVzPTFdIHJhZGl1cyBzY2FsZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yPSdhdHRlbnRpb24nXSAuXG5cdCAqIEByZXR1cm5zIHtNZXNofSAuXG5cdCAqL1xuXHRtYWtlU3BoZXJlKHJhZGl1cyA9IDEsIGNvbG9yID0gJ2F0dGVudGlvbicpIHtcblx0XHRjb25zdCBtZXNoID0gbmV3IE1lc2goe1xuXHRcdFx0dXNlSW5zdGFuY2VkOiB0cnVlLFxuXHRcdFx0Z2VvbWV0cnk6IHRoaXMucHJvcGVydGllcy5nZW9tZXRyeS50b3VjaChyYWRpdXMsICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBTcGhlcmVHZW9tZXRyeSh7XG5cdFx0XHRcdFx0cmFkaXVzOiByYWRpdXMgKiBERUZBVUxUX0dFT01fTk9STUFMU19TSVpFLFxuXHRcdFx0XHRcdGhlaWdodFNlZ21lbnRzOiA0LFxuXHRcdFx0XHRcdHdpZHRoU2VnbWVudHM6IDRcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSxcblx0XHRcdG1hdGVyaWFsOiB0aGlzLnByb3BlcnRpZXMubWF0ZXJpYWxzLnRvdWNoKGNvbG9yLCAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgQmFzaWNNYXRlcmlhbCh7XG5cdFx0XHRcdFx0bGlnaHRUeXBlOiAnTk9ORScsXG5cdFx0XHRcdFx0ZGlmZnVzZTogY2duLmFwcGVhcmFuY2UuZ2V0Q29sb3IoY29sb3IpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdHRoaXMuaGlsby5hZGRDaGlsZChtZXNoKTtcblxuXHRcdHJldHVybiBtZXNoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtOb2RlfSAuXG5cdCAqL1xuXHRnZXQgaGlsbygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLmhpbG87XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlsb0RlYnVnSGVscGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuLyoqXG4gKiBAZmlsZSBoaWxvX25vZGVfdGhpbmd5LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDFcbiAqIEBtb2R1bGUgR2FtZS9Db3JlXG4gKi9cbmltcG9ydCB7IEJhc2ljTWF0ZXJpYWwsIEdlb21ldHJ5LCBNZXNoLCBDb2xvciwgY29uc3RhbnRzLCBWZWN0b3IzIH0gZnJvbSAnaGlsbzNkJztcbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcblxuLyoqXG4gKiBoaWxvM2QgbGluZSBkcmF3XG4gKiAjYWNjZXNzIC9yZXNvdXJjZXMuIHJlc291cmNlcyBoYXMgdG8gYmUgcHJlbG9hZGVkXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgbWVzaCBuYW1lXG4gKi9cbmNsYXNzIEhpbG9MaW5lUmVuZGVyIGV4dGVuZHMgVGhpbmd5IHtcblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Z2V0RGVmYXVsdFByb3BlcnRpZXMoKSB7XG5cdFx0cmV0dXJuIHsgY29sb3I6ICcjRkYwMDAwJyB9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgbm9kZVxuXHQgKi9cblx0aW5pdENhbGxiYWNrKCkge1xuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IEJhc2ljTWF0ZXJpYWwoe1xuXHRcdFx0ZGlmZnVzZTogbmV3IENvbG9yKCkuZnJvbUhFWCh0aGlzLmdldCgnY29sb3InKSksXG5cdFx0XHRsaWdodFR5cGU6ICdOT05FJ1xuXHRcdH0pO1xuXHRcdGNvbnN0IGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KHsgbW9kZTogY29uc3RhbnRzLkxJTkVTIH0pO1xuXG5cdFx0Y29uc3QgbWVzaCA9IG5ldyBNZXNoKHtcblx0XHRcdGdlb21ldHJ5LFxuXHRcdFx0bWF0ZXJpYWxcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0KCdoaWxvJywgbWVzaCk7XG5cblx0XHR0aGlzLnBhdGgoJy9yZW5kZXInKS5zdGFnZS5hZGRDaGlsZChtZXNoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAjYnVnOiBlcmFzZXMgYWRkUG9pbnRzKCkncyBkcmF3XG5cdCAqICNjaGFpblxuXHQgKlxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgbGluZSBwb2ludCBzdGFydFxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IGIgbGluZSBwb2ludCBlbmRcblx0ICogQHJldHVybnMge0hpbG9MaW5lUmVuZGVyfSB0aGlzXG5cdCAqL1xuXHRhZGRMaW5lKGEsIGIpIHtcblx0XHRjb25zdCBnID0gdGhpcy5oaWxvLmdlb21ldHJ5O1xuXHRcdGcuYWRkTGluZShhLmVsZW1lbnRzLCBiLmVsZW1lbnRzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqICNjaGFpblxuXHQgKlxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IGEgbGluZSBuZXh0IHBvaW50XG5cdCAqIEByZXR1cm5zIHtIaWxvTGluZVJlbmRlcn0gdGhpc1xuXHQgKi9cblx0YWRkUG9pbnQoYSkge1xuXHRcdGNvbnN0IGcgPSB0aGlzLmhpbG8uZ2VvbWV0cnk7XG5cdFx0Y29uc3QgYyA9IGcuaW5kaWNlcz8uY291bnQgfHwgMDtcblx0XHRpZiAoYykge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGcudmVydGljZXMuZGF0YTtcblx0XHRcdGcuYWRkTGluZShbZGF0YVtkYXRhLmxlbmd0aCAtIDNdLCBkYXRhW2RhdGEubGVuZ3RoIC0gMl0sIGRhdGFbZGF0YS5sZW5ndGggLSAxXV0sIGEuZWxlbWVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnLmFkZFBvaW50cyhhLmVsZW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIHBvaW50cyBpbmZvXG5cdCAqL1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh7IG1vZGU6IGNvbnN0YW50cy5MSU5FUyB9KTtcblx0XHR0aGlzLmhpbG8uZ2VvbWV0cnkgPSBnZW9tZXRyeTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIG5vZGVcblx0ICovXG5cdGRpc3Bvc2VDYWxsYmFjaygpIHtcblx0XHR0aGlzLmhpbG8ucmVtb3ZlRnJvbVBhcmVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtNZXNofSAuXG5cdCAqL1xuXHRnZXQgaGlsbygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2hpbG8nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Q29sb3J9IC5cblx0ICovXG5cdGdldCBjb2xvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5oaWxvLm1hdGVyaWFsLmRpZmZ1c2U7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtDb2xvcn0gYyAuXG5cdCAqL1xuXHRzZXQgY29sb3IoYykge1xuXHRcdHRoaXMuaGlsby5tYXRlcmlhbC5kaWZmdXNlID0gYztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaWxvTGluZVJlbmRlcjtcbiIsIi8qKlxuICogQGZpbGUgaGlsb19ub2RlX3RoaW5neS5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAxXG4gKiBAbW9kdWxlIEdhbWUvQ29yZVxuICovXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnaGlsbzNkJztcbmltcG9ydCBIaWxvTGluZVJlbmRlciBmcm9tICcuL2hpbG9fbGluZV9yZW5kZXIuanMnO1xuaW1wb3J0IHsgVGhpbmd5IH0gZnJvbSAnQGNvcmUvZXhjaGFuZ2UvaW5kZXguanMnO1xuXG4vKipcbiAqIGhpbG8zZCBOb2RlIHdyYXBwZXIuIERvZXMgdHdvIHRoaW5nczpcbiAqICNhY2Nlc3MgL3Jlc291cmNlcy4gcmVzb3VyY2VzIGhhcyB0byBiZSBwcmVsb2FkZWRcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBtZXNoIG5hbWVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2RlYnVnTm9ybWFsc0VuYWJsZWQ9ZmFsc2VdIGRyYXdzIG1lc2ggbm9ybWFsc1xuICovXG5jbGFzcyBIaWxvTWVzaFRoaW5neSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGdldERlZmF1bHRQcm9wZXJ0aWVzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkZWJ1Z05vcm1hbHNFbmFibGVkOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBub2RlXG5cdCAqL1xuXHRwb3N0aW5pdENhbGxiYWNrKCkge1xuXHRcdC8vY29kZSBkZWJ0INC/0L4g0LjQtNC10LUg0L3QtdC70YzQt9GPINC/0L7Qu9GD0YfQsNGC0Ywg0LTQvtGB0YLRg9C/INC6INGE0YPQvdC60YbQuNC4IFwi0LrQsNC60L7Qs9C+LdGC0L4g0YLQsNC8INC60LvQsNGB0YHQsFwiLFxuXHRcdC8v0LIg0LjQtNC10LDQu9C1INC60L7Qv9C40YDQvtCy0LDQvdC40LUg0LTQvtC70LbQvdC+INC/0YDQvtC40YHRhdC+0LTQuNGC0Ywg0L3QsNC/0YDRj9C80YPRjiDQuNC3INC00YDRg9Cz0L7Qs9C+IEhpbG9NZXNoVGhpbmd5XG5cdFx0Y29uc3QgbWVzaCA9IHRoaXMucGF0aCgnL3Jlc291cmNlcycpLmdldE1lc2hDbG9uZSh0aGlzLmdldCgnbmFtZScpKTtcblx0XHR0aGlzLnNldCgnaGlsbycsIG1lc2gpO1xuXG5cdFx0KHRoaXMub3duZXI/LmhpbG8gPz8gdGhpcy5wYXRoKCcvcmVuZGVyJykuc3RhZ2UpLmFkZENoaWxkKG1lc2gpO1xuXG5cdFx0aWYgKHRoaXMucHJvcGVydGllcy5kZWJ1Z05vcm1hbHNFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZURlYnVnTm9ybWFscygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5cyBub3JtYWxzIGRpcmVjdGlvbnNcblx0ICovXG5cdGVuYWJsZURlYnVnTm9ybWFscygpIHtcblx0XHRjZ24uZGVsYXlzLmltbWVkaWF0ZSgoKSA9PiB7XG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG5cdFx0XHR0aGlzLnByb3BlcnRpZXMuZGVidWdOb3JtYWxzRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5nZXQoJ2RlYnVnTGluZXNUaGluZ3knKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsaW5lcyA9IHRoaXMuc2V0KCdkZWJ1Z0xpbmVzVGhpbmd5JywgbmV3IEhpbG9MaW5lUmVuZGVyKCkpO1xuXG5cdFx0XHRjb25zdCBnID0gdGhpcy5oaWxvLmdlb21ldHJ5O1xuXHRcdFx0Y29uc3QgaW5kaWNlcyA9IGcuaW5kaWNlcztcblx0XHRcdGNvbnN0IGxlbiA9IGluZGljZXMucmVhbExlbmd0aDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMykge1xuXHRcdFx0XHRjb25zdCBpZHggPSBpbmRpY2VzLmdldChpKTtcblx0XHRcdFx0Y29uc3QgcCA9IGcudmVydGljZXMuZ2V0KGlkeCkuY2xvbmUoKTtcblx0XHRcdFx0Y29uc3QgbiA9IGcubm9ybWFscy5nZXQoaWR4KS5jbG9uZSgpO1xuXHRcdFx0XHRsaW5lcy5hZGRMaW5lKHAsIG4uYWRkKHApKTtcblx0XHRcdH1cblx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXlzIG5vcm1hbHMgZGlyZWN0aW9uc1xuXHQgKi9cblx0ZGlzYWJsZURlYnVnTm9ybWFscygpIHtcblx0XHR0aGlzLnByb3BlcnRpZXMuZGVidWdOb3JtYWxzRW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMuZGVsKCdkZWJ1Z0xpbmVzVGhpbmd5JywgdHJ1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBub2RlXG5cdCAqL1xuXHRkaXNwb3NlQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5oaWxvLnJlbW92ZUZyb21QYXJlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7TWVzaH0gLlxuXHQgKi9cblx0Z2V0IGhpbG8oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KCdoaWxvJyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlsb01lc2hUaGluZ3k7XG4iLCIvKipcbiAqIEBmaWxlIGhpbG9fbm9kZV90aGluZ3kuanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBHYW1lL0NvcmVcbiAqL1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJ2hpbG8zZCc7XG5pbXBvcnQgeyBUaGluZ3kgfSBmcm9tICdAY29yZS9leGNoYW5nZS9pbmRleC5qcyc7XG5cbi8qKlxuICogaGlsbzNkIE5vZGUgd3JhcHBlci4gRG9lcyB0d28gdGhpbmdzOlxuICovXG5jbGFzcyBIaWxvTm9kZVdyYXBwZXIgZXh0ZW5kcyBUaGluZ3kge1xuXHQvKipcblx0ICogQ3JlYXRlcyBub2RlXG5cdCAqL1xuXHRpbml0Q2FsbGJhY2soKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gbmV3IE5vZGUoeyBuYW1lOiB0aGlzLmdldCgnaWQnKSB9KTtcblx0XHR0aGlzLnNldCgnX2hpbG8nLCBjb250YWluZXIsIHsgcG9pbnRlcjogdHJ1ZSB9KTtcblxuXHRcdCh0aGlzLm93bmVyPy5oaWxvID8/IHRoaXMucGF0aCgnL3JlbmRlcicpLnN0YWdlKS5hZGRDaGlsZChjb250YWluZXIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgbm9kZVxuXHQgKi9cblx0ZGlzcG9zZUNhbGxiYWNrKCkge1xuXHRcdHRoaXMuaGlsby5yZW1vdmVGcm9tUGFyZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge05vZGV9IC5cblx0ICovXG5cdGdldCBoaWxvKCkge1xuXHRcdHJldHVybiB0aGlzLmdldCgnX2hpbG8nKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaWxvTm9kZVdyYXBwZXI7XG4iLCIvKipcbiAqIEBmaWxlIGRldl9kZWZhdWx0X2Vudi5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAxXG4gKiBAbW9kdWxlIEdhbWUvT2JqZWN0c1xuICovXG5cbmltcG9ydCB7XG5cdE5vZGUsXG5cdFBsYW5lR2VvbWV0cnksXG5cdE1lc2gsXG5cdEF4aXNIZWxwZXIsXG5cdEJhc2ljTWF0ZXJpYWwsXG5cdExhenlUZXh0dXJlLFxuXHRjb25zdGFudHMsXG5cdE1hdHJpeDMsXG5cdFZlY3RvcjJcbn0gZnJvbSAnaGlsbzNkJztcbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcbmltcG9ydCB7IEhpbG9Ob2RlV3JhcHBlciB9IGZyb20gJ0Byb29tcy9oaWxvM2QvaW5kZXguanMnO1xuaW1wb3J0IHsgUFJFQ0lTRV9HRU9NX1RIUkVTSE9MRCB9IGZyb20gJ0Bjb3JlL21hdGguanMnO1xuXG5jb25zdCBERUZBVUxUX1BMQU5FX1VOSVRTID0gMTA7XG5jb25zdCBQTEFORV9TSVpFID0gMTAwO1xuXG4vKipcbiAqIE1hcCB3aXRoIGRlYnVnIHByb3BzXG4gKi9cbmNsYXNzIERlZmF1bHREZXZIaWxvRW52TWFwIGV4dGVuZHMgVGhpbmd5IHtcblx0LyoqXG5cdCAqIGluaXRzIHNjZW5lIGNvbnRhaW5lclxuXHQgKi9cblx0cG9zdGluaXRDYWxsYmFjaygpIHtcblx0XHR0aGlzLm1ha2VNYXAoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Tm9kZX0gY3JlYXRlZCBjb250YWluZXIgKGFkZCBpdCB0byBzdGFnZSlcblx0ICovXG5cdG1ha2VNYXAoKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gdGhpcy5zZXQoJ2NvbnRhaW5lcicsIG5ldyBIaWxvTm9kZVdyYXBwZXIoeyBpZDogJ2RlZmF1bHRfZGV2X21hcCcgfSkpLmhpbG87XG5cblx0XHRjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHtcblx0XHRcdHJvdGF0aW9uWDogLTkwLFxuXHRcdFx0eTogLVBSRUNJU0VfR0VPTV9USFJFU0hPTEQsXG5cdFx0XHQvL3g6IFBMQU5FX1NJWkUgLyAyLFxuXHRcdFx0Ly96OiBQTEFORV9TSVpFIC8gMixcblx0XHRcdGdlb21ldHJ5OiBuZXcgUGxhbmVHZW9tZXRyeSh7IHdpZHRoOiBQTEFORV9TSVpFLCBoZWlnaHQ6IFBMQU5FX1NJWkUgfSksXG5cdFx0XHRtYXRlcmlhbDogbmV3IEJhc2ljTWF0ZXJpYWwoe1xuXHRcdFx0XHR1dk1hdHJpeDogbmV3IE1hdHJpeDMoKS5mcm9tU2NhbGluZyhcblx0XHRcdFx0XHRuZXcgVmVjdG9yMihQTEFORV9TSVpFIC8gREVGQVVMVF9QTEFORV9VTklUUywgUExBTkVfU0laRSAvIERFRkFVTFRfUExBTkVfVU5JVFMpXG5cdFx0XHRcdCksXG5cdFx0XHRcdGxpZ2h0VHlwZTogJ05PTkUnLFxuXHRcdFx0XHRzaWRlOiBjb25zdGFudHMuRlJPTlQsXG5cdFx0XHRcdGRpZmZ1c2U6IG5ldyBMYXp5VGV4dHVyZSh7XG5cdFx0XHRcdFx0ZmxpcFk6IHRydWUsXG5cdFx0XHRcdFx0c3JjOiAnL3Jlcy9hc3NldHMvZGV2L21ldHJpY19ncmlkLnBuZydcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fSk7XG5cdFx0Y29udGFpbmVyLmFkZENoaWxkKHBsYW5lKTtcblxuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChuZXcgQXhpc0hlbHBlcih7IHNpemU6IDEwIH0pKTtcblxuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdERldkhpbG9FbnZNYXA7XG4iLCIvKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKiBAYXV0aG9yIHR5bnJhcmVcbiAqIEB2ZXJzaW9uIDJcbiAqIEBtb2R1bGUgUm9vbXMvSGlsbzNkXG4gKi9cblxuaW1wb3J0IFJlc291cmNlc01hbmFnZXIgZnJvbSAnLi9yZXNvdXJjZXNfbWFuYWdlci5qcyc7XG5pbXBvcnQgQXBwUm9vdCBmcm9tICcuL2FwcF9yb290LmpzJztcblxuLy8gPT09XG4vLyBIaWxvM2RcbmltcG9ydCBIaWxvM2RFbmdpbmVUaGluZ3kgZnJvbSAnLi9lbmdpbmUvaGlsbzNkX2VuZ2luZS5qcyc7XG5pbXBvcnQgSGlsbzNkQ2FtZXJhTWFuYWdlciBmcm9tICcuL2VuZ2luZS9oaWxvM2RfY2FtZXJhLmpzJztcbmltcG9ydCBIaWxvTWVzaFRoaW5neSBmcm9tICcuL2VuZ2luZS9oaWxvX21lc2hfdGhpbmd5LmpzJztcbmltcG9ydCBIaWxvTGluZVJlbmRlciBmcm9tICcuL2VuZ2luZS9oaWxvX2xpbmVfcmVuZGVyLmpzJztcbmltcG9ydCBIaWxvTm9kZVdyYXBwZXIgZnJvbSAnLi9lbmdpbmUvaGlsb19ub2RlX3dyYXBwZXIuanMnO1xuaW1wb3J0IEhpbG9SYXljYXN0SGVscGVyIGZyb20gJy4vZW5naW5lL2hpbG9fcmF5Y2FzdF9oZWxwZXIuanMnO1xuXG5leHBvcnQge1xuXHQvLyA9PT1cblx0Ly8gSGlsbzNkXG5cdEhpbG8zZEVuZ2luZVRoaW5neSxcblx0SGlsbzNkQ2FtZXJhTWFuYWdlcixcblx0SGlsb01lc2hUaGluZ3ksXG5cdEhpbG9MaW5lUmVuZGVyLFxuXHRIaWxvTm9kZVdyYXBwZXIsXG5cdEhpbG9SYXljYXN0SGVscGVyLFxuXHQvLyA9PT1cblx0Ly8gT3RoZXJcblx0UmVzb3VyY2VzTWFuYWdlcixcblx0QXBwUm9vdFxufTtcbiIsIi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBSb29tcy9IaWxvM2RcbiAqL1xuXG5pbXBvcnQgQmFzaWNPcmJpdGFsQ2FtZXJhIGZyb20gJy4vYmFzaWNfb3JiaXRhbF9jYW1lcmEuanMnO1xuXG5leHBvcnQgeyBCYXNpY09yYml0YWxDYW1lcmEgfTtcbiIsIi8qKlxuICogQGZpbGUgcmVzb3VyY2VzX21hbmFnZXIuanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBFbmdpbmVcbiAqL1xuXG5pbXBvcnQgeyBUaGluZ3kgfSBmcm9tICdAY29yZS9leGNoYW5nZS9pbmRleC5qcyc7XG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBNZXNoIH0gZnJvbSAnaGlsbzNkJztcblxuY29uc3QgcmVzID0ge307XG5cbi8qKlxuICogSGFuZGxlcyBhc3NldHMgZmlsZXMgYW5kIGNhY2hlc1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogQHByb3BlcnR5IHtvYmplY3R9IGxvY2F0aW9ucyBmaWxlcyBwYXRoc1xuICovXG5jbGFzcyBSZXNvdXJjZXNNYW5hZ2VyIGV4dGVuZHMgVGhpbmd5IHtcblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Z2V0RGVmYXVsdFByb3BlcnRpZXMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvY2F0aW9uczogcmVzLFxuXHRcdFx0Z2x0ZkxvYWRlcjogbmV3IEdMVEZMb2FkZXIoKVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqIEBwYXJhbSB7UmVzb3VyY2VzTWFuYWdlcn0gcmVzb3VyY2VzIG90aGVyIG1hbmFnZXJcblx0ICogQHJldHVybnMge1Jlc291cmNlc01hbmFnZXJ9IHRoaXNcblx0ICovXG5cdGNvcHkocmVzb3VyY2VzKSB7XG5cdFx0dGhpcy5jYWNoZSA9IHJlc291cmNlcy5jYWNoZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGwgaXQgYmVmb3JlIGFueSBhY3Rpb25zXG5cdCAqXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbbG9jYXRpb25zPXRoaXMucHJvcGVydGllcy5sb2NhdGlvbnNdIC5cblx0ICogQHBhcmFtIHtvYmplY3R9IGxvY2F0aW9ucy5tZXNoZXMgcGF0aHMgdG8gbWVzaGVzXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBsb2FkaW5nIHByb21pc2Vcblx0ICovXG5cdHByZWxvYWQobG9jYXRpb25zID0gdGhpcy5wcm9wZXJ0aWVzLmxvY2F0aW9ucykge1xuXHRcdHRoaXMucHJvcGVydGllcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XG5cblx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkTWVzaGVzKHRoaXMucHJvcGVydGllcy5sb2NhdGlvbnMubWVzaGVzKTtcblx0fVxuXG5cdC8vPT09PSBNZXRob2RzXG5cblx0LyoqXG5cdCAqIFNhbWUgYXMgZ2V0TWFzaCBidXQgY3JlYXRlcyBjbG9uZVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBjYWNoZWQgbWVzaCBuYW1lXG5cdCAqIEByZXR1cm5zIHtNZXNofSBjbG9uZSBvZiBjYWNoZWQgbWVzaFxuXHQgKi9cblx0Z2V0TWVzaENsb25lKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNoKG5hbWUpLmNsb25lKGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kcyBwcmV2aW91c2x5IHByZWxvYWRlZCBtb2RlbC9zY2VuZSBhbmQgY3JldGVzIGNsb25lXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIEFzc2V0TWFuYWdlci5pbnN0YW5jZVxuXHQgKiAgICAgICAgICAgICAgLnByZWxvYWRNZXNoKCdteV9tZXNoJywgJy9wYXRoL3RvL215L21lc2gnKVxuXHQgKiAgICAgICAgICAgICAgLnRoZW4oKCk9Pntcblx0ICogICAgICAgICAgICAgICAgQXNzZXRNYW5hZ2VyLmluc3RhbmNlLmdldE1lc2hDbG9uZSgnbXlfbWVzaCcpO1xuXHQgKiAgICAgICAgICAgICAgIH0pO1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBjYWNoZWQgbWVzaCBuYW1lXG5cdCAqIEByZXR1cm5zIHtNZXNofSBjbG9uZSBvZiBjYWNoZWQgbWVzaFxuXHQgKi9cblx0Z2V0TWVzaChuYW1lKSB7XG5cdFx0Y29uc3QgbWVzaGVzID0gdGhpcy5jYWNoZS5tZXNoZXM7XG5cdFx0Y2duLmFzc2VydC5vayhcblx0XHRcdG1lc2hlcyAmJiBtZXNoZXNbbmFtZV0sXG5cdFx0XHRgTm8gbW9kZWwgJHtuYW1lfSBmb3VuZCBpbiBjYWNoZS4gWW91IGhhdmUgdG8gcHJlbG9hZE1vZGVsKG5hbWUsIHNyYylgXG5cdFx0KTtcblxuXHRcdHJldHVybiBtZXNoZXNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUHJlbG9hZHMgYW5kIHNhdmVzIG1vZGVscyBpbiBtZW1vcnkuXG5cdCAqIFlvdSBjYW4gYWNjZXNzIHRoZW0gYnlcblx0ICpcblx0ICogQGFzeW5jXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgeW91IGNhbiBhY2Nlc3MgbW9kZWwgYWZ0ZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhdGggZmlsZSBwYXRoXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBsb2FkaW5nIHByb21pc2Vcblx0ICovXG5cdHByZWxvYWRNZXNoKG5hbWUsIHBhdGgpIHtcblx0XHR0aGlzLmNhY2hlLkdMVEZzID0gdGhpcy5jYWNoZS5HTFRGcyB8fCB7fTtcblx0XHR0aGlzLmNhY2hlLm1lc2hlcyA9IHRoaXMuY2FjaGUubWVzaGVzIHx8IHt9O1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZ2V0KCdnbHRmTG9hZGVyJylcblx0XHRcdFx0LmxvYWQoe1xuXHRcdFx0XHRcdHNyYzogcGF0aFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigobW9kZWwpID0+IHtcblx0XHRcdFx0XHRjZ24ubG9nLmdyb3VwKCdHQU1FX1JFU19PUEVSQVRJT04nLCBgTm9kZSBmcm9tICR7cGF0aH0gcHJlbG9hZGVkIGFzICcke25hbWV9JyBzY2VuZWApO1xuXHRcdFx0XHRcdHRoaXMuY2FjaGUuR0xURnNbbmFtZV0gPSBtb2RlbDtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgaSBpbiBtb2RlbC5tZXNoZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1lc2ggPSBtb2RlbC5tZXNoZXNbaV07XG5cdFx0XHRcdFx0XHRjb25zdCBtZXNobmFtZSA9IG1lc2gucGFyZW50Lm5hbWU7XG5cdFx0XHRcdFx0XHRjZ24ubG9nLmdyb3VwKFxuXHRcdFx0XHRcdFx0XHQnR0FNRV9SRVNfT1BFUkFUSU9OJyxcblx0XHRcdFx0XHRcdFx0YE1lc2ggZnJvbSBzY2VuZSAnJHtuYW1lfScgcHJlbG9hZGVkIGFzICcke21lc2huYW1lfScgbWVzaGBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNhY2hlLm1lc2hlc1ttZXNobmFtZV0gPSBtZXNoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgocmVhc29uKSA9PiB7XG5cdFx0XHRcdFx0cmVqZWN0KHJlYXNvbik7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBtZXNoZXMgbGlzdCBvZiAuZ2x0ZiBmaWxlcyB0byBwcmVsb2FkLiBLZXlzIHdpbGwgYmUgdXNlZCBhcyBuYW1lcy4gUGF0aCBmaWVsZCBhcyBzcmNcblx0ICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IGxvYWRpbmcgcHJvbWlzZVxuXHQgKi9cblx0cHJlbG9hZE1lc2hlcyhtZXNoZXMpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgayBpbiBtZXNoZXMpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaCh0aGlzLnByZWxvYWRNZXNoKGssIG1lc2hlc1trXSkpO1xuXHRcdFx0fVxuXHRcdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHRcdC50aGVuKCgpID0+IHJlc29sdmUoKSlcblx0XHRcdFx0LmNhdGNoKChyZWFzb24pID0+IHtcblx0XHRcdFx0XHRyZWplY3QocmVhc29uKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzTWFuYWdlcjtcbiIsIi8qKlxuICogQGZpbGUgcm9vbS5qc1xuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIFJvb21zL0hpbG8zZFxuICovXG5cbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcbmltcG9ydCB7IEhpbG9NZXNoVGhpbmd5LCBBcHBSb290IH0gZnJvbSAnQHJvb21zL2hpbG8zZC9pbmRleC5qcyc7XG5pbXBvcnQgRGVmYXVsdERldkhpbG9FbnZNYXAgZnJvbSAnQHJvb21zL2hpbG8zZC9lbnZpcm9ubWVudC9kZXZfZGVmYXVsdF9lbnYuanMnO1xuXG4vKipcbiAqIFNpbXBsZSB0ZXN0IGZvciBtb2R1bGFyIHdpbmRvd3NcbiAqL1xuY2xhc3MgSGlsbzNkUm9vbSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiAuXG5cdCAqL1xuXHRpbml0Q2FsbGJhY2soKSB7XG5cdFx0dGhpcy5hcHAgPSBuZXcgQXBwUm9vdCgpO1xuXHRcdHRoaXMuYXBwLmluaXQoKTtcblx0XHR0aGlzLmFwcC5nZXQoJ2dhbWUnKS50b3VjaCgnZW52JywgKCkgPT4gbmV3IERlZmF1bHREZXZIaWxvRW52TWFwKCkpO1xuXHRcdC8vYXBwLmdldCgnZ2FtZScpLnNldCgnbWFwJywgbmV3IEhpbG9NZXNoVGhpbmd5KHsgbmFtZTogJ2N1YmUnIH0pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAuXG5cdCAqL1xuXHRkaXNwb3NlQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5hcHAuZGlzcG9zZSgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpbG8zZFJvb207XG4iLCIvKipcbiAqIEBmaWxlIGRvbV9lbGVtZW50X3RoaW5neS5qc1xuICpcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gM1xuICogQG1vZHVsZSBSb29tcy9IVE1MXG4gKi9cblxuaW1wb3J0IHsgVGhpbmd5IH0gZnJvbSAnQGNvcmUvZXhjaGFuZ2UvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaW5neSB0byBjb250cm9sIGh0bWwgZWxlbWVudCBsaWZlY3ljbGVcbiAqIElkJ3MgYW5kIFRoaW5naWVzIHRyZWUgcmVmbGVjdHMgZG9tIHRyZWVcbiAqXG4gKiBwcm9wZXJ0aWVzXG4gKlxuICogQGNsYXNzXG4gKiBAcHJvcGVydHkge3N0cmluZz99IFtpZF0gZG9tIGVsZW1lbnQgaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xhc3M9J2RpdiddIGRvbSBlbGVtZW50IGNsYXNzXG4gKiBAcHJvcGVydHkge3N0cmluZz99IFtwYXJlbnRJZF0gcGFyZW50IGRvbSBlbGVtZW50IGlkXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IFtfZGl2XSBkb20gZWxlbWVudCByZWZcbiAqL1xuY2xhc3MgRG9tRWxlbWVudFRoaW5neSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGdldERlZmF1bHRQcm9wZXJ0aWVzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJlbnRJZDogJ2VoaGgtYXBwLWNvbnRlbnQtcm9vdCdcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgcGFnZSBkb20uIGRpdiBieSBkZWZhdWx0XG5cdCAqL1xuXHRwcmVpbml0Q2FsbGJhY2soKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRvdWNoKCdjbGFzcycsICgpID0+ICdkaXYnKSk7XG5cdFx0aWYgKHRoaXMuZ2V0KCdpZCcpKSB7XG5cdFx0XHRjb250YWluZXIuaWQgPSB0aGlzLmdldCgnaWQnKTtcblx0XHR9XG5cdFx0dGhpcy5zZXQoJ2RpdicsIGNvbnRhaW5lcik7XG5cdFx0Y29uc3QgcGFyZW50SWQgPSB0aGlzLmdldCgncGFyZW50SWQnKSA/PyB0aGlzLm93bmVyPy5nZXQoJ2lkJyk7XG5cdFx0aWYgKHBhcmVudElkKSB7XG5cdFx0XHR0aGlzLnNldCgncGFyZW50SWQnLCBwYXJlbnRJZCk7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhbnVwcyBkYXRhXG5cdCAqL1xuXHRkaXNwb3NlQ2FsbGJhY2soKSB7XG5cdFx0Y29uc3QgZGl2ID0gdGhpcy5nZXQoJ2RpdicpO1xuXHRcdGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9tRWxlbWVudFRoaW5neTtcbiIsIi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgdHlucmFyZVxuICogQHZlcnNpb24gMVxuICogQG1vZHVsZSBSb29tcy9IVE1MXG4gKi9cblxuaW1wb3J0IERvbUVsZW1lbnRUaGluZ3kgZnJvbSAnLi9kb21fZWxlbWVudF90aGluZ3kuanMnO1xuXG5leHBvcnQgeyBEb21FbGVtZW50VGhpbmd5IH07XG4iLCIvKipcbiAqIEBmaWxlIGluZGV4LmpzXG4gKlxuICogQGF1dGhvciB0eW5yYXJlXG4gKiBAdmVyc2lvbiAyXG4gKiBAbW9kdWxlIFJvb21zXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlLCBjYW1lbGNhc2UsIG1heC1sZW4sIG1heC1zdGF0ZW1lbnRzICovXG5cbi8vICNkcmFmdCBzY29wZVxuaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vQ09NTUFORFMubWQnO1xuaW1wb3J0IGNnbiBmcm9tICdAY29yZS9jb3JlX25hbWVzcGFjZS5qcyc7XG5cbmltcG9ydCB7IFRoaW5neSB9IGZyb20gJ0Bjb3JlL2V4Y2hhbmdlL2luZGV4LmpzJztcblxuY29uc3QgY2FzZXMgPSB7XG5cdEhpbG8zZDogcmVxdWlyZSgnLi9oaWxvM2Qvcm9vbS5qcycpLFxuXHRFaGhoQm9hcmQ6IHJlcXVpcmUoJy4vZWhoaC1ib2FyZC9yb29tLmpzJyksXG5cdC8vTW9kdWxhcldpbmRvd1Rlc3Q6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9tb2R1bGFyX3dpbmRvdy5tdGVzdC5qcycpLFxuXHQvL0FwcFRoaW5neU1pbmltYWxUZXN0OiByZXF1aXJlKCdAdGVzdC9tYW51YWwvYXBwX3RoaW5neV9taW5pbWFsLm10ZXN0LmpzJyksXG5cdC8vSGlsb0xpbmVEcmF3VGVzdDogcmVxdWlyZSgnQHRlc3QvbWFudWFsL2hpbG9fbGluZV9kcmF3Lm10ZXN0LmpzJyksXG5cdC8vTWF0aDNkVGVzdDogcmVxdWlyZSgnLi9tYXRoL21hdGgzZC5qcycpLFxuXHQvL0hpbG9Ob3JtYWxzTWVzaERlYnVnVGVzdDogcmVxdWlyZSgnQHRlc3QvbWFudWFsL2hpbG9fbm9ybWFsc19kZWJ1Z19kcmF3Lm10ZXN0LmpzJyksXG5cdC8vSGlsb1JheU5vcm1hbFRlc3Q6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9oaWxvX3JheV9ub3JtYWwubXRlc3QuanMnKSxcblx0Ly9NZXNoR3JhcGhHZW9tZW50cnlUZXN0OiByZXF1aXJlKCdAdGVzdC9tYW51YWwvbWVzaF9ncmFwaF9nZW9tZW50cnkubXRlc3QuanMnKSxcblx0Ly9NZXNoR3JhcGhNYXRoQ2FzZTE6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9tZXNoX2dyYXBoX21hdGhfY2FzZV8xLm10ZXN0LmpzJyksXG5cdC8vTWVzaEdyYXBoTWF0aENhc2UyOiByZXF1aXJlKCdAdGVzdC9tYW51YWwvbWVzaF9ncmFwaF9tYXRoX2Nhc2VfMi5tdGVzdC5qcycpLFxuXHQvL01lc2hHcmFwaE1hdGhDYXNlMzogcmVxdWlyZSgnQHRlc3QvbWFudWFsL21lc2hfZ3JhcGhfbWF0aF9jYXNlXzMubXRlc3QuanMnKSxcblx0Ly9NZXNoR3JhcGhNYXRoQ2FzZTQ6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9tZXNoX2dyYXBoX21hdGhfY2FzZV80Lm10ZXN0LmpzJyksXG5cdC8vTWVzaEdyYXBoTWF0aFNhbmRib3g6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9tZXNoX2dyYXBoX21hdGhfY2FzZV94Lm10ZXN0LmpzJyksXG5cdC8vUGFwZXJpb1BvaW50c0Nhc2UxOiByZXF1aXJlKCdAdGVzdC9tYW51YWwvcGFwZXJpb19wb2ludHNfY2FzZV8xLm10ZXN0LmpzJyksXG5cdC8vUGFwZXJpb1BvaW50c0Nhc2UyOiByZXF1aXJlKCdAdGVzdC9tYW51YWwvcGFwZXJpb19wb2ludHNfY2FzZV8yLm10ZXN0LmpzJyksXG5cdC8vUGFwZXJpb1BvaW50c0Nhc2UzOiByZXF1aXJlKCdAdGVzdC9tYW51YWwvcGFwZXJpb19wb2ludHNfY2FzZV8zLm10ZXN0LmpzJyksXG5cdC8vSGlsb01pbmltYWxTaGFkZXJUZXN0OiByZXF1aXJlKCdAdGVzdC9tYW51YWwvaGlsb19taW5pbWFsX3NoYWRlci5tdGVzdC5qcycpLFxuXHQvL1BhcGVyaW9EcmF3Q2FzZTE6IHJlcXVpcmUoJ0B0ZXN0L21hbnVhbC9wYXBlcmlvX2RyYXdfY2FzZV8xLm10ZXN0LmpzJyksXG5cdC8vUGFwZXJpb0dhbWVDYXNlMTogcmVxdWlyZSgnQHRlc3QvbWFudWFsL3BhcGVyaW9fZ2FtZV9jYXNlXzEubXRlc3QuanMnKVxufTtcblxuLyoqXG4gKiBDbGFzcyB0byBydW4gbWFudWFsIHRlc3RzXG4gKi9cbmNsYXNzIFJvb21zU3Vicm91dGluZSBleHRlbmRzIFRoaW5neSB7XG5cdC8qKlxuXHQgKiAuXG5cdCAqL1xuXHRpbml0Q2FsbGJhY2soKSB7XG5cdFx0dGhpcy5saXN0ZW5IYXNoKCk7XG5cdFx0d2luZG93Lm9uaGFzaGNoYW5nZSA9IHRoaXMubGlzdGVuSGFzaC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqICNkcmFmdFxuXHQgKi9cblx0bGlzdGVuSGFzaCgpIHtcblx0XHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXHRcdGNvbnN0IGggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7XG5cblx0XHR0aGlzLmRlbCgnYWN0aXZlJyk7XG5cblx0XHRpZiAoaC5sZW5ndGggPiAwKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWhoaC1hcHAtY29udGVudC1yb290JykuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGNvbnN0IENhc2UgPSBjYXNlc1toXS5kZWZhdWx0O1xuXG5cdFx0XHR0aGlzLnNldCgnYWN0aXZlJywgbmV3IENhc2UoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlaGhoLWFwcC1jb250ZW50LXJvb3QnKS5pbm5lckhUTUwgPSBjb21tYW5kcztcblx0XHR9XG5cdH1cbn1cblxud2luZG93LmNnbiA9IGNnbjtcblxuY29uc3QgaW5zdGFuY2UgPSBuZXcgUm9vbXNTdWJyb3V0aW5lKCk7XG5pbnN0YW5jZS5pbml0KCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIGNvbXBhcmUgYW5kIGlzQnVmZmVyIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKGIpO1xuICB9XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufVxuXG4vLyBiYXNlZCBvbiBub2RlIGFzc2VydCwgb3JpZ2luYWwgbm90aWNlOlxuLy8gTkI6IFRoZSBVUkwgdG8gdGhlIENvbW1vbkpTIHNwZWMgaXMga2VwdCBqdXN0IGZvciB0cmFkaXRpb24uXG4vLyAgICAgbm9kZS1hc3NlcnQgaGFzIGV2b2x2ZWQgYSBsb3Qgc2luY2UgdGhlbiwgYm90aCBpbiBBUEkgYW5kIGJlaGF2aW9yLlxuXG4vLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb28oKSB7fS5uYW1lID09PSAnZm9vJztcbn0oKSk7XG5mdW5jdGlvbiBwVG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc1ZpZXcoYXJyYnVmKSB7XG4gIGlmIChpc0J1ZmZlcihhcnJidWYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsLkFycmF5QnVmZmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhhcnJidWYpO1xuICB9XG4gIGlmICghYXJyYnVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJidWYgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJidWYuYnVmZmVyICYmIGFycmJ1Zi5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIDEuIFRoZSBhc3NlcnQgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IHRocm93XG4vLyBBc3NlcnRpb25FcnJvcidzIHdoZW4gcGFydGljdWxhciBjb25kaXRpb25zIGFyZSBub3QgbWV0LiBUaGVcbi8vIGFzc2VydCBtb2R1bGUgbXVzdCBjb25mb3JtIHRvIHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlLlxuXG52YXIgYXNzZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSBvaztcblxuLy8gMi4gVGhlIEFzc2VydGlvbkVycm9yIGlzIGRlZmluZWQgaW4gYXNzZXJ0LlxuLy8gbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6IG1lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pXG5cbnZhciByZWdleCA9IC9cXHMqZnVuY3Rpb25cXHMrKFteXFwoXFxzXSopXFxzKi87XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2Jsb2IvYWRlZWVlYzhiZmNjNjA2OGIxODdkN2Q5ZmIzZDViYjFkM2EzMDg5OS9pbXBsZW1lbnRhdGlvbi5qc1xuZnVuY3Rpb24gZ2V0TmFtZShmdW5jKSB7XG4gIGlmICghdXRpbC5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lO1xuICB9XG4gIHZhciBzdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cbmFzc2VydC5Bc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgdGhpcy5hY3R1YWwgPSBvcHRpb25zLmFjdHVhbDtcbiAgdGhpcy5leHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gIHRoaXMub3BlcmF0b3IgPSBvcHRpb25zLm9wZXJhdG9yO1xuICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE1lc3NhZ2UodGhpcyk7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuICB2YXIgc3RhY2tTdGFydEZ1bmN0aW9uID0gb3B0aW9ucy5zdGFja1N0YXJ0RnVuY3Rpb24gfHwgZmFpbDtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBnZXROYW1lKHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShzLCBuKSB7XG4gIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc3BlY3Qoc29tZXRoaW5nKSB7XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgfHwgIXV0aWwuaXNGdW5jdGlvbihzb21ldGhpbmcpKSB7XG4gICAgcmV0dXJuIHV0aWwuaW5zcGVjdChzb21ldGhpbmcpO1xuICB9XG4gIHZhciByYXduYW1lID0gZ2V0TmFtZShzb21ldGhpbmcpO1xuICB2YXIgbmFtZSA9IHJhd25hbWUgPyAnOiAnICsgcmF3bmFtZSA6ICcnO1xuICByZXR1cm4gJ1tGdW5jdGlvbicgKyAgbmFtZSArICddJztcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2Uoc2VsZikge1xuICByZXR1cm4gdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmFjdHVhbCksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuZXhwZWN0ZWQpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwRXF1YWwnLCBhc3NlcnQuZGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGRlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBTdHJpY3RFcXVhbCcsIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAmJiBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gY29tcGFyZShhY3R1YWwsIGV4cGVjdGVkKSA9PT0gMDtcblxuICAvLyA3LjIuIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIERhdGUgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIERhdGUgb2JqZWN0IHRoYXQgcmVmZXJzIHRvIHRoZSBzYW1lIHRpbWUuXG4gIH0gZWxzZSBpZiAodXRpbC5pc0RhdGUoYWN0dWFsKSAmJiB1dGlsLmlzRGF0ZShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMyBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIFJlZ0V4cCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzb3VyY2UgYW5kXG4gIC8vIHByb3BlcnRpZXMgKGBnbG9iYWxgLCBgbXVsdGlsaW5lYCwgYGxhc3RJbmRleGAsIGBpZ25vcmVDYXNlYCkuXG4gIH0gZWxzZSBpZiAodXRpbC5pc1JlZ0V4cChhY3R1YWwpICYmIHV0aWwuaXNSZWdFeHAoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5zb3VyY2UgPT09IGV4cGVjdGVkLnNvdXJjZSAmJlxuICAgICAgICAgICBhY3R1YWwuZ2xvYmFsID09PSBleHBlY3RlZC5nbG9iYWwgJiZcbiAgICAgICAgICAgYWN0dWFsLm11bHRpbGluZSA9PT0gZXhwZWN0ZWQubXVsdGlsaW5lICYmXG4gICAgICAgICAgIGFjdHVhbC5sYXN0SW5kZXggPT09IGV4cGVjdGVkLmxhc3RJbmRleCAmJlxuICAgICAgICAgICBhY3R1YWwuaWdub3JlQ2FzZSA9PT0gZXhwZWN0ZWQuaWdub3JlQ2FzZTtcblxuICAvLyA3LjQuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoKGFjdHVhbCA9PT0gbnVsbCB8fCB0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JykgJiZcbiAgICAgICAgICAgICAoZXhwZWN0ZWQgPT09IG51bGwgfHwgdHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIHR5cGVkIGFycmF5cywgd3JhcCB0aGVpciB1bmRlcmx5aW5nXG4gIC8vIEFycmF5QnVmZmVycyBpbiBhIEJ1ZmZlciBlYWNoIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gIC8vIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoZSBhcnJheXMgdG8gaGF2ZSB0aGUgc2FtZSB0eXBlIGFzIGNoZWNrZWQgYnlcbiAgLy8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAoYWthIHBUb1N0cmluZykuIE5ldmVyIHBlcmZvcm0gYmluYXJ5XG4gIC8vIGNvbXBhcmlzb25zIGZvciBGbG9hdCpBcnJheXMsIHRob3VnaCwgc2luY2UgZS5nLiArMCA9PT0gLTAgYnV0IHRoZWlyXG4gIC8vIGJpdCBwYXR0ZXJucyBhcmUgbm90IGlkZW50aWNhbC5cbiAgfSBlbHNlIGlmIChpc1ZpZXcoYWN0dWFsKSAmJiBpc1ZpZXcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgcFRvU3RyaW5nKGFjdHVhbCkgPT09IHBUb1N0cmluZyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICAhKGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxuICAgICAgICAgICAgICAgYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSkge1xuICAgIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGFjdHVhbC5idWZmZXIpLFxuICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGV4cGVjdGVkLmJ1ZmZlcikpID09PSAwO1xuXG4gIC8vIDcuNSBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAhPT0gaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1lbW9zID0gbWVtb3MgfHwge2FjdHVhbDogW10sIGV4cGVjdGVkOiBbXX07XG5cbiAgICB2YXIgYWN0dWFsSW5kZXggPSBtZW1vcy5hY3R1YWwuaW5kZXhPZihhY3R1YWwpO1xuICAgIGlmIChhY3R1YWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhY3R1YWxJbmRleCA9PT0gbWVtb3MuZXhwZWN0ZWQuaW5kZXhPZihleHBlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MuYWN0dWFsLnB1c2goYWN0dWFsKTtcbiAgICBtZW1vcy5leHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcblxuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSB7XG4gIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKVxuICAgIHJldHVybiBhID09PSBiO1xuICBpZiAoc3RyaWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKTtcbiAgdmFyIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYiwgc3RyaWN0KTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB2YXIga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9PSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIV9kZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWwgPSBub3REZWVwU3RyaWN0RXF1YWw7XG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBTdHJpY3RFcXVhbCcsIG5vdERlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn1cblxuXG4vLyA5LiBUaGUgc3RyaWN0IGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzdHJpY3QgZXF1YWxpdHksIGFzIGRldGVybWluZWQgYnkgPT09LlxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09PScsIGFzc2VydC5zdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDEwLiBUaGUgc3RyaWN0IG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHN0cmljdCBpbmVxdWFsaXR5LCBhc1xuLy8gZGV0ZXJtaW5lZCBieSAhPT0uICBhc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT09JywgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkge1xuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cGVjdGVkKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlLiAgVGhlIGluc3RhbmNlb2YgY2hlY2sgZG9lc24ndCB3b3JrIGZvciBhcnJvdyBmdW5jdGlvbnMuXG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX3RyeUJsb2NrKGJsb2NrKSB7XG4gIHZhciBlcnJvcjtcbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHR5cGVvZiBibG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYmxvY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIGFjdHVhbCA9IF90cnlCbG9jayhibG9jayk7XG5cbiAgbWVzc2FnZSA9IChleHBlY3RlZCAmJiBleHBlY3RlZC5uYW1lID8gJyAoJyArIGV4cGVjdGVkLm5hbWUgKyAnKS4nIDogJy4nKSArXG4gICAgICAgICAgICAobWVzc2FnZSA/ICcgJyArIG1lc3NhZ2UgOiAnLicpO1xuXG4gIGlmIChzaG91bGRUaHJvdyAmJiAhYWN0dWFsKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnTWlzc2luZyBleHBlY3RlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICB2YXIgdXNlclByb3ZpZGVkTWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJztcbiAgdmFyIGlzVW53YW50ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgdXRpbC5pc0Vycm9yKGFjdHVhbCk7XG4gIHZhciBpc1VuZXhwZWN0ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmICFleHBlY3RlZDtcblxuICBpZiAoKGlzVW53YW50ZWRFeGNlcHRpb24gJiZcbiAgICAgIHVzZXJQcm92aWRlZE1lc3NhZ2UgJiZcbiAgICAgIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fFxuICAgICAgaXNVbmV4cGVjdGVkRXhjZXB0aW9uKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnR290IHVud2FudGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICgoc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmIGV4cGVjdGVkICYmXG4gICAgICAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8ICghc2hvdWxkVGhyb3cgJiYgYWN0dWFsKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG4vLyAxMS4gRXhwZWN0ZWQgdG8gdGhyb3cgYW4gZXJyb3I6XG4vLyBhc3NlcnQudGhyb3dzKGJsb2NrLCBFcnJvcl9vcHQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKHRydWUsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyhmYWxzZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHRocm93IGVycjsgfTtcblxuLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcbmZ1bmN0aW9uIHN0cmljdCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBzdHJpY3QpO1xufVxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGlmIChlcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIHZhciBlcnJvckxpc3RlbmVyO1xuXG4gICAgLy8gQWRkaW5nIGFuIGVycm9yIGxpc3RlbmVyIGlzIG5vdCBvcHRpb25hbCBiZWNhdXNlXG4gICAgLy8gaWYgYW4gZXJyb3IgaXMgdGhyb3duIG9uIGFuIGV2ZW50IGVtaXR0ZXIgd2UgY2Fubm90XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGFjdHVhbCBldmVudCB3ZSBhcmUgd2FpdGluZyB3aWxsXG4gICAgLy8gYmUgZmlyZWQuIFRoZSByZXN1bHQgY291bGQgYmUgYSBzaWxlbnQgd2F5IHRvIGNyZWF0ZVxuICAgIC8vIG1lbW9yeSBvciBmaWxlIGRlc2NyaXB0b3IgbGVha3MsIHdoaWNoIGlzIHNvbWV0aGluZ1xuICAgIC8vIHdlIHNob3VsZCBhdm9pZC5cbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgZW1pdHRlci5vbmNlKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIub25jZShuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9