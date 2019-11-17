# String.prototype.startsWith()

The `startsWith` method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

## Syntax

```js
str.startsWith(searchString, position)
```

## Usage examples

```js
var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));        // -> true
console.log(str.startsWith('not to be'));     // -> false
console.log(str.startsWith('not to be', 10)); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
