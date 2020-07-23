# String.prototype.startsWith()

The **`startsWith`** method determines whether a `string` begins with the characters of a `search string`, returning a `boolean` value as a result.

## Syntax

```js
const starts = string.startsWith(searchString, position);
```

## Usage examples

```js
const string = 'To be, or not to be, that is the question.';
string.startsWith('To be'); // -> true
string.startsWith('not to be'); // -> false
string.startsWith('not to be', 10); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
