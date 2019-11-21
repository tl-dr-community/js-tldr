# Array.from()

The `from` method creates a _new_, _shallow-copied_ `array` from an array-like or iterable object.

## Syntax

```js
Array.from(arrayLike, mapFn, thisArgument);
```

## Usage example

```js
Array.from('foo'); // -> [ "f", "o", "o" ]

Array.from(new Set(['foo', 'bar', 'baz', 'foo'])); // -> [ "foo", "bar", "baz" ]

Array.from(
  new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]),
); // -> [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ['1', 'a'],
  ['2', 'b'],
]);
Array.from(mapper.values()); // -> ['a', 'b'];
Array.from(mapper.keys()); // -> ['1', '2'];

Array.from([1, 2, 3], x => x + x); // -> [2, 4, 6]
Array.from({ length: 5 }, (v, i) => i); // -> [0, 1, 2, 3, 4]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
