# Array.prototype.flatMap()

The `flatMap()` method first **maps** each element using a mapping function, **then flattens** the result into a **new array**. 


## Syntax
```js
const modifiedArray = originalArray.flatMap(callback(currentValue, index, array):Boolean, thisArgument);
```

## Usage examples
```js
//.map():
[1, 2, 3, 4].map(x => [x * 2]); 
// -> [[2], [4], [6], [8]]

//.flatMap():
[1, 2, 3, 4].flatMap(x => [x * 2]);
// -> [2, 4, 6, 8]

// Note, that only one level is flattened:
[1, 2, 3, 4].flatMap(x => [[x * 2]]);
// -> [[2], [4], [6], [8]]
```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)