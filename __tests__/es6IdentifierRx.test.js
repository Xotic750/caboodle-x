import 'babel-polyfill';
import {es6IdentifierRx} from '../dist/caboodle-x';

describe('es6IdentifierRx', () => {
  it('should be a RegExp', () => {
    expect(es6IdentifierRx).toBeInstanceOf(RegExp);
  });
});
