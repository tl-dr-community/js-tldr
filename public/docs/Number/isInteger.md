# Number.isInteger()
The `Number.isInteger()` method determines whether the passed value is an integer.

>NOTE: returns boolean

## Syntax

```js
Number.isInteger(value)
```

## Usage examples
```js
Number.isInteger(0.1);     
// -> false
Number.isInteger(Math.PI); 
// -> false
Number.isInteger([1]);      
// -> false
Number.isInteger(5.0);
// -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)