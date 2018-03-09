export default function sameValueZero(x, y) {
  return x === y || Object.is(x, y);
}
