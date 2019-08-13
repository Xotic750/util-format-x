/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-08-13T15:47:50.421Z",
  "describe": "",
  "description": "An implementation of node's util.format and util.formatWithOptions",
  "file": "util-format-x.js",
  "hash": "60296cd8ddd458f6e250",
  "license": "MIT",
  "version": "3.0.13"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utilFormatX"] = factory();
	else
		root["utilFormatX"] = factory();
})((function () {
  'use strict';

  var ObjectCtr = {}.constructor;
  var objectPrototype = ObjectCtr.prototype;
  var defineProperty = ObjectCtr.defineProperty;
  var $globalThis;
  var getGlobalFallback = function() {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return void 0;
  };

  var returnThis = function() {
    return this;
  };

  try {
    if (defineProperty) {
      defineProperty(objectPrototype, '$$globalThis$$', {
        get: returnThis,
        configurable: true
      });
    } else {
      objectPrototype.__defineGetter__('$$globalThis$$', returnThis);
    }

    $globalThis = typeof $$globalThis$$ === 'undefined' ? getGlobalFallback() : $$globalThis$$;

    delete objectPrototype.$$globalThis$$;

    return $globalThis;
  } catch (error) {
    return getGlobalFallback();
  }
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
var attempt = function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = (attempt);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var toObject = function toObject(value) {
  return castObject(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (toObject);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ __webpack_exports__["a"] = (toBoolean);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var normalize_space_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var replace_comments_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);







var FunctionCtr = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].constructor;
var SPACE = ' ';
var fToString = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function attemptee() {
  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}).threw === false;

var testClassString = function testClassString(value) {
  return test.call(ctrRx, Object(normalize_space_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(replace_comments_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(fToString.call(value), SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(testClassString, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(value, fToString).threw === false;
};

var compareTags = function compareTags(value) {
  var strTag = Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var isFunction = function isFunction(value, allowClass) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_4___default()(value)) {
    return false;
  }

  if (has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]) {
    return tryFuncToString(value, Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(allowClass));
  }

  if (hasNativeClass && Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  return compareTags(value);
};

/* harmony default export */ __webpack_exports__["a"] = (isFunction);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assertIsFunction = function assertIsFunction(callback) {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(callback) === false) {
    var msg = is_primitive__WEBPACK_IMPORTED_MODULE_2___default()(callback) ? Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsFunction);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var requireObjectCoercible = function requireObjectCoercible(value) {
  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (requireObjectCoercible);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

var isObjectLike = function isObjectLike(value) {
  return is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(value) === false && Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, true) === false;
};

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


var hop = {}.hasOwnProperty;
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|number|symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

var hasOwnProperty = function hasOwnProperty(object, property) {
  return hop.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (hasOwnProperty);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var toLength = function toLength(value) {
  var len = Object(to_integer_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

/* harmony default export */ __webpack_exports__["a"] = (toLength);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_0__);

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var ToString = function ToString(value) {
  if (is_symbol__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (ToString);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

var assertIsObject = function assertIsObject(value) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    throw new TypeError("".concat(Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value), " is not an object"));
  }

  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (assertIsObject);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ __webpack_exports__["a"] = (isNil);



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(85)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);







var ObjectCtr = {}.constructor;
var nd = ObjectCtr.defineProperty;
var nativeDefProp = typeof nd === 'function' && nd;
var definePropertyFallback;

var toPropertyDescriptor = function toPropertyDescriptor(desc) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(desc);
  var descriptor = {};

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'enumerable')) {
    descriptor.enumerable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.enumerable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'configurable')) {
    descriptor.configurable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.configurable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'value')) {
    descriptor.value = object.value;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'writable')) {
    descriptor.writable = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(object.writable);
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'get')) {
    var getter = object.get;

    if (typeof getter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, 'set')) {
    var setter = object.set;

    if (typeof setter !== 'undefined' && Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'get') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'set')) && (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'value') || Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
}; // ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6
// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {object} descriptor - The descriptor for the property being defined or modified.
 * @returns {object} The object that was passed to the function.
 * });.
 */


var $defineProperty; // check whether defineProperty works if it's given. Otherwise, shim partially.

if (nativeDefProp) {
  var testWorksWith = function testWorksWith(object) {
    var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var doc = typeof document !== 'undefined' && document;

  if (testWorksWith({}) && (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(doc) === false || testWorksWith(doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property), toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(nativeDefProp) === false || definePropertyFallback) {
  var prototypeOfObject = ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

  var supportsAccessors = Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(prototypeOfObject, '__defineGetter__');
  /* eslint-disable-next-line no-underscore-dangle */

  var defineGetter = supportsAccessors && prototypeOfObject.__defineGetter_;
  /* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

  var defineSetter = supportsAccessors && prototypeOfObject.__defineSetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupGetter = supportsAccessors && prototypeOfObject.__lookupGetter__;
  /* eslint-disable-next-line no-underscore-dangle */

  var lookupSetter = supportsAccessors && prototypeOfObject.__lookupSetter__;

  $defineProperty = function defineProperty(object, property, descriptor) {
    Object(assert_is_object_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object);
    var propKey = Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(property);
    var propDesc = toPropertyDescriptor(descriptor); // make a valiant attempt to use the real defineProperty for IE8's DOM elements.

    if (definePropertyFallback) {
      var result = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(ObjectCtr, definePropertyFallback, object, propKey, propDesc);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    } // If it's a data property.


    if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(propDesc, 'value')) {
      // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
      if (supportsAccessors && (lookupGetter.call(object, propKey) || lookupSetter.call(object, propKey))) {
        // As accessors are supported only on engines implementing
        // `__proto__` we can safely override `__proto__` while defining
        // a property to make sure that we don't hit an inherited accessor.

        /* eslint-disable-next-line no-proto */
        var prototype = object.__proto__;
        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototypeOfObject; // Deleting a property anyway since getter / setter may be defined on object itself.

        delete object[propKey];
        object[propKey] = propDesc.value; // Setting original `__proto__` back now.

        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototype;
      } else {
        object[propKey] = propDesc.value;
      }
    } else {
      if (supportsAccessors === false && (propDesc.get || propDesc.set)) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      } // If we got that far then getters and setters can be defined !!


      if (propDesc.get) {
        defineGetter.call(object, propKey, propDesc.get);
      }

      if (propDesc.set) {
        defineSetter.call(object, propKey, propDesc.set);
      }
    }

    return object;
  };
}

var defProp = $defineProperty;
/* harmony default export */ __webpack_exports__["a"] = (defProp);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringTag);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);


var nia = [].isArray;
var nativeIsArray = typeof nia === 'function' && nia;
var testResult = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function attemptee() {
  return nativeIsArray([]) === true && nativeIsArray({
    length: 0
  }) === false;
});
var isWorking = testResult.threw === false && testResult.value === true;
var implementation = function isArray(value) {
  return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) === '[object Array]';
};
/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} - True if an array; otherwise false.
 */

var isArray = isWorking ? nativeIsArray : implementation;
/* harmony default export */ __webpack_exports__["a"] = (isArray);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var string = 'a';
var boxedString = {}.constructor(string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(14);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var splitIfBoxedBug = function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
};

/* harmony default export */ var split_if_boxed_bug_x_esm = __webpack_exports__["a"] = (splitIfBoxedBug);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_arguments__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_5__);






var nativeSlice = [].slice;

var testArray = function testArray() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call([1, 2, 3], nativeSlice, 1, 2);
  return res.threw || Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(res.value) === false || res.value.length !== 1 || res.value[0] !== 2;
};

var testString = function testString() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call('abc', nativeSlice, 1, 2);
  return res.threw || Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(res.value) === false || res.value.length !== 1 || res.value[0] !== 'b';
};

var testDOM = function testDOM() {
  var doc = typeof document !== 'undefined' && document;
  var resultDocElement = doc ? attempt_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call(doc.documentElement, nativeSlice).threw : false;
  return resultDocElement ? resultDocElement.threw : false;
};

var failArray = testArray();
var failString = testString();
var failDOM = testDOM();
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {Array|object} array - The array to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice(1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the
 *  sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */

var slice = function slice(array, start, end) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array);

  if (failArray || failDOM && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false || failString && is_string__WEBPACK_IMPORTED_MODULE_5___default()(object) || is_arguments__WEBPACK_IMPORTED_MODULE_1___default()(object)) {
    return Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, start, end);
  }
  /* eslint-disable-next-line prefer-rest-params */


  return nativeSlice.apply(object, Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arguments, 1));
};

/* harmony default export */ __webpack_exports__["a"] = (slice);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
var to_property_key_x_esm = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(9);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(14);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js
var to_string_symbols_supported_x_esm = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js
var to_number_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js
var math_clamp_x_esm = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js




var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var is_index_x_esm_isIndex = function isIndex(value, length) {
  var string = Object(to_string_symbols_supported_x_esm["a" /* default */])(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = Object(to_number_x_esm["a" /* default */])(string);

  if (arguments.length > 1) {
    return number < Object(math_clamp_x_esm["a" /* default */])(Object(to_integer_x_esm["a" /* default */])(length), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_index_x_esm = (is_index_x_esm_isIndex);


// EXTERNAL MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js
var property_is_enumerable_x_esm = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js










var EMPTY_STRING = '';
var charAt = EMPTY_STRING.charAt;
var ObjectCtr = {}.constructor;
var ngopd = ObjectCtr.getOwnPropertyDescriptor;
var nativeGOPD = typeof ngopd === 'function' && ngopd;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[Object(to_property_key_x_esm["a" /* default */])(prop)] = 0;
  var testResult = Object(attempt_x_esm["a" /* default */])(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
}; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */


var $getOwnPropertyDescriptor;

if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var res = Object(attempt_x_esm["a" /* default */])(nativeGOPD, Object(to_object_x_esm["a" /* default */])('abc'), 1);
    var worksWithStr = res.threw === false && res.value && res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = Object(attempt_x_esm["a" /* default */])(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm["a" /* default */] && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, Object(to_object_x_esm["a" /* default */])(Symbol(EMPTY_STRING)));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(Object(to_object_x_esm["a" /* default */])(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, Object(to_property_key_x_esm["a" /* default */])(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(Object(to_object_x_esm["a" /* default */])(object), Object(to_property_key_x_esm["a" /* default */])(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (Object(to_boolean_x_esm["a" /* default */])($getOwnPropertyDescriptor) === false || getOPDFallback1 || getOPDFallback2) {
  var prototypeOfObject = ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = Object(has_own_property_x_esm["a" /* default */])(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    var lg = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    var ls = prototypeOfObject.__lookupSetter__;

    lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = Object(to_object_x_esm["a" /* default */])(object);
    var propKey = Object(to_property_key_x_esm["a" /* default */])(property);
    var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

    if (getOPDFallback1) {
      result = attempt_x_esm["a" /* default */].call(to_object_x_esm["a" /* default */], getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }

    var isStringIndex = is_string_default()(obj) && is_index_x_esm(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt_x_esm["a" /* default */].call(to_object_x_esm["a" /* default */], getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }
    /* eslint-disable-next-line no-void */


    var descriptor = void 0; // If object does not owns property return undefined immediately.

    if (isStringIndex === false && Object(has_own_property_x_esm["a" /* default */])(obj, propKey) === false) {
      return descriptor;
    } // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.


    descriptor = {
      configurable: is_primitive_default()(object) === false && isStringIndex === false,
      enumerable: Object(property_is_enumerable_x_esm["a" /* default */])(obj, propKey)
    }; // If JS engine supports accessor properties then property may be a
    // getter or setter.

    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.

      /* eslint-disable-next-line no-proto */
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor

      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.

        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        } // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.


        return descriptor;
      }
    } // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.


    if (isStringIndex) {
      descriptor.value = charAt.call(obj, propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = __webpack_exports__["a"] = (gOPS);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var array_all_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var nf = [].filter;
var nativeFilter = typeof nf === 'function' && nf;

var test1 = function test1() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeFilter, function spyAdd1(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 3;
};

var test2 = function test2() {
  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('abc'), nativeFilter, function spyAdd2(item, index) {
    spy += item;
    return index === 1;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeFilter, function spyAdd3(item, index) {
    spy += item;
    return index === 2;
  });
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeFilter, function spyAdd4(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value && res.value.length === 0 && spy === 6;
};

var getTest5Result = function getTest5Result(args) {
  var _args = _slicedToArray(args, 3),
      res = _args[0],
      div = _args[1],
      spy = _args[2];

  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeFilter, function spyAssign(item) {
      spy = item;
      return item;
    });
    return getTest5Result([res, div, spy]);
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeFilter, testThis, 'x');
    return res.threw === false && res.value && res.value.length === 0 && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeFilter.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeFilter', 'spy', 'castBoolean', fn), nativeFilter, spy, to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(nativeFilter) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedFilter = function filter(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array);
  var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeFilter.apply(array, args);
};

var implementation = function filter(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack);
  var result = [];

  var predicate = function predicate() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params */
      var item = arguments[0];
      /* eslint-disable-next-line babel/no-invalid-this */

      if (callBack.call(this, item, i, object)) {
        result[result.length] = item;
      }
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_all_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object, predicate, arguments[2]);
  return result;
};
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */

var $filter = isWorking ? patchedFilter : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($filter);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var natRed = [].reduce;
var nativeReduce = typeof natRed === 'function' && natRed;

var test1 = function test1() {
  return attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([], nativeReduce, function attemptee(acc) {
    return acc;
  }).threw;
};

var test2 = function test2() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('abc'), nativeReduce, function attemptee(acc, c) {
    return acc + c;
  }, 'x');
  return res.threw === false && res.value === 'xabc';
};

var test3 = function test3() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeReduce, function attempte(acc, arg) {
    return acc + arg;
  }, 1);
  return res.threw === false && res.value === 7;
};

var test4 = function test4() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeReduce, function attempte(acc, arg) {
    return acc + arg;
  }, 2);
  return res.threw === false && res.value === 8;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);

    var atemptee = function attempte(acc, node) {
      acc[acc.length] = node;
      return acc;
    };

    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeReduce, atemptee, []);
    return res.threw === false && res.value.length === 1 && res.value[0] === div;
  }

  return true;
};

var test6 = function test6() {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call('ab', nativeReduce, function attempte() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments[3];
  });
  return res.threw === false && _typeof(res.value) === 'object';
}; // ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce


var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(nativeReduce) && test1() && test2() && test3() && test4() && test5() && test6();

var patchedReduce = function reduce(array, callBack
/* , initialValue */
) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(array);
  var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeReduce.apply(array, args);
};

var implementation = function reduce(array, callBack
/* , initialValue */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(callBack);
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
  var argsLength = arguments.length; // no value to return if no initial value and an empty array

  if (length === 0 && argsLength < 3) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  var i = 0;
  var result;

  if (argsLength > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    result = arguments[2];
  } else {
    do {
      if (i in iterable) {
        result = iterable[i];
        i += 1;
        break;
      } // if array contains no values, no initial value to return


      i += 1;

      if (i >= length) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
    } while (true);
    /* eslint-disable-line no-constant-condition */

  }

  while (i < length) {
    if (i in iterable) {
      result = callBack(result, iterable[i], i, object);
    }

    i += 1;
  }

  return result;
};
/*
 * This method applies a function against an accumulator and each element in the
 * array (from left to right) to reduce it to a single value.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduce on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */

var $reduce = isWorking ? patchedReduce : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($reduce);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var is_arguments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_arguments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var array_like_slice_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var is_regexp_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(object_keys__WEBPACK_IMPORTED_MODULE_9__);










var ObjectCtr = {}.constructor;
var nativeKeys = typeof ObjectCtr.keys === 'function' && ObjectCtr.keys;
var isWorking;
var throwsWithNull;
var worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var worksWithStr;

if (nativeKeys) {
  var isCorrectRes = function _isCorrectRes(r, length) {
    return r.threw === false && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(r.value) && r.value.length === length;
  };

  var either = function _either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var testObj = {
    a: 1,
    b: 2
  };
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, testObj);
  isWorking = isCorrectRes(res, 2) && either(res, 'a', 'b');

  if (isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, testObj);
    isWorking = isCorrectRes(res, 2) && either(res, '0', 'y');
  }

  if (isWorking) {
    throwsWithNull = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, null).threw;
    worksWithPrim = isCorrectRes(Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, 42), 0);
    worksWithRegex = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, /a/g).threw === false;
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2));
    worksWithArgs = isCorrectRes(res, 2) && either(res, '0', '1');
    res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeKeys, Object('ab'));
    worksWithStr = isCorrectRes(res, 2) && either(res, '0', '1');
  }
}
/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj - The object of which the enumerable own properties are to be returned.
 * @returns {Array} An array of strings that represent all the enumerable properties of the given object.
 */


var objectKeys;

if (isWorking) {
  if (throwsWithNull && worksWithPrim && worksWithRegex && worksWithArgs && worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    objectKeys = function keys(object) {
      var obj = to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) : object;

      if (worksWithArgs !== true && is_arguments__WEBPACK_IMPORTED_MODULE_3___default()(obj)) {
        obj = Object(array_like_slice_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj);
      } else if (worksWithStr !== true && is_string__WEBPACK_IMPORTED_MODULE_6___default()(obj)) {
        obj = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(obj);
      } else if (worksWithRegex !== true && Object(is_regexp_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(obj)) {
        var regexKeys = [];
        /* eslint-disable-next-line no-restricted-syntax */

        for (var key in obj) {
          // noinspection JSUnfilteredForInLoop
          if (Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(obj, key)) {
            regexKeys[regexKeys.length] = key;
          }
        }

        return regexKeys;
      }

      return nativeKeys(obj);
    };
  }
} else {
  objectKeys = function keys(object) {
    return object_keys__WEBPACK_IMPORTED_MODULE_9___default()(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object));
  };
}

var ok = objectKeys;
/* harmony default export */ __webpack_exports__["a"] = (ok);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js
var array_for_each_x_esm = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js
var object_keys_x_esm = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js
var get_own_enumerable_property_symbols_x_esm = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/get-own-enumerable-keys-x/dist/get-own-enumerable-keys-x.esm.js



var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

var get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  var object = Object(to_object_x_esm["a" /* default */])(target);
  return concat.call(Object(object_keys_x_esm["a" /* default */])(object), Object(get_own_enumerable_property_symbols_x_esm["a" /* default */])(object));
};

/* harmony default export */ var get_own_enumerable_keys_x_esm = (get_own_enumerable_keys_x_esm_getOwnNonEnumerableKeys);


// CONCATENATED MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js
/* unused harmony export defineProperty */





var defineProperty = object_define_property_x_esm["a" /* default */];
/**
 * This method defines new or modifies existing properties directly on an
 * object, returning the object.
 *
 * @param {object} object - The object on which to define or modify properties.
 * @param {object} properties - An object whose own enumerable properties
 *  constitute descriptors for the
 * properties to be defined or modified.
 * @returns {object} The object that was passed to the function.
 */

var object_define_properties_x_esm_defineProperties = function defineProperties(object, properties) {
  Object(assert_is_object_x_esm["a" /* default */])(object);
  var props = Object(to_object_x_esm["a" /* default */])(properties);
  Object(array_for_each_x_esm["a" /* default */])(get_own_enumerable_keys_x_esm(props), function defineProp(property) {
    if (property !== '__proto__') {
      Object(object_define_property_x_esm["a" /* default */])(object, property, props[property]);
    }
  });
  return object;
};

/* harmony default export */ var object_define_properties_x_esm = __webpack_exports__["a"] = (object_define_properties_x_esm_defineProperties);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js
var to_number_x_esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign = function sign(x) {
  var n = Object(to_number_x_esm["a" /* default */])(x);

  if (n === 0 || Object(is_nan_x_esm["a" /* default */])(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger = function toInteger(value) {
  var number = Object(to_number_x_esm["a" /* default */])(value);

  if (Object(is_nan_x_esm["a" /* default */])(number)) {
    return 0;
  }

  if (number === 0 || Object(is_finite_x_esm["a" /* default */])(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = __webpack_exports__["a"] = (to_integer_x_esm_toInteger);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var to_primitive_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var trim_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var parse_int_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var nan_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var castNumber = testCharsCount.constructor;
var pStrSlice = ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var test = binaryRegex.test;

var isBinary = function isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function hasNonWS(value) {
  return test.call(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

var assertNotSymbol = function assertNotSymbol(value) {
  if (is_symbol__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return value;
};

var parseBase = function parseBase(value, radix) {
  return Object(parse_int_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(pStrSlice.call(value, testCharsCount), radix);
};

var parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(parseBase(value, octalRadix));
  }

  return null;
};

var convertString = function convertString(toNum, value) {
  var val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return nan_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
  }

  var trimmed = Object(trim_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value);

  if (trimmed !== value) {
    return toNum(trimmed);
  }

  return null;
};
/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var toNumber = function toNumber(argument) {
  var value = assertNotSymbol(Object(to_primitive_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(argument, castNumber));

  if (typeof value === 'string') {
    var val = convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return castNumber(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toNumber);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var to_primitive_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 */

var toPropertyKey = function toPropertyKey(argument) {
  var key = Object(to_primitive_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(argument, String);
  return has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _typeof(key) === 'symbol' ? key : Object(to_string_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key);
};

/* harmony default export */ __webpack_exports__["a"] = (toPropertyKey);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var array_any_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);






var ns = [].some;
var nativeSome = typeof ns === 'function' && ns;

var test1 = function test1() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeSome, function spyAdd1(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value === false && spy === 3;
};

var test2 = function test2() {
  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('abc'), nativeSome, function spyAdd2(item, index) {
    spy += item;
    return index === 1;
  });
  return res.threw === false && res.value === true && spy === 'ab';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeSome, function spyAdd3(item, index) {
    spy += item;
    return index === 2;
  });
  return res.threw === false && res.value === true && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeSome, function spyAdd4(item) {
    spy += item;
    return false;
  });
  return res.threw === false && res.value === false && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeSome, function spyAssign(item) {
      spy = item;
      return item;
    });
    return res.threw === false && res.value === true && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function getIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var thisTest = function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeSome, thisTest, 'x');
    return res.threw === false && res.value === false && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeSome.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeSome', 'spy', 'castBoolean', fn), nativeSome, spy, to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return res.threw === false && res.value === false && spy.value !== true;
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(nativeSome) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedSome = function some(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array);
  var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeSome.apply(array, args);
}; // ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some


var implementation = function some(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
      if (callBack.call(this, arguments[0], i, object)) {
        return true;
      }
    }

    return false;
  };
  /* eslint-disable-next-line prefer-rest-params */


  return Object(array_any_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object, iteratee, arguments[2]);
};
/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */

var $some = isWorking ? patchedSome : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($some);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ __webpack_exports__["a"] = (isNaN);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ __webpack_exports__["a"] = (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] &&
/* eslint-disable-next-line compat/compat */
is_symbol__WEBPACK_IMPORTED_MODULE_1___default()(Symbol.toStringTag));



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



var ObjectCtr = {}.constructor;
var nativeGetPrototypeOf = ObjectCtr.getPrototypeOf;

var test1 = function test1() {
  var prototypeOfCtr = {};
  /* eslint-disable-next-line lodash/prefer-noop */

  var Ctr = function Ctr() {};

  Ctr.prototype = prototypeOfCtr;
  var ctr = new Ctr();

  try {
    return nativeGetPrototypeOf(ctr) === prototypeOfCtr;
  } catch (ignore) {
    return false;
  }
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGetPrototypeOf) && test1();

var patchedGetPrototypeOf = function getPrototypeOf(obj) {
  return nativeGetPrototypeOf(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj));
};

var implementation = function getPrototypeOf(obj) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
  /* eslint-disable-next-line no-proto */

  var proto = object.__proto__;

  if (proto || proto === null) {
    return proto;
  }

  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object.constructor)) {
    return object.constructor.prototype;
  }

  if (object instanceof ObjectCtr) {
    return ObjectCtr.prototype;
  }

  return null;
};
/**
 * This method returns the prototype (i.e. The value of the internal [[Prototype]] property)
 * of the specified object.
 *
 * @function getPrototypeOf
 * @param {*} obj - The object whose prototype is to be returned.
 * @returns {object} The prototype of the given object. If there are no inherited properties, null is returned.
 */

