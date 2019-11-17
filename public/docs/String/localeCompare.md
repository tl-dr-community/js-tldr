# String.prototype.localeCompare()

The `localeCompare` method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

## Syntax

```js
referenceStr.localeCompare(compareString, locales, options)
```

## Usage examples

```js
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
