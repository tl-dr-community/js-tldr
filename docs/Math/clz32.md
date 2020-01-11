# Math.clz32()

The **`clz32()`** method returns the number of leading zero bits (in the 32-bit binary representation) of a `number`.

## Syntax

```js
const leadingZeros = Math.clz32(number);
```

## Usage examples

```js
Math.clz32(1);      // -> 31 (0b0000000000000000000000000000001)
Math.clz32(1000);   // -> 22 (0b0000000000000000000001111101000)
Math.clz32();       // -> 32 (0b0000000000000000000000000000000)
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32)
