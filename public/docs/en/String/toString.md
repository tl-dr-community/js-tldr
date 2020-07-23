# String.prototype.toString()

The **`toString`** method returns a _string primitive_ representing the specified _`String` object_.

The `String` object overrides the **`toString()`** method of the `Object` object; it does not inherit `Object.prototype.toString()`. For `String` objects, the **`toString()`** method returns a string representation of the object and is the same as the `String.prototype.valueOf()` method.

## Syntax

```js
const stringPrimitive = stringObject.toString();
```

## Usage examples

```js
new String('Hello world').toString(); // -> 'Hello world'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
