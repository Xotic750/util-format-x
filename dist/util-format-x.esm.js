function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import inspect from 'inspect-x';
import objectIs from 'same-value-x';
import hasOwnProperty from 'has-own-property-x';
import parseIntX from 'parse-int-x';
import { stringify } from 'json3';
import { SetConstructor } from 'collections-x';
import arrayFilter from 'array-filter-x';
import getOwnPropertyNames from 'get-own-property-names-x';
import isSymbol from 'is-symbol';
import isBigint from 'is-bigint';
import toNumber from 'to-number-x';
import slice from 'array-slice-x';
var RX_NAMES = /^([A-Z][a-z]+)+$/;
var rxTest = RX_NAMES.test;
var EMPTY_STRING = '';
var stringSplit = EMPTY_STRING.split;
var stringSlice = EMPTY_STRING.slice;
var charCodeAt = EMPTY_STRING.charCodeAt;

var firstErrorLine = function firstErrorLine(error) {
  return stringSplit.call(error.message, '\n')[0];
};

var CIRCULAR_ERROR_MESSAGE;

var populateMessage = function populateMessage() {
  // Populate the circular error message lazily
  if (!CIRCULAR_ERROR_MESSAGE) {
    try {
      var a = {};
      a.a = a;
      stringify(a);
    } catch (e) {
      CIRCULAR_ERROR_MESSAGE = e.message;
    }
  }
};

var tryStringify = function tryStringify(arg) {
  try {
    return stringify(arg);
  } catch (err) {
    populateMessage();

    if (err.name === 'TypeError' && firstErrorLine(err) === CIRCULAR_ERROR_MESSAGE) {
      return '[Circular]';
    }

    throw err;
  }
};

var matchNames = function matchNames(e) {
  return rxTest.call(RX_NAMES, e);
};

var builtInObjects = new SetConstructor(arrayFilter(getOwnPropertyNames(global), matchNames));

var formatNumber = function formatNumber(fn, value) {
  // Format -0 as '-0'. Checking `value === -0` won't distinguish 0 from -0.
  return fn(objectIs(value, -0) ? '-0' : "".concat(value), 'number');
};

var stylizeNoColor = function stylizeNoColor(str) {
  return str;
};

export var formatWithOptions = function formatWithOptions(inspectOptions, args) {
  var first = args[0];
  var a = 0;
  var str = EMPTY_STRING;
  var join = EMPTY_STRING;

  if (typeof first === 'string') {
    if (args.length === 1) {
      return first;
    }

    var tempStr;
    var lastPos = 0;

    for (var i = 0; i < first.length - 1; i += 1) {
      if (charCodeAt.call(first, i) === 37) {
        // '%'
        i += 1;
        var nextChar = charCodeAt.call(first, i);

        if (a + 1 !== args.length) {
          switch (nextChar) {
            case 115:
              // 's'
              a += 1;
              {
                var tempArg = args[a];

                if (typeof tempArg === 'number') {
                  tempStr = formatNumber(stylizeNoColor, tempArg);
                } else {
                  /* eslint-disable-next-line valid-typeof,no-lonely-if */
                  if (typeof tempArg === 'bigint') {
                    tempStr = "".concat(tempArg, "n");
                  } else {
                    /* eslint-disable-next-line no-void */
                    var constr = _typeof(tempArg) === 'object' && tempArg !== null ? tempArg.constructor : void 0; // noinspection JSObjectNullOrUndefined

                    if (!constr || typeof tempArg.toString === 'function' && ( // A direct own property.
                    hasOwnProperty(tempArg, 'toString') || // A direct own property on the constructor prototype in
                    // case the constructor is not an built-in object.
                    !builtInObjects.has(constr.name) && constr.prototype && hasOwnProperty(constr.prototype, 'toString'))) {
                      tempStr = String(tempArg);
                    } else {
                      tempStr = inspect(tempArg, _objectSpread({}, inspectOptions, {
                        compact: 3,
                        colors: false,
                        depth: 0
                      }));
                    }
                  }
                }
              }
              break;

            case 106:
              // 'j'
              a += 1;
              tempStr = tryStringify(args[a]);
              break;

            case 100:
              // 'd'
              a += 1;
              {
                var tempNum = args[a];

                if (isBigint(tempNum)) {
                  tempStr = "".concat(tempNum, "n");
                } else if (isSymbol(tempNum)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, toNumber(tempNum));
                }
              }
              break;

            case 79:
              // 'O'
              a += 1;
              tempStr = inspect(args[a], inspectOptions);
              break;

            case 111:
              // 'o'
              a += 1;
              tempStr = inspect(args[a], _objectSpread({}, inspectOptions, {
                showHidden: true,
                showProxy: true,
                depth: 4
              }));
              break;

            case 105:
              // 'i'
              a += 1;
              {
                var tempInteger = args[a];

                if (isBigint(tempInteger)) {
                  tempStr = "".concat(tempInteger, "n");
                } else if (isSymbol(tempInteger)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, parseIntX(tempInteger));
                }
              }
              break;

            case 102:
              // 'f'
              a += 1;
              {
                var tempFloat = args[a];

                if (isSymbol(tempFloat)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, parseFloat(tempFloat));
                }
              }
              break;

            case 37:
              // '%'
              str += stringSlice.call(first, lastPos, i);
              lastPos = i + 1;
              /* eslint-disable-next-line no-continue */

              continue;

            default:
              // Any other character is not a correct placeholder

              /* eslint-disable-next-line no-continue */
              continue;
          }

          if (lastPos !== i - 1) {
            str += stringSlice.call(first, lastPos, i - 1);
          }

          str += tempStr;
          lastPos = i + 1;
        } else if (nextChar === 37) {
          str += stringSlice.call(first, lastPos, i);
          lastPos = i + 1;
        }
      }
    }

    if (lastPos !== 0) {
      a += 1;
      join = ' ';

      if (lastPos < first.length) {
        str += stringSlice.call(first, lastPos);
      }
    }
  }

  while (a < args.length) {
    var value = args[a];
    str += join;
    str += typeof value !== 'string' ? inspect(value, inspectOptions) : value;
    join = ' ';
    a += 1;
  }

  return str;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The format() method returns a formatted string using the first argument as a
 * printf-like format.
 *
 * The first argument is a string containing zero or more placeholder tokens.
 * Each placeholder token is replaced with the converted value from the
 * corresponding argument.
 *
 * @param {string} f - Template.
 * @param {*} [...args] - Values.
 * @returns {*} The target.
 */
// eslint-enable jsdoc/check-param-names

export var format = function format() {
  /* eslint-disable-next-line no-void,prefer-rest-params */
  return formatWithOptions(void 0, slice(arguments));
};

//# sourceMappingURL=util-format-x.esm.js.map