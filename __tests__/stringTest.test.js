import {stringTest} from '../dist/caboodle-x';

describe('stringTest', () => {
  it('is a function', () => {
    expect(typeof stringTest).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      stringTest();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      stringTest(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      stringTest(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw when search element is null or undefined', () => {
    expect(() => {
      stringTest('abc');
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      stringTest('abc', undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      stringTest('abc', null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should be true for correct string searches', () => {
    expect(stringTest('test', 'es')).toBe(true);
    expect(stringTest('abc', 'a')).toBe(true);
    expect(stringTest('abc', 'b')).toBe(true);
    expect(stringTest('abc', 'abc')).toBe(true);
    expect(stringTest('abc', 'bc')).toBe(true);
  });

  it('should be false for incorrect string searches', () => {
    expect(stringTest('test', '1290')).toBe(false);
    expect(stringTest('abc', 'd')).toBe(false);
    expect(stringTest('abc', 'abcd')).toBe(false);
    expect(stringTest('abc', 'ac')).toBe(false);
  });

  it('should be true for correct regex searches', () => {
    expect(stringTest('test', /es/)).toBe(true);
    expect(stringTest('abc', /a/)).toBe(true);
    expect(stringTest('abc', /b/)).toBe(true);
    expect(stringTest('abc', /a.c/)).toBe(true);
    expect(stringTest('abc', /bc/)).toBe(true);
  });

  it('should be false for incorrect regex searches', () => {
    expect(stringTest('test', /1290/)).toBe(false);
    expect(stringTest('abc', /d/)).toBe(false);
    expect(stringTest('abc', /ab.d/)).toBe(false);
    expect(stringTest('abc', /ac/)).toBe(false);
  });
});
