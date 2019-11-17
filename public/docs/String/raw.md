# String.raw()

The static `raw` method is a tag function of **template literals**, which is used to get the `raw string` form of `template strings`, that is, substitutions (e.g. \${foo}) are processed, but escapes (e.g. \n) are not.

## Syntax

```js
String.raw`templateString`;
String.raw(callSite, ...substitutions);
```

## Usage examples

```js
String.raw`Hi\n${2 + 3}!`; // -> 'Hi\n5!'

let name = 'Bob';
String.raw`Hi\n${name}!`; // -> 'Hi\nBob!'

String.raw({ raw: ['foo', 'bar', 'baz'] }, 2 + 3, 'Java' + 'Script'); // -> 'foo5barJavaScriptbaz'
String.raw({ raw: 'test' }, 0, 1, 2); // -> 't0e1s2t'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
