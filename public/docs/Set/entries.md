# Set.prototype.entries()

the **`entries`** method returns a new `Iterator` object that contains the `[value, value]` for each element in the `Set` object, in insertion order. For `Set` objects there is no `key` like in `Map` objects. However, to keep the API similar to the `Map` object, each entry has the same `value` for its `key` and `value` here, so that an array `[value, value]` is returned.

## Syntax

```js
set.entries();
```

## Usage Examples

```js
const set = new Set();
set.add('foobar');
set.add(1);
set.add('baz');

const setIter = set.entries();

setIter.next().value; // -> ["foobar", "foobar"]
setIter.next().value; // -> [1, 1]
setIter.next().value; // -> ["baz, "baz"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)
