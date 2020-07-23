# Array.prototype.sort()

The **`sort`** method sorts the elements of an `array` _in place_ and returns the `sorted array`.

The default sort order is _ascending_, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. You may pass own implementation `compare function`.

## Syntax

```js
array = array.sort(compareFunction);
```

## Usage examples

```js
['C', 'B', 'D', 'A'].sort(); // -> ['A', 'B', 'C', 'D']

['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'].sort((a, b) =>
  a.localeCompare(b),
); // -> ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

[3, 5, 2, 1, 4].sort((a, b) => a - b); // -> [1, 2, 3, 4, 5]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
