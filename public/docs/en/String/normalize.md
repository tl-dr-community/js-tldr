# String.prototype.normalize()

The **`normalize`** method returns the Unicode Normalization Form of a given `string`. If the value isn't a string, it will be converted to one first.

The `form` argument is one of "NFC", "NFD", "NFKC", or "NFKD", specifying the Unicode Normalization Form. If omitted or undefined, "NFC" is used.

See more details at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize#Parameters)

## Syntax

```js
const normalizedForm = string.normalize(form);
```

## Usage examples

```js
// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
const str = '\u1E9B\u0323';
str.normalize(); // -> '\u1E9B\u0323'
str.normalize('NFC'); // -> '\u1E9B\u0323'
str.normalize('NFD'); // -> '\u017F\u0323\u0307'
str.normalize('NFKC'); // -> '\u1E69'
str.normalize('NFKD'); // -> '\u0073\u0323\u0307'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
