# Function.prototype.call()

The **`call`** method calls a `function` with a given `this` value and `arguments` provided individually.

## Syntax

```js
function.call(thisArgument, argument1, ..., argumentN);
```

## Usage examples

```js
const greet = (...names) => {
  return `${this.greeting}, ${names.join(' and ')}!`;
};
greet.call({ greeting: 'Howdy!' }, 'John', 'Maria'); // -> 'Howdy, John and Maria!'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
