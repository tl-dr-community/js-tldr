# Array.prototype.map()

The `map` method creates a _new_ `array` with the results of calling a provided `function` on _every_ element in the calling `array`.
You may pass a reference for `this` to be used within test function.

## Syntax

```js
const newArray = array.map(
  (element, index, array) => elementToIncludeInNewArray,
  thisParameter,
);
```

## Usage examples

```js
[1, 4, 9].map(n => n * 2); // -> [2, 8, 18]
[1, 4, 9].map(Math.sqrt); // -> [1, 2, 3]

[
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
].map(({ key, value }) => ({ [key]: value })); // -> [{1: 10}, {2: 20}, {3: 30}],
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
