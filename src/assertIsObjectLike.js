/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsObject
 */

import _assertIs from './.internal/_assertIs';
import isObjectLike from './isObjectLike';

export default _assertIs(isObjectLike, 'Not an object');
