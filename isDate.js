/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDate
 */

import attempt from './attempt';
import isInteger from './isInteger';
import isObjectLike from './isObjectLike';
import toStringTag from './toStringTag';
import _hasToStringTag from './.internal/_hasToStringTag';
import _getDay from './.internal/_getDay';

const tryDate = function _tryDate(value) {
  const result = attempt(function _attemptee() {
    const dayNumber = _getDay(value);

    return isInteger(dayNumber) && dayNumber >= 0 && dayNumber <= 6;
  });

  return result.value === true;
};

const DATE_TAG = '[object Date]';

export default function isDate(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  /* istanbul ignore next */
  return _hasToStringTag ? tryDate(value) : toStringTag(value) === DATE_TAG;
}
