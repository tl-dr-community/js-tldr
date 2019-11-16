# Array.prototype.lastIndexOf()

The `lastIndexOf` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

## Syntax

```js
arr.lastIndexOf(searchElement, fromIndex)
```
## Usage examples

```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // -> 3
numbers.lastIndexOf(7); // -> -1
numbers.lastIndexOf(2, 3); // -> 3
numbers.lastIndexOf(2, 2); // -> 0
numbers.lastIndexOf(2, -2); // -> 0
numbers.lastIndexOf(2, -1); // -> 3

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices); // -> [4, 2, 0]
```
---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
