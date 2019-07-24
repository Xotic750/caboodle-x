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
 * @param {object} context - The Set object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */

var SetIt = function SetIterator(context, iteratorKind) {
  _defineProperties(this, {
    '[[IteratorHasMore]]': {
      value: true,
      writable: true
    },
    '[[Set]]': {
      value: assertIsObjectLike(context)
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
 * @returns {object} Returns an object with two properties: done and value.
 */


_defineProperty(SetIt.prototype, 'next', {
  value: function next() {
    var context = assertIsObjectLike(this['[[Set]]']);
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
 * @returns {object} This Iterator object.
 */


_defineProperty(SetIt.prototype, SYMBOL_ITERATOR, {
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
 * @returns {object} A new Iterator object.
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
 */


export default function Set() {
  if (!this || !(this instanceof Set)) {
    throw new TypeError("Constructor Set requires 'new'");
  }

  base.parseIterable('set', this, arguments.length ? arguments.length <= 0 ? undefined : arguments[0] : void 0);
}

_defineProperty(Set, 'SYMBOL_ITERATOR', {
  value: SYMBOL_ITERATOR
});

_defineProperties(Set.prototype,
/** @lends Set.prototype */
{
  /**
   * The add() method appends a new element with a specified value to the end
   * of a Set object.
   *
   * @param {*} value - Required. The value of the element to add to the Set
   *  object.
   * @returns {object} The Set object.
   */
  add: {
    value: function add(value) {
      return base.addSet('set', this, value);
    }
  },

  /**
   * The clear() method removes all elements from a Set object.
   *
   * @returns {object} The Set object.
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
   * @returns {object} A new Iterator object.
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
   * @returns {object} The Set object.
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
   */
  has: {
    value: base.has
  },

  /**
   * The keys() method is an alias for the `values` method (for similarity
   * with Map objects), it behaves exactly the same and returns values of Set elements.
   *
   * @function
   * @returns {object} A new Iterator object.
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
   */
  size: {
    get: function size() {
      if (!this || !_isArray(this['[[key]]']) || this['[[kind]]'] !== 'set') {
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
   * @returns {object} A new Iterator object.
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
 * @returns {object} A new Iterator object.
 */


_defineProperty(Set.prototype, SYMBOL_ITERATOR, {
  value: setValuesIterator
});
//# sourceMappingURL=Set.js.map