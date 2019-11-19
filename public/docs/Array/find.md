# Array.prototype.find()

The `find` method **returns the `value`** of a first element in `array` that satisfies testing `function`.
You may pass a reference for `this` to be used within test function.

## Syntax

```js
const result = array.find((element, index, array) => Boolean, thisParameter);
```

## Usage examples

```js
const users = [
  { name: 'Michelangelo', country: 'Italy' },
  { name: 'Vinton Gray Cerf', country: 'USA' },
  { name: 'Egor Letov', country: 'Russia' },
  { name: 'Arthur Morgan', country: 'USA' },
];
users.find(({ country }) => country === 'USA'); // -> {name: "Vinton Gray Cerf", country: "USA"}
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
