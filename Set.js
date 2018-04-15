/**
 * @file ES6 Set.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module Set
 */

import _isArray from './.internal/_isArray';
import _defineProperty from './.internal/_defineProperty';
import _defineProperties from './.internal/_defineProperties';
import assertIsObjectLike from './assertIsObjectLike';
import SYMBOL_ITERATOR from './symbolIterator';
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
 * @param {Object} context - The Set object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */
const SetIt = function SetIterator(context, iteratorKind) {
  _defineProperties(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true,
    },
    '[[Set]]': {
      value: assertIsObjectLike(context),
    },
    '[[SetIterationKind]]': {
      value: iteratorKind || 'value',
    },
    '[[SetNextIndex]]': {
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
_defineProperty(SetIt.prototype, 'next', {
  value: function next() {
    const context = assertIsObjectLike(this['[[Set]]']);
    const index = this['[[SetNextIndex]]'];

    if (this['[[IteratorHasMore]]'] && index < context['[[key]]'].length) {
      const object = {done: false};
      const value = context['[[key]]'][index];

      object.value =
        this['[[SetIterationKind]]'] === 'key+value' ? [value, value] : value;
      this['[[SetNextIndex]]'] += 1;

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
_defineProperty(SetIt.prototype, SYMBOL_ITERATOR, {
  value: function iterator() {
    return this;
  },
});

/**
 * This method returns a new Iterator object that contains the
 * values for each element in the Set object in insertion order.
 *
 * @private
 * @this Set
 * @returns {Object} A new Iterator object.
 */
const setValuesIterator = function values() {
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
export default function Set(...iterable) {
  if (!this || !(this instanceof Set)) {
    throw new TypeError("Constructor Set requires 'new'");
  }

  base.parseIterable('set', this, iterable.length ? iterable[0] : void 0);
}

_defineProperty(Set, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR,
});

_defineProperties(
  Set.prototype,
  /** @lends module:collections-x.Set.prototype */ {
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
      },
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
      },
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
      },
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
      },
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
      value: function forEach(callback, ...thisArg) {
        return base.forEach('set', this, callback, ...thisArg);
      },
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
      value: base.has,
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
      value: setValuesIterator,
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
        if (!this || !_isArray(this['[[key]]']) || this['[[kind]]'] !== 'set') {
          throw new ReferenceError('SetObject is not defined');
        }

        return this['[[key]]'].length;
      },
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
      value: setValuesIterator,
    },
  },
);

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
_defineProperty(Set.prototype, SYMBOL_ITERATOR, {
  value: setValuesIterator,
});
