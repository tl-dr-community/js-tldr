# String.prototype.split()

The `split` method turns a `string` into an `array of strings`, by separating the `string` at each instance of a specified `separator string`. You can `limit` the number of splits using additional parameter.

## Syntax

```js
const arrayOfStrings = string.split(separator, limit);
```

## Usage examples

```js
''.split(); // -> ['']
'Hello World!'.split(); // -> ['Hello World!']
'Hello World!'.split(''); // -> ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
'Hello World!'.split(' '); // -> ["Hello", "World!"]
'Hello World!'.split('e'); // ->  ["H", "llo World!"]
'Hello World. How are you doing?'.split(' ', 3); // -> ["Hello", "World.", "How"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
