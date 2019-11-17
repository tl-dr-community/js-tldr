# String.fromCharCode()

The static `fromCharCode` method returns a string created from the specified sequence of UTF-16 code units.

## Syntax

```js
String.fromCharCode(num1, ..., numN)
```

## Usage examples

```js
String.fromCharCode(65, 66, 67); // -> returns "ABC"
String.fromCharCode(0x2014);     // -> -> returns "—"
String.fromCharCode(0x12014);    // -> also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212);       // -> also returns "—"; 8212 is the decimal form of 0x2014
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
