(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Caboodle"] = factory();
	else
		root["Caboodle"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 252);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _methodize;

var _bind2 = _interopRequireDefault(__webpack_require__(137));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _methodize
 */
var call = Function.call;

function _methodize(prototypeMethod) {
  return (0, _bind2.default)(call, prototypeMethod);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertIs2 = _interopRequireDefault(__webpack_require__(58));

var _negate2 = _interopRequireDefault(__webpack_require__(75));

var _isNil = _interopRequireDefault(__webpack_require__(8));

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


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

var _isSymbol = _interopRequireDefault(__webpack_require__(81));

var _String2 = _interopRequireDefault(__webpack_require__(139));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toString
 */
function toString(value) {
  if ((0, _isSymbol.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return (0, _String2.default)(value);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertIsFunction;

var _assertIs2 = _interopRequireDefault(__webpack_require__(58));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsFunction
 */
var asserter = (0, _assertIs2.default)(_isFunction.default, 'Not a function');

function assertIsFunction(value) {
  for (var _len = arguments.length, customMessage = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    customMessage[_key - 1] = arguments[_key];
  }

  return asserter.apply(void 0, [value].concat(customMessage));
}

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


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInteger;

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

var _isNumberFinite = _interopRequireDefault(__webpack_require__(54));

var _toNumber = _interopRequireDefault(__webpack_require__(23));

var _sign = _interopRequireDefault(__webpack_require__(50));

/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toInteger
 */
var abs = Math.abs,
    floor = Math.floor;

function toInteger(value) {
  var number = (0, _toNumber.default)(value);

  if ((0, _isNumberNaN.default)(number)) {
    return 0;
  }

  if (number === 0 || !(0, _isNumberFinite.default)(number)) {
    return number;
  }

  return (0, _sign.default)(number) * floor(abs(number));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

var _functionToString2 = _interopRequireDefault(__webpack_require__(138));

var _test2 = _interopRequireDefault(__webpack_require__(37));

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

var _toStringTag = _interopRequireDefault(__webpack_require__(46));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(80));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(77));

var _replaceComments = _interopRequireDefault(__webpack_require__(71));

var _isClassSupported = _interopRequireDefault(__webpack_require__(131));

/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFunction
 */
var FUNC_TAG = '[object Function]';
var GEN_TAG = '[object GeneratorFunction]';
var ASYNC_TAG = '[object AsyncFunction]';
var ctrRx = /^class /;

var testClassString = function _testClassString(value) {
  return (0, _test2.default)(ctrRx, (0, _normalizeSpace.default)((0, _replaceComments.default)((0, _functionToString2.default)(value), ' ')));
};

var isES6ClassFn = function _isES6ClassFn(value) {
  return (0, _attempt.default)(testClassString, value).value === true;
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
 * @example
 * var isFunction = require('is-function-x');
 *
 * isFunction(); // false
 * isFunction(Number.MIN_VALUE); // false
 * isFunction('abc'); // false
 * isFunction(true); // false
 * isFunction({ name: 'abc' }); // false
 * isFunction(function () {}); // true
 * isFunction(new Function ()); // true
 * isFunction(function* test1() {}); // true
 * isFunction(function test2(a, b) {}); // true
 * isFunction(async function test3() {}); // true
 * isFunction(class Test {}); // false
 * isFunction(class Test {}, true); // true
 * isFunction((x, y) => {return this;}); // true
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNil;

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _isNull = _interopRequireDefault(__webpack_require__(57));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNil
 */
function isNil(value) {
  return (0, _isUndefined.default)(value) || (0, _isNull.default)(value);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _push
 */
var _default = (0, _methodize2.default)(Array.prototype.push);

exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _stringTest;

var _isRegex = _interopRequireDefault(__webpack_require__(51));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(66));

var _test2 = _interopRequireDefault(__webpack_require__(37));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringTest
 */
function _stringTest(string, searchValue) {
  return (0, _isRegex.default)(searchValue) ? (0, _test2.default)(searchValue, string) : (0, _stringIndexOf2.default)(string, searchValue) !== -1;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLike;

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _isWholeNumber = _interopRequireDefault(__webpack_require__(53));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLike
 */
function isArrayLike(value) {
  return !(0, _isNil.default)(value) && (0, _isWholeNumber.default)(value.length) && !(0, _isFunction.default)(value);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLike;

var _isNull = _interopRequireDefault(__webpack_require__(57));

var _isObjectType = _interopRequireDefault(__webpack_require__(78));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLike
 */
function isObjectLike(value) {
  return !(0, _isNull.default)(value) && (0, _isObjectType.default)(value);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toWholeNumber;

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _maxSafeInteger = _interopRequireDefault(__webpack_require__(67));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toWholeNumber
 */
function toWholeNumber(value) {
  var integer = (0, _toInteger.default)(value); // includes converting -0 to +0

  if (integer <= 0) {
    return 0;
  }

  return integer > _maxSafeInteger.default ? _maxSafeInteger.default : integer;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attempt;

var _apply2 = _interopRequireDefault(__webpack_require__(18));

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
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
function attempt(fn) {
  var result = {};

  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    result.value = (0, _apply2.default)(fn, this, rest);
    result.threw = false;
  } catch (e) {
    result.value = e;
    result.threw = true;
  }

  return result;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringSlice
 */
var _default = (0, _methodize2.default)(String.prototype.slice);

exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _any;

var _fromIndex2 = _interopRequireDefault(__webpack_require__(128));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _any
 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSymbolType;

var _typeof2 = _interopRequireDefault(__webpack_require__(56));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolType
 */
function isSymbolType(value) {
  return (0, _typeof2.default)(value) === 'symbol';
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _apply
 */
var _default = Function.call.bind(Function.apply);

exports.default = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _call
 */
var _default = Function.call.bind(Function.call);

exports.default = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertIsObjectLike;

var _assertIs2 = _interopRequireDefault(__webpack_require__(58));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsObjectLike
 */
var asserter = (0, _assertIs2.default)(_isObjectLike.default, 'Not an object');

function assertIsObjectLike(value) {
  for (var _len = arguments.length, customMessage = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    customMessage[_key - 1] = arguments[_key];
  }

  return asserter.apply(void 0, [value].concat(customMessage));
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _join
 */
var _default = (0, _methodize2.default)(Array.prototype.join);

exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringType;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringType
 */
function isStringType(value) {
  return typeof value === 'string';
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toNumber;

var _Number2 = _interopRequireDefault(__webpack_require__(70));

var _toPrimitive = _interopRequireDefault(__webpack_require__(69));

var _trim2 = _interopRequireDefault(__webpack_require__(45));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _test2 = _interopRequireDefault(__webpack_require__(37));

var _isBinary = _interopRequireDefault(__webpack_require__(127));

var _isOctal = _interopRequireDefault(__webpack_require__(125));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

var _parseInt2 = _interopRequireDefault(__webpack_require__(65));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */
var nonWSregex = new RegExp("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function _hasNonWS(value) {
  return (0, _test2.default)(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return (0, _test2.default)(invalidHexLiteral, value);
};

function toNumber(argument) {
  var value = (0, _toPrimitive.default)(argument, Number);

  if ((0, _isSymbolType.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if ((0, _isStringType.default)(value)) {
    if ((0, _isBinary.default)(value)) {
      return toNumber((0, _parseInt2.default)((0, _stringSlice2.default)(value, 2), 2));
    }

    if ((0, _isOctal.default)(value)) {
      return toNumber((0, _parseInt2.default)((0, _stringSlice2.default)(value, 2), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN2.default;
    }

    var trimmed = (0, _trim2.default)(value);

    if (trimmed !== value) {
      return toNumber(trimmed);
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
exports.default = isNumberNaN;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberNaN
 */
function isNumberNaN(value) {
  return value !== value;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _slice
 */
var _default = (0, _methodize2.default)(Array.prototype.slice);

exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toObject;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _Object2 = _interopRequireDefault(__webpack_require__(55));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toObject
 */
function toObject(value) {
  return (0, _Object2.default)((0, _requireObjectCoercible.default)(value));
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _replace
 */
var _default = (0, _methodize2.default)(String.prototype.replace);

exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrimitive;

var _isFunctionType = _interopRequireDefault(__webpack_require__(79));

var _isNull = _interopRequireDefault(__webpack_require__(57));

var _isObjectType = _interopRequireDefault(__webpack_require__(78));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPrimitive
 */
function isPrimitive(value) {
  return (0, _isNull.default)(value) || !(0, _isFunctionType.default)(value) && !(0, _isObjectType.default)(value);
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

/**
 * @file Tests if ES6 Symbol is supported.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolSupported
 */

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 */
var _default = typeof Symbol === 'function' && (0, _isSymbolType.default)(Symbol('x'));

exports.default = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUndefined;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUndefined
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _includes;

var _find2 = _interopRequireDefault(__webpack_require__(48));

var _sameValueZero = _interopRequireDefault(__webpack_require__(60));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _includes
 */
function _includes(array, searchElement) {
  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  return _find2.default.apply(void 0, [array, function _predicate(value) {
    return (0, _sameValueZero.default)(searchElement, value);
  }].concat(fromIndex)).includes;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _all;

var _any2 = _interopRequireDefault(__webpack_require__(16));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _all
 */
function _all(array, callback) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, function _iteratee() {
    callback.apply(void 0, arguments);
  }].concat(rest));
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _charAt
 */
var _default = (0, _methodize2.default)(String.prototype.charAt);

exports.default = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireCoercibleToString;

var _toString = _interopRequireDefault(__webpack_require__(3));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireCoercibleToString
 */
function requireCoercibleToString(value) {
  return (0, _toString.default)((0, _requireObjectCoercible.default)(value));
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperties
 */
var _default = Object.defineProperties;
exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Boolean
 */
var _default = true.constructor;
exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _test
 */
var _default = (0, _methodize2.default)(RegExp.prototype.test);

exports.default = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Array2 = _interopRequireDefault(__webpack_require__(105));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _es6ShimIterator = _interopRequireDefault(__webpack_require__(104));

var _fallbackSymbolIterator = _interopRequireDefault(__webpack_require__(103));

var _hasRealSymbolIterator2 = _interopRequireDefault(__webpack_require__(102));

var _hasFakeSymbolIterator2 = _interopRequireDefault(__webpack_require__(59));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module symbolIterator
 */
var _default = function _getSymIt() {
  if (_hasRealSymbolIterator2.default || _hasFakeSymbolIterator2.default) {
    return Symbol.iterator;
  }

  return (0, _isFunction.default)(_Array2.default.prototype[_es6ShimIterator.default]) ? _es6ShimIterator.default : _fallbackSymbolIterator.default;
}();

exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPropertyKey;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

var _toPrimitive = _interopRequireDefault(__webpack_require__(69));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file Converts argument to a value that can be used as a property key.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toPropertyKey
 */

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to onvert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 * @example
 * var toPropertyKey = require('to-property-key-x');
 *
 * toPropertyKey(); // 'undefined'
 * toPropertyKey(1); // '1'
 * toPropertyKey(true); // 'true'
 *
 * var symbol = Symbol('a');
 * toPropertyKey(symbol); // symbol
 *
 * toPropertyKey(Object.create(null)); // TypeError
 */
function toPropertyKey(argument) {
  var key = (0, _toPrimitive.default)(argument, String);
  return _isSymbolSupported.default && (0, _isSymbolType.default)(key) ? key : (0, _toString.default)(key);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperty
 */
var _default = Object.defineProperty;
exports.default = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isArray
 */
var _default = Array.isArray;
exports.default = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasOwnProperty
 */
var _default = (0, _methodize2.default)(Object.prototype.hasOwnProperty);

exports.default = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumberType;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberType
 */
function isNumberType(value) {
  return typeof value === 'number';
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _assign = _interopRequireDefault(__webpack_require__(136));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _indexOf2 = _interopRequireDefault(__webpack_require__(247));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(72));

var _fromCharCode2 = _interopRequireDefault(__webpack_require__(246));

var _map2 = _interopRequireDefault(__webpack_require__(133));

var _reduce2 = _interopRequireDefault(__webpack_require__(74));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

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
  var index = (0, _indexOf2.default)(types, (0, _toLowerCase2.default)((0, _toString.default)(type)));
  var prop = index === -1 ? types[last] : types[index];
  return (0, _reduce2.default)(list, function _iteratee(string, record) {
    return record[prop] ? string + (0, _fromCharCode2.default)(record.code) : string;
  }, '');
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trim;

var _trimLeft2 = _interopRequireDefault(__webpack_require__(76));

var _trimRight2 = _interopRequireDefault(__webpack_require__(132));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trim
 */
function _trim(string) {
  return (0, _trimRight2.default)((0, _trimLeft2.default)(string));
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toStringTag;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Get an object's ES6 @@toStringTag.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */
var method = (0, _methodize2.default)(Object.prototype.toString);
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  return method(value);
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _nth;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _nth
 */
function _nth(array) {
  if (!(0, _isArrayLike.default)(array)) {
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toInteger.default)(arguments.length <= 1 ? undefined : arguments[1]) : 0;
  return (0, _isString.default)(array) ? (0, _charAt2.default)(array, index) : array[index];
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _find;

var _any2 = _interopRequireDefault(__webpack_require__(16));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _find
 */
function _find(array, callback) {
  var result = {
    includes: false,
    index: -1,
    value: void 0
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, function _predicate(value, index, object) {
    var found = callback(value, index, object);

    if (found) {
      result.includes = true;
      result.index = index;
      result.value = value;
    }

    return found;
  }].concat(fromIndex));

  return result;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toUpperCase
 */
var _default = (0, _methodize2.default)(String.prototype.toUpperCase);

exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sign;

var _toNumber = _interopRequireDefault(__webpack_require__(23));

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

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
 * @example
 * var mathSign = require('math-sign-x').sign2018;
 *
 * mathSign(3);     //  1
 * mathSign(-3);    // -1
 * mathSign('-3');  // -1
 * mathSign(0);     //  0
 * mathSign(-0);    // -0
 * mathSign(NaN);   // NaN
 * mathSign('foo'); // NaN
 * mathSign();      // NaN
 */
function sign(x) {
  var n = (0, _toNumber.default)(x);

  if (n === 0 || (0, _isNumberNaN.default)(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRegex;

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _toStringTag = _interopRequireDefault(__webpack_require__(46));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(80));

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _exec2 = _interopRequireDefault(__webpack_require__(126));

var _getOwnPropertyDescriptor2 = _interopRequireDefault(__webpack_require__(241));

/**
 * @file Is this value a JS regex?
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isRegex
 */
var regexClass = '[object RegExp]';

var tryRegexExecCall = function _tryRegexExecCall(value) {
  var result = (0, _attempt.default)(function _attemptee() {
    var storedLastIndex = value.lastIndex; // eslint-disable-next-line no-param-reassign

    value.lastIndex = 0;
    (0, _exec2.default)(value);
    return storedLastIndex;
  });
  /* istanbul ignore next */

  if (result.threw) {
    return false;
  } // eslint-disable-next-line no-param-reassign


  value.lastIndex = result.value;
  return true;
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
  var hasLastIndexDataProperty = descriptor && (0, _hasOwnProperty2.default)(descriptor, 'value');

  if (!hasLastIndexDataProperty) {
    return false;
  }

  return tryRegexExecCall(value);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSafeInteger;

var _isInteger = _interopRequireDefault(__webpack_require__(68));

var _maxSafeInteger = _interopRequireDefault(__webpack_require__(67));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSafeInteger
 */
function isSafeInteger(value) {
  return (0, _isInteger.default)(value) && value >= -_maxSafeInteger.default && value <= _maxSafeInteger.default;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWholeNumber;

var _isSafeInteger = _interopRequireDefault(__webpack_require__(52));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWholeNumber
 */
function isWholeNumber(value) {
  return (0, _isSafeInteger.default)(value) && value >= 0;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumberFinite;

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

var _Infinity2 = _interopRequireDefault(__webpack_require__(130));

var _isNumberType = _interopRequireDefault(__webpack_require__(43));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberFinite
 */

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 * @example
 * var numIsFinite = require('is-finite-x');
 *
 * numIsFinite(Infinity);  // false
 * numIsFinite(NaN);       // false
 * numIsFinite(-Infinity); // false
 *
 * numIsFinite(0);         // true
 * numIsFinite(2e64);      // true
 *
 * numIsFinite('0');       // false, would've been true with
 *                         // global isFinite('0')
 * numIsFinite(null);      // false, would've been true with
 */
function isNumberFinite(number) {
  return (0, _isNumberType.default)(number) && !(0, _isNumberNaN.default)(number) && number !== _Infinity2.default && number !== -_Infinity2.default;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Object
 */
var _default = {}.constructor;
exports.default = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNull;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNull
 */
function isNull(value) {
  return value === null;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertIs;

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _isNil = _interopRequireDefault(__webpack_require__(8));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _assertIs
 */
var toMessage = function _toMessage(message, fallback) {
  return (0, _isNil.default)(message) ? fallback : (0, _toString.default)(message);
};

function _assertIs(predicate, defaultMessage) {
  var defMsg = toMessage(defaultMessage, 'Not a valid value');
  return function assertIsBound(value, customMessage) {
    if ((0, _call2.default)(predicate, this, value)) {
      return value;
    }

    throw new TypeError(toMessage(customMessage, defMsg));
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(56));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasFakeSymbolIterator
 */
var _default = (typeof Symbol === "undefined" ? "undefined" : (0, _typeof2.default)(Symbol)) === 'object' && (0, _isStringType.default)(Symbol.iterator);

exports.default = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValueZero;

var _sameValue = _interopRequireDefault(__webpack_require__(117));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValueZero
 */
function sameValueZero(x, y) {
  return x === y || (0, _sameValue.default)(x, y);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Function
 */
var f = function f() {};

var _default = f.constructor;
exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _bound;

var _apply2 = _interopRequireDefault(__webpack_require__(18));

var _argsToArray2 = _interopRequireDefault(__webpack_require__(124));

var _createArgList2 = _interopRequireDefault(__webpack_require__(235));

var _create2 = _interopRequireDefault(__webpack_require__(123));

var _Function2 = _interopRequireDefault(__webpack_require__(61));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bound
 */
function _bound(binder, name, prototype, length) {
  var bound = (0, _Function2.default)('binder', '_apply', '_argsToArray', "return function bound".concat(name, "(").concat((0, _createArgList2.default)(length), "){ return _apply(binder,this,_argsToArray(arguments)); }"))(binder, _apply2.default, _argsToArray2.default);

  if (prototype) {
    bound.prototype = (0, _create2.default)(prototype);
  }

  return bound;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _accumulate;

var _all2 = _interopRequireDefault(__webpack_require__(32));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _accumulate
 */
function _accumulate(array, callback, initialValue) {
  var accumulator = initialValue;

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  _all2.default.apply(void 0, [array, function _iteratee() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    accumulator = callback.apply(void 0, [accumulator].concat(args));
  }].concat(rest));

  return accumulator;
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _parseInt;

var _toString = _interopRequireDefault(__webpack_require__(3));

var _trimLeft2 = _interopRequireDefault(__webpack_require__(76));

var _Number2 = _interopRequireDefault(__webpack_require__(70));

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

var _test2 = _interopRequireDefault(__webpack_require__(37));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

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
 * @example
 * var $parseInt = require('parse-int-x').parseInt2018;
 *
 * // The following examples all return 15
 * $parseInt(' 0xF', 16);
 * $parseInt(' F', 16);
 * $parseInt('17', 8);
 * $parseInt(021, 8);
 * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
 * $parseInt(15.99, 10);
 * $parseInt('15,123', 10);
 * $parseInt('FXX123', 16);
 * $parseInt('1111', 2);
 * $parseInt('15 * 3', 10);
 * $parseInt('15e2', 10);
 * $parseInt('15px', 10);
 * $parseInt('12', 13);
 *
 * //The following examples all return NaN:
 * $parseInt('Hello', 8); // Not a number at all
 * $parseInt('546', 2);   // Digits are not valid for binary representations
 */

function _parseInt(string, radix) {
  var str = (0, _trimLeft2.default)((0, _toString.default)(string));

  if ((0, _charAt2.default)(str, 0) === "\u180E") {
    return _NaN2.default;
  }

  return parse(str, (0, _Number2.default)(radix) || ((0, _test2.default)(hexPattern, str) ? 16 : 10));
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringIndexOf
 */
var _default = (0, _methodize2.default)(String.prototype.indexOf);

exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module maxSafeInteger
 */
var _default = 9007199254740991;
exports.default = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInteger;

var _isNumberType = _interopRequireDefault(__webpack_require__(43));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInteger
 */
function isInteger(value) {
  return (0, _isNumberType.default)(value) && (0, _toInteger.default)(value) === value;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPrimitive;

var _isSymbol = _interopRequireDefault(__webpack_require__(81));

var _isDate = _interopRequireDefault(__webpack_require__(129));

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _hasToPrimitive2 = _interopRequireDefault(__webpack_require__(243));

var _getMethod2 = _interopRequireDefault(__webpack_require__(242));

var _any2 = _interopRequireDefault(__webpack_require__(16));

/**
 * @file Converts a JavaScript object to a primitive value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */
var symToPrimitive = _hasToPrimitive2.default && Symbol.toPrimitive;
var symValueOf = _isSymbolSupported.default && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];

var ordinaryToPrimitive = function _ordinaryToPrimitive(object, hint) {
  (0, _requireObjectCoercible.default)(object);
  /* istanbul ignore next */

  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var result;
  var wasConverted = (0, _any2.default)(methodNames, function _predicate(methodName) {
    var method = object[methodName];

    if ((0, _isFunction.default)(method)) {
      result = (0, _call2.default)(method, object);

      if ((0, _isPrimitive.default)(result)) {
        return true;
      }
    }

    return false;
  });

  if (wasConverted) {
    return result;
  }

  throw new TypeError('No default value');
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
 * @example
 * var toPrimitive = require('to-primitive-x');
 *
 * var date = new Date(0);
 * toPrimitive(date)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, String)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, Number)); // 0
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
  /* istanbul ignore next */

  if (_isSymbolSupported.default) {
    if (symToPrimitive) {
      exoticToPrim = (0, _getMethod2.default)(input, symToPrimitive);
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

  if (hint === 'default' && ((0, _isDate.default)(input) || (0, _isSymbol.default)(input))) {
    /* istanbul ignore next */
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Number
 */
var _default = 0 .constructor;
exports.default = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceComments;

var _toString = _interopRequireDefault(__webpack_require__(3));

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

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
 * @example
 * var replaceComments = require('replace-comments-x');
 *
 * replaceComments(test;/* test * /, ''), // 'test;'
 * replaceComments(test; // test, ''), // 'test;'
 */

function replaceComments(string) {
  return (0, _replace2.default)((0, _requireCoercibleToString.default)(string), STRIP_COMMENTS, (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toString.default)(arguments.length <= 1 ? undefined : arguments[1]) : '');
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toLowerCase
 */
var _default = (0, _methodize2.default)(String.prototype.toLowerCase);

exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _keys
 */
var _default = Object.keys;
exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _reduce
 */
var _default = (0, _methodize2.default)(Array.prototype.reduce);

exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _negate;

var _apply2 = _interopRequireDefault(__webpack_require__(18));

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

    return !(0, _apply2.default)(predicate, this, args);
  };
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimLeft;

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _whitespace2 = _interopRequireDefault(__webpack_require__(44));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimLeft
 */
var PRE = '^[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function _trimLeft(string) {
  return (0, _replace2.default)(string, whiteSpace, '');
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeSpace;

var _normalizeSpace2 = _interopRequireDefault(__webpack_require__(250));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

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
 * @example
 * var normalizeSpace = require('normalize-space-x');
 *
 * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
 */
function normalizeSpace(string) {
  return (0, _normalizeSpace2.default)((0, _requireCoercibleToString.default)(string));
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectType;

var _typeof2 = _interopRequireDefault(__webpack_require__(56));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectType
 */
function isObjectType(value) {
  return (0, _typeof2.default)(value) === 'object';
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunctionType;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFunctionType
 */
function isFunctionType(value) {
  return typeof value === 'function';
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(56));

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

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
var _default = _isSymbolSupported.default && (0, _typeof2.default)((0, _isSymbolType.default)(Symbol.toStringTag));

exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubTrue;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubTrue
 */
function stubTrue() {
  return true;
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFinite;

var _Infinity = _interopRequireDefault(__webpack_require__(130));

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

var _sign = _interopRequireDefault(__webpack_require__(50));

var _toNumber = _interopRequireDefault(__webpack_require__(23));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toFinite
 */
var MAX_INTEGER = 1.7976931348623157e308;

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  var number = (0, _toNumber.default)(value);

  if (number === _Infinity.default || number === -_Infinity.default) {
    return (0, _sign.default)(number) * MAX_INTEGER;
  }

  return (0, _isNumberNaN.default)(number) ? 0 : number;
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createRange;

var _range2 = _interopRequireDefault(__webpack_require__(159));

var _toFinite = _interopRequireDefault(__webpack_require__(83));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createRange
 */
var getInterval = function _getInterval(from, to) {
  return from < to ? 1 : -1;
};
/**
 * Creates a `range` or `rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] - Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */


function _createRange(fromRight) {
  return function boundRange() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.length;
    var start = args[0],
        end = args[1],
        step = args[2]; // Ensure the sign of `-0` is preserved.

    var from = (0, _toFinite.default)(start);
    var to;

    if (argsLength < 2) {
      to = from;
      from = 0;
    } else {
      to = (0, _toFinite.default)(end);
    }

    var interval = argsLength < 3 ? getInterval(from, to) : (0, _toFinite.default)(step);
    return (0, _range2.default)(from, to, interval, fromRight);
  };
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _RegExp
 */
var _default = /(?:)/.constructor;
exports.default = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _search
 */
var _default = (0, _methodize2.default)(String.prototype.search);

exports.default = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDecimalFormString;

var _Number2 = _interopRequireDefault(__webpack_require__(70));

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(66));

var _join2 = _interopRequireDefault(__webpack_require__(21));

var _search2 = _interopRequireDefault(__webpack_require__(86));

var _test2 = _interopRequireDefault(__webpack_require__(37));

var _toString = _interopRequireDefault(__webpack_require__(3));

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
 * @example
 * var toDecimalFormString = require('number-to-decimal-form-string-x');
 *
 * toDecimalFormString(Number.MIN_SAFE_INTEGER); // '-9007199254740991'
 * toDecimalFormString(-0); // '-0'
 *
 * var number = 0.00000000001;
 * number.toString(); // '1e-11'
 * toDecimalFormString(number); // '0.00000000001'
 *
 * number = 88259496234518.57;
 * number.toString(); '88259496234518.56'
 * toDecimalFormString(number); // '88259496234518.56'
 *
 * toDecimalFormString(Math.PI); // '3.141592653589793'
 * toDecimalFormString(Number.MAX_SAFE_INTEGER); // '9007199254740991'
 *
 * toDecimalFormString('0e+0'); // '0'
 * toDecimalFormString('1e-11'); // '0.00000000001'
 * toDecimalFormString('4.062e-3'); // '0.004062'
 * toDecimalFormString('4.461824e+2'); // '446.1824'
 *
 * toDecimalFormString(NaN); // TypeError
 * toDecimalFormString(' 0'); // TypeError
 * toDecimalFormString('0 '); // TypeError
 * toDecimalFormString('0.'); // TypeError
 * toDecimalFormString('.0'); // TypeError
 * toDecimalFormString('0x1'); // TypeError
 * toDecimalFormString('0o1'); // TypeError
 * toDecimalFormString('0b1'); // TypeError
 * toDecimalFormString('4.062 e-3'); // TypeError
 * toDecimalFormString('9 007 199 254 740 991'); // TypeError
 * toDecimalFormString('9,007,199,254,740,991'); // TypeError
 *
 * toDecimalFormString(Symbol('0')); // TypeError
 * toDecimalFormString(Object.create(null)); // TypeError
 */

function toDecimalFormString(value) {
  var workingValue = value; // Minus zero?

  if (workingValue === 0 && 1 / workingValue < 0) {
    workingValue = MINUS_ZERO_SYMBOL;
  } else {
    workingValue = (0, _toString.default)(workingValue);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _uniq;

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _reduce2 = _interopRequireDefault(__webpack_require__(74));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniq
 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpaced;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

var _whitespace2 = _interopRequireDefault(__webpack_require__(44));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSpaced
 */
var PRE = '[';
var POST = ']';
var containsSpace = new RegExp(PRE + (0, _whitespace2.default)('html') + POST);

function isSpaced(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, containsSpace);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBooleanType;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBooleanType
 */
function isBooleanType(value) {
  return typeof value === 'boolean';
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = padStart;

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

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
 * @example
 * var padStart = require('string-pad-start-x');
 *
 * padStart('a', 3, 'b'); // 'bba'
 * padStart('a', 3); // '  a'
 * padStart('a', 2, 'bc'); // 'ba'
 */
function padStart(string, targetLength) {
  var str = (0, _toString.default)((0, _requireCoercibleToString.default)(string));
  var stringLength = (0, _toWholeNumber.default)(str.length);
  var fillString = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : void 0;
  var filler = (0, _isUndefined.default)(fillString) ? '' : (0, _toString.default)(fillString);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modulo;

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
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions}
 * @see {@link https://en.wikipedia.org/wiki/Modulo_operation}
 * @example
 * var modulo = require('modulo-x');
 * modulo(1, 0x1000000); // 1
 * modulo(-1, 0x1000000); // 16777215 (2^24-1)
 */

function modulo(dividend, divisor) {
  var remain = dividend % divisor;
  return floor(remain >= 0 ? remain : remain + divisor);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toUint24;

var _toNumber = _interopRequireDefault(__webpack_require__(23));

var _modulo = _interopRequireDefault(__webpack_require__(92));

var _sign = _interopRequireDefault(__webpack_require__(50));

var _isNumberFinite = _interopRequireDefault(__webpack_require__(54));

/**
 * @file Converts a value to Uint24.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toUint24
 */
var floor = Math.floor,
    abs = Math.abs;
/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 * @example
 * var toUint24 = require('to-uint-24-x');
 * toUint24(1); // 1
 * toUint24(-1); // 16777215 (2^24-1)
 */

function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  var number = (0, _toNumber.default)(argument); // If number is NaN, +0, -0, +∞, or -∞, return +0.

  if (number === 0 || !(0, _isNumberFinite.default)(number)) {
    return 0;
  } // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.


  return (0, _modulo.default)((0, _sign.default)(number) * floor(abs(number)), 0x1000000);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _numberToString
 */
var _default = (0, _methodize2.default)(Number.prototype.toString);

exports.default = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(99);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Map;

var _isArray2 = _interopRequireDefault(__webpack_require__(41));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(40));

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _symbolIterator = _interopRequireDefault(__webpack_require__(38));

var _occurs2 = _interopRequireDefault(__webpack_require__(96));

var base = _interopRequireWildcard(__webpack_require__(98));

/**
 * @file ES6 Map.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Map
 */

/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: Done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {Object} context - The Map object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */
var MapIt = function MapIterator(context, iteratorKind) {
  (0, _defineProperties2.default)(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Map]]': {
      value: (0, _assertIsObjectLike.default)(context)
    },
    '[[MapIterationKind]]': {
      value: iteratorKind
    },
    '[[MapNextIndex]]': {
      value: 0,
      writable: true
    }
  });
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {Object} Returns an object with two properties: done and value.
 */


(0, _defineProperty2.default)(MapIt.prototype, 'next', {
  value: function next() {
    var context = (0, _assertIsObjectLike.default)(this['[[Map]]']);
    (0, _assertIsObjectLike.default)(context);
    var index = this['[[MapNextIndex]]'];

    if (this['[[IteratorHasMore]]'] && index < context['[[key]]'].length) {
      var object = {
        done: false
      };
      var iteratorKind = this['[[MapIterationKind]]'];
      object.value = iteratorKind === 'key+value' ? [context['[[key]]'][index], context['[[value]]'][index]] : context["[[".concat(iteratorKind, "]]")][index];
      this['[[MapNextIndex]]'] += 1;
      return object;
    }

    this['[[IteratorHasMore]]'] = false;
    return {
      done: true,
      value: void 0
    };
  }
});
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @returns {Object} This Iterator object.
 */

(0, _defineProperty2.default)(MapIt.prototype, _symbolIterator.default, {
  value: function iterator() {
    /* istanbul ignore next */
    return this;
  }
});
/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @private
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map, null is treated as undefined.
 * @example
 * var Map = require('collections-x').Map;
 * var myMap = new Map();
 *
 * var keyString = "a string",
 *     keyObj = {},
 *     keyFunc = function () {};
 *
 * // setting the values
 * myMap.set(keyString, "value associated with 'a string'");
 * myMap.set(keyObj, "value associated with keyObj");
 * myMap.set(keyFunc, "value associated with keyFunc");
 *
 * myMap.size; // 3
 *
 * // getting the values
 * myMap.get(keyString);    // "value associated with 'a string'"
 * myMap.get(keyObj);       // "value associated with keyObj"
 * myMap.get(keyFunc);      // "value associated with keyFunc"
 *
 * myMap.get("a string");   // "value associated with 'a string'"
 *                          // because keyString === 'a string'
 * myMap.get({});           // undefined, because keyObj !== {}
 * myMap.get(function() {}) // undefined, because keyFunc !== function () {}
 *
 * // Using NaN as Map keys
 * var myMap = new Map();
 * myMap.set(NaN, "not a number");
 *
 * myMap.get(NaN); // "not a number"
 *
 * var otherNaN = Number("foo");
 * myMap.get(otherNaN); // "not a number"
 *
 * // Relation with Array objects
 * var kvArray = [["key1", "value1"], ["key2", "value2"]];
 *
 * // Use the regular Map constructor to transform a
 * // 2D key-value Array into a map
 * var myMap = new Map(kvArray);
 *
 * myMap.get("key1"); // returns "value1"
 */

function Map() {
  if (!this || !(this instanceof Map)) {
    throw new TypeError("Constructor Map requires 'new'");
  }

  base.parseIterable('map', this, arguments.length ? arguments.length <= 0 ? undefined : arguments[0] : void 0);
}

(0, _defineProperty2.default)(Map, 'SYMBOL_ITERATOR', {
  value: _symbolIterator.default
});
(0, _defineProperties2.default)(Map.prototype,
/** @lends module:collections-x.Map.prototype */
{
  /**
   * The clear() method removes all elements from a Map object.
   *
   * @returns {Object} The Map object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("bar", "baz");
   * myMap.set(1, "foo");
   *
   * myMap.size;       // 2
   * myMap.has("bar"); // true
   *
   * myMap.clear();
   *
   * myMap.size;       // 0
   * myMap.has("bar")  // false
   */
  clear: {
    value: function clear() {
      return base.clear('map', this);
    }
  },

  /**
   * The delete() method removes the specified element from a Map object.
   *
   * @param {*} key - The key of the element to remove from the Map object.
   * @returns {boolean} Returns true if an element in the Map object has been
   *  removed successfully.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("bar", "foo");
   *
   * myMap.delete("bar"); // Returns true. Successfully removed.
   * myMap.has("bar");    // Returns false.
   *                      // The "bar" element is no longer present.
   */
  delete: {
    value: function de1ete(key) {
      return base.de1ete('map', this, key);
    }
  },

  /**
   * The entries() method returns a new Iterator object that contains the
   * [key, value] pairs for each element in the Map object in insertion order.
   *
   * @returns {Object} A new Iterator object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("0", "foo");
   * myMap.set(1, "bar");
   * myMap.set({}, "baz");
   *
   * var mapIter = myMap.entries();
   *
   * console.log(mapIter.next().value); // ["0", "foo"]
   * console.log(mapIter.next().value); // [1, "bar"]
   * console.log(mapIter.next().value); // [Object, "baz"]
   */
  entries: {
    value: function entries() {
      return new MapIt(this, 'key+value');
    }
  },

  /**
   * The forEach() method executes a provided function once per each
   * key/value pair in the Map object, in insertion order.
   *
   * @param {Function} callback - Function to execute for each element..
   * @param {*} [thisArg] - Value to use as this when executing callback.
   * @returns {Object} The Map object.
   * @example
   * var Map = require('collections-x').Map;
   * function logElements(value, key, map) {
   *      console.log("m[" + key + "] = " + value);
   * }
   * var myMap = new Map([["foo", 3], ["bar", {}], ["baz", undefined]]);
   * myMap.forEach(logElements);
   * // logs:
   * // "m[foo] = 3"
   * // "m[bar] = [object Object]"
   * // "m[baz] = undefined"
   */
  forEach: {
    value: function forEach(callback) {
      for (var _len = arguments.length, thisArg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        thisArg[_key - 1] = arguments[_key];
      }

      return base.forEach.apply(base, ['map', this, callback].concat(thisArg));
    }
  },

  /**
   * The get() method returns a specified element from a Map object.
   *
   * @param {*} key - The key of the element to return from the Map object.
   * @returns {*} Returns the element associated with the specified key or
   *  undefined if the key can't be found in the Map object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("bar", "foo");
   *
   * myMap.get("bar");  // Returns "foo".
   * myMap.get("baz");  // Returns undefined.
   */
  get: {
    value: function get(key) {
      var occurred = (0, _occurs2.default)((0, _assertIsObjectLike.default)(this)['[[key]]'], key);
      return occurred.includes ? this['[[value]]'][occurred.index] : void 0;
    }
  },

  /**
   * The has() method returns a boolean indicating whether an element with
   * the specified key exists or not.
   *
   * @function
   * @param {*} key - The key of the element to test for presence in the
   *  Map object.
   * @returns {boolean} Returns true if an element with the specified key
   *  exists in the Map object; otherwise false.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("bar", "foo");
   *
   * myMap.has("bar");  // returns true
   * myMap.has("baz");  // returns false
   */
  has: {
    value: base.has
  },

  /**
   * The keys() method returns a new Iterator object that contains the keys
   * for each element in the Map object in insertion order.
   *
   * @returns {Object} A new Iterator object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("0", "foo");
   * myMap.set(1, "bar");
   * myMap.set({}, "baz");
   *
   * var mapIter = myMap.keys();
   *
   * console.log(mapIter.next().value); // "0"
   * console.log(mapIter.next().value); // 1
   * console.log(mapIter.next().value); // Object
   */
  keys: {
    value: function keys() {
      return new MapIt(this, 'key');
    }
  },

  /**
   * The set() method adds a new element with a specified key and value to
   * a Map object.
   *
   * @param {*} key - The key of the element to add to the Map object.
   * @param {*} value - The value of the element to add to the Map object.
   * @returns {Object} The Map object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   *
   * // Add new elements to the map
   * myMap.set("bar", "foo");
   * myMap.set(1, "foobar");
   *
   * // Update an element in the map
   * myMap.set("bar", "fuuu");
   */
  set: {
    value: function set(key, value) {
      return base.addSet('map', this, key, value);
    }
  },

  /**
   * The value of size is an integer representing how many entries the Map
   * object has.
   *
   * @name size
   * @instance
   * @type {number}
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set(1, true);
   * myMap.set(5, false);
   * myMap.set("_any text", 1);
   *
   * myMap.size; // 3
   */
  size: {
    get: function size() {
      if (!this || !(0, _isArray2.default)(this['[[key]]']) || this['[[kind]]'] !== 'map') {
        throw new ReferenceError('MapObject is not defined');
      }

      return this['[[key]]'].length;
    }
  },

  /**
   * The values() method returns a new Iterator object that contains the
   * values for each element in the Map object in insertion order.
   *
   * @returns {Object} A new Iterator object.
   * @example
   * var Map = require('collections-x').Map;
   * var myMap = new Map();
   * myMap.set("0", "foo");
   * myMap.set(1, "bar");
   * myMap.set({}, "baz");
   *
   * var mapIter = myMap.values();
   *
   * console.log(mapIter.next().value); // "foo"
   * console.log(mapIter.next().value); // "bar"
   * console.log(mapIter.next().value); // "baz"
   */
  values: {
    value: function values() {
      return new MapIt(this, 'value');
    }
  }
});
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the entries property.
 *
 * @function symIt
 * @returns {Object} A new Iterator object.
 * @example
 * var Map = require('collections-x').Map;
 * var symIt = require('collections-x').symIt;
 * var myMap = new Map();
 * myMap.set("0", "foo");
 * myMap.set(1, "bar");
 * myMap.set({}, "baz");
 *
 * var mapIter = myMap[symIt]();
 *
 * console.log(mapIter.next().value); // ["0", "foo"]
 * console.log(mapIter.next().value); // [1, "bar"]
 * console.log(mapIter.next().value); // [Object, "baz"]
 */

(0, _defineProperty2.default)(Map.prototype, _symbolIterator.default, {
  value: Map.prototype.entries
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _occurs;

var _sameValueZero = _interopRequireDefault(__webpack_require__(60));

var _find2 = _interopRequireDefault(__webpack_require__(48));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _occurs
 */
function _occurs(array, value) {
  return (0, _find2.default)(array, function _predicate(item) {
    return (0, _sameValueZero.default)(value, item);
  });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _charCodeAt2 = _interopRequireDefault(__webpack_require__(213));

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
 * @example
 * var isSurrogatePair = require('is-surrogate-pair-x');
 *
 * var test1 = 'a';
 * var test2 = '𠮟';
 *
 * isSurrogatePair(test1); // false
 * isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
 * isSurrogatePair(test2); // true
 * isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIterable = parseIterable;
exports.forEach = forEach;
exports.has = has;
exports.clear = clear;
exports.de1ete = de1ete;
exports.addSet = addSet;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _BigCounter = _interopRequireDefault(__webpack_require__(121));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__(97));

var _any2 = _interopRequireDefault(__webpack_require__(16));

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(40));

var _nth2 = _interopRequireDefault(__webpack_require__(47));

var _getSymbolIterator2 = _interopRequireDefault(__webpack_require__(212));

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _occurs2 = _interopRequireDefault(__webpack_require__(96));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _splice2 = _interopRequireDefault(__webpack_require__(211));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _collectionsBase
 */

/**
 * If an iterable object is passed, all of its elements will be added to the
 * new Map/Set, null is treated as undefined.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @param {*} iterable - Value to parsed.
 */
function parseIterable(kind, context, iterable) {
  if (kind === 'map') {
    (0, _defineProperty2.default)(context, '[[value]]', {
      value: []
    });
  }

  (0, _defineProperties2.default)(context, {
    '[[changed]]': {
      value: false
    },
    '[[id]]': {
      value: new _BigCounter.default()
    },
    '[[kind]]': {
      value: kind
    },
    '[[key]]': {
      value: []
    },
    '[[order]]': {
      value: []
    }
  });
  var property = (0, _getSymbolIterator2.default)(iterable);

  if (iterable && (0, _isFunction.default)(iterable[property])) {
    var iterator = iterable[property]();
    var next = iterator.next();

    if (kind === 'map') {
      if (!(0, _isArrayLike.default)(next.value) || next.value.length < 2) {
        throw new TypeError("Iterator value ".concat(next.value, " is not an entry object"));
      }
    }

    while (!next.done) {
      var key = kind === 'map' ? next.value[0] : next.value;
      var occurred = (0, _occurs2.default)((0, _assertIsObjectLike.default)(context)['[[key]]']);

      if (!occurred.includes) {
        if (kind === 'map') {
          (0, _push2.default)(context['[[value]]'], next.value[1]);
        }

        (0, _push2.default)(context['[[key]]'], key);
        (0, _push2.default)(context['[[order]]'], context['[[id]]'].get());
        context['[[id]]'].next();
      } else if (kind === 'map') {
        // eslint-disable-next-line no-param-reassign
        context['[[value]]'][occurred.index] = (0, _nth2.default)(next.value, 1);
      }

      next = iterator.next();
    }
  } else if ((0, _isStringType.default)(iterable)) {
    if (kind === 'map') {
      throw new TypeError("Iterator value ".concat((0, _charAt2.default)(iterable, 0), " is not an entry object"));
    }

    var _next = 0;

    while (_next < iterable.length) {
      var char1 = (0, _charAt2.default)(iterable, _next);
      var char2 = (0, _charAt2.default)(iterable, _next + 1);

      var _key = void 0;

      if ((0, _isSurrogatePair.default)(char1, char2)) {
        _key = char1 + char2;
        _next += 1;
      } else {
        _key = char1;
      }

      if (!(0, _occurs2.default)((0, _assertIsObjectLike.default)(context)['[[key]]'], _key).includes) {
        (0, _push2.default)(context['[[key]]'], _key);
        (0, _push2.default)(context['[[order]]'], context['[[id]]'].get());
        context['[[id]]'].next();
      }

      _next += 1;
    }
  } else if ((0, _isArrayLike.default)(iterable)) {
    var _next2 = 0;

    while (_next2 < iterable.length) {
      if (kind === 'map' && (0, _isPrimitive.default)(iterable[_next2])) {
        throw new TypeError("Iterator value ".concat(_next2.value, " is not an entry object"));
      }

      var _key2 = kind === 'map' ? iterable[_next2][0] : iterable[_next2];

      var _occurred = (0, _occurs2.default)((0, _assertIsObjectLike.default)(context)['[[key]]'], _key2);

      if (!_occurred.includes) {
        if (kind === 'map') {
          (0, _push2.default)(context['[[value]]'], iterable[_next2][1]);
        }

        (0, _push2.default)(context['[[key]]'], _key2);
        (0, _push2.default)(context['[[order]]'], context['[[id]]'].get());
        context['[[id]]'].next();
      } else if (kind === 'map') {
        // eslint-disable-next-line no-param-reassign
        context['[[value]]'][_occurred.index] = (0, _nth2.default)(iterable[_next2], 1);
      }

      _next2 += 1;
    }
  }
}
/**
 * The base forEach method executes a provided function once per each value
 * in the Map/Set object, in insertion order.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @param {Function} callback - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @returns {Object} The Map/Set object.
 */


function forEach(kind, context, callback, thisArg) {
  (0, _assertIsObjectLike.default)(context);
  (0, _assertIsFunction.default)(callback);
  var pointers = {
    index: 0,
    order: context['[[order]]'][0]
  }; // eslint-disable-next-line no-param-reassign

  context['[[change]]'] = false;
  var keyLength = context['[[key]]'].length;

  while (pointers.index < keyLength) {
    if ((0, _hasOwnProperty2.default)(context['[[key]]'], pointers.index)) {
      var key = context['[[key]]'][pointers.index];
      var value = kind === 'map' ? context['[[value]]'][pointers.index] : key;
      callback.call(thisArg, value, key, context);
    }

    if (context['[[change]]']) {
      keyLength = context['[[key]]'].length;
      (0, _any2.default)(context['[[order]]'], function _predicate(id, count) {
        pointers.index = count;
        return id > pointers.order;
      }); // eslint-disable-next-line no-param-reassign

      context['[[change]]'] = false;
    } else {
      pointers.index += 1;
    }

    pointers.order = context['[[order]]'][pointers.index];
  }

  return context;
}
/**
 * The base has method returns a boolean indicating whether an element with
 * the specified key/value exists in a Map/Set object or not.
 *
 * @private
 * @param {*} key - The key/value to test for presence in the Map/Set object.
 * @returns {boolean} Returns true if an element with the specified key/value
 *  exists in the Map/Set object; otherwise false.
 */


function has(key) {
  return (0, _occurs2.default)((0, _assertIsObjectLike.default)(this)['[[key]]'], key).includes;
}
/**
 * The base clear method removes all elements from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @returns {Object} The Map/Set object.
 */


function clear(kind, context) {
  (0, _assertIsObjectLike.default)(context);
  context['[[id]]'].reset(); // eslint-disable-next-line no-param-reassign

  context['[[change]]'] = true; // eslint-disable-next-line no-param-reassign

  context['[[order]]'].length = 0; // eslint-disable-next-line no-param-reassign

  context['[[key]]'].length = 0;

  if (kind === 'map') {
    // eslint-disable-next-line no-param-reassign
    context['[[value]]'].length = 0;
  }

  return context;
}
/**
 * The base delete method removes the specified element from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @param {*} key - The key/value of the element to remove from Map/Set object.
 * @returns {Object} The Map/Set object.
 */


function de1ete(kind, context, key) {
  var occurred = (0, _occurs2.default)((0, _assertIsObjectLike.default)(context)['[[key]]'], key);

  if (occurred.includes) {
    if (kind === 'map') {
      (0, _splice2.default)(context['[[value]]'], occurred.index, 1);
    }

    (0, _splice2.default)(context['[[key]]'], occurred.index, 1);
    (0, _splice2.default)(context['[[order]]'], occurred.index, 1); // eslint-disable-next-line no-param-reassign

    context['[[change]]'] = true;
    return true;
  }

  return false;
}
/**
 * The base set and add method.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @param {*} key - The key or value of the element to add/set on the object.
 * @param {*} value - The value of the element to add to the Map object.
 * @returns {Object} The Map/Set object.
 */


function addSet(kind, context, key, value) {
  var occurred = (0, _occurs2.default)((0, _assertIsObjectLike.default)(context)['[[key]]'], key);

  if (occurred.includes) {
    if (kind === 'map') {
      // eslint-disable-next-line no-param-reassign
      context['[[value]]'][occurred.index] = value;
    }
  } else {
    if (kind === 'map') {
      (0, _push2.default)(context['[[value]]'], value);
    }

    (0, _push2.default)(context['[[key]]'], key);
    (0, _push2.default)(context['[[order]]'], context['[[id]]'].get());
    context['[[id]]'].next(); // eslint-disable-next-line no-param-reassign

    context['[[change]]'] = true;
  }

  return context;
}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(99);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Set;

var _isArray2 = _interopRequireDefault(__webpack_require__(41));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(40));

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _symbolIterator = _interopRequireDefault(__webpack_require__(38));

var base = _interopRequireWildcard(__webpack_require__(98));

/**
 * @file ES6 Set.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Set
 */

/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: Done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {Object} context - The Set object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */
var SetIt = function SetIterator(context, iteratorKind) {
  (0, _defineProperties2.default)(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Set]]': {
      value: (0, _assertIsObjectLike.default)(context)
    },
    '[[SetIterationKind]]': {
      value: iteratorKind || 'value'
    },
    '[[SetNextIndex]]': {
      value: 0,
      writable: true
    }
  });
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {Object} Returns an object with two properties: done and value.
 */


(0, _defineProperty2.default)(SetIt.prototype, 'next', {
  value: function next() {
    var context = (0, _assertIsObjectLike.default)(this['[[Set]]']);
    var index = this['[[SetNextIndex]]'];

    if (this['[[IteratorHasMore]]'] && index < context['[[key]]'].length) {
      var object = {
        done: false
      };
      var value = context['[[key]]'][index];
      object.value = this['[[SetIterationKind]]'] === 'key+value' ? [value, value] : value;
      this['[[SetNextIndex]]'] += 1;
      return object;
    }

    this['[[IteratorHasMore]]'] = false;
    return {
      done: true,
      value: void 0
    };
  }
});
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @returns {Object} This Iterator object.
 */

(0, _defineProperty2.default)(SetIt.prototype, _symbolIterator.default, {
  value: function iterator() {
    /* istanbul ignore next */
    return this;
  }
});
/**
 * This method returns a new Iterator object that contains the
 * values for each element in the Set object in insertion order.
 *
 * @private
 * @this Set
 * @returns {Object} A new Iterator object.
 */

var setValuesIterator = function values() {
  return new SetIt(this);
};
/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @private
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set, null is treated as undefined.
 * @example
 * var mySet = new Set();
 *
 * mySet.add(1);
 * mySet.add(5);
 * mySet.add("_any text");
 * var o = {a: 1, b: 2};
 * mySet.add(o);
 *
 * mySet.has(1); // true
 * mySet.has(3); // false, 3 has not been added to the set
 * mySet.has(5);              // true
 * mySet.has(Math.sqrt(25));  // true
 * mySet.has("_any Text".toLowerCase()); // true
 * mySet.has(o); // true
 *
 * mySet.size; // 4
 *
 * mySet.delete(5); // removes 5 from the set
 * mySet.has(5);    // false, 5 has been removed
 *
 * mySet.size; // 3, we just removed one value
 *
 * // Relation with Array objects
 *
 * var myArray = ["value1", "value2", "value3"];
 *
 * // Use the regular Set constructor to transform an Array into a Set
 * var mySet = new Set(myArray);
 *
 * mySet.has("value1"); // returns true
 *
 * // Use the spread operator to transform a set into an Array.
 * console.log(uneval([...mySet])); // Will show you exactly the same Array
 *                                  // as myArray
 */


function Set() {
  if (!this || !(this instanceof Set)) {
    throw new TypeError("Constructor Set requires 'new'");
  }

  base.parseIterable('set', this, arguments.length ? arguments.length <= 0 ? undefined : arguments[0] : void 0);
}

(0, _defineProperty2.default)(Set, 'SYMBOL_ITERATOR', {
  value: _symbolIterator.default
});
(0, _defineProperties2.default)(Set.prototype,
/** @lends module:collections-x.Set.prototype */
{
  /**
   * The add() method appends a new element with a specified value to the end
   * of a Set object.
   *
   * @param {*} value - Required. The value of the element to add to the Set
   *  object.
   * @returns {Object} The Set object.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   *
   * mySet.add(1);
   * mySet.add(5).add("_any text"); // chainable
   *
   * console.log(mySet);
   * // Set [1, 5, "_any text"]
   */
  add: {
    value: function add(value) {
      return base.addSet('set', this, value);
    }
  },

  /**
   * The clear() method removes all elements from a Set object.
   *
   * @returns {Object} The Set object.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add(1);
   * mySet.add("foo");
   *
   * mySet.size;       // 2
   * mySet.has("foo"); // true
   *
   * mySet.clear();
   *
   * mySet.size;       // 0
   * mySet.has("bar")  // false
   */
  clear: {
    value: function clear() {
      return base.clear('set', this);
    }
  },

  /**
   * The delete() method removes the specified element from a Set object.
   *
   * @param {*} value - The value of the element to remove from the Set object.
   * @returns {boolean} Returns true if an element in the Set object has been
   *  removed successfully; otherwise false.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add("foo");
   *
   * mySet.delete("bar"); // Returns false. No "bar" element found
   *                      //to be deleted.
   * mySet.delete("foo"); // Returns true.  Successfully removed.
   *
   * mySet.has("foo");    // Returns false. The "foo" element is no
   *                      //longer present.
   */
  delete: {
    value: function de1ete(value) {
      return base.de1ete('set', this, value);
    }
  },

  /**
   * The entries() method returns a new Iterator object that contains an
   * array of [value, value] for each element in the Set object, in
   * insertion order. For Set objects there is no key like in Map objects.
   * However, to keep the API similar to the Map object, each entry has the
   * same value for its key and value here, so that an array [value, value]
   * is returned.
   *
   * @function
   * @returns {Object} A new Iterator object.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add("foobar");
   * mySet.add(1);
   * mySet.add("baz");
   *
   * var setIter = mySet.entries();
   *
   * console.log(setIter.next().value); // ["foobar", "foobar"]
   * console.log(setIter.next().value); // [1, 1]
   * console.log(setIter.next().value); // ["baz", "baz"]
   */
  entries: {
    value: function entries() {
      return new SetIt(this, 'key+value');
    }
  },

  /**
   * The forEach() method executes a provided function once per each value
   * in the Set object, in insertion order.
   *
   * @param {Function} callback - Function to execute for each element.
   * @param {*} [thisArg] - Value to use as this when executing callback.
   * @returns {Object} The Set object.
   * @example
   * function logSetElements(value1, value2, set) {
   *     console.log("s[" + value1 + "] = " + value2);
   * }
   *
   * new Set(["foo", "bar", undefined]).forEach(logSetElements);
   *
   * // logs:
   * // "s[foo] = foo"
   * // "s[bar] = bar"
   * // "s[undefined] = undefined"
   */
  forEach: {
    value: function forEach(callback) {
      for (var _len = arguments.length, thisArg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        thisArg[_key - 1] = arguments[_key];
      }

      return base.forEach.apply(base, ['set', this, callback].concat(thisArg));
    }
  },

  /**
   * The has() method returns a boolean indicating whether an element with the
   * specified value exists in a Set object or not.
   *
   * @function
   * @param {*} value - The value to test for presence in the Set object.
   * @returns {boolean} Returns true if an element with the specified value
   *  exists in the Set object; otherwise false.
   * @example
   * var Set = require('collections-x').Set;
   * var mySet = new Set();
   * mySet.add("foo");
   *
   * mySet.has("foo");  // returns true
   * mySet.has("bar");  // returns false
   */
  has: {
    value: base.has
  },

  /**
   * The keys() method is an alias for the `values` method (for similarity
   * with Map objects); it behaves exactly the same and returns values of
   * Set elements.
   *
   * @function
   * @returns {Object} A new Iterator object.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add("foo");
   * mySet.add("bar");
   * mySet.add("baz");
   *
   * var setIter = mySet.keys();
   *
   * console.log(setIter.next().value); // "foo"
   * console.log(setIter.next().value); // "bar"
   * console.log(setIter.next().value); // "baz"
   */
  keys: {
    value: setValuesIterator
  },

  /**
   * The value of size is an integer representing how many entries the Set
   * object has.
   *
   * @name size
   * @instance
   * @type {number}
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add(1);
   * mySet.add(5);
   * mySet.add("_any text");
   *
   * mySet.size; // 3
   */
  size: {
    get: function size() {
      if (!this || !(0, _isArray2.default)(this['[[key]]']) || this['[[kind]]'] !== 'set') {
        throw new ReferenceError('SetObject is not defined');
      }

      return this['[[key]]'].length;
    }
  },

  /**
   * The values() method returns a new Iterator object that contains the
   * values for each element in the Set object in insertion order.
   *
   * @function
   * @returns {Object} A new Iterator object.
   * @example
   * var Set = require('collections-x').Set
   * var mySet = new Set();
   * mySet.add("foo");
   * mySet.add("bar");
   * mySet.add("baz");
   *
   * var setIter = mySet.values();
   *
   * console.log(setIter.next().value); // "foo"
   * console.log(setIter.next().value); // "bar"
   * console.log(setIter.next().value); // "baz"
   */
  values: {
    value: setValuesIterator
  }
});
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the values property.
 *
 * @function symIt
 * @returns {Object} A new Iterator object.
 * @example
 * var Set = require('collections-x').Set,
 * var symIt = var Set = require('collections-x').symIt;
 * var mySet = new Set();
 * mySet.add("0");
 * mySet.add(1);
 * mySet.add({});
 *
 * var setIter = mySet[symIt]();
 *
 * console.log(setIter.next().value); // "0"
 * console.log(setIter.next().value); // 1
 * console.log(setIter.next().value); // Object
 */

(0, _defineProperty2.default)(Set.prototype, _symbolIterator.default, {
  value: setValuesIterator
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _shift
 */
var _default = (0, _methodize2.default)(Array.prototype.shift);

exports.default = _default;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasRealSymbolIterator
 */
var _default = _isSymbolSupported.default && (0, _isSymbolType.default)(Symbol.iterator);

exports.default = _default;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fallbackSymbolIterator
 */
var _default = '@@iterator';
exports.default = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _es6ShimIterator
 */
var _default = '_es6-shim iterator_';
exports.default = _default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Array
 */
var _default = [].constructor;
exports.default = _default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _match
 */
var _default = (0, _methodize2.default)(String.prototype.match);

exports.default = _default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFunctionName;

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _isArray2 = _interopRequireDefault(__webpack_require__(41));

var _match2 = _interopRequireDefault(__webpack_require__(106));

var _functionToString2 = _interopRequireDefault(__webpack_require__(138));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _Function2 = _interopRequireDefault(__webpack_require__(61));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(77));

var _replaceComments = _interopRequireDefault(__webpack_require__(71));

/**
 * @file Get the name of the function.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getFunctionName
 */
var ANONYMOUS = 'anonymous';
var getName;
/* istanbul ignore next */

if (function test1() {}.name === 'test1') {
  var createsAnonymous = (0, _Function2.default)().name === ANONYMOUS;

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
    var result = (0, _attempt.default)(function _attemptee() {
      return (0, _match2.default)((0, _normalizeSpace.default)((0, _replaceComments.default)((0, _functionToString2.default)(fn), ' ')), reName);
    });

    if ((0, _isArray2.default)(result.value)) {
      var name = result.value[1];
      return name === ANONYMOUS ? '' : name;
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
 * @example
 * var getFunctionName = require('get-function-name-x');
 *
 * getFunctionName(); // undefined
 * getFunctionName(Number.MIN_VALUE); // undefined
 * getFunctionName('abc'); // undefined
 * getFunctionName(true); // undefined
 * getFunctionName({ name: 'abc' }); // undefined
 * getFunctionName(function () {}); // ''
 * getFunctionName(new Function ()); // ''
 * getFunctionName(function test1() {}); // 'test1'
 * getFunctionName(function* test2() {}); // 'test2'
 * getFunctionName(class Test {}); // 'Test'
 */


function getFunctionName(fn) {
  return (0, _isFunction.default)(fn, true) ? getName(fn) : void 0;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVarName;

var _Function2 = _interopRequireDefault(__webpack_require__(61));

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

var _trim2 = _interopRequireDefault(__webpack_require__(45));

/**
 * @file Enumerated type library.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isVarName
 */
var attemptee = function _attemptee(string) {
  (0, _Function2.default)(string, "var ".concat(string));
};

function isVarName(string) {
  if (!(0, _isStringType.default)(string) || (0, _trim2.default)(string) !== string) {
    return false;
  }

  return !(0, _attempt.default)(attemptee, string).threw;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropRight;

var _uniSlice2 = _interopRequireDefault(__webpack_require__(110));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _push2 = _interopRequireDefault(__webpack_require__(9));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module dropRight
 */
function dropRight(array) {
  if (!(0, _isArrayLike.default)((0, _requireObjectCoercible.default)(array))) {
    return void 0;
  }

  var stop = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toInteger.default)(arguments.length <= 1 ? undefined : arguments[1]) : 1;
  var args = [0];

  if (stop >= array.length) {
    (0, _push2.default)(args, 0);
  } else if (stop > 0) {
    (0, _push2.default)(args, -stop);
  }

  return _uniSlice2.default.apply(void 0, [array].concat(args));
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _uniSlice;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniSlice
 */
function _uniSlice(arrayLike) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return ((0, _isString.default)(arrayLike) ? _stringSlice2.default : _slice2.default).apply(void 0, [arrayLike].concat(rest));
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

var _uniSlice2 = _interopRequireDefault(__webpack_require__(110));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module drop
 */
function drop(array) {
  if (!(0, _isArrayLike.default)((0, _requireObjectCoercible.default)(array))) {
    return void 0;
  }

  var start = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toWholeNumber.default)(arguments.length <= 1 ? undefined : arguments[1]) : 1;
  return (0, _uniSlice2.default)(array, start);
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _sift;

var _any2 = _interopRequireDefault(__webpack_require__(16));

var _push2 = _interopRequireDefault(__webpack_require__(9));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _sift
 */
function _sift(array, callback) {
  var result = [];

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any2.default.apply(void 0, [array, function _iteratee(value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (callback.apply(void 0, [value].concat(args))) {
      (0, _push2.default)(result, value);
    }
  }].concat(fromIndex));

  return result;
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surround;

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module surround
 */
function surround(string, wrapper) {
  var wrap = (0, _toString.default)(wrapper);
  return wrap + (0, _toString.default)(string) + wrap;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nilifyIs;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _isNil = _interopRequireDefault(__webpack_require__(8));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */
function nilifyIs(predicate) {
  (0, _assertIsFunction.default)(predicate);
  return function nilifiedBound(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return (0, _isNil.default)(value) || _call2.default.apply(void 0, [predicate, this, value].concat(rest));
  };
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperty;

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _assertIs = _interopRequireDefault(__webpack_require__(122));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(42));

var _nilifyIs = _interopRequireDefault(__webpack_require__(114));

var _surround = _interopRequireDefault(__webpack_require__(113));

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(40));

var _Object2 = _interopRequireDefault(__webpack_require__(55));

var _apply2 = _interopRequireDefault(__webpack_require__(18));

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(39));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */
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
    if (!(0, _isUndefined.default)(desc.validator) && !(0, _isFunction.default)(desc.validator)) {
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
    if (!(0, _isUndefined.default)(desc.get) && !(0, _isFunction.default)(desc.get)) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = desc.get;
  }

  if ((0, _hasOwnProperty.default)(desc, 'set')) {
    if (!(0, _isUndefined.default)(desc.set) && !(0, _isFunction.default)(desc.set)) {
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _last;

var _nth2 = _interopRequireDefault(__webpack_require__(47));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _last
 */
function _last(array) {
  return (0, _nth2.default)(array, array.length - 1);
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValue;

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

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
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 * @example
 * var sameValue = require('same-value-x');
 *
 * sameValue(1, 1); // true
 * sameValue(true, true); // true
 * sameValue(NaN, NaN); // true
 * sameValue(true, false); // false
 * sameValue(0, -0); // false
 */
function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  return value1 === value2 || (0, _isNumberNaN.default)(value1) && (0, _isNumberNaN.default)(value2);
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constant;

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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;

var _clamp2 = _interopRequireDefault(__webpack_require__(223));

var _toNumber = _interopRequireDefault(__webpack_require__(23));

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
 * @example
 *
 * clamp(-10, -5, 5); // -5
 * clamp(10, -5, 5); // 5
 */
function clamp(value) {
  var number = (0, _toNumber.default)(value);
  var restLength = arguments.length <= 1 ? 0 : arguments.length - 1;

  if (restLength < 1) {
    return number;
  }

  var min = (0, _toNumber.default)(arguments.length <= 1 ? undefined : arguments[1]);
  var max = (0, _toNumber.default)(arguments.length <= 2 ? undefined : arguments[2]);

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
/* 120 */
/***/ (function(module, exports) {

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BigCounter;

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _reverse2 = _interopRequireDefault(__webpack_require__(234));

var _join2 = _interopRequireDefault(__webpack_require__(21));

/**
 * @file A big counter.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module BigCounter
 */
var floor = Math.floor;
/**
 * Incremental integer counter. Counts from `0` to very big intergers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @example
 * var BigCounter = require('big-counter-x');
 * var counter = new BigCounter();
 *
 * counter.get(); // '0'
 * counter.next(); // counter object
 * counter.get(); // '1'
 *
 * // Methods are chainable.
 * counter.next().next(); // counter object
 * counter.get(); // '3'
 *
 * counter.reset(); // counter object
 * counter.get(); // '0'
 * counter.toString(); // '0'
 * counter.valueOf(); // '0'
 * counter.toJSON(); // '0'
 *
 * // Values upto `9007199254740991` convert to numbers.
 * Number(counter); // 0
 * +counter; // 0
 */

function BigCounter() {
  if (!this || !(this instanceof BigCounter)) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  (0, _defineProperties2.default)(this, {
    count: {
      value: [0]
    }
  });
}
/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */


var counterToString = function _counterToString() {
  return (0, _join2.default)((0, _reverse2.default)((0, _slice2.default)(this.count)), '');
};

(0, _defineProperties2.default)(BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString
  },

  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {Object} The counter object.
   */
  next: {
    value: function next() {
      var clone = (0, _slice2.default)(this.count);
      this.count.length = 0;
      var howMany = clone.length;
      var carry = 0;
      var index = 0;

      while (index < howMany || carry) {
        var zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        carry = floor(zi / 10);
        index += 1;
      }

      return this;
    }
  },

  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {Object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;
      return this;
    }
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString
  }
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertIs;

var _assertIs2 = _interopRequireDefault(__webpack_require__(58));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */
function assertIs(predicate, defaultMessage) {
  if (!(0, _isFunction.default)(predicate)) {
    throw new TypeError('Predicate must be a function');
  }

  return (0, _assertIs2.default)(predicate, defaultMessage);
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _create
 */
var _default = Object.create;
exports.default = _default;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _argsToArray;

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _all2 = _interopRequireDefault(__webpack_require__(32));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _argsToArray
 */
function _argsToArray(args) {
  var array = [];
  (0, _all2.default)(args, function _iteratee(arg) {
    (0, _push2.default)(array, arg);
  });
  return array;
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOctal;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */
var octalPattern = /^0o[0-7]+$/i;

function isOctal(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, octalPattern);
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _exec
 */
var _default = (0, _methodize2.default)(RegExp.prototype.exec);

exports.default = _default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinary;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */
var binaryPattern = /^0b[01]+$/i;

function isBinary(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, binaryPattern);
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _fromIndex;

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromIndex
 */
var max = Math.max;

function _fromIndex(array, fromIndex) {
  var object = (0, _toObject.default)(array);

  if (!(0, _isArrayLike.default)(object)) {
    return 0;
  }

  var index = (0, _toInteger.default)(fromIndex);
  return index >= 0 ? index : max(0, (0, _toWholeNumber.default)(object.length) + index);
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _isInteger = _interopRequireDefault(__webpack_require__(68));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _toStringTag = _interopRequireDefault(__webpack_require__(46));

var _hasToStringTag2 = _interopRequireDefault(__webpack_require__(245));

var _getDay2 = _interopRequireDefault(__webpack_require__(244));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDate
 */
var tryDate = function _tryDate(value) {
  var result = (0, _attempt.default)(function _attemptee() {
    var dayNumber = (0, _getDay2.default)(value);
    return (0, _isInteger.default)(dayNumber) && dayNumber >= 0 && dayNumber <= 6;
  });
  return result.value === true;
};

var DATE_TAG = '[object Date]';

function isDate(value) {
  if (!(0, _isObjectLike.default)(value)) {
    return false;
  }
  /* istanbul ignore next */


  return _hasToStringTag2.default ? tryDate(value) : (0, _toStringTag.default)(value) === DATE_TAG;
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Infinity
 */
var _default = 1 / 0;

exports.default = _default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attempt = _interopRequireDefault(__webpack_require__(14));

/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isClassSupported
 */
// eslint-disable-next-line no-new-func
var _default = !(0, _attempt.default)(Function('"use strict"; return class My {};')).threw;

exports.default = _default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimRight;

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _whitespace2 = _interopRequireDefault(__webpack_require__(44));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimRight
 */
var PRE = '[';
var POST = ']+$';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function _trimRight(string) {
  return (0, _replace2.default)(string, whiteSpace, '');
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _map
 */
var _default = (0, _methodize2.default)(Array.prototype.map);

exports.default = _default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _filter
 */
var _default = (0, _methodize2.default)(Array.prototype.filter);

exports.default = _default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubArray;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubArray
 */
function stubArray() {
  return [];
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assign;

var _isFunctionType = _interopRequireDefault(__webpack_require__(79));

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _stubArray = _interopRequireDefault(__webpack_require__(135));

var _concat2 = _interopRequireDefault(__webpack_require__(249));

var _filter2 = _interopRequireDefault(__webpack_require__(134));

var _reduce2 = _interopRequireDefault(__webpack_require__(74));

var _keys2 = _interopRequireDefault(__webpack_require__(73));

var _propertyIsEnumerable2 = _interopRequireDefault(__webpack_require__(248));

var _Object2 = _interopRequireDefault(__webpack_require__(55));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assign
 */

/* istanbul ignore next */
var getOwnPropertySymbols = (0, _isFunctionType.default)(_Object2.default.getOwnPropertySymbols) ? _Object2.default.getOwnPropertySymbols : _stubArray.default;

var getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  return (0, _filter2.default)(getOwnPropertySymbols(target), function _predicate(symbol) {
    return (0, _propertyIsEnumerable2.default)(target, symbol);
  });
};

var reducer = function _reducer(tgt, source) {
  if ((0, _isNil.default)(source)) {
    return tgt;
  }

  var object = (0, _Object2.default)(source);
  return (0, _reduce2.default)((0, _concat2.default)((0, _keys2.default)(object), getOwnEnumerablePropertySymbols(object)), function _iteratee(tar, key) {
    // eslint-disable-next-line no-param-reassign
    tar[key] = object[key];
    return tar;
  }, tgt);
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bind
 */
var _default = Function.call.bind(Function.bind);

exports.default = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _functionToString
 */
var _default = (0, _methodize2.default)(Function.prototype.toString);

exports.default = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _String
 */
var _default = ''.constructor;
exports.default = _default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _uniq2 = _interopRequireDefault(__webpack_require__(88));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */
function uniq(array) {
  return (0, _uniq2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = union;

var _accumulate2 = _interopRequireDefault(__webpack_require__(63));

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module union
 */
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
 * @example
 * var union = require('array-union-x');
 *
 * union([2], [1, 2]); // => [2, 1]
 */


function union() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return (0, _accumulate2.default)(arrays, reduceArgs, []);
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toBoolean
 */
function toBoolean(value) {
  return (0, _Boolean2.default)(value);
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringLastIndexOf
 * */
var _default = (0, _methodize2.default)(String.prototype.lastIndexOf);

exports.default = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = truncate;

var _isRegex = _interopRequireDefault(__webpack_require__(51));

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _exec2 = _interopRequireDefault(__webpack_require__(126));

var _join2 = _interopRequireDefault(__webpack_require__(21));

var _stringLastIndexOf2 = _interopRequireDefault(__webpack_require__(143));

var _match2 = _interopRequireDefault(__webpack_require__(106));

var _search2 = _interopRequireDefault(__webpack_require__(86));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _stringIndexOf2 = _interopRequireDefault(__webpack_require__(66));

var _RegExp2 = _interopRequireDefault(__webpack_require__(85));

var _test2 = _interopRequireDefault(__webpack_require__(37));

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
 * @example
 * var truncate = require('truncate-x');
 *
 * truncate('hi-diddly-ho there, neighborino');
 * // 'hi-diddly-ho there, neighbo...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // 'hi-diddly-ho there,...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // 'hi-diddly-ho there...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // 'hi-diddly-ho there, neig [...]'
 */


function truncate(string, options) {
  var str = (0, _toString.default)(string);
  var length = 30;
  var omission = '...';
  var separator;

  if ((0, _isObjectLike.default)(options)) {
    if ((0, _hasOwnProperty2.default)(options, 'separator')) {
      separator = (0, _isRegex.default)(options.separator) ? options.separator : (0, _toString.default)(options.separator);
    }

    if ((0, _hasOwnProperty2.default)(options, 'length')) {
      length = (0, _toWholeNumber.default)(options.length);
    }

    if ((0, _hasOwnProperty2.default)(options, 'omission')) {
      omission = (0, _toString.default)(options.omission);
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
    /* istanbul ignore next */
    end += result.length - end;
  }

  if ((0, _isRegex.default)(separator)) {
    if ((0, _search2.default)((0, _stringSlice2.default)(str, end), separator)) {
      var substr = result;

      if (!separator.global) {
        separator = new _RegExp2.default(separator.source, (0, _toString.default)((0, _exec2.default)(matchFlags, separator)) + G_FLAG);
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trunc;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trunc
 */
var ceil = Math.ceil,
    floor = Math.floor;

function trunc(value) {
  return value < 0 ? ceil(value) : floor(value);
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimRight;

var _trimRight2 = _interopRequireDefault(__webpack_require__(132));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimRight
 */
function trimRight(string) {
  return (0, _trimRight2.default)((0, _toString.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimLeft;

var _trimLeft2 = _interopRequireDefault(__webpack_require__(76));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimLeft
 */
function trimLeft(string) {
  return (0, _trimLeft2.default)((0, _toString.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _trim2 = _interopRequireDefault(__webpack_require__(45));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trim
 */
function trim(string) {
  return (0, _trim2.default)((0, _toString.default)((0, _requireObjectCoercible.default)(string)));
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _squeeze;

var _filter2 = _interopRequireDefault(__webpack_require__(134));

var _stubTrue = _interopRequireDefault(__webpack_require__(82));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _squeeze
 */
function _squeeze(array) {
  return (0, _filter2.default)(array, _stubTrue.default);
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = squeeze;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _squeeze2 = _interopRequireDefault(__webpack_require__(149));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module squeeze
 */
function squeeze(array) {
  return (0, _squeeze2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubString;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubString
 */
function stubString() {
  return '';
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubObject;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubObject
 */
function stubObject() {
  return {};
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stubFalse;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stubFalse
 */
function stubFalse() {
  return false;
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringTest;

var _isRegex = _interopRequireDefault(__webpack_require__(51));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stringTest
 */
function stringTest(string, patternOrRegex) {
  return (0, _stringTest2.default)((0, _requireCoercibleToString.default)(string), (0, _isRegex.default)(patternOrRegex) ? patternOrRegex : (0, _requireCoercibleToString.default)(patternOrRegex));
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sift;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _sift2 = _interopRequireDefault(__webpack_require__(112));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sift
 */
function sift(array, callback) {
  return (0, _sift2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction.default)(callback), (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shuffle;

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _toObject = _interopRequireDefault(__webpack_require__(26));

/**
 * @file Creates an array of shuffled values.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */
var floor = Math.floor,
    random = Math.random;
/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|Object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 * @example
 * var shuffle = require('shuffle-x');
 *
 * shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regExpEscape;

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

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
 * @example
 * var regexpEscape = require('caboodle-x/regexpEscape');
 *
 * var str = 'hello. how are you?';
 * var regex = new RegExp(regexpEscape(str), 'g');
 * String(regex); // '/hello\. how are you\?/g'
 */

function regExpEscape(string) {
  return (0, _replace2.default)((0, _requireCoercibleToString.default)(string), pattern, '\\$&');
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangeRight;

var _createRange2 = _interopRequireDefault(__webpack_require__(84));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module rangeRight
 */
var rangeFn = (0, _createRange2.default)(true);
/**
 * This method is like `range` except that it populates values in
 * descending order.
 *
 * @param {Array} [args] - The arguments array.
 * @param {number} [args.start=0] - The start of the range.
 * @param {number} args.end - The end of the range.
 * @param {number} [args.step=1] - The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 *
 * rangeRight(4);
 * // => [3, 2, 1, 0]
 *
 * rangeRight(-4);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 5);
 * // => [4, 3, 2, 1]
 *
 * rangeRight(0, 20, 5);
 * // => [15, 10, 5, 0]
 *
 * rangeRight(0, -4, -1);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 4, 0);
 * // => [1, 1, 1]
 *
 * rangeRight(0);
 * // => []
 */

function rangeRight() {
  return rangeFn.apply(void 0, arguments);
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _range;

var _Array2 = _interopRequireDefault(__webpack_require__(105));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _range
 */
var max = Math.max,
    ceil = Math.ceil;
/**
 * The base implementation of `range` and `rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @param {number} step - The value to increment or decrement by.
 * @param {boolean} [fromRight] - Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */

function _range(start, end, step, fromRight) {
  var index = -1;
  var length = max(ceil((end - start) / (step || 1)), 0);
  var current = start;
  var result = (0, _Array2.default)(length);

  while (length) {
    length -= 1;
    result[fromRight ? length : index += 1] = current;
    current += step;
  }

  return result;
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = range;

var _createRange2 = _interopRequireDefault(__webpack_require__(84));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module range
 */
var rangeFn = (0, _createRange2.default)();
/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @param {Array} [args] - The arguments array.
 * @param {number} [args.start=0] - The start of the range.
 * @param {number} args.end - The end of the range.
 * @param {number} [args.step=1] - The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 *
 * range(4);
 * // => [0, 1, 2, 3]
 *
 * range(-4);
 * // => [0, -1, -2, -3]
 *
 * range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * range(0);
 * // => []
 */

function range() {
  return rangeFn.apply(void 0, arguments);
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partialRight;

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _bound2 = _interopRequireDefault(__webpack_require__(62));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partialRight
 */
function _partialRight(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return (0, _bound2.default)(function _binder() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var result = _call2.default.apply(void 0, [fn, this].concat(args, partials));

    if (this instanceof _bound2.default) {
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  }, 'PartialRight', fn.prototype, fn.length);
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partialRight;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _partialRight2 = _interopRequireDefault(__webpack_require__(161));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partialRight
 */
function partialRight(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partialRight2.default.apply(void 0, [(0, _assertIsFunction.default)(fn)].concat(partials));
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partial;

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _bound2 = _interopRequireDefault(__webpack_require__(62));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partial
 */
function _partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return (0, _bound2.default)(function _binder() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var result = _call2.default.apply(void 0, [fn, this].concat(partials, args));

    if (this instanceof _bound2.default) {
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  }, 'Partial', fn.prototype, fn.length - partials.length);
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partial;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _partial2 = _interopRequireDefault(__webpack_require__(163));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partial
 */
function partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partial2.default.apply(void 0, [(0, _assertIsFunction.default)(fn)].concat(partials));
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _parseInt.default;
  }
});

var _parseInt = _interopRequireDefault(__webpack_require__(65));

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDecimal;

var _parseInt2 = _interopRequireDefault(__webpack_require__(65));

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
  return (0, _parseInt2.default)(value, 10);
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _split
 */
var _default = (0, _methodize2.default)(String.prototype.split);

exports.default = _default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toFixed
 */
var _default = (0, _methodize2.default)(Number.prototype.toFixed);

exports.default = _default;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberFormat;

var _RegExp2 = _interopRequireDefault(__webpack_require__(85));

var _toFixed2 = _interopRequireDefault(__webpack_require__(168));

var _numberToString2 = _interopRequireDefault(__webpack_require__(94));

var _replace2 = _interopRequireDefault(__webpack_require__(27));

var _split2 = _interopRequireDefault(__webpack_require__(167));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _join2 = _interopRequireDefault(__webpack_require__(21));

var _isNumberFinite = _interopRequireDefault(__webpack_require__(54));

var _toNumber = _interopRequireDefault(__webpack_require__(23));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _clamp = _interopRequireDefault(__webpack_require__(119));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _numberToDecimalString = _interopRequireDefault(__webpack_require__(87));

/**
 * @file Format a number.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberFormat
 */
var isArgSupplied = function _isArgSupplied(args, index) {
  return args.length > index && !(0, _isNil.default)(args[index]);
};
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
 * @example
 * var numberFormat = require('number-format-x');
 *
 * numberFormat(12345678.9, 3); // "12,345,678.900"
 * numberFormat(12345678.9, null, null, '.', ','); // "12.345.678,90"
 * numberFormat(123456.789, 4, 4, ' ', ':'); // "12 3456:7890"
 * numberFormat(12345678.9, 0, null, '-'); // "12-345-679"
 */


function numberFormat(value) {
  var number = (0, _toNumber.default)(value);

  if (!(0, _isNumberFinite.default)(number)) {
    return (0, _numberToString2.default)(number);
  } // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.


  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var digits = isArgSupplied(rest, 0) ? (0, _clamp.default)((0, _toInteger.default)(rest[0]), 0, 20) : 2; // Formats a number using fixed-point notation.

  var fixed = (0, _numberToDecimalString.default)((0, _toFixed2.default)(number, digits));

  if (digits > 0) {
    var parts = (0, _split2.default)(fixed, '.');
    parts[1] = (0, _stringSlice2.default)("".concat(parts[1] || '', "00000000000000000000"), 0, digits);
    fixed = (0, _join2.default)(parts, '.');
  }

  var sectionLength = isArgSupplied(rest, 1) ? (0, _toInteger.default)(rest[1]) : 3; // Formats a number (string) of fixed-point notation, with user delimiters.

  var sectionDelimiter = isArgSupplied(rest, 2) ? (0, _toString.default)(rest[2]) : ',';
  var decimalDelimiter = isArgSupplied(rest, 3) ? (0, _toString.default)(rest[3]) : '.';
  return (0, _replace2.default)(decimalDelimiter === '.' ? fixed : (0, _replace2.default)(fixed, '.', decimalDelimiter), new _RegExp2.default("\\d(?=(\\d{".concat(sectionLength, "})+").concat(digits > 0 ? '\\D' : '$', ")"), 'g'), "$&".concat(sectionDelimiter));
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nth;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _nth2 = _interopRequireDefault(__webpack_require__(47));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nth
 */
function nth(array) {
  for (var _len = arguments.length, position = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _nth2.default.apply(void 0, [(0, _requireObjectCoercible.default)(array)].concat(position));
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noop;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module noop
 */
function noop() {
  return void 0;
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = negate;

var _negate2 = _interopRequireDefault(__webpack_require__(75));

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module negate
 */
function negate(predicate) {
  return (0, _negate2.default)((0, _assertIsFunction.default)(predicate));
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = methodize;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module methodize
 */
function methodize(prototypeMethod) {
  return (0, _methodize2.default)((0, _assertIsFunction.default)(prototypeMethod));
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _last2 = _interopRequireDefault(__webpack_require__(116));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module last
 */
function last(array) {
  return (0, _last2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = kebabJoin;

var _toString = _interopRequireDefault(__webpack_require__(3));

var _map2 = _interopRequireDefault(__webpack_require__(133));

var _join2 = _interopRequireDefault(__webpack_require__(21));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */
function kebabJoin() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return (0, _join2.default)((0, _map2.default)(strings, _toString.default), '-');
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhiteSpaced;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

var _whitespace2 = _interopRequireDefault(__webpack_require__(44));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWhiteSpaced
 */
var PRE = '[';
var POST = ']';
var containsWhiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST);

function isWhiteSpaced(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, containsWhiteSpace);
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml5Id;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _isSpaced = _interopRequireDefault(__webpack_require__(89));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml5Id
 */
function isValidHtml5Id(string) {
  return (0, _isString.default)(string) && string.length > 0 && !(0, _isSpaced.default)(string);
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml4Id;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml4Id
 */
var validPattern = /^[A-Za-z][A-Za-z0-9\-_.]*$/;

function isValidHtml4Id(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, validPattern);
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUpperCased;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(49));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUpperCased
 */
function isUpperCased(string) {
  return (0, _isString.default)(string) && (0, _toUpperCase2.default)(string) === (0, _toString.default)(string);
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUniq;

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _uniq2 = _interopRequireDefault(__webpack_require__(88));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */
function isUniq(array) {
  return (0, _isArrayLike.default)(array) && (0, _uniq2.default)(array).length === array.length;
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnderscored;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */
function isUnderscored(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, '_');
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTruthy;

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isTruthy
 */
function isTruthy(value) {
  return (0, _Boolean2.default)(value);
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrNumberType;

var _isStringType = _interopRequireDefault(__webpack_require__(22));

var _isNumberType = _interopRequireDefault(__webpack_require__(43));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrNumberType
 */
function isStringTypeOrNumberType(value) {
  return (0, _isStringType.default)(value) || (0, _isNumberType.default)(value);
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrInteger;

var _isSafeInteger = _interopRequireDefault(__webpack_require__(52));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */
function isStringTypeOrInteger(value) {
  return (0, _isStringType.default)(value) || (0, _isSafeInteger.default)(value);
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSearchIndex;

var _isWholeNumber = _interopRequireDefault(__webpack_require__(53));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedIdentifier
 */
function isSearchIndex(value) {
  return value === -1 || (0, _isWholeNumber.default)(value);
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPopulatedString;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _trim2 = _interopRequireDefault(__webpack_require__(45));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */
function isPopulatedString(string) {
  return (0, _isString.default)(string) && (0, _trim2.default)(string).length > 0;
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLikeNotArray;

var _isArray2 = _interopRequireDefault(__webpack_require__(41));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */
function isObjectLikeNotArray(value) {
  return !(0, _isArray2.default)(value) && (0, _isObjectLike.default)(value);
}

/***/ }),
/* 188 */
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
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowerCased;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(72));

var _toString = _interopRequireDefault(__webpack_require__(3));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isLowerCased
 */
function isLowerCased(string) {
  return (0, _isString.default)(string) && (0, _toLowerCase2.default)(string) === (0, _toString.default)(string);
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHex;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isHex
 */
var hexPattern = /^0x[0-9a-f]+$/i;

function isHex(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, hexPattern);
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFalsey;

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

var _negate2 = _interopRequireDefault(__webpack_require__(75));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFalsey
 */
var predicate = (0, _negate2.default)(_Boolean2.default);

function isFalsey(value) {
  return predicate(value);
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getPrototypeOf
 */
var _default = Object.getPrototypeOf;
exports.default = _default;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isError;

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(192));

var _toStringTag = _interopRequireDefault(__webpack_require__(46));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

/**
 * @file Detect whether a value is an error.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */
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
 * @example
 * var isError = require('is-error-x');
 *
 * isError(); // false
 * isError(Number.MIN_VALUE); // false
 * isError('abc'); // false
 * isError(new Error()); //true
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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _document
 */
var _default = typeof document === 'undefined' ? void 0 : document;

exports.default = _default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDOMNode;

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

var _isBooleanType = _interopRequireDefault(__webpack_require__(90));

var _isNumberType = _interopRequireDefault(__webpack_require__(43));

var _Boolean2 = _interopRequireDefault(__webpack_require__(36));

var _document2 = _interopRequireDefault(__webpack_require__(194));

/**
 * @file Tests if a value is a DOM Node.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDOMNode
 */
var documentInheritsNode = false;
var element;
var hasChildNodes;
/* istanbul ignore next */

if (_document2.default) {
  var result = (0, _attempt.default)(function _attemptee() {
    element = _document2.default.createElement('div');
    hasChildNodes = (0, _methodize2.default)(_document2.default.hasChildNodes);
    documentInheritsNode = (0, _isBooleanType.default)(hasChildNodes(element));
  });

  if (result.threw) {
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
 * @example
 * var isNode = require('is-node-x');
 *
 * isNode(); // => false
 * isNode({ nodeType: 1 }); // => false
 * isNode(document); // => true
 * isNode(document.createNode('div')); // => true
 */


function isDOMNode(value) {
  if (hasChildNodes && value && (0, _isNumberType.default)(value.nodeType)) {
    if (value === _document2.default) {
      return true;
    }

    var result1 = (0, _attempt.default)(function _attemptee() {
      return (0, _isBooleanType.default)(hasChildNodes(value));
    });

    if (result1.value === true) {
      return true;
    }
    /* istanbul ignore if */


    if (!documentInheritsNode) {
      var result2 = (0, _attempt.default)(function _attemptee() {
        return (0, _Boolean2.default)(tryAppendChild(value));
      });

      if (result2.value === true) {
        return true;
      }
    }
  }

  return false;
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDashed;

var _isString = _interopRequireDefault(__webpack_require__(5));

var _stringTest2 = _interopRequireDefault(__webpack_require__(10));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDashed
 */
function isDashed(string) {
  return (0, _isString.default)(string) && (0, _stringTest2.default)(string, '-');
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCountingNumber;

var _isWholeNumber = _interopRequireDefault(__webpack_require__(53));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCountingNumber
 */
function isCountingNumber(value) {
  return (0, _isWholeNumber.default)(value) && value > 0;
}

/***/ }),
/* 198 */
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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLikeObject;

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLikeObject
 */
function isArrayLikeObject(value) {
  return (0, _isObjectLike.default)(value) && (0, _isArrayLike.default)(value);
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intToRGB;

var _numberToString2 = _interopRequireDefault(__webpack_require__(94));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(49));

var _toUint = _interopRequireDefault(__webpack_require__(93));

var _padStart = _interopRequireDefault(__webpack_require__(91));

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
 * @example
 * var intToRGB = require('int-to-rgb-x');
 * intToRGB(1); // "#000001"
 */

function intToRGB(i) {
  return HASH + (0, _toUpperCase2.default)((0, _padStart.default)((0, _numberToString2.default)((0, _toUint.default)(i), 16), 6, '0'));
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersection;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(120));

var _accumulate2 = _interopRequireDefault(__webpack_require__(63));

var _any2 = _interopRequireDefault(__webpack_require__(16));

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _shift2 = _interopRequireDefault(__webpack_require__(101));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intersection
 */

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 * var intersection = require('array-intersection-x');
 *
 * intersection([2, 1], [2, 3]); // => [2]
 */
function intersection() {
  var _this = this;

  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  if (!arrays.length) {
    return [];
  }

  return (0, _accumulate2.default)((0, _requireObjectCoercible.default)((0, _shift2.default)(arrays)), function (acc, value) {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    var isExcluded = !(0, _any2.default)(arrays, function (array) {
      (0, _newArrowCheck2.default)(this, _this2);
      return !(0, _includes2.default)((0, _requireObjectCoercible.default)(array), value);
    }.bind(this));

    if (isExcluded && !(0, _includes2.default)(acc, value)) {
      (0, _push2.default)(acc, value);
    }

    return acc;
  }.bind(this), []);
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initial;

var _dropRight = _interopRequireDefault(__webpack_require__(109));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module initial
 */
function initial(array) {
  return (0, _dropRight.default)(array);
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = includes;

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includes
 */
function includes(array, searchElement) {
  return (0, _includes2.default)((0, _requireObjectCoercible.default)(array), searchElement, (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module identity
 */
function identity(arg) {
  return arg;
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _head;

var _nth2 = _interopRequireDefault(__webpack_require__(47));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _head
 */
function _head(array) {
  return (0, _nth2.default)(array, 0);
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _head2 = _interopRequireDefault(__webpack_require__(205));

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module head
 */
function head(array) {
  return (0, _head2.default)((0, _requireObjectCoercible.default)(array));
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasOwnProperty;

var _hasOwnProperty2 = _interopRequireDefault(__webpack_require__(42));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(39));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module hasOwnProperty
 */
function hasOwnProperty(object, property) {
  return (0, _hasOwnProperty2.default)((0, _requireObjectCoercible.default)(object), (0, _toPropertyKey.default)(property));
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _find2 = _interopRequireDefault(__webpack_require__(48));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module findIndex
 */
function findIndex(array, callback) {
  return (0, _find2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction.default)(callback), (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2])).index;
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _find2 = _interopRequireDefault(__webpack_require__(48));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module find
 */
function find(array, callback) {
  return (0, _find2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction.default)(callback), (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2])).value;
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = final;

var _drop = _interopRequireDefault(__webpack_require__(111));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module final
 */
function final(array) {
  return (0, _drop.default)(array);
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _splice
 */
var _default = (0, _methodize2.default)(Array.prototype.splice);

exports.default = _default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getSymbolIterator;

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _symbolIterator = _interopRequireDefault(__webpack_require__(38));

var _es6ShimIterator = _interopRequireDefault(__webpack_require__(104));

var _fallbackSymbolIterator = _interopRequireDefault(__webpack_require__(103));

var _hasRealSymbolIterator2 = _interopRequireDefault(__webpack_require__(102));

var _hasFakeSymbolIterator2 = _interopRequireDefault(__webpack_require__(59));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getSymbolIterator
 */
function _getSymbolIterator(iterable) {
  if (!(0, _isNil.default)(iterable)) {
    if ((_hasRealSymbolIterator2.default || _hasFakeSymbolIterator2.default) && iterable[_symbolIterator.default]) {
      return _symbolIterator.default;
    }

    if (iterable[_es6ShimIterator.default]) {
      return _es6ShimIterator.default;
    }

    if (iterable[_fallbackSymbolIterator.default]) {
      return _fallbackSymbolIterator.default;
    }
  }

  return void 0;
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _charCodeAt
 */
var _default = (0, _methodize2.default)(String.prototype.charCodeAt);

exports.default = _default;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringify
 */
var _default = JSON.stringify;
exports.default = _default;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _forEach
 */
var _default = (0, _methodize2.default)(Array.prototype.forEach);

exports.default = _default;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _freeze
 */
var _default = Object.freeze;
exports.default = _default;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Enum;

var _defineProperties2 = _interopRequireDefault(__webpack_require__(35));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(40));

var _Object2 = _interopRequireDefault(__webpack_require__(55));

var _create2 = _interopRequireDefault(__webpack_require__(123));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _isVarName = _interopRequireDefault(__webpack_require__(108));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _isSafeInteger = _interopRequireDefault(__webpack_require__(52));

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _getFunctionName = _interopRequireDefault(__webpack_require__(107));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(39));

var _argsToArray2 = _interopRequireDefault(__webpack_require__(124));

var _symbolIterator = _interopRequireDefault(__webpack_require__(38));

var _keys2 = _interopRequireDefault(__webpack_require__(73));

var _freeze2 = _interopRequireDefault(__webpack_require__(216));

var _forEach2 = _interopRequireDefault(__webpack_require__(215));

var _call2 = _interopRequireDefault(__webpack_require__(19));

var _apply2 = _interopRequireDefault(__webpack_require__(18));

var _join2 = _interopRequireDefault(__webpack_require__(21));

var _shift2 = _interopRequireDefault(__webpack_require__(101));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _stringify2 = _interopRequireDefault(__webpack_require__(214));

var _hasFakeSymbolIterator2 = _interopRequireDefault(__webpack_require__(59));

var _Set = _interopRequireDefault(__webpack_require__(100));

var _Map = _interopRequireDefault(__webpack_require__(95));

/**
 * @file Enumerated type library.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Enum
 */
var RESERVED_NAME = 'Reserved name: ';
var reserved = new _Set.default(['forEach', 'name', 'toJSON', 'toString', 'value', 'valueOf']);
/* istanbul ignore next */

if (_hasFakeSymbolIterator2.default) {
  reserved.add(_symbolIterator.default);
}
/**
 * An enumeration is a set of symbolic names (members) bound to unique, constant
 * values. Within an enumeration, the members can be compared by identity, and
 * the enumeration itself can be iterated over.
 * Influenced by Python's Enum implementation.
 *
 * Create an enum name/value. Not usually called directly.
 *
 * @see {@link https://docs.python.org/3/library/enum.html}
 * @param {Array} args - The arguments array.
 * @param {string} args.name - The name of the enum.
 * @param {*} args.value - The value of the enum.
 * @returns {Object} The enum.
 */


function Enum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length) {
    var name = args[0],
        value = args[1];
    var key = (0, _toPropertyKey.default)(name);

    if (reserved.has(key)) {
      throw new SyntaxError(RESERVED_NAME + key);
    }

    (0, _defineProperties2.default)(this, {
      name: {
        enumerable: true,
        value: key
      },
      value: {
        enumerable: true,
        value: value
      }
    });
    (0, _freeze2.default)(this);
  }
}

(0, _defineProperty2.default)(Enum, 'SYMBOL_ITERATOR', {
  value: _symbolIterator.default
});
(0, _defineProperties2.default)(Enum.prototype, {
  toJSON: {
    value: function toJSON() {
      return {
        name: this.name,
        value: this.value
      };
    }
  },
  toString: {
    value: function toString() {
      return "".concat((0, _getFunctionName.default)(this.constructor), ".").concat(this.name);
    }
  }
});

var generateNextValue = function _generateNextValue() {
  var count = 0;
  return {
    next: function next(name, value) {
      if ((0, _isSafeInteger.default)(value)) {
        count = value;
      }

      var result = count;
      count += 1;
      return result;
    }
  };
};

var init = function _init(CstmCtr, properties, opts) {
  var keys = new _Set.default();
  var dNames = new _Map.default();
  var dValues = new _Map.default();
  var isClone;
  var items;

  if ((0, _isArrayLike.default)(properties)) {
    items = properties;
  } else if ((0, _isFunction.default)(properties) && properties.prototype instanceof Enum) {
    isClone = true;
    items = properties.toJSON();
  } else {
    throw new Error('bad args');
  }

  var iter = (0, _isFunction.default)(opts.auto) ? opts.auto() : generateNextValue();
  var next;
  (0, _forEach2.default)(items, function _iteratee(item) {
    var ident;

    if (isClone || (0, _isObjectLike.default)(item)) {
      next = iter.next(item.name, item.value);
      ident = new CstmCtr(item.name, item.value);
    } else {
      next = iter.next(item);
      ident = new CstmCtr(item, next);
    }

    var _ident = ident,
        name = _ident.name,
        value = _ident.value;

    if (dNames.has(name)) {
      throw new TypeError("Attempted to reuse name: ".concat(name));
    }

    dNames.set(name, ident);

    if (dValues.has(value)) {
      var oName = dValues.get(value);

      if (opts.unique) {
        throw new TypeError("Duplicate value (".concat(value, ") found: ").concat(name, " -> ").concat(oName));
      }

      ident = dNames.get(oName);
    } else {
      dValues.set(value, name);
      keys.add(name);
    }

    (0, _defineProperty2.default)(CstmCtr, name, {
      enumerable: true,
      value: ident
    });
  });
  return {
    keys: keys,
    names: dNames,
    values: dValues
  };
};

var calcString = function _calcString(ctrName, names) {
  var strArr = [];
  names.forEach(function _itereatee(enumMember) {
    (0, _push2.default)(strArr, (0, _stringify2.default)(enumMember.name));
  });
  return "".concat(ctrName, " { ").concat((0, _join2.default)(strArr, ', '), " }");
};

(0, _defineProperties2.default)(Enum, {
  /**
   * Creates an enumeration collection. Primary method.
   *
   * @param {string} typeName - The name of the enum collection.
   * @param {Array} properties - Initialiser array.
   * @param {Object} options - Options to determine behaviour.
   * @returns {Function} The enumeration collection.
   * @example
   * var Enum = require('enumify-x');
   *
   * // Creating an Enum
   * // Example allows duplicate values, known as aliases.
   * // Member values can be anything: number, string, etc.. If the exact value is
   * // unimportant you may use auto instances and an appropriate value will be
   * // chosen for you. Care must be taken if you mix auto with other values.
   * //
   * // The class Color is an enumeration (or enum)
   * // The attributes Color.RED, Color.GREEN, etc., are enumeration members
   * // (or enum members) and are functionally constants.
   * // The enum members have names and values (the name of Color.RED is RED,
   * // value of Color.BLUE is 10, etc.)
   * var Color = Enum.create('Color', [
   *   'RED', // auto assign value, starting 0
   *   'YELLOW', // auto assign value, will be 1
   *   { name: 'BLUE', value: 10 },
   *   'PINK', // auto assign value, will be 11
   *   { name: 'BLACK', value: 1 } // This is an alias for YELLOW
   * ]);
   *
   * Color.YELLOW; // { name: 'YELLOW', value: 1 }
   * Color.BLUE.name; // 'BLUE'
   * Color.BLUE.value; // 10
   * Color.BLACK === Color.YELLOW; // true
   * // Enumeration members have human readable string representations.
   * Color.PINK.toString(); // 'Color.PINK'
   * // Enums also have a human readable string representations.
   * Color.toString(); // 'Color { "RED", "YELLOW", "BLUE", "PINK", "BLACK" }'
   * // The type of an enumeration member is the enumeration it belongs to.
   * Color.PINK instanceof Color; // true
   * // You can access by value too.
   * Color(10); // Color.BLUE
   *
   * // Enumeration members are hashable, so they can be used as property names.
   * var apples = {};
   * apples[Color.RED] = 'Red Delicious';
   * apples[Color.YELLOW] = 'Golden Delicious'
   * apples; // {Color.RED: 'Red Delicious', Color.YELLOW: 'Golden Delicious'}
   *
   * // Having two enum members with the same name is invalid
   * var Fail = Enum.create('Fail', [
   *   'RED',
   *   'RED',
   * ], opts);
   *
   * // However, two enum members are allowed to have the same value. Given two
   * // members A and B with the same value (and A defined first), B is an alias
   * // to A. By-value lookup of the value of A and B will return A. By-name
   * // lookup of B will also return A. as seen in the definition of Color.
   *
   * // No aliases are allowed in this example.
   * var opts = {
   *   unique: true
   * };
   *
   * var Color1 = Enum.create('Color1', [
   *   'RED',
   *   'YELLOW',
   * ], opts);
   *
   * // Depending on the value types used, enumerations are serialisable.
   * JSON.stringify(Color1); // '[{"name":"RED","value":0},{"name":"YELLOW","value":1}]'
   *
   * // Enumerations support iteration, in definition order.
   * // The forEach() method executes a provided function once per each
   * // name/value pair in the Enum object, in insertion order.
   * // Iterating over the members of an enum does not provide the aliases.
   * Color1.forEach(function (enumMember) {
   *   console.log(enumMember.name, enumMember.value)
   * }, thisArg);
   *
   * // Where supported, for..of can be used.
   * // Iterating over the members of an enum does not provide the aliases.
   * for (const { name, value } of Color1) {
   *   console.log(name, value);
   * }
   *
   * // Otherwise, standard iterator pattern.
   * // Iterating over the members of an enum does not provide the aliases.
   * var iter = Color1[Enum.symIt]();
   * var next = iter.next();
   * while (next.done === false) {
   *   var enumMember = next.value;
   *   console.log(enumMember.name, enumMember.value)
   *   next = iter.next();
   * }
   *
   * // To iterate all items, including aliases.
   * var allenumMembers = Color1.toJSON();
   * allenumMembers.forEach(function(enumMember) {
   *    console.log(enumMember.name, enumMember.value);
   * });
   *
   * // Lookups can be perfomed on the value and not just the name.
   * Color1(0) === Color1.RED; // true
   * Color1(1) === Color1['YELLOW']; // true
   *
   * // Values can be anything, but names must be a string.
   * var anotherEnum = Enum.create('anotherEnum', [
   *   { name: 'OBJECT', value: {} },
   *   { name: 'ARRAY', value: [] },
   *   { name: 'FUNCTION', value: function () {} }
   * ]);
   *
   * // Enums can be cloned
   * var cloneEnum = Enum.create('cloneEnum', anotherEnum);
   * cloneEnum === anotherEnum; // false
   * cloneEnum.OBJECT === anotherEnum.OBJECT; // false
   * cloneEnum.OBJECT.name === anotherEnum.OBJECT.name; // true
   * cloneEnum.OBJECT.value === anotherEnum.OBJECT.value; // true
   *
   * // Options
   * // unique: {boolean} - whether aliases are allowed.
   * // auto: {Function} - if you wish to define your own auto value allocation.
   * // classMethods: {Object<Function>} - to defined methods on the enum.
   * // instanceMethods: {Object<Function>} - to defined methods on the enum members.
   *
   * // ------------------------------------------------------
   *
   * var opts1 = {
   *   auto: function () {
   *     return {
   *       next: function (name, value) {
   *         return name;
   *       }
   *     };
   *   }
   * };
   *
   * var subject1 = Enum.create('subject1', ['RED'], opts1);
   * subject1.RED; // { name: 'RED', value: 'RED'}
   *
   * // ------------------------------------------------------
   *
   * var opts2 = {
   *   classMethods: {
   *     favourite: function () {
   *       return this.RED;
   *     }
   *   }
   * };
   *
   * var subject2 = Enum.create('subject2', ['RED'], opts2);
   * subject2.favourite() === subject2.RED; // true
   *
   * // ------------------------------------------------------
   *
   * var opts3 = {
   *   instanceMethods: {
   *     description: function () {
   *       return 'Description: ' + this.toString();
   *     }
   *   }
   * };
   *
   * var subject3 = Enum.create('subject3', ['RED'], opts3);
   * subject3.RED.description()) === 'Description: subject3.RED'; // true
   */
  create: {
    value: function create(typeName, properties, options) {
      var ctrName = (0, _toPropertyKey.default)(typeName);

      if (ctrName === 'undefined' || !(0, _isVarName.default)(ctrName)) {
        throw new Error("Invalid enum name: ".concat(ctrName));
      }

      var opts = (0, _Object2.default)(options);
      var data; // eslint-disable-next-line no-new-func

      var CstmCtr = Function('f', '_argsToArray', "return function ".concat(ctrName, "(value){return f(this,_argsToArray(arguments))}"))(function f(context, args) {
        if (data) {
          if ((0, _isObjectLike.default)(context) && context instanceof CstmCtr) {
            throw new SyntaxError('Enum classes can’t be instantiated');
          }

          return data.names.get(data.values.get((0, _shift2.default)(args)));
        }

        (0, _apply2.default)(Enum, context, args);
        return context;
      }, _argsToArray2.default);
      var asString;
      (0, _defineProperties2.default)(CstmCtr, {
        forEach: {
          value: function forEach(callback, thisArg) {
            (0, _forEach2.default)(data.keys, function _iteratee(key) {
              (0, _call2.default)(callback, thisArg, data.names.get(key));
            });
          }
        },
        toJSON: {
          value: function toJSON() {
            var value = [];
            data.names.forEach(function _itereatee(enumMember) {
              (0, _push2.default)(value, enumMember.toJSON());
            });
            return value;
          }
        },
        toString: {
          value: function toString() {
            if ((0, _isUndefined.default)(asString)) {
              asString = calcString(ctrName, data.names);
            }

            return asString;
          }
        }
      });
      (0, _defineProperty2.default)(CstmCtr, _symbolIterator.default, {
        value: function iterator() {
          var iter = data.keys[_symbolIterator.default]();

          return {
            next: function next() {
              var nxt = iter.next();

              if (nxt.done) {
                return nxt;
              }

              return {
                done: false,
                value: data.names.get(nxt.value)
              };
            }
          };
        }
      });
      CstmCtr.prototype = (0, _create2.default)(Enum.prototype);
      (0, _defineProperties2.default)(CstmCtr.prototype, {
        constructor: {
          value: CstmCtr
        },
        name: {
          value: ctrName
        }
      });

      if ((0, _isObjectLike.default)(opts.classMethods)) {
        (0, _forEach2.default)((0, _keys2.default)(opts.classMethods), function _iteratee(key) {
          if (reserved.has(key)) {
            throw new SyntaxError(RESERVED_NAME + key);
          }

          var method = opts.classMethods[key];

          if ((0, _isFunction.default)(method)) {
            (0, _defineProperty2.default)(CstmCtr, key, {
              value: method
            });
            reserved.add(key);
          }
        });
      }

      if ((0, _isObjectLike.default)(opts.instanceMethods)) {
        (0, _forEach2.default)((0, _keys2.default)(opts.instanceMethods), function _iteratee(key) {
          if (reserved.has(key)) {
            throw new SyntaxError(RESERVED_NAME + key);
          }

          var method = opts.instanceMethods[key];

          if ((0, _isFunction.default)(method)) {
            (0, _defineProperty2.default)(CstmCtr.prototype, key, {
              value: method
            });
            reserved.add(key);
          }
        });
      }

      data = init(CstmCtr, properties, opts);
      return (0, _freeze2.default)(CstmCtr);
    }
  }
});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = difference;

var _sift2 = _interopRequireDefault(__webpack_require__(112));

var _any2 = _interopRequireDefault(__webpack_require__(16));

var _all2 = _interopRequireDefault(__webpack_require__(32));

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

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
 * @example
 * var difference = require('array-difference-x');
 *
 * difference([2, 1], [2, 3]); // => [1]
 */
function difference(array) {
  for (var _len = arguments.length, excludes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    excludes[_key - 1] = arguments[_key];
  }

  (0, _requireObjectCoercible.default)(array);
  (0, _all2.default)(excludes, _requireObjectCoercible.default);
  return (0, _sift2.default)(array, function _siftPredicate(value) {
    return !(0, _any2.default)(excludes, function _includesPredicate(exclude) {
      return (0, _includes2.default)(exclude, value);
    });
  });
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _setTimeout
 */
var _default = setTimeout;
exports.default = _default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delayPromise;

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(219));

var _constant = _interopRequireDefault(__webpack_require__(118));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */
var onTimeout = function _onTimeout(resolve, reject) {
  var result = (0, _attempt.default)(resolve);
  /* istanbul ignore next */

  if (result.threw) {
    reject(result.value);
  }
};
/**
 * Create a delayed promise.
 *
 * @param {number|string} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */


function delayPromise(milliseconds) {
  var ms = (0, _toWholeNumber.default)(milliseconds);
  return (arguments.length <= 1 ? 0 : arguments.length - 1) ? delayPromise(ms).then((0, _constant.default)(arguments.length <= 1 ? undefined : arguments[1])) : new Promise(function _executor(resolve, reject) {
    var result = (0, _attempt.default)(_setTimeout2.default, onTimeout, ms, resolve, reject);
    /* istanbul ignore next */

    if (result.threw) {
      reject(result.value);
    }
  });
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperties;

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _defineValidatorProperty = _interopRequireDefault(__webpack_require__(115));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _all2 = _interopRequireDefault(__webpack_require__(32));

var _keys2 = _interopRequireDefault(__webpack_require__(73));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(39));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */
function defineValidatorProperties(object, properties) {
  (0, _assertIsObjectLike.default)(object);
  var props = (0, _toObject.default)(properties);
  (0, _all2.default)((0, _keys2.default)(props), function _callback(currentValue) {
    (0, _defineValidatorProperty.default)(object, (0, _toPropertyKey.default)(currentValue), props[currentValue]);
  });
  return object;
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultToOneOf;

var _includes2 = _interopRequireDefault(__webpack_require__(31));

var _last2 = _interopRequireDefault(__webpack_require__(116));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

/**
 * @file Utility to set a default value from an array.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defaultToOneOf
 */

/**
 * Tests if a comparate exists in a list of comparates an then returns the comparate if there
 * is a match; otherwise returns the last comparates value or fallback value if supplied.
 *
 * @param {Array|} [comparates=[]] - An array of values.
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _clamp;

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

var _NaN2 = _interopRequireDefault(__webpack_require__(64));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _clamp
 */
var max = Math.max,
    min = Math.min;

function _clamp(value, lower, upper) {
  if ((0, _isNumberNaN.default)(value) || (0, _isNumberNaN.default)(lower) || (0, _isNumberNaN.default)(upper)) {
    return _NaN2.default;
  }

  return min(max(value, lower), upper);
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(120));

var _isArray2 = _interopRequireDefault(__webpack_require__(41));

var _this = void 0;

/**
 * Takes a single, optional argument and then performs the following logic:
 * If an argument is supplied and is an array then it will be returned unchanged,
 * if an argument is supplied and is not an array then it will be wrapped in a new array and returned,
 * if no argument is supplied then a new empty array is returned.
 *
 * @param {Array|*} [args] - A single optional identity argument.
 * @returns {Array} An array as described the the description logic.
 */
var _default = function () {
  (0, _newArrowCheck2.default)(this, _this);

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!args.length) {
    return [];
  }

  var identity = args[0];
  return (0, _isArray2.default)(identity) ? identity : [identity];
}.bind(void 0);

exports.default = _default;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalize;

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _toLowerCase2 = _interopRequireDefault(__webpack_require__(72));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(49));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalize
 */
function capitalize(string) {
  var str = (0, _toString.default)(string);
  return (0, _toUpperCase2.default)((0, _charAt2.default)(str, 0)) + (0, _toLowerCase2.default)((0, _stringSlice2.default)(str, 1));
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeFirst;

var _charAt2 = _interopRequireDefault(__webpack_require__(33));

var _stringSlice2 = _interopRequireDefault(__webpack_require__(15));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _toUpperCase2 = _interopRequireDefault(__webpack_require__(49));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */
function capitalizeFirst(string) {
  var str = (0, _toString.default)(string);
  return (0, _toUpperCase2.default)((0, _charAt2.default)(str, 0)) + (0, _stringSlice2.default)(str, 1);
}

/***/ }),
/* 227 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 228 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 229 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(229);

var iterableToArray = __webpack_require__(228);

var nonIterableSpread = __webpack_require__(227);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callFunctionOrIdentity;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(230));

var _apply2 = _interopRequireDefault(__webpack_require__(18));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _isNil = _interopRequireDefault(__webpack_require__(8));

/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */
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
  if ((0, _isFunction.default)(fnOrValue)) {
    var argsArray = getArgsArray(arguments.length <= 1 ? undefined : arguments[1]);
    return (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? (0, _apply2.default)(fnOrValue, arguments.length <= 2 ? undefined : arguments[2], argsArray) : fnOrValue.apply(void 0, (0, _toConsumableArray2.default)(argsArray));
  }

  return fnOrValue;
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _call2 = _interopRequireDefault(__webpack_require__(19));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module call
 */
function call(fn) {
  for (var _len = arguments.length, callArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callArgs[_key - 1] = arguments[_key];
  }

  return _call2.default.apply(void 0, [(0, _assertIsFunction.default)(fn)].concat(callArgs));
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _bind2 = _interopRequireDefault(__webpack_require__(137));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module bind
 */
function bind(fn) {
  for (var _len = arguments.length, bindArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }

  return _bind2.default.apply(void 0, [(0, _assertIsFunction.default)(fn)].concat(bindArgs));
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _reverse
 */
var _default = (0, _methodize2.default)(Array.prototype.reverse);

exports.default = _default;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createArgList;

var _String2 = _interopRequireDefault(__webpack_require__(139));

var _join2 = _interopRequireDefault(__webpack_require__(21));

var _push2 = _interopRequireDefault(__webpack_require__(9));

var _all2 = _interopRequireDefault(__webpack_require__(32));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createArgList
 */
var PRE = '$_';
var POST = '_$';

function _createArgList(length) {
  var array = [];
  (0, _all2.default)({
    length: length
  }, function _iteratee(unused, index) {
    (0, _push2.default)(array, PRE + (0, _String2.default)(index) + POST);
  });
  return (0, _join2.default)(array, ',');
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arity;

var _apply2 = _interopRequireDefault(__webpack_require__(18));

var _slice2 = _interopRequireDefault(__webpack_require__(25));

var _bound2 = _interopRequireDefault(__webpack_require__(62));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _arity
 */
function _arity(fn) {
  var length = (arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length;
  return (0, _bound2.default)(function _binder() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = (0, _apply2.default)(fn, this, (0, _slice2.default)(args, 0, length));

    if (this instanceof _bound2.default) {
      return (0, _isPrimitive.default)(result) ? this : result;
    }

    return result;
  }, 'Arity', fn.prototype, length);
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arity;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _arity2 = _interopRequireDefault(__webpack_require__(236));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arity
 */
function arity(fn) {
  return (0, _arity2.default)((0, _assertIsFunction.default)(fn), (0, _toWholeNumber.default)((arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length));
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apply;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _apply2 = _interopRequireDefault(__webpack_require__(18));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */
function apply(fn) {
  for (var _len = arguments.length, applyArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    applyArgs[_key - 1] = arguments[_key];
  }

  return _apply2.default.apply(void 0, [(0, _assertIsFunction.default)(fn)].concat(applyArgs));
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = any;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _any2 = _interopRequireDefault(__webpack_require__(16));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module any
 */
function any(array, callback) {
  return (0, _any2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction.default)(callback), (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _all2 = _interopRequireDefault(__webpack_require__(32));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module all
 */
function all(array, callback) {
  (0, _all2.default)((0, _requireObjectCoercible.default)(array), (0, _assertIsFunction.default)(callback), (0, _toInteger.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getOwnPropertyDescriptor
 */
var _default = Object.getOwnPropertyDescriptor;
exports.default = _default;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getMethod;

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getMethod
 */
function _getMethod(object, property) {
  var func = object[property];

  if (!(0, _isNil.default)(func)) {
    if (!(0, _isFunction.default)(func)) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return void 0;
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasToPrimitive
 */
var _default = _isSymbolSupported.default && (0, _isSymbolType.default)(Symbol.toPrimitive);

exports.default = _default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getDay
 */
var _default = (0, _methodize2.default)(Date.prototype.getDay);

exports.default = _default;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasToStringTag
 */
var _default = _isSymbolSupported.default && (0, _isSymbolType.default)(Symbol.toStringTag);

exports.default = _default;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromCharCode
 */
var _default = String.fromCharCode;
exports.default = _default;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _indexOf
 */
var _default = (0, _methodize2.default)(Array.prototype.indexOf);

exports.default = _default;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _propertyIsEnumerable
 */
var _default = (0, _methodize2.default)(Object.prototype.propertyIsEnumerable);

exports.default = _default;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methodize2 = _interopRequireDefault(__webpack_require__(1));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _concat
 */
var _default = (0, _methodize2.default)(Array.prototype.concat);

exports.default = _default;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _normalizeSpace;

var _trim2 = _interopRequireDefault(__webpack_require__(45));

var _whitespace2 = _interopRequireDefault(__webpack_require__(44));

var _replace2 = _interopRequireDefault(__webpack_require__(27));

/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _normalizeSpace
 */
var PRE = '[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace2.default)() + POST, 'g');

function _normalizeSpace(string) {
  return (0, _replace2.default)((0, _trim2.default)(string), whiteSpace, ' ');
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accumulate;

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

var _accumulate2 = _interopRequireDefault(__webpack_require__(63));

var _fromIndex2 = _interopRequireDefault(__webpack_require__(128));

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module accumulate
 */
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
  return (0, _accumulate2.default)(object, (0, _assertIsFunction.default)(callback), (rest.length ? rest : object)[start], rest.length ? start : start + 1);
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

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
Object.defineProperty(exports, "assertIsObjectLike", {
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
Object.defineProperty(exports, "BigCounter", {
  enumerable: true,
  get: function get() {
    return _BigCounter.default;
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
Object.defineProperty(exports, "castArray", {
  enumerable: true,
  get: function get() {
    return _castArray.default;
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
    return _delayPromise.default;
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
Object.defineProperty(exports, "dropRight", {
  enumerable: true,
  get: function get() {
    return _dropRight.default;
  }
});
Object.defineProperty(exports, "Enum", {
  enumerable: true,
  get: function get() {
    return _Enum.default;
  }
});
Object.defineProperty(exports, "final", {
  enumerable: true,
  get: function get() {
    return _final.default;
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
Object.defineProperty(exports, "initial", {
  enumerable: true,
  get: function get() {
    return _initial.default;
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
Object.defineProperty(exports, "isDashed", {
  enumerable: true,
  get: function get() {
    return _isDashed.default;
  }
});
Object.defineProperty(exports, "isDate", {
  enumerable: true,
  get: function get() {
    return _isDate.default;
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
Object.defineProperty(exports, "isVarName", {
  enumerable: true,
  get: function get() {
    return _isVarName.default;
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
Object.defineProperty(exports, "Map", {
  enumerable: true,
  get: function get() {
    return _Map.default;
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
Object.defineProperty(exports, "nth", {
  enumerable: true,
  get: function get() {
    return _nth.default;
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
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function get() {
    return _range.default;
  }
});
Object.defineProperty(exports, "rangeRight", {
  enumerable: true,
  get: function get() {
    return _rangeRight.default;
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
Object.defineProperty(exports, "Set", {
  enumerable: true,
  get: function get() {
    return _Set.default;
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
Object.defineProperty(exports, "SYMBOL_ITERATOR", {
  enumerable: true,
  get: function get() {
    return _symbolIterator.default;
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
Object.defineProperty(exports, "toFinite", {
  enumerable: true,
  get: function get() {
    return _toFinite.default;
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
    return _maxSafeInteger.default;
  }
});

var _accumulate = _interopRequireDefault(__webpack_require__(251));

var _all = _interopRequireDefault(__webpack_require__(240));

var _any = _interopRequireDefault(__webpack_require__(239));

var _apply = _interopRequireDefault(__webpack_require__(238));

var _arity = _interopRequireDefault(__webpack_require__(237));

var _assign = _interopRequireDefault(__webpack_require__(136));

var _assertIsFunction = _interopRequireDefault(__webpack_require__(4));

var _assertIsObjectLike = _interopRequireDefault(__webpack_require__(20));

var _assertIs = _interopRequireDefault(__webpack_require__(122));

var _attempt = _interopRequireDefault(__webpack_require__(14));

var _BigCounter = _interopRequireDefault(__webpack_require__(121));

var _bind = _interopRequireDefault(__webpack_require__(233));

var _call = _interopRequireDefault(__webpack_require__(232));

var _callFunctionOrIdentity = _interopRequireDefault(__webpack_require__(231));

var _capitalizeFirst = _interopRequireDefault(__webpack_require__(226));

var _capitalize = _interopRequireDefault(__webpack_require__(225));

var _castArray = _interopRequireDefault(__webpack_require__(224));

var _clamp = _interopRequireDefault(__webpack_require__(119));

var _constant = _interopRequireDefault(__webpack_require__(118));

var _defaultToOneOf = _interopRequireDefault(__webpack_require__(222));

var _defineValidatorProperties = _interopRequireDefault(__webpack_require__(221));

var _defineValidatorProperty = _interopRequireDefault(__webpack_require__(115));

var _delayPromise = _interopRequireDefault(__webpack_require__(220));

var _difference = _interopRequireDefault(__webpack_require__(218));

var _drop = _interopRequireDefault(__webpack_require__(111));

var _dropRight = _interopRequireDefault(__webpack_require__(109));

var _Enum = _interopRequireDefault(__webpack_require__(217));

var _final = _interopRequireDefault(__webpack_require__(210));

var _find = _interopRequireDefault(__webpack_require__(209));

var _findIndex = _interopRequireDefault(__webpack_require__(208));

var _getFunctionName = _interopRequireDefault(__webpack_require__(107));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(207));

var _head = _interopRequireDefault(__webpack_require__(206));

var _identity = _interopRequireDefault(__webpack_require__(204));

var _includes = _interopRequireDefault(__webpack_require__(203));

var _initial = _interopRequireDefault(__webpack_require__(202));

var _intersection = _interopRequireDefault(__webpack_require__(201));

var _intToRGB = _interopRequireDefault(__webpack_require__(200));

var _isArrayLikeObject = _interopRequireDefault(__webpack_require__(199));

var _isArrayLike = _interopRequireDefault(__webpack_require__(11));

var _isBinary = _interopRequireDefault(__webpack_require__(127));

var _isBooleanType = _interopRequireDefault(__webpack_require__(90));

var _isBooleanObject = _interopRequireDefault(__webpack_require__(198));

var _isClassSupported = _interopRequireDefault(__webpack_require__(131));

var _isCountingNumber = _interopRequireDefault(__webpack_require__(197));

var _isDashed = _interopRequireDefault(__webpack_require__(196));

var _isDate = _interopRequireDefault(__webpack_require__(129));

var _isDOMNode = _interopRequireDefault(__webpack_require__(195));

var _isError = _interopRequireDefault(__webpack_require__(193));

var _isFalsey = _interopRequireDefault(__webpack_require__(191));

var _isFunction = _interopRequireDefault(__webpack_require__(7));

var _isFunctionType = _interopRequireDefault(__webpack_require__(79));

var _isHex = _interopRequireDefault(__webpack_require__(190));

var _isInteger = _interopRequireDefault(__webpack_require__(68));

var _isLowerCased = _interopRequireDefault(__webpack_require__(189));

var _isNil = _interopRequireDefault(__webpack_require__(8));

var _isNull = _interopRequireDefault(__webpack_require__(57));

var _isNumberObject = _interopRequireDefault(__webpack_require__(188));

var _isNumberFinite = _interopRequireDefault(__webpack_require__(54));

var _isNumberNaN = _interopRequireDefault(__webpack_require__(24));

var _isNumberType = _interopRequireDefault(__webpack_require__(43));

var _isObjectLikeNotArray = _interopRequireDefault(__webpack_require__(187));

var _isObjectLike = _interopRequireDefault(__webpack_require__(12));

var _isObjectType = _interopRequireDefault(__webpack_require__(78));

var _isOctal = _interopRequireDefault(__webpack_require__(125));

var _isPopulatedString = _interopRequireDefault(__webpack_require__(186));

var _isPrimitive = _interopRequireDefault(__webpack_require__(28));

var _isRegex = _interopRequireDefault(__webpack_require__(51));

var _isSafeInteger = _interopRequireDefault(__webpack_require__(52));

var _isSearchIndex = _interopRequireDefault(__webpack_require__(185));

var _isSpaced = _interopRequireDefault(__webpack_require__(89));

var _isStringTypeOrInteger = _interopRequireDefault(__webpack_require__(184));

var _isStringTypeOrNumberType = _interopRequireDefault(__webpack_require__(183));

var _isStringType = _interopRequireDefault(__webpack_require__(22));

var _isString = _interopRequireDefault(__webpack_require__(5));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__(97));

var _isSymbolType = _interopRequireDefault(__webpack_require__(17));

var _isSymbol = _interopRequireDefault(__webpack_require__(81));

var _isSymbolSupported = _interopRequireDefault(__webpack_require__(29));

var _isToStringTagSupported = _interopRequireDefault(__webpack_require__(80));

var _isTruthy = _interopRequireDefault(__webpack_require__(182));

var _isUndefined = _interopRequireDefault(__webpack_require__(30));

var _isUnderscored = _interopRequireDefault(__webpack_require__(181));

var _isUniq = _interopRequireDefault(__webpack_require__(180));

var _isUpperCased = _interopRequireDefault(__webpack_require__(179));

var _isVarName = _interopRequireDefault(__webpack_require__(108));

var _isValidHtml4Id = _interopRequireDefault(__webpack_require__(178));

var _isValidHtml5Id = _interopRequireDefault(__webpack_require__(177));

var _isWhiteSpaced = _interopRequireDefault(__webpack_require__(176));

var _isWholeNumber = _interopRequireDefault(__webpack_require__(53));

var _kebabJoin = _interopRequireDefault(__webpack_require__(175));

var _last = _interopRequireDefault(__webpack_require__(174));

var _Map = _interopRequireDefault(__webpack_require__(95));

var _methodize = _interopRequireDefault(__webpack_require__(173));

var _modulo = _interopRequireDefault(__webpack_require__(92));

var _negate = _interopRequireDefault(__webpack_require__(172));

var _nilifyIs = _interopRequireDefault(__webpack_require__(114));

var _normalizeSpace = _interopRequireDefault(__webpack_require__(77));

var _noop = _interopRequireDefault(__webpack_require__(171));

var _nth = _interopRequireDefault(__webpack_require__(170));

var _numberToDecimalString = _interopRequireDefault(__webpack_require__(87));

var _numberFormat = _interopRequireDefault(__webpack_require__(169));

var _parseDecimal = _interopRequireDefault(__webpack_require__(166));

var _parseInteger = _interopRequireDefault(__webpack_require__(165));

var _partial = _interopRequireDefault(__webpack_require__(164));

var _partialRight = _interopRequireDefault(__webpack_require__(162));

var _padStart = _interopRequireDefault(__webpack_require__(91));

var _range = _interopRequireDefault(__webpack_require__(160));

var _rangeRight = _interopRequireDefault(__webpack_require__(158));

var _regexpEscape = _interopRequireDefault(__webpack_require__(157));

var _replaceComments = _interopRequireDefault(__webpack_require__(71));

var _requireCoercibleToString = _interopRequireDefault(__webpack_require__(34));

var _requireObjectCoercible = _interopRequireDefault(__webpack_require__(2));

var _sameValue = _interopRequireDefault(__webpack_require__(117));

var _sameValueZero = _interopRequireDefault(__webpack_require__(60));

var _Set = _interopRequireDefault(__webpack_require__(100));

var _shuffle = _interopRequireDefault(__webpack_require__(156));

var _sign = _interopRequireDefault(__webpack_require__(50));

var _sift = _interopRequireDefault(__webpack_require__(155));

var _stringTest = _interopRequireDefault(__webpack_require__(154));

var _stubArray = _interopRequireDefault(__webpack_require__(135));

var _stubFalse = _interopRequireDefault(__webpack_require__(153));

var _stubObject = _interopRequireDefault(__webpack_require__(152));

var _stubString = _interopRequireDefault(__webpack_require__(151));

var _stubTrue = _interopRequireDefault(__webpack_require__(82));

var _squeeze = _interopRequireDefault(__webpack_require__(150));

var _surround = _interopRequireDefault(__webpack_require__(113));

var _symbolIterator = _interopRequireDefault(__webpack_require__(38));

var _trim = _interopRequireDefault(__webpack_require__(148));

var _trimLeft = _interopRequireDefault(__webpack_require__(147));

var _trimRight = _interopRequireDefault(__webpack_require__(146));

var _trunc = _interopRequireDefault(__webpack_require__(145));

var _truncate = _interopRequireDefault(__webpack_require__(144));

var _toBoolean = _interopRequireDefault(__webpack_require__(142));

var _toInteger = _interopRequireDefault(__webpack_require__(6));

var _toFinite = _interopRequireDefault(__webpack_require__(83));

var _toNumber = _interopRequireDefault(__webpack_require__(23));

var _toObject = _interopRequireDefault(__webpack_require__(26));

var _toPrimitive = _interopRequireDefault(__webpack_require__(69));

var _toPropertyKey = _interopRequireDefault(__webpack_require__(39));

var _toString = _interopRequireDefault(__webpack_require__(3));

var _toStringTag = _interopRequireDefault(__webpack_require__(46));

var _toUint = _interopRequireDefault(__webpack_require__(93));

var _toWholeNumber = _interopRequireDefault(__webpack_require__(13));

var _union = _interopRequireDefault(__webpack_require__(141));

var _uniq = _interopRequireDefault(__webpack_require__(140));

var _maxSafeInteger = _interopRequireDefault(__webpack_require__(67));

/***/ })
/******/ ]);
});
//# sourceMappingURL=caboodle-x.node.js.map