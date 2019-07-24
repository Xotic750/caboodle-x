/**
 * @file Enumerated type library.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isVarName
 */

import _Function from './.internal/_Function';
import attempt from './attempt';
import isStringType from './isStringType';
import _trim from './.internal/_trim';

const attemptee = function _attemptee(string) {
  _Function(string, `var ${string}`);
};

export default function isVarName(string) {
  if (!isStringType(string) || _trim(string) !== string) {
    return false;
  }

  return !attempt(attemptee, string).threw;
}
