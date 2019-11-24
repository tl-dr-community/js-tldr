# Number.isNaN()

The **`isNaN`** method determines whether the passed `value` is `NaN` and its type is **Number**.

> NOTE: returns boolean.

## Syntax

```js
const result = Number.isNaN(value);
```

## Usage examples

```js
Number.isNaN(0 / 0);
// -> true
Number.isNaN(NaN);
// -> true

//These all return false:
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
