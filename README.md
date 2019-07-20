<a href="https://travis-ci.org/Xotic750/util-format-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/util-format-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/util-format-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/util-format-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/util-format-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/util-format-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/util-format-x" title="npm version">
<img src="https://badge.fury.io/js/util-format-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_util-format-x"></a>

## util-format-x

An implementation of node's util.format and util.formatWithOptions

- [util-format-x](#module_util-format-x)
  - [`.format`](#module_util-format-x.format) ⇒ <code>boolean</code>
  - [`.formatWithOptions`](#module_util-format-x.formatWithOptions) ⇒ <code>boolean</code>

<a name="module_util-format-x.format"></a>

### `util-format-x.format` ⇒ <code>string</code>

**See**: https://nodejs.org/api/assert.html

The format() method returns a formatted string using the first argument as a printf-like format.

The first argument is a string containing zero or more placeholder tokens. Each placeholder token is
replaced with the converted value from the corresponding argument. Supported placeholders are:

%s - String.

%d - Number (integer or floating point value) or BigInt.

%i - Integer or BigInt.

%f - Floating point value.

%j - JSON. Replaced with the string '[Circular]' if the argument contains circular references.

%o - Object. A string representation of an object with generic JavaScript object formatting. Similar to inspect() with
options { showHidden: true, showProxy: true }. This will show the full object including non-enumerable properties and proxies.

%O - Object. A string representation of an object with generic JavaScript object formatting. Similar to inspect() without options.
This will show the full object not including non-enumerable properties and proxies.

%% - single percent sign ('%'). This does not consume an argument.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.

| Param     | Type                | Description |
| --------- | ------------------- | ----------- |
| f         | <code>string</code> | Template.   |
| [...args] | <code>\*</code>     | Values.     |

**Example**

```js
import {format} from 'util-format-x';

// If the placeholder does not have a corresponding argument,
// the placeholder is not replaced.
format('%s:%s', 'foo'); // Returns: 'foo:%s'

// If there are more arguments passed to the format() method than the number
// of placeholders, the extra arguments are coerced into strings (for objects
// and symbols, inspect() is used) then concatenated to the returned
// string, each delimited by a space.
format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'

// If the first argument is not a format string then format() returns a
// string that is the concatenation of all arguments separated by spaces.
// Each argument is converted to a string using inspect().
format(1, 2, 3); // '1 2 3'

// If only one argument is passed to format(), it is returned as it is
//without any formatting.
format('%% %s'); // '%% %s'
```

<a name="module_util-format-x.formatWithOptions"></a>

### `util-format-x.formatWithOptions` ⇒ <code>string</code>

**See**: https://nodejs.org/api/assert.html

This function is identical to format(), except in that it takes an inspectOptions argument which specifies options that are passed along to inspect().

```js
import {formatWithOptions} from 'util-format-x';

formatWithOptions({colors: true}, 'See object %O', {foo: 42});
// Returns 'See object { foo: 42 }', where `42` is colored as a number
// when printed to a terminal.
```
