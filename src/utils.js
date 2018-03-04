import {ToString} from 'es-abstract';

export const kebabJoin = function kebabJoin(...args) {
  return args.map(ToString).join('-');
};

export const uniq = function uniq(array) {
  return Array.isArray(array) ? [...new Set(array)] : [];
};

export const noop = function noop() {};

export const stubTrue = function stubTrue() {
  return true;
};

export const stubFalse = function stubFalse() {
  return false;
};

export const stubString = function stubString() {
  return '';
};

export const stubArray = function stubArray() {
  return [];
};

export const stubObject = function stubObject() {
  return {};
};
