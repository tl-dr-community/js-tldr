# Array.prototype.concat()

**The `concat` method creates a _new_ `array` consisting of the elements in the object on which it is called**, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).

It does not recurse into nested array arguments.

## Syntax

```js
const newArray = originalArray.concat(value1, value2, ..., valueN);
```

## Usage examples

```js
['a', 'b', 'c'].concat([1, 2, 3]); // -> ['a', 'b', 'c', 1, 2, 3]

[1, 2, 3].concat(4, 5, 6, [7, 8, 9]); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

['a', 'b', 'c'].concat(1, [2, 3], [[4]]); // -> ['a', 'b', 'c', 1, 2, 3, [4]]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
