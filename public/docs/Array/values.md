# Array.prototype.concat()

The `values` method returns a new `Array Iterator` that contains the elements for each `index` in the `array`.

## Syntax

```js
const iterator = array.values();
```

## Usage examples

```js
const array = ['a', 'b', 'c', 'd', 'e'];
const iterator1 = array.values();

for (let letter of iterator1) {
  console.log(letter);
} // -> "a" "b" "c" "d" "e"

iterator1.next().value; // -> undefined

array; // -> ['a', 'b', 'c', 'd', 'e']

const iterator2 = array.values();
iterator2.next().value; // -> "a"
array[1] = 'n';
iterator2.next().value; // -> "n"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
