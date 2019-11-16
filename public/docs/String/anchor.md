# String.prototype.anchor()

The `anchor` method creates an <a> HTML anchor element that is used as a hypertext target.

## Syntax

```js
str.anchor(name)
```

## Usage examples

```js
var myString = 'Table of Contents';

document.body.innerHTML = myString.anchor('contents_anchor');

<a name="contents_anchor">Table of Contents</a>
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)
