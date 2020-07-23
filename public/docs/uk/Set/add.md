# Set.prototype.set()

the **`add`** method appends a new element with a specified value to the end of a `Set` object.

## Syntax

```js
set.set(value);
```

## Usage Examples

```js
const set = new Set();

set.add(1);
set.add(5).add('some text'); // chainable

set.size; // -> 3
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)
