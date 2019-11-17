# String.prototype.substr()

The `substr` method returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.

## Syntax

```js
str.substr(start[, length])
```

## Usage examples

```js
var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // -> 'M'
console.log(aString.substr(1, 0));   // -> ''
console.log(aString.substr(-1, 1));  // -> 'a'
console.log(aString.substr(1, -1));  // -> ''
console.log(aString.substr(-3));     // -> 'lla'
console.log(aString.substr(1));      // -> 'ozilla'
console.log(aString.substr(-20, 2)); // -> 'Mo'
console.log(aString.substr(20, 2));  // -> ''
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)


