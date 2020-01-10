# Map.clear

the **`clear`** method removes all elements from a Map object.

## Syntax

```js
map.clear();
```

## Usage Examples

```js
var myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

myMap.size; // 2
myMap.has('bar'); // true

myMap.clear();

myMap.size; // 0
myMap.has('bar'); // false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
