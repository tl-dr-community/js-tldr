# Array.prototype.every()

**The `every()` method tests whether all elements in the array pass the test** implemented by the provided function. It returns a `Boolean` value.

You can pass reference to use for `this` as a second argument.

> NOTE: This method returns true for any condition put on an empty array.

## Syntax

```js
array.every(callback(element, index, array):Boolean, thisArgument);
```

## Usage examples

```js
const moreThanTen = element => element > 10;

[12, 5, 8, 130, 44].every(moreThanTen); // -> false
[12, 54, 18, 130, 44].every(moreThanTen); // -> true
[].every(moreThanTen); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
