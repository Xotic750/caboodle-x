import defineDataProperty from 'src/defineDataProperty';
import {
  assertIsObjectLikeNotArray,
  assertIsPropertyKey,
} from 'src/asserters';

export default function defineDataProperties(...args) {
  const [
    target,
    props = {},
  ] = args;

  assertIsObjectLikeNotArray(target);
  assertIsObjectLikeNotArray(props);

  Object.keys(props).forEach((prop) => {
    assertIsPropertyKey(prop);

    const propDescriptor = assertIsObjectLikeNotArray(props[prop]);
    const descriptor = Object.keys(propDescriptor).reduce((accumulator, propertyKey) => {
      assertIsPropertyKey(propertyKey);

      if (Reflect.has(propDescriptor, propertyKey)) {
        return {
          ...accumulator,
          [propertyKey]: propDescriptor[propertyKey],
        };
      }

      return accumulator;
    }, {});


    defineDataProperty(target, prop, descriptor);
  });

  return target;
}
