# Map.keys

the **`keys`** method returns a new `Iterator` object that contains the keys for each element in the `Map` object in insertion order.

## Syntax

```js
map.keys();
```

## Usage Examples

```js
const map = new Map();
map.set('0', 'foo');
map.set(1, 'bar');
map.set({}, 'baz');

const mapIter = map.keys();

console.log(mapIter.next().value); // -> "0"
console.log(mapIter.next().value); // -> 1
console.log(mapIter.next().value); // -> Object
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)
