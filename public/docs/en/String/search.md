# String.prototype.search()

The **`search`** method executes a search for a match between a `regular expression` and a `given string` and returns an `index` of the first match.

## Syntax

```js
const resultIndex = string.search(regexp);
```

## Usage examples

```js
const string = 'hey JudE';
string.search(/[A-Z]/g); // -> 4
string.search(/[.]/g); // -> -1
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
