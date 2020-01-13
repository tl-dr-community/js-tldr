# Set.has

the **`has`** method returns a boolean indicating whether an element with the specified value exists in a `Set` object or not

## Syntax

```js
set.has(key))
```

## Usage Examples

```js
const mySet = new Set();
mySet.add('foo');

mySet.has('foo'); // -> true
mySet.has('bar'); // -> false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // -> true
set1.has({ key1: 1 }); // -> false because they are different object references
set1.add({ key1: 1 }); // now set1 contains 2 entries
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
