/*!
{
  "copyrite": "Copyright (c) 2018-present",
  "date": "2019-03-03T18:13:59.393Z",
  "describe": "",
  "description": "A collection of modern utils.",
  "file": "caboodle-x.js",
  "hash": "eb58a063632c44f11e5b",
  "license": "MIT",
  "version": "2.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Caboodle"] = factory();
	else
		root["Caboodle"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.6.0";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.TRACE = defineLogLevel(1, 'TRACE');
	Logger.DEBUG = defineLogLevel(2, 'DEBUG');
	Logger.INFO = defineLogLevel(3, 'INFO');
	Logger.TIME = defineLogLevel(4, 'TIME');
	Logger.WARN = defineLogLevel(5, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},
		
		// Gets the current logging level for the logging instance
		getLevel: function () {
			return this.context.filterLevel;
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		trace: function () {
			this.invoke(Logger.TRACE, arguments);
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.trace = bind(globalLogger, globalLogger.trace);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Gets the global logging filter level
	Logger.getLevel = function() {
		return globalLogger.getLevel();
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
	// write to the window's console object (if present); the optional options object can be used to customise the
	// formatter used to format each log message.
	Logger.createDefaultHandler = function (options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return function () { /* no console */ };
		}

		return function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				} else if (context.level === Logger.DEBUG && console.debug) {
					hdlr = console.debug;
				} else if (context.level === Logger.TRACE && console.trace) {
					hdlr = console.trace;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		};
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(Logger.createDefaultHandler(options));
	};

	// Export to popular environments boilerplate.
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
}(this));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _methodize;

var _bind2 = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_methodize");

var call = Function.call;

