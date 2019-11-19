# Array.prototype.forEach()

The `forEach` method executes a provided `function` once for each `array` element.

## Syntax

```js
array.forEach((currentValue index,  array) => {}, thisArg);
```

## Usage examples

```js
const array = [1, 2, 3];

array.forEach((element, index) => {
  array[index] = element + 1;
});
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
