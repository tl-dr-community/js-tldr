# Set.prototype.keys()

The **`keys()`** method is an alias for the **`values()`** method (for similarity with `Map` objects); it behaves exactly the same and returns **`values`** of `Set` elements.

The **`values()`** method returns a new `Iterator` object that contains the values for each element in the `Set` object in insertion order.

## Syntax

```js
set.keys();
```

## Usage Examples

```js
const set = new Set();
set.add('foo');
set.add('bar');
set.add('baz');

const setIter = set.keys();

setIter.next().value; // -> "foo"
setIter.next().value; // -> "bar"
setIter.next().value; // -> "baz"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)
