# String.prototype.substring()

The `substring` method returns the part of the `string` between the `start` and `end` indexes, or to the end of the string.

## Syntax

```js
const substring = string.substring(startIndex, endIndex);
```

## Usage examples

```js
const string = 'Mozilla';
string.substring(2); // -> "zilla"
string.substring(2, 5); // -> "zil"
string.substring(5, 2); // -> "zil"
string.substring(string.length - 4); // -> 'illa'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
