# Array.prototype.filter()

**The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.**

## Syntax

```js
const modifiedArray = originalArray.filter(callback(element, index, array):Boolean, thisArgument)
```

## Usage examples

```js
const words = ['too', 'long', 'did', 'not', 'read'];
words.filter(word => word.length > 3);
// -> ["long", "read"]

 ['too', 'long', 'did', 'not', 'read'].filter(word => word.length > 3)
 // -> ["long", "read"]
```

---

[MDN reference](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)