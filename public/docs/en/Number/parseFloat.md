# Number.parseFloat()

The **`parseFloat`** method parses a `string` argument and returns a `floating point number`.

## Syntax

```js
const number = Number.isSafeInteger(value);
```

## Usage examples

```js
Number.parseFloat('1.23'); // -> 1.23
Number.parseFloat('1.23abc'); // -> 1.23
Number.parseFloat('1'); // -> 1
Number.parseFloat('123e-3'); // -> 0.123
Number.parseFloat(Infinity); // -> Infinity

// These all return NaN:
Number.parseFloat('abc1.23abc');
Number.parseFloat('abc1.23');
Number.parseFloat(undefined);
Number.parseFloat(true);
Number.parseFloat(null);
Number.parseFloat([]);
Number.parseFloat({});
Number.parseFloat('');
Number.parseFloat(' ');
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)
