# Array.prototype.keys()

The `keys` method returns a new `iterator` that contains the keys for each index in the `array`.

## Syntax

```js
const iterator = array.keys();
```

## Usage examples

```js
const array = ['a', , 'c'];
Object.keys(array); // -> ['0', '2']
[...array.keys()]; // -> [0, 1, 2]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
