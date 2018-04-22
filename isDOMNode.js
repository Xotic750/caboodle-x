/**
 * @file Tests if a value is a DOM Node.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDOMNode
 */

import attempt from './attempt';
import _methodize from './.internal/_methodize';
import isBooleanType from './isBooleanType';
import isNumberType from './isNumberType';
import _Boolean from './.internal/_Boolean';
import _document from './.internal/_document';

let documentInheritsNode = false;
let element;
let hasChildNodes;
/* istanbul ignore next */
if (_document) {
  const result = attempt(function _attemptee() {
    element = _document.createElement('div');
    hasChildNodes = _methodize(_document.hasChildNodes);
    documentInheritsNode = isBooleanType(hasChildNodes(element));
  });

  if (result.threw) {
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
    if (value === _document) {
      return true;
    }

    const result1 = attempt(function _attemptee() {
      return isBooleanType(hasChildNodes(value));
    });

    if (result1.value === true) {
      return true;
    }

    /* istanbul ignore if */
    if (!documentInheritsNode) {
      const result2 = attempt(function _attemptee() {
        return _Boolean(tryAppendChild(value));
      });

      if (result2.value === true) {
        return true;
      }
    }
  }

  return false;
}
