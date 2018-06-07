/**
 * @file Tests if a value is a DOM Node.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDOMNode
 */

import _methodize from './.internal/_methodize';
import isBooleanType from './isBooleanType';
import isNumberType from './isNumberType';
import _Boolean from './.internal/_Boolean';

/* istanbul ignore next */
const doc = typeof document !== 'undefined' && document;
let documentInheritsNode = false;
let element;
let hasChildNodes;
/* istanbul ignore next */
if (doc) {
  try {
    element = doc.createElement('div');
    hasChildNodes = _methodize(doc.hasChildNodes);
    documentInheritsNode = isBooleanType(hasChildNodes(element));
  } catch (ignore) {
    hasChildNodes = null;
    documentInheritsNode = false;
  }
}

let tryAppendChild;
/* istanbul ignore if */
if (element && !documentInheritsNode) {
  hasChildNodes = _methodize(element.hasChildNodes);
  const cloneNode = _methodize(element.cloneNode);
  const appendChild = _methodize(element.appendChild);
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
export default function isDOMNode(value) {
  if (hasChildNodes && value && isNumberType(value.nodeType)) {
    if (value === doc) {
      return true;
    }

    try {
      return isBooleanType(hasChildNodes(value));
    } catch (ignore) {
      /* ignore */
    }

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