function _methodize(prototypeMethod) {
  return (0, _bind2.default)(call, prototypeMethod);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertIs2 = _interopRequireDefault(__webpack_require__(36));

var _negate2 = _interopRequireDefault(__webpack_require__(55));

var _isNil = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 * @example
 * var RequireObjectCoercible = require('caboodle-x/requireObjectCoercible');
 *
 * RequireObjectCoercible(); // TypeError
 * RequireObjectCoercible(null); // TypeError
 * RequireObjectCoercible('abc'); // 'abc'
 * RequireObjectCoercible(true); // true
 * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
 */
var _default = (0, _assertIs2.default)((0, _negate2.default)(_isNil.default), 'Cannot call method on null or undefined');

exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toString;

var _isSymbol = _interopRequireDefault(__webpack_require__(48));

var _String2 = _interopRequireDefault(__webpack_require__(74));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toString");

function _toString(value) {
  if ((0, _isSymbol.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return (0, _String2.default)(value);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertIs2 = _interopRequireDefault(__webpack_require__(36));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_assertIsFunction");

var _default = (0, _assertIs2.default)(_isFunction2.default, 'Not a function');

exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toInteger;

var _isNaN2 = _interopRequireDefault(__webpack_require__(22));

var _isFinite2 = _interopRequireDefault(__webpack_require__(32));

var _toNumber2 = _interopRequireDefault(__webpack_require__(23));

var _sign2 = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toInteger");

var abs = Math.abs,
    floor = Math.floor;

function _toInteger(value) {
  var number = (0, _toNumber2.default)(value);

  if ((0, _isNaN2.default)(number)) {
    return 0;
  }

  if (number === 0 || !(0, _isFinite2.default)(number)) {
    return number;
  }

  return (0, _sign2.default)(number) * floor(abs(number));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNil;

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

var _isNull = _interopRequireDefault(__webpack_require__(37));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isNil(value) {
  return (0, _isUndefined.default)(value) || (0, _isNull.default)(value);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

var _functionToString2 = _interopRequireDefault(__webpack_require__(75));

var _test2 = _interopRequireDefault(__webpack_require__(18));

var _attempt = _interopRequireDefault(__webpack_require__(49));

var _Boolean2 = _interopRequireDefault(__webpack_require__(29));

var _toStringTag = _interopRequireDefault(__webpack_require__(38));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(50));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(53));

var _replaceComments = _interopRequireDefault(__webpack_require__(59));

var _isClassSupported = _interopRequireDefault(__webpack_require__(83));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_isFunction");

var FUNC_TAG = '[object Function]';
var GEN_TAG = '[object GeneratorFunction]';
var ASYNC_TAG = '[object AsyncFunction]';
var ctrRx = /^class /;

var testClassString = function _testClassString(value) {
  return (0, _test2.default)(ctrRx, (0, _normalizeSpace.default)((0, _replaceComments.default)((0, _functionToString2.default)(value), ' ')));
};

var isES6ClassFn = function _isES6ClassFn(value) {
  var result = (0, _attempt.default)(testClassString, value);
  return !result.threw && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to _sift ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function _tryFuncToString(value, allowClass) {
  if (_isClassSupported.default && !allowClass && isES6ClassFn(value)) {
    return false;
  }

  return !(0, _attempt.default)(_functionToString2.default, value).threw;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to _sift ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value) {
  if ((0, _isPrimitive.default)(value)) {
    return false;
  }

  if (_isToStringTagSupported.default) {
    return tryFuncToString(value, (0, _Boolean2.default)(arguments.length <= 1 ? undefined : arguments[1]));
  }

  if (_isClassSupported.default && !(arguments.length <= 1 ? undefined : arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = (0, _toStringTag.default)(value);
  return strTag === FUNC_TAG || strTag === GEN_TAG || strTag === ASYNC_TAG;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toWholeNumber;

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _MAX_SAFE_INTEGER = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function toWholeNumber(value) {
  var integer = (0, _toInteger2.default)(value); // includes converting -0 to +0

  if (integer <= 0) {
    return 0;
  }

  return integer > _MAX_SAFE_INTEGER.default ? _MAX_SAFE_INTEGER.default : integer;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_stringSlice");

var _default = (0, _methodize2.default)(String.prototype.slice);

exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _stringTest;

var _isRegex = _interopRequireDefault(__webpack_require__(41));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(62));

var _test2 = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_stringTest");

function _stringTest(string, searchValue) {
  return (0, _isRegex.default)(searchValue) ? (0, _test2.default)(searchValue, string) : (0, _stringIndexOf2.default)(string, searchValue) !== -1;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_call");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _call
 */
var _default = Function.call.bind(Function.call);

exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_apply");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _apply
 */
var _default = Function.call.bind(Function.apply);

exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_replace");

var _default = (0, _methodize2.default)(String.prototype.replace);

exports.default = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toObject;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _Object2 = _interopRequireDefault(__webpack_require__(56));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function toObject(value) {
  return (0, _Object2.default)((0, _requireObjectCoercible.default)(value));
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLike;

var _isNull = _interopRequireDefault(__webpack_require__(37));

var _isObjectType = _interopRequireDefault(__webpack_require__(52));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isObjectLike(value) {
  return !(0, _isNull.default)(value) && (0, _isObjectType.default)(value);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUndefined;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUndefined
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_test");

var _default = (0, _methodize2.default)(RegExp.prototype.test);

exports.default = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrimitive;

var _isFunctionType = _interopRequireDefault(__webpack_require__(51));

var _isNull = _interopRequireDefault(__webpack_require__(37));

var _isObjectType = _interopRequireDefault(__webpack_require__(52));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isPrimitive(value) {
  return (0, _isNull.default)(value) || !(0, _isFunctionType.default)(value) && !(0, _isObjectType.default)(value);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_slice");

var _default = (0, _methodize2.default)(Array.prototype.slice);

exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireCoercibleToString;

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function requireCoercibleToString(value) {
  return (0, _toString2.default)((0, _requireObjectCoercible.default)(value));
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNaN;

var logger = __webpack_require__(0).get("caboodle-x:_isNaN");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isNaN
 */
function _isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toNumber;

var _Number2 = _interopRequireDefault(__webpack_require__(60));

var _toPrimitive = _interopRequireDefault(__webpack_require__(61));

var _trim2 = _interopRequireDefault(__webpack_require__(40));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _test2 = _interopRequireDefault(__webpack_require__(18));

var _isBinary = _interopRequireDefault(__webpack_require__(85));

var _isOctal = _interopRequireDefault(__webpack_require__(87));

var _isStringType = _interopRequireDefault(__webpack_require__(43));

var _isSymbolType = _interopRequireDefault(__webpack_require__(30));

var _parseInt2 = _interopRequireDefault(__webpack_require__(63));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toNumber");

var nonWSregex = new RegExp("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function _hasNonWS(value) {
  return (0, _test2.default)(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return (0, _test2.default)(invalidHexLiteral, value);
};

var dropPrefix = function _dropPrefix(value) {
  return (0, _stringSlice2.default)(value, 2);
};

function _toNumber(argument) {
  var value = (0, _toPrimitive.default)(argument, Number);

  if ((0, _isSymbolType.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if ((0, _isStringType.default)(value)) {
    if ((0, _isBinary.default)(value)) {
      return _toNumber((0, _parseInt2.default)(dropPrefix(value), 2));
    }

    if ((0, _isOctal.default)(value)) {
      return _toNumber((0, _parseInt2.default)(dropPrefix(value), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN2.default;
    }

    var trimmed = (0, _trim2.default)(value);

    if (trimmed !== value) {
      return _toNumber(trimmed);
    }
  }

  return (0, _Number2.default)(value);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _all;

var _any2 = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_all");

function _all(array, callback) {
  var iteratee = function _iteratee() {
    callback.apply(void 0, arguments);
  };

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, iteratee].concat(rest));
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _any;

var _fromIndex2 = _interopRequireDefault(__webpack_require__(88));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_any");

function _any(array, callback) {
  var object = (0, _toObject.default)(array);
  var length = (0, _toWholeNumber.default)(object.length);

  if (length) {
    for (var index = (0, _fromIndex2.default)(object, arguments.length <= 2 ? undefined : arguments[2]); index < length; index += 1) {
      if (callback(object[index], index, object)) {
        return true;
      }
    }
  }

  return false;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLike;

var _isNil = _interopRequireDefault(__webpack_require__(7));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

var _isWholeNumber = _interopRequireDefault(__webpack_require__(44));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isArrayLike(value) {
  return !(0, _isNil.default)(value) && (0, _isWholeNumber.default)(value.length) && !(0, _isFunction2.default)(value);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_push");

var _default = (0, _methodize2.default)(Array.prototype.push);

exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _includes;

var _find2 = _interopRequireDefault(__webpack_require__(70));

var _sameValueZero = _interopRequireDefault(__webpack_require__(92));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_includes");

function _includes(array, searchElement) {
  var isSameValueZero = function _isSameValueZero(value) {
    return (0, _sameValueZero.default)(searchElement, value);
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  return _find2.default.apply(void 0, [array, isSameValueZero].concat(fromIndex)).includes;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_Boolean");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Boolean
 */
var _default = true.constructor;
exports.default = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSymbolType;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolType
 */
function isSymbolType(value) {
  return _typeof(value) === 'symbol';
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _assign = _interopRequireDefault(__webpack_require__(77));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _indexOf2 = _interopRequireDefault(__webpack_require__(119));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(58));

var _fromCharCode2 = _interopRequireDefault(__webpack_require__(120));

var _map2 = _interopRequireDefault(__webpack_require__(81));

var _reduce2 = _interopRequireDefault(__webpack_require__(57));

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _defineProperties2 = _interopRequireDefault(__webpack_require__(121));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_whitespace");

/**
 * A record of a white space character.
 *
 * @typedef {Object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {boolean} html - Whether the spec lists this as an HTML5 space.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 * @example
 * var whiteSpace = require('white-space-x');
 * whiteSpaces.list.foreach(function (item) {
 *   console.log(lib.description, item.code, item.string);
 * });
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: true
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: true
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: true
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: true
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: true
}, {
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  html: false
}, {
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  html: false
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  html: false
}, {
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  html: false
}];
var types = ['html', 'es5', 'es2015', 'es2016', 'es2017', 'es2018'];
var last = types.length - 1;

function build(type) {
  var index = (0, _indexOf2.default)(types, (0, _toLowerCase2.default)((0, _toString2.default)(type)));
  var prop = index === -1 ? types[last] : types[index];

  var iteratee = function _iteratee(string, record) {
    return record[prop] ? string + (0, _fromCharCode2.default)(record.code) : string;
  };

  return (0, _reduce2.default)(list, iteratee, '');
}

var copier = function _copier(record) {
  return (0, _assign.default)({}, record);
};

(0, _defineProperties2.default)(build, {
  types: {
    get: function get() {
      return (0, _slice2.default)(types);
    }
  },
  list: {
    get: function get() {
      return (0, _map2.default)(list, copier);
    }
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isFinite;

var _isNaN2 = _interopRequireDefault(__webpack_require__(22));

var _Infinity2 = _interopRequireDefault(__webpack_require__(122));

var _isNumberType = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_isFinite");

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */
function _isFinite(number) {
  return (0, _isNumberType.default)(number) && !(0, _isNaN2.default)(number) && number !== _Infinity2.default && number !== -_Infinity2.default;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumberType;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberType
 */
function isNumberType(value) {
  return typeof value === 'number';
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_charAt");

var _default = (0, _methodize2.default)(String.prototype.charAt);

exports.default = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_join");

var _default = (0, _methodize2.default)(Array.prototype.join);

exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertIs;

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _isNil = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_assertIs");

var toMessage = function _toMessage(message, fallback) {
  return (0, _isNil.default)(message) ? fallback : (0, _toString2.default)(message);
};

function _assertIs(predicate, defaultMessage) {
  var defMsg = toMessage(defaultMessage, 'Not a valid value');
  return function assertIsBound(value, customMessage) {
    /* eslint-disable-next-line babel/no-invalid-this */
    if ((0, _call2.default)(predicate, this, value)) {
      return value;
    }

    throw new TypeError(toMessage(customMessage, defMsg));
  };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNull;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNull
 */
function isNull(value) {
  return value === null;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */
var _default = (0, _methodize2.default)(Object.prototype.toString);

exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolType = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var _default = typeof Symbol === 'function' && (0, _isSymbolType.default)(Symbol('x'));

exports.default = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trim;

var _trimLeft2 = _interopRequireDefault(__webpack_require__(54));

var _trimRight2 = _interopRequireDefault(__webpack_require__(82));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_trim");

function _trim(string) {
  return (0, _trimRight2.default)((0, _trimLeft2.default)(string));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRegex;

var _toStringTag = _interopRequireDefault(__webpack_require__(38));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(50));

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _exec2 = _interopRequireDefault(__webpack_require__(86));

var _getOwnPropertyDescriptor2 = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var regexClass = '[object RegExp]';

var tryRegexExecCall = function _tryRegexExecCall(value, descriptor) {
  /* istanbul ignore next */
  try {
    value.lastIndex = 0;
    (0, _exec2.default)(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    if (descriptor.writable) {
      value.lastIndex = descriptor.value;
    }
  }
};

function isRegex(value) {
  if (!(0, _isObjectLike.default)(value)) {
    return false;
  }
  /* istanbul ignore next */


  if (!_isToStringTagSupported.default) {
    return (0, _toStringTag.default)(value) === regexClass;
  }

  var descriptor = (0, _getOwnPropertyDescriptor2.default)(value, 'lastIndex');
  return descriptor && (0, _hasOwnProperty2.default)(descriptor, 'value') ? tryRegexExecCall(value, descriptor) : false;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_hasOwnProperty");

var _default = (0, _methodize2.default)(Object.prototype.hasOwnProperty);

exports.default = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringType;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringType
 */
function isStringType(value) {
  return typeof value === 'string';
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWholeNumber;

var _isSafeInteger = _interopRequireDefault(__webpack_require__(68));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isWholeNumber(value) {
  return (0, _isSafeInteger.default)(value) && value >= 0;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertIs2 = _interopRequireDefault(__webpack_require__(36));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var _default = (0, _assertIs2.default)(_isObjectLike.default, 'Not an object');

exports.default = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toUpperCase");

var _default = (0, _methodize2.default)(String.prototype.toUpperCase);

exports.default = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPropertyKey;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(39));

var _isSymbolType = _interopRequireDefault(__webpack_require__(30));

var _toPrimitive = _interopRequireDefault(__webpack_require__(61));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */
function toPropertyKey(argument) {
  var key = (0, _toPrimitive.default)(argument, String);
  return _isSymbolSupported.default && (0, _isSymbolType.default)(key) ? key : (0, _toString2.default)(key);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(114)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attempt;

var _apply2 = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [rest] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: (0, _apply2.default)(fn, this, rest)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(39));

var _isSymbolType = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
var _default = _isSymbolSupported.default && _typeof((0, _isSymbolType.default)(Symbol.toStringTag));

exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunctionType;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFunctionType
 */
function isFunctionType(value) {
  return typeof value === 'function';
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectType;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectType
 */
function isObjectType(value) {
  return _typeof(value) === 'object';
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeSpace;

var _normalizeSpace2 = _interopRequireDefault(__webpack_require__(116));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string.
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */
function normalizeSpace(string) {
  return (0, _normalizeSpace2.default)((0, _requireCoercibleToString.default)(string));
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimLeft;

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _whitespace2 = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_trimLeft");

var PRE = '^[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function _trimLeft(string) {
  return (0, _replace2.default)(string, whiteSpace, '');
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _negate;

var _apply2 = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_negate");

function _negate(predicate) {
  return function boundNegate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return !(0, _apply2.default)(predicate, this, args);
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_Object");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Object
 */
var _default = {}.constructor;
exports.default = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_reduce");

var _default = (0, _methodize2.default)(Array.prototype.reduce);

exports.default = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toLowerCase");

var _default = (0, _methodize2.default)(String.prototype.toLowerCase);

exports.default = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceComments;

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string) {
  return (0, _replace2.default)((0, _requireCoercibleToString.default)(string), STRIP_COMMENTS, (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toString2.default)(arguments.length <= 1 ? undefined : arguments[1]) : '');
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_Number");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Number
 */
var _default = 0 .constructor;
exports.default = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPrimitive;

var _isDateObject = _interopRequireDefault(__webpack_require__(84));

var _isSymbol = _interopRequireDefault(__webpack_require__(48));

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(39));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _isNil = _interopRequireDefault(__webpack_require__(7));

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var symToPrimitive = _isSymbolSupported.default && Symbol.toPrimitive;
var symValueOf = _isSymbolSupported.default && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  (0, _requireObjectCoercible.default)(O);

  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];

    if ((0, _isFunction2.default)(method)) {
      result = (0, _call2.default)(method, O);

      if ((0, _isPrimitive.default)(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];

  if (!(0, _isNil.default)(func)) {
    if (!(0, _isFunction2.default)(func)) {
      throw new TypeError("".concat(func, " returned for property ").concat(P, " of object ").concat(O, " is not a function"));
    }

    return func;
  }
  /* eslint-disable-next-line no-void */


  return void 0;
}; // http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {constructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 */


function toPrimitive(input) {
  if ((0, _isPrimitive.default)(input)) {
    return input;
  }

  var hint = 'default';

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    if ((arguments.length <= 1 ? undefined : arguments[1]) === String) {
      hint = 'string';
    } else if ((arguments.length <= 1 ? undefined : arguments[1]) === Number) {
      hint = 'number';
    }
  }

  var exoticToPrim;

  if (_isSymbolSupported.default) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if ((0, _isSymbol.default)(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (!(0, _isUndefined.default)(exoticToPrim)) {
    var result = (0, _call2.default)(exoticToPrim, input, hint);

    if ((0, _isPrimitive.default)(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && ((0, _isDateObject.default)(input) || (0, _isSymbol.default)(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_stringIndexOf");

var _default = (0, _methodize2.default)(String.prototype.indexOf);

exports.default = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _parseInt;

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _trimLeft2 = _interopRequireDefault(__webpack_require__(54));

var _Number2 = _interopRequireDefault(__webpack_require__(60));

var _charAt2 = _interopRequireDefault(__webpack_require__(34));

var _test2 = _interopRequireDefault(__webpack_require__(18));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_parseInt");

var parse = parseInt;
var hexPattern = /^[-+]?0x/i;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems).
 *
 * @param {string} string - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} radix - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function _parseInt(string, radix) {
  var str = (0, _trimLeft2.default)((0, _toString2.default)(string));

  if ((0, _charAt2.default)(str, 0) === "\u180E") {
    return _NaN2.default;
  }

  return parse(str, (0, _Number2.default)(radix) || ((0, _test2.default)(hexPattern, str) ? 16 : 10));
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_NaN");

/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _NaN
 */
var _default = 0 / 0;

exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _sign;

var _toNumber2 = _interopRequireDefault(__webpack_require__(23));

var _isNaN2 = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_sign");

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */
function _sign(x) {
  var n = (0, _toNumber2.default)(x);

  if (n === 0 || (0, _isNaN2.default)(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module MAX_SAFE_INTEGER
 */
var _default = 9007199254740991;
exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _accumulate;

var _all2 = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_accumulate");

function _accumulate(array, callback, initialValue) {
  var accumulator = initialValue;

  var iteratee = function _iteratee() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    accumulator = callback.apply(void 0, [accumulator].concat(args));
  };

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  _all2.default.apply(void 0, [array, iteratee].concat(rest));

  return accumulator;
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSafeInteger;

var _isInteger = _interopRequireDefault(__webpack_require__(89));

var _MAX_SAFE_INTEGER = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isSafeInteger(value) {
  return (0, _isInteger.default)(value) && value >= -_MAX_SAFE_INTEGER.default && value <= _MAX_SAFE_INTEGER.default;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _bound;

var _apply2 = _interopRequireDefault(__webpack_require__(13));

var _argsToArray2 = _interopRequireDefault(__webpack_require__(129));

var _createArgList2 = _interopRequireDefault(__webpack_require__(130));

var _create2 = _interopRequireDefault(__webpack_require__(131));

var _Function2 = _interopRequireDefault(__webpack_require__(132));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_bound");

function _bound(binder, name, prototype, length) {
  var bound = (0, _Function2.default)('binder', '_apply', '_argsToArray', "return function bound".concat(name, "(").concat((0, _createArgList2.default)(length), "){ return _apply(binder,this,_argsToArray(arguments)); }"))(binder, _apply2.default, _argsToArray2.default);

  if (prototype) {
    bound.prototype = (0, _create2.default)(prototype);
  }

  return bound;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _find;

var _any2 = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_find");

function _find(array, callback) {
  var result = {
    includes: false,
    index: -1,

    /* eslint-disable-next-line no-void */
    value: void 0
  };

  var predicate = function _predicate(value, index, object) {
    var found = callback(value, index, object);

    if (found) {
      result.includes = true;
      result.index = index;
      result.value = value;
    }

    return found;
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, predicate].concat(fromIndex));

  return result;
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getAt;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

var _charAt2 = _interopRequireDefault(__webpack_require__(34));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_getAt");

function _getAt(array) {
  if (!(0, _isArrayLike.default)(array)) {
    /* eslint-disable-next-line no-void */
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toInteger2.default)(arguments.length <= 1 ? undefined : arguments[1]) : 0;
  return (0, _isString.default)(array) ? (0, _charAt2.default)(array, index) : array[index];
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _sift;

var _any2 = _interopRequireDefault(__webpack_require__(25));

var _push2 = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_sift");

function _sift(array, callback) {
  var result = [];

  var iteratee = function _iteratee(value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (callback.apply(void 0, [value].concat(args))) {
      (0, _push2.default)(result, value);
    }
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, iteratee].concat(fromIndex));

  return result;
}

/***/ }),
/* 73 */
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


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_String");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _String
 */
var _default = ''.constructor;
exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_functionToString");

var _default = (0, _methodize2.default)(Function.prototype.toString);

exports.default = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_bind");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bind
 */
var _default = Function.call.bind(Function.bind);

exports.default = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assign;

var _isFunctionType = _interopRequireDefault(__webpack_require__(51));

var _isNil = _interopRequireDefault(__webpack_require__(7));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _stubArray = _interopRequireDefault(__webpack_require__(78));

var _concat2 = _interopRequireDefault(__webpack_require__(117));

var _filter2 = _interopRequireDefault(__webpack_require__(79));

var _reduce2 = _interopRequireDefault(__webpack_require__(57));

var _keys2 = _interopRequireDefault(__webpack_require__(80));

var _propertyIsEnumerable2 = _interopRequireDefault(__webpack_require__(118));

var _Object2 = _interopRequireDefault(__webpack_require__(56));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/* istanbul ignore next */
var getOwnPropertySymbols = (0, _isFunctionType.default)(_Object2.default.getOwnPropertySymbols) ? _Object2.default.getOwnPropertySymbols : _stubArray.default;

var getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  var isEnumerable = function _isEnumerable(symbol) {
    return (0, _propertyIsEnumerable2.default)(target, symbol);
  };

  return (0, _filter2.default)(getOwnPropertySymbols(target), isEnumerable);
};

var reducer = function _reducer(tgt, source) {
  if ((0, _isNil.default)(source)) {
    return tgt;
  }

  var object = (0, _Object2.default)(source);

  var assigner = function _assigner(tar, key) {
    tar[key] = object[key];
    return tar;
  };

  return (0, _reduce2.default)((0, _concat2.default)((0, _keys2.default)(object), getOwnEnumerablePropertySymbols(object)), assigner, tgt);
};
/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {Array} rest - The rest of the arguments array.
 * @param {...*} [rest.source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {Object} The target object.
 * @example
 * var assign = require('object-assign-x');
 *
 * var obj = { a: 1 };
 * var copy = assign({}, obj);
 * console.log(copy); // { a: 1 }
 */


function assign(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return (0, _reduce2.default)(rest, reducer, (0, _toObject.default)(target));
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubArray;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubArray
 */
function stubArray() {
  return [];
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_filter");

var _default = (0, _methodize2.default)(Array.prototype.filter);

exports.default = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_keys");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _keys
 */
var _default = Object.keys;
exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_map");

var _default = (0, _methodize2.default)(Array.prototype.map);

exports.default = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimRight;

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _whitespace2 = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_trimRight");

var PRE = '[';
var POST = ']+$';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function _trimRight(string) {
  return (0, _replace2.default)(string, whiteSpace, '');
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attempt = _interopRequireDefault(__webpack_require__(49));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/* eslint-disable-next-line no-new-func */
var _default = !(0, _attempt.default)(Function('"use strict"; return class My {};')).threw;

exports.default = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinary;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var binaryPattern = /^0b[01]+$/i;

function isBinary(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, binaryPattern);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_exec");

var _default = (0, _methodize2.default)(RegExp.prototype.exec);

exports.default = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOctal;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var octalPattern = /^0o[0-7]+$/i;

function isOctal(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, octalPattern);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _fromIndex;

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_fromIndex");

var max = Math.max;

function _fromIndex(array, fromIndex) {
  var object = (0, _toObject.default)(array);

  if (!(0, _isArrayLike.default)(object)) {
    return 0;
  }

  var index = (0, _toInteger2.default)(fromIndex);
  return index >= 0 ? index : max(0, (0, _toWholeNumber.default)(object.length) + index);
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInteger;

var _isNumberType = _interopRequireDefault(__webpack_require__(33));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _isFinite2 = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isInteger(value) {
  return (0, _isNumberType.default)(value) && (0, _isFinite2.default)(value) && (0, _toInteger2.default)(value) === value;
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertIs;

var _assertIs2 = _interopRequireDefault(__webpack_require__(36));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function assertIs(predicate, defaultMessage) {
  if (!(0, _isFunction2.default)(predicate)) {
    throw new TypeError('Predicate must be a function');
  }

  return (0, _assertIs2.default)(predicate, defaultMessage);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;

var _clamp2 = _interopRequireDefault(__webpack_require__(139));

var _toNumber2 = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method clamps a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {Array} rest - The remaining arguments array.
 * @param {number} [rest.min=0] - The minimum number.
 * @param {number} rest.max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
function clamp(value) {
  var number = (0, _toNumber2.default)(value);
  var restLength = arguments.length <= 1 ? 0 : arguments.length - 1;

  if (restLength < 1) {
    return number;
  }

  var min = (0, _toNumber2.default)(arguments.length <= 1 ? undefined : arguments[1]);
  var max = (0, _toNumber2.default)(arguments.length <= 2 ? undefined : arguments[2]);

  if (restLength < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    throw new RangeError('"min" > "max"');
  }

  return (0, _clamp2.default)(number, min, max);
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValueZero;

var _sameValue = _interopRequireDefault(__webpack_require__(93));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function sameValueZero(x, y) {
  return x === y || (0, _sameValue.default)(x, y);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValue;

var _isNaN2 = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 */
function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  return value1 === value2 || (0, _isNaN2.default)(value1) && (0, _isNaN2.default)(value2);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _last;

var _getAt2 = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_last");

function _last(array) {
  return (0, _getAt2.default)(array, array.length - 1);
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperty;

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

var _assertIs = _interopRequireDefault(__webpack_require__(90));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(45));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(42));

var _nilifyIs = _interopRequireDefault(__webpack_require__(96));

var _surround = _interopRequireDefault(__webpack_require__(97));

var _Boolean2 = _interopRequireDefault(__webpack_require__(29));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(143));

var _Object2 = _interopRequireDefault(__webpack_require__(56));

var _apply2 = _interopRequireDefault(__webpack_require__(13));

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(47));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var MSG1 = 'Not a valid initial value for ';
var MSG2 = 'Not a valid value for  ';

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var descriptor = {};

  if ((0, _hasOwnProperty.default)(desc, 'enumerable')) {
    descriptor.enumerable = (0, _Boolean2.default)(desc.enumerable);
  }

  if ((0, _hasOwnProperty.default)(desc, 'configurable')) {
    descriptor.configurable = (0, _Boolean2.default)(desc.configurable);
  }

  if ((0, _hasOwnProperty.default)(desc, 'nilable')) {
    descriptor.nilable = (0, _Boolean2.default)(desc.nilable);
  }

  if ((0, _hasOwnProperty.default)(desc, 'validator')) {
    if (!(0, _isUndefined.default)(desc.validator) && !(0, _isFunction2.default)(desc.validator)) {
      throw new TypeError('validator must be a function');
    }

    descriptor.validator = desc.validator;
  }

  if ((0, _hasOwnProperty.default)(desc, 'value')) {
    descriptor.value = desc.value;
  }

  if ((0, _hasOwnProperty.default)(desc, 'writable')) {
    descriptor.writable = (0, _Boolean2.default)(desc.writable);
  }

  if ((0, _hasOwnProperty.default)(desc, 'get')) {
    if (!(0, _isUndefined.default)(desc.get) && !(0, _isFunction2.default)(desc.get)) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = desc.get;
  }

  if ((0, _hasOwnProperty.default)(desc, 'set')) {
    if (!(0, _isUndefined.default)(desc.set) && !(0, _isFunction2.default)(desc.set)) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = desc.set;
  }

  if (((0, _hasOwnProperty.default)(descriptor, 'get') || (0, _hasOwnProperty.default)(descriptor, 'set')) && ((0, _hasOwnProperty.default)(descriptor, 'value') || (0, _hasOwnProperty.default)(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
};

function defineValidatorProperty(object, property, descriptor) {
  (0, _assertIsObjectLike.default)(object);
  var prop = (0, _toPropertyKey.default)(property);
  var props = toPropertyDescriptor((0, _Object2.default)(descriptor), defineValidatorProperty);
  var isValidInitialValue = props.nilable && props.validator ? (0, _nilifyIs.default)(props.validator) : props.validator;
  var quotedProperty = (0, _surround.default)(prop, '"');

  if (isValidInitialValue) {
    (0, _assertIs.default)(isValidInitialValue, MSG1 + quotedProperty)(props.value);
  }

  var isValidValue = props.validator && (0, _assertIs.default)(props.validator, MSG2 + quotedProperty);
  var validatorDesctiptor = {
    configurable: props.configurable,
    enumerable: props.enumerable
  };

  if (props.get) {
    validatorDesctiptor.get = function get() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _apply2.default)(props.get, this, args);
    };
  } else if (isValidValue && (0, _hasOwnProperty.default)(props, 'value')) {
    validatorDesctiptor.get = function get() {
      return props.value;
    };
  }

  if (props.set) {
    validatorDesctiptor.set = function set(newValue) {
      return (0, _call2.default)(props.set, this, newValue);
    };
  } else if ((0, _hasOwnProperty.default)(props, 'value')) {
    if (isValidValue && props.writable) {
      validatorDesctiptor.set = function set(newValue) {
        props.value = isValidValue(newValue);
        return props.value;
      };
    } else {
      validatorDesctiptor.value = props.value;

      if ((0, _hasOwnProperty.default)(props, 'writable')) {
        validatorDesctiptor.writable = props.writable;
      }
    }
  }

  return (0, _defineProperty2.default)(object, prop, validatorDesctiptor);
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nilifyIs;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _isNil = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function nilifyIs(predicate) {
  (0, _assertIsFunction2.default)(predicate);
  return function nilifiedBound(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return (0, _isNil.default)(value) || _call2.default.apply(void 0, [predicate, this, value].concat(rest));
  };
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surround;

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function surround(string, wrapper) {
  var wrap = (0, _toString2.default)(wrapper);
  return wrap + (0, _toString2.default)(string) + wrap;
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_match");

var _default = (0, _methodize2.default)(String.prototype.match);

exports.default = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_numberToString");

var _default = (0, _methodize2.default)(Number.prototype.toString);

exports.default = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toUint24;

var _toNumber2 = _interopRequireDefault(__webpack_require__(23));

var _modulo = _interopRequireDefault(__webpack_require__(101));

var _sign2 = _interopRequireDefault(__webpack_require__(65));

var _isFinite2 = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var floor = Math.floor,
    abs = Math.abs;
/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 */

function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  var number = (0, _toNumber2.default)(argument); // If number is NaN, +0, -0, +∞, or -∞, return +0.

  if (number === 0 || !(0, _isFinite2.default)(number)) {
    return 0;
  } // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.


  return (0, _modulo.default)((0, _sign2.default)(number) * floor(abs(number)), 0x1000000);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modulo;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file modulo - floored division implementation.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */
var floor = Math.floor;
/**
 * The notation “x modulo y” (y must be finite and nonzero) computes a value k
 * of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
 * for some integer q.
 *
 * Donald Knuth described floored division where the quotient is defined by
 * the floor function q = ⌊a/n⌋ and thus according to equation the remainder
 * would have the same sign as the divisor. Due to the floor function, the
 * quotient is always rounded downwards, even if it is already negative.
 *
 * @param {number} dividend - The integer to find the remainder of.
 * @param {number} divisor - The integer to divide by.
 * @returns {number} The integer remainder.
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions
 * @see https://en.wikipedia.org/wiki/Modulo_operation
 */

function modulo(dividend, divisor) {
  var remain = dividend % divisor;
  return floor(remain >= 0 ? remain : remain + divisor);
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = padStart;

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method pads the current string with another string (repeated, if needed)
 * so that the resulting string reaches the given length. The padding is applied
 * from the start (left) of the current string.
 *
 * @param {string} string - The string to pad.
 * @throws {TypeError} If target is null or undefined.
 * @param {number} targetLength - The length of the resulting string once the
 *  current string has been padded. If the value is lower than the current
 *  string's length, the current string will be returned as is.
 * @param {Array} rest - The rest of the arguments array.
 * @param {string} [rest.padString] - The string to pad the current string with. If
 *  this string is too long to stay within the target length, it will be
 *  truncated and the left-most part will be applied. The default value for this
 *  parameter is " " (U+0020).
 * @returns {string} A String of the specified length with the pad string
 *  applied from the start.
 */
function padStart(string, targetLength) {
  var str = (0, _toString2.default)((0, _requireCoercibleToString.default)(string));
  var stringLength = (0, _toWholeNumber.default)(str.length);
  /* eslint-disable-next-line no-void */

  var fillString = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : void 0;
  var filler = (0, _isUndefined.default)(fillString) ? '' : (0, _toString2.default)(fillString);

  if (filler === '') {
    filler = ' ';
  }

  var intMaxLength = (0, _toWholeNumber.default)(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? (0, _stringSlice2.default)(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? (0, _stringSlice2.default)(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBooleanType;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBooleanType
 */
function isBooleanType(value) {
  return typeof value === 'boolean';
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpaced;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

var _whitespace2 = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var PRE = '[';
var POST = ']';
var containsSpace = new RegExp(PRE + (0, _whitespace2.default)('html') + POST);

function isSpaced(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, containsSpace);
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Boolean.default;
  }
});

var _Boolean = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _uniq;

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _push2 = _interopRequireDefault(__webpack_require__(27));

var _reduce2 = _interopRequireDefault(__webpack_require__(57));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_uniq");

var callback = function _callback(accumulator, currentValue) {
  if (!(0, _includes2.default)(accumulator, currentValue)) {
    (0, _push2.default)(accumulator, currentValue);
  }

  return accumulator;
};

function _uniq(array) {
  return (0, _reduce2.default)(array, callback, []);
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDecimalFormString;

var _Number2 = _interopRequireDefault(__webpack_require__(60));

var _charAt2 = _interopRequireDefault(__webpack_require__(34));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(62));

var _join2 = _interopRequireDefault(__webpack_require__(35));

var _search2 = _interopRequireDefault(__webpack_require__(108));

var _test2 = _interopRequireDefault(__webpack_require__(18));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var EMPTY_STRING = '';
var DECIMAL_MARK = '.';
var HYPHEN_MINUS = '-';
var ZERO_SYMBOL = '0';
var MINUS_ZERO_SYMBOL = HYPHEN_MINUS + ZERO_SYMBOL;
var ERROR_MSG = 'not a valid base 10 numeric value';
var validPattern = /^-?(?:(?:\d|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?$/i;
var expPattern = /e/i;
/**
 * This method converts a base-10 or scientific E-notation value to
 * a decimal form string. Javascript's IEE 754 double-precision numbers
 * give the same precision as `number.toString()`.
 *
 * @param {number|string} value - The value to be converted.
 * @throws {TypeError} If value is not a valid format.
 * @throws {TypeError} If value is a Symbol or not coercible.
 * @returns {string} The value converted to a decimal form string.
 */

function toDecimalFormString(value) {
  var workingValue = value; // Minus zero?

  if (workingValue === 0 && 1 / workingValue < 0) {
    workingValue = MINUS_ZERO_SYMBOL;
  } else {
    workingValue = (0, _toString2.default)(workingValue);

    if (!(0, _test2.default)(validPattern, workingValue)) {
      throw new TypeError(ERROR_MSG);
    }
  } // Determine sign.


  var sign;

  if ((0, _charAt2.default)(workingValue, 0) === HYPHEN_MINUS) {
    workingValue = (0, _stringSlice2.default)(workingValue, 1);
    sign = -1;
  } else {
    sign = 1;
  } // Decimal point?


  var pointIndex = (0, _stringIndexOf2.default)(workingValue, DECIMAL_MARK);

  if (pointIndex > -1) {
    workingValue = (0, _replace2.default)(workingValue, DECIMAL_MARK, EMPTY_STRING);
  }

  var exponentIndex = pointIndex; // Exponential form?

  var index = (0, _search2.default)(workingValue, expPattern);

  if (index > 0) {
    // Determine exponent.
    if (exponentIndex < 0) {
      exponentIndex = index;
    }

    exponentIndex += (0, _Number2.default)((0, _stringSlice2.default)(workingValue, index + 1));
    workingValue = (0, _stringSlice2.default)(workingValue, 0, index);
  } else if (exponentIndex < 0) {
    // Integer.
    exponentIndex = workingValue.length;
  }

  var leadingZeroIndex = workingValue.length; // Determine leading zeros.

  index = 0;

  while (index < leadingZeroIndex && (0, _charAt2.default)(workingValue, index) === ZERO_SYMBOL) {
    index += 1;
  }

  var coefficient;
  var exponent;

  if (index === leadingZeroIndex) {
    // Zero.
    exponent = 0;
    coefficient = [0];
  } else {
    // Determine trailing zeros.
    if (leadingZeroIndex > 0) {
      do {
        leadingZeroIndex -= 1;
      } while ((0, _charAt2.default)(workingValue, leadingZeroIndex) === ZERO_SYMBOL && leadingZeroIndex > 0);
    }

    exponent = exponentIndex - index - 1;
    coefficient = [];
    coefficient.length = leadingZeroIndex + 1; // Convert string to array of digits without leading/trailing zeros.

    var position = 0;

    while (index <= leadingZeroIndex) {
      coefficient[position] = (0, _Number2.default)((0, _charAt2.default)(workingValue, index));
      position += 1;
      index += 1;
    }
  }

  var decimalForm = (0, _join2.default)(coefficient, EMPTY_STRING);
  var decimalFormLength = decimalForm.length;

  if (exponent < 0) {
    exponent += 1;

    while (exponent) {
      decimalForm = ZERO_SYMBOL + decimalForm;
      exponent += 1;
    }

    decimalForm = ZERO_SYMBOL + DECIMAL_MARK + decimalForm;
  } else if (exponent > 0) {
    exponent += 1;

    if (exponent > decimalFormLength) {
      exponent -= decimalFormLength;

      while (exponent) {
        decimalForm += ZERO_SYMBOL;
        exponent -= 1;
      }
    } else if (exponent < decimalFormLength) {
      decimalForm = (0, _stringSlice2.default)(decimalForm, 0, exponent) + DECIMAL_MARK + (0, _stringSlice2.default)(decimalForm, exponent);
    } // Exponent is zero.

  } else if (decimalFormLength > 1) {
    decimalForm = (0, _charAt2.default)(decimalForm, 0) + DECIMAL_MARK + (0, _stringSlice2.default)(decimalForm, 1);
  }

  return sign < 0 ? HYPHEN_MINUS + decimalForm : decimalForm;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_search");

var _default = (0, _methodize2.default)(String.prototype.search);

exports.default = _default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_RegExp");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _RegExp
 */
var _default = /(?:)/.constructor;
exports.default = _default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubTrue;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubTrue
 */
function stubTrue() {
  return true;
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "accumulate", {
  enumerable: true,
  get: function get() {
    return _accumulate.default;
  }
});
Object.defineProperty(exports, "all", {
  enumerable: true,
  get: function get() {
    return _all.default;
  }
});
Object.defineProperty(exports, "any", {
  enumerable: true,
  get: function get() {
    return _any.default;
  }
});
Object.defineProperty(exports, "apply", {
  enumerable: true,
  get: function get() {
    return _apply.default;
  }
});
Object.defineProperty(exports, "arity", {
  enumerable: true,
  get: function get() {
    return _arity.default;
  }
});
Object.defineProperty(exports, "assign", {
  enumerable: true,
  get: function get() {
    return _assign.default;
  }
});
Object.defineProperty(exports, "assertIsFunction", {
  enumerable: true,
  get: function get() {
    return _assertIsFunction.default;
  }
});
Object.defineProperty(exports, "assertIsObject", {
  enumerable: true,
  get: function get() {
    return _assertIsObjectLike.default;
  }
});
Object.defineProperty(exports, "assertIs", {
  enumerable: true,
  get: function get() {
    return _assertIs.default;
  }
});
Object.defineProperty(exports, "attempt", {
  enumerable: true,
  get: function get() {
    return _attempt.default;
  }
});
Object.defineProperty(exports, "bind", {
  enumerable: true,
  get: function get() {
    return _bind.default;
  }
});
Object.defineProperty(exports, "call", {
  enumerable: true,
  get: function get() {
    return _call.default;
  }
});
Object.defineProperty(exports, "callFunctionOrIdentity", {
  enumerable: true,
  get: function get() {
    return _callFunctionOrIdentity.default;
  }
});
Object.defineProperty(exports, "capitalizeFirst", {
  enumerable: true,
  get: function get() {
    return _capitalizeFirst.default;
  }
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function get() {
    return _capitalize.default;
  }
});
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function get() {
    return _clamp.default;
  }
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function get() {
    return _constant.default;
  }
});
Object.defineProperty(exports, "defaultToOneOf", {
  enumerable: true,
  get: function get() {
    return _defaultToOneOf.default;
  }
});
Object.defineProperty(exports, "defineValidatorProperties", {
  enumerable: true,
  get: function get() {
    return _defineValidatorProperties.default;
  }
});
Object.defineProperty(exports, "defineValidatorProperty", {
  enumerable: true,
  get: function get() {
    return _defineValidatorProperty.default;
  }
});
Object.defineProperty(exports, "delayPromise", {
  enumerable: true,
  get: function get() {
    return _delayPromiseX.default;
  }
});
Object.defineProperty(exports, "difference", {
  enumerable: true,
  get: function get() {
    return _difference.default;
  }
});
Object.defineProperty(exports, "drop", {
  enumerable: true,
  get: function get() {
    return _drop.default;
  }
});
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function get() {
    return _find.default;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function get() {
    return _findIndex.default;
  }
});
Object.defineProperty(exports, "getAt", {
  enumerable: true,
  get: function get() {
    return _getAt.default;
  }
});
Object.defineProperty(exports, "getFunctionName", {
  enumerable: true,
  get: function get() {
    return _getFunctionName.default;
  }
});
Object.defineProperty(exports, "hasOwnProperty", {
  enumerable: true,
  get: function get() {
    return _hasOwnProperty.default;
  }
});
Object.defineProperty(exports, "head", {
  enumerable: true,
  get: function get() {
    return _head.default;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function get() {
    return _identity.default;
  }
});
Object.defineProperty(exports, "includes", {
  enumerable: true,
  get: function get() {
    return _includes.default;
  }
});
Object.defineProperty(exports, "intersection", {
  enumerable: true,
  get: function get() {
    return _intersection.default;
  }
});
Object.defineProperty(exports, "intToRGB", {
  enumerable: true,
  get: function get() {
    return _intToRGB.default;
  }
});
Object.defineProperty(exports, "isArrayLikeObject", {
  enumerable: true,
  get: function get() {
    return _isArrayLikeObject.default;
  }
});
Object.defineProperty(exports, "isArrayLike", {
  enumerable: true,
  get: function get() {
    return _isArrayLike.default;
  }
});
Object.defineProperty(exports, "isBinary", {
  enumerable: true,
  get: function get() {
    return _isBinary.default;
  }
});
Object.defineProperty(exports, "isBooleanType", {
  enumerable: true,
  get: function get() {
    return _isBooleanType.default;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function get() {
    return _isBooleanObject.default;
  }
});
Object.defineProperty(exports, "isClassSupported", {
  enumerable: true,
  get: function get() {
    return _isClassSupported.default;
  }
});
Object.defineProperty(exports, "isCountingNumber", {
  enumerable: true,
  get: function get() {
    return _isCountingNumber.default;
  }
});
Object.defineProperty(exports, "isDate", {
  enumerable: true,
  get: function get() {
    return _isDateObject.default;
  }
});
Object.defineProperty(exports, "isDOMNode", {
  enumerable: true,
  get: function get() {
    return _isDOMNode.default;
  }
});
Object.defineProperty(exports, "isError", {
  enumerable: true,
  get: function get() {
    return _isError.default;
  }
});
Object.defineProperty(exports, "isFalsey", {
  enumerable: true,
  get: function get() {
    return _isFalsey.default;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function get() {
    return _isFunction.default;
  }
});
Object.defineProperty(exports, "isFunctionType", {
  enumerable: true,
  get: function get() {
    return _isFunctionType.default;
  }
});
Object.defineProperty(exports, "isHex", {
  enumerable: true,
  get: function get() {
    return _isHex.default;
  }
});
Object.defineProperty(exports, "isInteger", {
  enumerable: true,
  get: function get() {
    return _isInteger.default;
  }
});
Object.defineProperty(exports, "isLowerCased", {
  enumerable: true,
  get: function get() {
    return _isLowerCased.default;
  }
});
Object.defineProperty(exports, "isNil", {
  enumerable: true,
  get: function get() {
    return _isNil.default;
  }
});
Object.defineProperty(exports, "isNull", {
  enumerable: true,
  get: function get() {
    return _isNull.default;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function get() {
    return _isNumberObject.default;
  }
});
Object.defineProperty(exports, "isNumberFinite", {
  enumerable: true,
  get: function get() {
    return _isNumberFinite.default;
  }
});
Object.defineProperty(exports, "isNumberNaN", {
  enumerable: true,
  get: function get() {
    return _isNumberNaN.default;
  }
});
Object.defineProperty(exports, "isNumberType", {
  enumerable: true,
  get: function get() {
    return _isNumberType.default;
  }
});
Object.defineProperty(exports, "isObjectLikeNotArray", {
  enumerable: true,
  get: function get() {
    return _isObjectLikeNotArray.default;
  }
});
Object.defineProperty(exports, "isObjectLike", {
  enumerable: true,
  get: function get() {
    return _isObjectLike.default;
  }
});
Object.defineProperty(exports, "isObjectType", {
  enumerable: true,
  get: function get() {
    return _isObjectType.default;
  }
});
Object.defineProperty(exports, "isOctal", {
  enumerable: true,
  get: function get() {
    return _isOctal.default;
  }
});
Object.defineProperty(exports, "isPopulatedString", {
  enumerable: true,
  get: function get() {
    return _isPopulatedString.default;
  }
});
Object.defineProperty(exports, "isPrimitive", {
  enumerable: true,
  get: function get() {
    return _isPrimitive.default;
  }
});
Object.defineProperty(exports, "isRegex", {
  enumerable: true,
  get: function get() {
    return _isRegex.default;
  }
});
Object.defineProperty(exports, "isSafeInteger", {
  enumerable: true,
  get: function get() {
    return _isSafeInteger.default;
  }
});
Object.defineProperty(exports, "isSearchIndex", {
  enumerable: true,
  get: function get() {
    return _isSearchIndex.default;
  }
});
Object.defineProperty(exports, "isSpaced", {
  enumerable: true,
  get: function get() {
    return _isSpaced.default;
  }
});
Object.defineProperty(exports, "isStringTypeOrInteger", {
  enumerable: true,
  get: function get() {
    return _isStringTypeOrInteger.default;
  }
});
Object.defineProperty(exports, "isStringTypeOrNumberType", {
  enumerable: true,
  get: function get() {
    return _isStringTypeOrNumberType.default;
  }
});
Object.defineProperty(exports, "isStringType", {
  enumerable: true,
  get: function get() {
    return _isStringType.default;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function get() {
    return _isString.default;
  }
});
Object.defineProperty(exports, "isSurrogatePair", {
  enumerable: true,
  get: function get() {
    return _isSurrogatePair.default;
  }
});
Object.defineProperty(exports, "isSymbolType", {
  enumerable: true,
  get: function get() {
    return _isSymbolType.default;
  }
});
Object.defineProperty(exports, "isSymbol", {
  enumerable: true,
  get: function get() {
    return _isSymbol.default;
  }
});
Object.defineProperty(exports, "isSymbolSupported", {
  enumerable: true,
  get: function get() {
    return _isSymbolSupported.default;
  }
});
Object.defineProperty(exports, "isToStringTagSupported", {
  enumerable: true,
  get: function get() {
    return _isToStringTagSupported.default;
  }
});
Object.defineProperty(exports, "isTruthy", {
  enumerable: true,
  get: function get() {
    return _isTruthy.default;
  }
});
Object.defineProperty(exports, "isUndefined", {
  enumerable: true,
  get: function get() {
    return _isUndefined.default;
  }
});
Object.defineProperty(exports, "isUnderscored", {
  enumerable: true,
  get: function get() {
    return _isUnderscored.default;
  }
});
Object.defineProperty(exports, "isUniq", {
  enumerable: true,
  get: function get() {
    return _isUniq.default;
  }
});
Object.defineProperty(exports, "isUpperCased", {
  enumerable: true,
  get: function get() {
    return _isUpperCased.default;
  }
});
Object.defineProperty(exports, "isValidHtml4Id", {
  enumerable: true,
  get: function get() {
    return _isValidHtml4Id.default;
  }
});
Object.defineProperty(exports, "isValidHtml5Id", {
  enumerable: true,
  get: function get() {
    return _isValidHtml5Id.default;
  }
});
Object.defineProperty(exports, "isWhiteSpaced", {
  enumerable: true,
  get: function get() {
    return _isWhiteSpaced.default;
  }
});
Object.defineProperty(exports, "isWholeNumber", {
  enumerable: true,
  get: function get() {
    return _isWholeNumber.default;
  }
});
Object.defineProperty(exports, "kebabJoin", {
  enumerable: true,
  get: function get() {
    return _kebabJoin.default;
  }
});
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function get() {
    return _last.default;
  }
});
Object.defineProperty(exports, "methodize", {
  enumerable: true,
  get: function get() {
    return _methodize.default;
  }
});
Object.defineProperty(exports, "modulo", {
  enumerable: true,
  get: function get() {
    return _modulo.default;
  }
});
Object.defineProperty(exports, "negate", {
  enumerable: true,
  get: function get() {
    return _negate.default;
  }
});
Object.defineProperty(exports, "nilifyIs", {
  enumerable: true,
  get: function get() {
    return _nilifyIs.default;
  }
});
Object.defineProperty(exports, "normalizeSpace", {
  enumerable: true,
  get: function get() {
    return _normalizeSpace.default;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return _noop.default;
  }
});
Object.defineProperty(exports, "numberToDecimalString", {
  enumerable: true,
  get: function get() {
    return _numberToDecimalString.default;
  }
});
Object.defineProperty(exports, "numberFormat", {
  enumerable: true,
  get: function get() {
    return _numberFormat.default;
  }
});
Object.defineProperty(exports, "parseDecimal", {
  enumerable: true,
  get: function get() {
    return _parseDecimal.default;
  }
});
Object.defineProperty(exports, "parseInteger", {
  enumerable: true,
  get: function get() {
    return _parseInteger.default;
  }
});
Object.defineProperty(exports, "partial", {
  enumerable: true,
  get: function get() {
    return _partial.default;
  }
});
Object.defineProperty(exports, "partialRight", {
  enumerable: true,
  get: function get() {
    return _partialRight.default;
  }
});
Object.defineProperty(exports, "padStart", {
  enumerable: true,
  get: function get() {
    return _padStart.default;
  }
});
Object.defineProperty(exports, "regexpEscape", {
  enumerable: true,
  get: function get() {
    return _regexpEscape.default;
  }
});
Object.defineProperty(exports, "replaceComments", {
  enumerable: true,
  get: function get() {
    return _replaceComments.default;
  }
});
Object.defineProperty(exports, "requireCoercibleToString", {
  enumerable: true,
  get: function get() {
    return _requireCoercibleToString.default;
  }
});
Object.defineProperty(exports, "requireObjectCoercible", {
  enumerable: true,
  get: function get() {
    return _requireObjectCoercible.default;
  }
});
Object.defineProperty(exports, "sameValue", {
  enumerable: true,
  get: function get() {
    return _sameValue.default;
  }
});
Object.defineProperty(exports, "sameValueZero", {
  enumerable: true,
  get: function get() {
    return _sameValueZero.default;
  }
});
Object.defineProperty(exports, "shuffle", {
  enumerable: true,
  get: function get() {
    return _shuffle.default;
  }
});
Object.defineProperty(exports, "sign", {
  enumerable: true,
  get: function get() {
    return _sign.default;
  }
});
Object.defineProperty(exports, "sift", {
  enumerable: true,
  get: function get() {
    return _sift.default;
  }
});
Object.defineProperty(exports, "stringTest", {
  enumerable: true,
  get: function get() {
    return _stringTest.default;
  }
});
Object.defineProperty(exports, "stubArray", {
  enumerable: true,
  get: function get() {
    return _stubArray.default;
  }
});
Object.defineProperty(exports, "stubFalse", {
  enumerable: true,
  get: function get() {
    return _stubFalse.default;
  }
});
Object.defineProperty(exports, "stubObject", {
  enumerable: true,
  get: function get() {
    return _stubObject.default;
  }
});
Object.defineProperty(exports, "stubString", {
  enumerable: true,
  get: function get() {
    return _stubString.default;
  }
});
Object.defineProperty(exports, "stubTrue", {
  enumerable: true,
  get: function get() {
    return _stubTrue.default;
  }
});
Object.defineProperty(exports, "squeeze", {
  enumerable: true,
  get: function get() {
    return _squeeze.default;
  }
});
Object.defineProperty(exports, "surround", {
  enumerable: true,
  get: function get() {
    return _surround.default;
  }
});
Object.defineProperty(exports, "trim", {
  enumerable: true,
  get: function get() {
    return _trim.default;
  }
});
Object.defineProperty(exports, "trimLeft", {
  enumerable: true,
  get: function get() {
    return _trimLeft.default;
  }
});
Object.defineProperty(exports, "trimRight", {
  enumerable: true,
  get: function get() {
    return _trimRight.default;
  }
});
Object.defineProperty(exports, "trunc", {
  enumerable: true,
  get: function get() {
    return _trunc.default;
  }
});
Object.defineProperty(exports, "truncate", {
  enumerable: true,
  get: function get() {
    return _truncate.default;
  }
});
Object.defineProperty(exports, "toBoolean", {
  enumerable: true,
  get: function get() {
    return _toBoolean.default;
  }
});
Object.defineProperty(exports, "toInteger", {
  enumerable: true,
  get: function get() {
    return _toInteger.default;
  }
});
Object.defineProperty(exports, "toNumber", {
  enumerable: true,
  get: function get() {
    return _toNumber.default;
  }
});
Object.defineProperty(exports, "toObject", {
  enumerable: true,
  get: function get() {
    return _toObject.default;
  }
});
Object.defineProperty(exports, "toPrimitive", {
  enumerable: true,
  get: function get() {
    return _toPrimitive.default;
  }
});
Object.defineProperty(exports, "toPropertyKey", {
  enumerable: true,
  get: function get() {
    return _toPropertyKey.default;
  }
});
Object.defineProperty(exports, "toString", {
  enumerable: true,
  get: function get() {
    return _toString.default;
  }
});
Object.defineProperty(exports, "toStringTag", {
  enumerable: true,
  get: function get() {
    return _toStringTag.default;
  }
});
Object.defineProperty(exports, "toUint24", {
  enumerable: true,
  get: function get() {
    return _toUint.default;
  }
});
Object.defineProperty(exports, "toWholeNumber", {
  enumerable: true,
  get: function get() {
    return _toWholeNumber.default;
  }
});
Object.defineProperty(exports, "union", {
  enumerable: true,
  get: function get() {
    return _union.default;
  }
});
Object.defineProperty(exports, "uniq", {
  enumerable: true,
  get: function get() {
    return _uniq.default;
  }
});
Object.defineProperty(exports, "MAX_SAFE_INTEGER", {
  enumerable: true,
  get: function get() {
    return _MAX_SAFE_INTEGER.default;
  }
});

var _accumulate = _interopRequireDefault(__webpack_require__(113));

var _all = _interopRequireDefault(__webpack_require__(124));

var _any = _interopRequireDefault(__webpack_require__(125));

var _apply = _interopRequireDefault(__webpack_require__(126));

var _arity = _interopRequireDefault(__webpack_require__(127));

var _assign = _interopRequireDefault(__webpack_require__(77));

var _assertIsFunction = _interopRequireDefault(__webpack_require__(133));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(45));

var _assertIs = _interopRequireDefault(__webpack_require__(90));

var _attempt = _interopRequireDefault(__webpack_require__(49));

var _bind = _interopRequireDefault(__webpack_require__(134));

var _call = _interopRequireDefault(__webpack_require__(135));

var _callFunctionOrIdentity = _interopRequireDefault(__webpack_require__(136));

var _capitalizeFirst = _interopRequireDefault(__webpack_require__(137));

var _capitalize = _interopRequireDefault(__webpack_require__(138));

var _clamp = _interopRequireDefault(__webpack_require__(91));

var _constant = _interopRequireDefault(__webpack_require__(140));

var _defaultToOneOf = _interopRequireDefault(__webpack_require__(141));

var _defineValidatorProperties = _interopRequireDefault(__webpack_require__(142));

var _defineValidatorProperty = _interopRequireDefault(__webpack_require__(95));

var _delayPromiseX = _interopRequireDefault(__webpack_require__(144));

var _difference = _interopRequireDefault(__webpack_require__(145));

var _drop = _interopRequireDefault(__webpack_require__(146));

var _find = _interopRequireDefault(__webpack_require__(147));

var _findIndex = _interopRequireDefault(__webpack_require__(148));

var _getAt = _interopRequireDefault(__webpack_require__(149));

var _getFunctionName = _interopRequireDefault(__webpack_require__(150));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(151));

var _head = _interopRequireDefault(__webpack_require__(152));

var _identity = _interopRequireDefault(__webpack_require__(154));

var _includes = _interopRequireDefault(__webpack_require__(155));

var _intersection = _interopRequireDefault(__webpack_require__(156));

var _intToRGB = _interopRequireDefault(__webpack_require__(158));

var _isArrayLikeObject = _interopRequireDefault(__webpack_require__(159));

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

var _isBinary = _interopRequireDefault(__webpack_require__(85));

var _isBooleanType = _interopRequireDefault(__webpack_require__(103));

var _isBooleanObject = _interopRequireDefault(__webpack_require__(160));

var _isClassSupported = _interopRequireDefault(__webpack_require__(83));

var _isCountingNumber = _interopRequireDefault(__webpack_require__(161));

var _isDateObject = _interopRequireDefault(__webpack_require__(84));

var _isDOMNode = _interopRequireDefault(__webpack_require__(162));

var _isError = _interopRequireDefault(__webpack_require__(163));

var _isFalsey = _interopRequireDefault(__webpack_require__(165));

var _isFunction = _interopRequireDefault(__webpack_require__(166));

var _isFunctionType = _interopRequireDefault(__webpack_require__(51));

var _isHex = _interopRequireDefault(__webpack_require__(167));

var _isInteger = _interopRequireDefault(__webpack_require__(89));

var _isLowerCased = _interopRequireDefault(__webpack_require__(168));

var _isNil = _interopRequireDefault(__webpack_require__(7));

var _isNull = _interopRequireDefault(__webpack_require__(37));

var _isNumberObject = _interopRequireDefault(__webpack_require__(169));

var _isNumberFinite = _interopRequireDefault(__webpack_require__(170));

var _isNumberNaN = _interopRequireDefault(__webpack_require__(171));

var _isNumberType = _interopRequireDefault(__webpack_require__(33));

var _isObjectLikeNotArray = _interopRequireDefault(__webpack_require__(172));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

var _isObjectType = _interopRequireDefault(__webpack_require__(52));

var _isOctal = _interopRequireDefault(__webpack_require__(87));

var _isPopulatedString = _interopRequireDefault(__webpack_require__(174));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

var _isRegex = _interopRequireDefault(__webpack_require__(41));

var _isSafeInteger = _interopRequireDefault(__webpack_require__(68));

var _isSearchIndex = _interopRequireDefault(__webpack_require__(175));

var _isSpaced = _interopRequireDefault(__webpack_require__(104));

var _isStringTypeOrInteger = _interopRequireDefault(__webpack_require__(176));

var _isStringTypeOrNumberType = _interopRequireDefault(__webpack_require__(177));

var _isStringType = _interopRequireDefault(__webpack_require__(43));

var _isString = _interopRequireDefault(__webpack_require__(5));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__(178));

var _isSymbolType = _interopRequireDefault(__webpack_require__(30));

var _isSymbol = _interopRequireDefault(__webpack_require__(48));

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(39));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(50));

var _isTruthy = _interopRequireDefault(__webpack_require__(180));

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

var _isUnderscored = _interopRequireDefault(__webpack_require__(181));

var _isUniq = _interopRequireDefault(__webpack_require__(182));

var _isUpperCased = _interopRequireDefault(__webpack_require__(183));

var _isValidHtml4Id = _interopRequireDefault(__webpack_require__(184));

var _isValidHtml5Id = _interopRequireDefault(__webpack_require__(185));

var _isWhiteSpaced = _interopRequireDefault(__webpack_require__(186));

var _isWholeNumber = _interopRequireDefault(__webpack_require__(44));

var _kebabJoin = _interopRequireDefault(__webpack_require__(187));

var _last = _interopRequireDefault(__webpack_require__(188));

var _methodize = _interopRequireDefault(__webpack_require__(189));

var _modulo = _interopRequireDefault(__webpack_require__(101));

var _negate = _interopRequireDefault(__webpack_require__(190));

var _nilifyIs = _interopRequireDefault(__webpack_require__(96));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(53));

var _noop = _interopRequireDefault(__webpack_require__(191));

var _numberToDecimalString = _interopRequireDefault(__webpack_require__(107));

var _numberFormat = _interopRequireDefault(__webpack_require__(192));

var _parseDecimal = _interopRequireDefault(__webpack_require__(195));

var _parseInteger = _interopRequireDefault(__webpack_require__(196));

var _partial = _interopRequireDefault(__webpack_require__(197));

var _partialRight = _interopRequireDefault(__webpack_require__(199));

var _padStart = _interopRequireDefault(__webpack_require__(102));

var _regexpEscape = _interopRequireDefault(__webpack_require__(201));

var _replaceComments = _interopRequireDefault(__webpack_require__(59));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _sameValue = _interopRequireDefault(__webpack_require__(93));

var _sameValueZero = _interopRequireDefault(__webpack_require__(92));

var _shuffle = _interopRequireDefault(__webpack_require__(202));

var _sign = _interopRequireDefault(__webpack_require__(203));

var _sift = _interopRequireDefault(__webpack_require__(204));

var _stringTest = _interopRequireDefault(__webpack_require__(205));

var _stubArray = _interopRequireDefault(__webpack_require__(78));

var _stubFalse = _interopRequireDefault(__webpack_require__(206));

var _stubObject = _interopRequireDefault(__webpack_require__(207));

var _stubString = _interopRequireDefault(__webpack_require__(208));

var _stubTrue = _interopRequireDefault(__webpack_require__(110));

var _squeeze = _interopRequireDefault(__webpack_require__(209));

var _surround = _interopRequireDefault(__webpack_require__(97));

var _trim = _interopRequireDefault(__webpack_require__(211));

var _trimLeft = _interopRequireDefault(__webpack_require__(212));

var _trimRight = _interopRequireDefault(__webpack_require__(213));

var _trunc = _interopRequireDefault(__webpack_require__(214));

var _truncate = _interopRequireDefault(__webpack_require__(216));

var _toBoolean = _interopRequireDefault(__webpack_require__(105));

var _toInteger = _interopRequireDefault(__webpack_require__(218));

var _toNumber = _interopRequireDefault(__webpack_require__(219));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _toPrimitive = _interopRequireDefault(__webpack_require__(61));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(47));

var _toString = _interopRequireDefault(__webpack_require__(220));

var _toStringTag = _interopRequireDefault(__webpack_require__(38));

var _toUint = _interopRequireDefault(__webpack_require__(100));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _union = _interopRequireDefault(__webpack_require__(221));

var _uniq = _interopRequireDefault(__webpack_require__(222));

var _MAX_SAFE_INTEGER = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accumulate;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _accumulate2 = _interopRequireDefault(__webpack_require__(67));

var _fromIndex2 = _interopRequireDefault(__webpack_require__(88));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function accumulate(array, callback) {
  var object = (0, _toObject.default)(array);
  var length = (0, _toWholeNumber.default)(object.length);

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (!rest.length && length < 1) {
    throw new TypeError('accumulate of empty array with no initial value');
  }

  var start = (0, _fromIndex2.default)(object, rest[1]);
  return (0, _accumulate2.default)(object, (0, _assertIsFunction2.default)(callback), (rest.length ? rest : object)[start], rest.length ? start : start + 1);
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(115);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(73)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _normalizeSpace;

var _trim2 = _interopRequireDefault(__webpack_require__(40));

var _whitespace2 = _interopRequireDefault(__webpack_require__(31));

var _replace2 = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_normalizeSpace");

var PRE = '[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST, 'g');

function _normalizeSpace(string) {
  return (0, _replace2.default)((0, _trim2.default)(string), whiteSpace, ' ');
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_concat");

var _default = (0, _methodize2.default)(Array.prototype.concat);

exports.default = _default;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_propertyIsEnumerable");

var _default = (0, _methodize2.default)(Object.prototype.propertyIsEnumerable);

exports.default = _default;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_indexOf");

var _default = (0, _methodize2.default)(Array.prototype.indexOf);

exports.default = _default;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_fromCharCode");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromCharCode
 */
var _default = String.fromCharCode;
exports.default = _default;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_defineProperties");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperties
 */
var _default = Object.defineProperties;
exports.default = _default;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_Infinity");

/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Infinity
 */
var _default = 1 / 0;

exports.default = _default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_getOwnPropertyDescriptor");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getOwnPropertyDescriptor
 */
var _default = Object.getOwnPropertyDescriptor;
exports.default = _default;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _all2 = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function all(array, callback) {
  (0, _all2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction2.default)(callback), (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = any;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _any2 = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function any(array, callback) {
  return (0, _any2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction2.default)(callback), (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apply;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _apply2 = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function apply(fn) {
  for (var _len = arguments.length, applyArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    applyArgs[_key - 1] = arguments[_key];
  }

  return _apply2.default.apply(void 0, [(0, _assertIsFunction2.default)(fn)].concat(applyArgs));
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arity;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _arity2 = _interopRequireDefault(__webpack_require__(128));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function arity(fn) {
  return (0, _arity2.default)((0, _assertIsFunction2.default)(fn), (0, _toWholeNumber.default)((arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length));
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arity;

var _apply2 = _interopRequireDefault(__webpack_require__(13));

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _bound2 = _interopRequireDefault(__webpack_require__(69));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_arity");

function _arity(fn) {
  var length = (arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length;
  var bound;

  var binder = function _binder() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = (0, _apply2.default)(fn, this, (0, _slice2.default)(args, 0, length));
    /* eslint-disable-next-line babel/no-invalid-this */

    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound2.default)(binder, 'Arity', fn.prototype, length);
  return bound;
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _argsToArray;

var _push2 = _interopRequireDefault(__webpack_require__(27));

var _all2 = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_argsToArray");

function _argsToArray(args) {
  var array = [];

  var iteratee = function _iteratee(arg) {
    (0, _push2.default)(array, arg);
  };

  (0, _all2.default)(args, iteratee);
  return array;
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createArgList;

var _String2 = _interopRequireDefault(__webpack_require__(74));

var _join2 = _interopRequireDefault(__webpack_require__(35));

var _push2 = _interopRequireDefault(__webpack_require__(27));

var _all2 = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_createArgList");

var PRE = '$_';
var POST = '_$';

function _createArgList(length) {
  var array = [];

  var iteratee = function _iteratee(unused, index) {
    (0, _push2.default)(array, PRE + (0, _String2.default)(index) + POST);
  };

  (0, _all2.default)({
    length: length
  }, iteratee);
  return (0, _join2.default)(array, ',');
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_create");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _create
 */
var _default = Object.create;
exports.default = _default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_Function");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Function
 */
function fn() {}

var _default = fn.constructor;
exports.default = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _assertIsFunction.default;
  }
});

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _bind2 = _interopRequireDefault(__webpack_require__(76));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function bind(fn) {
  for (var _len = arguments.length, bindArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }

  return _bind2.default.apply(void 0, [(0, _assertIsFunction2.default)(fn)].concat(bindArgs));
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _call2 = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function call(fn) {
  for (var _len = arguments.length, callArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callArgs[_key - 1] = arguments[_key];
  }

  return _call2.default.apply(void 0, [(0, _assertIsFunction2.default)(fn)].concat(callArgs));
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callFunctionOrIdentity;

var _apply2 = _interopRequireDefault(__webpack_require__(13));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(45));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _isNil = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var logger = __webpack_require__(0).get("caboodle-x");

var requireIsObject = function _requireIsObject(value) {
  return (0, _assertIsObjectLike.default)(value, 'CreateListFromArrayLike called on non-object');
};

var getArgsArray = function _getArgsArray(value) {
  return (0, _isNil.default)(value) ? [] : (0, _slice2.default)(requireIsObject(value));
};
/**
 * Invoke a function and return the result or return the identity argument unchanged.
 *
 * @param {Function|*} fnOrValue - The function to invoke or any other value.
 * @param {Array} rest - The remaining arguments.
 * @param {Array} [rest.argsArray=[]] - The argument(s) to use when invoking a given function.
 * @param {*} [rest.thisArg=undefined] - The context to use when invoking a given function.
 * @returns {*} The result of the invoked function or the identity argument unchanged.
 */


function callFunctionOrIdentity(fnOrValue) {
  if ((0, _isFunction2.default)(fnOrValue)) {
    var argsArray = getArgsArray(arguments.length <= 1 ? undefined : arguments[1]);
    return (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? (0, _apply2.default)(fnOrValue, arguments.length <= 2 ? undefined : arguments[2], argsArray) : fnOrValue.apply(void 0, _toConsumableArray(argsArray));
  }

  return fnOrValue;
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeFirst;

var _charAt2 = _interopRequireDefault(__webpack_require__(34));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(46));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function capitalizeFirst(string) {
  var str = (0, _toString2.default)(string);
  return (0, _toUpperCase2.default)((0, _charAt2.default)(str, 0)) + (0, _stringSlice2.default)(str, 1);
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalize;

var _charAt2 = _interopRequireDefault(__webpack_require__(34));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(58));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(46));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function capitalize(string) {
  var str = (0, _toString2.default)(string);
  return (0, _toUpperCase2.default)((0, _charAt2.default)(str, 0)) + (0, _toLowerCase2.default)((0, _stringSlice2.default)(str, 1));
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _clamp;

var _isNaN2 = _interopRequireDefault(__webpack_require__(22));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_clamp");

var max = Math.max,
    min = Math.min;

function _clamp(value, lower, upper) {
  if ((0, _isNaN2.default)(value) || (0, _isNaN2.default)(lower) || (0, _isNaN2.default)(upper)) {
    return _NaN2.default;
  }

  return min(max(value, lower), upper);
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constant;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module constant
 */
function constant(value) {
  return function boundConstant() {
    return value;
  };
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultToOneOf;

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _last2 = _interopRequireDefault(__webpack_require__(94));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * Tests if a comparate exists in a list of comparates an then returns the comparate if there
 * is a match; otherwise returns the last comparates value or fallback value if supplied.
 *
 * @param {Array} [comparates=[]] - An array of values.
 * @param {*} comparate - The value to compare against the supplied list of comparates.
 * @param {Array} fallbackArg - The rest of the arguments array.
 * @param {*} [fallbackArg.fallback=comparates[last]] - The returned value if no match exists.
 * @returns {*} - The comparate upon a match; otherwise the fallback value.
 */
function defaultToOneOf(comparates, comparate) {
  (0, _requireObjectCoercible.default)(comparates);
  var fallback = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : (0, _last2.default)(comparates);
  return (0, _includes2.default)(comparates, comparate) ? comparate : fallback;
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperties;

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(45));

var _defineValidatorProperty = _interopRequireDefault(__webpack_require__(95));

var _toObject = _interopRequireDefault(__webpack_require__(15));

var _all2 = _interopRequireDefault(__webpack_require__(24));

var _keys2 = _interopRequireDefault(__webpack_require__(80));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(47));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function defineValidatorProperties(object, properties) {
  (0, _assertIsObjectLike.default)(object);
  var props = (0, _toObject.default)(properties);

  var callback = function _callback(currentValue) {
    (0, _defineValidatorProperty.default)(object, (0, _toPropertyKey.default)(currentValue), props[currentValue]);
  };

  (0, _all2.default)((0, _keys2.default)(props), callback);
  return object;
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_defineProperty");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperty
 */
var _default = Object.defineProperty;
exports.default = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2018-present",
  "date": "2018-11-25T01:39:57.865Z",
  "describe": "",
  "description": "Create a delayed promise.",
  "file": "delay-promise-x.min.js",
  "hash": "7f0b35b3798d0e3d81d4",
  "license": "MIT",
  "version": "1.0.0"
}
*/
!function(e,t){ true?module.exports=t():undefined}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function t(e){var n=(0,f.default)((0,i.default)(e),Number.MAX_SAFE_INTEGER);if(!(arguments.length<=1)&&arguments.length-1){var r=function(e){return t(n).then((0,u.default)(e))};return Promise.resolve(arguments.length<=1?void 0:arguments[1]).then(r)}var o=function(e,t){try{setTimeout(e,n)}catch(e){t(e)}};return new Promise(o)};var u=r(n(1)),i=r(n(2)),f=r(n(4));function r(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(3);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=o(n))==n?n:0),void 0!==t&&(t=(t=o(t))==t?t:0),r(o(e),t,n)}},function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=t<=e?e:t)),e}},function(e,t){e.exports=function(e){return e}}])});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(73)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = difference;

var _sift2 = _interopRequireDefault(__webpack_require__(72));

var _any2 = _interopRequireDefault(__webpack_require__(25));

var _all2 = _interopRequireDefault(__webpack_require__(24));

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {Array.<Array>} [excludes] - The values to exclude.
 * @throws {TypeError} If any excludes value is null or undefined.
 * @returns {Array} Returns the new array of filtered values.
 */
function difference(array) {
  for (var _len = arguments.length, excludes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    excludes[_key - 1] = arguments[_key];
  }

  (0, _requireObjectCoercible.default)(array);
  (0, _all2.default)(excludes, _requireObjectCoercible.default);

  var siftPredicate = function _siftPredicate(value) {
    var includesPredicate = function _includesPredicate(exclude) {
      return (0, _includes2.default)(exclude, value);
    };

    return !(0, _any2.default)(excludes, includesPredicate);
  };

  return (0, _sift2.default)(array, siftPredicate);
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function drop(array) {
  if (!(0, _isArrayLike.default)((0, _requireObjectCoercible.default)(array))) {
    /* eslint-disable-next-line no-void */
    return void 0;
  }

  var start = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toWholeNumber.default)(arguments.length <= 1 ? undefined : arguments[1]) : 1;
  return ((0, _isString.default)(array) ? _stringSlice2.default : _slice2.default)(array, start);
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _find2 = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function find(array, callback) {
  return (0, _find2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction2.default)(callback), (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2])).value;
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _find2 = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function findIndex(array, callback) {
  return (0, _find2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction2.default)(callback), (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2])).index;
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAt;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _getAt2 = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function getAt(array) {
  for (var _len = arguments.length, position = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _getAt2.default.apply(void 0, [(0, _requireObjectCoercible.default)(array)].concat(position));
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFunctionName;

var _match2 = _interopRequireDefault(__webpack_require__(98));

var _functionToString2 = _interopRequireDefault(__webpack_require__(75));

var _isFunction2 = _interopRequireDefault(__webpack_require__(8));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(53));

var _replaceComments = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var ANONYMOUS = 'anonymous';

function test1() {}

var getName;

if (test1.name === 'test1') {
  /* eslint-disable-next-line no-new-func */
  var createsAnonymous = Function().name === ANONYMOUS;

  if (createsAnonymous) {
    getName = function _getName(fn) {
      return fn.name === ANONYMOUS ? '' : fn.name;
    };
  } else {
    getName = function _getName(fn) {
      return fn.name;
    };
  }
} else {
  var reName = /^(?:async )?(?:function|class) ?(?:\* )?([\w$]+)/i;

  getName = function _getName(fn) {
    var match;

    try {
      match = (0, _match2.default)((0, _normalizeSpace.default)((0, _replaceComments.default)((0, _functionToString2.default)(fn), ' ')), reName);

      if (match) {
        var name = match[1];
        return name === ANONYMOUS ? '' : name;
      }
    } catch (ignore) {
      /* ignore */
    }

    return '';
  };
}
/**
 * This method returns the name of the function, or `undefined` if not
 * a function.
 *
 * @param {Function} fn - The function to get the name of.
 * @returns {undefined|string} The name of the function,  or `undefined` if
 *  not a function.
 */


function getFunctionName(fn) {
  /* eslint-disable-next-line no-void */
  return (0, _isFunction2.default)(fn, true) ? getName(fn) : void 0;
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasOwnProperty;

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(47));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function hasOwnProperty(object, property) {
  return (0, _hasOwnProperty2.default)((0, _requireObjectCoercible.default)(object), (0, _toPropertyKey.default)(property));
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _head2 = _interopRequireDefault(__webpack_require__(153));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function head(array) {
  return (0, _head2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _head;

var _getAt2 = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_head");

function _head(array) {
  return (0, _getAt2.default)(array, 0);
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module identity
 */
function identity(arg) {
  return arg;
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = includes;

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function includes(array, searchElement) {
  return (0, _includes2.default)((0, _requireObjectCoercible.default)(array), searchElement, (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersection;

var _sift2 = _interopRequireDefault(__webpack_require__(72));

var _accumulate2 = _interopRequireDefault(__webpack_require__(67));

var _any2 = _interopRequireDefault(__webpack_require__(25));

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _isNil = _interopRequireDefault(__webpack_require__(7));

var _shift2 = _interopRequireDefault(__webpack_require__(157));

var _push2 = _interopRequireDefault(__webpack_require__(27));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var logger = __webpack_require__(0).get("caboodle-x");

var isNotNil = function _isNotNil(value) {
  return !(0, _isNil.default)(value);
};
/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */


function intersection() {
  var _this = this;

  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var remaining = (0, _sift2.default)((0, _requireObjectCoercible.default)(arrays), isNotNil);

  if (remaining.length < 1) {
    return [];
  }

  return (0, _accumulate2.default)((0, _shift2.default)(remaining), function (acc, value) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var isExcluded = !(0, _any2.default)(remaining, function (array) {
      _newArrowCheck(this, _this2);

      return !(0, _includes2.default)((0, _requireObjectCoercible.default)(array), value);
    }.bind(this));

    if (isExcluded && !(0, _includes2.default)(acc, value)) {
      (0, _push2.default)(acc, value);
    }

    return acc;
  }.bind(this), []);
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_shift");

var _default = (0, _methodize2.default)(Array.prototype.shift);

exports.default = _default;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intToRGB;

var _numberToString2 = _interopRequireDefault(__webpack_require__(99));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(46));

var _toUint = _interopRequireDefault(__webpack_require__(100));

var _padStart = _interopRequireDefault(__webpack_require__(102));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var HASH = '#';
/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 */

function intToRGB(i) {
  return HASH + (0, _toUpperCase2.default)((0, _padStart.default)((0, _numberToString2.default)((0, _toUint.default)(i), 16), 6, '0'));
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLikeObject;

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isArrayLikeObject(value) {
  return (0, _isObjectLike.default)(value) && (0, _isArrayLike.default)(value);
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function tryBooleanObject(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCountingNumber;

var _isWholeNumber = _interopRequireDefault(__webpack_require__(44));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isCountingNumber(value) {
  return (0, _isWholeNumber.default)(value) && value > 0;
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDOMNode;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

var _isBooleanType = _interopRequireDefault(__webpack_require__(103));

var _isNumberType = _interopRequireDefault(__webpack_require__(33));

var _Boolean2 = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/* istanbul ignore next */
var doc = typeof document !== 'undefined' && document;
var documentInheritsNode = false;
var element;
var hasChildNodes;
/* istanbul ignore next */

if (doc) {
  try {
    element = doc.createElement('div');
    hasChildNodes = (0, _methodize2.default)(doc.hasChildNodes);
    documentInheritsNode = (0, _isBooleanType.default)(hasChildNodes(element));
  } catch (ignore) {
    hasChildNodes = null;
    documentInheritsNode = false;
  }
}

var tryAppendChild;
/* istanbul ignore if */

if (element && !documentInheritsNode) {
  hasChildNodes = (0, _methodize2.default)(element.hasChildNodes);
  var cloneNode = (0, _methodize2.default)(element.cloneNode);
  var appendChild = (0, _methodize2.default)(element.appendChild);

  tryAppendChild = function _tryAppendChild(value) {
    return appendChild(cloneNode(element, false), value);
  };
}
/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 */


function isDOMNode(value) {
  if (hasChildNodes && value && (0, _isNumberType.default)(value.nodeType)) {
    if (value === doc) {
      return true;
    }

    try {
      return (0, _isBooleanType.default)(hasChildNodes(value));
    } catch (ignore) {}
    /* ignore */

    /* istanbul ignore if */


    if (!documentInheritsNode) {
      try {
        return (0, _Boolean2.default)(tryAppendChild(value));
      } catch (ignore) {
        /* ignore */
      }
    }
  }

  return false;
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isError;

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(164));

var _toStringTag = _interopRequireDefault(__webpack_require__(38));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var testIsError = function _testIsError(value) {
  return (0, _toStringTag.default)(value) === '[object Error]';
};
/* istanbul ignore next */


if (!testIsError(Error.prototype)) {
  var errorProto = Error.prototype;
  var testStringTag = testIsError;

  testIsError = function _testIsError(value) {
    return value === errorProto || testStringTag(value);
  };
}
/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 */


function isError(value) {
  if (!(0, _isObjectLike.default)(value)) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (testIsError(object)) {
      return true;
    }

    object = (0, _getPrototypeOf2.default)(object);
    maxLoop -= 1;
  }

  return false;
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_getPrototypeOf");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getPrototypeOf
 */
var _default = Object.getPrototypeOf;
exports.default = _default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Boolean2 = _interopRequireDefault(__webpack_require__(29));

var _negate2 = _interopRequireDefault(__webpack_require__(55));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var _default = (0, _negate2.default)(_Boolean2.default);

exports.default = _default;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _isFunction.default;
  }
});

var _isFunction = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHex;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var hexPattern = /^0x[0-9a-f]+$/i;

function isHex(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, hexPattern);
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowerCased;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(58));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isLowerCased(string) {
  return (0, _isString.default)(string) && (0, _toLowerCase2.default)(string) === (0, _toString2.default)(string);
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _isFinite.default;
  }
});

var _isFinite = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _isNaN.default;
  }
});

var _isNaN = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLikeNotArray;

var _isArray2 = _interopRequireDefault(__webpack_require__(173));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isObjectLikeNotArray(value) {
  return !(0, _isArray2.default)(value) && (0, _isObjectLike.default)(value);
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var logger = __webpack_require__(0).get("caboodle-x:_isArray");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isArray
 */
var _default = Array.isArray;
exports.default = _default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPopulatedString;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _trim2 = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isPopulatedString(string) {
  return (0, _isString.default)(string) && (0, _trim2.default)(string).length > 0;
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSearchIndex;

var _isWholeNumber = _interopRequireDefault(__webpack_require__(44));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isSearchIndex(value) {
  return value === -1 || (0, _isWholeNumber.default)(value);
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrInteger;

var _isSafeInteger = _interopRequireDefault(__webpack_require__(68));

var _isStringType = _interopRequireDefault(__webpack_require__(43));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isStringTypeOrInteger(value) {
  return (0, _isStringType.default)(value) || (0, _isSafeInteger.default)(value);
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrNumberType;

var _isStringType = _interopRequireDefault(__webpack_require__(43));

var _isNumberType = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isStringTypeOrNumberType(value) {
  return (0, _isStringType.default)(value) || (0, _isNumberType.default)(value);
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _charCodeAt2 = _interopRequireDefault(__webpack_require__(179));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {Array} args - The arguments array.
 * @param {*} args.char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [args.char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 */
function isSurrogatePair() {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var first;
  var second;
  var char1 = arguments.length <= 0 ? undefined : arguments[0];

  if (argsLength === 1) {
    if ((0, _isString.default)(char1) && char1.length === 2) {
      first = (0, _charCodeAt2.default)(char1, 0);
      second = (0, _charCodeAt2.default)(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    var char2 = arguments.length <= 1 ? undefined : arguments[1];

    if (!(0, _isString.default)(char1) || char1.length !== 1 || !(0, _isString.default)(char2) || char2.length !== 1) {
      return false;
    }

    first = (0, _charCodeAt2.default)(char1, 0);
    second = (0, _charCodeAt2.default)(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_charCodeAt");

var _default = (0, _methodize2.default)(String.prototype.charCodeAt);

exports.default = _default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _toBoolean.default;
  }
});

var _toBoolean = _interopRequireDefault(__webpack_require__(105));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnderscored;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isUnderscored(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, '_');
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUniq;

var _isArrayLike = _interopRequireDefault(__webpack_require__(26));

var _uniq2 = _interopRequireDefault(__webpack_require__(106));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isUniq(array) {
  return (0, _isArrayLike.default)(array) && (0, _uniq2.default)(array).length === array.length;
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUpperCased;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(46));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isUpperCased(string) {
  return (0, _isString.default)(string) && (0, _toUpperCase2.default)(string) === (0, _toString2.default)(string);
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml4Id;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var validPattern = /^[A-Za-z][A-Za-z0-9\-_.]*$/;

function isValidHtml4Id(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, validPattern);
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml5Id;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _isSpaced = _interopRequireDefault(__webpack_require__(104));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function isValidHtml5Id(string) {
  return (0, _isString.default)(string) && string.length > 0 && !(0, _isSpaced.default)(string);
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhiteSpaced;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

var _whitespace2 = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var PRE = '[';
var POST = ']';
var containsWhiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function isWhiteSpaced(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, containsWhiteSpace);
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = kebabJoin;

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _map2 = _interopRequireDefault(__webpack_require__(81));

var _join2 = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function kebabJoin() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return (0, _join2.default)((0, _map2.default)(strings, _toString2.default), '-');
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _last2 = _interopRequireDefault(__webpack_require__(94));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function last(array) {
  return (0, _last2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = methodize;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function methodize(prototypeMethod) {
  return (0, _methodize2.default)((0, _assertIsFunction2.default)(prototypeMethod));
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = negate;

var _negate2 = _interopRequireDefault(__webpack_require__(55));

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function negate(predicate) {
  return (0, _negate2.default)((0, _assertIsFunction2.default)(predicate));
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noop;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module noop
 */
function noop() {}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberFormat;

var _RegExp2 = _interopRequireDefault(__webpack_require__(109));

var _toFixed2 = _interopRequireDefault(__webpack_require__(193));

var _numberToString2 = _interopRequireDefault(__webpack_require__(99));

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _split2 = _interopRequireDefault(__webpack_require__(194));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _join2 = _interopRequireDefault(__webpack_require__(35));

var _isFinite2 = _interopRequireDefault(__webpack_require__(32));

var _toNumber2 = _interopRequireDefault(__webpack_require__(23));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

var _clamp = _interopRequireDefault(__webpack_require__(91));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _numberToDecimalString = _interopRequireDefault(__webpack_require__(107));

var _isNil = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * Format a given number using fixed-point notation, with user specified digit
 * counts and separators. `null` or 'undefined' can be used for optional
 * arguments to denote that the default value is to be used.
 *
 * @param {number} value - The numerical value to be formatted.
 * @param {Array} [rest] - The remaining arguments array.
 * @param {number} [rest.digits=2] - The number of digits to appear after the
 *  decimal point; this may be a value between 0 and 20, inclusive.
 * @param {number} [rest.sectionLength=3] - Length of integer part sections.
 * @param {string} [rest.sectionDelimiter=,] - Integer part section delimiter.
 * @param {string} [rest.decimalDelimiter=.] - Decimal delimiter.
 * @returns {string} The numerical value with the chosen formatting.
 */
function numberFormat(value) {
  var number = (0, _toNumber2.default)(value);

  if (!(0, _isFinite2.default)(number)) {
    return (0, _numberToString2.default)(number);
  } // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.


  var digits = (arguments.length <= 1 ? 0 : arguments.length - 1) > 0 && !(0, _isNil.default)(arguments.length <= 1 ? undefined : arguments[1]) ? (0, _clamp.default)((0, _toInteger2.default)(arguments.length <= 1 ? undefined : arguments[1]), 0, 20) : 2; // Formats a number using fixed-point notation.

  var fixed = (0, _numberToDecimalString.default)((0, _toFixed2.default)(number, digits));

  if (digits > 0) {
    var parts = (0, _split2.default)(fixed, '.');
    parts[1] = (0, _stringSlice2.default)("".concat(parts[1] || '', "00000000000000000000"), 0, digits);
    fixed = (0, _join2.default)(parts, '.');
  }

  var sectionLength = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && !(0, _isNil.default)(arguments.length <= 2 ? undefined : arguments[2]) ? (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2]) : 3; // Formats a number (string) of fixed-point notation, with user delimiters.

  var sectionDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 2 && !(0, _isNil.default)(arguments.length <= 3 ? undefined : arguments[3]) ? (0, _toString2.default)(arguments.length <= 3 ? undefined : arguments[3]) : ',';
  var decimalDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 3 && !(0, _isNil.default)(arguments.length <= 4 ? undefined : arguments[4]) ? (0, _toString2.default)(arguments.length <= 4 ? undefined : arguments[4]) : '.';
  return (0, _replace2.default)(decimalDelimiter === '.' ? fixed : (0, _replace2.default)(fixed, '.', decimalDelimiter), new _RegExp2.default("\\d(?=(\\d{".concat(sectionLength, "})+").concat(digits > 0 ? '\\D' : '$', ")"), 'g'), "$&".concat(sectionDelimiter));
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_toFixed");

var _default = (0, _methodize2.default)(Number.prototype.toFixed);

exports.default = _default;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_split");

var _default = (0, _methodize2.default)(String.prototype.split);

exports.default = _default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDecimal;

var _parseInt2 = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * Parse a string to a decimal value.
 *
 * @param {string} value - The string to be converted to a decimal value.
 * @returns {number} The parsed decimal value.
 */
function parseDecimal(value) {
  return (0, _parseInt2.default)(value, 10);
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _parseInt.default;
  }
});

var _parseInt = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partial;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _partial2 = _interopRequireDefault(__webpack_require__(198));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partial2.default.apply(void 0, [(0, _assertIsFunction2.default)(fn)].concat(partials));
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partial;

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _bound2 = _interopRequireDefault(__webpack_require__(69));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_partial");

function _partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  var bound;

  var binder = function _binder() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = _call2.default.apply(void 0, [fn, this].concat(partials, args));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound2.default)(binder, 'Partial', fn.prototype, fn.length - partials.length);
  return bound;
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partialRight;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _partialRight2 = _interopRequireDefault(__webpack_require__(200));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function partialRight(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partialRight2.default.apply(void 0, [(0, _assertIsFunction2.default)(fn)].concat(partials));
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partialRight;

var _call2 = _interopRequireDefault(__webpack_require__(12));

var _bound2 = _interopRequireDefault(__webpack_require__(69));

var _isPrimitive = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_partialRight");

function _partialRight(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  var bound;

  var binder = function _binder() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = _call2.default.apply(void 0, [fn, this].concat(args, partials));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound2.default)(binder, 'PartialRight', fn.prototype, fn.length);
  return bound;
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regExpEscape;

var _replace2 = _interopRequireDefault(__webpack_require__(14));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var pattern = /[\^$\\.*+?()[\]{}|]/g;
/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */

function regExpEscape(string) {
  return (0, _replace2.default)((0, _requireCoercibleToString.default)(string), pattern, '\\$&');
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shuffle;

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _toObject = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var floor = Math.floor,
    random = Math.random;
/**
 * Creates an array of shuffled values.
 *
 * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * @param {Array|Object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 */

function shuffle(array) {
  var arr = (0, _slice2.default)((0, _toObject.default)(array));
  var index = arr.length;

  while (index > 0) {
    var rnd = floor(random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _sign.default;
  }
});

var _sign = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sift;

var _assertIsFunction2 = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _sift2 = _interopRequireDefault(__webpack_require__(72));

var _toInteger2 = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function sift(array, callback) {
  return (0, _sift2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction2.default)(callback), (0, _toInteger2.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringTest;

var _isRegex = _interopRequireDefault(__webpack_require__(41));

var _stringTest2 = _interopRequireDefault(__webpack_require__(11));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function stringTest(string, patternOrRegex) {
  return (0, _stringTest2.default)((0, _requireCoercibleToString.default)(string), (0, _isRegex.default)(patternOrRegex) ? patternOrRegex : (0, _requireCoercibleToString.default)(patternOrRegex));
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubFalse;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubFalse
 */
function stubFalse() {
  return false;
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubObject;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubObject
 */
function stubObject() {
  return {};
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubString;

var logger = __webpack_require__(0).get("caboodle-x");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubString
 */
function stubString() {
  return '';
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = squeeze;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _squeeze2 = _interopRequireDefault(__webpack_require__(210));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function squeeze(array) {
  return (0, _squeeze2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _squeeze;

var _filter2 = _interopRequireDefault(__webpack_require__(79));

var _stubTrue = _interopRequireDefault(__webpack_require__(110));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_squeeze");

function _squeeze(array) {
  return (0, _filter2.default)(array, _stubTrue.default);
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _trim2 = _interopRequireDefault(__webpack_require__(40));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function trim(string) {
  return (0, _trim2.default)((0, _toString2.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimLeft;

var _trimLeft2 = _interopRequireDefault(__webpack_require__(54));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function trimLeft(string) {
  return (0, _trimLeft2.default)((0, _toString2.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimRight;

var _trimRight2 = _interopRequireDefault(__webpack_require__(82));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function trimRight(string) {
  return (0, _trimRight2.default)((0, _toString2.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _trunc.default;
  }
});

var _trunc = _interopRequireDefault(__webpack_require__(215));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trunc;

var logger = __webpack_require__(0).get("caboodle-x:_trunc");

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trunc
 */
var ceil = Math.ceil,
    floor = Math.floor;

function _trunc(value) {
  return value < 0 ? ceil(value) : floor(value);
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = truncate;

var _isRegex = _interopRequireDefault(__webpack_require__(41));

var _isUndefined = _interopRequireDefault(__webpack_require__(17));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(9));

var _toString2 = _interopRequireDefault(__webpack_require__(3));

var _isObjectLike = _interopRequireDefault(__webpack_require__(16));

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _exec2 = _interopRequireDefault(__webpack_require__(86));

var _join2 = _interopRequireDefault(__webpack_require__(35));

var _stringLastIndexOf2 = _interopRequireDefault(__webpack_require__(217));

var _match2 = _interopRequireDefault(__webpack_require__(98));

var _search2 = _interopRequireDefault(__webpack_require__(108));

var _slice2 = _interopRequireDefault(__webpack_require__(20));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(10));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(62));

var _RegExp2 = _interopRequireDefault(__webpack_require__(109));

var _test2 = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var G_FLAG = 'g';
/* Used to match `RegExp` flags from their coerced string values. */

var matchFlags = /\w*$/;
/* Used to compose unicode character classes. */

var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
var rsComboSymbolsRange = "\\u20d0-\\u20f0";
var rsVarRange = "\\ufe0e\\ufe0f";
/* Used to compose unicode capture groups. */

var rsAstral = "[".concat(rsAstralRange, "]");
var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
var rsNonAstral = "[^".concat(rsAstralRange, "]");
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ = "\\u200d";
/* Used to compose unicode regexes. */

var reOptMod = "".concat(rsModifier, "?");
var rsOptVar = "[".concat(rsVarRange, "]?");
var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat((0, _join2.default)([rsNonAstral, rsRegional, rsSurrPair], '|'), ")").concat(rsOptVar).concat(reOptMod, ")*");
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:".concat((0, _join2.default)(["".concat(rsNonAstral + rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral], '|'), ")");
/*
 * Used to match string symbols
 * @see https://mathiasbynens.be/notes/javascript-unicode
 */

var reComplexSymbol = new _RegExp2.default("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), G_FLAG);
/*
 * Used to detect strings with [zero-width joiners or code points from
 * the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 */

var reHasComplexSymbol = new _RegExp2.default("[".concat(rsZWJ).concat(rsAstralRange).concat(rsComboMarksRange).concat(rsComboSymbolsRange).concat(rsVarRange, "]"));

var hasComplexSymbol = function _hasComplexSymbol(string) {
  return (0, _test2.default)(reHasComplexSymbol, string);
};
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string - The string to inspect.
 * @returns {number} Returns the string size.
 */


var stringSize = function _stringSize(string) {
  if (!string || !hasComplexSymbol(string)) {
    return string.length;
  }

  reComplexSymbol.lastIndex = 0;
  var result = 0;

  while ((0, _test2.default)(reComplexSymbol, string)) {
    result += 1;
  }

  return result;
};
/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @param {string} string - The string to truncate.
 * @param {Object} [options] - The options object.
 * @param {number} [options.length=30] - The maximum string length.
 * @param {string} [options.omission='...'] - The string to indicate text
 * is omitted.
 * @param {RegExp|string} [options.separator] - The separator pattern to
 * truncate to.
 * @returns {string} Returns the truncated string.
 */


function truncate(string, options) {
  var str = (0, _toString2.default)(string);
  var length = 30;
  var omission = '...';
  var separator;

  if ((0, _isObjectLike.default)(options)) {
    if ((0, _hasOwnProperty2.default)(options, 'separator')) {
      separator = (0, _isRegex.default)(options.separator) ? options.separator : (0, _toString2.default)(options.separator);
    }

    if ((0, _hasOwnProperty2.default)(options, 'length')) {
      length = (0, _toWholeNumber.default)(options.length);
    }

    if ((0, _hasOwnProperty2.default)(options, 'omission')) {
      omission = (0, _toString2.default)(options.omission);
    }
  }

  var strLength = str.length;
  var matchSymbols;

  if (hasComplexSymbol(str)) {
    matchSymbols = (0, _match2.default)(str, reComplexSymbol);
    strLength = matchSymbols.length;
  }

  if (length >= strLength) {
    return str;
  }

  var end = length - stringSize(omission);

  if (end < 1) {
    return omission;
  }

  var result = matchSymbols ? (0, _join2.default)((0, _slice2.default)(matchSymbols, 0, end), '') : (0, _stringSlice2.default)(str, 0, end);

  if ((0, _isUndefined.default)(separator)) {
    return result + omission;
  }

  if (matchSymbols) {
    end += result.length - end;
  }

  if ((0, _isRegex.default)(separator)) {
    if ((0, _search2.default)((0, _stringSlice2.default)(str, end), separator)) {
      var substr = result;

      if (!separator.global) {
        separator = new _RegExp2.default(separator.source, (0, _toString2.default)((0, _exec2.default)(matchFlags, separator)) + G_FLAG);
      }

      separator.lastIndex = 0;
      var newEnd;
      var match = (0, _exec2.default)(separator, substr);

      while (match) {
        newEnd = match.index;
        match = (0, _exec2.default)(separator, substr);
      }

      result = (0, _stringSlice2.default)(result, 0, (0, _isUndefined.default)(newEnd) ? end : newEnd);
    }
  } else if ((0, _stringIndexOf2.default)(str, separator, end) !== end) {
    var index = (0, _stringLastIndexOf2.default)(result, separator);

    if (index > -1) {
      result = (0, _stringSlice2.default)(result, 0, index);
    }
  }

  return result + omission;
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x:_stringLastIndexOf");

var _default = (0, _methodize2.default)(String.prototype.lastIndexOf);

exports.default = _default;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _toInteger.default;
  }
});

var _toInteger = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _toNumber.default;
  }
});

var _toNumber = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _toString.default;
  }
});

var _toString = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = union;

var _accumulate2 = _interopRequireDefault(__webpack_require__(67));

var _includes2 = _interopRequireDefault(__webpack_require__(28));

var _push2 = _interopRequireDefault(__webpack_require__(27));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

var addNotIncluded = function _addNotIncluded(accumulator, value) {
  if (!(0, _includes2.default)(accumulator, value)) {
    (0, _push2.default)(accumulator, value);
  }

  return accumulator;
};

var reduceArgs = function _reduceArgs(accumulator, array) {
  return (0, _accumulate2.default)((0, _requireObjectCoercible.default)(array), addNotIncluded, accumulator);
};
/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {Array.<Array>} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */


function union() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return (0, _accumulate2.default)(arrays, reduceArgs, []);
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _uniq2 = _interopRequireDefault(__webpack_require__(106));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(0).get("caboodle-x");

function uniq(array) {
  return (0, _uniq2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=caboodle-x.js.map