# indexOf

**The `indexOf` method returns the `index` of the first occurrence of the specified `searchValue` within a `string`**, starting the search at `fromIndex`. It returns **-1** if the `searchValue` is not found.

## Syntax

```js
const index = string.indexOf(searchValue, fromIndex);
```

## Usage examples

```js
const string = 'Brave new world';
string.indexOf('w'); // -> 8
string.indexOf('new'); // -> 6
string.indexOf('New'); // -> -1
string.indexOf(''); // -> 0
string.indexOf('', 10); // -> 10
string.indexOf('', 999); // -> 15
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
