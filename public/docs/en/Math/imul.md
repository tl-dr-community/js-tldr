# Math.imul()

The **`imul()`** method returns the `product` of a C-like 32-bit multiplication of `value1` and `value2`.

## Syntax

```js
const product = Math.imul(value1, value2);
```

## Usage examples

```js
Math.imul(2, 4); // -> 8
Math.imul(-1, 8); // -> -8
Math.imul(-2, -2); // -> 4
Math.imul(0xffffffff, 5); // -> -5
Math.imul(0xfffffffe, 5); // -> -10
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)
