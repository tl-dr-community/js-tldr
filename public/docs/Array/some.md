# Array.prototype.some()

The `some` method tests whether _at least one_ `element` in the `array` passes the `test function`.
It returns a `Boolean` value.
You may pass a reference for `this` to be used within test function.

## Syntax

```js
const result = array.some((element, index, array) => Boolean, thisParameter);
```

## Usage examples

```js
const isBiggerThan10 => (element) => element > 10;

[2, 5, 8, 1, 4].some(isBiggerThan10); // -> false
[12, 5, 8, 1, 4].some(isBiggerThan10); // -> true
[].some(isBiggerThan10); // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
