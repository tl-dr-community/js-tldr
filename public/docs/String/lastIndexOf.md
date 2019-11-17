# String.prototype.lastIndexOf()

The `lastIndexOf` method returns the index within the calling *String* object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

## Syntax

```js
str.lastIndexOf(searchValue, fromIndex)
```

## Usage examples

```js
var anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); // -> logs 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); // -> logs 10
console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); // -> logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); // -> logs 6
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
