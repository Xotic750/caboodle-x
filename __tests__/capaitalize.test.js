import {capitalize} from '../dist/caboodle-x';
import objects from './helpers/objects';
import primitives from './helpers/primitives';

const cap = primitive => {
  const str = String(primitive);

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

describe('capitalize', () => {
  it('No arguments', () => {
    expect(capitalize()).toBe('Undefined');
  });

  describe('Primitives', () => {
    it('Single argument', () => {
      const expected = primitives.map(cap);
      const actual = primitives.map(primitive => capitalize(primitive));

      expect(actual).toEqual(expected);
    });

    it('Multiple arguments', () => {
      const expected = primitives.map(cap);
      const actual = primitives.map(primitive =>
        capitalize(primitive, primitive),
      );

      expect(actual).toEqual(expected);
    });
  });

  describe('Objects', () => {
    it('Single argument', () => {
      const expected = objects.map(cap);
      const actual = objects.map(object => capitalize(object));

      expect(actual).toEqual(expected);
    });

    it('Multiple arguments', () => {
      const expected = objects.map(cap);
      const actual = objects.map(object => capitalize(object, object));

      expect(actual).toEqual(expected);
    });
  });

  describe('Strings', () => {
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

    it('Single argument', () => {
      const actual = sources.map(source => capitalize(source));

      expect(actual).toEqual(expected);
    });

    it('Multiple arguments', () => {
      const actual = sources.map(source => capitalize(source, source));

      expect(actual).toEqual(expected);
    });
  });
});
