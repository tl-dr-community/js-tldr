# Map.clear

the **`clear`** method removes all elements from a Map object.

## Syntax

```js
map.clear();
```

## Usage Examples

```js
const map = new Map();
map.set('bar', 'baz');
map.set(1, 'foo');

map.size; // -> 2
map.has('bar'); // -> true

map.clear();

map.size; // -> 0
map.has('bar'); // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
