import 'babel-polyfill';
import {callFunctionOrIdentity} from '../dist/caboodle-x';
import objects from './helpers/objects';
import primitives from './helpers/primitives';

describe('callFunctionOrIdentity', () => {
  it('No arguments', () => {
    expect(callFunctionOrIdentity()).toBe(undefined);
  });

  describe('Non-arrays', () => {
    describe('Primitives', () => {
      it('Single argument', () => {
        const actual = primitives.map(primitive => callFunctionOrIdentity(primitive));

        expect(actual).toEqual(primitives);
      });

      it('Two arguments', () => {
        const actual = primitives.map(primitive => callFunctionOrIdentity(primitive, objects));

        expect(actual).toEqual(primitives);
      });

      it('Three arguments', () => {
        const actual = primitives.map(primitive => callFunctionOrIdentity(primitive, objects, {}));

        expect(actual).toEqual(primitives);
      });
    });

    describe('Objects', () => {
      it('Single argument', () => {
        const actual = objects.map(object => callFunctionOrIdentity(object));

        expect(actual).toEqual(objects);
      });

      it('Two arguments', () => {
        const actual = objects.map(object => callFunctionOrIdentity(object, primitives));

        expect(actual).toEqual(objects);
      });

      it('Three arguments', () => {
        const actual = objects.map(object => callFunctionOrIdentity(object, primitives, {}));

        expect(actual).toEqual(objects);
      });
    });
  });

  describe('Arrays', () => {
    it('Single argument', () => {
      expect(callFunctionOrIdentity(objects)).toBe(objects);
      expect(callFunctionOrIdentity(primitives)).toBe(primitives);
    });

    it('Two arguments', () => {
      expect(callFunctionOrIdentity(objects, primitives)).toBe(objects);
      expect(callFunctionOrIdentity(primitives, objects)).toBe(primitives);
    });

    it('Three arguments', () => {
      expect(callFunctionOrIdentity(objects, primitives, {})).toBe(objects);
      expect(callFunctionOrIdentity(primitives, objects, {})).toBe(primitives);
    });
  });

  describe('Functions', () => {
    const hej = 'hej';
    const hello = 'hello';
    const hi = 'hi';
    const context = {};

    it('Single argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(undefined);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(actual).toBe(hi);
    });

    it('With non-arrayLike args argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, 1);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(undefined);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(mockFn.mock.calls[0][0]).toBe(undefined);
      expect(actual).toBe(hi);
    });

    it('With non-arrayLike args argument and context', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, true, context);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(context);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(mockFn.mock.calls[0][0]).toBe(undefined);
      expect(actual).toBe(hi);
    });

    it('With array args argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, [hej, hello]);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(undefined);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(2);
      expect(mockFn.mock.calls[0][0]).toBe(hej);
      expect(mockFn.mock.calls[0][1]).toBe(hello);
      expect(actual).toBe(hi);
    });

    it('With arrayLike args argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, hej);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(undefined);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(hej.length);
      expect(mockFn.mock.calls[0]).toEqual(hej.split(''));
      expect(actual).toBe(hi);
    });

    it('With array args argument and context', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, [hej, hello], context);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(context);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(2);
      expect(mockFn.mock.calls[0][0]).toBe(hej);
      expect(mockFn.mock.calls[0][1]).toBe(hello);
      expect(actual).toBe(hi);
    });

    it('With arrayLike args argument and context', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, hej, context);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(context);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(hej.length);
      expect(mockFn.mock.calls[0]).toEqual(hej.split(''));
      expect(actual).toBe(hi);
    });
  });
});
