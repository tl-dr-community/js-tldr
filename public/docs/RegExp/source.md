# RegExp.prototype.source

The **`source`** property returns a `string` containing the source text of the `regexp` object, and it doesn't contain the two forward slashes on both sides and any flags.

## Usage examples

```js
/fooBar/gi.source; // -> "fooBar"
new RegExp().source; // -> "(?:)"
new RegExp('\n').source; // -> "\\n"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)
