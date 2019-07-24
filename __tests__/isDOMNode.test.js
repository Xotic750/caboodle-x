import {isDOMNode} from 'src/caboodle-x';

import falsey from './helpers/falsey';

const itWindow = typeof window === 'undefined' ? xit : it;

const itGlobal = typeof global === 'undefined' ? xit : it;

const element = typeof document !== 'undefined' && document.createElement('div');

const itElement = element ? it : xit;

let hasSymbolSupport;
let symbol;

if (typeof Symbol === 'function') {
  symbol = Symbol('');
  hasSymbolSupport = typeof symbol === 'symbol';
}

const itSymbol = hasSymbolSupport ? it : xit;

const itMap = typeof Map === 'function' ? it : xit;

const itSet = typeof Set === 'function' ? it : xit;

const html4List = [
  'A',
  'ABBR',
  'ACRONYM',
  'ADDRESS',
  'APPLET',
  'AREA',
  'B',
  'BASE',
  'BASEFONT',
  'BDO',
  'BIG',
  'BLOCKQUOTE',
  'BODY',
  'BR',
  'BUTTON',
  'CAPTION',
  'CENTER',
  'CITE',
  'CODE',
  'COL',
  'COLGROUP',
  'DD',
  'DEL',
  'DFN',
  'DIR',
  'DIV',
  'DL',
  'DT',
  'EM',
  'FIELDSET',
  'FONT',
  'FORM',
  'FRAME',
  'FRAMESET',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'HEAD',
  'HR',
  'HTML',
  'I',
  'IFRAME',
  'IMG',
  'INPUT',
  'INS',
  'ISINDEX',
  'KBD',
  'LABEL',
  'LEGEND',
  'LI',
  'LINK',
  'MAP',
  'MENU',
  'META',
  'NOFRAMES',
  'NOSCRIPT',
  'OBJECT',
  'OL',
  'OPTGROUP',
  'OPTION',
  'P',
  'PARAM',
  'PRE',
  'Q',
  'S',
  'SAMP',
  'SCRIPT',
  'SELECT',
  'SMALL',
  'SPAN',
  'STRIKE',
  'STRONG',
  'STYLE',
  'SUB',
  'SUP',
  'TABLE',
  'TBODY',
  'TD',
  'TEXTAREA',
  'TFOOT',
  'TH',
  'THEAD',
  'TITLE',
  'TR',
  'TT',
  'U',
  'UL',
  'VAR',
];

const noop = function() {};

const stubTrue = function() {
  return true;
};

const stubFalse = function() {
  return false;
};

describe('isDOMNode', () => {
  it('is a function', () => {
    expect(typeof isDOMNode).toBe('function');
  });

  itWindow('should return `false` for window', () => {
    expect(isDOMNode(window)).toBe(false);
  });

  itGlobal('should return `false` for global', () => {
    expect(isDOMNode(global)).toBe(false);
  });

  itElement('should return `true` for document', () => {
    expect(isDOMNode(document)).toBe(true);
  });

  itElement('should return `true` for HTML4 DOM elements', () => {
    const expected = html4List.map(stubTrue);
    const actual = html4List.map((tag) => isDOMNode(document.createElement(tag)));

    expect(actual).toStrictEqual(expected);
  });

  itElement('should return `true` for DOM comments', () => {
    const comment = document.createComment('Hello');
    expect(isDOMNode(comment)).toBe(true);
  });

  itElement('should return `true` for DOM text nodes', () => {
    const textNode = document.createTextNode('Hello');
    expect(isDOMNode(textNode)).toBe(true);
  });

  itElement('should return `true` for DOM document fragments', () => {
    const fragment = document.createDocumentFragment();
    expect(isDOMNode(fragment)).toBe(true);
  });

  it('should return `false` for other non-DOM objects', function() {
    expect(isDOMNode(arguments)).toBe(false, 'arguments');
    expect(isDOMNode([])).toBe(false, 'Literal array');
    expect(isDOMNode(new Array(6))).toBe(false, 'new Array');
    expect(isDOMNode(Error)).toBe(false, 'Error constructor');
    expect(isDOMNode(Math)).toBe(false, 'Math object');
    expect(isDOMNode(/regex/)).toBe(false, 'Regex');
    expect(isDOMNode(noop)).toBe(false, 'Function');
    expect(isDOMNode(new Date())).toBe(false, 'Date');
    expect(isDOMNode({nodeType: 1})).toBe(false, 'Fake');
  });

  it('should return `false` for non-DOM objects', () => {
    const expected = falsey.map(stubFalse);

    const actual = falsey.map((value, index) => (index ? isDOMNode(value) : isDOMNode()));

    expect(actual).toStrictEqual(expected);

    expect(isDOMNode(true)).toBe(false);
    expect(isDOMNode('a')).toBe(false);
  });

  itMap('should return `false` for Map', () => {
    expect(isDOMNode(new Map())).toBe(false);
  });

  itSet('should return `false` for Set', () => {
    expect(isDOMNode(new Set())).toBe(false);
  });

  itSymbol('should return `false` for symbols', () => {
    expect(isDOMNode(symbol)).toBe(false, 'Literal');
    expect(isDOMNode(Object(symbol))).toBe(false, 'Object');
  });

  /*
  itRealm('should work with objects from another realm', function () {
    expect(isDOMNode(realm.object)).toBe(true);
  });
  */
});
