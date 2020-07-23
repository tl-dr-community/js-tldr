# Number.parseInt()

The **`parseInt`** method parses a `string` argument and returns an `integer`.

## Syntax

```js
const integer = Number.parseInt(string, radix);
```

> NOTE: The radix is the number of unique digits, including the digit zero, used to represent numbers in a positional numeral system. For example, for the decimal/denary system the radix is ten, because it uses the ten digits from 0 through 9.

## Usage examples

```js
parseInt(4.7, 10); // -> 4
parseInt(4.7); // -> 4
parseInt(' 0xF', 16); // -> 15
parseInt('Not really a number'); // -> NaN
```

---

[MDN reference](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
