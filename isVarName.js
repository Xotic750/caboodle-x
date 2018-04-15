/**
 * @file Enumerated type library.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isVarName
 */

import isStringType from './isStringType';
import _trim from './.internal/_trim';

export default function isVarName(str) {
  if (!isStringType(str) || _trim(str) !== str) {
    return false;
  }

  try {
    // eslint-disable-next-line no-new-func
    Function(str, `var ${str}`);
  } catch (e) {
    return false;
  }

  return true;
}
