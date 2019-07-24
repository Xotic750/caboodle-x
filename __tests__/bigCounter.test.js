import {BigCounter} from '../src/caboodle-x';

describe('basic tests', () => {
  it('should throw without "new"', () => {
    expect(() => {
      BigCounter();
    }).toThrow();
  });

  it('create an instance', () => {
    expect(new BigCounter()).toBeInstanceOf(BigCounter);
  });

  it('getters', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    expect(counter.toString()).toBe('0');
    expect(counter.valueOf()).toBe('0');
    expect(counter.toJSON()).toBe('0');
  });

  it('incrementing', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter.next();
    expect(counter.get()).toBe('1');
    counter.next();
    expect(counter.get()).toBe('2');
  });

  it('chaining', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(counter.get()).toBe('3');
  });

  it('resetting', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .reset()
      .next()
      .next()
      .next();
    expect(counter.get()).toBe('3');
    counter.reset();
    expect(counter.get()).toBe('0');
  });

  it('number coercion', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(Number(counter)).toBe(3);
    expect(counter.get()).toBe('3');
    expect(Number(counter)).toBe(3);
    expect(counter.get()).toBe('3');
  });

  it('string coercion', () => {
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(`Count:${counter}`).toBe('Count:3');
    expect(counter.get()).toBe('3');
    expect(String(counter)).toBe('3');
    expect(counter.get()).toBe('3');
  });

  it('count a few', () => {
    const counter = new BigCounter();
    const howMany = 10000;
    new Array(howMany).fill().forEach((u, i) => {
      expect(counter.get()).toBe(i.toString());
      counter.next();
    });
    expect(counter.get()).toBe(howMany.toString());
  });
});
