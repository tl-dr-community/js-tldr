# Function.prototype.bind()

The **`bind`** method creates a _new_ `function` that, when called, has its `this` keyword set to the provided `value`, with a given sequence of `arguments` preceding any provided when the _new_ `function` is called.

## Syntax

```js
const newFunction = function.bind(thisArgument, argument1, ..., argumentN);
```

## Usage examples

```js
const module = {
  number: 81,
  readNumber() {
    return this.number;
  },
};
const readNumber = module.readNumber;
const boundReadNumber = readNumber.bind(module);

module.readNumber(); // -> 81
readNumber(); // -> undefined
boundReadNumber(); // -> 81
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
