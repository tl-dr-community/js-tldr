# [Array.prototype.copyWithin()
## Description
The `copyWithin` works like C and C++'s `memmove`, and is a high-performance method to shift the data of an `Array`. 
## Syntax
arr.copyWithin(target[, start[, end]])
## Examples
``` js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]
```
``` js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
```
``` js
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
```
``` js
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```
``` js
[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}
```
`` js
// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);
```
``` js i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]
```
``` js
// On platforms that are not yet ES2015 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```
---
[MDM refeerence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
