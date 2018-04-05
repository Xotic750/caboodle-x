import {isFunction} from '../dist/caboodle-x';

let hasFat;
try {
  // eslint-disable-next-line no-eval
  eval('(x, y) => {return this;};');
  hasFat = true;
} catch (ignore) {}
const itHasFat = hasFat ? it : xit;

let hasGen;
try {
  // eslint-disable-next-line no-eval
  eval('function* idMaker(x, y){};');
  hasGen = true;
} catch (ignore) {}
const itHasGen = hasGen ? it : xit;

let hasAsync;
try {
  // eslint-disable-next-line no-eval
  eval('async function idAsync(x, y){};');
  hasAsync = true;
} catch (ignore) {}
const itHasAsync = hasAsync ? it : xit;

let hasClass;
try {
  // eslint-disable-next-line no-eval
  eval('"use strict"; class My {};');
  hasClass = true;
} catch (ignore) {}
const itHasClass = hasClass ? it : xit;

describe('Basic tests', () => {
  it('should return `false` for everything', () => {
    const values = [true, 'abc', 1, null, undefined, new Date(), [], /r/];
    const expected = values.map(() => false);
    const actual = values.map(isFunction);
    expect(actual).toEqual(expected);
  });

  it('should return `true` for everything', () => {
    const values = [
      Object,
      String,
      Boolean,
      Array,
      Function,
      function () {},
      function test(a) {}, // eslint-disable-line no-unused-vars
      new Function(), // eslint-disable-line no-new-func
      function test1(a, b) {}, // eslint-disable-line no-unused-vars
      function test2(a /* , foo */) {}, // eslint-disable-line no-unused-vars
      function test3(a /* , foo */, b) {}, // eslint-disable-line no-unused-vars
      function test4(a /* , foo */, b) {}, // eslint-disable-line no-unused-vars
      function /* foo */ test5(a /* , foo */, b) {}, // eslint-disable-line no-unused-vars
      function /* foo */ test6(a /* , foo */, b) {}, // eslint-disable-line no-unused-vars
      function /* foo */ test7(/* baz */) {},
      /* fum */ function /* foo */ // blah
      // eslint-disable-next-line no-unused-vars
      test8(/* baz */ a) {},
    ];
    const expected = values.map(() => true);
    const actual = values.map(isFunction);
    expect(actual).toEqual(expected);
  });

  itHasFat('should return `true` for arrow functions', () => {
    // eslint-disable-next-line no-new-func
    const fat = new Function('return (x, y) => {return this;};')();
    expect(isFunction(fat)).toBe(true);
  });

  itHasGen('should return `true` for generator functions', () => {
    // eslint-disable-next-line no-new-func
    const gen = new Function('return function* idMaker(x, y){};')();
    expect(isFunction(gen)).toBe(true);
  });

  itHasAsync('should return `true` for async functions', () => {
    // eslint-disable-next-line no-new-func
    const asy = new Function('return async function idAsync(x, y){};')();
    expect(isFunction(asy)).toBe(true);
  });

  itHasClass('should return `false` for classes', () => {
    // eslint-disable-next-line no-new-func
    const classes = new Function('"use strict"; return class My {};')();
    expect(isFunction(classes)).toBe(false);
  });

  itHasClass('should return `true` for classes if allowClass is truthy', () => {
    // eslint-disable-next-line no-new-func
    const classes = new Function('"use strict"; return class My {};')();
    expect(isFunction(classes, true)).toBe(true);
  });
});
