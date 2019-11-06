# [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

The `concat` method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array). It does not recurse into nested array arguments.

## Syntax
const _new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])_

## Usage examples
Concatenating two arrays
The following code concatenates two arrays:

```js
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

letters.concat(numbers); // -> ['a', 'b', 'c', 1, 2, 3]
```  

Concatenating three arrays
The following code concatenates three arrays:

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
Concatenating values to an array
The following code concatenates three values to an array:

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric); 
// results in ['a', 'b', 'c', 1, 2, 3]
Concatenating nested arrays
The following code concatenates nested arrays and demonstrates retention of references:

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
