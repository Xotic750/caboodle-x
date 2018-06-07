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
/******/ 	return __webpack_require__(__webpack_require__.s = 218);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _methodize;

var _bind2 = __webpack_require__(107);

var _bind3 = _interopRequireDefault(_bind2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var call = Function.call; /**
                           * @file Utility that needs description.
                           * @copyright Copyright (c) 2018-present, Graham Fairweather
                           * @module _methodize
                           */

function _methodize(prototypeMethod) {
  return (0, _bind3.default)(call, prototypeMethod);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assertIs2 = __webpack_require__(46);

var _assertIs3 = _interopRequireDefault(_assertIs2);

var _negate2 = __webpack_require__(64);

var _negate3 = _interopRequireDefault(_negate2);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.default = (0, _assertIs3.default)((0, _negate3.default)(_isNil2.default), 'Cannot call method on null or undefined'); /**
                                                                                                                               * @file Utility that needs description.
                                                                                                                               * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                                                               * @module requireObjectCoercible
                                                                                                                               */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toString;

var _isSymbol = __webpack_require__(71);

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _String2 = __webpack_require__(109);

var _String3 = _interopRequireDefault(_String2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toString
 */

function _toString(value) {
  if ((0, _isSymbol2.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return (0, _String3.default)(value);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assertIs2 = __webpack_require__(46);

var _assertIs3 = _interopRequireDefault(_assertIs2);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _assertIsFunction
 */

exports.default = (0, _assertIs3.default)(_isFunction3.default, 'Not a function');

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toInteger;

var _isNaN2 = __webpack_require__(22);

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _isFinite2 = __webpack_require__(41);

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _toNumber2 = __webpack_require__(21);

var _toNumber3 = _interopRequireDefault(_toNumber2);

var _sign2 = __webpack_require__(54);

var _sign3 = _interopRequireDefault(_sign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toInteger
 */

var abs = Math.abs,
    floor = Math.floor;
function _toInteger(value) {
  var number = (0, _toNumber3.default)(value);

  if ((0, _isNaN3.default)(number)) {
    return 0;
  }

  if (number === 0 || !(0, _isFinite3.default)(number)) {
    return number;
  }

  return (0, _sign3.default)(number) * floor(abs(number));
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNil;

var _isUndefined = __webpack_require__(27);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = __webpack_require__(45);

var _isNull2 = _interopRequireDefault(_isNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNil
 */

function isNil(value) {
  return (0, _isUndefined2.default)(value) || (0, _isNull2.default)(value);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toWholeNumber;

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _MAX_SAFE_INTEGER = __webpack_require__(53);

var _MAX_SAFE_INTEGER2 = _interopRequireDefault(_MAX_SAFE_INTEGER);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toWholeNumber
 */

function toWholeNumber(value) {
  var integer = (0, _toInteger3.default)(value);

  // includes converting -0 to +0
  if (integer <= 0) {
    return 0;
  }

  return integer > _MAX_SAFE_INTEGER2.default ? _MAX_SAFE_INTEGER2.default : integer;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _stringTest;

var _isRegex = __webpack_require__(40);

var _isRegex2 = _interopRequireDefault(_isRegex);

var _stringIndexOf2 = __webpack_require__(57);

var _stringIndexOf3 = _interopRequireDefault(_stringIndexOf2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _stringTest(string, searchValue) {
  return (0, _isRegex2.default)(searchValue) ? (0, _test3.default)(searchValue, string) : (0, _stringIndexOf3.default)(string, searchValue) !== -1;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _stringTest
   */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.slice); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _stringSlice
                                                                     */

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

var _functionToString2 = __webpack_require__(108);

var _functionToString3 = _interopRequireDefault(_functionToString2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

var _attempt = __webpack_require__(70);

var _attempt2 = _interopRequireDefault(_attempt);

var _Boolean2 = __webpack_require__(33);

var _Boolean3 = _interopRequireDefault(_Boolean2);

var _toStringTag = __webpack_require__(44);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _isToStringTagSupported = __webpack_require__(69);

var _isToStringTagSupported2 = _interopRequireDefault(_isToStringTagSupported);

var _isPrimitive = __webpack_require__(25);

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

var _normalizeSpace = __webpack_require__(66);

var _normalizeSpace2 = _interopRequireDefault(_normalizeSpace);

var _replaceComments = __webpack_require__(60);

var _replaceComments2 = _interopRequireDefault(_replaceComments);

var _isClassSupported = __webpack_require__(100);

var _isClassSupported2 = _interopRequireDefault(_isClassSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _test3.default)(ctrRx, (0, _normalizeSpace2.default)((0, _replaceComments2.default)((0, _functionToString3.default)(value), ' ')));
};

var isES6ClassFn = function _isES6ClassFn(value) {
  var result = (0, _attempt2.default)(testClassString, value);

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
  if (_isClassSupported2.default && !allowClass && isES6ClassFn(value)) {
    return false;
  }

  return !(0, _attempt2.default)(_functionToString3.default, value).threw;
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
  if ((0, _isPrimitive2.default)(value)) {
    return false;
  }

  if (_isToStringTagSupported2.default) {
    return tryFuncToString(value, (0, _Boolean3.default)(arguments.length <= 1 ? undefined : arguments[1]));
  }

  if (_isClassSupported2.default && !(arguments.length <= 1 ? undefined : arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = (0, _toStringTag2.default)(value);
  return strTag === FUNC_TAG || strTag === GEN_TAG || strTag === ASYNC_TAG;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLike;

var _isNull = __webpack_require__(45);

var _isNull2 = _interopRequireDefault(_isNull);

var _isObjectType = __webpack_require__(67);

var _isObjectType2 = _interopRequireDefault(_isObjectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLike
 */

function isObjectLike(value) {
  return !(0, _isNull2.default)(value) && (0, _isObjectType2.default)(value);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toObject;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _Object2 = __webpack_require__(63);

var _Object3 = _interopRequireDefault(_Object2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toObject
 */

function toObject(value) {
  return (0, _Object3.default)((0, _requireObjectCoercible2.default)(value));
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.replace); /**
                                                                       * @file Utility that needs description.
                                                                       * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                       * @module _replace
                                                                       */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _apply
 */

exports.default = Function.call.bind(Function.apply);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _call
 */

exports.default = Function.call.bind(Function.call);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _includes;

var _find2 = __webpack_require__(49);

var _find3 = _interopRequireDefault(_find2);

var _sameValueZero = __webpack_require__(90);

var _sameValueZero2 = _interopRequireDefault(_sameValueZero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _includes
 */

function _includes(array, searchElement) {
  var isSameValueZero = function _isSameValueZero(value) {
    return (0, _sameValueZero2.default)(searchElement, value);
  };

  for (var _len = arguments.length, fromIndex = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  return _find3.default.apply(undefined, [array, isSameValueZero].concat(fromIndex)).includes;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.push); /**
                                                                   * @file Utility that needs description.
                                                                   * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                   * @module _push
                                                                   */

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLike;

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isWholeNumber = __webpack_require__(37);

var _isWholeNumber2 = _interopRequireDefault(_isWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayLike(value) {
  return !(0, _isNil2.default)(value) && (0, _isWholeNumber2.default)(value.length) && !(0, _isFunction3.default)(value);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isArrayLike
   */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _any;

var _fromIndex2 = __webpack_require__(95);

var _fromIndex3 = _interopRequireDefault(_fromIndex2);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _any(array, callback) {
  var object = (0, _toObject2.default)(array);
  var length = (0, _toWholeNumber2.default)(object.length);

  if (length) {
    for (var index = (0, _fromIndex3.default)(object, arguments.length <= 2 ? undefined : arguments[2]); index < length; index += 1) {
      if (callback(object[index], index, object)) {
        return true;
      }
    }
  }

  return false;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _any
   */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _all;

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _all(array, callback) {
  var iteratee = function _iteratee() {
    callback.apply(undefined, arguments);
  };

  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  _any3.default.apply(undefined, [array, iteratee].concat(rest));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _all
   */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toNumber;

var _Number2 = __webpack_require__(59);

var _Number3 = _interopRequireDefault(_Number2);

var _toPrimitive = __webpack_require__(58);

var _toPrimitive2 = _interopRequireDefault(_toPrimitive);

var _trim2 = __webpack_require__(42);

var _trim3 = _interopRequireDefault(_trim2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

var _isBinary = __webpack_require__(98);

var _isBinary2 = _interopRequireDefault(_isBinary);

var _isOctal = __webpack_require__(96);

var _isOctal2 = _interopRequireDefault(_isOctal);

var _isStringType = __webpack_require__(38);

var _isStringType2 = _interopRequireDefault(_isStringType);

var _isSymbolType = __webpack_require__(32);

var _isSymbolType2 = _interopRequireDefault(_isSymbolType);

var _parseInt2 = __webpack_require__(56);

var _parseInt3 = _interopRequireDefault(_parseInt2);

var _NaN2 = __webpack_require__(55);

var _NaN3 = _interopRequireDefault(_NaN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nonWSregex = new RegExp('[\x85\u180E\u200B\uFFFE]', 'g'); /**
                                                               * @file Utility that needs description.
                                                               * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                               * @module _toNumber
                                                               */

var hasNonWS = function _hasNonWS(value) {
  return (0, _test3.default)(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return (0, _test3.default)(invalidHexLiteral, value);
};

var dropPrefix = function _dropPrefix(value) {
  return (0, _stringSlice3.default)(value, 2);
};

function _toNumber(argument) {
  var value = (0, _toPrimitive2.default)(argument, Number);

  if ((0, _isSymbolType2.default)(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if ((0, _isStringType2.default)(value)) {
    if ((0, _isBinary2.default)(value)) {
      return _toNumber((0, _parseInt3.default)(dropPrefix(value), 2));
    }

    if ((0, _isOctal2.default)(value)) {
      return _toNumber((0, _parseInt3.default)(dropPrefix(value), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN3.default;
    }

    var trimmed = (0, _trim3.default)(value);
    if (trimmed !== value) {
      return _toNumber(trimmed);
    }
  }

  return (0, _Number3.default)(value);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNaN;
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isNaN
 */

function _isNaN(value) {
  return value !== value;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireCoercibleToString;

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireCoercibleToString
 */

function requireCoercibleToString(value) {
  return (0, _toString3.default)((0, _requireObjectCoercible2.default)(value));
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.slice); /**
                                                                    * @file Utility that needs description.
                                                                    * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                    * @module _slice
                                                                    */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrimitive;

var _isFunctionType = __webpack_require__(68);

var _isFunctionType2 = _interopRequireDefault(_isFunctionType);

var _isNull = __webpack_require__(45);

var _isNull2 = _interopRequireDefault(_isNull);

var _isObjectType = __webpack_require__(67);

var _isObjectType2 = _interopRequireDefault(_isObjectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPrimitive(value) {
  return (0, _isNull2.default)(value) || !(0, _isFunctionType2.default)(value) && !(0, _isObjectType2.default)(value);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isPrimitive
   */

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(RegExp.prototype.test); /**
                                                                    * @file Utility that needs description.
                                                                    * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                    * @module _test
                                                                    */

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.join); /**
                                                                   * @file Utility that needs description.
                                                                   * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                   * @module _join
                                                                   */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.charAt); /**
                                                                      * @file Utility that needs description.
                                                                      * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                      * @module _charAt
                                                                      */

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _assign = __webpack_require__(106);

var _assign2 = _interopRequireDefault(_assign);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _indexOf2 = __webpack_require__(213);

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _toLowerCase2 = __webpack_require__(61);

var _toLowerCase3 = _interopRequireDefault(_toLowerCase2);

var _fromCharCode2 = __webpack_require__(212);

var _fromCharCode3 = _interopRequireDefault(_fromCharCode2);

var _map2 = __webpack_require__(102);

var _map3 = _interopRequireDefault(_map2);

var _reduce2 = __webpack_require__(62);

var _reduce3 = _interopRequireDefault(_reduce2);

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _defineProperties2 = __webpack_require__(211);

var _defineProperties3 = _interopRequireDefault(_defineProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}]; /**
     * @file List of ECMAScript white space characters.
     * @copyright Copyright (c) 2018-present, Graham Fairweather
     * @module _whitespace
     */

var types = ['html', 'es5', 'es2015', 'es2016', 'es2017', 'es2018'];
var last = types.length - 1;

function build(type) {
  var index = (0, _indexOf3.default)(types, (0, _toLowerCase3.default)((0, _toString3.default)(type)));
  var prop = index === -1 ? types[last] : types[index];
  var iteratee = function _iteratee(string, record) {
    return record[prop] ? string + (0, _fromCharCode3.default)(record.code) : string;
  };

  return (0, _reduce3.default)(list, iteratee, '');
}

var copier = function _copier(record) {
  return (0, _assign2.default)({}, record);
};

(0, _defineProperties3.default)(build, {
  types: {
    get: function get() {
      return (0, _slice3.default)(types);
    }
  },
  list: {
    get: function get() {
      return (0, _map3.default)(list, copier);
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isSymbolType;
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolType
 */

function isSymbolType(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol';
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Boolean
 */

exports.default = true.constructor;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPropertyKey;

var _isSymbolSupported = __webpack_require__(43);

var _isSymbolSupported2 = _interopRequireDefault(_isSymbolSupported);

var _isSymbolType = __webpack_require__(32);

var _isSymbolType2 = _interopRequireDefault(_isSymbolType);

var _toPrimitive = __webpack_require__(58);

var _toPrimitive2 = _interopRequireDefault(_toPrimitive);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Converts argument to a value that can be used as a property key.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toPropertyKey
 */

function toPropertyKey(argument) {
  var key = (0, _toPrimitive2.default)(argument, String);

  return _isSymbolSupported2.default && (0, _isSymbolType2.default)(key) ? key : (0, _toString3.default)(key);
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.toUpperCase); /**
                                                                           * @file Utility that needs description.
                                                                           * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                           * @module _toUpperCase
                                                                           */

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assertIs2 = __webpack_require__(46);

var _assertIs3 = _interopRequireDefault(_assertIs2);

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsObject
 */

exports.default = (0, _assertIs3.default)(_isObjectLike2.default, 'Not an object');

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWholeNumber;

var _isSafeInteger = __webpack_require__(51);

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWholeNumber(value) {
  return (0, _isSafeInteger2.default)(value) && value >= 0;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isWholeNumber
   */

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Object.prototype.hasOwnProperty); /**
                                                                              * @file Utility that needs description.
                                                                              * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                              * @module _hasOwnProperty
                                                                              */

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRegex;

var _toStringTag = __webpack_require__(44);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isToStringTagSupported = __webpack_require__(69);

var _isToStringTagSupported2 = _interopRequireDefault(_isToStringTagSupported);

var _hasOwnProperty2 = __webpack_require__(39);

var _hasOwnProperty3 = _interopRequireDefault(_hasOwnProperty2);

var _exec2 = __webpack_require__(97);

var _exec3 = _interopRequireDefault(_exec2);

var _getOwnPropertyDescriptor2 = __webpack_require__(209);

var _getOwnPropertyDescriptor3 = _interopRequireDefault(_getOwnPropertyDescriptor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    (0, _exec3.default)(value);
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
  if (!(0, _isObjectLike2.default)(value)) {
    return false;
  }

  /* istanbul ignore next */
  if (!_isToStringTagSupported2.default) {
    return (0, _toStringTag2.default)(value) === regexClass;
  }

  var descriptor = (0, _getOwnPropertyDescriptor3.default)(value, 'lastIndex');

  return descriptor && (0, _hasOwnProperty3.default)(descriptor, 'value') ? tryRegexExecCall(value, descriptor) : false;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isFinite;

var _isNaN2 = __webpack_require__(22);

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _Infinity2 = __webpack_require__(210);

var _Infinity3 = _interopRequireDefault(_Infinity2);

var _isNumberType = __webpack_require__(30);

var _isNumberType2 = _interopRequireDefault(_isNumberType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function _isFinite(number) {
  return (0, _isNumberType2.default)(number) && !(0, _isNaN3.default)(number) && number !== _Infinity3.default && number !== -_Infinity3.default;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _isFinite
   */

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trim;

var _trimLeft2 = __webpack_require__(65);

var _trimLeft3 = _interopRequireDefault(_trimLeft2);

var _trimRight2 = __webpack_require__(101);

var _trimRight3 = _interopRequireDefault(_trimRight2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trim
 */

function _trim(string) {
  return (0, _trimRight3.default)((0, _trimLeft3.default)(string));
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSymbolType = __webpack_require__(32);

var _isSymbolType2 = _interopRequireDefault(_isSymbolType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof Symbol === 'function' && (0, _isSymbolType2.default)(Symbol('x')); /**
                                                                                             * @file Tests if ES6 Symbol is supported.
                                                                                             * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                             * @module isSymbolSupported
                                                                                             */

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */
exports.default = (0, _methodize3.default)(Object.prototype.toString); /**
                                                                        * @file Get an object's ES6 @@toStringTag.
                                                                        * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                        * @module toStringTag
                                                                        */

/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertIs;

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toMessage = function _toMessage(message, fallback) {
  return (0, _isNil2.default)(message) ? fallback : (0, _toString3.default)(message);
}; /**
    * @file Utility that needs description.
    * @copyright Copyright (c) 2018-present, Graham Fairweather
    * @module _assertIs
    */

function _assertIs(predicate, defaultMessage) {
  var defMsg = toMessage(defaultMessage, 'Not a valid value');

  return function assertIsBound(value, customMessage) {
    if ((0, _call3.default)(predicate, this, value)) {
      return value;
    }

    throw new TypeError(toMessage(customMessage, defMsg));
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _sift;

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _sift
 */

function _sift(array, callback) {
  var result = [];
  var iteratee = function _iteratee(value) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (callback.apply(undefined, [value].concat(args))) {
      (0, _push3.default)(result, value);
    }
  };

  for (var _len = arguments.length, fromIndex = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any3.default.apply(undefined, [array, iteratee].concat(fromIndex));

  return result;
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getAt;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _isArrayLike = __webpack_require__(18);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _charAt2 = __webpack_require__(29);

var _charAt3 = _interopRequireDefault(_charAt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getAt
 */

function _getAt(array) {
  if (!(0, _isArrayLike2.default)(array)) {
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toInteger3.default)(arguments.length <= 1 ? undefined : arguments[1]) : 0;

  return (0, _isString2.default)(array) ? (0, _charAt3.default)(array, index) : array[index];
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _find;

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _find(array, callback) {
  var result = {
    includes: false,
    index: -1,
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

  for (var _len = arguments.length, fromIndex = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any3.default.apply(undefined, [array, predicate].concat(fromIndex));

  return result;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _find
   */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _bound;

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

var _argsToArray2 = __webpack_require__(203);

var _argsToArray3 = _interopRequireDefault(_argsToArray2);

var _createArgList2 = __webpack_require__(202);

var _createArgList3 = _interopRequireDefault(_createArgList2);

var _create2 = __webpack_require__(201);

var _create3 = _interopRequireDefault(_create2);

var _Function2 = __webpack_require__(200);

var _Function3 = _interopRequireDefault(_Function2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _bound(binder, name, prototype, length) {
  var bound = (0, _Function3.default)('binder', '_apply', '_argsToArray', 'return function bound' + String(name) + '(' + String((0, _createArgList3.default)(length)) + '){ return _apply(binder,this,_argsToArray(arguments)); }')(binder, _apply3.default, _argsToArray3.default);

  if (prototype) {
    bound.prototype = (0, _create3.default)(prototype);
  }

  return bound;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _bound
   */

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSafeInteger;

var _isInteger = __webpack_require__(94);

var _isInteger2 = _interopRequireDefault(_isInteger);

var _MAX_SAFE_INTEGER = __webpack_require__(53);

var _MAX_SAFE_INTEGER2 = _interopRequireDefault(_MAX_SAFE_INTEGER);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSafeInteger
 */

function isSafeInteger(value) {
  return (0, _isInteger2.default)(value) && value >= -_MAX_SAFE_INTEGER2.default && value <= _MAX_SAFE_INTEGER2.default;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _accumulate;

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _accumulate(array, callback, initialValue) {
  var accumulator = initialValue;
  var iteratee = function _iteratee() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    accumulator = callback.apply(undefined, [accumulator].concat(args));
  };

  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  _all3.default.apply(undefined, [array, iteratee].concat(rest));

  return accumulator;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _accumulate
   */

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module MAX_SAFE_INTEGER
 */

exports.default = 9007199254740991;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _sign;

var _toNumber2 = __webpack_require__(21);

var _toNumber3 = _interopRequireDefault(_toNumber2);

var _isNaN2 = __webpack_require__(22);

var _isNaN3 = _interopRequireDefault(_isNaN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Shim for Math.sign.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sign
 */

function _sign(x) {
  var n = (0, _toNumber3.default)(x);

  if (n === 0 || (0, _isNaN3.default)(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _NaN
 */

exports.default = 0 / 0;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _parseInt;

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _trimLeft2 = __webpack_require__(65);

var _trimLeft3 = _interopRequireDefault(_trimLeft2);

var _Number2 = __webpack_require__(59);

var _Number3 = _interopRequireDefault(_Number2);

var _charAt2 = __webpack_require__(29);

var _charAt3 = _interopRequireDefault(_charAt2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

var _NaN2 = __webpack_require__(55);

var _NaN3 = _interopRequireDefault(_NaN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var str = (0, _trimLeft3.default)((0, _toString3.default)(string));

  if ((0, _charAt3.default)(str, 0) === '\u180E') {
    return _NaN3.default;
  }

  return parse(str, (0, _Number3.default)(radix) || ((0, _test3.default)(hexPattern, str) ? 16 : 10));
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.indexOf); /**
                                                                       * @file Utility that needs description.
                                                                       * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                       * @module _stringIndexOf
                                                                       */

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPrimitive;

var _isDateObject = __webpack_require__(99);

var _isDateObject2 = _interopRequireDefault(_isDateObject);

var _isSymbol = __webpack_require__(71);

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _isPrimitive = __webpack_require__(25);

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

var _isSymbolSupported = __webpack_require__(43);

var _isSymbolSupported2 = _interopRequireDefault(_isSymbolSupported);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

var _isUndefined = __webpack_require__(27);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symToPrimitive = _isSymbolSupported2.default && Symbol.toPrimitive; /**
                                                                         * @file Converts a JavaScript object to a primitive value.
                                                                         * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                         * @module toNumber
                                                                         */

var symValueOf = _isSymbolSupported2.default && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  (0, _requireObjectCoercible2.default)(O);
  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method = void 0;
  var result = void 0;
  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];
    if ((0, _isFunction3.default)(method)) {
      result = (0, _call3.default)(method, O);
      if ((0, _isPrimitive2.default)(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];
  if (!(0, _isNil2.default)(func)) {
    if (!(0, _isFunction3.default)(func)) {
      throw new TypeError(String(func) + ' returned for property ' + String(P) + ' of object ' + String(O) + ' is not a function');
    }

    return func;
  }

  return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

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
  if ((0, _isPrimitive2.default)(input)) {
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

  var exoticToPrim = void 0;
  if (_isSymbolSupported2.default) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if ((0, _isSymbol2.default)(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (!(0, _isUndefined2.default)(exoticToPrim)) {
    var result = (0, _call3.default)(exoticToPrim, input, hint);
    if ((0, _isPrimitive2.default)(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && ((0, _isDateObject2.default)(input) || (0, _isSymbol2.default)(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Number
 */

exports.default = 0 .constructor;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceComments;

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _requireCoercibleToString = __webpack_require__(23);

var _requireCoercibleToString2 = _interopRequireDefault(_requireCoercibleToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Replace the comments in a string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module replaceComments
 */

function replaceComments(string) {
  return (0, _replace3.default)((0, _requireCoercibleToString2.default)(string), STRIP_COMMENTS, (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toString3.default)(arguments.length <= 1 ? undefined : arguments[1]) : '');
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.toLowerCase); /**
                                                                           * @file Utility that needs description.
                                                                           * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                           * @module _toLowerCase
                                                                           */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.reduce); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _reduce
                                                                     */

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Object
 */

exports.default = {}.constructor;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _negate;

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _negate(predicate) {
  return function boundNegate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !(0, _apply3.default)(predicate, this, args);
  };
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _negate
   */

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimLeft;

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _whitespace2 = __webpack_require__(31);

var _whitespace3 = _interopRequireDefault(_whitespace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimLeft
 */

var PRE = '^[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace3.default)() + POST);

function _trimLeft(string) {
  return (0, _replace3.default)(string, whiteSpace, '');
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeSpace;

var _normalizeSpace2 = __webpack_require__(216);

var _normalizeSpace3 = _interopRequireDefault(_normalizeSpace2);

var _requireCoercibleToString = __webpack_require__(23);

var _requireCoercibleToString2 = _interopRequireDefault(_requireCoercibleToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module normalizeSpace
 */

function normalizeSpace(string) {
  return (0, _normalizeSpace3.default)((0, _requireCoercibleToString2.default)(string));
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObjectType;
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectType
 */

function isObjectType(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @file Tests if ES6 @@toStringTag is supported.
                                                                                                                                                                                                                                                                               * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                                                                                                                                                                                                               * @module isToStringTagSupported
                                                                                                                                                                                                                                                                               */

var _isSymbolSupported = __webpack_require__(43);

var _isSymbolSupported2 = _interopRequireDefault(_isSymbolSupported);

var _isSymbolType = __webpack_require__(32);

var _isSymbolType2 = _interopRequireDefault(_isSymbolType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
exports.default = _isSymbolSupported2.default && _typeof((0, _isSymbolType2.default)(Symbol.toStringTag));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attempt;

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  try {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return {
      threw: false,
      value: (0, _apply3.default)(fn, this, rest)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
} /**
   * @file Invokes function, returning an object of the results.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module attempt
   */

/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _RegExp
 */

exports.default = /(?:)/.constructor;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.search); /**
                                                                      * @file Utility that needs description.
                                                                      * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                      * @module _search
                                                                      */

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDecimalFormString;

var _Number2 = __webpack_require__(59);

var _Number3 = _interopRequireDefault(_Number2);

var _charAt2 = __webpack_require__(29);

var _charAt3 = _interopRequireDefault(_charAt2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _stringIndexOf2 = __webpack_require__(57);

var _stringIndexOf3 = _interopRequireDefault(_stringIndexOf2);

var _join2 = __webpack_require__(28);

var _join3 = _interopRequireDefault(_join2);

var _search2 = __webpack_require__(74);

var _search3 = _interopRequireDefault(_search2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMPTY_STRING = ''; /**
                        * @file Convert a base-10 or scientific E-notation value to a decimal form string.
                        * @copyright Copyright (c) 2018-present, Graham Fairweather
                        * @module numberToDecimalString
                        */

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
  var workingValue = value;

  // Minus zero?
  if (workingValue === 0 && 1 / workingValue < 0) {
    workingValue = MINUS_ZERO_SYMBOL;
  } else {
    workingValue = (0, _toString3.default)(workingValue);
    if (!(0, _test3.default)(validPattern, workingValue)) {
      throw new TypeError(ERROR_MSG);
    }
  }

  // Determine sign.
  var sign = void 0;
  if ((0, _charAt3.default)(workingValue, 0) === HYPHEN_MINUS) {
    workingValue = (0, _stringSlice3.default)(workingValue, 1);
    sign = -1;
  } else {
    sign = 1;
  }

  // Decimal point?
  var pointIndex = (0, _stringIndexOf3.default)(workingValue, DECIMAL_MARK);
  if (pointIndex > -1) {
    workingValue = (0, _replace3.default)(workingValue, DECIMAL_MARK, EMPTY_STRING);
  }

  var exponentIndex = pointIndex;
  // Exponential form?
  var index = (0, _search3.default)(workingValue, expPattern);
  if (index > 0) {
    // Determine exponent.
    if (exponentIndex < 0) {
      exponentIndex = index;
    }

    exponentIndex += (0, _Number3.default)((0, _stringSlice3.default)(workingValue, index + 1));
    workingValue = (0, _stringSlice3.default)(workingValue, 0, index);
  } else if (exponentIndex < 0) {
    // Integer.
    exponentIndex = workingValue.length;
  }

  var leadingZeroIndex = workingValue.length;
  // Determine leading zeros.
  index = 0;
  while (index < leadingZeroIndex && (0, _charAt3.default)(workingValue, index) === ZERO_SYMBOL) {
    index += 1;
  }

  var coefficient = void 0;
  var exponent = void 0;
  if (index === leadingZeroIndex) {
    // Zero.
    exponent = 0;
    coefficient = [0];
  } else {
    // Determine trailing zeros.
    if (leadingZeroIndex > 0) {
      do {
        leadingZeroIndex -= 1;
      } while ((0, _charAt3.default)(workingValue, leadingZeroIndex) === ZERO_SYMBOL && leadingZeroIndex > 0);
    }

    exponent = exponentIndex - index - 1;
    coefficient = [];
    coefficient.length = leadingZeroIndex + 1;

    // Convert string to array of digits without leading/trailing zeros.
    var position = 0;
    while (index <= leadingZeroIndex) {
      coefficient[position] = (0, _Number3.default)((0, _charAt3.default)(workingValue, index));
      position += 1;
      index += 1;
    }
  }

  var decimalForm = (0, _join3.default)(coefficient, EMPTY_STRING);
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
      decimalForm = (0, _stringSlice3.default)(decimalForm, 0, exponent) + DECIMAL_MARK + (0, _stringSlice3.default)(decimalForm, exponent);
    }

    // Exponent is zero.
  } else if (decimalFormLength > 1) {
    decimalForm = (0, _charAt3.default)(decimalForm, 0) + DECIMAL_MARK + (0, _stringSlice3.default)(decimalForm, 1);
  }

  return sign < 0 ? HYPHEN_MINUS + decimalForm : decimalForm;
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _uniq;

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

var _reduce2 = __webpack_require__(62);

var _reduce3 = _interopRequireDefault(_reduce2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callback = function _callback(accumulator, currentValue) {
  if (!(0, _includes3.default)(accumulator, currentValue)) {
    (0, _push3.default)(accumulator, currentValue);
  }

  return accumulator;
}; /**
    * @file Utility that needs description.
    * @copyright Copyright (c) 2018-present, Graham Fairweather
    * @module _uniq
    */

function _uniq(array) {
  return (0, _reduce3.default)(array, callback, []);
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Boolean = __webpack_require__(33);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Boolean).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpaced;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

var _whitespace2 = __webpack_require__(31);

var _whitespace3 = _interopRequireDefault(_whitespace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRE = '['; /**
                * @file Utility that needs description.
                * @copyright Copyright (c) 2018-present, Graham Fairweather
                * @module isSpaced
                */

var POST = ']';
var containsSpace = new RegExp(PRE + (0, _whitespace3.default)('html') + POST);

function isSpaced(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, containsSpace);
}

/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = padStart;

var _requireCoercibleToString = __webpack_require__(23);

var _requireCoercibleToString2 = _interopRequireDefault(_requireCoercibleToString);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

var _isUndefined = __webpack_require__(27);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var str = (0, _toString3.default)((0, _requireCoercibleToString2.default)(string));
  var stringLength = (0, _toWholeNumber2.default)(str.length);
  var fillString = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : void 0;

  var filler = (0, _isUndefined2.default)(fillString) ? '' : (0, _toString3.default)(fillString);
  if (filler === '') {
    filler = ' ';
  }

  var intMaxLength = (0, _toWholeNumber2.default)(targetLength);
  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;
  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? (0, _stringSlice3.default)(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? (0, _stringSlice3.default)(filler, 0, fillLen) : filler;

  return truncatedStringFiller + str;
} /**
   * @file Pads a string with another string (repeated, if needed).
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module padStart
   */

/***/ }),
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toUint24;

var _toNumber2 = __webpack_require__(21);

var _toNumber3 = _interopRequireDefault(_toNumber2);

var _modulo = __webpack_require__(81);

var _modulo2 = _interopRequireDefault(_modulo);

var _sign2 = __webpack_require__(54);

var _sign3 = _interopRequireDefault(_sign2);

var _isFinite2 = __webpack_require__(41);

var _isFinite3 = _interopRequireDefault(_isFinite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var number = (0, _toNumber3.default)(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if (number === 0 || !(0, _isFinite3.default)(number)) {
    return 0;
  }

  // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.
  return (0, _modulo2.default)((0, _sign3.default)(number) * floor(abs(number)), 0x1000000);
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Number.prototype.toString); /**
                                                                        * @file Utility that needs description.
                                                                        * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                        * @module _numberToString
                                                                        */

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.match); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _match
                                                                     */

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surround;

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function surround(string, wrapper) {
  var wrap = (0, _toString3.default)(wrapper);

  return wrap + (0, _toString3.default)(string) + wrap;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module surround
   */

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nilifyIs;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nilifyIs(predicate) {
  (0, _assertIsFunction3.default)(predicate);

  return function nilifiedBound(value) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return (0, _isNil2.default)(value) || _call3.default.apply(undefined, [predicate, this, value].concat(rest));
  };
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module nilifyIs
   */

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperty;

var _isUndefined = __webpack_require__(27);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _assertIs = __webpack_require__(93);

var _assertIs2 = _interopRequireDefault(_assertIs);

var _assertIsObjectLike = __webpack_require__(36);

var _assertIsObjectLike2 = _interopRequireDefault(_assertIsObjectLike);

var _hasOwnProperty = __webpack_require__(39);

var _hasOwnProperty2 = _interopRequireDefault(_hasOwnProperty);

var _nilifyIs = __webpack_require__(86);

var _nilifyIs2 = _interopRequireDefault(_nilifyIs);

var _surround = __webpack_require__(85);

var _surround2 = _interopRequireDefault(_surround);

var _Boolean2 = __webpack_require__(33);

var _Boolean3 = _interopRequireDefault(_Boolean2);

var _defineProperty2 = __webpack_require__(190);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Object2 = __webpack_require__(63);

var _Object3 = _interopRequireDefault(_Object2);

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _toPropertyKey = __webpack_require__(34);

var _toPropertyKey2 = _interopRequireDefault(_toPropertyKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSG1 = 'Not a valid initial value for '; /**
                                              * @file Utility that needs description.
                                              * @copyright Copyright (c) 2018-present, Graham Fairweather
                                              * @module defineValidatorProperty
                                              */

var MSG2 = 'Not a valid value for  ';

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var descriptor = {};

  if ((0, _hasOwnProperty2.default)(desc, 'enumerable')) {
    descriptor.enumerable = (0, _Boolean3.default)(desc.enumerable);
  }

  if ((0, _hasOwnProperty2.default)(desc, 'configurable')) {
    descriptor.configurable = (0, _Boolean3.default)(desc.configurable);
  }

  if ((0, _hasOwnProperty2.default)(desc, 'nilable')) {
    descriptor.nilable = (0, _Boolean3.default)(desc.nilable);
  }

  if ((0, _hasOwnProperty2.default)(desc, 'validator')) {
    if (!(0, _isUndefined2.default)(desc.validator) && !(0, _isFunction3.default)(desc.validator)) {
      throw new TypeError('validator must be a function');
    }

    descriptor.validator = desc.validator;
  }

  if ((0, _hasOwnProperty2.default)(desc, 'value')) {
    descriptor.value = desc.value;
  }

  if ((0, _hasOwnProperty2.default)(desc, 'writable')) {
    descriptor.writable = (0, _Boolean3.default)(desc.writable);
  }

  if ((0, _hasOwnProperty2.default)(desc, 'get')) {
    if (!(0, _isUndefined2.default)(desc.get) && !(0, _isFunction3.default)(desc.get)) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = desc.get;
  }

  if ((0, _hasOwnProperty2.default)(desc, 'set')) {
    if (!(0, _isUndefined2.default)(desc.set) && !(0, _isFunction3.default)(desc.set)) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = desc.set;
  }

  if (((0, _hasOwnProperty2.default)(descriptor, 'get') || (0, _hasOwnProperty2.default)(descriptor, 'set')) && ((0, _hasOwnProperty2.default)(descriptor, 'value') || (0, _hasOwnProperty2.default)(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
};

function defineValidatorProperty(object, property, descriptor) {
  (0, _assertIsObjectLike2.default)(object);

  var prop = (0, _toPropertyKey2.default)(property);
  var props = toPropertyDescriptor((0, _Object3.default)(descriptor), defineValidatorProperty);
  var isValidInitialValue = props.nilable && props.validator ? (0, _nilifyIs2.default)(props.validator) : props.validator;
  var quotedProperty = (0, _surround2.default)(prop, '"');

  if (isValidInitialValue) {
    (0, _assertIs2.default)(isValidInitialValue, MSG1 + quotedProperty)(props.value);
  }

  var isValidValue = props.validator && (0, _assertIs2.default)(props.validator, MSG2 + quotedProperty);

  var validatorDesctiptor = {
    configurable: props.configurable,
    enumerable: props.enumerable
  };

  if (props.get) {
    validatorDesctiptor.get = function get() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _apply3.default)(props.get, this, args);
    };
  } else if (isValidValue && (0, _hasOwnProperty2.default)(props, 'value')) {
    validatorDesctiptor.get = function get() {
      return props.value;
    };
  }

  if (props.set) {
    validatorDesctiptor.set = function set(newValue) {
      return (0, _call3.default)(props.set, this, newValue);
    };
  } else if ((0, _hasOwnProperty2.default)(props, 'value')) {
    if (isValidValue && props.writable) {
      validatorDesctiptor.set = function set(newValue) {
        props.value = isValidValue(newValue);

        return props.value;
      };
    } else {
      validatorDesctiptor.value = props.value;
      if ((0, _hasOwnProperty2.default)(props, 'writable')) {
        validatorDesctiptor.writable = props.writable;
      }
    }
  }

  return (0, _defineProperty3.default)(object, prop, validatorDesctiptor);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _last;

var _getAt2 = __webpack_require__(48);

var _getAt3 = _interopRequireDefault(_getAt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _last(array) {
  return (0, _getAt3.default)(array, array.length - 1);
} /**
   * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _last
   */

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValue;

var _isNaN2 = __webpack_require__(22);

var _isNaN3 = _interopRequireDefault(_isNaN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return value1 === value2 || (0, _isNaN3.default)(value1) && (0, _isNaN3.default)(value2);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module sameValue
   */

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sameValueZero;

var _sameValue = __webpack_require__(89);

var _sameValue2 = _interopRequireDefault(_sameValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sameValueZero(x, y) {
  return x === y || (0, _sameValue2.default)(x, y);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module sameValueZero
   */

/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;

var _clamp2 = __webpack_require__(193);

var _clamp3 = _interopRequireDefault(_clamp2);

var _toNumber2 = __webpack_require__(21);

var _toNumber3 = _interopRequireDefault(_toNumber2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Utility that clamps a number to min and max limits inclusive.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module clamp
 */

function clamp(value) {
  var number = (0, _toNumber3.default)(value);
  var restLength = arguments.length <= 1 ? 0 : arguments.length - 1;

  if (restLength < 1) {
    return number;
  }

  var min = (0, _toNumber3.default)(arguments.length <= 1 ? undefined : arguments[1]);
  var max = (0, _toNumber3.default)(arguments.length <= 2 ? undefined : arguments[2]);
  if (restLength < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    throw new RangeError('"min" > "max"');
  }

  return (0, _clamp3.default)(number, min, max);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertIs;

var _assertIs2 = __webpack_require__(46);

var _assertIs3 = _interopRequireDefault(_assertIs2);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */

function assertIs(predicate, defaultMessage) {
  if (!(0, _isFunction3.default)(predicate)) {
    throw new TypeError('Predicate must be a function');
  }

  return (0, _assertIs3.default)(predicate, defaultMessage);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInteger;

var _isNumberType = __webpack_require__(30);

var _isNumberType2 = _interopRequireDefault(_isNumberType);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInteger
 */

function isInteger(value) {
  return (0, _isNumberType2.default)(value) && (0, _toInteger3.default)(value) === value;
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _fromIndex;

var _isArrayLike = __webpack_require__(18);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromIndex
 */

var max = Math.max;
function _fromIndex(array, fromIndex) {
  var object = (0, _toObject2.default)(array);
  if (!(0, _isArrayLike2.default)(object)) {
    return 0;
  }

  var index = (0, _toInteger3.default)(fromIndex);

  return index >= 0 ? index : max(0, (0, _toWholeNumber2.default)(object.length) + index);
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOctal;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */

var octalPattern = /^0o[0-7]+$/i;

function isOctal(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, octalPattern);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(RegExp.prototype.exec); /**
                                                                    * @file Utility that needs description.
                                                                    * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                    * @module _exec
                                                                    */

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinary;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */

var binaryPattern = /^0b[01]+$/i;

function isBinary(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, binaryPattern);
}

/***/ }),
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attempt = __webpack_require__(70);

var _attempt2 = _interopRequireDefault(_attempt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-new-func
exports.default = !(0, _attempt2.default)(Function('"use strict"; return class My {};')).threw; /**
                                                                                                 * @file Determine whether a given value is a function object.
                                                                                                 * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                                 * @module isClassSupported
                                                                                                 */

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trimRight;

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _whitespace2 = __webpack_require__(31);

var _whitespace3 = _interopRequireDefault(_whitespace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimRight
 */

var PRE = '[';
var POST = ']+$';
var whiteSpace = new RegExp(PRE + (0, _whitespace3.default)() + POST);

function _trimRight(string) {
  return (0, _replace3.default)(string, whiteSpace, '');
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.map); /**
                                                                  * @file Utility that needs description.
                                                                  * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                  * @module _map
                                                                  */

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _keys
 */

exports.default = Object.keys;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.filter); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _filter
                                                                     */

/***/ }),
/* 105 */
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assign;

var _isFunctionType = __webpack_require__(68);

var _isFunctionType2 = _interopRequireDefault(_isFunctionType);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

var _stubArray = __webpack_require__(105);

var _stubArray2 = _interopRequireDefault(_stubArray);

var _concat2 = __webpack_require__(215);

var _concat3 = _interopRequireDefault(_concat2);

var _filter2 = __webpack_require__(104);

var _filter3 = _interopRequireDefault(_filter2);

var _reduce2 = __webpack_require__(62);

var _reduce3 = _interopRequireDefault(_reduce2);

var _keys2 = __webpack_require__(103);

var _keys3 = _interopRequireDefault(_keys2);

var _propertyIsEnumerable2 = __webpack_require__(214);

var _propertyIsEnumerable3 = _interopRequireDefault(_propertyIsEnumerable2);

var _Object2 = __webpack_require__(63);

var _Object3 = _interopRequireDefault(_Object2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assign
 */

var getOwnPropertySymbols = (0, _isFunctionType2.default)(_Object3.default.getOwnPropertySymbols) ? _Object3.default.getOwnPropertySymbols : _stubArray2.default;

var getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  var isEnumerable = function _isEnumerable(symbol) {
    return (0, _propertyIsEnumerable3.default)(target, symbol);
  };

  return (0, _filter3.default)(getOwnPropertySymbols(target), isEnumerable);
};

var reducer = function _reducer(tgt, source) {
  if ((0, _isNil2.default)(source)) {
    return tgt;
  }

  var object = (0, _Object3.default)(source);
  var assigner = function _assigner(tar, key) {
    tar[key] = object[key];

    return tar;
  };

  return (0, _reduce3.default)((0, _concat3.default)((0, _keys3.default)(object), getOwnEnumerablePropertySymbols(object)), assigner, tgt);
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
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return (0, _reduce3.default)(rest, reducer, (0, _toObject2.default)(target));
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bind
 */

exports.default = Function.call.bind(Function.bind);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Function.prototype.toString); /**
                                                                          * @file Utility that needs description.
                                                                          * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                          * @module _functionToString
                                                                          */

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _String
 */

exports.default = ''.constructor;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _uniq2 = __webpack_require__(76);

var _uniq3 = _interopRequireDefault(_uniq2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */

function uniq(array) {
  return (0, _uniq3.default)((0, _requireObjectCoercible2.default)(array));
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = union;

var _accumulate2 = __webpack_require__(52);

var _accumulate3 = _interopRequireDefault(_accumulate2);

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module union
 */

var addNotIncluded = function _addNotIncluded(accumulator, value) {
  if (!(0, _includes3.default)(accumulator, value)) {
    (0, _push3.default)(accumulator, value);
  }

  return accumulator;
};

var reduceArgs = function _reduceArgs(accumulator, array) {
  return (0, _accumulate3.default)((0, _requireObjectCoercible2.default)(array), addNotIncluded, accumulator);
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
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return (0, _accumulate3.default)(arrays, reduceArgs, []);
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toString = __webpack_require__(2);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toString).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toNumber = __webpack_require__(21);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toNumber).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toInteger = __webpack_require__(5);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toInteger).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.lastIndexOf); /**
                                                                           * @file Utility that needs description.
                                                                           * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                           * @module _stringLastIndexOf
                                                                           * */

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = truncate;

var _isRegex = __webpack_require__(40);

var _isRegex2 = _interopRequireDefault(_isRegex);

var _isUndefined = __webpack_require__(27);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _hasOwnProperty2 = __webpack_require__(39);

var _hasOwnProperty3 = _interopRequireDefault(_hasOwnProperty2);

var _exec2 = __webpack_require__(97);

var _exec3 = _interopRequireDefault(_exec2);

var _join2 = __webpack_require__(28);

var _join3 = _interopRequireDefault(_join2);

var _stringLastIndexOf2 = __webpack_require__(115);

var _stringLastIndexOf3 = _interopRequireDefault(_stringLastIndexOf2);

var _match2 = __webpack_require__(84);

var _match3 = _interopRequireDefault(_match2);

var _search2 = __webpack_require__(74);

var _search3 = _interopRequireDefault(_search2);

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _stringIndexOf2 = __webpack_require__(57);

var _stringIndexOf3 = _interopRequireDefault(_stringIndexOf2);

var _RegExp2 = __webpack_require__(73);

var _RegExp3 = _interopRequireDefault(_RegExp2);

var _test2 = __webpack_require__(26);

var _test3 = _interopRequireDefault(_test2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Truncate a string to a maximum specified length.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module truncate
 */

var G_FLAG = 'g';
/* Used to match `RegExp` flags from their coerced string values. */
var matchFlags = /\w*$/;

/* Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange = '\\u20d0-\\u20f0';
var rsVarRange = '\\ufe0e\\ufe0f';

/* Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']';
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ = '\\u200d';

/* Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange + ']?';
var rsOptJoin = '(?:' + rsZWJ + '(?:' + String((0, _join3.default)([rsNonAstral, rsRegional, rsSurrPair], '|')) + ')' + rsOptVar + reOptMod + ')*';

var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + String((0, _join3.default)([rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral], '|')) + ')';

/*
 * Used to match string symbols
 * @see https://mathiasbynens.be/notes/javascript-unicode
 */
var reComplexSymbol = new _RegExp3.default(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, G_FLAG);

/*
 * Used to detect strings with [zero-width joiners or code points from
 * the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 */
var reHasComplexSymbol = new _RegExp3.default('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
var hasComplexSymbol = function _hasComplexSymbol(string) {
  return (0, _test3.default)(reHasComplexSymbol, string);
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
  while ((0, _test3.default)(reComplexSymbol, string)) {
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
  var str = (0, _toString3.default)(string);
  var length = 30;
  var omission = '...';
  var separator = void 0;
  if ((0, _isObjectLike2.default)(options)) {
    if ((0, _hasOwnProperty3.default)(options, 'separator')) {
      separator = (0, _isRegex2.default)(options.separator) ? options.separator : (0, _toString3.default)(options.separator);
    }

    if ((0, _hasOwnProperty3.default)(options, 'length')) {
      length = (0, _toWholeNumber2.default)(options.length);
    }

    if ((0, _hasOwnProperty3.default)(options, 'omission')) {
      omission = (0, _toString3.default)(options.omission);
    }
  }

  var strLength = str.length;
  var matchSymbols = void 0;
  if (hasComplexSymbol(str)) {
    matchSymbols = (0, _match3.default)(str, reComplexSymbol);
    strLength = matchSymbols.length;
  }

  if (length >= strLength) {
    return str;
  }

  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }

  var result = matchSymbols ? (0, _join3.default)((0, _slice3.default)(matchSymbols, 0, end), '') : (0, _stringSlice3.default)(str, 0, end);
  if ((0, _isUndefined2.default)(separator)) {
    return result + omission;
  }

  if (matchSymbols) {
    end += result.length - end;
  }

  if ((0, _isRegex2.default)(separator)) {
    if ((0, _search3.default)((0, _stringSlice3.default)(str, end), separator)) {
      var substr = result;
      if (!separator.global) {
        separator = new _RegExp3.default(separator.source, (0, _toString3.default)((0, _exec3.default)(matchFlags, separator)) + G_FLAG);
      }

      separator.lastIndex = 0;
      var newEnd = void 0;
      var match = (0, _exec3.default)(separator, substr);
      while (match) {
        newEnd = match.index;
        match = (0, _exec3.default)(separator, substr);
      }

      result = (0, _stringSlice3.default)(result, 0, (0, _isUndefined2.default)(newEnd) ? end : newEnd);
    }
  } else if ((0, _stringIndexOf3.default)(str, separator, end) !== end) {
    var index = (0, _stringLastIndexOf3.default)(result, separator);
    if (index > -1) {
      result = (0, _stringSlice3.default)(result, 0, index);
    }
  }

  return result + omission;
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _trunc;
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trunc = __webpack_require__(117);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trunc).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimRight;

var _trimRight2 = __webpack_require__(101);

var _trimRight3 = _interopRequireDefault(_trimRight2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trimRight(string) {
  return (0, _trimRight3.default)((0, _toString3.default)((0, _requireObjectCoercible2.default)(string)));
} /**
   * @file List of ECMAScript white space characters.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module trimRight
   */

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimLeft;

var _trimLeft2 = __webpack_require__(65);

var _trimLeft3 = _interopRequireDefault(_trimLeft2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trimLeft(string) {
  return (0, _trimLeft3.default)((0, _toString3.default)((0, _requireObjectCoercible2.default)(string)));
} /**
   * @file List of ECMAScript white space characters.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module trimLeft
   */

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _trim2 = __webpack_require__(42);

var _trim3 = _interopRequireDefault(_trim2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(string) {
  return (0, _trim3.default)((0, _toString3.default)((0, _requireObjectCoercible2.default)(string)));
} /**
   * @file List of ECMAScript white space characters.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module trim
   */

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _squeeze;

var _filter2 = __webpack_require__(104);

var _filter3 = _interopRequireDefault(_filter2);

var _stubTrue = __webpack_require__(72);

var _stubTrue2 = _interopRequireDefault(_stubTrue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _squeeze
 */

function _squeeze(array) {
  return (0, _filter3.default)(array, _stubTrue2.default);
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = squeeze;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _squeeze2 = __webpack_require__(122);

var _squeeze3 = _interopRequireDefault(_squeeze2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module squeeze
 */

function squeeze(array) {
  return (0, _squeeze3.default)((0, _requireObjectCoercible2.default)(array));
}

/***/ }),
/* 124 */
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
/* 125 */
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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringTest;

var _isRegex = __webpack_require__(40);

var _isRegex2 = _interopRequireDefault(_isRegex);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

var _requireCoercibleToString = __webpack_require__(23);

var _requireCoercibleToString2 = _interopRequireDefault(_requireCoercibleToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringTest(string, patternOrRegex) {
  return (0, _stringTest3.default)((0, _requireCoercibleToString2.default)(string), (0, _isRegex2.default)(patternOrRegex) ? patternOrRegex : (0, _requireCoercibleToString2.default)(patternOrRegex));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module stringTest
   */

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sift;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _sift2 = __webpack_require__(47);

var _sift3 = _interopRequireDefault(_sift2);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sift
 */

function sift(array, callback) {
  return (0, _sift3.default)((0, _requireObjectCoercible2.default)(array), (0, _assertIsFunction3.default)(callback), (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sign = __webpack_require__(54);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sign).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shuffle;

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var arr = (0, _slice3.default)((0, _toObject2.default)(array));
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regExpEscape;

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _requireCoercibleToString = __webpack_require__(23);

var _requireCoercibleToString2 = _interopRequireDefault(_requireCoercibleToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _replace3.default)((0, _requireCoercibleToString2.default)(string), pattern, '\\$&');
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partialRight;

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _bound2 = __webpack_require__(50);

var _bound3 = _interopRequireDefault(_bound2);

var _isPrimitive = __webpack_require__(25);

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _partialRight(fn) {
  for (var _len = arguments.length, partials = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  var bound = void 0;

  var binder = function _binder() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var result = _call3.default.apply(undefined, [fn, this].concat(args, partials));

    if (this instanceof bound) {
      return (0, _isPrimitive2.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound3.default)(binder, 'PartialRight', fn.prototype, fn.length);

  return bound;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _partialRight
   */

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partialRight;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _partialRight2 = __webpack_require__(132);

var _partialRight3 = _interopRequireDefault(_partialRight2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partialRight
 */

function partialRight(fn) {
  for (var _len = arguments.length, partials = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partialRight3.default.apply(undefined, [(0, _assertIsFunction3.default)(fn)].concat(partials));
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _partial;

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

var _bound2 = __webpack_require__(50);

var _bound3 = _interopRequireDefault(_bound2);

var _isPrimitive = __webpack_require__(25);

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _partial(fn) {
  for (var _len = arguments.length, partials = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  var bound = void 0;

  var binder = function _binder() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var result = _call3.default.apply(undefined, [fn, this].concat(partials, args));

    if (this instanceof bound) {
      return (0, _isPrimitive2.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound3.default)(binder, 'Partial', fn.prototype, fn.length - partials.length);

  return bound;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _partial
   */

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partial;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _partial2 = __webpack_require__(134);

var _partial3 = _interopRequireDefault(_partial2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partial
 */

function partial(fn) {
  for (var _len = arguments.length, partials = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partial3.default.apply(undefined, [(0, _assertIsFunction3.default)(fn)].concat(partials));
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseInt = __webpack_require__(56);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseInt).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDecimal;

var _parseInt2 = __webpack_require__(56);

var _parseInt3 = _interopRequireDefault(_parseInt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parse a string to a decimal value.
 *
 * @param {string} value - The string to be converted to a decimal value.
 * @returns {number} The parsed decimal value.
 */
function parseDecimal(value) {
  return (0, _parseInt3.default)(value, 10);
} /**
   * @file Utility to parse a string to a decimal value.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module parseDecimal
   */

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.split); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _split
                                                                     */

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Number.prototype.toFixed); /**
                                                                       * @file Utility that needs description.
                                                                       * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                       * @module _toFixed
                                                                       */

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberFormat;

var _RegExp2 = __webpack_require__(73);

var _RegExp3 = _interopRequireDefault(_RegExp2);

var _toFixed2 = __webpack_require__(139);

var _toFixed3 = _interopRequireDefault(_toFixed2);

var _numberToString2 = __webpack_require__(83);

var _numberToString3 = _interopRequireDefault(_numberToString2);

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

var _split2 = __webpack_require__(138);

var _split3 = _interopRequireDefault(_split2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _join2 = __webpack_require__(28);

var _join3 = _interopRequireDefault(_join2);

var _isFinite2 = __webpack_require__(41);

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _toNumber2 = __webpack_require__(21);

var _toNumber3 = _interopRequireDefault(_toNumber2);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _clamp = __webpack_require__(92);

var _clamp2 = _interopRequireDefault(_clamp);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _numberToDecimalString = __webpack_require__(75);

var _numberToDecimalString2 = _interopRequireDefault(_numberToDecimalString);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Format a number.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberFormat
 */

function numberFormat(value) {
  var number = (0, _toNumber3.default)(value);
  if (!(0, _isFinite3.default)(number)) {
    return (0, _numberToString3.default)(number);
  }

  // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.
  var digits = (arguments.length <= 1 ? 0 : arguments.length - 1) > 0 && !(0, _isNil2.default)(arguments.length <= 1 ? undefined : arguments[1]) ? (0, _clamp2.default)((0, _toInteger3.default)(arguments.length <= 1 ? undefined : arguments[1]), 0, 20) : 2;
  // Formats a number using fixed-point notation.
  var fixed = (0, _numberToDecimalString2.default)((0, _toFixed3.default)(number, digits));
  if (digits > 0) {
    var parts = (0, _split3.default)(fixed, '.');
    parts[1] = (0, _stringSlice3.default)(String(parts[1] || '') + '00000000000000000000', 0, digits);
    fixed = (0, _join3.default)(parts, '.');
  }

  var sectionLength = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && !(0, _isNil2.default)(arguments.length <= 2 ? undefined : arguments[2]) ? (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2]) : 3;
  // Formats a number (string) of fixed-point notation, with user delimiters.
  var sectionDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 2 && !(0, _isNil2.default)(arguments.length <= 3 ? undefined : arguments[3]) ? (0, _toString3.default)(arguments.length <= 3 ? undefined : arguments[3]) : ',';
  var decimalDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 3 && !(0, _isNil2.default)(arguments.length <= 4 ? undefined : arguments[4]) ? (0, _toString3.default)(arguments.length <= 4 ? undefined : arguments[4]) : '.';

  return (0, _replace3.default)(decimalDelimiter === '.' ? fixed : (0, _replace3.default)(fixed, '.', decimalDelimiter), new _RegExp3.default('\\d(?=(\\d{' + String(sectionLength) + '})+' + (digits > 0 ? '\\D' : '$') + ')', 'g'), '$&' + String(sectionDelimiter));
}

/***/ }),
/* 141 */
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

function noop() {}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = negate;

var _negate2 = __webpack_require__(64);

var _negate3 = _interopRequireDefault(_negate2);

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module negate
 */

function negate(predicate) {
  return (0, _negate3.default)((0, _assertIsFunction3.default)(predicate));
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = methodize;

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module methodize
 */

function methodize(prototypeMethod) {
  return (0, _methodize3.default)((0, _assertIsFunction3.default)(prototypeMethod));
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _last2 = __webpack_require__(88);

var _last3 = _interopRequireDefault(_last2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module last
 */

function last(array) {
  return (0, _last3.default)((0, _requireObjectCoercible2.default)(array));
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = kebabJoin;

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _map2 = __webpack_require__(102);

var _map3 = _interopRequireDefault(_map2);

var _join2 = __webpack_require__(28);

var _join3 = _interopRequireDefault(_join2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function kebabJoin() {
  for (var _len = arguments.length, strings = Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return (0, _join3.default)((0, _map3.default)(strings, _toString3.default), '-');
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module kebabJoin
   */

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhiteSpaced;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

var _whitespace2 = __webpack_require__(31);

var _whitespace3 = _interopRequireDefault(_whitespace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRE = '['; /**
                * @file Utility that needs description.
                * @copyright Copyright (c) 2018-present, Graham Fairweather
                * @module isWhiteSpaced
                */

var POST = ']';
var containsWhiteSpace = new RegExp(PRE + (0, _whitespace3.default)() + POST);

function isWhiteSpaced(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, containsWhiteSpace);
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml5Id;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _isSpaced = __webpack_require__(78);

var _isSpaced2 = _interopRequireDefault(_isSpaced);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml5Id
 */

function isValidHtml5Id(string) {
  return (0, _isString2.default)(string) && string.length > 0 && !(0, _isSpaced2.default)(string);
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHtml4Id;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml4Id
 */

var validPattern = /^[A-Za-z][A-Za-z0-9\-_.]*$/;

function isValidHtml4Id(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, validPattern);
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUpperCased;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _toUpperCase2 = __webpack_require__(35);

var _toUpperCase3 = _interopRequireDefault(_toUpperCase2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUpperCased(string) {
  return (0, _isString2.default)(string) && (0, _toUpperCase3.default)(string) === (0, _toString3.default)(string);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isUpperCased
   */

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUniq;

var _isArrayLike = __webpack_require__(18);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _uniq2 = __webpack_require__(76);

var _uniq3 = _interopRequireDefault(_uniq2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */

function isUniq(array) {
  return (0, _isArrayLike2.default)(array) && (0, _uniq3.default)(array).length === array.length;
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnderscored;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */

function isUnderscored(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, '_');
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toBoolean = __webpack_require__(77);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toBoolean).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(String.prototype.charCodeAt); /**
                                                                          * @file Utility that needs description.
                                                                          * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                          * @module _charCodeAt
                                                                          */

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _charCodeAt2 = __webpack_require__(153);

var _charCodeAt3 = _interopRequireDefault(_charCodeAt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSurrogatePair
 */

function isSurrogatePair() {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var first = void 0;
  var second = void 0;
  var char1 = arguments.length <= 0 ? undefined : arguments[0];

  if (argsLength === 1) {
    if ((0, _isString2.default)(char1) && char1.length === 2) {
      first = (0, _charCodeAt3.default)(char1, 0);
      second = (0, _charCodeAt3.default)(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    var char2 = arguments.length <= 1 ? undefined : arguments[1];

    if (!(0, _isString2.default)(char1) || char1.length !== 1 || !(0, _isString2.default)(char2) || char2.length !== 1) {
      return false;
    }

    first = (0, _charCodeAt3.default)(char1, 0);
    second = (0, _charCodeAt3.default)(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrNumberType;

var _isStringType = __webpack_require__(38);

var _isStringType2 = _interopRequireDefault(_isStringType);

var _isNumberType = __webpack_require__(30);

var _isNumberType2 = _interopRequireDefault(_isNumberType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrNumberType
 */

function isStringTypeOrNumberType(value) {
  return (0, _isStringType2.default)(value) || (0, _isNumberType2.default)(value);
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringTypeOrInteger;

var _isSafeInteger = __webpack_require__(51);

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

var _isStringType = __webpack_require__(38);

var _isStringType2 = _interopRequireDefault(_isStringType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */

function isStringTypeOrInteger(value) {
  return (0, _isStringType2.default)(value) || (0, _isSafeInteger2.default)(value);
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSearchIndex;

var _isWholeNumber = __webpack_require__(37);

var _isWholeNumber2 = _interopRequireDefault(_isWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSearchIndex(value) {
  return value === -1 || (0, _isWholeNumber2.default)(value);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isReservedIdentifier
   */

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPopulatedString;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _trim2 = __webpack_require__(42);

var _trim3 = _interopRequireDefault(_trim2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */

function isPopulatedString(string) {
  return (0, _isString2.default)(string) && (0, _trim3.default)(string).length > 0;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isArray
 */

exports.default = Array.isArray;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLikeNotArray;

var _isArray2 = __webpack_require__(159);

var _isArray3 = _interopRequireDefault(_isArray2);

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */

function isObjectLikeNotArray(value) {
  return !(0, _isArray3.default)(value) && (0, _isObjectLike2.default)(value);
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNaN = __webpack_require__(22);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNaN).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFinite = __webpack_require__(41);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFinite).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowerCased;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _toLowerCase2 = __webpack_require__(61);

var _toLowerCase3 = _interopRequireDefault(_toLowerCase2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowerCased(string) {
  return (0, _isString2.default)(string) && (0, _toLowerCase3.default)(string) === (0, _toString3.default)(string);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isLowerCased
   */

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHex;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _stringTest2 = __webpack_require__(8);

var _stringTest3 = _interopRequireDefault(_stringTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isHex
 */

var hexPattern = /^0x[0-9a-f]+$/i;

function isHex(string) {
  return (0, _isString2.default)(string) && (0, _stringTest3.default)(string, hexPattern);
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(10);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFunction).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Boolean2 = __webpack_require__(33);

var _Boolean3 = _interopRequireDefault(_Boolean2);

var _negate2 = __webpack_require__(64);

var _negate3 = _interopRequireDefault(_negate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFalsey
 */

exports.default = (0, _negate3.default)(_Boolean3.default);

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getPrototypeOf
 */

exports.default = Object.getPrototypeOf;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isError;

var _getPrototypeOf2 = __webpack_require__(168);

var _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf2);

var _toStringTag = __webpack_require__(44);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testIsError = function _testIsError(value) {
  return (0, _toStringTag2.default)(value) === '[object Error]';
};

/* istanbul ignore next */
/**
 * @file Detect whether a value is an error.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */

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
  if (!(0, _isObjectLike2.default)(value)) {
    return false;
  }

  var object = value;
  var maxLoop = 100;
  while (object && maxLoop > -1) {
    if (testIsError(object)) {
      return true;
    }

    object = (0, _getPrototypeOf3.default)(object);
    maxLoop -= 1;
  }

  return false;
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDOMNode;

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

var _isBooleanType = __webpack_require__(79);

var _isBooleanType2 = _interopRequireDefault(_isBooleanType);

var _isNumberType = __webpack_require__(30);

var _isNumberType2 = _interopRequireDefault(_isNumberType);

var _Boolean2 = __webpack_require__(33);

var _Boolean3 = _interopRequireDefault(_Boolean2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
/**
 * @file Tests if a value is a DOM Node.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDOMNode
 */

var doc = typeof document !== 'undefined' && document;
var documentInheritsNode = false;
var element = void 0;
var hasChildNodes = void 0;
/* istanbul ignore next */
if (doc) {
  try {
    element = doc.createElement('div');
    hasChildNodes = (0, _methodize3.default)(doc.hasChildNodes);
    documentInheritsNode = (0, _isBooleanType2.default)(hasChildNodes(element));
  } catch (ignore) {
    hasChildNodes = null;
    documentInheritsNode = false;
  }
}

var tryAppendChild = void 0;
/* istanbul ignore if */
if (element && !documentInheritsNode) {
  hasChildNodes = (0, _methodize3.default)(element.hasChildNodes);
  var cloneNode = (0, _methodize3.default)(element.cloneNode);
  var appendChild = (0, _methodize3.default)(element.appendChild);
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
  if (hasChildNodes && value && (0, _isNumberType2.default)(value.nodeType)) {
    if (value === doc) {
      return true;
    }

    try {
      return (0, _isBooleanType2.default)(hasChildNodes(value));
    } catch (ignore) {}
    /* ignore */


    /* istanbul ignore if */
    if (!documentInheritsNode) {
      try {
        return (0, _Boolean3.default)(tryAppendChild(value));
      } catch (ignore) {
        /* ignore */
      }
    }
  }

  return false;
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCountingNumber;

var _isWholeNumber = __webpack_require__(37);

var _isWholeNumber2 = _interopRequireDefault(_isWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isCountingNumber(value) {
  return (0, _isWholeNumber2.default)(value) && value > 0;
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module isCountingNumber
   */

/***/ }),
/* 172 */
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayLikeObject;

var _isObjectLike = __webpack_require__(11);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isArrayLike = __webpack_require__(18);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLikeObject
 */

function isArrayLikeObject(value) {
  return (0, _isObjectLike2.default)(value) && (0, _isArrayLike2.default)(value);
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intToRGB;

var _numberToString2 = __webpack_require__(83);

var _numberToString3 = _interopRequireDefault(_numberToString2);

var _toUpperCase2 = __webpack_require__(35);

var _toUpperCase3 = _interopRequireDefault(_toUpperCase2);

var _toUint = __webpack_require__(82);

var _toUint2 = _interopRequireDefault(_toUint);

var _padStart = __webpack_require__(80);

var _padStart2 = _interopRequireDefault(_padStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return HASH + (0, _toUpperCase3.default)((0, _padStart2.default)((0, _numberToString3.default)((0, _toUint2.default)(i), 16), 6, '0'));
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.shift); /**
                                                                    * @file Utility that needs description.
                                                                    * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                    * @module _shift
                                                                    */

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersection;

var _sift2 = __webpack_require__(47);

var _sift3 = _interopRequireDefault(_sift2);

var _accumulate2 = __webpack_require__(52);

var _accumulate3 = _interopRequireDefault(_accumulate2);

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

var _shift2 = __webpack_require__(175);

var _shift3 = _interopRequireDefault(_shift2);

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } } /**
                                                                                                                                                 * @file Creates an array of unique values that are included in all given arrays.
                                                                                                                                                 * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                                                                                 * @module intersection
                                                                                                                                                 */

var isNotNil = function _isNotNil(value) {
  return !(0, _isNil2.default)(value);
};

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

  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var remaining = (0, _sift3.default)((0, _requireObjectCoercible2.default)(arrays), isNotNil);

  if (remaining.length < 1) {
    return [];
  }

  return (0, _accumulate3.default)((0, _shift3.default)(remaining), function (acc, value) {
    _newArrowCheck(this, _this);

    var isExcluded = !(0, _any3.default)(remaining, function (array) {
      _newArrowCheck(this, _this);

      return !(0, _includes3.default)((0, _requireObjectCoercible2.default)(array), value);
    }.bind(this));

    if (isExcluded && !(0, _includes3.default)(acc, value)) {
      (0, _push3.default)(acc, value);
    }

    return acc;
  }.bind(this), []);
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = includes;

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function includes(array, searchElement) {
  return (0, _includes3.default)((0, _requireObjectCoercible2.default)(array), searchElement, (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2]));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module includes
   */

/***/ }),
/* 178 */
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _head;

var _getAt2 = __webpack_require__(48);

var _getAt3 = _interopRequireDefault(_getAt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _head(array) {
  return (0, _getAt3.default)(array, 0);
} /**
   * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module _head
   */

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _head2 = __webpack_require__(179);

var _head3 = _interopRequireDefault(_head2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module head
 */

function head(array) {
  return (0, _head3.default)((0, _requireObjectCoercible2.default)(array));
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasOwnProperty;

var _hasOwnProperty2 = __webpack_require__(39);

var _hasOwnProperty3 = _interopRequireDefault(_hasOwnProperty2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toPropertyKey = __webpack_require__(34);

var _toPropertyKey2 = _interopRequireDefault(_toPropertyKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasOwnProperty(object, property) {
  return (0, _hasOwnProperty3.default)((0, _requireObjectCoercible2.default)(object), (0, _toPropertyKey2.default)(property));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module hasOwnProperty
   */

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFunctionName;

var _match2 = __webpack_require__(84);

var _match3 = _interopRequireDefault(_match2);

var _functionToString2 = __webpack_require__(108);

var _functionToString3 = _interopRequireDefault(_functionToString2);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _normalizeSpace = __webpack_require__(66);

var _normalizeSpace2 = _interopRequireDefault(_normalizeSpace);

var _replaceComments = __webpack_require__(60);

var _replaceComments2 = _interopRequireDefault(_replaceComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ANONYMOUS = 'anonymous'; /**
                              * @file Get the name of the function.
                              * @copyright Copyright (c) 2018-present, Graham Fairweather
                              * @module getFunctionName
                              */

function test1() {}

var getName = void 0;
if (test1.name === 'test1') {
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
    var match = void 0;
    try {
      match = (0, _match3.default)((0, _normalizeSpace2.default)((0, _replaceComments2.default)((0, _functionToString3.default)(fn), ' ')), reName);
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
  return (0, _isFunction3.default)(fn, true) ? getName(fn) : void 0;
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAt;

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _getAt2 = __webpack_require__(48);

var _getAt3 = _interopRequireDefault(_getAt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getAt
 */

function getAt(array) {
  for (var _len = arguments.length, position = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _getAt3.default.apply(undefined, [(0, _requireObjectCoercible2.default)(array)].concat(position));
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _find2 = __webpack_require__(49);

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module findIndex
 */

function findIndex(array, callback) {
  return (0, _find3.default)((0, _requireObjectCoercible2.default)(array), (0, _assertIsFunction3.default)(callback), (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2])).index;
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _find2 = __webpack_require__(49);

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module find
 */

function find(array, callback) {
  return (0, _find3.default)((0, _requireObjectCoercible2.default)(array), (0, _assertIsFunction3.default)(callback), (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2])).value;
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

var _isString = __webpack_require__(4);

var _isString2 = _interopRequireDefault(_isString);

var _isArrayLike = __webpack_require__(18);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module drop
 */

function drop(array) {
  if (!(0, _isArrayLike2.default)((0, _requireObjectCoercible2.default)(array))) {
    return void 0;
  }

  var start = (arguments.length <= 1 ? 0 : arguments.length - 1) ? (0, _toWholeNumber2.default)(arguments.length <= 1 ? undefined : arguments[1]) : 1;

  return ((0, _isString2.default)(array) ? _stringSlice3.default : _slice3.default)(array, start);
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = difference;

var _sift2 = __webpack_require__(47);

var _sift3 = _interopRequireDefault(_sift2);

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  for (var _len = arguments.length, excludes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    excludes[_key - 1] = arguments[_key];
  }

  (0, _requireObjectCoercible2.default)(array);
  (0, _all3.default)(excludes, _requireObjectCoercible2.default);

  var siftPredicate = function _siftPredicate(value) {
    var includesPredicate = function _includesPredicate(exclude) {
      return (0, _includes3.default)(exclude, value);
    };

    return !(0, _any3.default)(excludes, includesPredicate);
  };

  return (0, _sift3.default)(array, siftPredicate);
} /**
   * @file Creates an array of array values not included in the other given arrays.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module difference
   */

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _setTimeout
 */

exports.default = setTimeout;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delayPromise;

var _setTimeout2 = __webpack_require__(188);

var _setTimeout3 = _interopRequireDefault(_setTimeout2);

var _constant = __webpack_require__(91);

var _constant2 = _interopRequireDefault(_constant);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a delayed promise.
 *
 * @param {number|string} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
function delayPromise(milliseconds) {
  var ms = (0, _toWholeNumber2.default)(milliseconds);

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    var valueExecutor = function _valueExecutor(arg) {
      return delayPromise(ms).then((0, _constant2.default)(arg));
    };

    return Promise.resolve(arguments.length <= 1 ? undefined : arguments[1]).then(valueExecutor);
  }

  var timeoutExecutor = function _timeoutExecutor(resolve, reject) {
    /* istanbul ignore next */
    try {
      (0, _setTimeout3.default)(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };

  return new Promise(timeoutExecutor);
} /**
   * @file Utility that creates a delayed promise.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module delayPromise
   */

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperty
 */

exports.default = Object.defineProperty;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineValidatorProperties;

var _assertIsObjectLike = __webpack_require__(36);

var _assertIsObjectLike2 = _interopRequireDefault(_assertIsObjectLike);

var _defineValidatorProperty = __webpack_require__(87);

var _defineValidatorProperty2 = _interopRequireDefault(_defineValidatorProperty);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

var _keys2 = __webpack_require__(103);

var _keys3 = _interopRequireDefault(_keys2);

var _toPropertyKey = __webpack_require__(34);

var _toPropertyKey2 = _interopRequireDefault(_toPropertyKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */

function defineValidatorProperties(object, properties) {
  (0, _assertIsObjectLike2.default)(object);

  var props = (0, _toObject2.default)(properties);
  var callback = function _callback(currentValue) {
    (0, _defineValidatorProperty2.default)(object, (0, _toPropertyKey2.default)(currentValue), props[currentValue]);
  };

  (0, _all3.default)((0, _keys3.default)(props), callback);

  return object;
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultToOneOf;

var _includes2 = __webpack_require__(16);

var _includes3 = _interopRequireDefault(_includes2);

var _last2 = __webpack_require__(88);

var _last3 = _interopRequireDefault(_last2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _requireObjectCoercible2.default)(comparates);

  var fallback = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : (0, _last3.default)(comparates);

  return (0, _includes3.default)(comparates, comparate) ? comparate : fallback;
} /**
   * @file Utility to set a default value from an array.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module defaultToOneOf
   */

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _clamp;

var _isNaN2 = __webpack_require__(22);

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _NaN2 = __webpack_require__(55);

var _NaN3 = _interopRequireDefault(_NaN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _clamp
 */

var max = Math.max,
    min = Math.min;
function _clamp(value, lower, upper) {
  if ((0, _isNaN3.default)(value) || (0, _isNaN3.default)(lower) || (0, _isNaN3.default)(upper)) {
    return _NaN3.default;
  }

  return min(max(value, lower), upper);
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalize;

var _charAt2 = __webpack_require__(29);

var _charAt3 = _interopRequireDefault(_charAt2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _toLowerCase2 = __webpack_require__(61);

var _toLowerCase3 = _interopRequireDefault(_toLowerCase2);

var _toUpperCase2 = __webpack_require__(35);

var _toUpperCase3 = _interopRequireDefault(_toUpperCase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalize(string) {
  var str = (0, _toString3.default)(string);

  return (0, _toUpperCase3.default)((0, _charAt3.default)(str, 0)) + (0, _toLowerCase3.default)((0, _stringSlice3.default)(str, 1));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module capitalize
   */

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeFirst;

var _charAt2 = __webpack_require__(29);

var _charAt3 = _interopRequireDefault(_charAt2);

var _stringSlice2 = __webpack_require__(9);

var _stringSlice3 = _interopRequireDefault(_stringSlice2);

var _toString2 = __webpack_require__(2);

var _toString3 = _interopRequireDefault(_toString2);

var _toUpperCase2 = __webpack_require__(35);

var _toUpperCase3 = _interopRequireDefault(_toUpperCase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */

function capitalizeFirst(string) {
  var str = (0, _toString3.default)(string);

  return (0, _toUpperCase3.default)((0, _charAt3.default)(str, 0)) + (0, _stringSlice3.default)(str, 1);
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callFunctionOrIdentity;

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

var _assertIsObjectLike = __webpack_require__(36);

var _assertIsObjectLike2 = _interopRequireDefault(_assertIsObjectLike);

var _isFunction2 = __webpack_require__(10);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _isNil = __webpack_require__(6);

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @file Utility to invoke a function and return the result or return the identity argument unchanged.
                                                                                                                                                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                                                                                                                                     * @module callFunctionOrIdentity
                                                                                                                                                                                                     */

var requireIsObject = function _requireIsObject(value) {
  return (0, _assertIsObjectLike2.default)(value, 'CreateListFromArrayLike called on non-object');
};

var getArgsArray = function _getArgsArray(value) {
  return (0, _isNil2.default)(value) ? [] : (0, _slice3.default)(requireIsObject(value));
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
  if ((0, _isFunction3.default)(fnOrValue)) {
    var argsArray = getArgsArray(arguments.length <= 1 ? undefined : arguments[1]);

    return (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? (0, _apply3.default)(fnOrValue, arguments.length <= 2 ? undefined : arguments[2], argsArray) : fnOrValue.apply(undefined, _toConsumableArray(argsArray));
  }

  return fnOrValue;
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _call2 = __webpack_require__(15);

var _call3 = _interopRequireDefault(_call2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module call
 */

function call(fn) {
  for (var _len = arguments.length, callArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callArgs[_key - 1] = arguments[_key];
  }

  return _call3.default.apply(undefined, [(0, _assertIsFunction3.default)(fn)].concat(callArgs));
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _bind2 = __webpack_require__(107);

var _bind3 = _interopRequireDefault(_bind2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module bind
 */

function bind(fn) {
  for (var _len = arguments.length, bindArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }

  return _bind3.default.apply(undefined, [(0, _assertIsFunction3.default)(fn)].concat(bindArgs));
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assertIsFunction = __webpack_require__(3);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assertIsFunction).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Function
 */

function fn() {}

exports.default = fn.constructor;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _create
 */

exports.default = Object.create;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createArgList;

var _String2 = __webpack_require__(109);

var _String3 = _interopRequireDefault(_String2);

var _join2 = __webpack_require__(28);

var _join3 = _interopRequireDefault(_join2);

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createArgList
 */

var PRE = '$_';
var POST = '_$';

function _createArgList(length) {
  var array = [];
  var iteratee = function _iteratee(unused, index) {
    (0, _push3.default)(array, PRE + (0, _String3.default)(index) + POST);
  };

  (0, _all3.default)({ length: length }, iteratee);

  return (0, _join3.default)(array, ',');
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _argsToArray;

var _push2 = __webpack_require__(17);

var _push3 = _interopRequireDefault(_push2);

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _argsToArray
 */

function _argsToArray(args) {
  var array = [];
  var iteratee = function _iteratee(arg) {
    (0, _push3.default)(array, arg);
  };

  (0, _all3.default)(args, iteratee);

  return array;
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arity;

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

var _slice2 = __webpack_require__(24);

var _slice3 = _interopRequireDefault(_slice2);

var _bound2 = __webpack_require__(50);

var _bound3 = _interopRequireDefault(_bound2);

var _isPrimitive = __webpack_require__(25);

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _arity
 */

function _arity(fn) {
  var length = (arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length;
  var bound = void 0;

  var binder = function _binder() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = (0, _apply3.default)(fn, this, (0, _slice3.default)(args, 0, length));

    if (this instanceof bound) {
      return (0, _isPrimitive2.default)(result) ? this : result;
    }

    return result;
  };

  bound = (0, _bound3.default)(binder, 'Arity', fn.prototype, length);

  return bound;
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arity;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _arity2 = __webpack_require__(204);

var _arity3 = _interopRequireDefault(_arity2);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arity(fn) {
  return (0, _arity3.default)((0, _assertIsFunction3.default)(fn), (0, _toWholeNumber2.default)((arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length));
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module arity
   */

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apply;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _apply2 = __webpack_require__(14);

var _apply3 = _interopRequireDefault(_apply2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */

function apply(fn) {
  for (var _len = arguments.length, applyArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    applyArgs[_key - 1] = arguments[_key];
  }

  return _apply3.default.apply(undefined, [(0, _assertIsFunction3.default)(fn)].concat(applyArgs));
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = any;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _any2 = __webpack_require__(19);

var _any3 = _interopRequireDefault(_any2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module any
 */

function any(array, callback) {
  return (0, _any3.default)((0, _requireObjectCoercible2.default)(array), (0, _assertIsFunction3.default)(callback), (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _requireObjectCoercible = __webpack_require__(1);

var _requireObjectCoercible2 = _interopRequireDefault(_requireObjectCoercible);

var _toInteger2 = __webpack_require__(5);

var _toInteger3 = _interopRequireDefault(_toInteger2);

var _all2 = __webpack_require__(20);

var _all3 = _interopRequireDefault(_all2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module all
 */

function all(array, callback) {
  (0, _all3.default)((0, _requireObjectCoercible2.default)(array), (0, _assertIsFunction3.default)(callback), (0, _toInteger3.default)(arguments.length <= 2 ? undefined : arguments[2]));
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getOwnPropertyDescriptor
 */

exports.default = Object.getOwnPropertyDescriptor;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _Infinity
 */

exports.default = 1 / 0;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _defineProperties
 */

exports.default = Object.defineProperties;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromCharCode
 */

exports.default = String.fromCharCode;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.indexOf); /**
                                                                      * @file Utility that needs description.
                                                                      * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                      * @module _indexOf
                                                                      */

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Object.prototype.propertyIsEnumerable); /**
                                                                                    * @file Utility that needs description.
                                                                                    * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                                    * @module _propertyIsEnumerable
                                                                                    */

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methodize2 = __webpack_require__(0);

var _methodize3 = _interopRequireDefault(_methodize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _methodize3.default)(Array.prototype.concat); /**
                                                                     * @file Utility that needs description.
                                                                     * @copyright Copyright (c) 2018-present, Graham Fairweather
                                                                     * @module _concat
                                                                     */

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _normalizeSpace;

var _trim2 = __webpack_require__(42);

var _trim3 = _interopRequireDefault(_trim2);

var _whitespace2 = __webpack_require__(31);

var _whitespace3 = _interopRequireDefault(_whitespace2);

var _replace2 = __webpack_require__(13);

var _replace3 = _interopRequireDefault(_replace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRE = '['; /**
                * @file Trims and replaces sequences of whitespace characters by a single space.
                * @copyright Copyright (c) 2018-present, Graham Fairweather
                * @module _normalizeSpace
                */

var POST = ']+';
var whiteSpace = new RegExp(PRE + (0, _whitespace3.default)() + POST, 'g');

function _normalizeSpace(string) {
  return (0, _replace3.default)((0, _trim3.default)(string), whiteSpace, ' ');
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accumulate;

var _assertIsFunction2 = __webpack_require__(3);

var _assertIsFunction3 = _interopRequireDefault(_assertIsFunction2);

var _toObject = __webpack_require__(12);

var _toObject2 = _interopRequireDefault(_toObject);

var _toWholeNumber = __webpack_require__(7);

var _toWholeNumber2 = _interopRequireDefault(_toWholeNumber);

var _accumulate2 = __webpack_require__(52);

var _accumulate3 = _interopRequireDefault(_accumulate2);

var _fromIndex2 = __webpack_require__(95);

var _fromIndex3 = _interopRequireDefault(_fromIndex2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accumulate(array, callback) {
  var object = (0, _toObject2.default)(array);
  var length = (0, _toWholeNumber2.default)(object.length);

  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (!rest.length && length < 1) {
    throw new TypeError('accumulate of empty array with no initial value');
  }

  var start = (0, _fromIndex3.default)(object, rest[1]);

  return (0, _accumulate3.default)(object, (0, _assertIsFunction3.default)(callback), (rest.length ? rest : object)[start], rest.length ? start : start + 1);
} /**
   * @file Utility that needs description.
   * @copyright Copyright (c) 2018-present, Graham Fairweather
   * @module accumulate
   */

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accumulate = __webpack_require__(217);

Object.defineProperty(exports, 'accumulate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_accumulate).default;
  }
});

var _all = __webpack_require__(208);

Object.defineProperty(exports, 'all', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_all).default;
  }
});

var _any = __webpack_require__(207);

Object.defineProperty(exports, 'any', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_any).default;
  }
});

var _apply = __webpack_require__(206);

Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_apply).default;
  }
});

var _arity = __webpack_require__(205);

Object.defineProperty(exports, 'arity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arity).default;
  }
});

var _assign = __webpack_require__(106);

Object.defineProperty(exports, 'assign', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assign).default;
  }
});

var _assertIsFunction = __webpack_require__(199);

Object.defineProperty(exports, 'assertIsFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assertIsFunction).default;
  }
});

var _assertIsObjectLike = __webpack_require__(36);

Object.defineProperty(exports, 'assertIsObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assertIsObjectLike).default;
  }
});

var _assertIs = __webpack_require__(93);

Object.defineProperty(exports, 'assertIs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assertIs).default;
  }
});

var _attempt = __webpack_require__(70);

Object.defineProperty(exports, 'attempt', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_attempt).default;
  }
});

var _bind = __webpack_require__(198);

Object.defineProperty(exports, 'bind', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bind).default;
  }
});

var _call = __webpack_require__(197);

Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_call).default;
  }
});

var _callFunctionOrIdentity = __webpack_require__(196);

Object.defineProperty(exports, 'callFunctionOrIdentity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_callFunctionOrIdentity).default;
  }
});

var _capitalizeFirst = __webpack_require__(195);

Object.defineProperty(exports, 'capitalizeFirst', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_capitalizeFirst).default;
  }
});

var _capitalize = __webpack_require__(194);

Object.defineProperty(exports, 'capitalize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_capitalize).default;
  }
});

var _clamp = __webpack_require__(92);

Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clamp).default;
  }
});

var _constant = __webpack_require__(91);

Object.defineProperty(exports, 'constant', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_constant).default;
  }
});

var _defaultToOneOf = __webpack_require__(192);

Object.defineProperty(exports, 'defaultToOneOf', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultToOneOf).default;
  }
});

var _defineValidatorProperties = __webpack_require__(191);

Object.defineProperty(exports, 'defineValidatorProperties', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defineValidatorProperties).default;
  }
});

var _defineValidatorProperty = __webpack_require__(87);

Object.defineProperty(exports, 'defineValidatorProperty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defineValidatorProperty).default;
  }
});

var _delayPromise = __webpack_require__(189);

Object.defineProperty(exports, 'delayPromise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_delayPromise).default;
  }
});

var _difference = __webpack_require__(187);

Object.defineProperty(exports, 'difference', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_difference).default;
  }
});

var _drop = __webpack_require__(186);

Object.defineProperty(exports, 'drop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drop).default;
  }
});

var _find = __webpack_require__(185);

Object.defineProperty(exports, 'find', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_find).default;
  }
});

var _findIndex = __webpack_require__(184);

Object.defineProperty(exports, 'findIndex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findIndex).default;
  }
});

var _getAt = __webpack_require__(183);

Object.defineProperty(exports, 'getAt', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getAt).default;
  }
});

var _getFunctionName = __webpack_require__(182);

Object.defineProperty(exports, 'getFunctionName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFunctionName).default;
  }
});

var _hasOwnProperty = __webpack_require__(181);

Object.defineProperty(exports, 'hasOwnProperty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hasOwnProperty).default;
  }
});

var _head = __webpack_require__(180);

Object.defineProperty(exports, 'head', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_head).default;
  }
});

var _identity = __webpack_require__(178);

Object.defineProperty(exports, 'identity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_identity).default;
  }
});

var _includes = __webpack_require__(177);

Object.defineProperty(exports, 'includes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_includes).default;
  }
});

var _intersection = __webpack_require__(176);

Object.defineProperty(exports, 'intersection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intersection).default;
  }
});

var _intToRGB = __webpack_require__(174);

Object.defineProperty(exports, 'intToRGB', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intToRGB).default;
  }
});

var _isArrayLikeObject = __webpack_require__(173);

Object.defineProperty(exports, 'isArrayLikeObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isArrayLikeObject).default;
  }
});

var _isArrayLike = __webpack_require__(18);

Object.defineProperty(exports, 'isArrayLike', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isArrayLike).default;
  }
});

var _isBinary = __webpack_require__(98);

Object.defineProperty(exports, 'isBinary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isBinary).default;
  }
});

var _isBooleanType = __webpack_require__(79);

Object.defineProperty(exports, 'isBooleanType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isBooleanType).default;
  }
});

var _isBooleanObject = __webpack_require__(172);

Object.defineProperty(exports, 'isBoolean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isBooleanObject).default;
  }
});

var _isClassSupported = __webpack_require__(100);

Object.defineProperty(exports, 'isClassSupported', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isClassSupported).default;
  }
});

var _isCountingNumber = __webpack_require__(171);

Object.defineProperty(exports, 'isCountingNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isCountingNumber).default;
  }
});

var _isDateObject = __webpack_require__(99);

Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDateObject).default;
  }
});

var _isDOMNode = __webpack_require__(170);

Object.defineProperty(exports, 'isDOMNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDOMNode).default;
  }
});

var _isError = __webpack_require__(169);

Object.defineProperty(exports, 'isError', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isError).default;
  }
});

var _isFalsey = __webpack_require__(167);

Object.defineProperty(exports, 'isFalsey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFalsey).default;
  }
});

var _isFunction = __webpack_require__(166);

Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFunction).default;
  }
});

var _isFunctionType = __webpack_require__(68);

Object.defineProperty(exports, 'isFunctionType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFunctionType).default;
  }
});

var _isHex = __webpack_require__(165);

Object.defineProperty(exports, 'isHex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isHex).default;
  }
});

var _isInteger = __webpack_require__(94);

Object.defineProperty(exports, 'isInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isInteger).default;
  }
});

var _isLowerCased = __webpack_require__(164);

Object.defineProperty(exports, 'isLowerCased', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isLowerCased).default;
  }
});

var _isNil = __webpack_require__(6);

Object.defineProperty(exports, 'isNil', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNil).default;
  }
});

var _isNull = __webpack_require__(45);

Object.defineProperty(exports, 'isNull', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNull).default;
  }
});

var _isNumberObject = __webpack_require__(163);

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumberObject).default;
  }
});

var _isNumberFinite = __webpack_require__(162);

Object.defineProperty(exports, 'isNumberFinite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumberFinite).default;
  }
});

var _isNumberNaN = __webpack_require__(161);

Object.defineProperty(exports, 'isNumberNaN', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumberNaN).default;
  }
});

var _isNumberType = __webpack_require__(30);

Object.defineProperty(exports, 'isNumberType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumberType).default;
  }
});

var _isObjectLikeNotArray = __webpack_require__(160);

Object.defineProperty(exports, 'isObjectLikeNotArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObjectLikeNotArray).default;
  }
});

var _isObjectLike = __webpack_require__(11);

Object.defineProperty(exports, 'isObjectLike', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObjectLike).default;
  }
});

var _isObjectType = __webpack_require__(67);

Object.defineProperty(exports, 'isObjectType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObjectType).default;
  }
});

var _isOctal = __webpack_require__(96);

Object.defineProperty(exports, 'isOctal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isOctal).default;
  }
});

var _isPopulatedString = __webpack_require__(158);

Object.defineProperty(exports, 'isPopulatedString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isPopulatedString).default;
  }
});

var _isPrimitive = __webpack_require__(25);

Object.defineProperty(exports, 'isPrimitive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isPrimitive).default;
  }
});

var _isRegex = __webpack_require__(40);

Object.defineProperty(exports, 'isRegex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isRegex).default;
  }
});

var _isSafeInteger = __webpack_require__(51);

Object.defineProperty(exports, 'isSafeInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSafeInteger).default;
  }
});

var _isSearchIndex = __webpack_require__(157);

Object.defineProperty(exports, 'isSearchIndex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSearchIndex).default;
  }
});

var _isSpaced = __webpack_require__(78);

Object.defineProperty(exports, 'isSpaced', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSpaced).default;
  }
});

