# String.raw()

The static `raw` method is a tag function of **template literals**, similar to the r prefix in Python or the @ prefix in C# for string literals (yet there is a difference: see explanations in this issue). It's used to get the raw string form of template strings, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.

## Syntax

```js
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

## Usage examples

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\nBob!', substitutions are processed.
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
