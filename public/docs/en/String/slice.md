# String.prototype.slice()

The **`slice`** method extracts a `section` of a `string`, using `begin` and `end` indexes.

## Syntax

```js
const section = string.slice(beginIndex, endIndex);
```

## Usage examples

```js
const string = 'The morning is upon us.';
string.slice(1, 8); // -> "he morn"
string.slice(4, -2); // -> "morning is upon u"
string.slice(12); // -> "is upon us."
string.slice(30); // -> ""
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
