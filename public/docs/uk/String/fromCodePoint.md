# String.fromCodePoint()

The static **`fromCodePoint`** method returns a `string` created by using the specified sequence of code points (`numN`).

## Syntax

```js
const string = String.fromCodePoint(num1, ..., numN);
```

## Usage examples

```js
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // -> "\uD834\uDF06a\uD834\uDF07"
String.fromCodePoint('_'); // -> RangeError
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
