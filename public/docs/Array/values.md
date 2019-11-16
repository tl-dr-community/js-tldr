# Array.prototype.concat()

The `values` method returns a new Array Iterator object that contains the values for each index in the array.

## Syntax

```js
arr.values()
```

## Usage examples

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
} // -> "a" "b" "c" "d"

Array.prototype.values === Array.prototype[Symbol.iterator] // -> true

var arr = ['a', 'b', 'c', 'd', 'e']; 
var iterator = arr.values();
console.log(iterator); // -> Array Iterator {  }
iterator.next().value; // -> "a"
arr[1]='n';                 
iterator.next().value; // -> "n"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
