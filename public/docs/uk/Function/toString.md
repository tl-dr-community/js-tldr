# Function.prototype.toString()

The **`toString`** method returns a `string` representing the source code of the `function`.

## Syntax

```js
function.toString();
```

## Usages examples

```js
function sum(a, b) {
  return a + b;
}
sum.toString(); // -> "function sum(a, b) { return a + b; }"
Math.abs.toString(); // -> "function abs() { [native code] }"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)
