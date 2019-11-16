# Array.prototype.includes()

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

## Syntax
```js
arr.includes(valueToFind, fromIndex)
```
## Usage examples
```js
[1, 2, 3].includes(2); // -> true
[1, 2, 3].includes(4); // -> false
[1, 2, 3].includes(3, 3); // -> false
[1, 2, 3].includes(3, -1); // -> true
[1, 2, NaN].includes(NaN); // -> true

var arr = ['a', 'b', 'c'];
arr.includes('c', 3); // -> false
arr.includes('c', 100); // -> false

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // -> true
arr.includes('b', -100); // -> true
arr.includes('c', -100); // -> true
arr.includes('a', -2); // -> false

(function() {
  console.log([].includes.call(arguments, 'a')); // -> true
  console.log([].includes.call(arguments, 'd')); // -> false
})('a','b','c');
```
---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
