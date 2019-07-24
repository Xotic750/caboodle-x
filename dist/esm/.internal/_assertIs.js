/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _assertIs
 */
import _call from './_call';
import toStr from '../toString';
import isNil from '../isNil';

var toMessage = function _toMessage(message, fallback) {
  return isNil(message) ? fallback : toStr(message);
};

export default function _assertIs(predicate, defaultMessage) {
  var defMsg = toMessage(defaultMessage, 'Not a valid value');
  return function assertIsBound(value, customMessage) {
    /* eslint-disable-next-line babel/no-invalid-this */
    if (_call(predicate, this, value)) {
      return value;
    }

    throw new TypeError(toMessage(customMessage, defMsg));
  };
}
//# sourceMappingURL=_assertIs.js.map