var gpo = isWorking ? patchedGetPrototypeOf : implementation;
/* harmony default export */ __webpack_exports__["a"] = (gpo);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var is_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var same_value_zero_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var find_index_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony import */ var calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }












var pIndexOf = typeof Array.prototype.indexOf === 'function' && Array.prototype.indexOf;
var isWorking;

if (pIndexOf) {
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, 1], pIndexOf, 1, 2);
  isWorking = res.threw === false && res.value === -1;

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, 1], pIndexOf, 1);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call([0, -0], pIndexOf, -0);
    isWorking = res.threw === false && res.value === 0;
  }

  if (isWorking) {
    var testArr = [];
    testArr.length = 2;
    /* eslint-disable-next-line no-void */

    testArr[1] = void 0;
    /* eslint-disable-next-line no-void */

    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call(testArr, pIndexOf, void 0);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call('abc', pIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }
}

if (isWorking !== true) {
  pIndexOf = function $pIndexOf(searchElement) {
    /* eslint-disable-next-line babel/no-invalid-this */
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this.length);

    if (length < 1) {
      return -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    var i = arguments[1];

    while (i < length) {
      /* eslint-disable-next-line babel/no-invalid-this */
      if (i in this && this[i] === searchElement) {
        return i;
      }

      i += 1;
    }

    return -1;
  };
}
/**
 * This method returns an index in the array, if an element in the array
 * satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @private
 * @param {Array} array - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index to start the search at.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */


var findIdxFrom = function findIndexFrom(array, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array.length);

  while (fIdx < length) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx += 1;
  }

  return -1;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns the first index at which a given element can be found
 * in the array, or -1 if it is not present.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index to start the search at. If the
 *  index is greater than or equal to the array's length, -1 is returned,
 *  which means the array will not be searched. If the provided index value is
 *  a negative number, it is taken as the offset from the end of the array.
 *  Note: if the provided index is negative, the array is still searched from
 *  front to back. If the calculated index is less than 0, then the whole
 *  array will be searched. Default: 0 (entire array is searched).
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


var indexOf = function indexOf(array, searchElement) {
  var _this = this;

  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array);
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(object);
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(iterable.length);

  if (length < 1) {
    return -1;
  }

  var argLength = arguments.length;
  /* eslint-disable-next-line prefer-rest-params */

  var extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  var extendFn;

  if (is_string__WEBPACK_IMPORTED_MODULE_1___default()(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = same_value_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
    } else if (extend === 'samevaluezero') {
      extendFn = same_value_zero_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
    }
  }

  var fromIndex = 0;

  if (extendFn && (searchElement === 0 || Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(searchElement))) {
    if (argLength > 3) {
      /* eslint-disable-next-line prefer-rest-params */
      fromIndex = Object(calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    if (fromIndex > 0) {
      return findIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return Object(find_index_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(iterable, function (element, index) {
      _newArrowCheck(this, _this);

      return index in iterable && extendFn(searchElement, element);
    }.bind(this));
  }

  if (argLength > 3 || argLength > 2 && Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(extendFn) === false) {
    /* eslint-disable-next-line prefer-rest-params */
    fromIndex = Object(calculate_from_index_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(iterable, arguments[2]);

    if (fromIndex >= length) {
      return -1;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  return pIndexOf.call(iterable, searchElement, fromIndex);
};

/* harmony default export */ __webpack_exports__["a"] = (indexOf);



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
/* unused harmony export string2016 */
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var length = list.length;

for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ __webpack_exports__["a"] = (string2018);
var string2016 = stringES2016;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol__WEBPACK_IMPORTED_MODULE_1___default.a;
/** @type {Function} */

var castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : castString(value);
};

/* harmony default export */ __webpack_exports__["a"] = (toStringSymbolsSupported);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js + 1 modules
var is_finite_x_esm = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/is-integer-x/dist/is-integer-x.esm.js


/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

var is_integer_x_esm_isInteger = function isInteger(value) {
  return Object(is_finite_x_esm["a" /* default */])(value) && Object(to_integer_x_esm["a" /* default */])(value) === value;
};

/* harmony default export */ var is_integer_x_esm = (is_integer_x_esm_isInteger);


// CONCATENATED MODULE: ./node_modules/is-safe-integer-x/dist/is-safe-integer-x.esm.js

var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

var is_safe_integer_x_esm_isSafeInteger = function isSafeInteger(value) {
  return is_integer_x_esm(value) && value >= MIN_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_safe_integer_x_esm = (is_safe_integer_x_esm_isSafeInteger);


// CONCATENATED MODULE: ./node_modules/is-length-x/dist/is-length-x.esm.js

/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

var is_length_x_esm_isLength = function isLength(value) {
  return is_safe_integer_x_esm(value) && value >= 0;
};

/* harmony default export */ var is_length_x_esm = __webpack_exports__["a"] = (is_length_x_esm_isLength);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var array_reduce_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var array_slice_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var get_own_enumerable_property_symbols_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);










var EMPTY_STRING = '';
var StringCtr = EMPTY_STRING.constructor;
var fromCharCode = StringCtr.fromCharCode;
var ObjectCtr = {}.constructor;
var nAssign = ObjectCtr.assign;
var nativeAssign = Object(is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nAssign) && nAssign;
var concat = [].concat;

var workingNativeAssign = function nativeWorks() {
  var obj = {};
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, obj, {
    0: 1
  }, {
    1: 2
  });
  return res.threw === false && res.value === obj && Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj).length === 2 && obj[0] === 1 && obj[1] === 2;
};

var lacksProperEnumerationOrder = function enumOrder() {
  // https://bugs.chromium.org/p/v8/issues/detail?id=4118
  var test1 = Object(to_object_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('abc');
  test1[5] = 'de';

  if (Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(test1)[0] === '5') {
    return true;
  }

  var strNums = '0123456789';

  var iteratee1 = function iteratee1(acc) {
    /* eslint-disable-next-line prefer-rest-params */
    var index = arguments[2];
    acc["_".concat(fromCharCode(index))] = index;
    return acc;
  }; // https://bugs.chromium.org/p/v8/issues/detail?id=3056


  var test2 = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(strNums.split(EMPTY_STRING), iteratee1, {});

  var iteratee2 = function iteratee2(acc, name) {
    return acc + test2[name];
  };

  var order = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(test2), iteratee2, EMPTY_STRING);

  if (order !== strNums) {
    return true;
  } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


  var letters = 'abcdefghijklmnopqrst';

  var iteratee3 = function iteratee3(acc, letter) {
    acc[letter] = letter;
    return acc;
  };

  var test3 = Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(letters.split(EMPTY_STRING), iteratee3, {});
  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, {}, test3);
  return result.threw === false && Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result.value).join(EMPTY_STRING) !== letters;
};

var assignHasPendingExceptions = function exceptions() {
  if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ObjectCtr.preventExtensions) === false) {
    return false;
  } // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
  // which is 72% slower than our shim, and Firefox 40's native implementation.


  var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ObjectCtr.preventExtensions, {
    1: 2
  });

  if (result.threw || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(result.value) === false) {
    return false;
  }

  var thrower = result.value;
  result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nativeAssign, thrower, 'xy');
  return result.threw ? thrower[1] === 'y' : false;
};

var shouldImplement = function getShouldImplement() {
  if (nativeAssign === false) {
    return true;
  }

  if (workingNativeAssign() === false) {
    return true;
  }

  if (lacksProperEnumerationOrder()) {
    return true;
  }

  return assignHasPendingExceptions();
}(); // 19.1.3.1


var implementation = function assign(target) {
  var outerIteratee = function outerIteratee(tgt, source) {
    if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(source)) {
      return tgt;
    }

    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(source);

    var innerIteratee = function innerIteratee(tar, key) {
      tar[key] = object[key];
      return tar;
    };

    return Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(concat.call(Object(object_keys_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object), Object(get_own_enumerable_property_symbols_x__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(object)), innerIteratee, tgt);
  };
  /* eslint-disable-next-line prefer-rest-params */


  return Object(array_reduce_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(array_slice_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(arguments, 1), outerIteratee, Object(to_object_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target));
};
/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {*} [...source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {object} The target object.
 */

var $assign = shouldImplement ? implementation : nativeAssign;
/* harmony default export */ __webpack_exports__["a"] = ($assign);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);





var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var slice = function slice(arrayLike, start, end) {
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arrayLike));
  var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iterable.length);
  var k = setRelative(Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(start), length);
  var relativeEnd = typeof end === 'undefined' ? length : Object(to_integer_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};

/* harmony default export */ __webpack_exports__["a"] = (slice);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var object_define_property_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);






var regexExec = /none/.exec;
var regexClass = '[object RegExp]';

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    Object(object_define_property_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(value, 'lastIndex', descriptor);
  }
};
/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 */


var isRegex = function isRegex(value) {
  if (Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === false) {
    return false;
  }

  if (has_to_string_tag_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] === false) {
    return Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(value) === regexClass;
  }

  var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(descriptor, 'value');

  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
};

/* harmony default export */ __webpack_exports__["a"] = (isRegex);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation1 */
/* unused harmony export implementation2 */
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_array_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var array_slice_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var object_keys_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var ObjectCtr = {}.constructor;
var nGOPN = ObjectCtr.getOwnPropertyNames;
var nativeGOPN = typeof nGOPN === 'function' && nGOPN;

var isCorrectRes = function isCorrectRes(r, length) {
  return r.threw === false && Object(is_array_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(r.value) && r.value.length === length;
};

var either = function either(r, a, b) {
  var x = r.value[0];
  var y = r.value[1];
  return x === a && y === b || x === b && y === a;
};

var test1 = function test1() {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, 'fo');
  return isCorrectRes(res, 3) && either(res, '0', '1') && res.value[2] === 'length';
};

var test2 = function test2() {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, {
    a: 1,
    b: 2
  });
  return isCorrectRes(res, 2) && either(res, 'a', 'b');
};

var implementation1 = function implementation1() {
  var win = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window;
  var cachedWindowNames = win ? nativeGOPN(win) : [];
  return function getOwnPropertyNames(obj) {
    var val = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj); // IE bug where layout engine calls userland gOPN for cross-domain `window` objects

    if (win && win !== window && Object(to_string_tag_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(val) === '[object Window]') {
      var result = Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nativeGOPN, val);
      return result.threw ? Object(array_slice_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(cachedWindowNames) : result.value;
    }

    return nativeGOPN(val);
  };
};
var implementation2 = function implementation2() {
  return function getOwnPropertyNames(obj) {
    return Object(object_keys_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(obj);
  };
};

var getImplementation = function getImplementation() {
  if (test1()) {
    return nativeGOPN;
  }

  if (test2()) {
    return implementation1();
  }

  return implementation2();
};
/**
 * This method creates an array of all properties (enumerable or not) found
 * directly upon a given object.
 *
 * @param {object} obj - The object whose enumerable and non-enumerable own
 *  properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of strings that correspond to the properties found
 *  directly upon the given object.
 */


var getOPN = getImplementation();
/* harmony default export */ __webpack_exports__["a"] = (getOPN);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);



/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

var isArrayLike = function isArrayLike(value) {
  return Object(is_nil_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === false && Object(is_function_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, true) === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value.length);
};

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var trim_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var white_space_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);


var SPACE = ' ';
var RegExpCtr = /none/.constructor;
var reNormalize2018 = new RegExpCtr("[".concat(white_space_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "]+"), 'g');
var replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalizeSpace = function normalizeSpace(string) {
  return replace.call(Object(trim_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(string), reNormalize2018, SPACE);
};

/* harmony default export */ __webpack_exports__["a"] = (normalizeSpace);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var requireCoercibleToString = function requireCoercibleToString(value) {
  return Object(to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value));
};

/* harmony default export */ __webpack_exports__["a"] = (requireCoercibleToString);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


var EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace = EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replaceComments = function replaceComments(string, replacement) {
  return replace.call(Object(require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(string), STRIP_COMMENTS, arguments.length > 1 ? Object(to_string_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(replacement) : EMPTY_STRING);
};

/* harmony default export */ __webpack_exports__["a"] = (replaceComments);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var array_any_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method executes a provided function once for each array element.
 *
 * @function all
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */
// eslint-enable jsdoc/check-param-names

var all = function all(array, callBack
/* , thisArg */
) {
  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
    callBack.call(this, arguments[0], arguments[1], arguments[2]);
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_any_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, iteratee, arguments[2]);
};

/* harmony default export */ __webpack_exports__["a"] = (all);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var performCallback = function performCallback(args) {
  var _args = _slicedToArray(args, 6),
      noThis = _args[0],
      thisArg = _args[1],
      callBack = _args[2],
      iterable = _args[3],
      index = _args[4],
      object = _args[5];

  var item = iterable[index];
  return noThis ? callBack(item, index, object) : callBack.call(thisArg, item, index, object);
};

var getIterableLengthPair = function getIterableLengthPair(object) {
  var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object);
  return [iterable, Object(to_length_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterable.length)];
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @function any
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */
// eslint-enable jsdoc/check-param-names


var any = function any(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(callBack);

  var _getIterableLengthPai = getIterableLengthPair(object),
      _getIterableLengthPai2 = _slicedToArray(_getIterableLengthPai, 2),
      iterable = _getIterableLengthPai2[0],
      length = _getIterableLengthPai2[1];
  /* eslint-disable-next-line prefer-rest-params,no-void */


  var thisArg = arguments.length > 2 ? arguments[2] : void 0;
  var noThis = typeof thisArg === 'undefined';

  if (length) {
    for (var index = 0; index < length; index += 1) {
      if (performCallback([noThis, thisArg, callBack, iterable, index, object])) {
        return true;
      }
    }
  }

  return false;
};

/* harmony default export */ __webpack_exports__["a"] = (any);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var isWorking;

if (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var symbol = Symbol('');
  var testObj = {
    a: 1
  };
  testObj[symbol] = 2;
  var r = Object(attempt_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nativeGOPS, testObj);
  isWorking = r.threw === false && r.value && r.value.length === 1 && r.value[0] === symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  return isWorking ? nativeGOPS(object) : [];
};

/* harmony default export */ __webpack_exports__["a"] = (getOwnPropertySymbols);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var is_nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} [value1] - The first value to compare.
 * @param {*} [value2] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 */

var sameValue = function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value1) && Object(is_nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value2);
};

/* harmony default export */ __webpack_exports__["a"] = (sameValue);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);





var test1 = function test1() {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function createSet() {
    /* eslint-disable-next-line compat/compat */
    return new Set();
  });
};

var getFromDescriptor = function getFromDescriptor(descriptor) {
  var resTest1 = test1();

  if (resTest1.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resTest1.value)) {
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(resTest1.value, descriptor.get);

    if (res.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(res.value)) {
      return descriptor.get;
    }
  }

  return null;
};

var getGetter = function getGetter() {
  if (typeof Set === 'function') {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Set.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      var getter = getFromDescriptor(descriptor);

      if (getter !== null) {
        return getter;
      }
    }
  }

  return null;
};

var getSize = getGetter();
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var isSet = function isSet(object) {
  if (getSize === null || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false) {
    return false;
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(object, getSize);
  return result.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result.value);
};

/* harmony default export */ __webpack_exports__["a"] = (isSet);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var is_object_like_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var is_length_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);





var test1 = function test1() {
  return Object(attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function createMap() {
    /* eslint-disable-next-line compat/compat */
    return new Map();
  });
};

var getFromDescriptor = function getFromDescriptor(descriptor) {
  var resTest1 = test1();

  if (resTest1.threw === false && Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resTest1.value)) {
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(resTest1.value, descriptor.get);

    if (res.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(res.value)) {
      return descriptor.get;
    }
  }

  return null;
};

var getGetter = function getGetter() {
  if (typeof Map === 'function') {
    /* eslint-disable-next-line compat/compat */
    var descriptor = Object(object_get_own_property_descriptor_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Map.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      var getter = getFromDescriptor(descriptor);

      if (getter !== null) {
        return getter;
      }
    }
  }

  return null;
};

var getSize = getGetter();
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var isMap = function isMap(object) {
  if (getSize === null || Object(is_object_like_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) === false) {
    return false;
  }

  var result = attempt_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].call(object, getSize);
  return result.threw === false && Object(is_length_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result.value);
};

/* harmony default export */ __webpack_exports__["a"] = (isMap);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function tryBooleanObject(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader =  true && __webpack_require__(94);

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return JSON3;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(93)(module), __webpack_require__(59)))

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implementation */
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var to_boolean_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var array_all_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







var nfe = [].forEach;
var nativeForEach = typeof nfe === 'function' && nfe;

var test1 = function test1() {
  var _this = this;

  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1, 2], nativeForEach, function (item) {
    _newArrowCheck(this, _this);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 3;
};

var test2 = function test2() {
  var _this2 = this;

  var spy = '';
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('abc'), nativeForEach, function (item) {
    _newArrowCheck(this, _this2);

    spy += item;
  }.bind(this));
  return res.threw === false && typeof res.value === 'undefined' && spy === 'abc';
};

var test3 = function test3() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeForEach, function spyAdd1(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test4 = function test4() {
  var spy = 0;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeForEach, function spyAdd2(item) {
    spy += item;
  });
  return res.threw === false && typeof res.value === 'undefined' && spy === 6;
};

var test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(fragment.childNodes, nativeForEach, function spyAssign(item) {
      spy = item;
    });
    return res.threw === false && typeof res.value === 'undefined' && spy === div;
  }

  return true;
};

var test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var thisTest = function thisTest() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([1], nativeForEach, thisTest, 'x');
    return res.threw === false && typeof res.value === 'undefined' && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeForEach.call("foo", function (_, __, context) {' + 'if (toBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Function('nativeForEach', 'spy', 'toBoolean', fn), nativeForEach, spy, to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  return res.threw === false && typeof res.value === 'undefined' && spy.value !== true;
};

var isWorking = Object(to_boolean_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(nativeForEach) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedNative = function forEach(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(array);
  var args = [Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeForEach.apply(array, args);
};

var implementation = function forEach(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */
      callBack.call(this, arguments[0], i, object);
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_all_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(object, iteratee, arguments[2]);
};
/**
 * This method executes a provided function once for each array element.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */

var $forEach = isWorking ? patchedNative : implementation;
/* harmony default export */ __webpack_exports__["a"] = ($forEach);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_number_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);


var getMaxMin = function getMaxMin(args) {
  var minVal = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[1]);
  var result = args.length < 3 ? {
    max: minVal,
    min: 0
  } : {
    max: Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[2]),
    min: minVal
  };

  if (result.min > result.max) {
    throw new RangeError('"min" must be less than "max"');
  }

  return result;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names


var clamp = function clamp(value) {
  var number = Object(to_number_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  if (arguments.length < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var _getMaxMin = getMaxMin(arguments),
      max = _getMaxMin.max,
      min = _getMaxMin.min;

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

/* harmony default export */ __webpack_exports__["a"] = (clamp);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

var sameValueZero = function sameValueZero(x, y) {
  return x === y || Object(same_value_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (sameValueZero);



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var to_integer_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var is_array_like_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);





var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};
/**
 * This method calculates a fromIndex of a given value for an array.
 *
 * @param {Array} array - * The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - * The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */


var calcFromIndex = function calcFromIndex(array, fromIndex) {
  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array);

  if (Object(is_array_like_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object) === false) {
    return 0;
  }

  var index = Object(to_integer_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fromIndex);
  return index >= 0 ? index : getMax(0, Object(to_length_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object.length) + index);
};

/* harmony default export */ __webpack_exports__["a"] = (calcFromIndex);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js
var array_slice_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(9);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/bind-x/dist/bind-x.esm.js
var bind_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





var nb = assert_is_function_x_esm["a" /* default */].bind;
var nativeBind = typeof nb === 'function' && nb;
var isWorking;

if (nativeBind) {
  /* eslint-disable-next-line no-void */
  var gra = void 0;
  /* eslint-disable-next-line no-void */

  var context = void 0;
  /* eslint-disable-next-line no-unused-vars */

  var bind_x_esm_fn = function fn(arg1, arg2) {
    /* eslint-disable-next-line babel/no-invalid-this */
    context = this;
    gra = arg1;
    /* eslint-disable-next-line prefer-rest-params */

    return arguments;
  };

  var bind_x_esm_testThis = [];
  var bind_x_esm_res = attempt_x_esm["a" /* default */].call(bind_x_esm_fn, nativeBind, bind_x_esm_testThis, 1);
  isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

  if (isWorking) {
    bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(bind_x_esm_res.value, 2, 3);
    isWorking = bind_x_esm_res.threw === false && gra === 1 && context === bind_x_esm_testThis && bind_x_esm_res.value.length === 3;
  }

  if (isWorking) {
    var oracle = [1, 2, 3];

    var Ctr = function Ctr() {
      isWorking = this !== oracle;
      return oracle;
    };

    bind_x_esm_res = attempt_x_esm["a" /* default */].call(Ctr, nativeBind, null);
    isWorking = bind_x_esm_res.threw === false && typeof bind_x_esm_res.value === 'function';

    if (isWorking) {
      bind_x_esm_res = Object(attempt_x_esm["a" /* default */])(function () {
        _newArrowCheck(this, bind_x_esm_this);

        /* eslint-disable-next-line babel/new-cap,new-cap */
        return new bind_x_esm_res.value();
      }.bind(undefined));

      if (isWorking) {
        isWorking = bind_x_esm_res.threw === false && bind_x_esm_res.value === oracle;
      }
    }
  }
}
/* eslint-disable-next-line no-unused-vars */


var patchedBind = function bind(target, thisArg) {
  /* eslint-disable-next-line prefer-rest-params */
  return nativeBind.apply(Object(assert_is_function_x_esm["a" /* default */])(target), Object(array_slice_x_esm["a" /* default */])(arguments, 1));
};

var bind_x_esm_concat = function concat(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var result = Object(array_slice_x_esm["a" /* default */])(a);
  result.length += bLength;

  for (var index = 0; index < bLength; index += 1) {
    result[aLength + index] = b[index];
  }

  return result;
};
/* eslint-disable-next-line lodash/prefer-noop */


var Empty = function Empty() {};

var implementation = function bind(target, thisArg) {
  Object(assert_is_function_x_esm["a" /* default */])(target);
  /* eslint-disable-next-line prefer-rest-params */

  var args = Object(array_slice_x_esm["a" /* default */])(arguments, 2);
  var bound;

  var binder = function _binder() {
    /* eslint-disable-next-line babel/no-invalid-this */
    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      var result = target.apply(this, bind_x_esm_concat(args, arguments));
      /* eslint-disable-next-line babel/no-invalid-this */

      return is_primitive_default()(result) ? this : result;
    }
    /* eslint-disable-next-line prefer-rest-params */


    return target.apply(thisArg, bind_x_esm_concat(args, arguments));
  };

  var boundLength = target.length - args.length;

  if (boundLength < 0) {
    boundLength = 0;
  }

  var lastIndex = boundLength - 1;
  var boundArgs = '';

  for (var index = 0; index < boundLength; index += 1) {
    boundArgs += "$_".concat(index, "_$").concat(index < lastIndex ? ',' : '');
  }
  /* eslint-disable-next-line no-new-func */


  bound = Function('binder', 'slice', "return function (".concat(boundArgs, "){ return binder.apply(this,slice(arguments)); }"))(binder, array_slice_x_esm["a" /* default */]);

  if (target.prototype) {
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }

  return bound;
};
/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @param {Function} target - The target function.
 * @param {*} thisArg - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {*} [args] - Arguments to prepend to arguments provided to the bouund
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */

var $bind = isWorking ? patchedBind : implementation;
/* harmony default export */ var bind_x_esm = ($bind);


// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/is-generator-function/index.js
var is_generator_function = __webpack_require__(81);
var is_generator_function_default = /*#__PURE__*/__webpack_require__.n(is_generator_function);

// EXTERNAL MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js
var has_to_string_tag_x_esm = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js
var normalize_space_x_esm = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js
var replace_comments_x_esm = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js
var get_prototype_of_x_esm = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/is-async-function-x/dist/is-async-function-x.esm.js






var isFnRegex = /^async function/;
var test = isFnRegex.test;
var functionCtr = attempt_x_esm["a" /* default */].constructor;
var fToString = functionCtr.toString;
var testRes = Object(attempt_x_esm["a" /* default */])(function attemptee() {
  return Object(get_prototype_of_x_esm["a" /* default */])(functionCtr('return async function() {}')());
});
var supportsAsync = testRes.threw === false;
var asyncProto = testRes.value;

var is_async_function_x_esm_attemptToString = function attemptToString(fn) {
  return Object(attempt_x_esm["a" /* default */])(function attemptee() {
    return Object(normalize_space_x_esm["a" /* default */])(Object(replace_comments_x_esm["a" /* default */])(fToString.call(fn), ' '));
  });
};

var is_async_function_x_esm_compare = function compare(fn) {
  return has_to_string_tag_x_esm["a" /* default */] ? Object(get_prototype_of_x_esm["a" /* default */])(fn) === asyncProto : Object(to_string_tag_x_esm["a" /* default */])(fn) === '[object AsyncFunction]';
};
/**
 * Checks if `value` is classified as an `Async Function` object.
 *
 * @param {*} fn - The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var isAsyncFunction = function isAsyncFunction(fn) {
  if (supportsAsync === false || typeof fn !== 'function') {
    return false;
  }

  var result = is_async_function_x_esm_attemptToString(fn);

  if (result.threw) {
    return false;
  }

  if (test.call(isFnRegex, result.value)) {
    return true;
  }

  return is_async_function_x_esm_compare(fn);
};

/* harmony default export */ var is_async_function_x_esm = (isAsyncFunction);


// EXTERNAL MODULE: ./node_modules/is-regex/index.js
var is_regex = __webpack_require__(71);
var is_regex_default = /*#__PURE__*/__webpack_require__.n(is_regex);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(34);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// EXTERNAL MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js
var is_object_like_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js + 1 modules
var object_get_own_property_descriptor_x_esm = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/is-array-buffer-x/dist/is-array-buffer-x.esm.js






var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';

var is_array_buffer_x_esm_getGetter = function getGetter(descriptor) {
  var resBuf = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return new ArrayBuffer(4);
  });

  if (resBuf.threw === false && Object(is_object_like_x_esm["a" /* default */])(resBuf.value)) {
    var resGet = attempt_x_esm["a" /* default */].call(resBuf.value, descriptor.get);
    return resGet.threw === false && typeof resGet.value === 'number' && descriptor.get;
  }

  return null;
};

var is_array_buffer_x_esm_getBlength = function getBlength() {
  /* eslint-disable-next-line compat/compat */
  var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(ArrayBuffer.prototype, 'byteLength');
  return descriptor && typeof descriptor.get === 'function' ? is_array_buffer_x_esm_getGetter(descriptor) : null;
};

var is_array_buffer_x_esm_bLength = hasABuf && has_to_string_tag_x_esm["a" /* default */] ? is_array_buffer_x_esm_getBlength() : null;
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */

var is_array_buffer_x_esm_isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || Object(is_object_like_x_esm["a" /* default */])(object) === false) {
    return false;
  }

  if (Object(to_boolean_x_esm["a" /* default */])(is_array_buffer_x_esm_bLength) === false) {
    return Object(to_string_tag_x_esm["a" /* default */])(object) === aBufTag;
  }

  var result = attempt_x_esm["a" /* default */].call(object, is_array_buffer_x_esm_bLength);
  return result.threw === false && typeof result.value === 'number';
};

