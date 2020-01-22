# Set.prototype.forEach()

the **`forEach`** method executes a provided function once for each value in the `Set` object, in insertion order.

## Syntax

```js
set.forEach(callback[, thisArg])
```

## Usage Examples

```js
function logSetElements(value1, value2, set) {
  console.log('s[' + value1 + '] = ' + value2);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
