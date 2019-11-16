# Array.prototype.indexOf()

The `indexOf` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

## Syntax
```js
arr.indexOf(searchElement, fromIndex)
```

## Usage examples
```js
var array = [2, 9, 9];
array.indexOf(2); // -> 0
array.indexOf(7); // -> -1
array.indexOf(9, 2); // ->  2
array.indexOf(2, -1); // -> -1
array.indexOf(2, -3); // -> 0

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