/* harmony default export */ var is_array_buffer_x_esm = (is_array_buffer_x_esm_isArrayBuffer);


// EXTERNAL MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js
var is_set_x_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js
var is_map_x_esm = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/is-typed-array/index.js
var is_typed_array = __webpack_require__(73);
var is_typed_array_default = /*#__PURE__*/__webpack_require__.n(is_typed_array);

// CONCATENATED MODULE: ./node_modules/is-data-view-x/dist/is-data-view-x.esm.js






var hasDView = typeof DataView === 'function';
var dViewTag = '[object DataView]';

var is_data_view_x_esm_getDataView = function getDataView() {
  var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return new DataView(new ArrayBuffer(4));
  });
  return res.threw === false && Object(is_object_like_x_esm["a" /* default */])(res.value) && res.value;
};

var is_data_view_x_esm_getByteLengthGetter = function getByteLengthGetter(dataView) {
  /* eslint-disable-next-line compat/compat */
  var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(DataView.prototype, 'byteLength');

  if (descriptor && typeof descriptor.get === 'function') {
    var res = attempt_x_esm["a" /* default */].call(dataView, descriptor.get);
    return res.threw === false && typeof res.value === 'number' && descriptor.get;
  }

  return null;
};

var is_data_view_x_esm_legacyCheck1 = function legacyCheck1(object) {
  return Object(to_string_tag_x_esm["a" /* default */])(object) === dViewTag;
};

var is_data_view_x_esm_legacyCheck2 = function legacyCheck2(object) {
  var isByteLength = typeof object.byteLength === 'number';
  var isByteOffset = typeof object.byteOffset === 'number';
  var isGetFloat32 = typeof object.getFloat32 === 'function';
  var isSetFloat64 = typeof object.setFloat64 === 'function';
  return isByteLength && isByteOffset && isGetFloat32 && isSetFloat64 && is_array_buffer_x_esm(object.buffer);
};

var is_data_view_x_esm_init = function init(hasDataView) {
  if (hasDataView) {
    var dataView = is_data_view_x_esm_getDataView();

    var _getByteLength = dataView && has_to_string_tag_x_esm["a" /* default */] ? is_data_view_x_esm_getByteLengthGetter(dataView) : false;

    return {
      getByteLength: _getByteLength,
      legacyCheck: _getByteLength === false && Object(to_string_tag_x_esm["a" /* default */])(dataView) === dViewTag ? is_data_view_x_esm_legacyCheck1 : is_data_view_x_esm_legacyCheck2
    };
  }

  return {
    getByteLength: false,
    legacyCheck: false
  };
};

var _init = is_data_view_x_esm_init(hasDView),
    getByteLength = _init.getByteLength,
    legacyCheck = _init.legacyCheck;
/**
 * Determine if an `object` is an `DataView`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `DataView`, else `false`.
 */


var is_data_view_x_esm_isDataView = function isDataView(object) {
  if (hasDView === false || Object(is_object_like_x_esm["a" /* default */])(object) === false) {
    return false;
  }

  if (legacyCheck) {
    return legacyCheck(object);
  }

  var result = attempt_x_esm["a" /* default */].call(object, getByteLength);
  return result.threw === false && typeof result.value === 'number';
};

/* harmony default export */ var is_data_view_x_esm = (is_data_view_x_esm_isDataView);


// EXTERNAL MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
var is_nil_x_esm = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/is-error-x/dist/is-error-x.esm.js




var errorCheck = function checkIfError(value) {
  return Object(to_string_tag_x_esm["a" /* default */])(value) === '[object Error]';
};

if (errorCheck(Error.prototype) === false) {
  var errorProto = Error.prototype;
  var testStringTag = errorCheck;

  errorCheck = function checkIfError(value) {
    return value === errorProto || testStringTag(value);
  };
}
/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 */


var is_error_x_esm_isError = function isError(value) {
  if (Object(is_object_like_x_esm["a" /* default */])(value) === false) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (errorCheck(object)) {
      return true;
    }

    object = Object(get_prototype_of_x_esm["a" /* default */])(object);
    maxLoop -= 1;
  }

  return false;
};

/* harmony default export */ var is_error_x_esm = (is_error_x_esm_isError);


// EXTERNAL MODULE: ./node_modules/is-promise/index.js
var is_promise = __webpack_require__(74);
var is_promise_default = /*#__PURE__*/__webpack_require__.n(is_promise);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(14);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-number-object/index.js
var is_number_object = __webpack_require__(75);
var is_number_object_default = /*#__PURE__*/__webpack_require__.n(is_number_object);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(52);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// EXTERNAL MODULE: ./node_modules/object-is/index.js
var object_is = __webpack_require__(82);
var object_is_default = /*#__PURE__*/__webpack_require__.n(object_is);

// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(15);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/is-nan/index.js
var is_nan = __webpack_require__(83);
var is_nan_default = /*#__PURE__*/__webpack_require__.n(is_nan);

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/get-function-name-x/dist/get-function-name-x.esm.js



var get_function_name_x_esm_functionCtr = is_function_x_esm["a" /* default */].constructor;
var $getName;
/* eslint-disable-next-line lodash/prefer-noop */

var t = function test1() {};

if (t.name === 'test1') {
  var createsAnonymous = get_function_name_x_esm_functionCtr().name === 'anonymous';

  $getName = function getName(fn) {
    return createsAnonymous && fn.name === 'anonymous' ? '' : fn.name;
  };
} else {
  var get_function_name_x_esm_fToString = get_function_name_x_esm_functionCtr.toString;
  var reName = /^(?:async )?(?:function|class) ?(?:\* )?([\w$]+)/i;
  var stringMatch = ''.match;

  $getName = function getName(fn) {
    var match;

    try {
      match = stringMatch.call(Object(normalize_space_x_esm["a" /* default */])(Object(replace_comments_x_esm["a" /* default */])(get_function_name_x_esm_fToString.call(fn), ' ')), reName);

      if (match) {
        var name = match[1];
        return name === 'anonymous' ? '' : name;
      }
    } catch (ignore) {// empty
    }

    return '';
  };
}
/**
 * This method returns the name of the function, or `undefined` if not
 * a function.
 *
 * @param {Function} fn - The function to get the name of.
 * @returns {undefined|string} The name of the function,  or `undefined` if
 *  not a function.
 */


var get_function_name_x_esm_getFunctionName = function getFunctionName(fn) {
  /* eslint-disable-next-line no-void */
  return Object(is_function_x_esm["a" /* default */])(fn, true) ? $getName(fn) : void 0;
};

/* harmony default export */ var get_function_name_x_esm = (get_function_name_x_esm_getFunctionName);


// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/array-reduce-x/dist/array-reduce-x.esm.js
var array_reduce_x_esm = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js
var array_some_x_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/array-any-x/dist/array-any-x.esm.js
var array_any_x_esm = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/array-every-x/dist/array-every-x.esm.js






var ne = [].every;
var nativeEvery = typeof ne === 'function' && ne;

var array_every_x_esm_test1 = function test1() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call([1, 2], nativeEvery, function spyAdd1(item) {
    spy += item;
    return true;
  });
  return res.threw === false && res.value === true && spy === 3;
};

var array_every_x_esm_test2 = function test2() {
  var spy = '';
  var res = attempt_x_esm["a" /* default */].call(Object(to_object_x_esm["a" /* default */])('abc'), nativeEvery, function spyAdd2(item, index) {
    spy += item;
    return index !== 2;
  });
  return res.threw === false && res.value === false && spy === 'abc';
};

var array_every_x_esm_test3 = function test3() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeEvery, function spyAdd3(item, index) {
    spy += item;
    return index !== 1;
  });
  return res.threw === false && res.value === false && spy === 3;
};

var array_every_x_esm_test4 = function test4() {
  var spy = 0;
  var res = attempt_x_esm["a" /* default */].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeEvery, function spyAdd4(item) {
    spy += item;
    return true;
  });
  return res.threw === false && res.value === true && spy === 6;
};

var array_every_x_esm_test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var spy = null;
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeEvery, function spyAssign(item) {
      spy = item;
    });
    return res.threw === false && res.value === false && spy === div;
  }

  return true;
};

var array_every_x_esm_test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x_esm["a" /* default */])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm["a" /* default */].call([1], nativeEvery, testThis, 'x');
    return res.threw === false && res.value === false && spy === true;
  }

  return true;
};

var array_every_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeEvery.call("foo", function (_, __, context) {' + 'if (toBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x_esm["a" /* default */])(Function('nativeEvery', 'spy', 'toBoolean', fn), nativeEvery, spy, to_boolean_x_esm["a" /* default */]);
  return res.threw === false && res.value === false && spy.value !== true;
};

var array_every_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeEvery) && array_every_x_esm_test1() && array_every_x_esm_test2() && array_every_x_esm_test3() && array_every_x_esm_test4() && array_every_x_esm_test5() && array_every_x_esm_test6() && array_every_x_esm_test7();

var patchedEvery = function every(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x_esm["a" /* default */])(array);
  var args = [Object(assert_is_function_x_esm["a" /* default */])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeEvery.apply(array, args);
};

var array_every_x_esm_implementation = function every(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x_esm["a" /* default */])(callBack);

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params,babel/no-invalid-this */

    return i in arguments[2] && callBack.call(this, arguments[0], i, object) === false;
  };
  /* eslint-disable-next-line prefer-rest-params */


  return Object(array_any_x_esm["a" /* default */])(object, iteratee, arguments[2]) === false;
};
/**
 * This method tests whether all elements in the array pass the test implemented
 * by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  every array element; otherwise, `false`.
 */

var $every = array_every_x_esm_isWorking ? patchedEvery : array_every_x_esm_implementation;
/* harmony default export */ var array_every_x_esm = ($every);


// EXTERNAL MODULE: ./node_modules/array-all-x/dist/array-all-x.esm.js
var array_all_x_esm = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/array-map-x/dist/array-map-x.esm.js






var nm = [].map;
var nativeMap = typeof nm === 'function' && nm;

var identity = function identity(item) {
  return item;
};

var array_map_x_esm_test1 = function test1() {
  var res = attempt_x_esm["a" /* default */].call([1, 2], nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var array_map_x_esm_test2 = function test2() {
  var res = attempt_x_esm["a" /* default */].call(Object(to_object_x_esm["a" /* default */])('ab'), nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
};

var array_map_x_esm_test3 = function test3() {
  var res = attempt_x_esm["a" /* default */].call(function returnArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2), nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var array_map_x_esm_test4 = function test4() {
  var res = attempt_x_esm["a" /* default */].call({
    0: 1,
    2: 2,
    length: 3
  }, nativeMap, identity);
  return res.threw === false && res.value && res.value.length === 3 && !(1 in res.value);
};

var getResultTest5 = function getResultTest5(res, div) {
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
};

var array_map_x_esm_test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeMap, identity);
    return getResultTest5(res, div);
  }

  return true;
};

var array_map_x_esm_test6 = function test6() {
  var isStrict = function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return Object(to_boolean_x_esm["a" /* default */])(this) === false;
  }();

  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt_x_esm["a" /* default */].call([1], nativeMap, testThis, 'x');
    return res.threw === false && res.value && res.value.length === 1 && spy === true;
  }

  return true;
};

var array_map_x_esm_test7 = function test7() {
  var spy = {};
  var fn = 'return nativeMap.call("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  /* eslint-disable-next-line no-new-func */

  var res = Object(attempt_x_esm["a" /* default */])(Function('nativeMap', 'spy', 'castBoolean', fn), nativeMap, spy, to_boolean_x_esm["a" /* default */]);
  return res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
};

var array_map_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeMap) && array_map_x_esm_test1() && array_map_x_esm_test2() && array_map_x_esm_test3() && array_map_x_esm_test4() && array_map_x_esm_test5() && array_map_x_esm_test6() && array_map_x_esm_test7();

var patchedMap = function map(array, callBack
/* , thisArg */
) {
  Object(require_object_coercible_x_esm["a" /* default */])(array);
  var args = [Object(assert_is_function_x_esm["a" /* default */])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeMap.apply(array, args);
};

var array_map_x_esm_implementation = function map(array, callBack
/* , thisArg */
) {
  var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x_esm["a" /* default */])(callBack);
  var result = [];

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      result[i] = callBack.call(this, arguments[0], i, object);
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  Object(array_all_x_esm["a" /* default */])(object, iteratee, arguments[2]);
  return result;
};
/**
 * This method creates a new array with the results of calling a provided
 * function on every element in the calling array.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function that produces an element of the Array.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with each element being the result of the
 * callback function.
 */

var $map = array_map_x_esm_isWorking ? patchedMap : array_map_x_esm_implementation;
/* harmony default export */ var array_map_x_esm = ($map);


// CONCATENATED MODULE: ./node_modules/has-reflect-support-x/dist/has-reflect-support-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Indicates if `Reflect`exists.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
/* harmony default export */ var has_reflect_support_x_esm = ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect !== null);


// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/get-own-property-names-x/dist/get-own-property-names-x.esm.js
var get_own_property_names_x_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js
var get_own_property_symbols_x_esm = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/reflect-own-keys-x/dist/reflect-own-keys-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/* eslint-disable-next-line compat/compat */

var rok = Reflect.ownKeys;
var nativeOwnKeys = has_symbol_support_x_esm["a" /* default */] && typeof rok === 'function' && rok;
var reflect_own_keys_x_esm_concat = [].concat;

var reflect_own_keys_x_esm_isCorrectRes = function isCorrectRes(r, length) {
  return r.threw === false && Object(is_array_x_esm["a" /* default */])(r.value) && r.value.length === length;
};

var either = function either(args) {
  var _args = _slicedToArray(args, 3),
      r = _args[0],
      a = _args[1],
      b = _args[2];

  var x = r.value[0];
  var y = r.value[1];
  return x === a && y === b || x === b && y === a;
};

var reflect_own_keys_x_esm_test1 = function test1() {
  return Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, 1).threw;
};

var reflect_own_keys_x_esm_test2 = function test2() {
  var res = Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, {
    a: 1,
    b: 2
  });
  return reflect_own_keys_x_esm_isCorrectRes(res, 2) && either([res, 'a', 'b']);
};

var reflect_own_keys_x_esm_test3 = function test3() {
  if (has_reflect_support_x_esm) {
    /* eslint-disable-next-line compat/compat */
    var symbol = Symbol('');
    var testObj = {
      a: 1
    };
    testObj[symbol] = 2;
    var res = Object(attempt_x_esm["a" /* default */])(nativeOwnKeys, testObj);
    return reflect_own_keys_x_esm_isCorrectRes(res, 2) && either([res, 'a', symbol]);
  }

  return true;
};

var reflect_own_keys_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeOwnKeys) && reflect_own_keys_x_esm_test1() && reflect_own_keys_x_esm_test2() && reflect_own_keys_x_esm_test3();
var reflect_own_keys_x_esm_implementation = function ownKeys(target) {
  Object(assert_is_object_x_esm["a" /* default */])(target);
  return reflect_own_keys_x_esm_concat.call(Object(get_own_property_names_x_esm["a" /* default */])(target), Object(get_own_property_symbols_x_esm["a" /* default */])(target));
};
/**
 * This method returns an array of the target object's own property keys.
 * Its return value is equivalent to Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)).
 *
 * @param {*} target - The target object from which to get the own keys.
 * @throws {TypeError} If target is not an Object.
 * @returns {object} An Array of the target object's own property keys.
 */

var reflectOwnKeys = reflect_own_keys_x_esm_isWorking ? nativeOwnKeys : reflect_own_keys_x_esm_implementation;
/* harmony default export */ var reflect_own_keys_x_esm = (reflectOwnKeys);


// EXTERNAL MODULE: ./node_modules/json3/lib/json3.js
var json3 = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js
var object_keys_x_esm = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/same-value-zero-x/dist/same-value-zero-x.esm.js
var same_value_zero_x_esm = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/find-index-x/dist/find-index-x.esm.js
var find_index_x_esm = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/index-of-x/dist/index-of-x.esm.js
var index_of_x_esm = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/calculate-from-index-x/dist/calculate-from-index-x.esm.js
var calculate_from_index_x_esm = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/array-includes-x/dist/array-includes-x.esm.js
function array_includes_x_esm_slicedToArray(arr, i) { return array_includes_x_esm_arrayWithHoles(arr) || array_includes_x_esm_iterableToArrayLimit(arr, i) || array_includes_x_esm_nonIterableRest(); }

function array_includes_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function array_includes_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function array_includes_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ni = [].includes;
var nativeIncludes = typeof ni === 'function' && ni;

var getArrayLike = function getArrayLike() {
  return {
    1: 'a',
    2: NaN,
    3: -0,
    length: 5
  };
};

var array_includes_x_esm_test1 = function test1() {
  return attempt_x_esm["a" /* default */].call(null, nativeIncludes, 'a').threw;
};

