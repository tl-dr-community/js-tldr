# RegExp.prototype.exec()

The **`exec`** method executes a search for a match in a `specified string`. Returns a result **array**, or **null**.

If your `regular expression` uses the "g" flag, you can use the **`exec`** method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of str specified by the regular expression's `lastIndex` property. The `lastIndex` property will not be reset when searching a different string, it will start its search at its existing `lastIndex`.

## Syntax

```js
const result = regex.exec(string);
```

## Usage examples

```js
const regex = /quick\s(brown).+?(jumps)/gi;
const string = 'The Quick Brown Fox Jumps Over The Lazy Dog';
regex.exec(string);
// ->
// [
//   0: "Quick Brown Fox Jumps",
//   1: "Brown",
//   2: "Jumps",
//   index: 4,
//   input: "The Quick Brown Fox Jumps Over The Lazy Dog",
//   groups: undefined
// ]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
