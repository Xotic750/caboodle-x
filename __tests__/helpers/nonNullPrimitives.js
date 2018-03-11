import nonNaNNumbers from './nonNaNNumbers';
import booleanPrimitives from './booleanPrimitives';

export default Object.freeze([
  'foo',
  '',
].concat(nonNaNNumbers, booleanPrimitives));
