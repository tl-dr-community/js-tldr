# String.prototype.repeat()

The `repeat` method returns a `new string` which contains the specified `number` of copies of the `string` on which it was called, concatenated together.

## Syntax

```js
const newString = string.repeat(count);
```

## Usage examples

```js
'abc'.repeat(0); // -> ''
'abc'.repeat(1); // -> 'abc'
'abc'.repeat(2); // -> 'abcabc'
'abc'.repeat(3.5); // -> 'abcabcabc'
'abc'.repeat(1 / 0); // -> RangeError
'abc'.repeat(-1); // -> RangeError
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat);
