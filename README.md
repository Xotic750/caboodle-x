<a href="https://travis-ci.org/Xotic750/caboodle-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/caboodle-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/Xotic750/caboodle-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/Xotic750/caboodle-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/Xotic750/caboodle-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/Xotic750/caboodle-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/caboodle-x" 
  title="npm version">
<img src="https://badge.fury.io/js/caboodle-x.svg"
    alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/caboodle-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/caboodle-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

# caboodle-x

A collection of modern utils.

## Install

```bash
$ npm install --save caboodle-x
```

```bash
$ yarn add caboodle-x
```

## Provides

```js
export {default as accumulate} from './accumulate';
export {default as all} from './all';
export {default as any} from './any';
export {default as apply} from './apply';
export {default as arity} from './arity';
export {default as assign} from './assign';
export {default as assertIsFunction} from './assertIsFunction';
export {default as assertIsObjectLike} from './assertIsObjectLike';
export {default as assertIs} from './assertIs';
export {default as attempt} from './attempt';
export {default as BigCounter} from 'src/BigCounter';
export {default as bind} from './bind';
export {default as call} from './call';
export {default as callFunctionOrIdentity} from './callFunctionOrIdentity';
export {default as capitalizeFirst} from './capitalizeFirst';
export {default as capitalize} from './capitalize';
export {default as castArray} from 'src/castArray';
export {default as clamp} from './clamp';
export {default as constant} from './constant';
export {default as defaultToOneOf} from './defaultToOneOf';
export {
  default as defineValidatorProperties,
} from './defineValidatorProperties';
export {default as defineValidatorProperty} from './defineValidatorProperty';
export {default as delayPromise} from './delayPromise';
export {default as difference} from './difference';
export {default as drop} from './drop';
export {default as dropRight} from 'src/dropRight';
export {default as Enum} from 'src/Enum';
export {default as final} from 'src/final';
export {default as find} from './find';
export {default as findIndex} from './findIndex';
export {default as getFunctionName} from './getFunctionName';
export {default as hasOwnProperty} from './hasOwnProperty';
export {default as head} from './head';
export {default as identity} from './identity';
export {default as includes} from './includes';
export {default as initial} from 'src/initial';
export {default as intersection} from './intersection';
export {default as intToRGB} from './intToRGB';
export {default as isArrayLikeObject} from './isArrayLikeObject';
export {default as isArrayLike} from './isArrayLike';
export {default as isBinary} from './isBinary';
export {default as isBooleanType} from './isBooleanType';
export {default as isBoolean} from 'is-boolean-object';
export {default as isClassSupported} from './isClassSupported';
export {default as isCountingNumber} from './isCountingNumber';
export {default as isDashed} from './isDashed';
export {default as isDate} from 'src/isDate';
export {default as isDOMNode} from './isDOMNode';
export {default as isError} from './isError';
export {default as isFalsey} from './isFalsey';
export {default as isFunction} from './isFunction';
export {default as isFunctionType} from './isFunctionType';
export {default as isHex} from './isHex';
export {default as isInteger} from './isInteger';
export {default as isLowerCased} from './isLowerCased';
export {default as isNil} from './isNil';
export {default as isNull} from './isNull';
export {default as isNumber} from 'is-number-object';
export {default as isNumberFinite} from './isNumberFinite';
export {default as isNumberNaN} from './isNumberNaN';
export {default as isNumberType} from './isNumberType';
export {default as isObjectLikeNotArray} from './isObjectLikeNotArray';
export {default as isObjectLike} from './isObjectLike';
export {default as isObjectType} from './isObjectType';
export {default as isOctal} from './isOctal';
export {default as isPopulatedString} from './isPopulatedString';
export {default as isPrimitive} from './isPrimitive';
export {default as isRegex} from './isRegex';
export {default as isSafeInteger} from './isSafeInteger';
export {default as isSearchIndex} from './isSearchIndex';
export {default as isSpaced} from './isSpaced';
export {default as isStringTypeOrInteger} from './isStringTypeOrInteger';
export {default as isStringTypeOrNumberType} from './isStringTypeOrNumberType';
export {default as isStringType} from './isStringType';
export {default as isString} from 'is-string';
export {default as isSurrogatePair} from './isSurrogatePair';
export {default as isSymbolType} from './isSymbolType';
export {default as isSymbol} from 'is-symbol';
export {default as isSymbolSupported} from './isSymbolSupported';
export {default as isToStringTagSupported} from './isToStringTagSupported';
export {default as isTruthy} from './isTruthy';
export {default as isUndefined} from './isUndefined';
export {default as isUnderscored} from './isUnderscored';
export {default as isUniq} from './isUniq';
export {default as isUpperCased} from './isUpperCased';
export {default as isVarName} from 'src/isVarName';
export {default as isValidHtml4Id} from './isValidHtml4Id';
export {default as isValidHtml5Id} from './isValidHtml5Id';
export {default as isWhiteSpaced} from './isWhiteSpaced';
export {default as isWholeNumber} from './isWholeNumber';
export {default as kebabJoin} from './kebabJoin';
export {default as last} from './last';
export {default as Map} from 'src/Map';
export {default as methodize} from './methodize';
export {default as modulo} from './modulo';
export {default as negate} from './negate';
export {default as nilifyIs} from './nilifyIs';
export {default as normalizeSpace} from './normalizeSpace';
export {default as noop} from './noop';
export {default as nth} from 'src/nth';
export {default as numberToDecimalString} from './numberToDecimalString';
export {default as numberFormat} from './numberFormat';
export {default as parseDecimal} from './parseDecimal';
export {default as parseInteger} from './parseInteger';
export {default as partial} from './partial';
export {default as partialRight} from './partialRight';
export {default as padStart} from './padStart';
export {default as range} from 'src/range';
export {default as rangeRight} from 'src/rangeRight';
export {default as regexpEscape} from './regexpEscape';
export {default as replaceComments} from './replaceComments';
export {default as requireCoercibleToString} from './requireCoercibleToString';
export {default as requireObjectCoercible} from './requireObjectCoercible';
export {default as sameValue} from './sameValue';
export {default as sameValueZero} from './sameValueZero';
export {default as Set} from 'src/Set';
export {default as shuffle} from './shuffle';
export {default as sign} from './sign';
export {default as sift} from './sift';
export {default as stringTest} from './stringTest';
export {default as stubArray} from './stubArray';
export {default as stubFalse} from './stubFalse';
export {default as stubObject} from './stubObject';
export {default as stubString} from './stubString';
export {default as stubTrue} from './stubTrue';
export {default as squeeze} from './squeeze';
export {default as surround} from './surround';
export {default as SYMBOL_ITERATOR} from 'src/symbolIterator';
export {default as trim} from './trim';
export {default as trimLeft} from './trimLeft';
export {default as trimRight} from './trimRight';
export {default as trunc} from './trunc';
export {default as truncate} from './truncate';
export {default as toBoolean} from './toBoolean';
export {default as toInteger} from './toInteger';
export {default as toFinite} from 'src/toFinite';
export {default as toNumber} from './toNumber';
export {default as toObject} from './toObject';
export {default as toPrimitive} from './toPrimitive';
export {default as toPropertyKey} from './toPropertyKey';
export {default as toString} from './toString';
export {default as toStringTag} from './toStringTag';
export {default as toUint24} from './toUint24';
export {default as toWholeNumber} from './toWholeNumber';
export {default as union} from './union';
export {default as uniq} from './uniq';
export {default as MAX_SAFE_INTEGER} from 'src/maxSafeInteger';
```

## License

[MIT License](https://github.com/ndelvalle/caboodle-x/blob/master/LICENSE)
