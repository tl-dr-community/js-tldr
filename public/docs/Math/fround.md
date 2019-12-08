# Math.fround()

The **`fround()`** method returns the nearest 32-bit `single float` representation of a `number`.

## Syntax

```js
const singleFloat = Math.fround(number);
```

## Usage examples

```js
Math.fround(1.5);           // -> 1.5
Math.fround(1.5) === 1.5;   // -> true

Math.fround(1.337);             // -> 1.3370000123977661
Math.fround(1.337) === 1.337;   // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)
