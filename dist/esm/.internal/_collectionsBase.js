/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _collectionsBase
 */
import assertIsFunction from '../assertIsFunction';
import assertIsObjectLike from '../assertIsObjectLike';
import IdGenerator from '../BigCounter';
import isArrayLike from '../isArrayLike';
import isPrimitive from '../isPrimitive';
import isStringType from '../isStringType';
import isSurrogatePair from '../isSurrogatePair';
import _any from './_any';
import _charAt from './_charAt';
import _defineProperties from './_defineProperties';
import _defineProperty from './_defineProperty';
import _nth from './_nth';
import _getSymbolIterator from './_getSymbolIterator';
import _hasOwnProperty from './_hasOwnProperty';
import isFunction from '../isFunction';
import _occurs from './_occurs';
import _push from './_push';
import _splice from './_splice';
/**
 * If an iterable object is passed, all of its elements will be added to the
 * new Map/Set, null is treated as undefined.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @param {*} iterable - Value to parsed.
 */

export function parseIterable(kind, context, iterable) {
  if (kind === 'map') {
    _defineProperty(context, '[[value]]', {
      value: []
    });
  }

  _defineProperties(context, {
    '[[changed]]': {
      value: false
    },
    '[[id]]': {
      value: new IdGenerator()
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

  var property = _getSymbolIterator(iterable);

  if (iterable && isFunction(iterable[property])) {
    var iterator = iterable[property]();
    var next = iterator.next();

    if (kind === 'map') {
      if (!isArrayLike(next.value) || next.value.length < 2) {
        throw new TypeError("Iterator value ".concat(next.value, " is not an entry object"));
      }
    }

    while (!next.done) {
      var key = kind === 'map' ? next.value[0] : next.value;

      var occurred = _occurs(assertIsObjectLike(context)['[[key]]']);

      if (!occurred.includes) {
        if (kind === 'map') {
          _push(context['[[value]]'], next.value[1]);
        }

        _push(context['[[key]]'], key);

        _push(context['[[order]]'], context['[[id]]'].get());

        context['[[id]]'].next();
      } else if (kind === 'map') {
        // eslint-disable-next-line no-param-reassign
        context['[[value]]'][occurred.index] = _nth(next.value, 1);
      }

      next = iterator.next();
    }
  } else if (isStringType(iterable)) {
    if (kind === 'map') {
      throw new TypeError("Iterator value ".concat(_charAt(iterable, 0), " is not an entry object"));
    }

    var _next = 0;

    while (_next < iterable.length) {
      var char1 = _charAt(iterable, _next);

      var char2 = _charAt(iterable, _next + 1);

      var _key = void 0;

      if (isSurrogatePair(char1, char2)) {
        _key = char1 + char2;
        _next += 1;
      } else {
        _key = char1;
      }

      if (!_occurs(assertIsObjectLike(context)['[[key]]'], _key).includes) {
        _push(context['[[key]]'], _key);

        _push(context['[[order]]'], context['[[id]]'].get());

        context['[[id]]'].next();
      }

      _next += 1;
    }
  } else if (isArrayLike(iterable)) {
    var _next2 = 0;

    while (_next2 < iterable.length) {
      if (kind === 'map' && isPrimitive(iterable[_next2])) {
        throw new TypeError("Iterator value ".concat(_next2.value, " is not an entry object"));
      }

      var _key2 = kind === 'map' ? iterable[_next2][0] : iterable[_next2];

      var _occurred = _occurs(assertIsObjectLike(context)['[[key]]'], _key2);

      if (!_occurred.includes) {
        if (kind === 'map') {
          _push(context['[[value]]'], iterable[_next2][1]);
        }

        _push(context['[[key]]'], _key2);

        _push(context['[[order]]'], context['[[id]]'].get());

        context['[[id]]'].next();
      } else if (kind === 'map') {
        // eslint-disable-next-line no-param-reassign
        context['[[value]]'][_occurred.index] = _nth(iterable[_next2], 1);
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

export function forEach(kind, context, callback, thisArg) {
  assertIsObjectLike(context);
  assertIsFunction(callback);
  var pointers = {
    index: 0,
    order: context['[[order]]'][0]
  }; // eslint-disable-next-line no-param-reassign

  context['[[change]]'] = false;
  var keyLength = context['[[key]]'].length;

  while (pointers.index < keyLength) {
    if (_hasOwnProperty(context['[[key]]'], pointers.index)) {
      var key = context['[[key]]'][pointers.index];
      var value = kind === 'map' ? context['[[value]]'][pointers.index] : key;
      callback.call(thisArg, value, key, context);
    }

    if (context['[[change]]']) {
      keyLength = context['[[key]]'].length;

      _any(context['[[order]]'], function _predicate(id, count) {
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

export function has(key) {
  return _occurs(assertIsObjectLike(this)['[[key]]'], key).includes;
}
/**
 * The base clear method removes all elements from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either 'map' or 'set'.
 * @param {Object} context - The Map/Set object.
 * @returns {Object} The Map/Set object.
 */

export function clear(kind, context) {
  assertIsObjectLike(context);
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

export function de1ete(kind, context, key) {
  var occurred = _occurs(assertIsObjectLike(context)['[[key]]'], key);

  if (occurred.includes) {
    if (kind === 'map') {
      _splice(context['[[value]]'], occurred.index, 1);
    }

    _splice(context['[[key]]'], occurred.index, 1);

    _splice(context['[[order]]'], occurred.index, 1); // eslint-disable-next-line no-param-reassign


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

export function addSet(kind, context, key, value) {
  var occurred = _occurs(assertIsObjectLike(context)['[[key]]'], key);

  if (occurred.includes) {
    if (kind === 'map') {
      // eslint-disable-next-line no-param-reassign
      context['[[value]]'][occurred.index] = value;
    }
  } else {
    if (kind === 'map') {
      _push(context['[[value]]'], value);
    }

    _push(context['[[key]]'], key);

    _push(context['[[order]]'], context['[[id]]'].get());

    context['[[id]]'].next(); // eslint-disable-next-line no-param-reassign

    context['[[change]]'] = true;
  }

  return context;
}
//# sourceMappingURL=_collectionsBase.js.map