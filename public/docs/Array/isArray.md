# Array.isArray()

The `isArray` method determines whether the passed `value` is an **Array**.

## Syntax

```js
const result = Array.isArray(value);
```

## Usage examples

```js
Array.isArray([]); // -> true
Array.isArray([1, 2, 3]); // -> true
Array.isArray(new Array()); // -> true
Array.isArray(); // -> false
Array.isArray(new Uint8Array(32)); // -> false
Array.isArray({ __proto__: Array.prototype }); // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
