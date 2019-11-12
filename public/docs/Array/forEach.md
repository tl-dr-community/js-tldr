# Array.prototype.forEach()

The `forEach()` method executes a provided function once for each array element.

## Syntax

```js
arr.forEach(callback(currentValue index,  array), thisArg);
```

## Usage examples

```js
const array1 = [1, 2, 3];

array1.forEach(function(element, index) {
  array1[index] = element + 1;
});
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
