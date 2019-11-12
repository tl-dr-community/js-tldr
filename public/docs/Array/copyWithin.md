# Array.prototype.copyWithin()

The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

## Syntax

```js
array.copyWithin(target, startIndex, endIndex);
```

## Usage examples

```js
[1, 2, 3, 4, 5].copyWithin(-2); // -> [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3); // -> [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4); // -> [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1); // -> [1, 2, 3, 3, 4]
[].copyWithin.call({ length: 5, 3: 1 }, 0, 3); // -> {0: 1, 3: 1, length: 5}
```

ES2015 Typed Arrays are subclasses of Array:

```js
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2); // -> Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4); // -> Int32Array [4, 2, 3, 4, 5]
```

---

[MDM refeerence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
