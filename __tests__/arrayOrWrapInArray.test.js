import 'babel-polyfill';
import {arrayOrWrapInArray} from '../dist/caboodle-x';
import objects from './helpers/objects';
import primitives from './helpers/primitives';

describe('arrayOrWrapInArray', () => {
  it('No arguments', () => {
    expect(arrayOrWrapInArray()).toEqual([]);
  });

  describe('Non-arrays', () => {
    describe('Primitives', () => {
      it('Single argument', () => {
        const expected = primitives.map(primitive => [primitive]);
        const actual = primitives.map(primitive => arrayOrWrapInArray(primitive));

        expect(actual).toEqual(expected);
      });

      it('Multiple arguments', () => {
        const expected = primitives.map(primitive => [primitive]);
        const actual = primitives.map(primitive => arrayOrWrapInArray(primitive, objects));

        expect(actual).toEqual(expected);
      });
    });

    describe('Objects', () => {
      it('Single argument', () => {
        const expected = objects.map(object => (Array.isArray(object) ? object : [object]));
        const actual = objects.map(object => arrayOrWrapInArray(object));

        expect(actual).toEqual(expected);
      });

      it('Multiple arguments', () => {
        const expected = objects.map(object => (Array.isArray(object) ? object : [object]));
        const actual = objects.map(object => arrayOrWrapInArray(object, primitives));

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('Arrays', () => {
    it('Single argument', () => {
      expect(arrayOrWrapInArray(objects)).toBe(objects);
      expect(arrayOrWrapInArray(primitives)).toBe(primitives);
    });

    it('Multiple arguments', () => {
      expect(arrayOrWrapInArray(objects, primitives)).toBe(objects);
      expect(arrayOrWrapInArray(primitives, objects)).toBe(primitives);
    });
  });
});
