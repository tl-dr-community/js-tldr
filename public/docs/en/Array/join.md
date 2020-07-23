# Array.prototype.join()

The **`join`** method creates and returns a _new_ `string` by concatenating all of the elements in an `array` (or an array-like object), separated by commas or a specified `separator string`.
If the `array` has only one item, then that item will be returned without using the separator.

## Syntax

```js
const string = array.join(separator);
```

## Usage examples

```js
const array = ['Wind', 'Water', 'Fire'];
array.join(); // -> 'Wind,Water,Fire'
array.join(', '); // -> 'Wind, Water, Fire'
array.join(' + '); // -> 'Wind + Water + Fire'
array.join(''); // -> 'WindWaterFire'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
