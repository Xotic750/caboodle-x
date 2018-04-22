import {Enum} from '../index';

const t = function test1() {};
const hasFunctionNames = t.name === 'test1';
const itHasFunctionNames = hasFunctionNames ? it : xit;

const hasSymbolSupport =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const itHasSymbolSupport = hasSymbolSupport ? it : xit;

let hasIteratorSupport;
if (hasSymbolSupport) {
  try {
    eval('for (var x of [true]) { hasIteratorSupport = x; }');
  } catch (ignore) {
    hasIteratorSupport = false;
  }
}

const itHasSymbolIterator = hasIteratorSupport ? it : xit;

const testRO = Object.defineProperty({}, 'sentinel', {
  value: 1,
  writeable: false,
});
let hasWorkingDP;
try {
  testRO.sentinel = 0;
} catch (ignore) {}
if (testRO.sentinel === 1) {
  hasWorkingDP = true;
}
const itHasWorkingDP = hasWorkingDP ? it : xit;

let hasWorkingFreeze;
const testFreeze = Object.freeze({});
try {
  testFreeze.sentinel = 0;
} catch (ignore) {}
if (testFreeze.sentinel !== 0) {
  hasWorkingFreeze = true;
}
const itHasWorkingFreeze = hasWorkingFreeze ? it : xit;

