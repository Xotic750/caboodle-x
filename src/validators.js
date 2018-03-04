import {uniq} from 'src/utils';
import es5IdentifierRx from 'src/es5IdentifierRx';
import es6IdentifierRx from 'src/es6IdentifierRx';
import es5ReservedNamesRx from 'src/es5ReservedNamesRx';
import es6ReservedNamesRx from 'src/es6ReservedNamesRx';

export const isBooleanType = function isBooleanType(value) {
  return typeof value === 'boolean';
};

export const isCountingNumber = function isCountingNumber(value) {
  return Number.isSafeInteger(value) && value > 0;
};

export const isFunctionType = function isFunctionType(value) {
  return typeof value === 'function';
};

export const isNull = function isNull(value) {
  return value === null;
};

export const isNumberType = function isNumberType(value) {
  return typeof value === 'number';
};

export const isObjectType = function isObjectType(value) {
  return typeof value === 'object';
};

export const isObjectLike = function isObjectLike(value) {
  return !isNull(value) && isObjectType(value);
};

export const isObject = function isObject(value) {
  return !isNull(value) && (isObjectType(value) || isFunctionType(value));
};

export const isStringType = function isStringType(value) {
  return typeof value === 'string';
};

export const isPopulatedString = function isPopulatedString(value) {
  return isStringType(value) && value.trim().length > 0;
};

export const isStringTypeOrNumberType = function isStringTypeOrNumberType(value) {
  return isStringType(value) || isNumberType(value);
};

export const isSymbolType = function isSymbolType(value) {
  return typeof value === 'symbol';
};

export const isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

export const isNil = function isNil(value) {
  return isUndefined(value) || isNull(value);
};

export const isUniq = function isUniq(array) {
  return Array.isArray(array) && uniq(array).length === array.length;
};

export const isSpaced = function isSpaced(value) {
  return isStringType(value) && value.includes(' ');
};

export const isValidHtmlId = function isValidHtmlId(value) {
  return isStringType(value) && value.length > 0 && !isSpaced(value);
};

export const isValidStringOrNumber = function isValidStringOrNumber(value) {
  return isNumberType(value) ? Number.isSafeInteger(value) : isStringType(value);
};

export const isWholeNumber = function isWholeNumber(value) {
  return Number.isSafeInteger(value) && value >= 0;
};

export const isArrayLike = function isArrayLike(value) {
  return !isNull(value) && !isFunctionType(value) && isWholeNumber(value.length);
};

export const isArrayLikeObject = function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
};

export const isObjectLikeNotArray = function isObjectLikeNotArray(value) {
  return isObjectLike(value) && !Array.isArray(value);
};

export const isUnderscored = function isUnderscored(value) {
  return isStringType(value) && value.includes('_');
};

export const isValidEs5Identifier = function isValidEs5Identifier(value) {
  return isStringType(value) && es5IdentifierRx.test(value);
};

export const isReservedEs5Identifier = function isReservedEs5Identifier(value) {
  return isStringType(value) && es5ReservedNamesRx.test(value);
};

export const isValidEs6Identifier = function isValidEs6Identifier(value) {
  return isStringType(value) && es6IdentifierRx.test(value);
};

export const isReservedEs6Identifier = function isReservedEs6Identifier(value) {
  return isStringType(value) && es6ReservedNamesRx.test(value);
};

export const isValidIdentifier = function isValidIdentifier(value) {
  return isStringType(value) && isValidEs5Identifier(value) && isValidEs6Identifier(value);
};

export const isReservedIdentifier = function isReservedIdentifier(value) {
  return isStringType(value) && isReservedEs5Identifier(value) && isReservedEs6Identifier(value);
};

export const isConstantIdentifier = function isConstantIdentifier(value) {
  return isValidIdentifier(value) && value === value.toUpperCase();
};

export const isCamecaseIdentifier = function isCamecaseIdentifier(value) {
  return isConstantIdentifier(value) || (isValidIdentifier(value) && !isUnderscored(value));
};

export const isPropertyKey = function isPropertyKey(value) {
  return isStringTypeOrNumberType(value) || isSymbolType(value);
};

export const assertIs = function assertIs(...args) {
  const [isFn, message] = args;

  if (!isFunctionType(isFn)) {
    throw new TypeError('isFn argument must be a function.');
  }

  const msg = args.length > 1 && isStringType(message) ? message : 'Not a valid value.';

  return function assertBound(value) {
    if (!isFn(value)) {
      throw new TypeError(msg);
    }

    return value;
  };
};

export const nilifyIs = function nilifyIs(fn) {
  assertIs(fn, isFunctionType);

  return function nulifiedBound(...args) {
    const [value] = args;

    return isNil(value) || fn(...args);
  };
};
