# Map.entries

the **`entries`** method returns a new `Iterator` object that contains the `[key, value]` pairs for each element in the `Map` object in insertion order.

## Syntax

```js
map.entries();
```

## Usage Examples

```js
let myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

let mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
