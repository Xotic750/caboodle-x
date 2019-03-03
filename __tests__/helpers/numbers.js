/**
 * @file Helper array for number values.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @version 1.0.0
 * @module GlobalAssets/tests/helpers/numbers
 */

import numberConstants from './numberConstants';
import infinities from './infinities';
import nonNaNNumbers from './nonNaNNumbers';

export default Object.freeze([-1.1, -1, 0, 1, 1.1, NaN, ...numberConstants, ...infinities, ...nonNaNNumbers]);