var array_includes_x_esm_test2 = function test2() {
  var arr = getArrayLike();
  /* eslint-disable-next-line no-void */

  var res = attempt_x_esm["a" /* default */].call(arr, nativeIncludes, void 0, -1);
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_test3 = function test3() {
  var arr = getArrayLike();
  var res = attempt_x_esm["a" /* default */].call(arr, nativeIncludes, NaN);
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_test4 = function test4() {
  var arr = getArrayLike();
  var res = attempt_x_esm["a" /* default */].call(arr, nativeIncludes, 0);
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_test5 = function test5() {
  var testArr = [];
  testArr.length = 2;
  testArr[1] = null;
  /* eslint-disable-next-line no-void */

  var res = attempt_x_esm["a" /* default */].call(testArr, nativeIncludes, void 0);
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_test6 = function test6() {
  var res = attempt_x_esm["a" /* default */].call('abc', nativeIncludes, 'c');
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_test7 = function test7() {
  var res = attempt_x_esm["a" /* default */].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }('a', 'b', 'c'), nativeIncludes, 'c');
  return res.threw === false && res.value === true;
};

var array_includes_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeIncludes) && array_includes_x_esm_test1() && array_includes_x_esm_test2() && array_includes_x_esm_test3() && array_includes_x_esm_test4() && array_includes_x_esm_test5() && array_includes_x_esm_test6() && array_includes_x_esm_test7();

var patchedReduce = function includes(array, searchElement) {
  Object(require_object_coercible_x_esm["a" /* default */])(array);
  var args = [searchElement];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeIncludes.apply(array, args);
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns an index in the array, if an element in the array
 * satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @private
 * @param {Array} object - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index to start the search at.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


var findIdxFrom = function findIndexFrom(args) {
  var _args = array_includes_x_esm_slicedToArray(args, 3),
      object = _args[0],
      searchElement = _args[1],
      fromIndex = _args[2];

  var fIdx = fromIndex;
  var length = Object(to_length_x_esm["a" /* default */])(object.length);

  while (fIdx < length) {
    if (Object(same_value_zero_x_esm["a" /* default */])(object[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx += 1;
  }

  return -1;
};

var array_includes_x_esm_runFindIndex = function runFindIndex(obj) {
  var iterable = obj.iterable,
      args = obj.args,
      length = obj.length,
      searchElement = obj.searchElement;
  var fromIndex = Object(calculate_from_index_x_esm["a" /* default */])(iterable, args[2]);

  if (fromIndex >= length) {
    return -1;
  }

  if (fromIndex < 0) {
    fromIndex = 0;
  }

  return fromIndex > 0 ? findIdxFrom([iterable, searchElement, fromIndex]) > -1 : Object(find_index_x_esm["a" /* default */])(iterable, function predicate(element) {
    return Object(same_value_zero_x_esm["a" /* default */])(searchElement, element);
  }) > -1;
};

var array_includes_x_esm_implementation = function includes(array, searchElement) {
  var object = Object(to_object_x_esm["a" /* default */])(array);
  var iterable = Object(split_if_boxed_bug_x_esm["a" /* default */])(object);
  var length = Object(to_length_x_esm["a" /* default */])(iterable.length);

  if (length < 1) {
    return -1;
  }

  if (typeof searchElement === 'undefined') {
    /* eslint-disable-next-line prefer-rest-params */
    return array_includes_x_esm_runFindIndex({
      iterable: iterable,
      args: arguments,
      length: length,
      searchElement: searchElement
    });
  }
  /* eslint-disable-next-line prefer-rest-params */


  return Object(index_of_x_esm["a" /* default */])(iterable, searchElement, arguments[2], 'samevaluezero') > -1;
};
/**
 * This method determines whether an array includes a certain element,
 * returning true or false as appropriate.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The position in this array at which to begin
 *  searching for searchElement. A negative value searches from the index of
 *  array.length + fromIndex by asc. Defaults to 0.
 * @returns {boolean} `true` if searched element is included; otherwise `false`.
 */

var $includes = array_includes_x_esm_isWorking ? patchedReduce : array_includes_x_esm_implementation;
/* harmony default export */ var array_includes_x_esm = ($includes);


// EXTERNAL MODULE: ./node_modules/object-assign-x/dist/object-assign-x.esm.js
var object_assign_x_esm = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/string-pad-start-x/dist/string-pad-start-x.esm.js



var EMPTY_STRING = '';
var slice = EMPTY_STRING.slice;
var SPACE = ' '; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method pads the current string with another string (repeated, if needed)
 * so that the resulting string reaches the given length. The padding is applied
 * from the start (left) of the current string.
 *
 * @param {string} string - The string to pad.
 * @throws {TypeError} If target is null or undefined.
 * @param {number} targetLength - The length of the resulting string once the
 *  current string has been padded. If the value is lower than the current
 *  string's length, the current string will be returned as is.
 * @param {string} [padString] - The string to pad the current string with. If
 *  this string is too long to stay within the target length, it will be
 *  truncated and the left-most part will be applied. The default value for this
 *  parameter is " " (U+0020).
 * @returns {string} A String of the specified length with the pad string
 *  applied from the start.
 */
// eslint-enable jsdoc/check-param-names

var string_pad_start_x_esm_padStart = function padStart(string, targetLength) {
  var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));
  var stringLength = Object(to_length_x_esm["a" /* default */])(str.length);
  /* eslint-disable-next-line prefer-rest-params,no-void */

  var fillString = arguments.length > 2 ? arguments[2] : void 0;
  var filler = typeof fillString === 'undefined' ? EMPTY_STRING : Object(to_string_x_esm["a" /* default */])(fillString);

  if (filler === EMPTY_STRING) {
    filler = SPACE;
  }

  var intMaxLength = Object(to_length_x_esm["a" /* default */])(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? slice.call(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? slice.call(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
};

/* harmony default export */ var string_pad_start_x_esm = (string_pad_start_x_esm_padStart);


// CONCATENATED MODULE: ./node_modules/to-iso-string-x/dist/to-iso-string-x.esm.js
function to_iso_string_x_esm_slicedToArray(arr, i) { return to_iso_string_x_esm_arrayWithHoles(arr) || to_iso_string_x_esm_iterableToArrayLimit(arr, i) || to_iso_string_x_esm_nonIterableRest(); }

function to_iso_string_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function to_iso_string_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function to_iso_string_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* eslint-disable-next-line no-restricted-globals */

var globalIsFinite = isFinite;
var abs = Math.abs;
var _Date$prototype = Date.prototype,
    ntis = _Date$prototype.toISOString,
    getTime = _Date$prototype.getTime,
    getUTCFullYear = _Date$prototype.getUTCFullYear,
    getUTCMonth = _Date$prototype.getUTCMonth,
    getUTCDate = _Date$prototype.getUTCDate,
    getUTCHours = _Date$prototype.getUTCHours,
    getUTCMinutes = _Date$prototype.getUTCMinutes,
    getUTCSeconds = _Date$prototype.getUTCSeconds,
    getUTCMilliseconds = _Date$prototype.getUTCMilliseconds;
var nativeToISOString = typeof ntis === 'function' && ntis;
var join = [].join;

var to_iso_string_x_esm_test1 = function test1() {
  var res = attempt_x_esm["a" /* default */].call(new Date(0), nativeToISOString);
  return res.threw === false && res.value === '1970-01-01T00:00:00.000Z';
};

var to_iso_string_x_esm_test2 = function test2() {
  var res = attempt_x_esm["a" /* default */].call(new Date(-62198755200000), nativeToISOString);
  return res.threw === false && res.value.indexOf('-000001') > -1;
};

var to_iso_string_x_esm_test3 = function test3() {
  var res = attempt_x_esm["a" /* default */].call(new Date(-1), nativeToISOString);
  return res.threw === false && res.value === '1969-12-31T23:59:59.999Z';
};

var to_iso_string_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeToISOString) && to_iso_string_x_esm_test1() && to_iso_string_x_esm_test2() && to_iso_string_x_esm_test3();

var to_iso_string_x_esm_assertIsDate = function assertIsDate(date) {
  if (is_date_object_default()(date) === false) {
    throw new TypeError('toISOString called on incompatible receiver.');
  }

  return date;
};

var assertAdobe = function assertAdobe(date) {
  if (globalIsFinite(date) === false || globalIsFinite(getTime.call(date)) === false) {
    // Adobe Photoshop requires the second check.
    throw new RangeError('toISOString called on non-finite value.');
  }

  return date;
};

var to_iso_string_x_esm_stringify = function stringify(args) {
  var _args = to_iso_string_x_esm_slicedToArray(args, 3),
      date = _args[0],
      month = _args[1],
      year = _args[2]; // the date time string format is specified in 15.9.1.15.


  var parts = [month + 1, getUTCDate.call(date), getUTCHours.call(date), getUTCMinutes.call(date), getUTCSeconds.call(date)];
  var result = array_map_x_esm(parts, function iteratee(item) {
    // pad months, days, hours, minutes, and seconds to have two digits.
    return string_pad_start_x_esm(item, 2, '0');
  });
  var dateStr = "".concat(year, "-").concat(join.call(Object(array_slice_x_esm["a" /* default */])(result, 0, 2), '-')); // pad milliseconds to have three digits.

  var msStr = string_pad_start_x_esm(getUTCMilliseconds.call(date), 3, '0');
  var timeStr = "".concat(join.call(Object(array_slice_x_esm["a" /* default */])(result, 2), ':'), ".").concat(msStr);
  return "".concat(dateStr, "T").concat(timeStr, "Z");
};

var patchedToIsoString = function toISOString(date) {
  to_iso_string_x_esm_assertIsDate(date);
  assertAdobe(date);
  return nativeToISOString.call(date);
};

var getSign = function getSign(year) {
  if (year < 0) {
    return '-';
  }

  if (year > 9999) {
    return '+';
  }

  return '';
};

var to_iso_string_x_esm_implementation = function toISOString(date) {
  to_iso_string_x_esm_assertIsDate(date);
  assertAdobe(date);
  var year = getUTCFullYear.call(date);
  var month = getUTCMonth.call(date); // see https://github.com/es-shims/es5-shim/issues/111

  /* eslint-disable-next-line no-bitwise */

  year += month / 12 >> 0; // floor

  month = (month % 12 + 12) % 12;
  var sign = getSign(year);
  year = sign + string_pad_start_x_esm(abs(year), sign ? 6 : 4, '0');
  return to_iso_string_x_esm_stringify([date, month, year]);
};
/**
 * This method returns a string in simplified extended ISO format (ISO 8601),
 * which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or
 * ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC
 * offset, as denoted by the suffix "Z".
 *
 * @param {object} date - A Date object.
 * @throws {TypeError} If date is not a Date object.
 * @throws {RangeError} If date is invalid.
 * @returns {string} Given date in the ISO 8601 format according to universal time.
 */

var $toISOString = to_iso_string_x_esm_isWorking ? patchedToIsoString : to_iso_string_x_esm_implementation;
/* harmony default export */ var to_iso_string_x_esm = ($toISOString);


// EXTERNAL MODULE: ./node_modules/collections-x/dist/collections-x.esm.js + 8 modules
var collections_x_esm = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js + 1 modules
var to_integer_x_esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js
var is_regexp_x_esm = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/string-starts-with-x/dist/string-starts-with-x.esm.js






var ERR_MSG = 'Cannot call method "startsWith" with a regex';
var sw = ERR_MSG.startsWith;
var nativeStartsWith = typeof sw === 'function' && sw;

var string_starts_with_x_esm_test1 = function test1() {
  return attempt_x_esm["a" /* default */].call('/a/', nativeStartsWith, /a/).threw;
};

var string_starts_with_x_esm_test2 = function test2() {
  var res = attempt_x_esm["a" /* default */].call('abc', nativeStartsWith, 'a', 1 / 0);
  return res.threw === false && res.value === false;
};

var string_starts_with_x_esm_test3 = function test3() {
  var res = attempt_x_esm["a" /* default */].call(123, nativeStartsWith, '1');
  return res.threw === false && res.value === true;
};

var string_starts_with_x_esm_test4 = function test4() {
  return attempt_x_esm["a" /* default */].call(null, nativeStartsWith, 'n').threw;
};

var string_starts_with_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeStartsWith) && string_starts_with_x_esm_test1() && string_starts_with_x_esm_test2() && string_starts_with_x_esm_test3() && string_starts_with_x_esm_test4();

var patchedStartsWith = function startsWith(string, searchString) {
  var str = Object(require_object_coercible_x_esm["a" /* default */])(string);

  if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
    throw new TypeError(ERR_MSG);
  }

  var args = [searchString];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeStartsWith.apply(str, args);
}; // Firefox (< 37?) and IE 11 TP have a non-compliant startsWith implementation


var string_starts_with_x_esm_implementation = function startsWith(string, searchString) {
  var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));

  if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
    throw new TypeError(ERR_MSG);
  }

  var searchStr = Object(to_string_x_esm["a" /* default */])(searchString);
  /* eslint-disable-next-line prefer-rest-params */

  var position = arguments.length > 2 ? Object(to_integer_x_esm["a" /* default */])(arguments[2]) : 0;
  var start = position > 0 ? position : 0;
  return str.slice(start, start + searchStr.length) === searchStr;
};
/**
 * This method determines whether a string begins with the characters of a
 * specified string, returning true or false as appropriate.
 *
 * @param {string} string - The string to be search.
 * @throws {TypeError} If string is null or undefined.
 * @param {string} searchString - The characters to be searched for at the start of this string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [position] -The position in this string at which to begin searching for searchString; defaults to 0.
 * @returns {boolean} `true` if the given characters are found at the beginning of the string; otherwise, `false`.
 */

var $startsWith = string_starts_with_x_esm_isWorking ? patchedStartsWith : string_starts_with_x_esm_implementation;
/* harmony default export */ var string_starts_with_x_esm = ($startsWith);


// CONCATENATED MODULE: ./node_modules/string-includes-x/dist/string-includes-x.esm.js





var string_includes_x_esm_EMPTY_STRING = '';
var string_includes_x_esm_ni = string_includes_x_esm_EMPTY_STRING.includes,
    indexOf = string_includes_x_esm_EMPTY_STRING.indexOf;
var string_includes_x_esm_nativeIncludes = typeof string_includes_x_esm_ni === 'function' && string_includes_x_esm_ni;

var string_includes_x_esm_test1 = function test1() {
  return attempt_x_esm["a" /* default */].call('/a/', string_includes_x_esm_nativeIncludes, /a/).threw;
};

var string_includes_x_esm_test2 = function test2() {
  var res = attempt_x_esm["a" /* default */].call('abc', string_includes_x_esm_nativeIncludes, 'a', Infinity);
  return res.threw === false && res.value === false;
};

var string_includes_x_esm_test3 = function test3() {
  var res = attempt_x_esm["a" /* default */].call(123, string_includes_x_esm_nativeIncludes, '2');
  return res.threw === false && res.value === true;
};

var string_includes_x_esm_test4 = function test4() {
  var res = attempt_x_esm["a" /* default */].call(null, string_includes_x_esm_nativeIncludes, 'u');
  return res.threw;
};

var string_includes_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(string_includes_x_esm_nativeIncludes) && string_includes_x_esm_test1() && string_includes_x_esm_test2() && string_includes_x_esm_test3() && string_includes_x_esm_test4();

var string_includes_x_esm_assertRegex = function assertRegex(searchString) {
  if (Object(is_regexp_x_esm["a" /* default */])(searchString)) {
    throw new TypeError('"includes" does not accept a RegExp');
  }

  return searchString;
};

var patchedIncludes = function includes(string, searchString) {
  Object(require_object_coercible_x_esm["a" /* default */])(string);
  var args = [string_includes_x_esm_assertRegex(searchString)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return string_includes_x_esm_nativeIncludes.apply(string, args);
};

var string_includes_x_esm_implementation = function includes(string, searchString) {
  var str = Object(to_string_x_esm["a" /* default */])(Object(require_object_coercible_x_esm["a" /* default */])(string));
  string_includes_x_esm_assertRegex(searchString);
  var args = [Object(to_string_x_esm["a" /* default */])(searchString)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  } // Somehow this trick makes method 100% compat with the spec.


  return indexOf.apply(str, args) !== -1;
};
/**
 * This method determines whether one string may be found within another string,
 * returning true or false as appropriate.
 *
 * @param {string} string - The target string.
 * @throws {TypeError} If target is null or undefined.
 * @param {string} searchString - A string to be searched for within the
 *  target string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [position] -The position within the string at which to begin
 *  searching for searchString.(defaults to 0).
 * @returns {boolean} `true` if the given string is found anywhere within the
 *  search string; otherwise, `false` if not.
 */

var string_includes_x_esm_$includes = string_includes_x_esm_isWorking ? patchedIncludes : string_includes_x_esm_implementation;
/* harmony default export */ var string_includes_x_esm = (string_includes_x_esm_$includes);


// EXTERNAL MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js
var math_clamp_x_esm = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js
var array_like_slice_x_esm = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/array-difference-x/dist/array-difference-x.esm.js
function array_difference_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {...Array} [exclude] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
// eslint-enable jsdoc/check-param-names

var array_difference_x_esm_difference = function difference(array) {
  var _this = this;

  if (Object(is_nil_x_esm["a" /* default */])(array)) {
    return [];
  }
  /* eslint-disable-next-line prefer-rest-params */


  var excludes = Object(array_like_slice_x_esm["a" /* default */])(arguments, 1);
  return Object(array_filter_x_esm["a" /* default */])(array, function (value) {
    var _this2 = this;

    array_difference_x_esm_newArrowCheck(this, _this);

    return Object(array_some_x_esm["a" /* default */])(excludes, function (exclude) {
      array_difference_x_esm_newArrowCheck(this, _this2);

      return Object(is_nil_x_esm["a" /* default */])(exclude) === false && array_includes_x_esm(exclude, value);
    }.bind(this)) === false;
  }.bind(this));
};

/* harmony default export */ var array_difference_x_esm = (array_difference_x_esm_difference);


// CONCATENATED MODULE: ./node_modules/array-intersection-x/dist/array-intersection-x.esm.js





var shift = [].shift;

var notNill = function notNil(value) {
  return Object(is_nil_x_esm["a" /* default */])(value) === false;
};

var array_intersection_x_esm_createReducer = function createReducer(arrays) {
  return function reducer(acc, value) {
    var isIncluded = Object(array_some_x_esm["a" /* default */])(arrays, function exclude(array) {
      return array_includes_x_esm(array, value) === false;
    });

    if (isIncluded === false && array_includes_x_esm(acc, value) === false) {
      acc[acc.length] = value;
    }

    return acc;
  };
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [array] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
// eslint-enable jsdoc/check-param-names


var array_intersection_x_esm_intersection = function intersection() {
  var arrays = Object(array_filter_x_esm["a" /* default */])(arguments, notNill);
  /* eslint-disable-line prefer-rest-params */

  if (arrays.length < 1) {
    return [];
  }

  return Object(array_reduce_x_esm["a" /* default */])(shift.call(arrays), array_intersection_x_esm_createReducer(arrays), []);
};

/* harmony default export */ var array_intersection_x_esm = (array_intersection_x_esm_intersection);


// CONCATENATED MODULE: ./node_modules/array-union-x/dist/array-union-x.esm.js




var array_union_x_esm_addNotIncluded = function addNotIncluded(acc, value) {
  if (array_includes_x_esm(acc, value) === false) {
    acc[acc.length] = value;
  }

  return acc;
};

var array_union_x_esm_reduceArgs = function reduceArgs(acc, arg) {
  return Object(is_nil_x_esm["a" /* default */])(arg) ? acc : Object(array_reduce_x_esm["a" /* default */])(arg, array_union_x_esm_addNotIncluded, acc);
};
/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...Array} [args] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */


var array_union_x_esm_union = function union() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(array_reduce_x_esm["a" /* default */])(args, array_union_x_esm_reduceArgs, []);
};

/* harmony default export */ var array_union_x_esm = (array_union_x_esm_union);


// CONCATENATED MODULE: ./node_modules/inspect-x/dist/inspect-x.esm.js
function inspect_x_esm_slicedToArray(arr, i) { return inspect_x_esm_arrayWithHoles(arr) || inspect_x_esm_iterableToArrayLimit(arr, i) || inspect_x_esm_nonIterableRest(); }

function inspect_x_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function inspect_x_esm_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function inspect_x_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function inspect_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { inspect_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { inspect_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return inspect_x_esm_typeof(obj); }






















































var EMPTY_ARRAY = [];
var RegExpCtr = /none/.constructor;
var inspect_x_esm_EMPTY_STRING = '';
var EMPTY_OBJECT = {};
var call = is_function_x_esm["a" /* default */].call;
/* eslint-disable-next-line compat/compat */

var hasSet = typeof Set === 'function' && Object(is_set_x_esm["a" /* default */])(new Set());
/* eslint-disable-next-line compat/compat */

var testSet = hasSet && new Set(['SetSentinel']);
var setForEach = hasSet && bind_x_esm(call, testSet.forEach);
var setValues = hasSet && bind_x_esm(call, testSet.values);
/* eslint-disable-next-line compat/compat */

var hasMap = typeof Map === 'function' && Object(is_map_x_esm["a" /* default */])(new Map());
/* eslint-disable-next-line compat/compat */

var testMap = hasMap && new Map([[1, 'MapSentinel']]);
var mapForEach = hasMap && bind_x_esm(call, testMap.forEach);
var mapValues = hasMap && bind_x_esm(call, testMap.values);
/* eslint-disable-next-line compat/compat */

var symbolToString = has_symbol_support_x_esm["a" /* default */] && bind_x_esm(call, Symbol.prototype.toString);
/* eslint-disable-next-line compat/compat */

var symbolValueOf = has_symbol_support_x_esm["a" /* default */] && bind_x_esm(call, Symbol.prototype.valueOf);
var oSeal = EMPTY_OBJECT.constructor.seal;
var objectSeal = Object(is_function_x_esm["a" /* default */])(oSeal) ? oSeal : function seal(value) {
  return value;
};
var regexpToString = bind_x_esm(call, RegExpCtr.prototype.toString);
var regexpTest = bind_x_esm(call, RegExpCtr.prototype.test);
var errorToString = bind_x_esm(call, Error.prototype.toString);
var numberToString = bind_x_esm(call, 0 .toString);
var booleanToString = bind_x_esm(call, true.toString);
var inspect_x_esm_concat = bind_x_esm(call, EMPTY_ARRAY.concat, EMPTY_ARRAY);
var inspect_x_esm_join = bind_x_esm(call, EMPTY_ARRAY.join);
var push = bind_x_esm(call, EMPTY_ARRAY.push);
var inspect_x_esm_getTime = bind_x_esm(call, Date.prototype.getTime);
var replace = bind_x_esm(call, inspect_x_esm_EMPTY_STRING.replace);
var strSlice = bind_x_esm(call, inspect_x_esm_EMPTY_STRING.slice);
var propertyIsEnumerable = bind_x_esm(call, EMPTY_OBJECT.propertyIsEnumerable);
/* eslint-disable-next-line compat/compat */

var customInspectSymbol = has_symbol_support_x_esm["a" /* default */] ? Symbol('inspect.custom') : '_inspect.custom_';
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 * Values may supply their own custom `inspect(depth, opts)` functions,
 * when called they receive the current depth in the recursive inspection,
 * as well as the options object passed to `inspect`.
 *
 * @param {object} obj - The object to print out.
 * @param {object} [opts] - Options object that alters the out.
 * @returns {string} The string representation.
 */

var $inspect;
var $fmtValue;

var inspect_x_esm_isFalsey = function isFalsey(value) {
  return Object(to_boolean_x_esm["a" /* default */])(value) === false;
};

var supportsClasses;

try {
  /* eslint-disable-next-line no-new-func */
  Function('return class My {}')();
  supportsClasses = true;
} catch (ignore) {// empty
}

var inspect_x_esm_isClass = function isClass(value) {
  return supportsClasses ? Object(is_function_x_esm["a" /* default */])(value, true) && Object(is_function_x_esm["a" /* default */])(value) === false : false;
};

var supportsGetSet;

try {
  /* eslint-disable-next-line no-void */
  var testVar = void 0;
  var testObject = Object(object_define_property_x_esm["a" /* default */])({}, 'defaultOptions', {
    get: function get() {
      return testVar;
    },
    set: function set(val) {
      testVar = val;
      return testVar;
    }
  });
  testObject.defaultOptions = 'test';
  supportsGetSet = testVar === 'test' && testObject.defaultOptions === 'test';
} catch (ignore) {// empty
}

var pluralEnding = function pluralEnding(number) {
  return number > 1 ? 's' : inspect_x_esm_EMPTY_STRING;
};

var isDigits = function isDigits(key) {
  return regexpTest(/^\d+$/, key);
};

var inspect_x_esm_appendMissing = function appendMissing(array, values) {
  return inspect_x_esm_concat(array, array_difference_x_esm(values, array));
};

var inspect_x_esm_promote = function promote(array, values) {
  return inspect_x_esm_concat(values, array_difference_x_esm(array, values));
};

var missingError;
var errProps;

try {
  // noinspection ExceptionCaughtLocallyJS
  throw new Error('test');
} catch (e) {
  errProps = array_union_x_esm(Object(object_keys_x_esm["a" /* default */])(new Error()), Object(object_keys_x_esm["a" /* default */])(e));
  var errorString = errorToString(e);
  var errorStack = e.stack;

  if (errorStack) {
    var errorRx = new RegExpCtr("^".concat(errorString));

    if (regexpTest(errorRx, errorStack) === false) {
      missingError = true;
    }
  }
}

if (is_date_object_default()(Date.prototype)) {
  isDate = function $isDate(value) {
    try {
      inspect_x_esm_getTime(value);
      return true;
    } catch (ignore) {
      return false;
    }
  };
}

var shimmedDate;
var dateProps = Object(object_keys_x_esm["a" /* default */])(Date);

if (dateProps.length > 0) {
  var datePropsCheck = ['now', 'UTC', 'parse'];
  shimmedDate = array_every_x_esm(datePropsCheck, function predicate(prop) {
    return array_includes_x_esm(dateProps, prop);
  }) && array_includes_x_esm(Object(object_keys_x_esm["a" /* default */])(new Date()), 'constructor');
}
/* eslint-disable-next-line lodash/prefer-noop */


var testFunc1 = function test1() {};

var fnSupportsName = testFunc1.name === 'test1';
var hiddenFuncCtr = array_includes_x_esm(reflect_own_keys_x_esm(testFunc1.prototype), 'constructor') === false;
var wantedFnProps = ['length', 'name', 'prototype'];
var fnPropsCheck = fnSupportsName ? Object(array_slice_x_esm["a" /* default */])(wantedFnProps) : Object(array_filter_x_esm["a" /* default */])(wantedFnProps, function predicate(prop) {
  return prop !== 'name';
});
var funcKeys = reflect_own_keys_x_esm(testFunc1);
var unwantedFnProps = array_intersection_x_esm(['arguments', 'caller'], funcKeys);
var mustFilterFnProps = array_difference_x_esm(fnPropsCheck, funcKeys).length > 0;

if (mustFilterFnProps === false) {
  mustFilterFnProps = Object(array_some_x_esm["a" /* default */])(array_intersection_x_esm(funcKeys, wantedFnProps), function predicate(key, index) {
    return wantedFnProps[index] !== key;
  });
}

var inspectDefaultOptions = objectSeal({
  breakLength: 60,
  colors: false,
  customInspect: true,
  depth: 2,
  maxArrayLength: 100,
  showHidden: false,
  showProxy: false
});

var isBooleanType = function isBooleanType(arg) {
  return typeof arg === 'boolean';
};

var isNumberType = function isNumberType(arg) {
  return typeof arg === 'number';
};

var isStringType = function isStringType(arg) {
  return typeof arg === 'string';
};

var isSymbolType = function isSymbolType(arg) {
  return inspect_x_esm_typeof(arg) === 'symbol';
};

var inspect_x_esm_isMapIterator = function isMapIterator(value) {
  if (hasMap === false || Object(is_object_like_x_esm["a" /* default */])(value) === false) {
    return false;
  }

  try {
    return value.next.call(mapValues(testMap)).value === 'MapSentinel';
  } catch (ignore) {// empty
  }

  return false;
};

var inspect_x_esm_isSetIterator = function isSetIterator(value) {
  if (hasSet === false || Object(is_object_like_x_esm["a" /* default */])(value) === false) {
    return false;
  }

  try {
    return value.next.call(setValues(testSet)).value === 'SetSentinel';
  } catch (ignore) {// empty
  }

  return false;
};

var inspect_x_esm_filterIndexes = function filterIndexes(keys, length) {
  return Object(array_filter_x_esm["a" /* default */])(keys, function predicate(key) {
    return isSymbolType(key) || key < 0 || key > length || key % 1 !== 0;
  });
};

var stylizeWithColor = function stylizeWithColor(str, styleType) {
  var style = $inspect.styles[styleType];

  if (style) {
    var colors = $inspect.colors[style];
    return "\x1B[".concat(colors[0], "m").concat(str, "\x1B[").concat(colors[1], "m");
  }

  return str;
};

var stylizeNoColor = function stylizeNoColor(str) {
  return str;
};

var inspect_x_esm_getNameSep = function getNameSep(obj) {
  var name = get_function_name_x_esm(obj);
  return name ? ": ".concat(name) : name;
};

var inspect_x_esm_getConstructorOf = function getConstructorOf(obj) {
  var o = obj;
  var maxLoop = 100;

  while (Object(is_nil_x_esm["a" /* default */])(o) === false && maxLoop >= 0) {
    o = Object(to_object_x_esm["a" /* default */])(o);
    var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(o, 'constructor');

    if (descriptor && descriptor.value) {
      return descriptor.value;
    }

    o = Object(get_prototype_of_x_esm["a" /* default */])(o);
    maxLoop -= 1;
  }

  return null;
};

var inspect_x_esm_isSub = function isSub(value) {
  if (supportsClasses !== true || is_primitive_default()(value)) {
    return false;
  }

  var constructor = inspect_x_esm_getConstructorOf(value);
  return Object(is_function_x_esm["a" /* default */])(constructor) === false && Object(is_function_x_esm["a" /* default */])(constructor, true);
};

var inspect_x_esm_getSubName = function getSubName(value, name) {
  if (inspect_x_esm_isSub(value)) {
    var subName = get_function_name_x_esm(inspect_x_esm_getConstructorOf(value));

    if (subName && subName !== name) {
      return subName;
    }
  }

  return name || get_function_name_x_esm(inspect_x_esm_getConstructorOf(value));
};

var inspect_x_esm_fmtNumber = function fmtNumber(ctx, value) {
  // Format -0 as '-0'.
  return ctx.stylize(object_is_default()(value, -0) ? '-0' : numberToString(value), 'number');
};

var fmtPrimitiveReplacers = [[/^"|"$/g, inspect_x_esm_EMPTY_STRING], [/'/g, "\\'"], [/\\"/g, '"']];

var fmtPrimitiveReplace = function _fmtPrimitiveReplace(acc, pair) {
  return replace(acc, pair[0], pair[1]);
};

var inspect_x_esm_fmtPrimitive = function fmtPrimitive(ctx, value) {
  if (Object(is_nil_x_esm["a" /* default */])(value)) {
    var str = Object(to_string_x_esm["a" /* default */])(value);
    return ctx.stylize(str, str);
  }

  if (isStringType(value)) {
    return ctx.stylize("'".concat(Object(array_reduce_x_esm["a" /* default */])(fmtPrimitiveReplacers, fmtPrimitiveReplace, Object(json3["stringify"])(value)), "'"), 'string');
  }

  if (isNumberType(value)) {
    return inspect_x_esm_fmtNumber(ctx, value);
  }

  if (isBooleanType(value)) {
    return ctx.stylize(booleanToString(value), 'boolean');
  } // es6 symbol primitive


  if (isSymbolType(value)) {
    return ctx.stylize(symbolToString(value), 'symbol');
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var fmtPrimNoColor = function fmtPrimNoColor(ctx, value) {
  var stylize = ctx.stylize;
  ctx.stylize = stylizeNoColor;
  var str = inspect_x_esm_fmtPrimitive(ctx, value);
  ctx.stylize = stylize;
  return str;
};

var recurse = function recurse(depth) {
  return depth === null ? null : depth - 1;
};

var fmtPropReplacers = [[/'/g, "\\'"], [/\\"/g, '"'], [/(^"|"$)/g, "'"], [/\\\\/g, '\\']];

var fmtPropReplace = function _fmtPropReplace(acc, pair) {
  return replace(acc, pair[0], pair[1]);
};

var fmtPropReplacer1 = [/\n/g, '\n  '];
var fmtPropReplacer2 = [/(^|\n)/g, '\n   '];
var fmtPropTestRx = /^"[\w$]+"$/;

var inspect_x_esm_fmtProp = function fmtProp(args) {
  var _args = inspect_x_esm_slicedToArray(args, 6),
      ctx = _args[0],
      value = _args[1],
      depth = _args[2],
      visibleKeys = _args[3],
      key = _args[4],
      arr = _args[5];

  var desc = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(value, key) || {
    value: value[key]
  };
  /*
  // this is a fix for broken FireFox, should not be needed with es6-shim
  if (key === 'size' && (isSet(value) || isMap(value) && isFunction(value.size)) {
    desc.value = value.size();
  }
  */

  var name;

  if (array_includes_x_esm(visibleKeys, key) === false) {
    if (key === 'BYTES_PER_ELEMENT' && inspect_x_esm_isFalsey(value.BYTES_PER_ELEMENT) && is_typed_array_default()(value)) {
      var _constructor = inspect_x_esm_getConstructorOf(value);

      if (_constructor) {
        desc.value = _constructor.BYTES_PER_ELEMENT;
      }
    } else if (isSymbolType(key)) {
      name = "[".concat(ctx.stylize(symbolToString(key), 'symbol'), "]");
    } else {
      name = "[".concat(key, "]");
    }
  }

  var str;

  if (desc.get) {
    str = ctx.stylize(desc.set ? '[Getter/Setter]' : '[Getter]', 'special');
  } else if (desc.set) {
    str = ctx.stylize('[Setter]', 'special');
  } else {
    var formattedStr = $fmtValue([ctx, desc.value, recurse(depth), key === 'prototype']);

    if (string_includes_x_esm(formattedStr, '\n')) {
      var replacer = arr ? fmtPropReplacer1 : fmtPropReplacer2;
      str = replace(formattedStr, replacer[0], replacer[1]);
    } else {
      str = formattedStr;
    }
  }

  if (typeof name === 'undefined') {
    if (arr && isDigits(key)) {
      return str;
    }

    var serialisedKey = Object(json3["stringify"])(key);

    if (regexpTest(fmtPropTestRx, serialisedKey)) {
      name = ctx.stylize(strSlice(serialisedKey, 1, -1), 'name');
    } else {
      name = ctx.stylize(Object(array_reduce_x_esm["a" /* default */])(fmtPropReplacers, fmtPropReplace, serialisedKey), 'string');
    }
  }

  return "".concat(name, ": ").concat(str);
};

var inspect_x_esm_fmtObject = function fmtObject(args) {
  var _args2 = inspect_x_esm_slicedToArray(args, 5),
      ctx = _args2[0],
      value = _args2[1],
      depth = _args2[2],
      visibleKeys = _args2[3],
      keys = _args2[4];

  return array_map_x_esm(keys, function mapFmObject(key) {
    return inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, key, false]);
  });
};

var getMoreItemText = function getMoreItemText(remaining) {
  return "... ".concat(remaining, " more item").concat(pluralEnding(remaining));
};

var getEmptyItemText = function getEmptyItemText(emptyItems) {
  return "<".concat(emptyItems, " empty item").concat(pluralEnding(emptyItems), ">");
};

var inspect_x_esm_filterOutIndexes = function filterOutIndexes(keys) {
  return Object(array_filter_x_esm["a" /* default */])(keys, function predicate(key) {
    return isSymbolType(key) || isDigits(key) === false;
  });
};

var inspect_x_esm_fmtArray = function fmtArray(args) {
  var _args3 = inspect_x_esm_slicedToArray(args, 5),
      ctx = _args3[0],
      value = _args3[1],
      depth = _args3[2],
      visibleKeys = _args3[3],
      keys = _args3[4];

  var length = value.length;
  var maxLength = Object(math_clamp_x_esm["a" /* default */])(length, 0, ctx.maxArrayLength);
  var lastIndex = 0;
  var nextIndex = 0;
  var output = [];
  var moreItems = Object(array_some_x_esm["a" /* default */])(value, function predicate(item, index) {
    if (index !== nextIndex) {
      push(output, ctx.stylize(getEmptyItemText(index - lastIndex - 1), 'undefined'));
    }

    push(output, inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, numberToString(index), true]));
    lastIndex = index;
    nextIndex = index + 1;
    return nextIndex >= maxLength;
  });
  var remaining = length - nextIndex;

  if (remaining > 0) {
    if (moreItems) {
      push(output, getMoreItemText(remaining));
    } else {
      push(output, ctx.stylize(getEmptyItemText(remaining), 'undefined'));
    }
  }

  var fmtdProps = array_map_x_esm(inspect_x_esm_filterOutIndexes(keys), function iteratee(key) {
    return inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, key, true]);
  });
  return inspect_x_esm_concat(output, fmtdProps);
};

