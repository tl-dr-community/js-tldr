# String.prototype.endsWith()

The `endsWith` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

## Syntax

```js
str.endsWith(searchString, length)
```

## Usage examples

```js
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // -> true
console.log(str.endsWith('to be')); // -> false
console.log(str.endsWith('to be', 19)); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
