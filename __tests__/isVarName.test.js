import {isVarName} from '../dist/caboodle-x';

describe('isVarName', () => {
  it('should return true when the argument can be a variable name.', () => {
    expect(isVarName('a')).toBe(true);
  });

  it('should return false when the argument cannot be a variable name.', () => {
    // One of the High Surrogates Unicode subset
    expect(isVarName('\uD842')).toBe(false);
  });

  it('should return false when the argument contains whitespaces.', () => {
    expect(isVarName(' a\t')).toBe(false);
  });

  it('should return false when the argument is an empty string.', () => {
    expect(isVarName('')).toBe(false);
  });

  it('should return false when the argument contains newlines.', () => {
    expect(isVarName('a\r\n')).toBe(false);
  });

  it('should return false when the argument is not a variable but a statement.', () => {
    expect(isVarName('a;')).toBe(false);
  });

  it('should return false when the argument is one of the reserved words.', () => {
    expect(isVarName('class')).toBe(false);
  });

  it('should return false when the argument is not a string.', () => {
    expect(isVarName(['a'])).toBe(false);
  });

  it('should return false when it takes no arguments.', () => {
    expect(isVarName()).toBe(false);
  });
});
