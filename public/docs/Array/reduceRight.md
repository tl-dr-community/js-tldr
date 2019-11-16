# Array.prototype.reduceRight()

The `reduceRight` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

## Syntax

```js
arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
```

## Usage examples

```js
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});  // ->  sum is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []); // ->  flattened is [4, 5, 2, 3, 0, 1]

var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left); // -> "12345"
console.log(right); // -> "54321"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
