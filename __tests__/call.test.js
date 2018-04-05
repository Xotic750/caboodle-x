import {call} from '../dist/caboodle-x';
import nonSymbols from './helpers/nonSymbols';

describe('call', () => {
  const receiver = {};

  it('throws for non-functions', () => {
    const throwsIfNotCallable = function (notFunc) {
      expect(() => call(notFunc, receiver)).toThrowErrorMatchingSnapshot();
    };

    nonSymbols.forEach(throwsIfNotCallable);
  });

  it('has correct context and arguments', () => {
    call(
      function (a, b) {
        expect(this).toBe(receiver, 'context matches expected');
        expect([a, b]).toEqual([1, 2], 'named args are correct');
        expect(arguments).toHaveLength(3, 'extra argument was passed');
        expect(arguments[2]).toEqual(3, 'extra argument was correct');
      },
      receiver,
      1,
      2,
      3,
    );
  });
});
