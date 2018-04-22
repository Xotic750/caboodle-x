import {isDate} from '../index';

const hasSymbols =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const itHasSymbols = hasSymbols ? it : xit;

describe('isDate', () => {
  it('not Dates', () => {
    expect(isDate()).toBe(false, 'undefined is not Date');
    expect(isDate(null)).toBe(false, 'null is not Date');
    expect(isDate(false)).toBe(false, 'false is not Date');
    expect(isDate(true)).toBe(false, 'true is not Date');
    expect(isDate(42)).toBe(false, 'number is not Date');
    expect(isDate('foo')).toBe(false, 'string is not Date');
    expect(isDate([])).toBe(false, 'array is not Date');
    expect(isDate({})).toBe(false, 'object is not Date');
    expect(isDate(() => {})).toBe(false, 'function is not Date');
    expect(isDate(/a/g)).toBe(false, 'regex literal is not Date');
    expect(isDate(new RegExp('a', 'g'))).toBe(
      false,
      'regex object is not Date',
    );
  });

  itHasSymbols('@@toStringTag', () => {
    const realDate = new Date();
    const fakeDate = {
      toString() {
        return String(realDate);
      },
      valueOf() {
        return realDate.getTime();
      },
    };
    fakeDate[Symbol.toStringTag] = 'Date';
    expect(isDate(fakeDate)).toBe(
      false,
      'fake Date with @@toStringTag "Date" is not Date',
    );
  });

  it('Dates', () => {
    expect(isDate(new Date())).toBe(true, 'new Date() is Date');
  });
});
