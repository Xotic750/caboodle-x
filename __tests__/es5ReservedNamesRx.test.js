import {es5ReservedNamesRx} from '../dist/caboodle-x';

describe('es5ReservedNamesRx', () => {
  it('should be a RegExp', () => {
    expect(es5ReservedNamesRx).toBeInstanceOf(RegExp);
  });
});
