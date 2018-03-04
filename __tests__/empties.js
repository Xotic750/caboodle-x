import falsey from './falsey';

/** Used to provide empty values to methods. */
export default Object.freeze([[], {}, ...falsey.slice(1)]);
