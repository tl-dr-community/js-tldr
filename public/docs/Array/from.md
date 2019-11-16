# Array.from()

**The 'from' method creates a new, shallow-copied Array instance from an array-like or iterable object**

## Syntax

```js
Array.from(arrayLike, mapFn, thisArg);
```

## Usage example

```js
Array.from('foo'); // ->[ "f", "o", "o" ]
const set = new Set(['foo', 'bar', 'baz', 'foo']); // -> [ "foo", "bar", "baz" ]
const map = new Map([[1, 2], [2, 4], [4, 8]]); // -> [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]); // -> ['a', 'b'];
function f() {
  return Array.from(arguments);
}
f(1, 2, 3); // ->[ 1, 2, 3 ]
Array.from([1, 2, 3], x => x + x); // -> [2, 4, 6]
Array.from({length: 5}, (v, i) => i); // -> [0, 1, 2, 3, 4]
```

--- 

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
