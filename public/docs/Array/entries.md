# Object.entries()

**The `entries()` method returns an array of a given object's own enumerable property _[key, value]_ pairs**, in the same order as that provided by a `for...in` loop.

> NOTE: The order of the array returned by `Object.entries()` does not depend on how an object is defined.
> If there is a need for certain ordering then the array should be sorted first.

## Syntax

```js
Object.entries(object);
```

## Usage examples

```js
Object.entries({ 0: 'T', 1: 'L', 2: 'D', 3: 'R' }); 
// -> [ ['0', 'T'], ['1', 'L'], ['2', 'D'], ['3', 'R'] ]

Object.entries({ 100: 'a', 2: 'b', 7: 'c' });
 // -> [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

Object.entries('TL:DR'); 
// -> [ [`0`, `T`], [`1`, `L`], [`2`, `:`], [`3`, `D`], [`4`, `R`] ]

Object.entries(100); 
// -> []
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
