# Array.prototype.fill()

The `fill` method fills all the elements of an `array` with a static `value`.
This method modifies original array.

## Syntax

```js
originalArray.fill(value, startIndex, endIndex);
```

## Usage examples

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // -> [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // -> [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // -> [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // -> [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // -> [4, 2, 3]
Array(3).fill(4); // -> [4, 4, 4]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
