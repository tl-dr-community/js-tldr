# Map.prototype.values

the **`values`** method returns a new `Iterator` object that contains the values for each element in the `Map` object in insertion order.

## Syntax

```js
map.values();
```

## Usage Examples

```js
const set = new Map();
set.set('0', 'foo');
set.set(1, 'bar');
set.set({}, 'baz');

const mapIter = myMap.values();

mapIter.next().value; // -> "foo"
mapIter.next().value; // -> "bar"
mapIter.next().value; // -> "baz"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)
