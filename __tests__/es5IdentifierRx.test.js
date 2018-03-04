import 'babel-polyfill';
import {es5IdentifierRx} from '../dist/caboodle-x';

describe('es5IdentifierRx', () => {
  it('should be a RegExp', () => {
    expect(es5IdentifierRx).toBeInstanceOf(RegExp);
  });
});
