# Array.prototype.unshift()

The `unshift` method inserts the given elements to the _beginning_ of an `array` or array-like object.
Result of `unshift` call is length of modified array.

## Syntax

```js
const arrayLength = array.unshift(value1, value2, ..., valueN);
```

## Usage examples

```js
const array = [1, 2];
array.unshift(0); // -> 3
array; // -> [0, 1, 2]
array.unshift(-2, -1); // 5
array; // -> [-2, -1, 0, 1, 2]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
