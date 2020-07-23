# Function.prototype.apply()

The **`apply`** method calls a `function` with a given `this` value, and `arguments` provided as an **array** (or an [array-like](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects) object).

## Syntax

```js
function.apply(thisArgument, argumentsArray);
```

## Usage examples

```js
Math.max.apply(null, [1, 2, 3, 4]); // -> 4

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements); // -> // ["a", "b", 0, 1, 2]

const greet = (...names) => {
  return `${this.greeting}, ${names.join(' and ')}!`;
};
greet.apply({ greeting: 'Howdy!' }, ['John', 'Maria']); // -> 'Howdy, John and Maria!'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
