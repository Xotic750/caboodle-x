import {stubTrue} from 'src/utils';
import {
  assertIs,
  isCamecaseIdentifier,
  isNumberType,
  isReservedIdentifier,
  isSymbolType,
  nilifyIs,
} from 'src/validators';
import {
  assertIsFunctionType,
  assertIsObjectLikeNotArray,
  assertIsPropertyKey,
} from 'src/asserters';

export default function defineDataProperty(...args) {
  const [
    target,
    prop,
    descriptor = {},
  ] = args;

  assertIsObjectLikeNotArray(target);
  assertIsPropertyKey(prop);

  if (!isCamecaseIdentifier(prop) || isReservedIdentifier(prop)) {
    if (process.env.NODE_ENV !== 'production') {
      if (prop === '') {
        console.warn(`Empty prop argument: "${prop}".`);
      } else if (isNumberType(prop)) {
        console.warn(`Number prop argument: "${prop}".`);
      } else if (isSymbolType(prop)) {
        console.warn(`Symbol prop argument: "${prop}".`);
      } else if (isReservedIdentifier(prop)) {
        console.warn(`Reserved prop argument: "${prop}".`);
      } else {
        console.warn(`Prefer camelcase prop argument: "${prop}".`);
      }
    }
  }

  const {
    configurable = true,
    enumerable = true,
    nilable = false,
    validator = stubTrue,
    value: initialValue,
  } = descriptor;

  assertIsFunctionType(validator);

  const isValidInitialValue = nilable ? nilifyIs(validator) : validator;

  assertIs(isValidInitialValue, `Not a valid initial value for "${prop}".`)(initialValue);

  const isValidValue = assertIs(validator, `Not a valid value for "${prop}".`);

  let currentValue = initialValue;

  return Object.defineProperty(target, prop, {
    configurable,
    enumerable,
    get() {
      return currentValue;
    },
    set(value) {
      currentValue = isValidValue(value);

      return currentValue;
    },
  });
}
