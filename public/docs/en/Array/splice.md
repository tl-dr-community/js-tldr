# Array.prototype.splice()

The **`splice`** method changes the contents of an `array` by removing or replacing existing `elements` and/or adding new `elements` **in place**, returning the array of removed elements

## Syntax

```js
const removedElements = array.splice(start, deleteCount, item1, ..., itemN);
```

## Usage examples

```js
const array = ['angel', 'clown', 'mandarin', 'sturgeon'];
array.splice(2, 0, 'drum'); // -> []
array; // -> ["angel", "clown", "drum", "mandarin", "sturgeon"]
array.splice(3, 3, 'guitar', 'ukulele'); // -> ["mandarin", "sturgeon"]
array; // -> ["angel", "clown", "drum", "guitar", "ukulele"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
