/**
 * @file ES6 Map.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Map
 */

import _isArray from './.internal/_isArray';
import _defineProperty from './.internal/_defineProperty';
import _defineProperties from './.internal/_defineProperties';
import assertIsObjectLike from './assertIsObjectLike';
import SYMBOL_ITERATOR from './symbolIterator';
import _occurs from './.internal/_occurs';
import * as base from './.internal/_collectionsBase';

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
const MapIt = function MapIterator(context, iteratorKind) {
  _defineProperties(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true,
    },
    '[[Map]]': {
      value: assertIsObjectLike(context),
    },
    '[[MapIterationKind]]': {
      value: iteratorKind,
    },
    '[[MapNextIndex]]': {
      value: 0,
      writable: true,
    },
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
_defineProperty(MapIt.prototype, 'next', {
  value: function next() {
    const context = assertIsObjectLike(this['[[Map]]']);

    assertIsObjectLike(context);

    const index = this['[[MapNextIndex]]'];

    if (this['[[IteratorHasMore]]'] && index < context['[[key]]'].length) {
      const object = {done: false};
      const iteratorKind = this['[[MapIterationKind]]'];

      object.value =
        iteratorKind === 'key+value'
          ? [context['[[key]]'][index], context['[[value]]'][index]]
          : context[`[[${iteratorKind}]]`][index];

      this['[[MapNextIndex]]'] += 1;

      return object;
    }

    this['[[IteratorHasMore]]'] = false;

    return {
      done: true,
      value: void 0,
    };
  },
});

/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @returns {Object} This Iterator object.
 */
_defineProperty(MapIt.prototype, SYMBOL_ITERATOR, {
  value: function iterator() {
    return this;
  },
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
export default function Map(...iterable) {
  if (!this || !(this instanceof Map)) {
    throw new TypeError("Constructor Map requires 'new'");
  }

  base.parseIterable('map', this, iterable.length ? iterable[0] : void 0);
}

_defineProperty(Map, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR,
});

_defineProperties(
  Map.prototype,
  /** @lends module:collections-x.Map.prototype */ {
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
      },
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
      },
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
      },
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
      value: function forEach(callback, ...thisArg) {
        return base.forEach('map', this, callback, ...thisArg);
      },
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
        const occurred = _occurs(assertIsObjectLike(this)['[[key]]'], key);

        return occurred.includes ? this['[[value]]'][occurred.index] : void 0;
      },
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
      value: base.has,
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
      },
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
      },
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
        if (!this || !_isArray(this['[[key]]']) || this['[[kind]]'] !== 'map') {
          throw new ReferenceError('MapObject is not defined');
        }

        return this['[[key]]'].length;
      },
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
      },
    },
  },
);

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
_defineProperty(Map.prototype, SYMBOL_ITERATOR, {
  value: Map.prototype.entries,
});