var _isStringTypeOrInteger = __webpack_require__(156);

Object.defineProperty(exports, 'isStringTypeOrInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isStringTypeOrInteger).default;
  }
});

var _isStringTypeOrNumberType = __webpack_require__(155);

Object.defineProperty(exports, 'isStringTypeOrNumberType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isStringTypeOrNumberType).default;
  }
});

var _isStringType = __webpack_require__(38);

Object.defineProperty(exports, 'isStringType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isStringType).default;
  }
});

var _isString = __webpack_require__(4);

Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isString).default;
  }
});

var _isSurrogatePair = __webpack_require__(154);

Object.defineProperty(exports, 'isSurrogatePair', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSurrogatePair).default;
  }
});

var _isSymbolType = __webpack_require__(32);

Object.defineProperty(exports, 'isSymbolType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSymbolType).default;
  }
});

var _isSymbol = __webpack_require__(71);

Object.defineProperty(exports, 'isSymbol', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSymbol).default;
  }
});

var _isSymbolSupported = __webpack_require__(43);

Object.defineProperty(exports, 'isSymbolSupported', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSymbolSupported).default;
  }
});

var _isToStringTagSupported = __webpack_require__(69);

Object.defineProperty(exports, 'isToStringTagSupported', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isToStringTagSupported).default;
  }
});

