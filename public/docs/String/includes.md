# String.prototype.includes()

The `includes` method determines whether one string may be found within another string, returning true or false as appropriate.

## Syntax

```js
str.includes(searchString, position)
```

## Usage examples

```js
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // -> true
console.log(str.includes('question'));    // -> true
console.log(str.includes('nonexistent')); // -> false
console.log(str.includes('To be', 1));    // -> false
console.log(str.includes('TO BE'));       // -> false
console.log(str.includes(''))             // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
