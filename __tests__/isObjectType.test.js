import objects from './helpers/objects';
import truthy from './helpers/truthy';
import numbers from './helpers/numbers';
import strings from './helpers/strings';

import {isObjectType} from '../dist/caboodle-x';

describe('isObjectType', () => {
  const primitives = Object.freeze([
    ...truthy,
    ...numbers,
    ...strings,
  ]);

  it('should be a function', () => {
    expect(isObjectType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    const expected = objects.map(() => true);
    const actual = objects.map(isObjectType);

    expect(actual).toEqual(expected);
    expect(isObjectType(null)).toEqual(true);
  });

  it('should return false', () => {
    const expected = primitives.map(() => false);
    const actual = primitives.map(isObjectType);

    expect(actual).toEqual(expected);
    expect(isObjectType(undefined)).toEqual(false);
  });
});
