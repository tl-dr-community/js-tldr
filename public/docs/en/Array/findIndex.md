# Array.prototype.findIndex()

The **`findIndex`** method returns the `index` of the first element in the `array` that satisfies testing `function`.

> NOTE: You may pass a reference for `this` to be used within test function.

> NOTE: If no element passed the test, **`findIndex`** returns **-1**

## Syntax

```js
const index = array.findIndex((element, index, array) => Boolean, thisArgument);
```

## Usage examples

```js
[1952, 1956, 1960, 1964].findIndex(year => year > 1959);
// -> 2
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
