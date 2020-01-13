# Map.delete

the **`delete`** method removes the specified element from a `Map` object by key

## Syntax

```js
map.delete(key);
```

## Usage Examples

```js
const map = new Map();
map.set('bar', 'foo');

map.delete('bar'); // -> true (Successfully removed)
map.has('bar'); // -> false (The "bar" element is no longer present)
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