var _isTruthy = __webpack_require__(152);

Object.defineProperty(exports, 'isTruthy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isTruthy).default;
  }
});

var _isUndefined = __webpack_require__(27);

Object.defineProperty(exports, 'isUndefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUndefined).default;
  }
});

var _isUnderscored = __webpack_require__(151);

Object.defineProperty(exports, 'isUnderscored', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUnderscored).default;
  }
});

var _isUniq = __webpack_require__(150);

Object.defineProperty(exports, 'isUniq', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUniq).default;
  }
});

var _isUpperCased = __webpack_require__(149);

Object.defineProperty(exports, 'isUpperCased', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isUpperCased).default;
  }
});

var _isValidHtml4Id = __webpack_require__(148);

Object.defineProperty(exports, 'isValidHtml4Id', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isValidHtml4Id).default;
  }
});

var _isValidHtml5Id = __webpack_require__(147);

Object.defineProperty(exports, 'isValidHtml5Id', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isValidHtml5Id).default;
  }
});

var _isWhiteSpaced = __webpack_require__(146);

Object.defineProperty(exports, 'isWhiteSpaced', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isWhiteSpaced).default;
  }
});

var _isWholeNumber = __webpack_require__(37);

Object.defineProperty(exports, 'isWholeNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isWholeNumber).default;
  }
});

