# Array.prototype.join()

The `join` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

## Syntax
```js
arr.join([separator])
```
## Usage examples
```js
var a = ['Wind', 'Water', 'Fire'];
a.join(); // -> 'Wind,Water,Fire'
a.join(', '); // -> 'Wind, Water, Fire'
a.join(' + '); // -> 'Wind + Water + Fire'
a.join(''); // -> 'WindWaterFire'

function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // -> '1,a,true'
}
f(1, 'a', true); // -> expected output: "1,a,true"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
