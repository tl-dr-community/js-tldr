# RegExp.prototype.unicode()

The **`unicode`** property indicates whether or not the **"u"** flag is used with a `regular expression`. **`unicode`** is a read-only property of an individual regular expression instance.

## Usage examples

```js
const regex1 = new RegExp('\u{61}');
const regex2 = new RegExp('\u{61}', 'u');

regex1.unicode; // -> false
regex2.unicode; // -> true
regex1.source; // -> "a"
regex2.source; // -> "a"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