var inspect_x_esm_fmtTypedArray = function fmtTypedArray(args) {
  var _args4 = inspect_x_esm_slicedToArray(args, 5),
      ctx = _args4[0],
      value = _args4[1],
      depth = _args4[2],
      visibleKeys = _args4[3],
      keys = _args4[4];

  var length = value.length;
  var maxLength = Object(math_clamp_x_esm["a" /* default */])(length, 0, ctx.maxArrayLength);
  var output = [];
  output.length = maxLength;
  var moreItems = Object(array_some_x_esm["a" /* default */])(value, function predicate(item, index) {
    if (index >= maxLength) {
      return true;
    }

    output[index] = inspect_x_esm_fmtNumber(ctx, value[index]);
    return false;
  });

  if (moreItems) {
    push(output, getMoreItemText(length - maxLength));
  }

  var fmtdProps = array_map_x_esm(inspect_x_esm_filterOutIndexes(keys), function iteratee(key) {
    return inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, key, true]);
  });
  return inspect_x_esm_concat(output, fmtdProps);
};

var inspect_x_esm_fmtSet = function fmtSet(args) {
  var _args5 = inspect_x_esm_slicedToArray(args, 5),
      ctx = _args5[0],
      value = _args5[1],
      depth = _args5[2],
      visibleKeys = _args5[3],
      keys = _args5[4];

  var output = [];
  setForEach(value, function iteratee(v) {
    push(output, $fmtValue([ctx, v, recurse(depth)]));
  });
  var fmtdProps = array_map_x_esm(keys, function iteratee(key) {
    return inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, key, false]);
  });
  return inspect_x_esm_concat(output, fmtdProps);
};

var inspect_x_esm_fmtMap = function fmtMap(args) {
  var _args6 = inspect_x_esm_slicedToArray(args, 5),
      ctx = _args6[0],
      value = _args6[1],
      depth = _args6[2],
      visibleKeys = _args6[3],
      keys = _args6[4];

  var r = recurse(depth);
  var output = [];
  mapForEach(value, function iteratee(v, k) {
    push(output, "".concat($fmtValue([ctx, k, r]), " => ").concat($fmtValue([ctx, v, r])));
  });
  var fmtdProps = array_map_x_esm(keys, function iteratee(key) {
    return inspect_x_esm_fmtProp([ctx, value, depth, visibleKeys, key, false]);
  });
  return inspect_x_esm_concat(output, fmtdProps);
};

var reSingle = new RegExpCtr("\\{[".concat(white_space_x_esm["a" /* default */], "]+\\}"));
/* eslint-disable-next-line no-control-regex */

