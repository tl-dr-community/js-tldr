# String.prototype.padStart()

The `padStart` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

## Syntax

```js
str.padStart(targetLength , padString)
```

## Usage examples

```js
'abc'.padStart(10);         // -> "       abc"
'abc'.padStart(10, "foo");  // -> "foofoofabc"
'abc'.padStart(6,"123465"); // -> "123abc"
'abc'.padStart(8, "0");     // -> "00000abc"
'abc'.padStart(1);          // -> "abc"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
