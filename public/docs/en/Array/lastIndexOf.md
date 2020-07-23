# Array.prototype.lastIndexOf()

The **`lastIndexOf`** method returns the last `index` at which a `search element` can be found in the `array`, or -1 if it is not present.
The array is searched backwards, starting at `fromIndex`.

## Syntax

```js
const index = array.lastIndexOf(searchElement, fromIndex);
```

## Usage examples

```js
const array = [2, 5, 9, 2];
array.lastIndexOf(2); // -> 3
array.lastIndexOf(7); // -> -1
array.lastIndexOf(2, 3); // -> 3
array.lastIndexOf(2, 2); // -> 0
array.lastIndexOf(2, -2); // -> 0
array.lastIndexOf(2, -1); // -> 3
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