var lengthReduceRx = /\u001b\[\d\d?m/g;

var lengthReduce = function lengthReduce(prev, cur) {
  return prev + replace(cur, lengthReduceRx, inspect_x_esm_EMPTY_STRING).length + 1;
};

var inspect_x_esm_reduceToSingleString = function reduceToSingleString(args) {
  var _args7 = inspect_x_esm_slicedToArray(args, 4),
      out = _args7[0],
      base = _args7[1],
      braces = _args7[2],
      breakLength = _args7[3];

  var result;

  if (Object(array_reduce_x_esm["a" /* default */])(out, lengthReduce, 0) > breakLength) {
    // If the opening "brace" is too large, like in the case of "Set {",
    // we need to force the first item to be on the next line or the
    // items will not line up correctly.
    var layoutBase = base === inspect_x_esm_EMPTY_STRING && braces[0].length === 1 ? inspect_x_esm_EMPTY_STRING : "".concat(base, "\n ");
    result = "".concat(braces[0] + layoutBase, " ").concat(inspect_x_esm_join(out, ',\n  '), " ").concat(braces[1]);
  } else {
    result = "".concat(braces[0] + base, " ").concat(inspect_x_esm_join(out, ', '), " ").concat(braces[1]);
  }

  return replace(result, reSingle, '{}');
};

var inspect_x_esm_fmtDate = function fmtDate(value) {
  return is_nan_default()(inspect_x_esm_getTime(value)) ? 'Invalid Date' : to_iso_string_x_esm(value);
};

var inspect_x_esm_fmtError = function fmtError(value) {
  var stack = value.stack;

  if (stack) {
    if (supportsClasses) {
      var subName = inspect_x_esm_getSubName(value);

      if (subName && string_starts_with_x_esm(stack, subName) === false) {
        var msg = value.message;
        return replace(stack, errorToString(value), subName + (msg ? ": ".concat(msg) : inspect_x_esm_EMPTY_STRING));
      }
    } else if (missingError) {
      return "".concat(errorToString(value), "\n").concat(stack);
    }
  }

  return stack || "[".concat(errorToString(value), "]");
};

var typedArrayKeys = ['BYTES_PER_ELEMENT', 'length', 'byteLength', 'byteOffset', 'buffer'];
var dataViewKeys = ['byteLength', 'byteOffset', 'buffer'];
var arrayBufferKeys = ['byteLength'];
var collectionKeys = ['size'];
var arrayKeys = ['length'];
var errorKeys = ['message'];

$fmtValue = function fmtValue(args) {
  var _args8 = inspect_x_esm_slicedToArray(args, 4),
      ctx = _args8[0],
      value = _args8[1],
      depth = _args8[2],
      isProto = _args8[3]; // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it


  if (ctx.customInspect && value) {
    var maybeCustomInspect = value[customInspectSymbol] || value.inspect;

    if (Object(is_function_x_esm["a" /* default */])(maybeCustomInspect)) {
      // Filter out the util module, its inspect function is special
      if (maybeCustomInspect !== $inspect) {
        var _constructor2 = inspect_x_esm_getConstructorOf(value); // Also filter out any prototype objects using the circular check.


        var isCircular = _constructor2 && _constructor2.prototype === value;

        if (isCircular === false) {
          var ret = maybeCustomInspect.call(value, depth, ctx); // If the custom inspection method returned `this`, don't go into
          // infinite recursion.

          if (ret !== value) {
            return isStringType(ret) ? ret : $fmtValue([ctx, ret, depth]);
          }
        }
      }
    }
  } // Primitive types cannot have properties


  var primitive = inspect_x_esm_fmtPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var visibleKeys = Object(object_keys_x_esm["a" /* default */])(value);

  if (visibleKeys.length > 0) {
    if (shimmedDate && is_date_object_default()(value)) {
      visibleKeys = Object(array_filter_x_esm["a" /* default */])(visibleKeys, function predicate(key) {
        return key !== 'constructor';
      });
    } else if (errProps.length > 0 && is_error_x_esm(value)) {
      visibleKeys = Object(array_filter_x_esm["a" /* default */])(visibleKeys, function predicate(key) {
        return array_includes_x_esm(errProps, key) === false;
      });
    }
  }

  var keys;

  if (ctx.showHidden) {
    keys = reflect_own_keys_x_esm(value);

    if (is_error_x_esm(value)) {
      if (array_includes_x_esm(keys, 'message') === false) {
        keys = inspect_x_esm_promote(keys, errorKeys);
      }
    } else if ((unwantedFnProps.length > 0 || mustFilterFnProps) && Object(is_function_x_esm["a" /* default */])(value)) {
      if (unwantedFnProps.length > 0) {
        keys = array_difference_x_esm(keys, unwantedFnProps);
      }

      if (mustFilterFnProps) {
        var keysDiff = array_difference_x_esm(keys, fnPropsCheck);
        var missingFnProps = array_difference_x_esm(fnPropsCheck, visibleKeys, keysDiff);
        keys = inspect_x_esm_concat(missingFnProps, keysDiff);
      }
    } else if (hiddenFuncCtr && isProto && Object(is_function_x_esm["a" /* default */])(inspect_x_esm_getConstructorOf(value))) {
      if (array_includes_x_esm(visibleKeys, 'constructor') === false && array_includes_x_esm(keys, 'constructor') === false) {
        keys = inspect_x_esm_promote(keys, 'constructor');
      }
    }
  } else {
    var enumSymbols = Object(array_filter_x_esm["a" /* default */])(Object(get_own_property_symbols_x_esm["a" /* default */])(value), function predicate(key) {
      return propertyIsEnumerable(value, key);
    });
    keys = inspect_x_esm_concat(visibleKeys, enumSymbols);
  }

  if (is_string_default()(value)) {
    // for boxed Strings, we have to remove the 0-n indexed entries,
    // since they just noisy up the out and are redundant
    keys = inspect_x_esm_filterIndexes(keys, value.length);
    visibleKeys = inspect_x_esm_filterIndexes(visibleKeys, value.length);
  } else if (is_array_buffer_x_esm(value)) {
    keys = inspect_x_esm_filterIndexes(keys, value.byteLength);
    visibleKeys = inspect_x_esm_filterIndexes(visibleKeys, value.byteLength);
  }

  var name;
  var formatted; // Some type of object without properties can be shortcutted.

  if (keys.length < 1) {
    // This could be a boxed primitive (new String(), etc.)
    if (is_string_default()(value)) {
      return ctx.stylize("[".concat(inspect_x_esm_getSubName(value, 'String'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'string');
    }

    if (is_number_object_default()(value)) {
      return ctx.stylize("[".concat(inspect_x_esm_getSubName(value, 'Number'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'number');
    }

    if (is_boolean_object_default()(value)) {
      return ctx.stylize("[".concat(inspect_x_esm_getSubName(value, 'Boolean'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]"), 'boolean');
    }

    if (is_symbol_default()(value)) {
      return ctx.stylize("[Symbol: ".concat(fmtPrimNoColor(ctx, symbolValueOf(value)), "]"), 'symbol');
    }

    if (is_async_function_x_esm(value)) {
      return ctx.stylize("[AsyncFunction".concat(inspect_x_esm_getNameSep(value), "]"), 'special');
    }

    if (is_generator_function_default()(value)) {
      return ctx.stylize("[GeneratorFunction".concat(inspect_x_esm_getNameSep(value), "]"), 'special');
    }

    if (Object(is_function_x_esm["a" /* default */])(value)) {
      return ctx.stylize("[".concat(inspect_x_esm_getSubName(value, 'Function')).concat(inspect_x_esm_getNameSep(value), "]"), 'special');
    }

    if (inspect_x_esm_isClass(value)) {
      return ctx.stylize("[Class".concat(inspect_x_esm_getNameSep(value), "]"), 'special');
    }

    if (is_regex_default()(value)) {
      return ctx.stylize(regexpToString(value), 'regexp');
    }

    if (is_date_object_default()(value)) {
      name = inspect_x_esm_getSubName(value);
      formatted = ctx.stylize(inspect_x_esm_fmtDate(value), 'date');

      if (name === 'Date') {
        return formatted;
      }

      return ctx.stylize("[".concat(name, ": ").concat(formatted, "]"), 'date');
    }

    if (is_error_x_esm(value)) {
      return inspect_x_esm_fmtError(value);
    } // Fast path for ArrayBuffer. Can't do the same for DataView because it
    // has a non-primitive buffer property that we need to recurse for.


    if (is_array_buffer_x_esm(value)) {
      return "".concat(inspect_x_esm_getSubName(value, 'ArrayBuffer'), " { byteLength: ").concat(inspect_x_esm_fmtNumber(ctx, value.byteLength), " }");
    }

    if (inspect_x_esm_isMapIterator(value)) {
      return "".concat(inspect_x_esm_getSubName(value, 'MapIterator'), " {}");
    }

    if (inspect_x_esm_isSetIterator(value)) {
      return "".concat(inspect_x_esm_getSubName(value, 'SetIterator'), " {}");
    }

    if (is_promise_default()(value)) {
      return "".concat(inspect_x_esm_getSubName(value, 'Promise'), " {}");
    }
  }

  var base = inspect_x_esm_EMPTY_STRING;
  var empty = false;
  var braces = ['{', '}'];
  var fmtter = inspect_x_esm_fmtObject; // We can't compare constructors for various objects using a comparison
  // like `constructor === Array` because the object could have come from a
  // different context and thus the constructor won't match. Instead we check
  // the constructor names (including those up the prototype chain where
  // needed) to determine object types.

  if (is_string_default()(value)) {
    // Make boxed primitive Strings look like such
    base = "[".concat(inspect_x_esm_getSubName(value, 'String'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (is_number_object_default()(value)) {
    // Make boxed primitive Numbers look like such
    base = "[".concat(inspect_x_esm_getSubName(value, 'Number'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (is_boolean_object_default()(value)) {
    // Make boxed primitive Booleans look like such
    base = "[".concat(inspect_x_esm_getSubName(value, 'Boolean'), ": ").concat(fmtPrimNoColor(ctx, value.valueOf()), "]");
  } else if (Object(is_function_x_esm["a" /* default */])(value)) {
    // Make functions say that they are functions
    base = "[".concat(inspect_x_esm_getSubName(value, 'Function')).concat(inspect_x_esm_getNameSep(value), "]");
  } else if (inspect_x_esm_isClass(value)) {
    // Make functions say that they are functions
    base = "[Class".concat(inspect_x_esm_getNameSep(value), "]");
  } else if (is_regex_default()(value)) {
    // Make RegExps say that they are RegExps
    // name = getSubName(value, 'RegExp');
    base = regexpToString(value);
  } else if (is_date_object_default()(value)) {
    // Make dates with properties first say the date
    name = inspect_x_esm_getSubName(value);
    formatted = inspect_x_esm_fmtDate(value);

    if (name === 'Date') {
      base = formatted;
    } else {
      base = "[".concat(name, ": ").concat(formatted, "]");
    }
  } else if (is_error_x_esm(value)) {
    name = inspect_x_esm_getSubName(value); // Make error with message first say the error

    base = inspect_x_esm_fmtError(value);
  } else if (Object(is_array_x_esm["a" /* default */])(value)) {
    name = inspect_x_esm_getSubName(value); // Unset the constructor to prevent "Array [...]" for ordinary arrays.

    name = name === 'Array' ? inspect_x_esm_EMPTY_STRING : name;
    braces = ['[', ']'];

    if (ctx.showHidden) {
      keys = inspect_x_esm_promote(keys, arrayKeys);
    }

    empty = value.length < 1;
    fmtter = inspect_x_esm_fmtArray;
  } else if (Object(is_set_x_esm["a" /* default */])(value)) {
    name = inspect_x_esm_getSubName(value, 'Set');
    fmtter = inspect_x_esm_fmtSet; // With `showHidden`, `length` will display as a hidden property for
    // arrays. For consistency's sake, do the same for `size`, even though
    // this property isn't selected by Object.getOwnPropertyNames().

    if (ctx.showHidden) {
      keys = inspect_x_esm_promote(keys, collectionKeys);
    }

    empty = value.size < 1;
  } else if (Object(is_map_x_esm["a" /* default */])(value)) {
    name = inspect_x_esm_getSubName(value, 'Map');
    fmtter = inspect_x_esm_fmtMap; // With `showHidden`, `length` will display as a hidden property for
    // arrays. For consistency's sake, do the same for `size`, even though
    // this property isn't selected by Object.getOwnPropertyNames().

    if (ctx.showHidden) {
      keys = inspect_x_esm_promote(keys, collectionKeys);
    }

    empty = value.size < 1;
  } else if (is_array_buffer_x_esm(value)) {
    name = inspect_x_esm_getSubName(value, 'ArrayBuffer');
    keys = inspect_x_esm_promote(keys, arrayBufferKeys);
    visibleKeys = inspect_x_esm_appendMissing(visibleKeys, arrayBufferKeys);
  } else if (is_data_view_x_esm(value)) {
    name = inspect_x_esm_getSubName(value, 'DataView');
    keys = inspect_x_esm_promote(keys, dataViewKeys);
    visibleKeys = inspect_x_esm_appendMissing(visibleKeys, dataViewKeys);
  } else if (is_typed_array_default()(value)) {
    name = inspect_x_esm_getSubName(value);
    braces = ['[', ']'];
    fmtter = inspect_x_esm_fmtTypedArray;

    if (ctx.showHidden) {
      keys = inspect_x_esm_promote(keys, typedArrayKeys);
    }
  } else if (is_promise_default()(value)) {
    name = inspect_x_esm_getSubName(value, 'Promise');
  } else if (inspect_x_esm_isMapIterator(value)) {
    name = inspect_x_esm_getSubName(value, 'MapIterator');
    empty = true;
  } else if (inspect_x_esm_isSetIterator(value)) {
    name = inspect_x_esm_getSubName(value, 'SetIterator');
    empty = true;
  } else {
    name = inspect_x_esm_getSubName(value); // Unset the constructor to prevent "Object {...}" for ordinary objects.

    name = name === 'Object' ? inspect_x_esm_EMPTY_STRING : name;
    empty = true; // No other data than keys.
  }

  if (base) {
    base = " ".concat(base);
  } else if (name) {
    // Add constructor name if available
    braces[0] = "".concat(name, " ").concat(braces[0]);
  }

  empty = empty === true && keys.length < 1;

  if (empty) {
    return braces[0] + base + braces[1];
  }

  if (depth < 0) {
    if (is_regex_default()(value)) {
      return ctx.stylize(regexpToString(value), 'regexp');
    }

    if (Object(is_array_x_esm["a" /* default */])(value)) {
      return ctx.stylize('[Array]', 'special');
    }

    return ctx.stylize('[Object]', 'special');
  }

  if (ctx.seen.has(value)) {
    return ctx.stylize('[Circular]', 'special');
  }

  ctx.seen.add(value);
  var out = fmtter([ctx, value, depth, visibleKeys, keys]);
  ctx.seen.delete(value);
  return inspect_x_esm_reduceToSingleString([out, base, braces, ctx.breakLength]);
};

$inspect = function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: new collections_x_esm["a" /* SetConstructor */](),
    stylize: stylizeNoColor
  }; // legacy...

  /* eslint-disable-next-line prefer-rest-params */

  if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    ctx.depth = arguments[2];
  }
  /* eslint-disable-next-line prefer-rest-params */


  if (arguments.length >= 4 && typeof arguments[3] !== 'undefined') {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    ctx.colors = arguments[3];
  }

  if (is_boolean_object_default()(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } // Set default and user-specified options


  if (supportsGetSet) {
    ctx = Object(object_assign_x_esm["a" /* default */])({}, $inspect.defaultOptions, ctx, opts);
  } else {
    ctx = Object(object_assign_x_esm["a" /* default */])({}, inspectDefaultOptions, $inspect.defaultOptions, ctx, opts);
  }

  if (ctx.colors) {
    ctx.stylize = stylizeWithColor;
  }

  if (ctx.maxArrayLength === null) {
    ctx.maxArrayLength = Infinity;
  }

  return $fmtValue([ctx, obj, ctx.depth]);
};

if (supportsGetSet) {
  Object(object_define_property_x_esm["a" /* default */])($inspect, 'defaultOptions', {
    get: function _get() {
      return inspectDefaultOptions;
    },
    set: function _set(options) {
      if (Object(is_object_like_x_esm["a" /* default */])(options) === false) {
        throw new TypeError('"options" must be an object');
      }

      return Object(object_assign_x_esm["a" /* default */])(inspectDefaultOptions, options);
    }
  });
} else {
  Object(object_define_properties_x_esm["a" /* default */])($inspect, {
    defaultOptions: {
      value: Object(object_assign_x_esm["a" /* default */])({}, inspectDefaultOptions),
      writable: true
    }
  });
}

Object(object_define_properties_x_esm["a" /* default */])($inspect, {
  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  colors: {
    value: {
      black: [30, 39],
      blue: [34, 39],
      bold: [1, 22],
      cyan: [36, 39],
      green: [32, 39],
      grey: [90, 39],
      inverse: [7, 27],
      italic: [3, 23],
      magenta: [35, 39],
      red: [31, 39],
      underline: [4, 24],
      white: [37, 39],
      yellow: [33, 39]
    }
  },
  custom: {
    value: customInspectSymbol
  },
  // Don't use 'blue' not visible on cmd.exe
  styles: {
    value: {
      boolean: 'yellow',
      date: 'magenta',
      // name: intentionally not styling
      null: 'bold',
      number: 'yellow',
      regexp: 'red',
      special: 'cyan',
      string: 'green',
      symbol: 'green',
      undefined: 'grey'
    }
  }
});
var ins = $inspect;
/* harmony default export */ var inspect_x_esm = __webpack_exports__["a"] = (ins);



/***/ }),
/* 59 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var white_space_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(white_space_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trimStart = function trimStart(string) {
  return replace.call(Object(require_coercible_to_string_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(string), reLeft, EMPTY_STRING);
};

/* harmony default export */ __webpack_exports__["a"] = (trimStart);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var is_primitive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_primitive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var is_date_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_date_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var is_function_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var is_nil_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
var StringCtr = STRING.constructor;
var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var assertHint = function assertHint(hint) {
  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  return hint;
};
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */


var ordinaryToPrimitive = function ordinaryToPrimitive(ordinary, hint) {
  Object(require_object_coercible_x__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ordinary);
  assertHint(hint);
  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(method)) {
      result = method.call(ordinary);

      if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function getMethod(object, property) {
  var func = object[property];

  if (Object(is_nil_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(func) === false) {
    if (Object(is_function_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};

var evalExotic = function evalExotic(obj) {
  var exoticToPrim = obj.exoticToPrim,
      input = obj.input,
      hint = obj.hint;
  var result = exoticToPrim.call(input, hint);

  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(result)) {
    return result;
  }

  throw new TypeError('unable to convert exotic object to primitive');
};

var evalPrimitive = function evalPrimitive(input, hint) {
  var newHint = hint === DEFAULT && (is_date_object__WEBPACK_IMPORTED_MODULE_2___default()(input) || is_symbol__WEBPACK_IMPORTED_MODULE_3___default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {Function} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive__WEBPACK_IMPORTED_MODULE_1___default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = getExoticToPrim(input);
  return typeof exoticToPrim === 'undefined' ? evalPrimitive(input, hint) : evalExotic({
    exoticToPrim: exoticToPrim,
    input: input,
    hint: hint
  });
};

/* harmony default export */ __webpack_exports__["a"] = (toPrimitive);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var nan_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var to_string_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var trim_left_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2019).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var $parseInt = function $parseInt(string, radix) {
  var str = Object(trim_left_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(to_string_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  }

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ __webpack_exports__["a"] = ($parseInt);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ __webpack_exports__["a"] = (0 / 0);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_property_key_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

var propertyIsEnumerable = function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(Object(to_object_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object), Object(to_property_key_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(property));
};

/* harmony default export */ __webpack_exports__["a"] = (propertyIsEnumerable);



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var array_filter_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var get_own_property_symbols_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

var getOwnEnumerablePropertySymbols = function getOwnEnumerablePropertySymbols(target) {
  var _this = this;

  var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target);
  return Object(array_filter_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(get_own_property_symbols_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object), function (symbol) {
    _newArrowCheck(this, _this);

    return Object(property_is_enumerable_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(object, symbol);
  }.bind(this));
};

/* harmony default export */ __webpack_exports__["a"] = (getOwnEnumerablePropertySymbols);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var to_length_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var to_object_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var pFindIndex = typeof Array.prototype.findIndex === 'function' && Array.prototype.findIndex;
var isWorking;

if (pFindIndex) {
  var testArr = [];
  testArr.length = 2;
  testArr[1] = 1;
  var res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(testArr, pFindIndex, function (item, idx) {
    _newArrowCheck(this, _this);

    return idx === 0;
  }.bind(undefined));
  isWorking = res.threw === false && res.value === 0;

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(1, pFindIndex, function (item, idx) {
      _newArrowCheck(this, _this);

      return idx === 0;
    }.bind(undefined));
    isWorking = res.threw === false && res.value === -1;
  }

  if (isWorking) {
    isWorking = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call([], pFindIndex).threw;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call('abc', pFindIndex, function (item) {
      _newArrowCheck(this, _this);

      return item === 'c';
    }.bind(undefined));
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pFindIndex, function (item) {
      _newArrowCheck(this, _this);

      return item === 'c';
    }.bind(undefined));
    isWorking = res.threw === false && res.value === 2;
  }
}
/**
 * Like `findIndex`, this method returns an index in the array, if an element
 * in the array satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If array is `null` or `undefined`-.
 * @param {Function} callback - Function to execute on each value in the array,
 *  taking three arguments: `element`, `index` and `array`.
 * @throws {TypeError} If `callback` is not a function.
 * @param {*} [thisArg] - Object to use as `this` when executing `callback`.
 * @returns {number} Returns index of positively tested element, otherwise -1.
 */


var findIdx;

if (isWorking) {
  findIdx = function findIndex(array, callback) {
    var args = [callback];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return pFindIndex.apply(array, args);
  };
} else {
  findIdx = function findIndex(array, callback) {
    var object = Object(to_object_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array);
    Object(assert_is_function_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(callback);
    var iterable = Object(split_if_boxed_bug_x__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(object);
    var length = Object(to_length_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterable.length);

    if (length < 1) {
      return -1;
    }

    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var index = 0;

    while (index < length) {
      if (callback.call(thisArg, iterable[index], index, object)) {
        return index;
      }

      index += 1;
    }

    return -1;
  };
}

var fi = findIdx;
/* harmony default export */ __webpack_exports__["a"] = (fi);



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js
var has_own_property_x_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js
var object_define_property_x_esm = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js + 1 modules
var object_define_properties_x_esm = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(14);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-array-like-x/dist/is-array-like-x.esm.js
var is_array_like_x_esm = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(9);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// CONCATENATED MODULE: ./node_modules/is-surrogate-pair-x/dist/is-surrogate-pair-x.esm.js

var _ref = '',
    charCodeAt = _ref.charCodeAt;

var is_surrogate_pair_x_esm_checkPair1 = function checkPair1(char1) {
  return is_string_default()(char1) && char1.length === 2;
};

var is_surrogate_pair_x_esm_checkPair2 = function checkPair2(char1, char2) {
  return is_string_default()(char1) && char1.length === 1 && is_string_default()(char2) && char2.length === 1;
};

var getPair1 = function getPair1(char1) {
  if (is_surrogate_pair_x_esm_checkPair1(char1)) {
    return {
      first: charCodeAt.call(char1, 0),
      second: charCodeAt.call(char1, 1)
    };
  }

  return false;
};

var getPair2 = function getPair2(char1, char2) {
  if (is_surrogate_pair_x_esm_checkPair2(char1, char2)) {
    return {
      first: charCodeAt.call(char1, 0),
      second: charCodeAt.call(char2, 0)
    };
  }

  return false;
};

var isPair = function isPair(result) {
  if (result === false) {
    return false;
  }

  var first = result.first,
      second = result.second;
  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
};
/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {*} char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 */


var isSurrogatePair = function isSurrogatePair(char1, char2) {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var result;

  if (argsLength === 1) {
    result = getPair1(char1);
  } else if (argsLength > 1) {
    result = getPair2(char1, char2);
  }

  return isPair(result);
};

/* harmony default export */ var is_surrogate_pair_x_esm = (isSurrogatePair);


// EXTERNAL MODULE: ./node_modules/index-of-x/dist/index-of-x.esm.js
var index_of_x_esm = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js
var assert_is_function_x_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js
var assert_is_object_x_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js
var array_slice_x_esm = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
var attempt_x_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js + 1 modules
var split_if_boxed_bug_x_esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js
var to_length_x_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js
var to_object_x_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
var to_boolean_x_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js
var require_object_coercible_x_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/dist/array-reduce-right-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var rr = [].reduceRight;
var nativeReduceR = typeof rr === 'function' && rr;

var array_reduce_right_x_esm_test1 = function test1() {
  return attempt_x_esm["a" /* default */].call([], nativeReduceR, function attemptee(acc) {
    return acc;
  }).threw;
};

var array_reduce_right_x_esm_test2 = function test2() {
  var res = attempt_x_esm["a" /* default */].call(Object(to_object_x_esm["a" /* default */])('abc'), nativeReduceR, function attemptee(acc, c) {
    return acc + c;
  }, 'x');
  return res.threw === false && res.value === 'xcba';
};

var array_reduce_right_x_esm_test3 = function test3() {
  var res = attempt_x_esm["a" /* default */].call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }(1, 2, 3), nativeReduceR, function attemptee(acc, arg) {
    return acc + arg;
  }, 1);
  return res.threw === false && res.value === 7;
};

var array_reduce_right_x_esm_test4 = function test4() {
  var res = attempt_x_esm["a" /* default */].call({
    0: 1,
    1: 2,
    3: 3,
    4: 4,
    length: 4
  }, nativeReduceR, function attemptee(acc, arg) {
    return acc + arg;
  }, 2);
  return res.threw === false && res.value === 8;
};

var array_reduce_right_x_esm_test5 = function test5() {
  var doc = typeof document !== 'undefined' && document;

  if (doc) {
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);

    var attemptee = function attemptee(acc, node) {
      acc[acc.length] = node;
      return acc;
    };

    var res = attempt_x_esm["a" /* default */].call(fragment.childNodes, nativeReduceR, attemptee, []);
    return res.threw === false && res.value.length === 1 && res.value[0] === div;
  }

  return true;
};

var array_reduce_right_x_esm_test6 = function test6() {
  var res = attempt_x_esm["a" /* default */].call('ab', nativeReduceR, function attemptee() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments[3];
  });
  return res.threw === false && _typeof(res.value) === 'object';
}; // ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight


var isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeReduceR) && array_reduce_right_x_esm_test1() && array_reduce_right_x_esm_test2() && array_reduce_right_x_esm_test3() && array_reduce_right_x_esm_test4() && array_reduce_right_x_esm_test5() && array_reduce_right_x_esm_test6();

var patchedReduceRight = function reduceRight(array, callBack
/* , initialValue */
) {
  Object(require_object_coercible_x_esm["a" /* default */])(array);
  var args = [Object(assert_is_function_x_esm["a" /* default */])(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeReduceR.apply(array, args);
};

var implementation = function reduceRight(array, callBack
/* , initialValue */
) {
  var object = Object(to_object_x_esm["a" /* default */])(array); // If no callback function or if callback is not a callable function

  Object(assert_is_function_x_esm["a" /* default */])(callBack);
  var iterable = Object(split_if_boxed_bug_x_esm["a" /* default */])(object);
  var length = Object(to_length_x_esm["a" /* default */])(iterable.length);
  var argsLength = arguments.length; // no value to return if no initial value, empty array

  if (length === 0 && argsLength < 3) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  var result;
  var i = length - 1;

  if (argsLength > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    result = arguments[2];
  } else {
    do {
      if (i in iterable) {
        result = iterable[i];
        i -= 1;
        break;
      } // if array contains no values, no initial value to return


      i -= 1;

      if (i < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
    } while (true);
    /* eslint-disable-line no-constant-condition */

  }

  while (i >= 0) {
    if (i in iterable) {
      result = callBack(result, iterable[i], i, object);
    }

    i -= 1;
  }

  return result;
};
/**
 * This method applies a function against an accumulator and each value of the
 * array (from right-to-left) to reduce it to a single value..
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduceRight on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */

var $reduceRight = isWorking ? patchedReduceRight : implementation;
/* harmony default export */ var array_reduce_right_x_esm = ($reduceRight);


// CONCATENATED MODULE: ./node_modules/big-counter-x/dist/big-counter-x.esm.js





var reducer = function _reducer(acc, digit) {
  return acc + digit;
};
/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */


var counterToString = function ToString() {
  return array_reduce_right_x_esm(this.count, reducer, '');
};
/**
 * Incremental integer counter. Counts from `0` to very big integers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @property {Array<number>} count - A representation of a big number.
 */


var big_counter_x_esm_BigCounter = function BigCounter() {
  if (Object(to_boolean_x_esm["a" /* default */])(this) === false || !(this instanceof BigCounter)) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  Object(object_define_properties_x_esm["a" /* default */])(this, {
    count: {
      value: [0]
    }
  });
};

Object(object_define_properties_x_esm["a" /* default */])(big_counter_x_esm_BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString
  },

  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {object} The counter object.
   */
  next: {
    value: function next() {
      var clone = Object(array_slice_x_esm["a" /* default */])(this.count);
      this.count.length = 0;
      var length = clone.length;
      var howMany = length > 0 ? length : 1;
      var carry = 0;
      var index = 0;

      while (index < howMany || carry) {
        var zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        /* eslint-disable-next-line no-bitwise */

        carry = zi / 10 >> 0; // floor

        index += 1;
      }

      return this;
    }
  },

  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;
      return this;
    }
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString
  }
});
/* harmony default export */ var big_counter_x_esm = (big_counter_x_esm_BigCounter);


// EXTERNAL MODULE: ./node_modules/is-map-x/dist/is-map-x.esm.js
var is_map_x_esm = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/is-set-x/dist/is-set-x.esm.js
var is_set_x_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js
var is_object_like_x_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/is-boolean-object/index.js
var is_boolean_object = __webpack_require__(52);
var is_boolean_object_default = /*#__PURE__*/__webpack_require__.n(is_boolean_object);

// EXTERNAL MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js
var array_some_x_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/get-prototype-of-x/dist/get-prototype-of-x.esm.js
var get_prototype_of_x_esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
var is_nil_x_esm = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/symbol-iterator-x/dist/symbol-iterator-x.esm.js
function symbol_iterator_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { symbol_iterator_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { symbol_iterator_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return symbol_iterator_x_esm_typeof(obj); }



var ES6_SHIM_ITERATOR = '_es6-shim iterator_';
var AT_AT_ITERATOR = '@@iterator';
/* eslint-disable-next-line compat/compat */

var hasRealSymbolIterator = has_symbol_support_x_esm["a" /* default */] && symbol_iterator_x_esm_typeof(Symbol.iterator) === 'symbol';
/* eslint-disable-next-line compat/compat */

var hasFakeSymbolIterator = (typeof Symbol === "undefined" ? "undefined" : symbol_iterator_x_esm_typeof(Symbol)) === 'object' && Symbol !== null && typeof Symbol.iterator === 'string';
var hasSymbolIterator = hasRealSymbolIterator || hasFakeSymbolIterator;

var getOtherSymbolIterator = function getOtherSymbolIterator(iterable) {
  if (iterable[ES6_SHIM_ITERATOR]) {
    return ES6_SHIM_ITERATOR;
  }

  if (iterable[AT_AT_ITERATOR]) {
    return AT_AT_ITERATOR;
  }

  return null;
};

var getSymIt = function getSymIt() {
  if (hasSymbolIterator) {
    /* eslint-disable-next-line compat/compat */
    return Symbol.iterator;
  }

  var result = getOtherSymbolIterator([]);

  if (typeof result === 'string' && typeof [][result] === 'function') {
    return result;
  }

  return AT_AT_ITERATOR;
};
/**
 * Whenever an object needs to be iterated (such as at the beginning of a for..of loop),
 * its @@iterator method is called with no arguments, and the returned iterator is used
 * to obtain the values to be iterated.
 *
 * Possible values are.
 *
 * Symbol.iterator
 * '_es6-shim iterator_'
 * '@@iterator'.
 *
 * @type {symbol|string}
 */


var $iterator$ = getSymIt();
/**
 * Detect an iterator function.
 *
 * @private
 * @param {*} iterable - Value to detect iterator function.
 * @returns {symbol|string|undefined} The iterator property identifier.
 */

var symbol_iterator_x_esm_getSymbolIterator = function getSymbolIterator(iterable) {
  if (Object(is_nil_x_esm["a" /* default */])(iterable) === false) {
    if (hasSymbolIterator && iterable[$iterator$]) {
      return $iterator$;
    }

    var result = getOtherSymbolIterator(iterable);

    if (typeof result === 'string') {
      return result;
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};
/* harmony default export */ var symbol_iterator_x_esm = ($iterator$);


// CONCATENATED MODULE: ./node_modules/symbol-species-x/dist/symbol-species-x.esm.js

/**
 * The species accessor property allows subclasses to override the default constructor for objects.
 *
 * Possible values are.
 *
 * Symbol.species
 * '@@species'.
 *
 * @type {symbol|string}
 */

var symbolSpecies = has_symbol_support_x_esm["a" /* default */] && Symbol.species || '@@species';
/* eslint-disable-line compat/compat */

/* harmony default export */ var symbol_species_x_esm = (symbolSpecies);


// CONCATENATED MODULE: ./node_modules/object-create-x/dist/object-create-x.esm.js
function object_create_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { object_create_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { object_create_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return object_create_x_esm_typeof(obj); }





var ObjectCtr = {}.constructor;
var nCreate = ObjectCtr.create;
var nativeCreate = typeof nCreate === 'function' && nCreate;

var object_create_x_esm_test1 = function test1() {
  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, null);
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object';
};

var object_create_x_esm_test2 = function test2() {
  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, null); // noinspection LoopStatementThatDoesntLoopJS

  for (var _ in res.value)
  /* eslint-disable-line guard-for-in,no-restricted-syntax */
  {
    return false;
  }

  return true;
};

var object_create_x_esm_test3 = function test3() {
  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, null, {
    test: {
      value: true
    }
  });
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object' && res.value.test === true;
};

var getShapes = function getShapes() {
  // Shape - superclass
  var Shape = function Shape() {
    // noinspection JSUnusedGlobalSymbols
    this.x = 0; // noinspection JSUnusedGlobalSymbols

    this.y = 0;
  }; // superclass method


  Shape.prototype.move = function move(x, y) {
    // noinspection JSUnusedGlobalSymbols
    this.x += x; // noinspection JSUnusedGlobalSymbols

    this.y += y;
    return 'Shape moved.';
  }; // Rectangle - subclass


  var Rectangle = function Rectangle() {
    Shape.call(this); // call super constructor.
  };

  return {
    Shape: Shape,
    Rectangle: Rectangle
  };
};

var object_create_x_esm_test4 = function test4() {
  var _getShapes = getShapes(),
      Shape = _getShapes.Shape;

  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, Shape.prototype);
  return res.threw === false && res.value && object_create_x_esm_typeof(res.value) === 'object';
};

var object_create_x_esm_test5 = function test5() {
  var _getShapes2 = getShapes(),
      Shape = _getShapes2.Shape,
      Rectangle = _getShapes2.Rectangle;

  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Rectangle;
};

var object_create_x_esm_test6 = function test6() {
  var _getShapes3 = getShapes(),
      Shape = _getShapes3.Shape,
      Rectangle = _getShapes3.Rectangle;

  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect instanceof Shape;
};

var object_create_x_esm_test7 = function test7() {
  var _getShapes4 = getShapes(),
      Shape = _getShapes4.Shape,
      Rectangle = _getShapes4.Rectangle;

  var res = Object(attempt_x_esm["a" /* default */])(nativeCreate, Shape.prototype); // subclass extends superclass

  Rectangle.prototype = res.value;
  Rectangle.prototype.constructor = Rectangle;
  var rect = new Rectangle();
  return rect.move(1, 1) === 'Shape moved.';
};

var object_create_x_esm_isWorking = Object(to_boolean_x_esm["a" /* default */])(nativeCreate) && object_create_x_esm_test1() && object_create_x_esm_test2() && object_create_x_esm_test3() && object_create_x_esm_test4() && object_create_x_esm_test5() && object_create_x_esm_test6() && object_create_x_esm_test7();
/**
 * This method method creates a new object with the specified prototype object and properties.
 *
 * @param {*} prototype - The object which should be the prototype of the newly-created object.
 * @param {*} [properties] - If specified and not undefined, an object whose enumerable own properties
 * (that is, those properties defined upon itself and not enumerable properties along its prototype chain)
 * specify property descriptors to be added to the newly-created object, with the corresponding property names.
 * @throws {TypeError} If the properties parameter isn't null or an object.
 * @returns {boolean} A new object with the specified prototype object and properties.
 */

var object_create_x_esm_doc = typeof document !== 'undefined' && document;
var supportsProto = Object(to_boolean_x_esm["a" /* default */])({
  __proto__: null
} instanceof ObjectCtr) === false; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346

var object_create_x_esm_shouldUseActiveX = function shouldUseActiveX() {
  // return early if document.domain not set
  if (Object(to_boolean_x_esm["a" /* default */])(object_create_x_esm_doc.domain) === false) {
    return false;
  }

  var result = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line no-undef */
    return new ActiveXObject('htmlfile');
  });
  return result.threw === false && Boolean(result.value);
}; // This supports IE8 when document.domain is used
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346


var getEmptyViaActiveX = function getEmptyViaActiveX() {
  /* eslint-disable-next-line no-undef */
  var xDoc = new ActiveXObject('htmlfile');
  /* eslint-disable-next-line no-useless-escape,prettier/prettier */

  xDoc.write('<script><\/script>');
  xDoc.close(); // noinspection JSUnresolvedVariable

  var empty = xDoc.parentWindow.Object.prototype;
  xDoc = null;
  return empty;
}; // The original implementation using an iframe
// before the activex approach was added
// see https://github.com/es-shims/es5-shim/issues/150


var getEmptyViaIFrame = function getEmptyViaIFrame() {
  var iframe = object_create_x_esm_doc.createElement('iframe');
  iframe.style.display = 'none';
  /* eslint-disable-next-line no-script-url */

  iframe.src = 'javascript:';
  var parent = object_create_x_esm_doc.body || object_create_x_esm_doc.documentElement;
  parent.appendChild(iframe);
  var empty = iframe.contentWindow.Object.prototype;
  parent.removeChild(iframe);
  iframe = null;
  return empty;
}; // the following produces false positives
// in Opera Mini => not a reliable check
// Object.prototype.__proto__ === null


var createEmptyProto = function createEmpty() {
  return {
    __proto__: null
  };
}; // In old IE __proto__ can't be used to manually set `null`, nor does
// any other method exist to make an object that inherits from nothing,
// aside from Object.prototype itself. Instead, create a new global
// object and *steal* its Object.prototype and strip it bare. This is
// used as the prototype to create nullary objects.


var createEmptyNoProto = function createEmpty() {
  // Determine which approach to use
  // see https://github.com/es-shims/es5-shim/issues/150
  var empty = object_create_x_esm_shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();
  delete empty.constructor;
  delete empty.hasOwnProperty;
  delete empty.propertyIsEnumerable;
  delete empty.isPrototypeOf;
  delete empty.toLocaleString;
  delete empty.toString;
  delete empty.valueOf;
  /* eslint-disable-next-line lodash/prefer-noop */

  var E = function Empty() {};

  E.prototype = empty; // short-circuit future calls

  createEmptyNoProto = function createEmptyShortCircuit() {
    return new E();
  };

  return new E();
}; // Contributed by Brandon Benvie, October, 2012


var createEmpty = supportsProto || Object(to_boolean_x_esm["a" /* default */])(object_create_x_esm_doc) === false ? createEmptyProto : createEmptyNoProto;
var object_create_x_esm_implementation = function create(prototype, properties) {
  var object;
  /* eslint-disable-next-line lodash/prefer-noop */

  var T = function Type() {}; // An empty constructor.


  if (prototype === null) {
    object = createEmpty();
  } else {
    if (is_primitive_default()(prototype)) {
      // In the native implementation `parent` can be `null`
      // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
      // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
      // like they are in modern browsers. Using `Object.create` on DOM elements
      // is...err...probably inappropriate, but the native version allows for it.
      throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
    }

    T.prototype = prototype;
    object = new T(); // IE has no built-in implementation of `Object.getPrototypeOf`
    // neither `__proto__`, but this manually setting `__proto__` will
    // guarantee that `Object.getPrototypeOf` will work as expected with
    // objects created using `Object.create`

    /* eslint-disable-next-line no-proto */

    object.__proto__ = prototype;
  }

  if (typeof properties !== 'undefined') {
    Object(object_define_properties_x_esm["a" /* default */])(object, properties);
  }

  return object;
};
var $create = object_create_x_esm_isWorking ? nativeCreate : object_create_x_esm_implementation;
/* harmony default export */ var object_create_x_esm = ($create);


// EXTERNAL MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js
var array_for_each_x_esm = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js + 1 modules
var object_get_own_property_descriptor_x_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/is-var-name/index.mjs
/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (e) {
		return false;
	}

	return true;
}

// EXTERNAL MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js
var to_string_x_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/rename-function-x/dist/rename-function-x.esm.js








var rename_function_x_esm_rename = function rename(fn, name) {
  var descriptor = Object(object_get_own_property_descriptor_x_esm["a" /* default */])(fn, 'name');

  if (descriptor && descriptor.configurable) {
    Object(object_define_property_x_esm["a" /* default */])(fn, 'name', {
      configurable: true,
      value: name
    });
  }

  return fn.name;
};

var supportsFunctionRenaming = Object(attempt_x_esm["a" /* default */])(function attemptee() {
  /* eslint-disable-next-line lodash/prefer-noop */
  return rename_function_x_esm_rename(function test1() {}, 'test2');
}).value === 'test2'; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * Renames a function.
 *
 * @param {Function} fn - The function to be renamed.
 * @param {string} name - The new name for the function.
 * @param {boolean} [force=false] - Rename even if reported as not valid.
 * @returns {boolean} - Returns true if renaming was a success; otherwise false.
 */
// eslint-enable jsdoc/check-param-names

var rename_function_x_esm_renameFunction = function renameFunction(fn, name) {
  Object(assert_is_function_x_esm["a" /* default */])(fn);
  var string = Object(to_string_x_esm["a" /* default */])(name);
  /* eslint-disable-next-line prefer-rest-params */

  var force = arguments.length > 2 && Object(to_boolean_x_esm["a" /* default */])(arguments[2]);

  if (force === false && isVarName(string) === false) {
    throw new Error("Not a valid function name \"".concat(string, "\""));
  }

  return supportsFunctionRenaming && rename_function_x_esm_rename(fn, name) === string;
};

/* harmony default export */ var rename_function_x_esm = (rename_function_x_esm_renameFunction);


// CONCATENATED MODULE: ./node_modules/collections-x/dist/collections-x.esm.js
/* unused harmony export symIt */
/* unused harmony export SetImplementation */
/* unused harmony export MapImplementation */
/* unused harmony export MapConstructor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetConstructor; });
/* unused harmony export isMapImplementation */
/* unused harmony export isMap */
/* unused harmony export isSetImplementation */
/* unused harmony export isSet */
var _sizeDescriptor, _defineProperties3, _defineProperties5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function collections_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { collections_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { collections_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return collections_x_esm_typeof(obj); }



























/* eslint-disable-next-line no-void */

var UNDEFINED = void 0;
var SIZE = 'size';
var NEXT = 'next';
var KEY = 'key';
var VALUE = 'value';
var DONE = 'done';
var WRITABLE = 'writable';
var DELETE = 'delete';
var MAP = 'map';
var SET = 'set';
var PROP_CHANGED = '[[changed]]';
var PROP_CHANGE = '[[change]]';
var PROP_ID = '[[id]]';
var PROP_KEY = "[[".concat(KEY, "]]");
var PROP_ORDER = '[[order]]';
var PROP_VALUE = "[[".concat(VALUE, "]]");
var PROP_ITERATORHASMORE = '[[IteratorHasMore]]';
var PROP_MAP = '[[Map]]';
var PROP_MAPITERATIONKIND = '[[MapIterationKind]]';
var PROP_MAPNEXTINDEX = '[[MapNextIndex]]';
var PROP_SET = '[[Set]]';
var PROP_SETITERATIONKIND = '[[SetIterationKind]]';
var PROP_SETNEXTINDEX = '[[SetNextIndex]]';
var KIND_VALUE = VALUE;
var KIND_KEY = KEY;
var KIND_KEY_VALUE = "".concat(KIND_KEY, "+").concat(KIND_VALUE);
var SAMEVALUEZERO = 'SameValueZero';
var collections_x_esm_ref = [],
    push = collections_x_esm_ref.push,
    splice = collections_x_esm_ref.splice;
var charAt = KEY.charAt;
var setPrototypeOf = {}.constructor.setPrototypeOf;
var collections_x_esm_hasRealSymbolIterator = collections_x_esm_typeof(symbol_iterator_x_esm) === 'symbol';
/**
 * The iterator identifier that is in use.
 *
 * Type {Symbol|string}.
 */

var symIt = symbol_iterator_x_esm;

var collections_x_esm_assertIterableEntryObject = function assertIterableEntryObject(kind, next) {
  if (kind === MAP) {
    if (Object(is_array_like_x_esm["a" /* default */])(next[VALUE]) === false || next[VALUE].length < 2) {
      throw new TypeError("Iterator value ".concat(Object(is_array_like_x_esm["a" /* default */])(next[VALUE]), " is not an entry object"));
    }
  }
};

var collections_x_esm_setPropsIterable = function setPropsIterable(args) {
  var _args = _slicedToArray(args, 3),
      kind = _args[0],
      context = _args[1],
      next = _args[2];

  var key = kind === MAP ? next[VALUE][0] : next[VALUE];
  var indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    if (kind === MAP) {
      push.call(context[PROP_VALUE], next[VALUE][1]);
    }

    push.call(context[PROP_KEY], key);
    push.call(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  } else if (kind === MAP) {
    /* eslint-disable-next-line prefer-destructuring */
    context[PROP_VALUE][indexof] = next[VALUE][1];
  }
};

var parseIterable = function parseIterable(args) {
  var _args2 = _slicedToArray(args, 4),
      kind = _args2[0],
      iterable = _args2[1],
      context = _args2[2],
      symbolIterator = _args2[3];

  var iterator = iterable[symbolIterator]();
  var next = iterator[NEXT]();
  collections_x_esm_assertIterableEntryObject(kind, next);

  while (next[DONE] === false) {
    collections_x_esm_setPropsIterable([kind, context, next]);
    next = iterator[NEXT]();
  }
};

var assertStringEntryObject = function assertStringEntryObject(kind, iterable) {
  if (kind === MAP) {
    throw new TypeError("Iterator value ".concat(charAt.call(iterable, 0), " is not an entry object"));
  }
};

var getCharsString = function getCharsString(iterable, next) {
  return {
    char1: charAt.call(iterable, next),
    char2: charAt.call(iterable, next + 1)
  };
};

var collections_x_esm_setContextString = function setContextString(context, key) {
  var indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    push.call(context[PROP_KEY], key);
    push.call(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  }
};

var collections_x_esm_getNextKey = function getNextKey(iterable, next) {
  var _getCharsString = getCharsString(iterable, next),
      char1 = _getCharsString.char1,
      char2 = _getCharsString.char2;

  if (is_surrogate_pair_x_esm(char1, char2)) {
    return {
      key: char1 + char2,
      nxt: next + 1
    };
  }

  return {
    key: char1,
    nxt: next
  };
};

var parseString = function parseString(args) {
  var _args3 = _slicedToArray(args, 3),
      kind = _args3[0],
      iterable = _args3[1],
      context = _args3[2];

  assertStringEntryObject(kind, iterable);
  var next = 0;

  while (next < iterable.length) {
    var nextKey = collections_x_esm_getNextKey(iterable, next);
    next = nextKey.nxt;
    collections_x_esm_setContextString(context, nextKey.key);
    next += 1;
  }
};

var collections_x_esm_assertArrayLikeIterable = function assertArrayLikeIterable(iterable, next) {
  if (is_primitive_default()(iterable[next])) {
    throw new TypeError("Iterator value ".concat(Object(is_array_like_x_esm["a" /* default */])(next[VALUE]), " is not an entry object"));
  }
};

var collections_x_esm_setContextArrayLike = function setContextArrayLike(args) {
  var _args4 = _slicedToArray(args, 5),
      kind = _args4[0],
      context = _args4[1],
      key = _args4[2],
      iterable = _args4[3],
      next = _args4[4];

  var indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (indexof < 0) {
    if (kind === MAP) {
      push.call(context[PROP_VALUE], iterable[next][1]);
    }

    push.call(context[PROP_KEY], key);
    push.call(context[PROP_ORDER], context[PROP_ID].get());
    context[PROP_ID][NEXT]();
  } else if (kind === MAP) {
    /* eslint-disable-next-line prefer-destructuring */
    context[PROP_VALUE][indexof] = iterable[next][1];
  }
};

var parseArrayLike = function parseArrayLike(args) {
  var _args5 = _slicedToArray(args, 3),
      kind = _args5[0],
      iterable = _args5[1],
      context = _args5[2];

  var next = 0;

  while (next < iterable.length) {
    var key = void 0;

    if (kind === MAP) {
      collections_x_esm_assertArrayLikeIterable(iterable, next);
      /* eslint-disable-next-line prefer-destructuring */

      key = iterable[next][0];
    } else {
      key = iterable[next];
    }

    collections_x_esm_setContextArrayLike([kind, context, key, iterable, next]);
    next += 1;
  }
};

var collections_x_esm_defineDefaultProps = function defineDefaultProps(context) {
  var _defineProperties;

  Object(object_define_properties_x_esm["a" /* default */])(context, (_defineProperties = {}, _defineProperty(_defineProperties, PROP_CHANGED, _defineProperty({}, VALUE, false)), _defineProperty(_defineProperties, PROP_ID, _defineProperty({}, VALUE, new big_counter_x_esm())), _defineProperty(_defineProperties, PROP_KEY, _defineProperty({}, VALUE, [])), _defineProperty(_defineProperties, PROP_ORDER, _defineProperty({}, VALUE, [])), _defineProperties));
};

var collections_x_esm_performParsing = function performParsing(args) {
  var _args6 = _slicedToArray(args, 4),
      iterable = _args6[1],
      symbolIterator = _args6[3];

  if (iterable && Object(is_function_x_esm["a" /* default */])(iterable[symbolIterator])) {
    parseIterable(args);
  } else if (is_string_default()(iterable)) {
    parseString(args);
  } else if (Object(is_array_like_x_esm["a" /* default */])(iterable)) {
    parseArrayLike(args);
  }
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * If an iterable object is passed, all of its elements will be added to the
 * new Map/Set, null is treated as undefined.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} iterable - Value to parsed.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_parse = function parse(args) {
  var _defineProperty3;

  var _args7 = _slicedToArray(args, 3),
      kind = _args7[0],
      context = _args7[1],
      iterable = _args7[2];

  var symbolIterator = symbol_iterator_x_esm_getSymbolIterator(iterable);

  if (kind === MAP) {
    Object(object_define_property_x_esm["a" /* default */])(context, PROP_VALUE, _defineProperty({}, VALUE, []));
  }

  collections_x_esm_defineDefaultProps(context);
  collections_x_esm_performParsing([kind, iterable, context, symbolIterator]);
  Object(object_define_property_x_esm["a" /* default */])(context, SIZE, (_defineProperty3 = {}, _defineProperty(_defineProperty3, VALUE, context[PROP_KEY].length), _defineProperty(_defineProperty3, WRITABLE, true), _defineProperty3));
};

var collections_x_esm_updatePointerIndexes = function updatePointerIndexes(context, pointers) {
  Object(array_some_x_esm["a" /* default */])(context[PROP_ORDER], function predicate(id, count) {
    pointers.index = count;
    return id > pointers.order;
  });
};

var updateBaseForEach = function updateBaseForEach(args) {
  var _args8 = _slicedToArray(args, 3),
      context = _args8[0],
      pointers = _args8[1],
      length = _args8[2];

  var len = length;

  if (context[PROP_CHANGE]) {
    collections_x_esm_updatePointerIndexes(context, pointers);
    context[PROP_CHANGE] = false;
    len = context[PROP_KEY].length;
  } else {
    pointers.index += 1;
  }

  pointers.order = context[PROP_ORDER][pointers.index];
  return len;
};

var collections_x_esm_doCallback = function doCallback(args) {
  var _args9 = _slicedToArray(args, 5),
      kind = _args9[0],
      context = _args9[1],
      pointers = _args9[2],
      callback = _args9[3],
      thisArg = _args9[4];

  if (Object(has_own_property_x_esm["a" /* default */])(context[PROP_KEY], pointers.index)) {
    var key = context[PROP_KEY][pointers.index];
    var value = kind === MAP ? context[PROP_VALUE][pointers.index] : key;
    callback.call(thisArg, value, key, context);
  }
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base forEach method executes a provided function once per each value
 * in the Map/Set object, in insertion order.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {Function} callback - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseForEach = function baseForEach(args) {
  var _args10 = _slicedToArray(args, 4),
      kind = _args10[0],
      context = _args10[1],
      callback = _args10[2],
      thisArg = _args10[3];

  Object(assert_is_object_x_esm["a" /* default */])(context);
  Object(assert_is_function_x_esm["a" /* default */])(callback);
  context[PROP_CHANGE] = false;
  var pointers = {
    index: 0,
    order: context[PROP_ORDER][0]
  };
  var length = context[PROP_KEY].length;

  while (pointers.index < length) {
    collections_x_esm_doCallback([kind, context, pointers, callback, thisArg]);
    length = updateBaseForEach([context, pointers, length]);
  }

  return context;
};
/**
 * The base has method returns a boolean indicating whether an element with
 * the specified key/value exists in a Map/Set object or not.
 *
 * @private
 * @param {*} key - The key/value to test for presence in the Map/Set object.
 * @returns {boolean} Returns true if an element with the specified key/value
 *  exists in the Map/Set object; otherwise false.
 */


var baseHas = function has(key) {
  /* eslint-disable-next-line babel/no-invalid-this */
  return Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(this)[PROP_KEY], key, SAMEVALUEZERO) > -1;
};
/**
 * The base clear method removes all elements from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @returns {object} The Map/Set object.
 */


var collections_x_esm_baseClear = function baseClear(kind, context) {
  Object(assert_is_object_x_esm["a" /* default */])(context);
  context[PROP_ID].reset();
  context[PROP_CHANGE] = true;
  context[SIZE] = 0;
  context[PROP_ORDER].length = 0;
  context[PROP_KEY].length = 0;

  if (kind === MAP) {
    context[PROP_VALUE].length = 0;
  }

  return context;
};

var setContextFoundBaseDelete = function setContextFoundBaseDelete(args) {
  var _args11 = _slicedToArray(args, 3),
      kind = _args11[0],
      context = _args11[1],
      indexof = _args11[2];

  if (kind === MAP) {
    splice.call(context[PROP_VALUE], indexof, 1);
  }

  splice.call(context[PROP_KEY], indexof, 1);
  splice.call(context[PROP_ORDER], indexof, 1);
  context[PROP_CHANGE] = true;
  context[SIZE] = context[PROP_KEY].length;
  return true;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base delete method removes the specified element from a Map/Set object.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key/value of the element to remove from Map/Set object.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseDelete = function baseDelete(args) {
  var _args12 = _slicedToArray(args, 3),
      kind = _args12[0],
      context = _args12[1],
      key = _args12[2];

  var indexof = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)[PROP_KEY], key, SAMEVALUEZERO);
  return indexof > -1 && setContextFoundBaseDelete([kind, context, indexof]);
};

var setContextFoundBaseAddSet = function setContextFoundBaseAddSet(args) {
  var _args13 = _slicedToArray(args, 4),
      kind = _args13[0],
      context = _args13[1],
      key = _args13[2],
      value = _args13[3];

  if (kind === MAP) {
    push.call(context[PROP_VALUE], value);
  }

  push.call(context[PROP_KEY], key);
  push.call(context[PROP_ORDER], context[PROP_ID].get());
  context[PROP_ID][NEXT]();
  context[PROP_CHANGE] = true;
  context[SIZE] = context[PROP_KEY].length;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The base set and add method.
 *
 * @private
 * @param {string} kind - Either MAP or SET.
 * @param {object} context - The Map/Set object.
 * @param {*} key - The key or value of the element to add/set on the object.
 * @param {*} [value] - The value of the element to add to the Map object.
 * @returns {object} The Map/Set object.
 */
// eslint-enable jsdoc/check-param-names


var collections_x_esm_baseAddSet = function baseAddSet(args) {
  var _args14 = _slicedToArray(args, 4),
      kind = _args14[0],
      context = _args14[1],
      key = _args14[2],
      value = _args14[3];

  var index = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(context)[PROP_KEY], key, SAMEVALUEZERO);

  if (index > -1) {
    if (kind === MAP) {
      context[PROP_VALUE][index] = value;
    }
  } else {
    setContextFoundBaseAddSet([kind, context, key, value]);
  }

  return context;
};

var thisIteratorDescriptor = _defineProperty({}, VALUE, function iterator() {
  return this;
});

var thisSpeciesDescriptor = {
  get: function species() {
    return this;
  }
};
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Set object.
 * @param {string} [iteratorKind] - Values are `value`, `key` or `key+value`.
 */

var SetIt = function SetIterator(context, iteratorKind) {
  var _PROP_ITERATORHASMORE, _PROP_SETNEXTINDEX, _defineProperties2;

  Object(object_define_properties_x_esm["a" /* default */])(this, (_defineProperties2 = {}, _defineProperty(_defineProperties2, PROP_ITERATORHASMORE, (_PROP_ITERATORHASMORE = {}, _defineProperty(_PROP_ITERATORHASMORE, VALUE, true), _defineProperty(_PROP_ITERATORHASMORE, WRITABLE, true), _PROP_ITERATORHASMORE)), _defineProperty(_defineProperties2, PROP_SET, _defineProperty({}, VALUE, Object(assert_is_object_x_esm["a" /* default */])(context))), _defineProperty(_defineProperties2, PROP_SETITERATIONKIND, _defineProperty({}, VALUE, iteratorKind || KIND_VALUE)), _defineProperty(_defineProperties2, PROP_SETNEXTINDEX, (_PROP_SETNEXTINDEX = {}, _defineProperty(_PROP_SETNEXTINDEX, VALUE, 0), _defineProperty(_PROP_SETNEXTINDEX, WRITABLE, true), _PROP_SETNEXTINDEX)), _defineProperties2));
};

var getSetNextObject = function getSetNextObject(args) {
  var _ref2;

  var _args15 = _slicedToArray(args, 3),
      iteratorKind = _args15[0],
      context = _args15[1],
      index = _args15[2];

  return _ref2 = {}, _defineProperty(_ref2, DONE, false), _defineProperty(_ref2, VALUE, iteratorKind === KIND_KEY_VALUE ? [context[PROP_KEY][index], context[PROP_KEY][index]] : context[PROP_KEY][index]), _ref2;
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


Object(object_define_property_x_esm["a" /* default */])(SetIt.prototype, NEXT, _defineProperty({}, VALUE, function next() {
  var _ref3;

  var context = Object(assert_is_object_x_esm["a" /* default */])(this[PROP_SET]);
  var index = this[PROP_SETNEXTINDEX];
  var iteratorKind = this[PROP_SETITERATIONKIND];
  var more = this[PROP_ITERATORHASMORE];

  if (index < context[PROP_KEY].length && more) {
    this[PROP_SETNEXTINDEX] += 1;
    return getSetNextObject([iteratorKind, context, index]);
  }

  this[PROP_ITERATORHASMORE] = false;
  return _ref3 = {}, _defineProperty(_ref3, DONE, true), _defineProperty(_ref3, VALUE, UNDEFINED), _ref3;
}));
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof SetIterator.prototype
 * @returns {object} This Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(SetIt.prototype, symIt, thisIteratorDescriptor);

var hasDescriptor = _defineProperty({}, VALUE, baseHas);

var sizeDescriptor = (_sizeDescriptor = {}, _defineProperty(_sizeDescriptor, VALUE, 0), _defineProperty(_sizeDescriptor, WRITABLE, true), _sizeDescriptor);
/**
 * This method returns a new Iterator object that contains the
 * values for each element in the Set object in insertion order.
 *
 * @private
 * @this Set
 * @returns {object} A new Iterator object.
 */

var setValuesIterator = function values() {
  return new SetIt(this);
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names


var SetImplementation = function Set() {
  if (Object(to_boolean_x_esm["a" /* default */])(this) === false || !(this instanceof SetImplementation)) {
    throw new TypeError("Constructor Set requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params */


  collections_x_esm_parse([SET, this, arguments.length ? arguments[0] : UNDEFINED]);
}; // noinspection JSValidateTypes

Object(object_define_properties_x_esm["a" /* default */])(SetImplementation.prototype, (_defineProperties3 = {
  /**
   * The add() method appends a new element with a specified value to the end
   * of a Set object.
   *
   * @param {*} value - Required. The value of the element to add to the Set
   *  object.
   * @returns {object} The Set object.
   */
  add: _defineProperty({}, VALUE, function add(value) {
    return collections_x_esm_baseAddSet([SET, this, value]);
  }),

  /**
   * The clear() method removes all elements from a Set object.
   *
   * @returns {object} The Set object.
   */
  clear: _defineProperty({}, VALUE, function clear() {
    return collections_x_esm_baseClear(SET, this);
  })
}, _defineProperty(_defineProperties3, DELETE, _defineProperty({}, VALUE, function $delete(value) {
  return collections_x_esm_baseDelete([SET, this, value]);
})), _defineProperty(_defineProperties3, "entries", _defineProperty({}, VALUE, function entries() {
  return new SetIt(this, KIND_KEY_VALUE);
})), _defineProperty(_defineProperties3, "forEach", _defineProperty({}, VALUE, function forEach(callback, thisArg) {
  return collections_x_esm_baseForEach([SET, this, callback, thisArg]);
})), _defineProperty(_defineProperties3, "has", hasDescriptor), _defineProperty(_defineProperties3, "keys", _defineProperty({}, VALUE, setValuesIterator)), _defineProperty(_defineProperties3, "size", sizeDescriptor), _defineProperty(_defineProperties3, "values", _defineProperty({}, VALUE, setValuesIterator)), _defineProperty(_defineProperties3, symbol_species_x_esm, thisSpeciesDescriptor), _defineProperties3));
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the values property.
 *
 * @function symIt
 * @memberof $SetObject.prototype
 * @returns {object} A new Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(SetImplementation.prototype, symIt, _defineProperty({}, VALUE, setValuesIterator));
rename_function_x_esm(SetImplementation.prototype.delete, DELETE, true);
/**
 * An object is an iterator when it knows how to access items from a
 * collection one at a time, while keeping track of its current position
 * within that sequence. In JavaScript an iterator is an object that provides
 * a next() method which returns the next item in the sequence. This method
 * returns an object with two properties: done and value. Once created,
 * an iterator object can be used explicitly by repeatedly calling next().
 *
 * @private
 * @class
 * @param {object} context - The Map object.
 * @param {string} iteratorKind - Values are `value`, `key` or `key+value`.
 */

var MapIt = function MapIterator(context, iteratorKind) {
  var _PROP_ITERATORHASMORE2, _PROP_MAPNEXTINDEX, _defineProperties4;

  Object(object_define_properties_x_esm["a" /* default */])(this, (_defineProperties4 = {}, _defineProperty(_defineProperties4, PROP_ITERATORHASMORE, (_PROP_ITERATORHASMORE2 = {}, _defineProperty(_PROP_ITERATORHASMORE2, VALUE, true), _defineProperty(_PROP_ITERATORHASMORE2, WRITABLE, true), _PROP_ITERATORHASMORE2)), _defineProperty(_defineProperties4, PROP_MAP, _defineProperty({}, VALUE, Object(assert_is_object_x_esm["a" /* default */])(context))), _defineProperty(_defineProperties4, PROP_MAPITERATIONKIND, _defineProperty({}, VALUE, iteratorKind)), _defineProperty(_defineProperties4, PROP_MAPNEXTINDEX, (_PROP_MAPNEXTINDEX = {}, _defineProperty(_PROP_MAPNEXTINDEX, VALUE, 0), _defineProperty(_PROP_MAPNEXTINDEX, WRITABLE, true), _PROP_MAPNEXTINDEX)), _defineProperties4));
};

var getMapNextObject = function getMapNextObject(args) {
  var _ref4;

  var _args16 = _slicedToArray(args, 3),
      iteratorKind = _args16[0],
      context = _args16[1],
      index = _args16[2];

  return _ref4 = {}, _defineProperty(_ref4, DONE, false), _defineProperty(_ref4, VALUE, iteratorKind === KIND_KEY_VALUE ? [context[PROP_KEY][index], context[PROP_VALUE][index]] : context["[[".concat(iteratorKind, "]]")][index]), _ref4;
};
/**
 * Once initialized, the next() method can be called to access key-value
 * pairs from the object in turn.
 *
 * @private
 * @function next
 * @returns {object} Returns an object with two properties: done and value.
 */


Object(object_define_property_x_esm["a" /* default */])(MapIt.prototype, NEXT, _defineProperty({}, VALUE, function next() {
  var _ref5;

  var context = Object(assert_is_object_x_esm["a" /* default */])(this[PROP_MAP]);
  var index = this[PROP_MAPNEXTINDEX];
  var iteratorKind = this[PROP_MAPITERATIONKIND];
  var more = this[PROP_ITERATORHASMORE];

  if (index < context[PROP_KEY].length && more) {
    this[PROP_MAPNEXTINDEX] += 1;
    return getMapNextObject([iteratorKind, context, index]);
  }

  this[PROP_ITERATORHASMORE] = false;
  return _ref5 = {}, _defineProperty(_ref5, DONE, true), _defineProperty(_ref5, VALUE, UNDEFINED), _ref5;
}));
/**
 * The @@iterator property is the same Iterator object.
 *
 * @private
 * @function symIt
 * @memberof MapIterator.prototype
 * @returns {object} This Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(MapIt.prototype, symIt, thisIteratorDescriptor); // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map. A null is treated as undefined.
 */
// eslint-enable jsdoc/check-param-names

var MapImplementation = function Map() {
  if (Object(to_boolean_x_esm["a" /* default */])(this) === false || !(this instanceof MapImplementation)) {
    throw new TypeError("Constructor Map requires 'new'");
  }
  /* eslint-disable-next-line prefer-rest-params */


  collections_x_esm_parse([MAP, this, arguments.length ? arguments[0] : UNDEFINED]);
}; // noinspection JSValidateTypes

Object(object_define_properties_x_esm["a" /* default */])(MapImplementation.prototype, (_defineProperties5 = {
  /**
   * The clear() method removes all elements from a Map object.
   *
   * @returns {object} The Map object.
   */
  clear: _defineProperty({}, VALUE, function clear() {
    return collections_x_esm_baseClear(MAP, this);
  })
}, _defineProperty(_defineProperties5, DELETE, _defineProperty({}, VALUE, function $delete(key) {
  return collections_x_esm_baseDelete([MAP, this, key]);
})), _defineProperty(_defineProperties5, "entries", _defineProperty({}, VALUE, function entries() {
  return new MapIt(this, KIND_KEY_VALUE);
})), _defineProperty(_defineProperties5, "forEach", _defineProperty({}, VALUE, function forEach(callback, thisArg) {
  return collections_x_esm_baseForEach([MAP, this, callback, thisArg]);
})), _defineProperty(_defineProperties5, "get", _defineProperty({}, VALUE, function get(key) {
  var index = Object(index_of_x_esm["a" /* default */])(Object(assert_is_object_x_esm["a" /* default */])(this)[PROP_KEY], key, SAMEVALUEZERO);
  return index > -1 ? this[PROP_VALUE][index] : UNDEFINED;
})), _defineProperty(_defineProperties5, "has", hasDescriptor), _defineProperty(_defineProperties5, "keys", _defineProperty({}, VALUE, function keys() {
  return new MapIt(this, KIND_KEY);
})), _defineProperty(_defineProperties5, "set", _defineProperty({}, VALUE, function set(key, value) {
  return collections_x_esm_baseAddSet([MAP, this, key, value]);
})), _defineProperty(_defineProperties5, "size", sizeDescriptor), _defineProperty(_defineProperties5, "values", _defineProperty({}, VALUE, function values() {
  return new MapIt(this, KIND_VALUE);
})), _defineProperty(_defineProperties5, symbol_species_x_esm, thisSpeciesDescriptor), _defineProperties5));
/**
 * The initial value of the @@iterator property is the same function object
 * as the initial value of the entries property.
 *
 * @function symIt
 * @memberof $MapObject.prototype
 * @returns {object} A new Iterator object.
 */

Object(object_define_property_x_esm["a" /* default */])(MapImplementation.prototype, symIt, _defineProperty({}, VALUE, MapImplementation.prototype.entries));
rename_function_x_esm(MapImplementation.prototype.delete, DELETE, true);
/*
 * Determine whether to use shim or native.
 */

/* istanbul ignore next */

var collections_x_esm_getMyClass = function getMyClass(Subject) {
  var MyClass = function MyClass(arg) {
    var testObject = new Subject(arg);
    setPrototypeOf(testObject, MyClass.prototype);
    return testObject;
  };

  setPrototypeOf(MyClass, Subject);
  MyClass.prototype = object_create_x_esm(Subject.prototype, {
    constructor: _defineProperty({}, VALUE, MyClass)
  });
  return MyClass;
};

var collections_x_esm_noNewfixee = function noNewfixee(Subject) {
  var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line babel/new-cap */
    return Subject();
  });
  return res.threw === false;
};

var collections_x_esm_badDoneFixee = function badDoneFixee(Subject) {
  var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    return new Subject().keys()[NEXT]()[DONE] === false;
  });
  return res.threw || res.value;
};

var collections_x_esm_badNextFunction = function badNextFunction(Subject) {
  // Safari 8
  return Object(is_function_x_esm["a" /* default */])(new Subject().keys()[NEXT]) === false;
};
/* Map fixes */

/* istanbul ignore next */


var collections_x_esm_performMapFixes = function performMapFixes() {
  var result = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return Object(to_boolean_x_esm["a" /* default */])(new Map() instanceof Map) === false;
  });
  var Export = result.threw || result.value ? MapImplementation : Map;

  var peformMapFix = function peformMapFix(fixee) {
    if (Export !== MapImplementation && fixee(Export)) {
      Export = MapImplementation;
    }
  };

  var fixees = [collections_x_esm_noNewfixee, function fixee(Subject) {
    var testMap = new Subject();

    if (typeof testMap[SIZE] !== 'number' || testMap[SIZE] !== 0) {
      return true;
    }

    var propsMap = ['has', 'set', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', symIt];
    return Object(array_some_x_esm["a" /* default */])(propsMap, function predicate(method) {
      return Object(is_function_x_esm["a" /* default */])(testMap[method]) === false;
    });
  }, function fixee(Subject) {
    // Safari 8, for example, doesn't accept an iterable.
    var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
      return new Subject([[1, 2]]).get(1) !== 2;
    });
    return res.threw || res.result;
  }, function fixee(Subject) {
    var testMap = new Subject();
    return testMap.set(1, 2) !== testMap;
  }, function fixee(Subject) {
    // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
    var testMap = new Subject([[1, 0], [2, 0], [3, 0], [4, 0]]);
    testMap.set(-0, testMap);
    var gets = testMap.get(0) === testMap && testMap.get(-0) === testMap;
    var mapUsesSameValueZero = gets && testMap.has(0) && testMap.has(-0);
    return mapUsesSameValueZero === false;
  }, function fixee(Subject) {
    if (setPrototypeOf) {
      return false;
    }

    var MyMap = collections_x_esm_getMyClass(Subject);
    var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
      return Object(to_boolean_x_esm["a" /* default */])(new MyMap([]).set(42, 42) instanceof MyMap) === false;
    });
    return res.threw || res.value;
  }, collections_x_esm_badDoneFixee, collections_x_esm_badNextFunction, function fixee(Subject) {
    var testMapProto = collections_x_esm_hasRealSymbolIterator && Object(get_prototype_of_x_esm["a" /* default */])(new Subject().keys());
    return Object(to_boolean_x_esm["a" /* default */])(testMapProto) && Object(is_function_x_esm["a" /* default */])(testMapProto[symIt]) === false;
  }];
  Object(array_for_each_x_esm["a" /* default */])(fixees, function iteratee(fixee) {
    peformMapFix(fixee);
  });
  return Export;
};
/* Set fixes */

/* istanbul ignore next */


var collections_x_esm_performSetFixes = function performSetFixes() {
  var result = Object(attempt_x_esm["a" /* default */])(function attemptee() {
    /* eslint-disable-next-line compat/compat */
    return Object(to_boolean_x_esm["a" /* default */])(new Set() instanceof Set) === false;
  });
  var Export = result.threw || result.value ? SetImplementation : Set;

  var peformSetFix = function peformSetFix(fixee) {
    if (Export !== SetImplementation && fixee(Export)) {
      Export = SetImplementation;
    }
  };

  var fixees = [collections_x_esm_noNewfixee, function fixee(Subject) {
    var testSet = new Subject();

    if (typeof testSet[SIZE] !== 'number' || testSet[SIZE] !== 0) {
      /* istanbul ignore next */
      return true;
    }

    var propsSet = ['has', 'add', 'clear', 'delete', 'forEach', 'values', 'entries', 'keys', symIt];
    return Object(array_some_x_esm["a" /* default */])(propsSet, function predicate(method) {
      return Object(is_function_x_esm["a" /* default */])(testSet[method]) === false;
    });
  }, function fixee(Subject) {
    var testSet = new Subject();
    testSet.delete(0);
    testSet.add(-0);
    return testSet.has(0) === false || testSet.has(-0) === false;
  }, function fixee(Subject) {
    var testSet = new Subject();
    return testSet.add(1) !== testSet;
  }, function fixee(Subject) {
    if (setPrototypeOf) {
      return false;
    }

    var MySet = collections_x_esm_getMyClass(Subject);
    var res = Object(attempt_x_esm["a" /* default */])(function attemptee() {
      return Object(to_boolean_x_esm["a" /* default */])(new MySet([]).add(42) instanceof MySet) === false;
    });
    return res.threw || res.value;
  }, collections_x_esm_badDoneFixee, collections_x_esm_badNextFunction, function fixee(Subject) {
    var testSetProto = collections_x_esm_hasRealSymbolIterator && Object(get_prototype_of_x_esm["a" /* default */])(new Subject().keys());
    return Object(to_boolean_x_esm["a" /* default */])(testSetProto) && Object(is_function_x_esm["a" /* default */])(testSetProto[symIt]) === false;
  }];
  Object(array_for_each_x_esm["a" /* default */])(fixees, function iteratee(fixee) {
    peformSetFix(fixee);
  });
  return Export;
};
/**
 * The Map object is a simple key/value map. Any value (both objects and
 * primitive values) may be used as either a key or a value.
 *
 * @class Map
 * @param {*} [iterable] - Iterable is an Array or other iterable object whose
 *  elements are key-value pairs (2-element Arrays). Each key-value pair is
 *  added to the new Map. A null is treated as undefined.
 */


var MapConstructor = collections_x_esm_performMapFixes();
/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * @class Set
 * @param {*} [iterable] - If an iterable object is passed, all of its elements
 * will be added to the new Set. A null is treated as undefined.
 */

var SetConstructor = collections_x_esm_performSetFixes();

var collections_x_esm_hasImplementationProps = function hasImplementationProps(object) {
  return is_boolean_object_default()(object[PROP_CHANGED]) && Object(is_object_like_x_esm["a" /* default */])(object[PROP_ID]) && Object(is_array_x_esm["a" /* default */])(object[PROP_KEY]) && Object(is_array_x_esm["a" /* default */])(object[PROP_ORDER]) && typeof object[SIZE] === 'number';
};

var collections_x_esm_hasCommon = function hasCommon(object) {
  return Object(is_object_like_x_esm["a" /* default */])(object) && Object(is_function_x_esm["a" /* default */])(object[symIt]) && collections_x_esm_hasImplementationProps(object);
};

var collections_x_esm_isMapImplementation = function isMapImplementation(object) {
  return Object(is_map_x_esm["a" /* default */])(object) || collections_x_esm_hasCommon(object) && Object(is_array_x_esm["a" /* default */])(object[PROP_VALUE]);
};
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var isMap = MapConstructor === MapImplementation ? collections_x_esm_isMapImplementation : is_map_x_esm["a" /* default */];
var collections_x_esm_isSetImplementation = function isSetImplementation(object) {
  return Object(is_set_x_esm["a" /* default */])(object) || collections_x_esm_hasCommon(object) && typeof object[PROP_VALUE] === 'undefined';
};
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var isSet = SetConstructor === SetImplementation ? collections_x_esm_isSetImplementation : is_set_x_esm["a" /* default */];



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js
var trim_left_x_esm = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js
var require_coercible_to_string_x_esm = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
var white_space_x_esm = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reRight2018 = new RegExpCtr("[".concat(white_space_x_esm["a" /* default */], "]+$"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimEnd = function trimEnd(string) {
  return replace.call(Object(require_coercible_to_string_x_esm["a" /* default */])(string), reRight2018, EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimEnd);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim = function trim(string) {
  return Object(trim_left_x_esm["a" /* default */])(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = __webpack_exports__["a"] = (trim_x_esm_trim);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
var is_nan_x_esm = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && Object(is_nan_x_esm["a" /* default */])(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = __webpack_exports__["a"] = (is_finite_x_esm_isFinite);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(87);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(77);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(90);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__(91);

var toStr = Object.prototype.toString;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

var slice = String.prototype.slice;
var toStrTags = {};
var gOPD = Object.getOwnPropertyDescriptor;
if (hasToStringTag && gOPD && Object.getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = Object.getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = Object.getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) { return typedArrays.indexOf(slice.call(toStr.call(value), 8, -1)) > -1; }
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)))

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(72);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function isNaN(value) {
	return value !== value;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(79);

module.exports = function getPolyfill() {
	if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
		return Number.isNaN;
	}
	return implementation;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var generatorFunc = getGeneratorFunc();
var GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {};

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var NumberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	} else if (a === b) {
		return true;
	} else if (NumberIsNaN(a) && NumberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(78);

var implementation = __webpack_require__(79);
var getPolyfill = __webpack_require__(80);
var shim = __webpack_require__(92);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

define(implementation, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = implementation;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWithOptions", function() { return formatWithOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var inspect_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var same_value_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var has_own_property_x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var parse_int_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var json3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var json3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var collections_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var array_filter_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var get_own_property_names_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var is_bigint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var is_bigint__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is_bigint__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var to_number_x__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27);
/* harmony import */ var attempt_x__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
/* harmony import */ var to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var object_assign_x__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















/* eslint-disable-next-line no-void */

var UNDEFINED = void 0;
var RX_NAMES = /^([A-Z][a-z]+)+$/;
var rxTest = RX_NAMES.test;
var EMPTY_STRING = '';
var split = EMPTY_STRING.split,
    stringSlice = EMPTY_STRING.slice,
    charCodeAt = EMPTY_STRING.charCodeAt;

var firstErrorLine = function firstErrorLine(error) {
  return split.call(error.message, '\n')[0];
};

var CIRCULAR_ERROR_MESSAGE;

var populateMessage = function populateMessage() {
  // Populate the circular error message lazily
  if (!CIRCULAR_ERROR_MESSAGE) {
    var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(function attemptee() {
      var a = {};
      a.a = a;
      Object(json3__WEBPACK_IMPORTED_MODULE_4__["stringify"])(a);
    });
    CIRCULAR_ERROR_MESSAGE = firstErrorLine(res.value);
  }
};

var tryStringify = function tryStringify(arg) {
  var res = Object(attempt_x__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(function attemptee() {
    return Object(json3__WEBPACK_IMPORTED_MODULE_4__["stringify"])(arg);
  });

  if (res.threw) {
    populateMessage();
    var err = res.value;

    if (err.name === 'TypeError' && firstErrorLine(err) === CIRCULAR_ERROR_MESSAGE) {
      return '[Circular]';
    }

    throw err;
  }

  return res.value;
};

var matchNames = function matchNames(e) {
  return rxTest.call(RX_NAMES, e);
};

var builtInObjects = new collections_x__WEBPACK_IMPORTED_MODULE_5__[/* SetConstructor */ "a"](Object(array_filter_x__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(get_own_property_names_x__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(global), matchNames));

var formatNumber = function formatNumber(fn, value) {
  // Format -0 as '-0'. Checking `value === -0` won't distinguish 0 from -0.
  return fn(Object(same_value_x__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, -0) ? '-0' : "".concat(value), 'number');
};

var stylizeNoColor = function stylizeNoColor(str) {
  return str;
};

var formatWithOptions = function formatWithOptions(inspectOptions, args) {
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
                  /* eslint-disable-next-line no-lonely-if */
                  if (typeof tempArg === 'bigint') {
                    tempStr = "".concat(tempArg, "n");
                  } else {
                    var constr = _typeof(tempArg) === 'object' && tempArg !== null ? tempArg.constructor : UNDEFINED; // noinspection JSObjectNullOrUndefined

                    if (!constr || typeof tempArg.toString === 'function' && ( // A direct own property.
                    Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(tempArg, 'toString') || // A direct own property on the constructor prototype in
                    // case the constructor is not an built-in object.
                    !builtInObjects.has(constr.name) && constr.prototype && Object(has_own_property_x__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(constr.prototype, 'toString'))) {
                      tempStr = Object(to_string_symbols_supported_x__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(tempArg);
                    } else {
                      tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tempArg, Object(object_assign_x__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])({}, inspectOptions, {
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

                if (is_bigint__WEBPACK_IMPORTED_MODULE_9___default()(tempNum)) {
                  tempStr = "".concat(tempNum, "n");
                } else if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempNum)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, Object(to_number_x__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(tempNum));
                }
              }
              break;

            case 79:
              // 'O'
              a += 1;
              tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[a], inspectOptions);
              break;

            case 111:
              // 'o'
              a += 1;
              tempStr = Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args[a], Object(object_assign_x__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])({}, inspectOptions, {
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

                if (is_bigint__WEBPACK_IMPORTED_MODULE_9___default()(tempInteger)) {
                  tempStr = "".concat(tempInteger, "n");
                } else if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempInteger)) {
                  tempStr = 'NaN';
                } else {
                  tempStr = formatNumber(stylizeNoColor, Object(parse_int_x__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(tempInteger));
                }
              }
              break;

            case 102:
              // 'f'
              a += 1;
              {
                var tempFloat = args[a];

                if (is_symbol__WEBPACK_IMPORTED_MODULE_8___default()(tempFloat)) {
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
    str += typeof value !== 'string' ? Object(inspect_x__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, inspectOptions) : value;
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

var format = function format() {
  /* eslint-disable-next-line prefer-rest-params */
  return formatWithOptions(UNDEFINED, arguments);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(86);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(88);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(89);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(77); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 91 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(78);
var getPolyfill = __webpack_require__(80);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function shimNumberIsNaN() {
	var polyfill = getPolyfill();
	define(Number, { isNaN: polyfill }, { isNaN: function () { return Number.isNaN !== polyfill; } });
	return polyfill;
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ })
/******/ ]);
});
//# sourceMappingURL=util-format-x.js.map