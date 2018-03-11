import {es6ReservedNamesRx} from '../dist/caboodle-x';

describe('es6ReservedNamesRx', () => {
  it('should be a RegExp', () => {
    expect(es6ReservedNamesRx).toBeInstanceOf(RegExp);
  });
});
