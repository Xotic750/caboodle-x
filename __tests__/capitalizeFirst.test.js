import {capitalizeFirst} from 'src/caboodle-x';

import objects from './helpers/objects';
import primitives from './helpers/primitives';

const cap = (primitive) => {
  const str = String(primitive);

  return str.charAt(0).toUpperCase() + str.slice(1);
};

describe('capitalizeFirst', () => {
  it('no arguments', () => {
    expect(capitalizeFirst()).toBe('Undefined');
  });

  describe('primitives', () => {
    it('single argument', () => {
      const expected = primitives.map(cap);
      const actual = primitives.map((primitive) => capitalizeFirst(primitive));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const expected = primitives.map(cap);

      const actual = primitives.map((primitive) => capitalizeFirst(primitive, primitive));

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('objects', () => {
    it('single argument', () => {
      const expected = objects.map(cap);
      const actual = objects.map((object) => capitalizeFirst(object));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const expected = objects.map(cap);
      const actual = objects.map((object) => capitalizeFirst(object, object));

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('strings', () => {
    const sources = Object.freeze([
      'hpA9d UOjDeZG#5EL9zvb4',
      'åzdWVgv84L5ajX!0Fy12C9',
      'Jdc8NYdCD_fHOsZ€?aTguD',
      'p8i0_EDUULyUp_bmL4hAK',
      'vKOD0-N5p0y0YIGTzD+uOE',
      'GozeJ TXL8JdeC XbuxFrR',
      'COz:xdtN§SHxOqPOjFZJNn',
      'StSPMYCI;JOYRZpQLoäAE6',
      '∞dXlrjyZaXE,mJsJj8ThQ5',
      'kEvEKBdhb47.QZOz[9l=0v',
    ]);

    const expected = Object.freeze([
      'HpA9d UOjDeZG#5EL9zvb4',
      'ÅzdWVgv84L5ajX!0Fy12C9',
      'Jdc8NYdCD_fHOsZ€?aTguD',
      'P8i0_EDUULyUp_bmL4hAK',
      'VKOD0-N5p0y0YIGTzD+uOE',
      'GozeJ TXL8JdeC XbuxFrR',
      'COz:xdtN§SHxOqPOjFZJNn',
      'StSPMYCI;JOYRZpQLoäAE6',
      '∞dXlrjyZaXE,mJsJj8ThQ5',
      'KEvEKBdhb47.QZOz[9l=0v',
    ]);

    it('single argument', () => {
      const actual = sources.map((source) => capitalizeFirst(source));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const actual = sources.map((source) => capitalizeFirst(source, source));

      expect(actual).toStrictEqual(expected);
    });
  });
});