var _kebabJoin = __webpack_require__(145);

Object.defineProperty(exports, 'kebabJoin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_kebabJoin).default;
  }
});

var _last = __webpack_require__(144);

Object.defineProperty(exports, 'last', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_last).default;
  }
});

var _methodize = __webpack_require__(143);

Object.defineProperty(exports, 'methodize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_methodize).default;
  }
});

var _modulo = __webpack_require__(81);

Object.defineProperty(exports, 'modulo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modulo).default;
  }
});

var _negate = __webpack_require__(142);

Object.defineProperty(exports, 'negate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_negate).default;
  }
});

var _nilifyIs = __webpack_require__(86);

Object.defineProperty(exports, 'nilifyIs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nilifyIs).default;
  }
});

var _normalizeSpace = __webpack_require__(66);

Object.defineProperty(exports, 'normalizeSpace', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_normalizeSpace).default;
  }
});

var _noop = __webpack_require__(141);

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_noop).default;
  }
});

var _numberToDecimalString = __webpack_require__(75);

Object.defineProperty(exports, 'numberToDecimalString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_numberToDecimalString).default;
  }
});

var _numberFormat = __webpack_require__(140);

Object.defineProperty(exports, 'numberFormat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_numberFormat).default;
  }
});

var _parseDecimal = __webpack_require__(137);

