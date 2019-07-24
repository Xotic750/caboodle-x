/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2018-present",
  "date": "2019-07-24T19:03:21.794Z",
  "describe": "",
  "description": "A collection of modern utils.",
  "file": "caboodle-x.js",
  "hash": "57ff4b364f4ba8f437f4",
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
		exports["caboodleX"] = factory();
	else
		root["caboodleX"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(8)();

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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(11);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(12),
    toNumber = __webpack_require__(13);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(10);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./dist/esm/.internal/_call.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _call
 */
/* harmony default export */ var _call = (Function.call.bind(Function.call));

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(1);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./dist/esm/.internal/_String.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _String
 */
/* harmony default export */ var _String = (''.constructor);

// CONCATENATED MODULE: ./dist/esm/.internal/_toString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toString
 */


function _toString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return _String(value);
}

// CONCATENATED MODULE: ./dist/esm/isUndefined.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUndefined
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

// CONCATENATED MODULE: ./dist/esm/isNull.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNull
 */
function isNull(value) {
  return value === null;
}

// CONCATENATED MODULE: ./dist/esm/isNil.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNil
 */


function isNil(value) {
  return isUndefined(value) || isNull(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_assertIs.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _assertIs
 */




var toMessage = function _toMessage(message, fallback) {
  return isNil(message) ? fallback : _toString(message);
};

function _assertIs(predicate, defaultMessage) {
  var defMsg = toMessage(defaultMessage, 'Not a valid value');
  return function assertIsBound(value, customMessage) {
    /* eslint-disable-next-line babel/no-invalid-this */
    if (_call(predicate, this, value)) {
      return value;
    }

    throw new TypeError(toMessage(customMessage, defMsg));
  };
}

// CONCATENATED MODULE: ./dist/esm/.internal/_bind.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bind
 */
/* harmony default export */ var _bind = (Function.call.bind(Function.bind));

// CONCATENATED MODULE: ./dist/esm/.internal/_methodize.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _methodize
 */

var call = Function.call;
function _methodize(prototypeMethod) {
  return _bind(call, prototypeMethod);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_functionToString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _functionToString
 */

/* harmony default export */ var _functionToString = (_methodize(Function.prototype.toString));

// CONCATENATED MODULE: ./dist/esm/.internal/_test.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _test
 */

/* harmony default export */ var _test = (_methodize(RegExp.prototype.test));

// CONCATENATED MODULE: ./dist/esm/.internal/_apply.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _apply
 */
/* harmony default export */ var _apply = (Function.call.bind(Function.apply));

// CONCATENATED MODULE: ./dist/esm/attempt.js
/**
 * @file Invokes function, returning an object of the results.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module attempt
 */

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [rest] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */

function attempt(fn) {
  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: _apply(fn, this, rest)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}

// CONCATENATED MODULE: ./dist/esm/.internal/_Boolean.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Boolean
 */
/* harmony default export */ var _Boolean = (true.constructor);

// CONCATENATED MODULE: ./dist/esm/toStringTag.js
/**
 * @file Get an object's ES6 @@toStringTag.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

/* harmony default export */ var toStringTag = (_methodize(Object.prototype.toString));

// CONCATENATED MODULE: ./dist/esm/isSymbolType.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolType
 */
function isSymbolType(value) {
  return _typeof(value) === 'symbol';
}

// CONCATENATED MODULE: ./dist/esm/isSymbolSupported.js
/**
 * @file Tests if ES6 Symbol is supported.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolSupported
 */

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 */

/* eslint-disable-next-line compat/compat */

/* harmony default export */ var isSymbolSupported = (typeof Symbol === 'function' && isSymbolType(Symbol('x')));

// CONCATENATED MODULE: ./dist/esm/isToStringTagSupported.js
function isToStringTagSupported_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isToStringTagSupported_typeof = function _typeof(obj) { return typeof obj; }; } else { isToStringTagSupported_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isToStringTagSupported_typeof(obj); }

/**
 * @file Tests if ES6 @@toStringTag is supported.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isToStringTagSupported
 */


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var isToStringTagSupported = (isSymbolSupported && isToStringTagSupported_typeof(isSymbolType(Symbol.toStringTag)));
/* eslint-disable-line compat/compat */

// CONCATENATED MODULE: ./dist/esm/isFunctionType.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFunctionType
 */
function isFunctionType(value) {
  return typeof value === 'function';
}

// CONCATENATED MODULE: ./dist/esm/isObjectType.js
function isObjectType_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isObjectType_typeof = function _typeof(obj) { return typeof obj; }; } else { isObjectType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isObjectType_typeof(obj); }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectType
 */
function isObjectType(value) {
  return isObjectType_typeof(value) === 'object';
}

// CONCATENATED MODULE: ./dist/esm/isPrimitive.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPrimitive
 */



function isPrimitive(value) {
  return isNull(value) || !isFunctionType(value) && !isObjectType(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_replace.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _replace
 */

/* harmony default export */ var _replace = (_methodize(String.prototype.replace));

// CONCATENATED MODULE: ./dist/esm/.internal/_negate.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _negate
 */

function _negate(predicate) {
  return function boundNegate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return !_apply(predicate, this, args);
  };
}

// CONCATENATED MODULE: ./dist/esm/requireObjectCoercible.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireObjectCoercible
 */



/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

/* harmony default export */ var requireObjectCoercible = (_assertIs(_negate(isNil), 'Cannot call method on null or undefined'));

// CONCATENATED MODULE: ./dist/esm/.internal/_Object.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Object
 */
/* harmony default export */ var _Object = ({}.constructor);

// CONCATENATED MODULE: ./dist/esm/toObject.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toObject
 */


function toObject(value) {
  return _Object(requireObjectCoercible(value));
}

// CONCATENATED MODULE: ./dist/esm/stubArray.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubArray
 */
function stubArray() {
  return [];
}

// CONCATENATED MODULE: ./dist/esm/.internal/_concat.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _concat
 */

/* harmony default export */ var _concat = (_methodize(Array.prototype.concat));

// CONCATENATED MODULE: ./dist/esm/.internal/_filter.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _filter
 */

/* harmony default export */ var _filter = (_methodize(Array.prototype.filter));

// CONCATENATED MODULE: ./dist/esm/.internal/_reduce.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _reduce
 */

/* harmony default export */ var _reduce = (_methodize(Array.prototype.reduce));

// CONCATENATED MODULE: ./dist/esm/.internal/_keys.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _keys
 */
/* harmony default export */ var _keys = (Object.keys);

// CONCATENATED MODULE: ./dist/esm/.internal/_propertyIsEnumerable.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _propertyIsEnumerable
 */

/* harmony default export */ var _propertyIsEnumerable = (_methodize(Object.prototype.propertyIsEnumerable));

// CONCATENATED MODULE: ./dist/esm/assign.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assign
 */










/* istanbul ignore next */

var getOwnPropertySymbols = isFunctionType(_Object.getOwnPropertySymbols) ? _Object.getOwnPropertySymbols : stubArray;

var getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  var isEnumerable = function _isEnumerable(symbol) {
    return _propertyIsEnumerable(target, symbol);
  };

  return _filter(getOwnPropertySymbols(target), isEnumerable);
};

var reducer = function _reducer(tgt, source) {
  if (isNil(source)) {
    return tgt;
  }

  var object = _Object(source);

  var assigner = function _assigner(tar, key) {
    tar[key] = object[key];
    return tar;
  };

  return _reduce(_concat(_keys(object), getOwnEnumerablePropertySymbols(object)), assigner, tgt);
};
/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {Array} rest - The rest of the arguments array.
 * @param {...*} [rest.source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {object} The target object.
 */


function assign_assign(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return _reduce(rest, reducer, toObject(target));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_indexOf.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _indexOf
 */

/* harmony default export */ var _indexOf = (_methodize(Array.prototype.indexOf));

// CONCATENATED MODULE: ./dist/esm/.internal/_toLowerCase.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toLowerCase
 */

/* harmony default export */ var _toLowerCase = (_methodize(String.prototype.toLowerCase));

// CONCATENATED MODULE: ./dist/esm/.internal/_fromCharCode.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromCharCode
 */
/* harmony default export */ var _fromCharCode = (String.fromCharCode);

// CONCATENATED MODULE: ./dist/esm/.internal/_map.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _map
 */

/* harmony default export */ var _map = (_methodize(Array.prototype.map));

// CONCATENATED MODULE: ./dist/esm/.internal/_slice.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _slice
 */

/* harmony default export */ var _slice = (_methodize(Array.prototype.slice));

// CONCATENATED MODULE: ./dist/esm/.internal/_defineProperties.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperties
 */
/* harmony default export */ var _defineProperties = (Object.defineProperties);

// CONCATENATED MODULE: ./dist/esm/.internal/_whitespace.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _whitespace
 */









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
  var index = _indexOf(types, _toLowerCase(_toString(type)));

  var prop = index === -1 ? types[last] : types[index];

  var iteratee = function _iteratee(string, record) {
    return record[prop] ? string + _fromCharCode(record.code) : string;
  };

  return _reduce(list, iteratee, '');
}

var copier = function _copier(record) {
  return assign_assign({}, record);
};

_defineProperties(build, {
  types: {
    get: function get() {
      return _slice(types);
    }
  },
  list: {
    get: function get() {
      return _map(list, copier);
    }
  }
});

// CONCATENATED MODULE: ./dist/esm/.internal/_trimLeft.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimLeft
 */


var PRE = '^[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + build() + POST);
function _trimLeft(string) {
  return _replace(string, whiteSpace, '');
}

// CONCATENATED MODULE: ./dist/esm/.internal/_trimRight.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimRight
 */


var _trimRight_PRE = '[';
var _trimRight_POST = ']+$';
var _trimRight_whiteSpace = new RegExp(_trimRight_PRE + build() + _trimRight_POST);
function _trimRight(string) {
  return _replace(string, _trimRight_whiteSpace, '');
}

// CONCATENATED MODULE: ./dist/esm/.internal/_trim.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trim
 */


function _trim(string) {
  return _trimRight(_trimLeft(string));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_normalizeSpace.js
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _normalizeSpace
 */



var _normalizeSpace_PRE = '[';
var _normalizeSpace_POST = ']+';
var _normalizeSpace_whiteSpace = new RegExp(_normalizeSpace_PRE + build() + _normalizeSpace_POST, 'g');
function _normalizeSpace(string) {
  return _replace(_trim(string), _normalizeSpace_whiteSpace, ' ');
}

// CONCATENATED MODULE: ./dist/esm/requireCoercibleToString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireCoercibleToString
 */


function requireCoercibleToString(value) {
  return _toString(requireObjectCoercible(value));
}

// CONCATENATED MODULE: ./dist/esm/normalizeSpace.js
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module normalizeSpace
 */


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
  return _normalizeSpace(requireCoercibleToString(string));
}

// CONCATENATED MODULE: ./dist/esm/replaceComments.js
/**
 * @file Replace the comments in a string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module replaceComments
 */



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
  return _replace(requireCoercibleToString(string), STRIP_COMMENTS, (arguments.length <= 1 ? 0 : arguments.length - 1) ? _toString(arguments.length <= 1 ? undefined : arguments[1]) : '');
}

// CONCATENATED MODULE: ./dist/esm/isClassSupported.js
/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isClassSupported
 */

/* eslint-disable-next-line no-new-func */

/* harmony default export */ var isClassSupported = (!attempt(Function('"use strict"; return class My {};')).threw);

// CONCATENATED MODULE: ./dist/esm/.internal/_isFunction.js
/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isFunction
 */










var FUNC_TAG = '[object Function]';
var GEN_TAG = '[object GeneratorFunction]';
var ASYNC_TAG = '[object AsyncFunction]';
var ctrRx = /^class /;

var testClassString = function _testClassString(value) {
  return _test(ctrRx, normalizeSpace(replaceComments(_functionToString(value), ' ')));
};

var isES6ClassFn = function _isES6ClassFn(value) {
  var result = attempt(testClassString, value);
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
  if (isClassSupported && !allowClass && isES6ClassFn(value)) {
    return false;
  }

  return !attempt(_functionToString, value).threw;
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
  if (isPrimitive(value)) {
    return false;
  }

  if (isToStringTagSupported) {
    return tryFuncToString(value, _Boolean(arguments.length <= 1 ? undefined : arguments[1]));
  }

  if (isClassSupported && !(arguments.length <= 1 ? undefined : arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === FUNC_TAG || strTag === GEN_TAG || strTag === ASYNC_TAG;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_assertIsFunction.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _assertIsFunction
 */


/* harmony default export */ var _assertIsFunction = (_assertIs(isFunction, 'Not a function'));

// CONCATENATED MODULE: ./dist/esm/.internal/_isNaN.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isNaN
 */
function _isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_Infinity.js
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Infinity
 */
/* harmony default export */ var _Infinity = (1 / 0);

// CONCATENATED MODULE: ./dist/esm/isNumberType.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberType
 */
function isNumberType(value) {
  return typeof value === 'number';
}

// CONCATENATED MODULE: ./dist/esm/.internal/_isFinite.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isFinite
 */



/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function _isFinite(number) {
  return isNumberType(number) && !_isNaN(number) && number !== _Infinity && number !== -_Infinity;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_Number.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Number
 */
/* harmony default export */ var _Number = (0 .constructor);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(2);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./dist/esm/toPrimitive.js
/**
 * @file Converts a JavaScript object to a primitive value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */









/* eslint-disable-next-line compat/compat */

var symToPrimitive = isSymbolSupported && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = isSymbolSupported && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  requireObjectCoercible(O);

  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];

    if (isFunction(method)) {
      result = _call(method, O);

      if (isPrimitive(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];

  if (!isNil(func)) {
    if (!isFunction(func)) {
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
  if (isPrimitive(input)) {
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

  if (isSymbolSupported) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if (is_symbol_default()(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (!isUndefined(exoticToPrim)) {
    var result = _call(exoticToPrim, input, hint);

    if (isPrimitive(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (is_date_object_default()(input) || is_symbol_default()(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_stringSlice.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringSlice
 */

/* harmony default export */ var _stringSlice = (_methodize(String.prototype.slice));

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(0);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./dist/esm/isObjectLike.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLike
 */


function isObjectLike(value) {
  return !isNull(value) && isObjectType(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_hasOwnProperty.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasOwnProperty
 */

/* harmony default export */ var _hasOwnProperty = (_methodize(Object.prototype.hasOwnProperty));

// CONCATENATED MODULE: ./dist/esm/.internal/_exec.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _exec
 */

/* harmony default export */ var _exec = (_methodize(RegExp.prototype.exec));

// CONCATENATED MODULE: ./dist/esm/.internal/_getOwnPropertyDescriptor.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getOwnPropertyDescriptor
 */
/* harmony default export */ var _getOwnPropertyDescriptor = (Object.getOwnPropertyDescriptor);

// CONCATENATED MODULE: ./dist/esm/isRegex.js
/**
 * @file Is this value a JS regex?
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isRegex
 */






var regexClass = '[object RegExp]';

var tryRegexExecCall = function _tryRegexExecCall(value, descriptor) {
  /* istanbul ignore next */
  try {
    value.lastIndex = 0;

    _exec(value);

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
  if (!isObjectLike(value)) {
    return false;
  }
  /* istanbul ignore next */


  if (!isToStringTagSupported) {
    return toStringTag(value) === regexClass;
  }

  var descriptor = _getOwnPropertyDescriptor(value, 'lastIndex');

  return descriptor && _hasOwnProperty(descriptor, 'value') ? tryRegexExecCall(value, descriptor) : false;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_stringIndexOf.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringIndexOf
 */

/* harmony default export */ var _stringIndexOf = (_methodize(String.prototype.indexOf));

// CONCATENATED MODULE: ./dist/esm/.internal/_stringTest.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringTest
 */



function _stringTest(string, searchValue) {
  return isRegex(searchValue) ? _test(searchValue, string) : _stringIndexOf(string, searchValue) !== -1;
}

// CONCATENATED MODULE: ./dist/esm/isBinary.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */


var binaryPattern = /^0b[01]+$/i;
function isBinary(string) {
  return is_string_default()(string) && _stringTest(string, binaryPattern);
}

// CONCATENATED MODULE: ./dist/esm/isOctal.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */


var octalPattern = /^0o[0-7]+$/i;
function isOctal(string) {
  return is_string_default()(string) && _stringTest(string, octalPattern);
}

// CONCATENATED MODULE: ./dist/esm/isStringType.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringType
 */
function isStringType(value) {
  return typeof value === 'string';
}

// CONCATENATED MODULE: ./dist/esm/.internal/_charAt.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _charAt
 */

/* harmony default export */ var _charAt = (_methodize(String.prototype.charAt));

// CONCATENATED MODULE: ./dist/esm/.internal/_NaN.js
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _NaN
 */
/* harmony default export */ var _NaN = (0 / 0);

// CONCATENATED MODULE: ./dist/esm/.internal/_parseInt.js
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _parseInt
 */






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
  var str = _trimLeft(_toString(string));

  if (_charAt(str, 0) === "\u180E") {
    return _NaN;
  }

  return parse(str, _Number(radix) || (_test(hexPattern, str) ? 16 : 10));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_toNumber.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toNumber
 */











var nonWSregex = new RegExp("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function _hasNonWS(value) {
  return _test(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return _test(invalidHexLiteral, value);
};

var dropPrefix = function _dropPrefix(value) {
  return _stringSlice(value, 2);
};

function _toNumber(argument) {
  var value = toPrimitive(argument, Number);

  if (isSymbolType(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (isStringType(value)) {
    if (isBinary(value)) {
      return _toNumber(_parseInt(dropPrefix(value), 2));
    }

    if (isOctal(value)) {
      return _toNumber(_parseInt(dropPrefix(value), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN;
    }

    var trimmed = _trim(value);

    if (trimmed !== value) {
      return _toNumber(trimmed);
    }
  }

  return _Number(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_sign.js
/**
 * @file Shim for Math.sign.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sign
 */


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
  var n = _toNumber(x);

  if (n === 0 || _isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_toInteger.js
/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toInteger
 */




var abs = Math.abs,
    floor = Math.floor;
function _toInteger(value) {
  var number = _toNumber(value);

  if (_isNaN(number)) {
    return 0;
  }

  if (number === 0 || !_isFinite(number)) {
    return number;
  }

  return _sign(number) * floor(abs(number));
}

// CONCATENATED MODULE: ./dist/esm/MAX_SAFE_INTEGER.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module MAX_SAFE_INTEGER
 */
/* harmony default export */ var MAX_SAFE_INTEGER = (9007199254740991);

// CONCATENATED MODULE: ./dist/esm/toWholeNumber.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toWholeNumber
 */


function toWholeNumber(value) {
  var integer = _toInteger(value); // includes converting -0 to +0


  if (integer <= 0) {
    return 0;
  }

  return integer > MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : integer;
}

// CONCATENATED MODULE: ./dist/esm/isInteger.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInteger
 */



function isInteger(value) {
  return isNumberType(value) && _isFinite(value) && _toInteger(value) === value;
}

// CONCATENATED MODULE: ./dist/esm/isSafeInteger.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSafeInteger
 */


function isSafeInteger(value) {
  return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
}

// CONCATENATED MODULE: ./dist/esm/isWholeNumber.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWholeNumber
 */

function isWholeNumber(value) {
  return isSafeInteger(value) && value >= 0;
}

// CONCATENATED MODULE: ./dist/esm/isArrayLike.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLike
 */



function isArrayLike(value) {
  return !isNil(value) && isWholeNumber(value.length) && !isFunction(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_fromIndex.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromIndex
 */




var _fromIndex_max = Math.max;
function _fromIndex(array, fromIndex) {
  var object = toObject(array);

  if (!isArrayLike(object)) {
    return 0;
  }

  var index = _toInteger(fromIndex);

  return index >= 0 ? index : _fromIndex_max(0, toWholeNumber(object.length) + index);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_any.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _any
 */



function _any(array, callback) {
  var object = toObject(array);
  var length = toWholeNumber(object.length);

  if (length) {
    for (var index = _fromIndex(object, arguments.length <= 2 ? undefined : arguments[2]); index < length; index += 1) {
      if (callback(object[index], index, object)) {
        return true;
      }
    }
  }

  return false;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_all.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _all
 */

function _all(array, callback) {
  var iteratee = function _iteratee() {
    callback.apply(void 0, arguments);
  };

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  _any.apply(void 0, [array, iteratee].concat(rest));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_accumulate.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _accumulate
 */

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

  _all.apply(void 0, [array, iteratee].concat(rest));

  return accumulator;
}

// CONCATENATED MODULE: ./dist/esm/accumulate.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module accumulate
 */





function accumulate(array, callback) {
  var object = toObject(array);
  var length = toWholeNumber(object.length);

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (!rest.length && length < 1) {
    throw new TypeError('accumulate of empty array with no initial value');
  }

  var start = _fromIndex(object, rest[1]);

  return _accumulate(object, _assertIsFunction(callback), (rest.length ? rest : object)[start], rest.length ? start : start + 1);
}

// CONCATENATED MODULE: ./dist/esm/all.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module all
 */




function all_all(array, callback) {
  _all(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}

// CONCATENATED MODULE: ./dist/esm/any.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module any
 */




function any(array, callback) {
  return _any(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}

// CONCATENATED MODULE: ./dist/esm/apply.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */


function apply(fn) {
  for (var _len = arguments.length, applyArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    applyArgs[_key - 1] = arguments[_key];
  }

  return _apply.apply(void 0, [_assertIsFunction(fn)].concat(applyArgs));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_push.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _push
 */

/* harmony default export */ var _push = (_methodize(Array.prototype.push));

// CONCATENATED MODULE: ./dist/esm/.internal/_argsToArray.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _argsToArray
 */


function _argsToArray(args) {
  var array = [];

  var iteratee = function _iteratee(arg) {
    _push(array, arg);
  };

  _all(args, iteratee);

  return array;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_join.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _join
 */

/* harmony default export */ var _join = (_methodize(Array.prototype.join));

// CONCATENATED MODULE: ./dist/esm/.internal/_createArgList.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createArgList
 */




var _createArgList_PRE = '$_';
var _createArgList_POST = '_$';
function _createArgList(length) {
  var array = [];

  var iteratee = function _iteratee(unused, index) {
    _push(array, _createArgList_PRE + _String(index) + _createArgList_POST);
  };

  _all({
    length: length
  }, iteratee);

  return _join(array, ',');
}

// CONCATENATED MODULE: ./dist/esm/.internal/_create.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _create
 */
/* harmony default export */ var _create = (Object.create);

// CONCATENATED MODULE: ./dist/esm/.internal/_Function.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Function
 */
function _Function_fn() {}

/* harmony default export */ var _Function = (_Function_fn.constructor);

// CONCATENATED MODULE: ./dist/esm/.internal/_bound.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bound
 */





function _bound(binder, name, prototype, length) {
  var bound = _Function('binder', '_apply', '_argsToArray', "return function bound".concat(name, "(").concat(_createArgList(length), "){ return _apply(binder,this,_argsToArray(arguments)); }"))(binder, _apply, _argsToArray);

  if (prototype) {
    bound.prototype = _create(prototype);
  }

  return bound;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_arity.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _arity
 */




function _arity(fn) {
  var length = (arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length;
  var bound;

  var binder = function _binder() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = _apply(fn, this, _slice(args, 0, length));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'Arity', fn.prototype, length);
  return bound;
}

// CONCATENATED MODULE: ./dist/esm/arity.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arity
 */



function arity(fn) {
  return _arity(_assertIsFunction(fn), toWholeNumber((arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length));
}

// CONCATENATED MODULE: ./dist/esm/assertIsFunction.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsFunction
 */


// CONCATENATED MODULE: ./dist/esm/assertIsObjectLike.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsObject
 */


/* harmony default export */ var assertIsObjectLike = (_assertIs(isObjectLike, 'Not an object'));

// CONCATENATED MODULE: ./dist/esm/assertIs.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */


function assertIs(predicate, defaultMessage) {
  if (!isFunction(predicate)) {
    throw new TypeError('Predicate must be a function');
  }

  return _assertIs(predicate, defaultMessage);
}

// CONCATENATED MODULE: ./dist/esm/bind.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module bind
 */


function bind(fn) {
  for (var _len = arguments.length, bindArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }

  return _bind.apply(void 0, [_assertIsFunction(fn)].concat(bindArgs));
}

// CONCATENATED MODULE: ./dist/esm/call.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module call
 */


function call_call(fn) {
  for (var _len = arguments.length, callArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callArgs[_key - 1] = arguments[_key];
  }

  return _call.apply(void 0, [_assertIsFunction(fn)].concat(callArgs));
}

// CONCATENATED MODULE: ./dist/esm/callFunctionOrIdentity.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */






var requireIsObject = function _requireIsObject(value) {
  return assertIsObjectLike(value, 'CreateListFromArrayLike called on non-object');
};

var getArgsArray = function _getArgsArray(value) {
  return isNil(value) ? [] : _slice(requireIsObject(value));
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
  if (isFunction(fnOrValue)) {
    var argsArray = getArgsArray(arguments.length <= 1 ? undefined : arguments[1]);
    return (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? _apply(fnOrValue, arguments.length <= 2 ? undefined : arguments[2], argsArray) : fnOrValue.apply(void 0, _toConsumableArray(argsArray));
  }

  return fnOrValue;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_toUpperCase.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toUpperCase
 */

/* harmony default export */ var _toUpperCase = (_methodize(String.prototype.toUpperCase));

// CONCATENATED MODULE: ./dist/esm/capitalizeFirst.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */




function capitalizeFirst(string) {
  var str = _toString(string);

  return _toUpperCase(_charAt(str, 0)) + _stringSlice(str, 1);
}

// CONCATENATED MODULE: ./dist/esm/capitalize.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalize
 */





function capitalize(string) {
  var str = _toString(string);

  return _toUpperCase(_charAt(str, 0)) + _toLowerCase(_stringSlice(str, 1));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_clamp.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _clamp
 */


var _clamp_max = Math.max,
    _clamp_min = Math.min;
function _clamp(value, lower, upper) {
  if (_isNaN(value) || _isNaN(lower) || _isNaN(upper)) {
    return _NaN;
  }

  return _clamp_min(_clamp_max(value, lower), upper);
}

// CONCATENATED MODULE: ./dist/esm/clamp.js
/**
 * @file Utility that clamps a number to min and max limits inclusive.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module clamp
 */


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
  var number = _toNumber(value);

  var restLength = arguments.length <= 1 ? 0 : arguments.length - 1;

  if (restLength < 1) {
    return number;
  }

  var min = _toNumber(arguments.length <= 1 ? undefined : arguments[1]);

  var max = _toNumber(arguments.length <= 2 ? undefined : arguments[2]);

  if (restLength < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    throw new RangeError('"min" > "max"');
  }

  return _clamp(number, min, max);
}

// CONCATENATED MODULE: ./dist/esm/constant.js
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

// CONCATENATED MODULE: ./dist/esm/.internal/_find.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _find
 */

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

  _any.apply(void 0, [array, predicate].concat(fromIndex));

  return result;
}

// CONCATENATED MODULE: ./dist/esm/sameValue.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValue
 */

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

  return value1 === value2 || _isNaN(value1) && _isNaN(value2);
}

// CONCATENATED MODULE: ./dist/esm/sameValueZero.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValueZero
 */

function sameValueZero(x, y) {
  return x === y || sameValue(x, y);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_includes.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _includes
 */


function _includes(array, searchElement) {
  var isSameValueZero = function _isSameValueZero(value) {
    return sameValueZero(searchElement, value);
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  return _find.apply(void 0, [array, isSameValueZero].concat(fromIndex)).includes;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_getAt.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getAt
 */




function _getAt(array) {
  if (!isArrayLike(array)) {
    /* eslint-disable-next-line no-void */
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? _toInteger(arguments.length <= 1 ? undefined : arguments[1]) : 0;
  return is_string_default()(array) ? _charAt(array, index) : array[index];
}

// CONCATENATED MODULE: ./dist/esm/.internal/_last.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _last
 */

function _last(array) {
  return _getAt(array, array.length - 1);
}

// CONCATENATED MODULE: ./dist/esm/defaultToOneOf.js
/**
 * @file Utility to set a default value from an array.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defaultToOneOf
 */



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
  requireObjectCoercible(comparates);
  var fallback = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : _last(comparates);
  return _includes(comparates, comparate) ? comparate : fallback;
}

// CONCATENATED MODULE: ./dist/esm/nilifyIs.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */



function nilifyIs(predicate) {
  _assertIsFunction(predicate);

  return function nilifiedBound(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return isNil(value) || _call.apply(void 0, [predicate, this, value].concat(rest));
  };
}

// CONCATENATED MODULE: ./dist/esm/surround.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module surround
 */

function surround(string, wrapper) {
  var wrap = _toString(wrapper);

  return wrap + _toString(string) + wrap;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_defineProperty.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperty
 */
/* harmony default export */ var _defineProperty = (Object.defineProperty);

// CONCATENATED MODULE: ./dist/esm/toPropertyKey.js
/**
 * @file Converts argument to a value that can be used as a property key.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toPropertyKey
 */




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return isSymbolSupported && isSymbolType(key) ? key : _toString(key);
}

// CONCATENATED MODULE: ./dist/esm/defineValidatorProperty.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */













var MSG1 = 'Not a valid initial value for ';
var MSG2 = 'Not a valid value for  ';

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var descriptor = {};

  if (_hasOwnProperty(desc, 'enumerable')) {
    descriptor.enumerable = _Boolean(desc.enumerable);
  }

  if (_hasOwnProperty(desc, 'configurable')) {
    descriptor.configurable = _Boolean(desc.configurable);
  }

  if (_hasOwnProperty(desc, 'nilable')) {
    descriptor.nilable = _Boolean(desc.nilable);
  }

  if (_hasOwnProperty(desc, 'validator')) {
    if (!isUndefined(desc.validator) && !isFunction(desc.validator)) {
      throw new TypeError('validator must be a function');
    }

    descriptor.validator = desc.validator;
  }

  if (_hasOwnProperty(desc, 'value')) {
    descriptor.value = desc.value;
  }

  if (_hasOwnProperty(desc, 'writable')) {
    descriptor.writable = _Boolean(desc.writable);
  }

  if (_hasOwnProperty(desc, 'get')) {
    if (!isUndefined(desc.get) && !isFunction(desc.get)) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = desc.get;
  }

  if (_hasOwnProperty(desc, 'set')) {
    if (!isUndefined(desc.set) && !isFunction(desc.set)) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = desc.set;
  }

  if ((_hasOwnProperty(descriptor, 'get') || _hasOwnProperty(descriptor, 'set')) && (_hasOwnProperty(descriptor, 'value') || _hasOwnProperty(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
};

function defineValidatorProperty(object, property, descriptor) {
  assertIsObjectLike(object);
  var prop = toPropertyKey(property);
  var props = toPropertyDescriptor(_Object(descriptor), defineValidatorProperty);
  var isValidInitialValue = props.nilable && props.validator ? nilifyIs(props.validator) : props.validator;
  var quotedProperty = surround(prop, '"');

  if (isValidInitialValue) {
    assertIs(isValidInitialValue, MSG1 + quotedProperty)(props.value);
  }

  var isValidValue = props.validator && assertIs(props.validator, MSG2 + quotedProperty);
  var validatorDesctiptor = {
    configurable: props.configurable,
    enumerable: props.enumerable
  };

  if (props.get) {
    validatorDesctiptor.get = function get() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _apply(props.get, this, args);
    };
  } else if (isValidValue && _hasOwnProperty(props, 'value')) {
    validatorDesctiptor.get = function get() {
      return props.value;
    };
  }

  if (props.set) {
    validatorDesctiptor.set = function set(newValue) {
      return _call(props.set, this, newValue);
    };
  } else if (_hasOwnProperty(props, 'value')) {
    if (isValidValue && props.writable) {
      validatorDesctiptor.set = function set(newValue) {
        props.value = isValidValue(newValue);
        return props.value;
      };
    } else {
      validatorDesctiptor.value = props.value;

      if (_hasOwnProperty(props, 'writable')) {
        validatorDesctiptor.writable = props.writable;
      }
    }
  }

  return _defineProperty(object, prop, validatorDesctiptor);
}

// CONCATENATED MODULE: ./dist/esm/defineValidatorProperties.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */






function defineValidatorProperties(object, properties) {
  assertIsObjectLike(object);
  var props = toObject(properties);

  var callback = function _callback(currentValue) {
    defineValidatorProperty(object, toPropertyKey(currentValue), props[currentValue]);
  };

  _all(_keys(props), callback);

  return object;
}

// EXTERNAL MODULE: ./node_modules/lodash/constant.js
var lodash_constant = __webpack_require__(5);
var constant_default = /*#__PURE__*/__webpack_require__.n(lodash_constant);

// EXTERNAL MODULE: ./node_modules/lodash/toInteger.js
var toInteger = __webpack_require__(6);
var toInteger_default = /*#__PURE__*/__webpack_require__.n(toInteger);

// EXTERNAL MODULE: ./node_modules/lodash/clamp.js
var lodash_clamp = __webpack_require__(7);
var clamp_default = /*#__PURE__*/__webpack_require__.n(lodash_clamp);

// CONCATENATED MODULE: ./node_modules/delay-promise-x/dist/delay-promise-x.esm.js
/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */



var delay_promise_x_esm_MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Create a delayed promise.
 *
 * @param {(number|string)} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */

var delay_promise_x_esm_delayPromise = function delayPromise(milliseconds) {
  var ms = clamp_default()(toInteger_default()(milliseconds), delay_promise_x_esm_MAX_SAFE_INTEGER);

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    var valueExecutor = function valueExecutor(arg) {
      return delayPromise(ms).then(constant_default()(arg));
    };
    /* eslint-disable-next-line compat/compat */


    return Promise.resolve(arguments.length <= 1 ? undefined : arguments[1]).then(valueExecutor);
  }

  var timeoutExecutor = function timeoutExecutor(resolve, reject) {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };
  /* eslint-disable-next-line compat/compat */


  return new Promise(timeoutExecutor);
};

/* harmony default export */ var delay_promise_x_esm = (delay_promise_x_esm_delayPromise);


// CONCATENATED MODULE: ./dist/esm/.internal/_sift.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _sift
 */


function _sift(array, callback) {
  var result = [];

  var iteratee = function _iteratee(value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (callback.apply(void 0, [value].concat(args))) {
      _push(result, value);
    }
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any.apply(void 0, [array, iteratee].concat(fromIndex));

  return result;
}

// CONCATENATED MODULE: ./dist/esm/difference.js
/**
 * @file Creates an array of array values not included in the other given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module difference
 */





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

  requireObjectCoercible(array);

  _all(excludes, requireObjectCoercible);

  var siftPredicate = function _siftPredicate(value) {
    var includesPredicate = function _includesPredicate(exclude) {
      return _includes(exclude, value);
    };

    return !_any(excludes, includesPredicate);
  };

  return _sift(array, siftPredicate);
}

// CONCATENATED MODULE: ./dist/esm/drop.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module drop
 */






function drop(array) {
  if (!isArrayLike(requireObjectCoercible(array))) {
    /* eslint-disable-next-line no-void */
    return void 0;
  }

  var start = (arguments.length <= 1 ? 0 : arguments.length - 1) ? toWholeNumber(arguments.length <= 1 ? undefined : arguments[1]) : 1;
  return (is_string_default()(array) ? _stringSlice : _slice)(array, start);
}

// CONCATENATED MODULE: ./dist/esm/find.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module find
 */




function find(array, callback) {
  return _find(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2])).value;
}

// CONCATENATED MODULE: ./dist/esm/findIndex.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module findIndex
 */




function findIndex(array, callback) {
  return _find(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2])).index;
}

// CONCATENATED MODULE: ./dist/esm/getAt.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getAt
 */


function getAt(array) {
  for (var _len = arguments.length, position = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _getAt.apply(void 0, [requireObjectCoercible(array)].concat(position));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_match.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _match
 */

/* harmony default export */ var _match = (_methodize(String.prototype.match));

// CONCATENATED MODULE: ./dist/esm/getFunctionName.js
/**
 * @file Get the name of the function.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getFunctionName
 */





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
      match = _match(normalizeSpace(replaceComments(_functionToString(fn), ' ')), reName);

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
  return isFunction(fn, true) ? getName(fn) : void 0;
}

// CONCATENATED MODULE: ./dist/esm/hasOwnProperty.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module hasOwnProperty
 */



function hasOwnProperty_hasOwnProperty(object, property) {
  return _hasOwnProperty(requireObjectCoercible(object), toPropertyKey(property));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_head.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _head
 */

function _head(array) {
  return _getAt(array, 0);
}

// CONCATENATED MODULE: ./dist/esm/head.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module head
 */


function head(array) {
  return _head(requireObjectCoercible(array));
}

// CONCATENATED MODULE: ./dist/esm/identity.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module identity
 */
function identity(arg) {
  return arg;
}

// CONCATENATED MODULE: ./dist/esm/includes.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includes
 */



function includes(array, searchElement) {
  return _includes(requireObjectCoercible(array), searchElement, _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_shift.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _shift
 */

/* harmony default export */ var _shift = (_methodize(Array.prototype.shift));

// CONCATENATED MODULE: ./dist/esm/intersection.js
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intersection
 */









var isNotNil = function _isNotNil(value) {
  return !isNil(value);
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

  var remaining = _sift(requireObjectCoercible(arrays), isNotNil);

  if (remaining.length < 1) {
    return [];
  }

  return _accumulate(_shift(remaining), function (acc, value) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var isExcluded = !_any(remaining, function (array) {
      _newArrowCheck(this, _this2);

      return !_includes(requireObjectCoercible(array), value);
    }.bind(this));

    if (isExcluded && !_includes(acc, value)) {
      _push(acc, value);
    }

    return acc;
  }.bind(this), []);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_numberToString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _numberToString
 */

/* harmony default export */ var _numberToString = (_methodize(Number.prototype.toString));

// CONCATENATED MODULE: ./dist/esm/modulo.js
/**
 * @file Modulo - floored division implementation.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */
var modulo_floor = Math.floor;
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
  return modulo_floor(remain >= 0 ? remain : remain + divisor);
}

// CONCATENATED MODULE: ./dist/esm/toUint24.js
/**
 * @file Converts a value to Uint24.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toUint24
 */




var toUint24_floor = Math.floor,
    toUint24_abs = Math.abs;
/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 */

function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  var number = _toNumber(argument); // If number is NaN, +0, -0, +∞, or -∞, return +0.


  if (number === 0 || !_isFinite(number)) {
    return 0;
  } // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.


  return modulo(_sign(number) * toUint24_floor(toUint24_abs(number)), 0x1000000);
}

// CONCATENATED MODULE: ./dist/esm/padStart.js
/**
 * @file Pads a string with another string (repeated, if needed).
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module padStart
 */





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
  var str = _toString(requireCoercibleToString(string));

  var stringLength = toWholeNumber(str.length);
  /* eslint-disable-next-line no-void */

  var fillString = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : void 0;
  var filler = isUndefined(fillString) ? '' : _toString(fillString);

  if (filler === '') {
    filler = ' ';
  }

  var intMaxLength = toWholeNumber(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? _stringSlice(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? _stringSlice(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
}

// CONCATENATED MODULE: ./dist/esm/intToRGB.js
/**
 * @file Convert an integer to a RGB string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intToRGB
 */




var HASH = '#';
/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 */

function intToRGB(i) {
  return HASH + _toUpperCase(padStart(_numberToString(toUint24(i), 16), 6, '0'));
}

// CONCATENATED MODULE: ./dist/esm/isArrayLikeObject.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLikeObject
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

// CONCATENATED MODULE: ./dist/esm/isBooleanType.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBooleanType
 */
function isBooleanType(value) {
  return typeof value === 'boolean';
}

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(3);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// CONCATENATED MODULE: ./dist/esm/isCountingNumber.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCountingNumber
 */

function isCountingNumber(value) {
  return isWholeNumber(value) && value > 0;
}

// CONCATENATED MODULE: ./dist/esm/isDOMNode.js
/**
 * @file Tests if a value is a DOM Node.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDOMNode
 */




/* istanbul ignore next */

var doc = typeof document !== 'undefined' && document;
var documentInheritsNode = false;
var isDOMNode_element;
var hasChildNodes;
/* istanbul ignore next */

if (doc) {
  try {
    isDOMNode_element = doc.createElement('div');
    hasChildNodes = _methodize(doc.hasChildNodes);
    documentInheritsNode = isBooleanType(hasChildNodes(isDOMNode_element));
  } catch (ignore) {
    hasChildNodes = null;
    documentInheritsNode = false;
  }
}

var tryAppendChild;
/* istanbul ignore if */

if (isDOMNode_element && !documentInheritsNode) {
  hasChildNodes = _methodize(isDOMNode_element.hasChildNodes);

  var cloneNode = _methodize(isDOMNode_element.cloneNode);

  var appendChild = _methodize(isDOMNode_element.appendChild);

  tryAppendChild = function _tryAppendChild(value) {
    return appendChild(cloneNode(isDOMNode_element, false), value);
  };
}
/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 */


function isDOMNode(value) {
  if (hasChildNodes && value && isNumberType(value.nodeType)) {
    if (value === doc) {
      return true;
    }

    try {
      return isBooleanType(hasChildNodes(value));
    } catch (ignore) {}
    /* ignore */

    /* istanbul ignore if */


    if (!documentInheritsNode) {
      try {
        return _Boolean(tryAppendChild(value));
      } catch (ignore) {
        /* ignore */
      }
    }
  }

  return false;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_getPrototypeOf.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getPrototypeOf
 */
/* harmony default export */ var _getPrototypeOf = (Object.getPrototypeOf);

// CONCATENATED MODULE: ./dist/esm/isError.js
/**
 * @file Detect whether a value is an error.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */




var testIsError = function _testIsError(value) {
  return toStringTag(value) === '[object Error]';
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
  if (!isObjectLike(value)) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (testIsError(object)) {
      return true;
    }

    object = _getPrototypeOf(object);
    maxLoop -= 1;
  }

  return false;
}

// CONCATENATED MODULE: ./dist/esm/isFalsey.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFalsey
 */


/* harmony default export */ var isFalsey = (_negate(_Boolean));

// CONCATENATED MODULE: ./dist/esm/isFunction.js
/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFunction
 */


// CONCATENATED MODULE: ./dist/esm/isHex.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isHex
 */


var isHex_hexPattern = /^0x[0-9a-f]+$/i;
function isHex(string) {
  return is_string_default()(string) && _stringTest(string, isHex_hexPattern);
}

// CONCATENATED MODULE: ./dist/esm/isLowerCased.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isLowerCased
 */



function isLowerCased(string) {
  return is_string_default()(string) && _toLowerCase(string) === _toString(string);
}

// EXTERNAL MODULE: ./node_modules/is-number-object/index.js
var is_number_object = __webpack_require__(4);
var is_number_object_default = /*#__PURE__*/__webpack_require__.n(is_number_object);

// CONCATENATED MODULE: ./dist/esm/isNumberFinite.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberFinite
 */


// CONCATENATED MODULE: ./dist/esm/isNumberNaN.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberNaN
 */


// CONCATENATED MODULE: ./dist/esm/.internal/_isArray.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isArray
 */
/* harmony default export */ var _isArray = (Array.isArray);

// CONCATENATED MODULE: ./dist/esm/isObjectLikeNotArray.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */


function isObjectLikeNotArray(value) {
  return !_isArray(value) && isObjectLike(value);
}

// CONCATENATED MODULE: ./dist/esm/isPopulatedString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */


function isPopulatedString(string) {
  return is_string_default()(string) && _trim(string).length > 0;
}

// CONCATENATED MODULE: ./dist/esm/isSearchIndex.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedIdentifier
 */

function isSearchIndex(value) {
  return value === -1 || isWholeNumber(value);
}

// CONCATENATED MODULE: ./dist/esm/isSpaced.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSpaced
 */



var isSpaced_PRE = '[';
var isSpaced_POST = ']';
var containsSpace = new RegExp(isSpaced_PRE + build('html') + isSpaced_POST);
function isSpaced(string) {
  return is_string_default()(string) && _stringTest(string, containsSpace);
}

// CONCATENATED MODULE: ./dist/esm/isStringTypeOrInteger.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */


function isStringTypeOrInteger(value) {
  return isStringType(value) || isSafeInteger(value);
}

// CONCATENATED MODULE: ./dist/esm/isStringTypeOrNumberType.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrNumberType
 */


function isStringTypeOrNumberType(value) {
  return isStringType(value) || isNumberType(value);
}

// CONCATENATED MODULE: ./dist/esm/.internal/_charCodeAt.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _charCodeAt
 */

/* harmony default export */ var _charCodeAt = (_methodize(String.prototype.charCodeAt));

// CONCATENATED MODULE: ./dist/esm/isSurrogatePair.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSurrogatePair
 */


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
    if (is_string_default()(char1) && char1.length === 2) {
      first = _charCodeAt(char1, 0);
      second = _charCodeAt(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    var char2 = arguments.length <= 1 ? undefined : arguments[1];

    if (!is_string_default()(char1) || char1.length !== 1 || !is_string_default()(char2) || char2.length !== 1) {
      return false;
    }

    first = _charCodeAt(char1, 0);
    second = _charCodeAt(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
}

// CONCATENATED MODULE: ./dist/esm/toBoolean.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toBoolean
 */


// CONCATENATED MODULE: ./dist/esm/isTruthy.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isTruthy
 */


// CONCATENATED MODULE: ./dist/esm/isUnderscored.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */


function isUnderscored(string) {
  return is_string_default()(string) && _stringTest(string, '_');
}

// CONCATENATED MODULE: ./dist/esm/.internal/_uniq.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniq
 */




var _uniq_callback = function _callback(accumulator, currentValue) {
  if (!_includes(accumulator, currentValue)) {
    _push(accumulator, currentValue);
  }

  return accumulator;
};

function _uniq(array) {
  return _reduce(array, _uniq_callback, []);
}

// CONCATENATED MODULE: ./dist/esm/isUniq.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */


function isUniq(array) {
  return isArrayLike(array) && _uniq(array).length === array.length;
}

// CONCATENATED MODULE: ./dist/esm/isUpperCased.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUpperCased
 */



function isUpperCased(string) {
  return is_string_default()(string) && _toUpperCase(string) === _toString(string);
}

// CONCATENATED MODULE: ./dist/esm/isValidHtml4Id.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml4Id
 */


var validPattern = /^[A-Za-z][A-Za-z0-9\-_.]*$/;
function isValidHtml4Id(string) {
  return is_string_default()(string) && _stringTest(string, validPattern);
}

// CONCATENATED MODULE: ./dist/esm/isValidHtml5Id.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml5Id
 */


function isValidHtml5Id(string) {
  return is_string_default()(string) && string.length > 0 && !isSpaced(string);
}

// CONCATENATED MODULE: ./dist/esm/isWhiteSpaced.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWhiteSpaced
 */



var isWhiteSpaced_PRE = '[';
var isWhiteSpaced_POST = ']';
var containsWhiteSpace = new RegExp(isWhiteSpaced_PRE + build() + isWhiteSpaced_POST);
function isWhiteSpaced(string) {
  return is_string_default()(string) && _stringTest(string, containsWhiteSpace);
}

// CONCATENATED MODULE: ./dist/esm/kebabJoin.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */



function kebabJoin() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return _join(_map(strings, _toString), '-');
}

// CONCATENATED MODULE: ./dist/esm/last.js
/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module last
 */


function last_last(array) {
  return _last(requireObjectCoercible(array));
}

// CONCATENATED MODULE: ./dist/esm/methodize.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module methodize
 */


function methodize(prototypeMethod) {
  return _methodize(_assertIsFunction(prototypeMethod));
}

// CONCATENATED MODULE: ./dist/esm/negate.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module negate
 */


function negate(predicate) {
  return _negate(_assertIsFunction(predicate));
}

// CONCATENATED MODULE: ./dist/esm/noop.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module noop
 */
function noop() {}

// CONCATENATED MODULE: ./dist/esm/.internal/_search.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _search
 */

/* harmony default export */ var _search = (_methodize(String.prototype.search));

// CONCATENATED MODULE: ./dist/esm/numberToDecimalString.js
/**
 * @file Convert a base-10 or scientific E-notation value to a decimal form string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberToDecimalString
 */









var EMPTY_STRING = '';
var DECIMAL_MARK = '.';
var HYPHEN_MINUS = '-';
var ZERO_SYMBOL = '0';
var MINUS_ZERO_SYMBOL = HYPHEN_MINUS + ZERO_SYMBOL;
var ERROR_MSG = 'not a valid base 10 numeric value';
var numberToDecimalString_validPattern = /^-?(?:(?:\d|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?$/i;
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
    workingValue = _toString(workingValue);

    if (!_test(numberToDecimalString_validPattern, workingValue)) {
      throw new TypeError(ERROR_MSG);
    }
  } // Determine sign.


  var sign;

  if (_charAt(workingValue, 0) === HYPHEN_MINUS) {
    workingValue = _stringSlice(workingValue, 1);
    sign = -1;
  } else {
    sign = 1;
  } // Decimal point?


  var pointIndex = _stringIndexOf(workingValue, DECIMAL_MARK);

  if (pointIndex > -1) {
    workingValue = _replace(workingValue, DECIMAL_MARK, EMPTY_STRING);
  }

  var exponentIndex = pointIndex; // Exponential form?

  var index = _search(workingValue, expPattern);

  if (index > 0) {
    // Determine exponent.
    if (exponentIndex < 0) {
      exponentIndex = index;
    }

    exponentIndex += _Number(_stringSlice(workingValue, index + 1));
    workingValue = _stringSlice(workingValue, 0, index);
  } else if (exponentIndex < 0) {
    // Integer.
    exponentIndex = workingValue.length;
  }

  var leadingZeroIndex = workingValue.length; // Determine leading zeros.

  index = 0;

  while (index < leadingZeroIndex && _charAt(workingValue, index) === ZERO_SYMBOL) {
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
      } while (_charAt(workingValue, leadingZeroIndex) === ZERO_SYMBOL && leadingZeroIndex > 0);
    }

    exponent = exponentIndex - index - 1;
    coefficient = [];
    coefficient.length = leadingZeroIndex + 1; // Convert string to array of digits without leading/trailing zeros.

    var position = 0;

    while (index <= leadingZeroIndex) {
      coefficient[position] = _Number(_charAt(workingValue, index));
      position += 1;
      index += 1;
    }
  }

  var decimalForm = _join(coefficient, EMPTY_STRING);

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
      decimalForm = _stringSlice(decimalForm, 0, exponent) + DECIMAL_MARK + _stringSlice(decimalForm, exponent);
    } // Exponent is zero.

  } else if (decimalFormLength > 1) {
    decimalForm = _charAt(decimalForm, 0) + DECIMAL_MARK + _stringSlice(decimalForm, 1);
  }

  return sign < 0 ? HYPHEN_MINUS + decimalForm : decimalForm;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_RegExp.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _RegExp
 */
/* harmony default export */ var _RegExp = (/(?:)/.constructor);

// CONCATENATED MODULE: ./dist/esm/.internal/_toFixed.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toFixed
 */

/* harmony default export */ var _toFixed = (_methodize(Number.prototype.toFixed));

// CONCATENATED MODULE: ./dist/esm/.internal/_split.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _split
 */

/* harmony default export */ var _split = (_methodize(String.prototype.split));

// CONCATENATED MODULE: ./dist/esm/numberFormat.js
/**
 * @file Format a number.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberFormat
 */














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
  var number = _toNumber(value);

  if (!_isFinite(number)) {
    return _numberToString(number);
  } // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.


  var digits = (arguments.length <= 1 ? 0 : arguments.length - 1) > 0 && !isNil(arguments.length <= 1 ? undefined : arguments[1]) ? clamp(_toInteger(arguments.length <= 1 ? undefined : arguments[1]), 0, 20) : 2; // Formats a number using fixed-point notation.

  var fixed = toDecimalFormString(_toFixed(number, digits));

  if (digits > 0) {
    var parts = _split(fixed, '.');

    parts[1] = _stringSlice("".concat(parts[1] || '', "00000000000000000000"), 0, digits);
    fixed = _join(parts, '.');
  }

  var sectionLength = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && !isNil(arguments.length <= 2 ? undefined : arguments[2]) ? _toInteger(arguments.length <= 2 ? undefined : arguments[2]) : 3; // Formats a number (string) of fixed-point notation, with user delimiters.

  var sectionDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 2 && !isNil(arguments.length <= 3 ? undefined : arguments[3]) ? _toString(arguments.length <= 3 ? undefined : arguments[3]) : ',';
  var decimalDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 3 && !isNil(arguments.length <= 4 ? undefined : arguments[4]) ? _toString(arguments.length <= 4 ? undefined : arguments[4]) : '.';
  return _replace(decimalDelimiter === '.' ? fixed : _replace(fixed, '.', decimalDelimiter), new _RegExp("\\d(?=(\\d{".concat(sectionLength, "})+").concat(digits > 0 ? '\\D' : '$', ")"), 'g'), "$&".concat(sectionDelimiter));
}

// CONCATENATED MODULE: ./dist/esm/parseDecimal.js
/**
 * @file Utility to parse a string to a decimal value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module parseDecimal
 */

/**
 * Parse a string to a decimal value.
 *
 * @param {string} value - The string to be converted to a decimal value.
 * @returns {number} The parsed decimal value.
 */

function parseDecimal(value) {
  return _parseInt(value, 10);
}

// CONCATENATED MODULE: ./dist/esm/parseInteger.js
/**
 * @file Utility to parse a string to a decimal value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module parseInteger
 */


// CONCATENATED MODULE: ./dist/esm/.internal/_partial.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partial
 */



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
    var result = _call.apply(void 0, [fn, this].concat(partials, args));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'Partial', fn.prototype, fn.length - partials.length);
  return bound;
}

// CONCATENATED MODULE: ./dist/esm/partial.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partial
 */


function partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partial.apply(void 0, [_assertIsFunction(fn)].concat(partials));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_partialRight.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partialRight
 */



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
    var result = _call.apply(void 0, [fn, this].concat(args, partials));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'PartialRight', fn.prototype, fn.length);
  return bound;
}

// CONCATENATED MODULE: ./dist/esm/partialRight.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partialRight
 */


function partialRight(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partialRight.apply(void 0, [_assertIsFunction(fn)].concat(partials));
}

// CONCATENATED MODULE: ./dist/esm/regexpEscape.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module regExpEscape
 */


var pattern = /[\^$\\.*+?()[\]{}|]/g;
/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */

function regExpEscape(string) {
  return _replace(requireCoercibleToString(string), pattern, '\\$&');
}

// CONCATENATED MODULE: ./dist/esm/shuffle.js
/**
 * @file Creates an array of shuffled values.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */


var shuffle_floor = Math.floor,
    random = Math.random;
/**
 * Creates an array of shuffled values.
 *
 * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * @param {Array|object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 */

function shuffle(array) {
  var arr = _slice(toObject(array));

  var index = arr.length;

  while (index > 0) {
    var rnd = shuffle_floor(random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
}

// CONCATENATED MODULE: ./dist/esm/sign.js
/**
 * @file Shim for Math.sign.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sign
 */

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */


// CONCATENATED MODULE: ./dist/esm/sift.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sift
 */




function sift(array, callback) {
  return _sift(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}

// CONCATENATED MODULE: ./dist/esm/stringTest.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stringTest
 */



function stringTest(string, patternOrRegex) {
  return _stringTest(requireCoercibleToString(string), isRegex(patternOrRegex) ? patternOrRegex : requireCoercibleToString(patternOrRegex));
}

// CONCATENATED MODULE: ./dist/esm/stubFalse.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubFalse
 */
function stubFalse() {
  return false;
}

// CONCATENATED MODULE: ./dist/esm/stubObject.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubObject
 */
function stubObject() {
  return {};
}

// CONCATENATED MODULE: ./dist/esm/stubString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubString
 */
function stubString() {
  return '';
}

// CONCATENATED MODULE: ./dist/esm/stubTrue.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubTrue
 */
function stubTrue() {
  return true;
}

// CONCATENATED MODULE: ./dist/esm/.internal/_squeeze.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _squeeze
 */


function _squeeze(array) {
  return _filter(array, stubTrue);
}

// CONCATENATED MODULE: ./dist/esm/squeeze.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module squeeze
 */


function squeeze(array) {
  return _squeeze(requireObjectCoercible(array));
}

// CONCATENATED MODULE: ./dist/esm/trim.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trim
 */



function trim(string) {
  return _trim(_toString(requireObjectCoercible(string)));
}

// CONCATENATED MODULE: ./dist/esm/trimLeft.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimLeft
 */



function trimLeft(string) {
  return _trimLeft(_toString(requireObjectCoercible(string)));
}

// CONCATENATED MODULE: ./dist/esm/trimRight.js
/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimRight
 */



function trimRight(string) {
  return _trimRight(_toString(requireObjectCoercible(string)));
}

// CONCATENATED MODULE: ./dist/esm/.internal/_trunc.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trunc
 */
var ceil = Math.ceil,
    _trunc_floor = Math.floor;
function _trunc(value) {
  return value < 0 ? ceil(value) : _trunc_floor(value);
}

// CONCATENATED MODULE: ./dist/esm/trunc.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trunc
 */


// CONCATENATED MODULE: ./dist/esm/.internal/_stringLastIndexOf.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringLastIndexOf
 * */

/* harmony default export */ var _stringLastIndexOf = (_methodize(String.prototype.lastIndexOf));

// CONCATENATED MODULE: ./dist/esm/truncate.js
/**
 * @file Truncate a string to a maximum specified length.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module truncate
 */
















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
var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat(_join([rsNonAstral, rsRegional, rsSurrPair], '|'), ")").concat(rsOptVar).concat(reOptMod, ")*");
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:".concat(_join(["".concat(rsNonAstral + rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral], '|'), ")");
/*
 * Used to match string symbols
 * @see https://mathiasbynens.be/notes/javascript-unicode
 */

var reComplexSymbol = new _RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), G_FLAG);
/*
 * Used to detect strings with [zero-width joiners or code points from
 * the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 */

var reHasComplexSymbol = new _RegExp("[".concat(rsZWJ).concat(rsAstralRange).concat(rsComboMarksRange).concat(rsComboSymbolsRange).concat(rsVarRange, "]"));

var hasComplexSymbol = function _hasComplexSymbol(string) {
  return _test(reHasComplexSymbol, string);
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

  while (_test(reComplexSymbol, string)) {
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
 * @param {object} [options] - The options object.
 * @param {number} [options.length=30] - The maximum string length.
 * @param {string} [options.omission='...'] - The string to indicate text
 * is omitted.
 * @param {RegExp|string} [options.separator] - The separator pattern to
 * truncate to.
 * @returns {string} Returns the truncated string.
 */


function truncate(string, options) {
  var str = _toString(string);

  var length = 30;
  var omission = '...';
  var separator;

  if (isObjectLike(options)) {
    if (_hasOwnProperty(options, 'separator')) {
      separator = isRegex(options.separator) ? options.separator : _toString(options.separator);
    }

    if (_hasOwnProperty(options, 'length')) {
      length = toWholeNumber(options.length);
    }

    if (_hasOwnProperty(options, 'omission')) {
      omission = _toString(options.omission);
    }
  }

  var strLength = str.length;
  var matchSymbols;

  if (hasComplexSymbol(str)) {
    matchSymbols = _match(str, reComplexSymbol);
    strLength = matchSymbols.length;
  }

  if (length >= strLength) {
    return str;
  }

  var end = length - stringSize(omission);

  if (end < 1) {
    return omission;
  }

  var result = matchSymbols ? _join(_slice(matchSymbols, 0, end), '') : _stringSlice(str, 0, end);

  if (isUndefined(separator)) {
    return result + omission;
  }

  if (matchSymbols) {
    end += result.length - end;
  }

  if (isRegex(separator)) {
    if (_search(_stringSlice(str, end), separator)) {
      var substr = result;

      if (!separator.global) {
        separator = new _RegExp(separator.source, _toString(_exec(matchFlags, separator)) + G_FLAG);
      }

      separator.lastIndex = 0;
      var newEnd;

      var match = _exec(separator, substr);

      while (match) {
        newEnd = match.index;
        match = _exec(separator, substr);
      }

      result = _stringSlice(result, 0, isUndefined(newEnd) ? end : newEnd);
    }
  } else if (_stringIndexOf(str, separator, end) !== end) {
    var index = _stringLastIndexOf(result, separator);

    if (index > -1) {
      result = _stringSlice(result, 0, index);
    }
  }

  return result + omission;
}

// CONCATENATED MODULE: ./dist/esm/toInteger.js
/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toInteger
 */


// CONCATENATED MODULE: ./dist/esm/toNumber.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */


// CONCATENATED MODULE: ./dist/esm/toString.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toString
 */


// CONCATENATED MODULE: ./dist/esm/union.js
/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module union
 */





var addNotIncluded = function _addNotIncluded(accumulator, value) {
  if (!_includes(accumulator, value)) {
    _push(accumulator, value);
  }

  return accumulator;
};

var reduceArgs = function _reduceArgs(accumulator, array) {
  return _accumulate(requireObjectCoercible(array), addNotIncluded, accumulator);
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

  return _accumulate(arrays, reduceArgs, []);
}

// CONCATENATED MODULE: ./dist/esm/uniq.js
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */


function uniq(array) {
  return _uniq(requireObjectCoercible(array));
}

// CONCATENATED MODULE: ./dist/esm/caboodle-x.js
/* concated harmony reexport accumulate */__webpack_require__.d(__webpack_exports__, "accumulate", function() { return accumulate; });
/* concated harmony reexport all */__webpack_require__.d(__webpack_exports__, "all", function() { return all_all; });
/* concated harmony reexport any */__webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* concated harmony reexport apply */__webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* concated harmony reexport arity */__webpack_require__.d(__webpack_exports__, "arity", function() { return arity; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "assign", function() { return assign_assign; });
/* concated harmony reexport assertIsFunction */__webpack_require__.d(__webpack_exports__, "assertIsFunction", function() { return _assertIsFunction; });
/* concated harmony reexport assertIsObject */__webpack_require__.d(__webpack_exports__, "assertIsObject", function() { return assertIsObjectLike; });
/* concated harmony reexport assertIs */__webpack_require__.d(__webpack_exports__, "assertIs", function() { return assertIs; });
/* concated harmony reexport attempt */__webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* concated harmony reexport bind */__webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* concated harmony reexport call */__webpack_require__.d(__webpack_exports__, "call", function() { return call_call; });
/* concated harmony reexport callFunctionOrIdentity */__webpack_require__.d(__webpack_exports__, "callFunctionOrIdentity", function() { return callFunctionOrIdentity; });
/* concated harmony reexport capitalizeFirst */__webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return capitalizeFirst; });
/* concated harmony reexport capitalize */__webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* concated harmony reexport clamp */__webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* concated harmony reexport constant */__webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* concated harmony reexport defaultToOneOf */__webpack_require__.d(__webpack_exports__, "defaultToOneOf", function() { return defaultToOneOf; });
/* concated harmony reexport defineValidatorProperties */__webpack_require__.d(__webpack_exports__, "defineValidatorProperties", function() { return defineValidatorProperties; });
/* concated harmony reexport defineValidatorProperty */__webpack_require__.d(__webpack_exports__, "defineValidatorProperty", function() { return defineValidatorProperty; });
/* concated harmony reexport delayPromise */__webpack_require__.d(__webpack_exports__, "delayPromise", function() { return delay_promise_x_esm; });
/* concated harmony reexport difference */__webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* concated harmony reexport drop */__webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* concated harmony reexport find */__webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* concated harmony reexport findIndex */__webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* concated harmony reexport getAt */__webpack_require__.d(__webpack_exports__, "getAt", function() { return getAt; });
/* concated harmony reexport getFunctionName */__webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* concated harmony reexport hasOwnProperty */__webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty_hasOwnProperty; });
/* concated harmony reexport head */__webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* concated harmony reexport identity */__webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* concated harmony reexport includes */__webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* concated harmony reexport intersection */__webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* concated harmony reexport intToRGB */__webpack_require__.d(__webpack_exports__, "intToRGB", function() { return intToRGB; });
/* concated harmony reexport isArrayLikeObject */__webpack_require__.d(__webpack_exports__, "isArrayLikeObject", function() { return isArrayLikeObject; });
/* concated harmony reexport isArrayLike */__webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* concated harmony reexport isBinary */__webpack_require__.d(__webpack_exports__, "isBinary", function() { return isBinary; });
/* concated harmony reexport isBooleanType */__webpack_require__.d(__webpack_exports__, "isBooleanType", function() { return isBooleanType; });
/* concated harmony reexport isBoolean */__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return is_boolean_object_default.a; });
/* concated harmony reexport isClassSupported */__webpack_require__.d(__webpack_exports__, "isClassSupported", function() { return isClassSupported; });
/* concated harmony reexport isCountingNumber */__webpack_require__.d(__webpack_exports__, "isCountingNumber", function() { return isCountingNumber; });
/* concated harmony reexport isDate */__webpack_require__.d(__webpack_exports__, "isDate", function() { return is_date_object_default.a; });
/* concated harmony reexport isDOMNode */__webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return isDOMNode; });
/* concated harmony reexport isError */__webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* concated harmony reexport isFalsey */__webpack_require__.d(__webpack_exports__, "isFalsey", function() { return isFalsey; });
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* concated harmony reexport isFunctionType */__webpack_require__.d(__webpack_exports__, "isFunctionType", function() { return isFunctionType; });
/* concated harmony reexport isHex */__webpack_require__.d(__webpack_exports__, "isHex", function() { return isHex; });
/* concated harmony reexport isInteger */__webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* concated harmony reexport isLowerCased */__webpack_require__.d(__webpack_exports__, "isLowerCased", function() { return isLowerCased; });
/* concated harmony reexport isNil */__webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* concated harmony reexport isNull */__webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* concated harmony reexport isNumber */__webpack_require__.d(__webpack_exports__, "isNumber", function() { return is_number_object_default.a; });
/* concated harmony reexport isNumberFinite */__webpack_require__.d(__webpack_exports__, "isNumberFinite", function() { return _isFinite; });
/* concated harmony reexport isNumberNaN */__webpack_require__.d(__webpack_exports__, "isNumberNaN", function() { return _isNaN; });
/* concated harmony reexport isNumberType */__webpack_require__.d(__webpack_exports__, "isNumberType", function() { return isNumberType; });
/* concated harmony reexport isObjectLikeNotArray */__webpack_require__.d(__webpack_exports__, "isObjectLikeNotArray", function() { return isObjectLikeNotArray; });
/* concated harmony reexport isObjectLike */__webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* concated harmony reexport isObjectType */__webpack_require__.d(__webpack_exports__, "isObjectType", function() { return isObjectType; });
/* concated harmony reexport isOctal */__webpack_require__.d(__webpack_exports__, "isOctal", function() { return isOctal; });
/* concated harmony reexport isPopulatedString */__webpack_require__.d(__webpack_exports__, "isPopulatedString", function() { return isPopulatedString; });
/* concated harmony reexport isPrimitive */__webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* concated harmony reexport isRegex */__webpack_require__.d(__webpack_exports__, "isRegex", function() { return isRegex; });
/* concated harmony reexport isSafeInteger */__webpack_require__.d(__webpack_exports__, "isSafeInteger", function() { return isSafeInteger; });
/* concated harmony reexport isSearchIndex */__webpack_require__.d(__webpack_exports__, "isSearchIndex", function() { return isSearchIndex; });
/* concated harmony reexport isSpaced */__webpack_require__.d(__webpack_exports__, "isSpaced", function() { return isSpaced; });
/* concated harmony reexport isStringTypeOrInteger */__webpack_require__.d(__webpack_exports__, "isStringTypeOrInteger", function() { return isStringTypeOrInteger; });
/* concated harmony reexport isStringTypeOrNumberType */__webpack_require__.d(__webpack_exports__, "isStringTypeOrNumberType", function() { return isStringTypeOrNumberType; });
/* concated harmony reexport isStringType */__webpack_require__.d(__webpack_exports__, "isStringType", function() { return isStringType; });
/* concated harmony reexport isString */__webpack_require__.d(__webpack_exports__, "isString", function() { return is_string_default.a; });
/* concated harmony reexport isSurrogatePair */__webpack_require__.d(__webpack_exports__, "isSurrogatePair", function() { return isSurrogatePair; });
/* concated harmony reexport isSymbolType */__webpack_require__.d(__webpack_exports__, "isSymbolType", function() { return isSymbolType; });
/* concated harmony reexport isSymbol */__webpack_require__.d(__webpack_exports__, "isSymbol", function() { return is_symbol_default.a; });
/* concated harmony reexport isSymbolSupported */__webpack_require__.d(__webpack_exports__, "isSymbolSupported", function() { return isSymbolSupported; });
/* concated harmony reexport isToStringTagSupported */__webpack_require__.d(__webpack_exports__, "isToStringTagSupported", function() { return isToStringTagSupported; });
/* concated harmony reexport isTruthy */__webpack_require__.d(__webpack_exports__, "isTruthy", function() { return _Boolean; });
/* concated harmony reexport isUndefined */__webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* concated harmony reexport isUnderscored */__webpack_require__.d(__webpack_exports__, "isUnderscored", function() { return isUnderscored; });
/* concated harmony reexport isUniq */__webpack_require__.d(__webpack_exports__, "isUniq", function() { return isUniq; });
/* concated harmony reexport isUpperCased */__webpack_require__.d(__webpack_exports__, "isUpperCased", function() { return isUpperCased; });
/* concated harmony reexport isValidHtml4Id */__webpack_require__.d(__webpack_exports__, "isValidHtml4Id", function() { return isValidHtml4Id; });
/* concated harmony reexport isValidHtml5Id */__webpack_require__.d(__webpack_exports__, "isValidHtml5Id", function() { return isValidHtml5Id; });
/* concated harmony reexport isWhiteSpaced */__webpack_require__.d(__webpack_exports__, "isWhiteSpaced", function() { return isWhiteSpaced; });
/* concated harmony reexport isWholeNumber */__webpack_require__.d(__webpack_exports__, "isWholeNumber", function() { return isWholeNumber; });
/* concated harmony reexport kebabJoin */__webpack_require__.d(__webpack_exports__, "kebabJoin", function() { return kebabJoin; });
/* concated harmony reexport last */__webpack_require__.d(__webpack_exports__, "last", function() { return last_last; });
/* concated harmony reexport methodize */__webpack_require__.d(__webpack_exports__, "methodize", function() { return methodize; });
/* concated harmony reexport modulo */__webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/* concated harmony reexport negate */__webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* concated harmony reexport nilifyIs */__webpack_require__.d(__webpack_exports__, "nilifyIs", function() { return nilifyIs; });
/* concated harmony reexport normalizeSpace */__webpack_require__.d(__webpack_exports__, "normalizeSpace", function() { return normalizeSpace; });
/* concated harmony reexport noop */__webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* concated harmony reexport numberToDecimalString */__webpack_require__.d(__webpack_exports__, "numberToDecimalString", function() { return toDecimalFormString; });
/* concated harmony reexport numberFormat */__webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* concated harmony reexport parseDecimal */__webpack_require__.d(__webpack_exports__, "parseDecimal", function() { return parseDecimal; });
/* concated harmony reexport parseInteger */__webpack_require__.d(__webpack_exports__, "parseInteger", function() { return _parseInt; });
/* concated harmony reexport partial */__webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* concated harmony reexport partialRight */__webpack_require__.d(__webpack_exports__, "partialRight", function() { return partialRight; });
/* concated harmony reexport padStart */__webpack_require__.d(__webpack_exports__, "padStart", function() { return padStart; });
/* concated harmony reexport regexpEscape */__webpack_require__.d(__webpack_exports__, "regexpEscape", function() { return regExpEscape; });
/* concated harmony reexport replaceComments */__webpack_require__.d(__webpack_exports__, "replaceComments", function() { return replaceComments; });
/* concated harmony reexport requireCoercibleToString */__webpack_require__.d(__webpack_exports__, "requireCoercibleToString", function() { return requireCoercibleToString; });
/* concated harmony reexport requireObjectCoercible */__webpack_require__.d(__webpack_exports__, "requireObjectCoercible", function() { return requireObjectCoercible; });
/* concated harmony reexport sameValue */__webpack_require__.d(__webpack_exports__, "sameValue", function() { return sameValue; });
/* concated harmony reexport sameValueZero */__webpack_require__.d(__webpack_exports__, "sameValueZero", function() { return sameValueZero; });
/* concated harmony reexport shuffle */__webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* concated harmony reexport sign */__webpack_require__.d(__webpack_exports__, "sign", function() { return _sign; });
/* concated harmony reexport sift */__webpack_require__.d(__webpack_exports__, "sift", function() { return sift; });
/* concated harmony reexport stringTest */__webpack_require__.d(__webpack_exports__, "stringTest", function() { return stringTest; });
/* concated harmony reexport stubArray */__webpack_require__.d(__webpack_exports__, "stubArray", function() { return stubArray; });
/* concated harmony reexport stubFalse */__webpack_require__.d(__webpack_exports__, "stubFalse", function() { return stubFalse; });
/* concated harmony reexport stubObject */__webpack_require__.d(__webpack_exports__, "stubObject", function() { return stubObject; });
/* concated harmony reexport stubString */__webpack_require__.d(__webpack_exports__, "stubString", function() { return stubString; });
/* concated harmony reexport stubTrue */__webpack_require__.d(__webpack_exports__, "stubTrue", function() { return stubTrue; });
/* concated harmony reexport squeeze */__webpack_require__.d(__webpack_exports__, "squeeze", function() { return squeeze; });
/* concated harmony reexport surround */__webpack_require__.d(__webpack_exports__, "surround", function() { return surround; });
/* concated harmony reexport trim */__webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* concated harmony reexport trimLeft */__webpack_require__.d(__webpack_exports__, "trimLeft", function() { return trimLeft; });
/* concated harmony reexport trimRight */__webpack_require__.d(__webpack_exports__, "trimRight", function() { return trimRight; });
/* concated harmony reexport trunc */__webpack_require__.d(__webpack_exports__, "trunc", function() { return _trunc; });
/* concated harmony reexport truncate */__webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* concated harmony reexport toBoolean */__webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _Boolean; });
/* concated harmony reexport toInteger */__webpack_require__.d(__webpack_exports__, "toInteger", function() { return _toInteger; });
/* concated harmony reexport toNumber */__webpack_require__.d(__webpack_exports__, "toNumber", function() { return _toNumber; });
/* concated harmony reexport toObject */__webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* concated harmony reexport toPrimitive */__webpack_require__.d(__webpack_exports__, "toPrimitive", function() { return toPrimitive; });
/* concated harmony reexport toPropertyKey */__webpack_require__.d(__webpack_exports__, "toPropertyKey", function() { return toPropertyKey; });
/* concated harmony reexport toString */__webpack_require__.d(__webpack_exports__, "toString", function() { return _toString; });
/* concated harmony reexport toStringTag */__webpack_require__.d(__webpack_exports__, "toStringTag", function() { return toStringTag; });
/* concated harmony reexport toUint24 */__webpack_require__.d(__webpack_exports__, "toUint24", function() { return toUint24; });
/* concated harmony reexport toWholeNumber */__webpack_require__.d(__webpack_exports__, "toWholeNumber", function() { return toWholeNumber; });
/* concated harmony reexport union */__webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* concated harmony reexport uniq */__webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* concated harmony reexport MAX_SAFE_INTEGER */__webpack_require__.d(__webpack_exports__, "MAX_SAFE_INTEGER", function() { return MAX_SAFE_INTEGER; });
/**
 * @file Re-exporter.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module index
 */







































































































































/***/ })
/******/ ]);
});
//# sourceMappingURL=caboodle-x.js.map