# String.prototype.padEnd()

The `padEnd` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

## Syntax

```js
str.padEnd(targetLength , padString)
```

## Usage examples

```js
'abc'.padEnd(10);          // -> "abc       "
'abc'.padEnd(10, "foo");   // -> "abcfoofoof"
'abc'.padEnd(6, "123456"); // -> "abc123"
'abc'.padEnd(1);           // -> "abc"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
