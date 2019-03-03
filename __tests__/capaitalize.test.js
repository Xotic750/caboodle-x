import {capitalize} from '../index';
import objects from './helpers/objects';
import primitives from './helpers/primitives';

const cap = (primitive) => {
  const str = String(primitive);

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

describe('capitalize', () => {
  it('no arguments', () => {
    expect(capitalize()).toBe('Undefined');
  });

  describe('primitives', () => {
    it('single argument', () => {
      const expected = primitives.map(cap);
      const actual = primitives.map((primitive) => capitalize(primitive));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const expected = primitives.map(cap);
      const actual = primitives.map((primitive) => capitalize(primitive, primitive));

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('objects', () => {
    it('single argument', () => {
      const expected = objects.map(cap);
      const actual = objects.map((object) => capitalize(object));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const expected = objects.map(cap);
      const actual = objects.map((object) => capitalize(object, object));

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
      'Hpa9d uojdezg#5el9zvb4',
      'Åzdwvgv84l5ajx!0fy12c9',
      'Jdc8nydcd_fhosz€?atgud',
      'P8i0_eduulyup_bml4hak',
      'Vkod0-n5p0y0yigtzd+uoe',
      'Gozej txl8jdec xbuxfrr',
      'Coz:xdtn§shxoqpojfzjnn',
      'Stspmyci;joyrzpqloäae6',
      '∞dxlrjyzaxe,mjsjj8thq5',
      'Kevekbdhb47.qzoz[9l=0v',
    ]);

    it('single argument', () => {
      const actual = sources.map((source) => capitalize(source));

      expect(actual).toStrictEqual(expected);
    });

    it('multiple arguments', () => {
      const actual = sources.map((source) => capitalize(source, source));

      expect(actual).toStrictEqual(expected);
    });
  });
});
