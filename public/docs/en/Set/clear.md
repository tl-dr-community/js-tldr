# Set.prototype.clear()

the **`clear`** method removes all elements from a Set object.

## Syntax

```js
set.clear();
```

## Usage Examples

```js
const set = new Set();
set.add(1);
set.add('foo');

set.size; // -> 2
set.has('foo'); // -> true

set.clear();

set.size; // -> 0
set.has('bar'); // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)
