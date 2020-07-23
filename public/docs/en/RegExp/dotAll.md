# RegExp.prototype.dotAll

The **`dotAll`** property indicates whether or not the **"s"** flag is used with the regular expression. **`dotAll`** is a read-only property of an individual regular expression instance.

## Usage examples

```js
new RegExp('foobar', 's').dotAll; // -> true
/foobar/gi.dotAll; // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
