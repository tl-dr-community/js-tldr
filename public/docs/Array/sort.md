# Array.prototype.sort()

The `sort` method sorts the elements of an array *in place* and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

## Syntax

```js
arr.sort(compareFunction)
```

## Usage examples

```js
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
}); // -> items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
