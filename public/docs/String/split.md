# String.prototype.split()

The `split` method turns a String into an array of strings, by separating the string at each instance of a specified separator string.

## Syntax

```js
str.split(separator, limit)
```

## Usage examples

```js
const myString = '';
const splits = myString.split();

console.log(splits); 

// ↪ [""]

const myString = 'Hello World. How are you doing?';
const splits = myString.split(' ', 3);

console.log(splits); // -> ["Hello", "World.", "How"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
