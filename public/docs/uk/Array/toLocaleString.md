# Array.prototype.toLocaleString()

The **`toLocaleString`** method returns a `string` representing the elements of the `array`.
The elements are converted to strings using their `toLocaleString` methods and these strings are separated by a locale-specific string (such as a comma “,”).

## Syntax

```js
arr.toLocaleString(locales, options);
```

## Usage examples

```js
['￥7', 500, 8123, 12].toLocaleString('ja-JP', {
  style: 'currency',
  currency: 'JPY',
}); // -> "￥7,￥500,￥8,123,￥12"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