Object.defineProperty(exports, 'parseDecimal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseDecimal).default;
  }
});

var _parseInteger = __webpack_require__(136);

Object.defineProperty(exports, 'parseInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseInteger).default;
  }
});

var _partial = __webpack_require__(135);

Object.defineProperty(exports, 'partial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_partial).default;
  }
});

var _partialRight = __webpack_require__(133);

Object.defineProperty(exports, 'partialRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_partialRight).default;
  }
});

var _padStart = __webpack_require__(80);

Object.defineProperty(exports, 'padStart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_padStart).default;
  }
});

var _regexpEscape = __webpack_require__(131);

Object.defineProperty(exports, 'regexpEscape', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_regexpEscape).default;
  }
});

var _replaceComments = __webpack_require__(60);

Object.defineProperty(exports, 'replaceComments', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_replaceComments).default;
  }
});

var _requireCoercibleToString = __webpack_require__(23);

Object.defineProperty(exports, 'requireCoercibleToString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requireCoercibleToString).default;
  }
});

var _requireObjectCoercible = __webpack_require__(1);

Object.defineProperty(exports, 'requireObjectCoercible', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requireObjectCoercible).default;
  }
});

var _sameValue = __webpack_require__(89);

Object.defineProperty(exports, 'sameValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sameValue).default;
  }
});

