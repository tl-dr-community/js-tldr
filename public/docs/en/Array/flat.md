# Array.prototype.flat()

The **`flat`** method creates a _new_ `array` with all sub-array elements concatenated into it recursively up to the specified depth.

> NOTE: If you want to flatten all sub-arrays and don't want to count necessary depth - use 'Infinity' as argument

> NOTE: The flat method removes empty slots in arrays.

## Syntax

```js
const modifiedArray = originalArray.flat(depth);
```

## Usage examples

```js
const modifiedArray = [
  'first',
  'layer',
  ['second', 'layer', ['and', 'third', 'layer']],
].flat();
// -> ['first', 'layer', 'second', 'layer', ["and", "third", "layer"]]
const modifiedArray = [
  'first',
  'layer',
  ['second', 'layer', ['and', 'third', 'layer']],
].flat(2);
// -> ["first", "layer", "second", "layer", "and", "third", "layer"]
const modifiedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity);
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
