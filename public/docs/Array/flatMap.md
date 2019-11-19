# Array.prototype.flatMap()

The `flatMap` method first maps each element using a `mapping function`, then flattens the result into a new array.
You may pass a reference for `this` to be used within test function.

## Syntax

```js
const newArray = originalArray.flatMap(
  (currentValue, index, array) => Boolean,
  thisParameter,
);
```

## Usage examples

```js
const array = [1, 2, 3, 4];
array.map(x => [x * 2]); // -> [[2], [4], [6], [8]]
array.flatMap(x => [x * 2]); // -> [2, 4, 6, 8]
array.flatMap(x => [[x * 2]]); // -> [[2], [4], [6], [8]]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
