import {getFunctionName} from '../dist/caboodle-x';

const getFat = function getFatFunc() {
  try {
    return new Function('return () => {return this;};')();
  } catch (ignore) {}
  return false;
};

const ifSupportsFatit = getFat() ? it : xit;

const getGF = function getGeneratoFunc() {
  try {
    return new Function('return function* idMaker(){};')();
  } catch (ignore) {}
  return false;
};

const ifSupportsGFit = getGF() ? it : xit;

const getC = function getClassFunc() {
  try {
    return new Function('"use strict"; return class My {};')();
  } catch (ignore) {}
  return false;
};

const ifSupportsCit = getC() ? it : xit;

const getAF = function getAsyncFunc() {
  try {
    return new Function('return async function wait() {}')();
  } catch (ignore) {}
  return false;
};

/* istanbul ignore next */
const ifSupportsAFit = getAF() ? it : xit;

describe('Basic tests', () => {
  it('should return `undefined` for everything', () => {
    const values = [
      true,
      'abc',
      1,
      null,
      undefined,
      new Date(),
      [],
      /r/,
      {name: 'blah'},
    ];

    const cb = function() {};
    const expected = values.map(cb);
    const actual = values.map(getFunctionName);
    expect(actual).toEqual(expected);
  });

  it('should return a correct string for everything', () => {
    const values = [
      Object,
      String,
      Boolean,
      Number,
      Array,
      Function,
      function() {},
      function test() {},
      new Function(),
      function test1() {},
      function test2() {},
      function test3() {},
      function test4() {},
      function /* foo */ test5() {},
      function /* foo */ test6() {},
      function /* foo */ test7(/* baz */) {},
      /* fum */ function /* foo */ // blah
      test8(/* baz */) {},
    ];

    const expected = [
      'Object',
      'String',
      'Boolean',
      'Number',
      'Array',
      'Function',
      '',
      'test',
      '',
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
      'test7',
      'test8',
    ];

    const actual = values.map(getFunctionName);
    expect(actual).toEqual(expected);
  });

  ifSupportsFatit('should return a correct string for everything', () => {
    const fat = getFat();
    expect(getFunctionName(fat)).toBe('');
  });

  ifSupportsGFit('should return a correct string for everything', () => {
    const gen = getGF();
    expect(getFunctionName(gen)).toBe('idMaker');
  });

  ifSupportsAFit('should return a correct string for everything', () => {
    const classes = getAF();
    expect(getFunctionName(classes)).toBe('wait');
  });

  ifSupportsCit('should return a correct string for everything', () => {
    const classes = getC();
    expect(getFunctionName(classes)).toBe('My');
  });
});
