import {
  assertIs,
  isFunctionType,
  isObjectLikeNotArray,
  isPropertyKey,
} from 'src/validators';

export const assertIsObjectLikeNotArray = assertIs(isObjectLikeNotArray, 'Not a valid object.');

export const assertIsPropertyKey = assertIs(isPropertyKey, 'Not a valid property key.');

export const assertIsFunctionType = assertIs(isFunctionType, 'Not a function.');
