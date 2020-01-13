# Set.delete

the **`delete`** method removes the specified element from a `Set` object by key

## Syntax

```js
set.delete(value);
```

## Usage Examples

```js
const set = new Set();
set.add('foo');

set.delete('bar'); // -> false (No "bar" element found to be deleted)
set.delete('foo'); // -> true  (Successfully removed)

set.has('foo'); // -> false (The "foo" element is no longer present)

set.add({ x: 10, y: 20 }); // Add object to the set
set.add({ x: 20, y: 30 }); // Add object to the set

// Delete any point with `x > 10`
set.forEach(point => {
  if (point.x > 10) {
    set.delete(point);
  }
});
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)
