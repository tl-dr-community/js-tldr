# Math.E

The `Math.E` property represents the base of natural logarithms, e, approximately **2.718**.

## Usage examples

```js
Math.E; // -> 2.718281828459045

const compoundOneYear = (interestRate, currentValue) => {
  return currentValue * Math.E ** interestRate;
};

compoundOneYear(0.05, 100); // -> 105.12710963760242
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E)
