# Array.prototype.entries()

The **`entries`** method returns a _new_ `iterator` object that contains the `key/value` pairs for each index in the `array`.

## Syntax

```js
array.entries();
```

## Usage examples

```js
for (let entry of ['a', 'b', 'c'].entries()) {
  console.log(entry);
}
// -> [0, 'a']
// -> [1, 'b']
// -> [2, 'c']
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
