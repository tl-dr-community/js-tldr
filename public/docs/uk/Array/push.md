# Array.prototype.push()

The **`push`** method adds one or more elements to the end of an `array` and returns the new `length` of the `array`.

> NOTE: This method changes original `array`.

## Syntax

```js
const updatedLength = array.push(element1, ..., elementN);
```

## Usage examples

```js
const animals = ['pigs', 'goats', 'sheep'];
animals.push('cows'); // -> 4
animals; // -> ['pigs', 'goats', 'sheep', 'cows']

const vegetables = ['parsnip', 'potato'];
const moreVegs = ['celery', 'beetroot'];
vegetables.push(...moreVegs); // -> 4
vegetables; // -> ['parsnip', 'potato', 'celery', 'beetroot']
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
