function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import inspect from 'inspect-x';
import { stringify } from 'json3';
import safeToString from 'to-string-symbols-supported-x';
/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {NumberConstructor} */

var castNumber = 0 .constructor;
var CIRCULAR_ERROR_MESSAGE;

var tryStringify = function _tryStringify(arg) {
  try {
    return stringify(arg);
  } catch (err) {
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

    if (err.name === 'TypeError' && err.message === CIRCULAR_ERROR_MESSAGE) {
      return '[Circular]';
    }

    throw err;
  }
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The format() method returns a formatted string using the first argument as a
 * printf-like format.
 *
 * The first argument is a string containing zero or more placeholder tokens.
 * Each placeholder token is replaced with the converted value from the
 * corresponding argument. Supported placeholders are as follows.
 *
 * %s - String.
 * %d - Number (integer or floating point value).
 * %i - Integer.
 * %f - Floating point value.
 * %j - JSON. Replaced with the string '[Circular]' if the argument contains circular references.
 * %% - Single percent sign ('%'). This does not consume an argument.
 *
 * @param {string} f - Template.
 * @param {*} [...args] - Values.
 * @returns {*} The target.
 */
// eslint-enable jsdoc/check-param-names


var format = function _format(f) {
  if (typeof f !== 'string') {
    var objects = new ArrayCtr(arguments.length);

    for (var index = 0; index < arguments.length; index += 1) {
      /* eslint-disable-next-line prefer-rest-params */
      objects[index] = inspect(arguments[index]);
    }

    return objects.join(' ');
  }

  if (arguments.length === 1) {
    return f;
  }

  var str = '';
  var a = 1;
  var lastPos = 0;

  for (var i = 0; i < f.length;) {
    if (f.charCodeAt(i) === 37
    /* '%' */
    && i + 1 < f.length) {
      if (f.charCodeAt(i + 1) !== 37
      /* '%' */
      && a >= arguments.length) {
        i += 1;
        /* eslint-disable-next-line no-continue */

        continue;
      }

      switch (f.charCodeAt(i + 1)) {
        case 100:
          // 'd'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }
          /* eslint-disable-next-line prefer-rest-params */


          str += castNumber(arguments[a]);
          a += 1;
          break;

        case 105:
          // 'i'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }
          /* eslint-disable-next-line prefer-rest-params */


          str += parseInt(arguments[a], 10);
          a += 1;
          break;

        case 102:
          // 'f'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }
          /* eslint-disable-next-line prefer-rest-params */


          str += parseFloat(arguments[a]);
          a += 1;
          break;

        case 106:
          // 'j'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }
          /* eslint-disable-next-line prefer-rest-params */


          str += tryStringify(arguments[a]);
          a += 1;
          break;

        case 115:
          // 's'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }
          /* eslint-disable-next-line prefer-rest-params */


          str += safeToString(arguments[a]);
          a += 1;
          break;

        case 37:
          // '%'
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }

          str += '%';
          break;

        default:
          // any other character is not a correct placeholder
          if (lastPos < i) {
            str += f.slice(lastPos, i);
          }

          str += '%';
          i += 1;
          lastPos = i;
          /* eslint-disable-next-line no-continue */

          continue;
      }

      i += 2;
      lastPos = i;
      /* eslint-disable-next-line no-continue */

      continue;
    }

    i += 1;
  }

  if (lastPos === 0) {
    str = f;
  } else if (lastPos < f.length) {
    str += f.slice(lastPos);
  }

  while (a < arguments.length) {
    /* eslint-disable-next-line prefer-rest-params */
    var x = arguments[a];
    a += 1;

    if (x === null || _typeof(x) !== 'object' && _typeof(x) !== 'symbol') {
      str += " ".concat(x);
    } else {
      str += " ".concat(inspect(x));
    }
  }

  return str;
};

export default format;

//# sourceMappingURL=util-format-x.esm.js.map