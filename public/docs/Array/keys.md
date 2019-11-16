# Array.prototype.keys()

The `keys` method returns a new Array Iterator object that contains the keys for each index in the array.

## Syntax

```js
arr.keys()
```

## Usage examples

```js
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // -> ['0', '2']
console.log(denseKeys); // -> [0, 1, 2]
```
