# String.prototype.concat()

The `concat` method concatenates the `stringN` arguments to a given `string` and returns a `new string`.

## Syntax

```js
const newString = string.concat(string1, string2, ..., stringN);
```

## Usage examples

```js
'Hello, '.concat('Kevin', '. Have a nice day.'); // -> Hello, Kevin. Have a nice day.
''.concat(...['Hello', ' ', 'Venkat', '!']); // -> "Hello Venkat!"
''.concat({}); // -> [object Object]
''.concat([]); // -> ""
''.concat(null); // -> "null"
''.concat(true); // -> "true"
''.concat(4, 5); // -> "45"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
