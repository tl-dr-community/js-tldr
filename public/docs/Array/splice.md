# Array.prototype.splice()

The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements **in place**.

## Syntax

```js
var arrDeletedItems = array.splice(start, deleteCount, item1[, item2[, ...)
```

## Usage examples

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']; // -> myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
var removed = myFish.splice(2, 0, 'drum'); // -> removed is [], no elements removed

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']; // -> myFish is ["angel", "clown", "sturgeon"] 
var removed = myFish.splice(-2, 1); // -> removed is ["mandarin"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
