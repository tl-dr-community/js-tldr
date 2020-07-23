# String.prototype.codePointAt()

The **`codePointAt`** method returns a non-negative `integer` that is the Unicode code point value.

## Syntax

```js
const integer = string.codePointAt(index);
```

## Usage examples

```js
'ABC'.codePointAt(1); // -> 66
'\uD800\uDC00'.codePointAt(0); // -> 65536

'XYZ'.codePointAt(42); // -> undefined

for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
  console.log(codePoint.codePointAt(0).toString(16));
} // -> '1f40e', '1f471', '2764'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
