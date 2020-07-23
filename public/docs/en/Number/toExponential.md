# Number.prototype.toExponential()

The **`toExponential`** method returns a `string` representing the `number` in **exponential notation**.

> NOTE: exponential notation is a way of expressing numbers that are too big or too small to be conveniently written in decimal form.

## Syntax

```js
const exponentialNotation = number.toExponential(fractionDigits);
```

> NOTE: fractionDigits is an optional parameter that represents the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

## Usage examples

```js
(99.89898989).toExponential(); // -> "9.989898989e+1"
(77.1234).toExponential(2); // -> "7.71e+1"
(77).toExponential(); // -> "7.7e+1"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
