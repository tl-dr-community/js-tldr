# Array.prototype.pop()

The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.

## Syntax

```js
arr.pop()
```

## Usage examples

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // -> ['angel', 'clown', 'mandarin' ] 

console.log(popped); // -> 'sturgeon'

var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); // -> same syntax for using apply( )

console.log(myFish); // -> {0:'angel', 1:'clown', 2:'mandarin', length: 3} 

console.log(popped); // -> 'sturgeon'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