describe('Enum', () => {
  let namesWithoutAliases;
  let valuesWithoutAliases;
  let namesWithAliases;
  let valuesWithAliases;
  let subject;
  let subjectName;
  let subjectProps;

  beforeEach(() => {
    namesWithoutAliases = ['RED', 'YELLOW', 'BLUE', 'PINK', 'GREY'];
    valuesWithoutAliases = [0, 1, 10, 11, Object];
    namesWithAliases = ['RED', 'YELLOW', 'BLUE', 'PINK', 'BLACK', 'GREY'];
    valuesWithAliases = [0, 1, 10, 11, 1, Object];
    subject = null;
    subjectName = 'subject';
    subjectProps = [
      'RED',
      'YELLOW',
      {name: 'BLUE', value: 10},
      'PINK',
      {name: 'BLACK', value: 1},
      {name: 'GREY', value: Object},
    ];
  });

  it('Enum is a function', () => {
    expect(typeof Enum).toBe('function');
  });

  it('Enum has symIt', () => {
    expect(typeof Enum.SYMBOL_ITERATOR).toBe(
      hasIteratorSupport ? 'symbol' : 'string',
    );
  });

  it('Can create', () => {
    Enum.create(subjectName, subjectProps);
  });

  it('subject is a function', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(typeof subject).toBe('function');
  });

  it('subject can not be instantiated', () => {
    const Subject = Enum.create(subjectName, subjectProps);
    expect(() => {
      subject = new Subject();
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw if duplicate name used', () => {
    subjectProps.push({name: 'RED', value: 1});
    expect(() => {
      Enum.create(subjectName, subjectProps);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should use the supplied auto function', () => {
    const opts = {
      auto() {
        return {
          next(name, value) {
            return [name, value];
          },
        };
      },
    };

    subject = Enum.create(subjectName, subjectProps, opts);

    namesWithAliases.forEach((name, index) => {
      expect(subject[name].name).toBe(name);
      const {value} = subject[name];
      if (Array.isArray(value)) {
        expect(value[0]).toBe(name);
        expect(value[1]).toBe(undefined);
      } else {
        expect(value).toBe(valuesWithAliases[index]);
      }
    });
  });

  it('should not throw if name is not a string', () => {
    Enum.create(subjectName, [Object]);
  });

  itHasSymbolSupport('should not throw if name is not a string', () => {
    Enum.create(subjectName, [Symbol('')]);
  });

  it('should no throw if name is not reserved', () => {
    const props = ['call', 'hasOwnProperty', 'apply'];
    Enum.create(subjectName, props);
  });

  it('should throw if name is reserved', () => {
    const props = ['forEach', 'toJSON', 'toString', 'valueOf'];
    props.forEach(prop => {
      expect(() => {
        Enum.create(subjectName, [prop]);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('should throw if duplicate value used', () => {
    const opts = {unique: true};
    const properties = [
      subjectProps,
      [{name: 'a', value: NaN}, {name: 'b', value: NaN}],
      [{name: 'a', value: 0}, {name: 'b', value: -0}],
    ];

    properties.forEach(props => {
      expect(() => {
        Enum.create(subjectName, props, opts);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('subject.prototype is an instance of Enum', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.prototype instanceof Enum).toBe(true);
  });

  it('should throw on invalid typeName', () => {
    const badNames = ['', '123', {}, [], 'null', 'undefined', 'var', 'const'];
    badNames.forEach(name => {
      expect(() => {
        Enum.create(name, subjectProps);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  itHasSymbolSupport('should throw on invalid typeName', () => {
    expect(() => {
      Enum.create(Symbol(''), subjectProps);
    }).toThrowErrorMatchingSnapshot();
  });

  itHasFunctionNames('subject.name is as supplied', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.name).toBe(subjectName);
  });

  it('property should be an instance of Enum', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.RED instanceof Enum).toBe(true);
  });

  it('property should be an instance of subject', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.RED instanceof subject).toBe(true);
  });

  it('toString should give the correct value', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(String(subject.RED)).toBe('subject.RED');
  });

  it('subject should have correct enumMembers with names', () => {
    subject = Enum.create(subjectName, subjectProps);
    namesWithoutAliases.forEach(name => {
      expect(subject[name].name).toBe(name);
    });

    expect(subject.BLACK.name).toBe('YELLOW');
  });

  it('subject should have correct enumMembers with values', () => {
    subject = Enum.create(subjectName, subjectProps);
    namesWithAliases.forEach((name, index) => {
      expect(subject[name].value).toBe(valuesWithAliases[index]);
    });
  });

  it('subject should have working forEach', () => {
    const context = {};
    subject = Enum.create(subjectName, subjectProps);
    let index = 0;
    subject.forEach(enumMember => {
      expect(enumMember.name).toBe(namesWithoutAliases[index]);
      expect(enumMember.value).toBe(valuesWithoutAliases[index]);
      expect(this).toBe(context);
      index += 1;
    }, context);
  });

  it('subject should have working find for unique values', () => {
    subject = Enum.create(subjectName, subjectProps);
    const one = subject(0);
    expect(one instanceof Enum).toBe(true);
    expect(one instanceof subject).toBe(true);
  });

  it('subject should have working find for repeated values', () => {
    subject = Enum.create(subjectName, subjectProps);
    const one = subject(1);
    expect(one instanceof Enum).toBe(true);
    expect(one instanceof subject).toBe(true);
  });

  it('subject should have working find for non-existent values', () => {
    subject = Enum.create(subjectName, subjectProps);
    const one = subject(20);
    expect(typeof one).toBe('undefined');
  });

  it('enumMember found should equal enumMember specified', () => {
    subject = Enum.create(subjectName, subjectProps);
    const one = subject(10);
    expect(one).toBe(subject.BLUE);
  });

  it('subject should serialise as JSON', () => {
    subject = Enum.create(subjectName, subjectProps);
    const expected =
      '[{"name":"RED","value":0},{"name":"YELLOW","value":1},{"name":"BLUE","value":10},{"name":"PINK","value":11},{"name":"BLACK","value":1},{"name":"GREY"}]';
    expect(JSON.stringify(subject)).toBe(expected);
  });

  it('subject should be cloneable and not be the same object', () => {
    subject = Enum.create(subjectName, subjectProps);
    const clone = Enum.create('clone', subject);
    expect(clone).not.toBe(subject);
    const expected =
      '[{"name":"RED","value":0},{"name":"YELLOW","value":1},{"name":"BLUE","value":10},{"name":"PINK","value":11},{"name":"BLACK","value":1},{"name":"GREY"}]';
    expect(JSON.stringify(clone)).toBe(expected);
  });

  it('Actuals should not return actuals', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.YELLOW).toBe(subject.YELLOW);
  });

  it('Aliases should return actuals', () => {
    subject = Enum.create(subjectName, subjectProps);
    expect(subject.BLACK).toBe(subject.YELLOW);
  });

  it('subject toString should work', () => {
    subject = Enum.create(subjectName, subjectProps);
    const expected =
      'subject { "RED", "YELLOW", "BLUE", "PINK", "BLACK", "GREY" }';
    expect(String(subject)).toBe(expected);
  });

  it('Enum can have class methods defined', () => {
    const opts = {
      classMethods: {
        favourite() {
          return this.RED;
        },
      },
    };

    subject = Enum.create(subjectName, subjectProps, opts);
    expect(subject.favourite()).toBe(subject.RED);
  });

  it('Class method names get added to the reserved list', () => {
    const opts = {
      classMethods: {
        favourite() {
          return this.RED;
        },
      },
    };

    expect(() => {
      Enum.create(subjectName, subjectProps, opts);
    }).toThrowErrorMatchingSnapshot();
  });

  it('Enum can have instance methods defined', () => {
    const opts = {
      instanceMethods: {
        description() {
          return `Description: ${this.toString()}`;
        },
      },
    };

    subject = Enum.create(subjectName, subjectProps, opts);
    expect(subject.RED.description()).toBe('Description: subject.RED');
  });

  it('Instance method names get added to the reserved list', () => {
    const opts = {
      instanceMethods: {
        description() {
          return `Description: ${this.toString()}`;
        },
      },
    };

    expect(() => {
      Enum.create(subjectName, subjectProps, opts);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw "bad args"', () => {
    expect(() => {
      Enum.create(subjectName, 1, {});
    }).toThrowErrorMatchingSnapshot();
  });

  it('subject has symIt iterator', () => {
    subject = Enum.create(subjectName, subjectProps);
    let index = 0;
    const fn = function(enumMember) {
      expect(enumMember.name).toBe(namesWithoutAliases[index]);
      expect(enumMember.value).toBe(valuesWithoutAliases[index]);
      index += 1;
    };

    const iter = subject[Enum.SYMBOL_ITERATOR]();
    let next = iter.next();
    while (next.done === false) {
      fn(next.value);
      next = iter.next();
    }
  });

  itHasSymbolIterator('subject has Symbol.iterator', () => {
    subject = Enum.create(subjectName, subjectProps);
    let index = 0;
    const fn = function(enumMember) {
      expect(enumMember.name).toBe(namesWithoutAliases[index]);
      expect(enumMember.value).toBe(valuesWithoutAliases[index]);
      index += 1;
    };

    eval('for (var enumMember of subject) { fn(enumMember); }');
  });

  itHasWorkingDP('subject should not be writeable', () => {
    subject = Enum.create(subjectName, subjectProps);
    try {
      subject.BLACK = null;
    } catch (ignore) {}

    expect(subject.BLACK).toBe(subject.YELLOW);
  });

  itHasWorkingDP('subject.RED.name should not be writeable', () => {
    subject = Enum.create(subjectName, subjectProps);
    try {
      subject.RED.name = null;
    } catch (ignore) {}

    expect(subject.RED.name).toBe('RED');
  });

  itHasWorkingFreeze('subject should not be extendable', () => {
    subject = Enum.create(subjectName, subjectProps);
    try {
      subject.GREEN = 6;
    } catch (ignore) {}

    expect(typeof subject.GREEN).toBe('undefined');
  });
});
