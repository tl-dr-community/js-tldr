# Regexp.prototype.toString()

The **`toString`** method returns a `string` representing the `regular expression`.

## Syntax

```js
const string = regex.toString();
```

## Usage examples

```js
new RegExp('a+b+c').toString(); // -> /a+b+c/
new RegExp('bar', 'g').toString(); // -> /bar/g
new RegExp('\n').toString(); // -> '/\\n/'
new RegExp('\n').toString(); // -> '/\n/' (prior to ES5)
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)
