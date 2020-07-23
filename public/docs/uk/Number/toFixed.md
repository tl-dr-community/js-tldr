# Number.prototype.toFixed()

The **`toFixed`** method formats a `number` using fixed-point notation.

> NOTE: returns string.

## Syntax

```js
const formattedString = number.toFixed(digits);
```

> NOTE: parameter digits represents number of digits after the decimal point.

## Usage examples

```js
(666.6767678).toFixed();
// -> "667"
(666.6767678).toFixed(2);
// ->"666.68"
(1.23e20).toFixed(2);
// -> '123000000000000000000.00'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
