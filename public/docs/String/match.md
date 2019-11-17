# String.prototype.match()

The `match` method retrieves the result of matching a string against a regular expression.

## Syntax

```js
str.match(regexp)
```

## Usage examples

```js
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array); // -> ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
