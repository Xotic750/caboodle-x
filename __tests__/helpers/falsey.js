/**
 * @file Helper array for falsey values.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @version 1.0.0
 * @module GlobalAssets/tests/helpers/falsey
 */

import nils from './nils';

export default Object.freeze([false, '', 0, NaN, ...nils]);
