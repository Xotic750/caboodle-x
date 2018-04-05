/**
 * @file Helper array for primitive values.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @version 1.0.0
 * @module GlobalAssets/tests/helpers/primitives
 */

import falsey from './falsey';
import truthy from './truthy';
import numbers from './numbers';
import strings from './strings';

export default Object.freeze([...falsey, ...truthy, ...numbers, ...strings]);
