import 'babel-polyfill';
import {ES} from '../dist/caboodle-x';

describe('ES', () => {
  const objectKeys = Object.freeze([
    'ES5',
    'ES6',
    'ES2015',
    'ES7',
    'ES2016',
    'ES2017',
  ]);

  const functionKeys = Object.freeze([
    'ToPrimitive',
    'ToBoolean',
    'ToNumber',
    'ToInteger',
    'ToInt32',
    'ToUint32',
    'ToUint16',
    'ToString',
    'ToObject',
    'IsCallable',
    'SameValue',
    'Type',
    'IsPropertyDescriptor',
    'IsAccessorDescriptor',
    'IsDataDescriptor',
    'IsGenericDescriptor',
    'FromPropertyDescriptor',
    'ToPropertyDescriptor',
    'Call',
    'ToInt16',
    'ToInt8',
    'ToUint8',
    'ToUint8Clamp',
    'ToPropertyKey',
    'ToLength',
    'CanonicalNumericIndexString',
    'RequireObjectCoercible',
    'IsArray',
    'IsConstructor',
    'IsExtensible',
    'IsInteger',
    'IsPropertyKey',
    'IsRegExp',
    'SameValueZero',
    'GetV',
    'GetMethod',
    'Get',
    'SpeciesConstructor',
    'CompletePropertyDescriptor',
    'Set',
    'HasOwnProperty',
    'HasProperty',
    'IsConcatSpreadable',
    'Invoke',
    'CreateIterResultObject',
    'RegExpExec',
    'ArraySpeciesCreate',
    'CreateDataProperty',
    'CreateDataPropertyOrThrow',
    'AdvanceStringIndex',
  ]);

  const allKeys = Object.freeze([...objectKeys, ...functionKeys]);

  it('should be an object', () => {
    expect(ES).toBeInstanceOf(Object);
  });

  it('should contain keys', () => {
    expect(Object.keys(ES)).toEqual(allKeys);
  });

  it('should contain objects', () => {
    objectKeys.forEach(key => expect(ES[key]).toBeInstanceOf(Object));
  });

  it('should contain functions', () => {
    functionKeys.forEach(key => expect(ES[key]).toBeInstanceOf(Function));
  });
});
