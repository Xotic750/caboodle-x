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
 * @param {object} context - The Map object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */

var MapIt = function MapIterator(context, iteratorKind) {
  _defineProperties(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Map]]': {
      value: assertIsObjectLike(context)
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
 * @returns {object} Returns an object with two properties: done and value.
 */


_defineProperty(MapIt.prototype, 'next', {
  value: function next() {
    var context = assertIsObjectLike(this['[[Map]]']);
    assertIsObjectLike(context);
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
 * @returns {object} This Iterator object.
 */


_defineProperty(MapIt.prototype, SYMBOL_ITERATOR, {
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
 */


export default function Map() {
  if (!this || !(this instanceof Map)) {
    throw new TypeError("Constructor Map requires 'new'");
  }

  base.parseIterable('map', this, arguments.length ? arguments.length <= 0 ? undefined : arguments[0] : void 0);
}

_defineProperty(Map, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR
});

_defineProperties(Map.prototype,
/** @lends Map.prototype */
{
  /**
   * The clear() method removes all elements from a Map object.
   *
   * @returns {object} The Map object.
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
   * @returns {object} A new Iterator object.
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
   * @returns {object} The Map object.
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
   */
  get: {
    value: function get(key) {
      var occurred = _occurs(assertIsObjectLike(this)['[[key]]'], key);

      return occurred.includes ? this['[[value]]'][occurred.index] : void 0;
    }
  },

  /**
   * The has() method returns a boolean indicating whether an element with
   * the specified key exists or not.
   *
   * @function
   * @param {*} key - The key of the element to test for presence in the Map object.
   * @returns {boolean} Returns true if an element with the specified key
   *  exists in the Map object; otherwise false.
   */
  has: {
    value: base.has
  },

  /**
   * The keys() method returns a new Iterator object that contains the keys
   * for each element in the Map object in insertion order.
   *
   * @returns {object} A new Iterator object.
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
   * @returns {object} The Map object.
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
   */
  size: {
    get: function size() {
      if (!this || !_isArray(this['[[key]]']) || this['[[kind]]'] !== 'map') {
        throw new ReferenceError('MapObject is not defined');
      }

      return this['[[key]]'].length;
    }
  },

  /**
   * The values() method returns a new Iterator object that contains the
   * values for each element in the Map object in insertion order.
   *
   * @returns {object} A new Iterator object.
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
 * @returns {object} A new Iterator object.
 */


_defineProperty(Map.prototype, SYMBOL_ITERATOR, {
  value: Map.prototype.entries
});
//# sourceMappingURL=Map.js.map