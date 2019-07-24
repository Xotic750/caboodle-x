import {apply} from 'src/caboodle-x';
import nonSymbols from './helpers/nonSymbols';

describe('apply', () => {
  const receiver = {};

  it('throws for non-functions', () => {
    const throwsIfNotCallable = function(notFunc) {
      expect(() => apply(notFunc, receiver)).toThrowErrorMatchingSnapshot();
    };

    nonSymbols.forEach(throwsIfNotCallable);
  });

  it('has correct context and arguments', () => {
    apply(
      function(a, b) {
        /* eslint-disable-next-line babel/no-invalid-this */
        expect(this).toBe(receiver, 'context matches expected');
        expect([a, b]).toStrictEqual([1, 2], 'named args are correct');
        expect(arguments).toHaveLength(3, 'extra argument was passed');
        expect(arguments[2]).toStrictEqual(3, 'extra argument was correct');
      },
      receiver,
      [1, 2, 3],
    );
  });
});
