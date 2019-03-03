import {callFunctionOrIdentity} from '../index';
import objects from './helpers/objects';
import primitives from './helpers/primitives';
import noop from './helpers/noop';

describe('callFunctionOrIdentity', () => {
  it('no arguments', () => {
    expect(callFunctionOrIdentity()).toBeUndefined();
  });

  describe('non-arrays', () => {
    describe('primitives', () => {
      it('single argument', () => {
        const actual = primitives.map((primitive) => callFunctionOrIdentity(primitive));

        expect(actual).toStrictEqual(primitives);
      });

      it('two arguments', () => {
        const actual = primitives.map((primitive) => callFunctionOrIdentity(primitive, objects));

        expect(actual).toStrictEqual(primitives);
      });

      it('three arguments', () => {
        const actual = primitives.map((primitive) => callFunctionOrIdentity(primitive, objects, {}));

        expect(actual).toStrictEqual(primitives);
      });
    });

    describe('objects', () => {
      it('single argument', () => {
        const actual = objects.map((object) => callFunctionOrIdentity(object));

        expect(actual).toStrictEqual(objects);
      });

      it('two arguments', () => {
        const actual = objects.map((object) => callFunctionOrIdentity(object, primitives));

        expect(actual).toStrictEqual(objects);
      });

      it('three arguments', () => {
        const actual = objects.map((object) => callFunctionOrIdentity(object, primitives, {}));

        expect(actual).toStrictEqual(objects);
      });
    });
  });

  describe('arrays', () => {
    it('single argument', () => {
      expect(callFunctionOrIdentity(objects)).toBe(objects);
      expect(callFunctionOrIdentity(primitives)).toBe(primitives);
    });

    it('two arguments', () => {
      expect(callFunctionOrIdentity(objects, primitives)).toBe(objects);
      expect(callFunctionOrIdentity(primitives, objects)).toBe(primitives);
    });

    it('three arguments', () => {
      expect(callFunctionOrIdentity(objects, primitives, {})).toBe(objects);
      expect(callFunctionOrIdentity(primitives, objects, {})).toBe(primitives);
    });
  });

  describe('functions', () => {
    const hej = 'hej';
    const hello = 'hello';
    const hi = 'hi';
    const context = {};

    it('single argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(actual).toBe(hi);
    });

    it('with undefined', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, undefined);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(actual).toBe(hi);
    });

    it('with null', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, null);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(0);
      expect(actual).toBe(hi);
    });

    it('with non-arrayLike args argument', () => {
      expect(() => {
        callFunctionOrIdentity(noop, 1);
      }).toThrowErrorMatchingSnapshot();
    });

    it('with non-arrayLike args argument and context', () => {
      expect(() => {
        callFunctionOrIdentity(noop, true, context);
      }).toThrowErrorMatchingSnapshot();
    });

    it('with array args argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, [hej, hello]);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(2);
      expect(mockFn.mock.calls[0][0]).toBe(hej);
      expect(mockFn.mock.calls[0][1]).toBe(hello);
      expect(actual).toBe(hi);
    });

    it('with arrayLike args argument', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, Object(hej));

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(hej.length);
      expect(JSON.parse(JSON.stringify(mockFn.mock.calls[0]))).toStrictEqual(hej.split(''));
      expect(actual).toBe(hi);
    });

    it('with array args argument and context', () => {
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

    it('with arrayLike args argument and context', () => {
      const mockFn = jest.fn().mockReturnValue(hi);
      const actual = callFunctionOrIdentity(mockFn, Object(hej), context);

      expect(mockFn.mock.instances).toHaveLength(1);
      expect(mockFn.mock.instances[0]).toBe(context);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.calls[0]).toHaveLength(hej.length);
      expect(JSON.parse(JSON.stringify(mockFn.mock.calls[0]))).toStrictEqual(hej.split(''));
      expect(actual).toBe(hi);
    });
  });
});
