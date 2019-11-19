# String.prototype.endsWith()

The `endsWith` method determines whether a `string` ends with the characters of a specified `search string`, returning a `boolean` value as a `result`.

## Syntax

```js
const result = string.endsWith(searchString, length);
```

## Usage examples

```js
var string = 'To be, or not to be, that is the question.';

string.endsWith('.'); // -> true
string.endsWith('question.'); // -> true
string.endsWith('to be'); // -> false
string.endsWith('to be', 19); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