var _sameValueZero = __webpack_require__(90);

Object.defineProperty(exports, 'sameValueZero', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sameValueZero).default;
  }
});

var _shuffle = __webpack_require__(130);

Object.defineProperty(exports, 'shuffle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shuffle).default;
  }
});

var _sign = __webpack_require__(129);

Object.defineProperty(exports, 'sign', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sign).default;
  }
});

var _sift = __webpack_require__(128);

Object.defineProperty(exports, 'sift', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sift).default;
  }
});

var _stringTest = __webpack_require__(127);

Object.defineProperty(exports, 'stringTest', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringTest).default;
  }
});

var _stubArray = __webpack_require__(105);

Object.defineProperty(exports, 'stubArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stubArray).default;
  }
});

var _stubFalse = __webpack_require__(126);

Object.defineProperty(exports, 'stubFalse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stubFalse).default;
  }
});

var _stubObject = __webpack_require__(125);

Object.defineProperty(exports, 'stubObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stubObject).default;
  }
});

var _stubString = __webpack_require__(124);

Object.defineProperty(exports, 'stubString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stubString).default;
  }
});

var _stubTrue = __webpack_require__(72);

Object.defineProperty(exports, 'stubTrue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stubTrue).default;
  }
});

var _squeeze = __webpack_require__(123);

