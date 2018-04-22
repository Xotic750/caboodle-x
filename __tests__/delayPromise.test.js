import {delayPromise} from '../index';

describe('delayPromise', () => {
  describe('delay', () => {
    it('should delay after resolution', () => {
      const promise = delayPromise(1, delayPromise(1, 'what'));

      return promise.then(value => {
        expect(value).toBe('what');
      });
    });

    it("should resolve follower promise's value", () => {
      let resolveF;
      const f = new Promise(resolve => {
        resolveF = resolve;
      });

      const v = new Promise(resolve => {
        setTimeout(() => {
          resolve(3);
        }, 1);
      });

      resolveF(v);

      return delayPromise(1, f).then(value => {
        expect(value).toBe(3);
      });
    });
  });
});
