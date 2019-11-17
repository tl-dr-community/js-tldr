# String.prototype.normalize()

The `normalize` method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).

## Syntax

```js
str.normalize(form)
```

## Usage examples

```js
// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = '\u1E9B\u0323';


// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize();      // same as above
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
