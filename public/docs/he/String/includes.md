# String.prototype.includes()

The **`includes`** method determines whether `searchString` may be found within a `string`, returning a `boolean` value as a `result`.

## Syntax

```js
const result = string.includes(searchString, position);
```

## Usage examples

```js
const string = 'To be, or not to be, that is the question.';

string.includes('To be'); // -> true
string.includes('To be', 1); // -> false
string.includes('question'); // -> true
string.includes('nonexistent'); // -> false
string.includes('TO BE'); // -> false
string.includes(''); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
