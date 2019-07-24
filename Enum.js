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

const RESERVED_NAME = 'Reserved name: ';

const reserved = new Set([
  'forEach',
  'name',
  'toJSON',
  'toString',
  'value',
  'valueOf',
]);

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
 * @returns {Object} The enum.
 */
export default function Enum(...args) {
  if (args.length) {
    const [name, value] = args;
    const key = toPropertyKey(name);

    if (reserved.has(key)) {
      throw new SyntaxError(RESERVED_NAME + key);
    }

    _defineProperties(this, {
      name: {
        enumerable: true,
        value: key,
      },

      value: {
        enumerable: true,
        value,
      },
    });

    _freeze(this);
  }
}

_defineProperty(Enum, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR,
});

_defineProperties(Enum.prototype, {
  toJSON: {
    value: function toJSON() {
      return {
        name: this.name,
        value: this.value,
      };
    },
  },

  toString: {
    value: function toString() {
      return `${getFunctionName(this.constructor)}.${this.name}`;
    },
  },
});

const generateNextValue = function _generateNextValue() {
  let count = 0;

  return {
    next: function next(name, value) {
      if (isSafeInteger(value)) {
        count = value;
      }

      const result = count;

      count += 1;

      return result;
    },
  };
};

const init = function _init(CstmCtr, properties, opts) {
  const keys = new Set();
  const dNames = new Map();
  const dValues = new Map();

  let isClone;
  let items;

  if (isArrayLike(properties)) {
    items = properties;
  } else if (isFunction(properties) && properties.prototype instanceof Enum) {
    isClone = true;
    items = properties.toJSON();
  } else {
    throw new Error('bad args');
  }

  const iter = isFunction(opts.auto) ? opts.auto() : generateNextValue();

  let next;

  _forEach(items, function _iteratee(item) {
    let ident;

    if (isClone || isObjectLike(item)) {
      next = iter.next(item.name, item.value);
      ident = new CstmCtr(item.name, item.value);
    } else {
      next = iter.next(item);
      ident = new CstmCtr(item, next);
    }

    const {name, value} = ident;

    if (dNames.has(name)) {
      throw new TypeError(`Attempted to reuse name: ${name}`);
    }

    dNames.set(name, ident);
    if (dValues.has(value)) {
      const oName = dValues.get(value);

      if (opts.unique) {
        throw new TypeError(
          `Duplicate value (${value}) found: ${name} -> ${oName}`,
        );
      }

      ident = dNames.get(oName);
    } else {
      dValues.set(value, name);
      keys.add(name);
    }

    _defineProperty(CstmCtr, name, {
      enumerable: true,
      value: ident,
    });
  });

  return {
    keys,
    names: dNames,
    values: dValues,
  };
};

const calcString = function _calcString(ctrName, names) {
  const strArr = [];

  names.forEach(function _itereatee(enumMember) {
    _push(strArr, _stringify(enumMember.name));
  });

  return `${ctrName} { ${_join(strArr, ', ')} }`;
};

_defineProperties(Enum, {
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
      const ctrName = toPropertyKey(typeName);

      if (ctrName === 'undefined' || !isVarName(ctrName)) {
        throw new Error(`Invalid enum name: ${ctrName}`);
      }

      const opts = _Object(options);

      let data;

      // eslint-disable-next-line no-new-func
      const CstmCtr = Function(
        'f',
        '_argsToArray',
        `return function ${ctrName}(value){return f(this,_argsToArray(arguments))}`,
      )(function f(context, args) {
        if (data) {
          if (isObjectLike(context) && context instanceof CstmCtr) {
            throw new SyntaxError('Enum classes can’t be instantiated');
          }

          return data.names.get(data.values.get(_shift(args)));
        }

        _apply(Enum, context, args);

        return context;
      }, _argsToArray);

      let asString;

      _defineProperties(CstmCtr, {
        forEach: {
          value: function forEach(callback, thisArg) {
            _forEach(data.keys, function _iteratee(key) {
              _call(callback, thisArg, data.names.get(key));
            });
          },
        },

        toJSON: {
          value: function toJSON() {
            const value = [];

            data.names.forEach(function _itereatee(enumMember) {
              _push(value, enumMember.toJSON());
            });

            return value;
          },
        },

        toString: {
          value: function toString() {
            if (isUndefined(asString)) {
              asString = calcString(ctrName, data.names);
            }

            return asString;
          },
        },
      });

      _defineProperty(CstmCtr, SYMBOL_ITERATOR, {
        value: function iterator() {
          const iter = data.keys[SYMBOL_ITERATOR]();

          return {
            next: function next() {
              const nxt = iter.next();

              if (nxt.done) {
                return nxt;
              }

              return {
                done: false,
                value: data.names.get(nxt.value),
              };
            },
          };
        },
      });

      CstmCtr.prototype = _create(Enum.prototype);

      _defineProperties(CstmCtr.prototype, {
        constructor: {
          value: CstmCtr,
        },

        name: {
          value: ctrName,
        },
      });

      if (isObjectLike(opts.classMethods)) {
        _forEach(_keys(opts.classMethods), function _iteratee(key) {
          if (reserved.has(key)) {
            throw new SyntaxError(RESERVED_NAME + key);
          }

          const method = opts.classMethods[key];

          if (isFunction(method)) {
            _defineProperty(CstmCtr, key, {
              value: method,
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

          const method = opts.instanceMethods[key];
          if (isFunction(method)) {
            _defineProperty(CstmCtr.prototype, key, {
              value: method,
            });

            reserved.add(key);
          }
        });
      }

      data = init(CstmCtr, properties, opts);

      return _freeze(CstmCtr);
    },
  },
});
