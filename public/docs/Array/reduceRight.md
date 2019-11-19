# Array.prototype.reduceRight()

The `reduceRight` method applies a `function` against an `accumulator` and each `element` of the `array` from right-to-left to reduce it to a single value.

## Syntax

```js
const resultAccumulator = array.reduceRight(
  (accumulator, currentValue, index, array) => updatedAccumulator,
  initialAccumulator,
);
```

## Usage examples

```js
[0, 1, 2, 3].reduceRight((accumulator, element) => a + b); // -> 6

[
  { id: 1, value: 'One' },
  { id: 2, value: 'Two' },
  { id: 3, value: 'Three' },
].reduce((accumulator, element) => [accumulator, element].join('+') ''); // -> 'Three+Two+One'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
