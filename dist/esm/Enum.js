/**
 * @file Enumerated type library.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Enum
 */
import _defineProperties from './.internal/_defineProperties';
import _defineProperty from './.internal/_defineProperty';
import _Object from './.internal/_Object';
import _create from './.internal/_create';
import isObjectLike from './isObjectLike';
import isVarName from './isVarName';
import isFunction from './isFunction';
import isArrayLike from './isArrayLike';
import isSafeInteger from './isSafeInteger';
import isUndefined from './isUndefined';
import getFunctionName from './getFunctionName';
import toPropertyKey from './toPropertyKey';
import _argsToArray from './.internal/_argsToArray';
import SYMBOL_ITERATOR from './symbolIterator';
import _keys from './.internal/_keys';
import _freeze from './.internal/_freeze';
import _forEach from './.internal/_forEach';
import _call from './.internal/_call';
import _apply from './.internal/_apply';
import _join from './.internal/_join';
import _shift from './.internal/_shift';
import _push from './.internal/_push';
import _stringify from './.internal/_stringify';
import _hasFakeSymbolIterator from './.internal/_hasFakeSymbolIterator';
import Set from './Set';
import Map from './Map';
var RESERVED_NAME = 'Reserved name: ';
var reserved = new Set(['forEach', 'name', 'toJSON', 'toString', 'value', 'valueOf']);
/* istanbul ignore next */

if (_hasFakeSymbolIterator) {
  reserved.add(SYMBOL_ITERATOR);
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
 * @returns {object} The enum.
 */


export default function Enum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length) {
    var name = args[0],
        value = args[1];
    var key = toPropertyKey(name);

    if (reserved.has(key)) {
      throw new SyntaxError(RESERVED_NAME + key);
    }

    _defineProperties(this, {
      name: {
        enumerable: true,
        value: key
      },
      value: {
        enumerable: true,
        value: value
      }
    });

    _freeze(this);
  }
}

_defineProperty(Enum, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR
});

_defineProperties(Enum.prototype, {
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
      return "".concat(getFunctionName(this.constructor), ".").concat(this.name);
    }
  }
});

var generateNextValue = function _generateNextValue() {
  var count = 0;
  return {
    next: function next(name, value) {
      if (isSafeInteger(value)) {
        count = value;
      }

      var result = count;
      count += 1;
      return result;
    }
  };
};

var init = function _init(CstmCtr, properties, opts) {
  var keys = new Set();
  var dNames = new Map();
  var dValues = new Map();
  var isClone;
  var items;

  if (isArrayLike(properties)) {
    items = properties;
  } else if (isFunction(properties) && properties.prototype instanceof Enum) {
    isClone = true;
    items = properties.toJSON();
  } else {
    throw new Error('bad args');
  }

  var iter = isFunction(opts.auto) ? opts.auto() : generateNextValue();
  var next;

  _forEach(items, function _iteratee(item) {
    var ident;

    if (isClone || isObjectLike(item)) {
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

    _defineProperty(CstmCtr, name, {
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
    _push(strArr, _stringify(enumMember.name));
  });
  return "".concat(ctrName, " { ").concat(_join(strArr, ', '), " }");
};

_defineProperties(Enum, {
  /**
   * Creates an enumeration collection. Primary method.
   *
   * @param {string} typeName - The name of the enum collection.
   * @param {Array} properties - Initialiser array.
   * @param {object} options - Options to determine behaviour.
   * @returns {Function} The enumeration collection.
   */
  create: {
    value: function create(typeName, properties, options) {
      var ctrName = toPropertyKey(typeName);

      if (ctrName === 'undefined' || !isVarName(ctrName)) {
        throw new Error("Invalid enum name: ".concat(ctrName));
      }

      var opts = _Object(options);

      var data;
      /* eslint-disable-next-line no-new-func */

      var CstmCtr = Function('f', '_argsToArray', "return function ".concat(ctrName, "(value){return f(this,_argsToArray(arguments))}"))(function f(context, args) {
        if (data) {
          if (isObjectLike(context) && context instanceof CstmCtr) {
            throw new SyntaxError('Enum classes can’t be instantiated');
          }

          return data.names.get(data.values.get(_shift(args)));
        }

        _apply(Enum, context, args);

        return context;
      }, _argsToArray);
      var asString;

      _defineProperties(CstmCtr, {
        forEach: {
          value: function forEach(callback, thisArg) {
            _forEach(data.keys, function _iteratee(key) {
              _call(callback, thisArg, data.names.get(key));
            });
          }
        },
        toJSON: {
          value: function toJSON() {
            var value = [];
            data.names.forEach(function _itereatee(enumMember) {
              _push(value, enumMember.toJSON());
            });
            return value;
          }
        },
        toString: {
          value: function toString() {
            if (isUndefined(asString)) {
              asString = calcString(ctrName, data.names);
            }

            return asString;
          }
        }
      });

      _defineProperty(CstmCtr, SYMBOL_ITERATOR, {
        value: function iterator() {
          var iter = data.keys[SYMBOL_ITERATOR]();
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

      CstmCtr.prototype = _create(Enum.prototype);

      _defineProperties(CstmCtr.prototype, {
        constructor: {
          value: CstmCtr
        },
        name: {
          value: ctrName
        }
      });

      if (isObjectLike(opts.classMethods)) {
        _forEach(_keys(opts.classMethods), function _iteratee(key) {
          if (reserved.has(key)) {
            throw new SyntaxError(RESERVED_NAME + key);
          }

          var method = opts.classMethods[key];

          if (isFunction(method)) {
            _defineProperty(CstmCtr, key, {
              value: method
            });

            reserved.add(key);
          }
        });
      }

      if (isObjectLike(opts.instanceMethods)) {
        _forEach(_keys(opts.instanceMethods), function _iteratee(key) {
          if (reserved.has(key)) {
            throw new SyntaxError(RESERVED_NAME + key);
          }

          var method = opts.instanceMethods[key];

          if (isFunction(method)) {
            _defineProperty(CstmCtr.prototype, key, {
              value: method
            });

            reserved.add(key);
          }
        });
      }

      data = init(CstmCtr, properties, opts);
      return _freeze(CstmCtr);
    }
  }
});
//# sourceMappingURL=Enum.js.map