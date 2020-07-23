# RegExp.prototype.sticky

The **`sticky`** property reflects whether or not the search is "sticky" (searches in strings only from the index indicated by the `lastIndex` property of this `regular expression`). **`sticky`** is a read-only property of an individual regular expression object.

## Usage examples

```js
const string = 'table football';
const regex = new RegExp('foo', 'y');

regex.lastIndex = 6;
regex.sticky; // -> true
regex.test(string); // -> true
regex.test(string); // -> false
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
