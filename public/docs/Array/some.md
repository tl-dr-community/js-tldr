# Array.prototype.some()

The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 

## Syntax

```js
arr.some(callback(element, index, array), thisArg)
```

## Usage examples

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // -> false
[12, 5, 8, 1, 4].some(isBiggerThan10); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
