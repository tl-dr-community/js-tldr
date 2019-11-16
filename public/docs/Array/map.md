# Array.prototype.map()

The `map` method creates a new array with the results of calling a provided function on every element in the calling array.

## Syntax

```js
var new_array = arr.map(function callback(currentValue[, index, array) {
    // Return element for new_array
}, thisArg)
```
## Usage examples

```js
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
return Math.sqrt(num)
});
// -> roots is now [1, 2, 3]
// -> numbers is still [1, 4, 9]

var kvArray = [{key: 1, value: 10}, // -> kvArray is still: {key: 1, value: 10}, 
               {key: 2, value: 20}, // -> {key: 2, value: 20},  
               {key: 3, value: 30}]; // -> {key: 3, value: 30}]
               

var reformattedArray = kvArray.map(obj =>{ 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj; // -> reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],
});

var numbers = [1, 4, 9]; // -> numbers is still [1, 4, 9]
var doubles = numbers.map(function(num) {
  return num * 2; // -> doubles is now [2, 8, 18]
});

var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```
---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
