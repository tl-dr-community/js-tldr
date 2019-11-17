# String.prototype.concat()

The `concat` method concatenates the string arguments to the calling string and returns a new string.

## Syntax

```js
str.concat(string2, string3, ..., stringN)
```

## Usage examples

```js
var hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'));
/* Hello, Kevin. Have a nice day. */

var greetList = ['Hello', ' ', 'Venkat', '!'];
"".concat(...greetList); // -> "Hello Venkat!"

"".concat({}); // -> [object Object]
"".concat([]); // -> ""
"".concat(null); // -> "null"
"".concat(true); // -> "true"
"".concat(4, 5); // -> "45"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
