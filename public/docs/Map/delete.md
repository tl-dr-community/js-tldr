# Map.delete

the **`delete`** method removes the specified element from a `Map` object by key

## Syntax

```js
map.delete(key);
```

## Usage Examples

```js
var myMap = new Map();
myMap.set('bar', 'foo');

myMap.delete('bar'); // Returns true. Successfully removed.
myMap.has('bar'); // Returns false. The "bar" element is no longer present.
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
