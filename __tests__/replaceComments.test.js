import {replaceComments} from '../index';

const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('replaceComments', () => {
  it('is a function', () => {
    expect(typeof replaceComments).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      replaceComments();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      replaceComments(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      replaceComments(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return the coerced argument when target is not a string', () => {
    const values = [true, 'abc', 1, function() {}, [], /r/];

    const expected = values.map(String);
    const actual = values.map(replaceComments);
    expect(actual).toEqual(expected);
    const date = new Date();
    expect(replaceComments(date)).toBe(String(date));
  });

  it('should return an empty string for basic comment matches', () => {
    expect(replaceComments('/* test */')).toBe('');
    expect(replaceComments('/*test*/')).toBe('');
    expect(replaceComments('/** test */')).toBe('');
    expect(replaceComments('/**test*/')).toBe('');
    expect(replaceComments('// test')).toBe('');
    expect(replaceComments('//test')).toBe('');
  });

  it('should return the replacement string for basic comment matches', () => {
    expect(replaceComments('/* test */', 'replaced')).toBe('replaced');
    expect(replaceComments('/*test*/', 'replaced')).toBe('replaced');
    expect(replaceComments('/** test */', 'replaced')).toBe('replaced');
    expect(replaceComments('/**test*/', 'replaced')).toBe('replaced');
    expect(replaceComments('// test', 'replaced')).toBe('replaced');
    expect(replaceComments('//test', 'replaced')).toBe('replaced');
  });

  it('if replacement supplied the coerced replacement for basic comment matches', () => {
    expect(replaceComments('/* test */', undefined)).toBe('undefined');
    expect(replaceComments('/*test*/', null)).toBe('null');
    expect(replaceComments('/** test */', 1)).toBe('1');
    expect(replaceComments('/**test*/', true)).toBe('true');
    expect(replaceComments('// test', /ddd/)).toBe('/ddd/');
    const date = new Date();
    expect(replaceComments('//test', date)).toBe(String(date));
  });

  it('should return the correct string for complex comment matches', () => {
    expect(replaceComments('complex;/* test */', ' ')).toBe('complex; ');
    expect(replaceComments('complex; /* test */', ' ')).toBe('complex;  ');
    expect(replaceComments('complex;/*test*/', ' ')).toBe('complex; ');
    expect(replaceComments('complex; /*test*/', ' ')).toBe('complex;  ');
    expect(replaceComments('complex;/** test */', ' ')).toBe('complex; ');
    expect(replaceComments('complex; /** test */', ' ')).toBe('complex;  ');
    expect(replaceComments('complex;/**test*/', ' ')).toBe('complex; ');
    expect(replaceComments('complex; /**test*/', ' ')).toBe('complex;  ');
    expect(replaceComments('complex;// test', ' ')).toBe('complex; ');
    expect(replaceComments('complex; // test', ' ')).toBe('complex;  ');
    expect(replaceComments('complex;//test', ' ')).toBe('complex; ');
    expect(replaceComments('complex; //test', ' ')).toBe('complex;  ');
    const actual = replaceComments(
      'function /*1*/complex/*2*/(/*3*/)/*4*/{/*5*/}/*6*///test',
      ' ',
    );
    const epected = 'function  complex ( ) { }  ';
    expect(actual).toBe(epected);
  });

  it('should throw for Object.create(null)', () => {
    expect(() => {
      replaceComments(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw for replacement Object.create(null)', () => {
    expect(() => {
      replaceComments('', Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', () => {
    const sym = Symbol('foo');
    expect(() => {
      replaceComments(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(() => {
      replaceComments(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for replacement Symbol', () => {
    const sym = Symbol('foo');
    expect(() => {
      replaceComments('', sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(() => {
      replaceComments('', Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
