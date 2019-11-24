# Array.prototype.reduce()

The **`reduce`** method executes a `reducer function` on each `element` of the `array`, resulting in a single output `value`.

## Syntax

```js
const value = array.reduce(
  (accumulator, element, index, array) => updatedAccumulator,
  initialAccumulator,
);
```

## Usage examples

```js
[0, 1, 2, 3].reduce((accumulator, element) => accumulator + element, 0); // -> 6

[
  { id: 1, value: 'One' },
  { id: 2, value: 'Two' },
  { id: 3, value: 'Three' },
].reduce((accumulator, element) => [accumulator, element].join('+') ''); // -> 'One+Two+Three'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