Object.defineProperty(exports, 'squeeze', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_squeeze).default;
  }
});

var _surround = __webpack_require__(85);

Object.defineProperty(exports, 'surround', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_surround).default;
  }
});

var _trim = __webpack_require__(121);

Object.defineProperty(exports, 'trim', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trim).default;
  }
});

var _trimLeft = __webpack_require__(120);

Object.defineProperty(exports, 'trimLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trimLeft).default;
  }
});

var _trimRight = __webpack_require__(119);

Object.defineProperty(exports, 'trimRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trimRight).default;
  }
});

var _trunc = __webpack_require__(118);

Object.defineProperty(exports, 'trunc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trunc).default;
  }
});

var _truncate = __webpack_require__(116);

Object.defineProperty(exports, 'truncate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_truncate).default;
  }
});

var _toBoolean = __webpack_require__(77);

Object.defineProperty(exports, 'toBoolean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toBoolean).default;
  }
});

var _toInteger = __webpack_require__(114);

Object.defineProperty(exports, 'toInteger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toInteger).default;
  }
});

var _toNumber = __webpack_require__(113);

Object.defineProperty(exports, 'toNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toNumber).default;
  }
});

var _toObject = __webpack_require__(12);

Object.defineProperty(exports, 'toObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toObject).default;
  }
});

var _toPrimitive = __webpack_require__(58);

Object.defineProperty(exports, 'toPrimitive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toPrimitive).default;
  }
});

var _toPropertyKey = __webpack_require__(34);

Object.defineProperty(exports, 'toPropertyKey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toPropertyKey).default;
  }
});

var _toString = __webpack_require__(112);

Object.defineProperty(exports, 'toString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toString).default;
  }
});

var _toStringTag = __webpack_require__(44);

Object.defineProperty(exports, 'toStringTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toStringTag).default;
  }
});

var _toUint = __webpack_require__(82);

Object.defineProperty(exports, 'toUint24', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toUint).default;
  }
});

var _toWholeNumber = __webpack_require__(7);

Object.defineProperty(exports, 'toWholeNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toWholeNumber).default;
  }
});

var _union = __webpack_require__(111);

Object.defineProperty(exports, 'union', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_union).default;
  }
});

var _uniq = __webpack_require__(110);

Object.defineProperty(exports, 'uniq', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uniq).default;
  }
});

var _MAX_SAFE_INTEGER = __webpack_require__(53);

Object.defineProperty(exports, 'MAX_SAFE_INTEGER', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MAX_SAFE_INTEGER).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});
//# sourceMappingURL=caboodle-x.js.map