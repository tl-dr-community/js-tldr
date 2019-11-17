# String.prototype.substring()

The `substring` method returns the part of the string between the start and end indexes, or to the end of the string.

## Syntax

```js
str.substring(indexStart, indexEnd)

```

## Usage examples

```js
// Displays 'illa' the last 4 characters
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);

var text = 'Mozilla';
console.log(text.substring(5, 2)); // -> "zil" 
console.log(text.slice(5, 2));     // -> ""
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

