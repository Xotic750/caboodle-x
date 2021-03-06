import {noop} from '../index';
import empties from './helpers/empties';

describe('noop', () => {
  it('should be a function', () => {
    expect(noop).toBeInstanceOf(Function);
  });

  it('should return `undefined`', () => {
    const values = [...empties, true, new Date(), 1, /x/, 'a'];
    const expected = values.map(noop);

    const actual = values.map((value, index) => (index ? noop(value) : noop()));

    expect(actual).toEqual(expected);
  });
});
