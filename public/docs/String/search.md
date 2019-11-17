# String.prototype.search()

## Syntax

```js
str.search(regexp)
```

## Usage examples

```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re));  // -> returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // -> returns -1 cannot find '.' dot punctuation
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
