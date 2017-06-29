'use strict';

var format;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  format = require('../../index.js');
} else {
  format = returnExports;
}

describe('format', function () {
  it('is a function', function () {
    expect(typeof format).toBe('function');
  });

  it('Basic', function () {
    expect(format()).toBe('');
    expect(format('')).toBe('');
    expect(format([])).toBe('[]');
    expect(format([0])).toBe('[ 0 ]');
    expect(format({})).toBe('{}');
    expect(format({ foo: 42 })).toBe('{ foo: 42 }');
    expect(format(null)).toBe('null');
    expect(format(true)).toBe('true');
    expect(format(false)).toBe('false');
    expect(format('test')).toBe('test');
  });

  it('Console', function () {
    // CHECKME this is for console.log() compatibility - but is it *right*?
    expect(format('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('Symbol', function () {
    var symbol = Symbol('foo');

    // ES6 Symbol handling
    expect(format(symbol)).toBe('Symbol(foo)');
    expect(format('foo', symbol)).toBe('foo Symbol(foo)');
    expect(format('%s', symbol)).toBe('Symbol(foo)');
    expect(format('%j', symbol)).toBe('undefined');
    expect(function () {
      format('%d', symbol);
    }).toThrow();
  });

  it('Number', function () {
    // Number format specifier
    expect(format('%d')).toBe('%d');
    expect(format('%d', 42.0)).toBe('42');
    expect(format('%d', 42)).toBe('42');
    expect(format('%d', '42')).toBe('42');
    expect(format('%d', '42.0')).toBe('42');
    expect(format('%d', 1.5)).toBe('1.5');
    expect(format('%d', -0.5)).toBe('-0.5');
    expect(format('%d', '')).toBe('0');
    expect(format('%d %d', 42, 43)).toBe('42 43');
    expect(format('%d %d', 42)).toBe('42 %d');
  });

  it('Integer', function () {
    // Integer format specifier
    expect(format('%i')).toBe('%i');
    expect(format('%i', 42.0)).toBe('42');
    expect(format('%i', 42)).toBe('42');
    expect(format('%i', '42')).toBe('42');
    expect(format('%i', '42.0')).toBe('42');
    expect(format('%i', 1.5)).toBe('1');
    expect(format('%i', -0.5)).toBe('0');
    expect(format('%i', '')).toBe('NaN');
    expect(format('%i %i', 42, 43)).toBe('42 43');
    expect(format('%i %i', 42)).toBe('42 %i');
  });

  it('Float', function () {
  // Float format specifier
    expect(format('%f')).toBe('%f');
    expect(format('%f', 42.0)).toBe('42');
    expect(format('%f', 42)).toBe('42');
    expect(format('%f', '42')).toBe('42');
    expect(format('%f', '42.0')).toBe('42');
    expect(format('%f', 1.5)).toBe('1.5');
    expect(format('%f', -0.5)).toBe('-0.5');
    expect(format('%f', Math.PI)).toBe('3.141592653589793');
    expect(format('%f', '')).toBe('NaN');
    expect(format('%f %f', 42, 43)).toBe('42 43');
    expect(format('%f %f', 42)).toBe('42 %f');
  });

  it('String', function () {
    // String format specifier
    expect(format('%s')).toBe('%s');
    expect(format('%s', undefined)).toBe('undefined');
    expect(format('%s', 'foo')).toBe('foo');
    expect(format('%s', 42)).toBe('42');
    expect(format('%s', '42')).toBe('42');
    expect(format('%s %s', 42, 43)).toBe('42 43');
    expect(format('%s %s', 42)).toBe('42 %s');
  });

  it('JSON', function () {
    // JSON format specifier
    expect(format('%j')).toBe('%j');
    expect(format('%j', 42)).toBe('42');
    expect(format('%j', '42')).toBe('"42"');
    expect(format('%j %j', 42, 43)).toBe('42 43');
    expect(format('%j %j', 42)).toBe('42 %j');
  });

  it('Various', function () {
    // Various format specifiers
    expect(format('%%s%s', 'foo')).toBe('%sfoo');
    expect(format('%s:%s')).toBe('%s:%s');
    expect(format('%s:%s', undefined)).toBe('undefined:%s');
    expect(format('%s:%s', 'foo')).toBe('foo:%s');
    expect(format('%s:%i', 'foo')).toBe('foo:%i');
    expect(format('%s:%f', 'foo')).toBe('foo:%f');
    expect(format('%s:%s', 'foo', 'bar')).toBe('foo:bar');
    expect(format('%s:%s', 'foo', 'bar', 'baz')).toBe('foo:bar baz');
    expect(format('%%%s%%', 'hi')).toBe('%hi%');
    expect(format('%%%s%%%%', 'hi')).toBe('%hi%%');
    expect(format('%sbc%%def', 'a')).toBe('abc%def');
    expect(format('%d:%d', 12, 30)).toBe('12:30');
    expect(format('%d:%d', 12)).toBe('12:%d');
    expect(format('%d:%d')).toBe('%d:%d');
    expect(format('%i:%i', 12, 30)).toBe('12:30');
    expect(format('%i:%i', 12)).toBe('12:%i');
    expect(format('%i:%i')).toBe('%i:%i');
    expect(format('%f:%f', 12, 30)).toBe('12:30');
    expect(format('%f:%f', 12)).toBe('12:%f');
    expect(format('%f:%f')).toBe('%f:%f');
    expect(format('o: %j, a: %j', {}, [])).toBe('o: {}, a: []');
    expect(format('o: %j, a: %j', {})).toBe('o: {}, a: %j');
    expect(format('o: %j, a: %j')).toBe('o: %j, a: %j');
  });

  it('Invalid', function () {
    // Invalid format specifiers
    expect(format('a% b', 'x')).toBe('a% b x');
    expect(format('percent: %d%, fraction: %d', 10, 0.1)).toBe('percent: 10%, fraction: 0.1');
    expect(format('abc%', 1)).toBe('abc% 1');

    var o = {};
    o.o = o;
    expect(format('%j', o)).toBe('[Circular]');

    var p = {
      toJSON: function () {
        throw new Error('Not a circular object but still not serializable');
      }
    };

    expect(function () {
      format('%j', p);
    }).toThrow(); // /^Error: Not a circular object but still not serializable$/
  });

  /*
  it('Error', function () {
  // Errors
    var err = new Error('foo');
    expect(format(err), err.stack);
    function CustomError(msg) {
      Error.call(this);
      Object.defineProperty(this, 'message',
        { value: msg, enumerable: false });
      Object.defineProperty(this, 'name',
        { value: 'CustomError', enumerable: false });
      Error.captureStackTrace(this, CustomError);
    }
    util.inherits(CustomError, Error);
    var customError = new CustomError('bar');
    expect(format(customError), customError.stack);
    // Doesn't capture stack trace
    function BadCustomError(msg) {
      Error.call(this);
      Object.defineProperty(this, 'message',
        { value: msg, enumerable: false });
      Object.defineProperty(this, 'name',
        { value: 'BadCustomError', enumerable: false });
    }
    util.inherits(BadCustomError, Error);
    expect(format(new BadCustomError('foo')),
      '[BadCustomError: foo]');
  });
  */
});
