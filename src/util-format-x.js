import inspect from 'inspect-x';
import objectIs from 'same-value-x';
import hasOwnProperty from 'has-own-property-x';
import parseIntX from 'parse-int-x';
import {stringify} from 'json3';
import {SetConstructor} from 'collections-x';
import arrayFilter from 'array-filter-x';
import getOwnPropertyNames from 'get-own-property-names-x';
import isSymbol from 'is-symbol';
import isBigint from 'is-bigint';
import toNumber from 'to-number-x';
import attempt from 'attempt-x';
import toStr from 'to-string-symbols-supported-x';
import assign from 'object-assign-x';
import methodize from 'simple-methodize-x';

/* eslint-disable-next-line no-void */
const UNDEFINED = void 0;
const RX_NAMES = /^([A-Z][a-z]+)+$/;
const rxTest = methodize(RX_NAMES.test);
const EMPTY_STRING = '';
const split = methodize(EMPTY_STRING.split);
const stringSlice = methodize(EMPTY_STRING.slice);
const charCodeAt = methodize(EMPTY_STRING.charCodeAt);

const firstErrorLine = function firstErrorLine(error) {
  return split(error.message, '\n')[0];
};

let CIRCULAR_ERROR_MESSAGE;

const populateMessage = function populateMessage() {
  // Populate the circular error message lazily
  if (!CIRCULAR_ERROR_MESSAGE) {
    const res = attempt(function attemptee() {
      const a = {};
      a.a = a;
      stringify(a);
    });

    CIRCULAR_ERROR_MESSAGE = firstErrorLine(res.value);
  }
};

const tryStringify = function tryStringify(arg) {
  const res = attempt(function attemptee() {
    return stringify(arg);
  });

  if (res.threw) {
    populateMessage();
    const err = res.value;

    if (err.name === 'TypeError' && firstErrorLine(err) === CIRCULAR_ERROR_MESSAGE) {
      return '[Circular]';
    }

    throw err;
  }

  return res.value;
};

const matchNames = function matchNames(e) {
  return rxTest(RX_NAMES, e);
};

const builtInObjects = new SetConstructor(arrayFilter(getOwnPropertyNames(global), matchNames));

const formatNumber = function formatNumber(fn, value) {
  // Format -0 as '-0'. Checking `value === -0` won't distinguish 0 from -0.
  return fn(objectIs(value, -0) ? '-0' : `${value}`, 'number');
};

const stylizeNoColor = function stylizeNoColor(str) {
  return str;
};

export const formatWithOptions = function formatWithOptions(inspectOptions, args) {
  const first = args[0];
  let a = 0;
  let str = EMPTY_STRING;
  let join = EMPTY_STRING;

  if (typeof first === 'string') {
    if (args.length === 1) {
      return first;
    }

    let tempStr;
    let lastPos = 0;

    for (let i = 0; i < first.length - 1; i += 1) {
      if (charCodeAt(first, i) === 37) {
        // '%'
        i += 1;
        const nextChar = charCodeAt(first, i);

        if (a + 1 !== args.length) {
          switch (nextChar) {
            case 115: // 's'
              a += 1;
              {
                const tempArg = args[a];

                if (typeof tempArg === 'number') {
                  tempStr = formatNumber(stylizeNoColor, tempArg);
                } else {
                  /* eslint-disable-next-line no-lonely-if */
                  if (typeof tempArg === 'bigint') {
                    tempStr = `${tempArg}n`;
                  } else {
                    const constr = typeof tempArg === 'object' && tempArg !== null ? tempArg.constructor : UNDEFINED;

                    // noinspection JSObjectNullOrUndefined
                    if (
                      !constr ||
                      (typeof tempArg.toString === 'function' &&
                        // A direct own property.
                        (hasOwnProperty(tempArg, 'toString') ||
                          // A direct own property on the constructor prototype in
                          // case the constructor is not an built-in object.
                          (!builtInObjects.has(constr.name) && constr.prototype && hasOwnProperty(constr.prototype, 'toString'))))
                    ) {
                      tempStr = toStr(tempArg);
                    } else {
                      tempStr = inspect(tempArg, assign({}, inspectOptions, {compact: 3, colors: false, depth: 0}));
                    }
                  }
                }
              }

              break;

            case 106: // 'j'
              a += 1;
              tempStr = tryStringify(args[a]);

              break;

            case 100: // 'd'
              a += 1;
              {
                const tempNum = args[a];

                if (isBigint(tempNum)) {
                  tempStr = `${tempNum}n`;
                } else if (isSymbol(tempNum)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, toNumber(tempNum));
                }
              }

              break;

            case 79: // 'O'
              a += 1;
              tempStr = inspect(args[a], inspectOptions);

              break;

            case 111:
              // 'o'
              a += 1;
              tempStr = inspect(args[a], assign({}, inspectOptions, {showHidden: true, showProxy: true, depth: 4}));

              break;

            case 105: // 'i'
              a += 1;
              {
                const tempInteger = args[a];

                if (isBigint(tempInteger)) {
                  tempStr = `${tempInteger}n`;
                } else if (isSymbol(tempInteger)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, parseIntX(tempInteger));
                }
              }

              break;

            case 102: // 'f'
              a += 1;
              {
                const tempFloat = args[a];

                if (isBigint(tempFloat)) {
                  tempStr = `${tempFloat}n`;
                } else if (isSymbol(tempFloat)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, parseFloat(tempFloat));
                }
              }

              break;

            case 37: // '%'
              str += stringSlice(first, lastPos, i);
              lastPos = i + 1;
              /* eslint-disable-next-line no-continue */
              continue;

            default:
              // Any other character is not a correct placeholder
              /* eslint-disable-next-line no-continue */
              continue;
          }

          if (lastPos !== i - 1) {
            str += stringSlice(first, lastPos, i - 1);
          }

          str += tempStr;
          lastPos = i + 1;
        } else if (nextChar === 37) {
          str += stringSlice(first, lastPos, i);
          lastPos = i + 1;
        }
      }
    }

    if (lastPos !== 0) {
      a += 1;
      join = ' ';

      if (lastPos < first.length) {
        str += stringSlice(first, lastPos);
      }
    }
  }

  while (a < args.length) {
    const value = args[a];
    str += join;
    str += typeof value !== 'string' ? inspect(value, inspectOptions) : value;
    join = ' ';
    a += 1;
  }

  return str;
};

// eslint-disable jsdoc/check-param-names
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
export const format = function format() {
  /* eslint-disable-next-line prefer-rest-params */
  return formatWithOptions(UNDEFINED, arguments);
};
