# Array.prototype.slice()

The **`slice`** method returns a shallow copy of a portion of an `array` into a new array selected from `begin` to `end` indexes (end not included).
The original array will not be modified.

## Syntax

```js
const newArray = originalArray.slice(beginIndex, endIndex);
```

## Usage examples

```js
[1, 2, 3].slice(); // -> [1, 2, 3]
[1, 2, 3, 4, 5].slice(2); // -> [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 3); // -> [3]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
