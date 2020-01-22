# Map.prototype.entries()

the **`entries`** method returns a new `Iterator` object that contains the `[key, value]` pairs for each element in the `Map` object in insertion order.

## Syntax

```js
map.entries();
```

## Usage Examples

```js
const map = new Map();
map.set('0', 'foo');
map.set(1, 'bar');
map.set({}, 'baz');

const mapIter = map.entries();

mapIter.next().value; // -> ["0", "foo"]
mapIter.next().value; // -> [1, "bar"]
mapIter.next().value; // -> [Object, "baz"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
