# Function.prototype.name

A `Function` object's read-only `name` property indicates the function's name as specified when it was created, or it may be rather `anonymous` or `''` for functions created anonymously.

## Usage examples

```js
const func1 = function() {};
const object = {
  func2: function() {},
};
const func4 = function func3() {};

func1.name; // -> "func1"
object.func2.name; // -> "func2"
func4.name; // -> "func3"
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
