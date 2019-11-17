# Array.prototype.includes()

The `includes` method determines whether an `array` includes a certain value among its entries, returning a boolean value as a result.

## Syntax

```js
const result = array.includes(value, fromIndex);
```

## Usage examples

```js
const array = [1, 2, 3];
array.includes(2); // -> true
array.includes(4); // -> false
array.includes(3, 3); // -> false
array.includes(3, -1); // -> true
[1, 2, NaN].includes(NaN); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
