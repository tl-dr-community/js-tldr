# Number.isSafeInteger()

The **`isSafeInteger`** method determines whether the provided `value` is a `number` that is a `safe integer`.

> NOTE: returns boolean.

> NOTE: JavaScript can only safely represent integers i in the range −2<sup>53</sup> < i < 2<sup>53</sup>. In the range (−2<sup>53</sup>, 2<sup>53</sup>) (excluding the lower and upper bounds), JavaScript integers are **safe**:

## Syntax

```js
Number.isSafeInteger(value);
```

## Usage examples

```js
Number.isSafeInteger(3); // -> true
Number.isSafeInteger(Math.pow(2, 53)); // -> false
Number.isSafeInteger(Math.pow(2, 53) - 1); // -> true
Number.isSafeInteger(NaN); // -> false
Number.isSafeInteger(Infinity); // -> false
Number.isSafeInteger('3'); // -> false
Number.isSafeInteger(3.1); // -> false
Number.isSafeInteger(3.0); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
