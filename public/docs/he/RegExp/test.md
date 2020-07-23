# RegExp.prototype.test()

The **`test`** method executes a search for a match between a `regular expression` and a `specified string`. Returns **true** or **false**.

## Syntax

```js
const result = regex.test(string);
```

## Usage examples

```js
/^hello/.test('hello world!'); // -> true
/^hello/.test('bye world!'); // -> false
```

### Last index

If the `regex` has the global flag set, **`test`** will advance the `lastIndex` of the `regex`. A subsequent use of **`test`** will start the search at the substring of str specified by `lastIndex`. It is worth noting that the `lastIndex` will not reset when testing a different string.

The following example demonstrates this behaviour:

```js
const regex = /foo/g;
regex.test('foo'); // true
regex.test('foo'); // false
regex.test('barfoo'); // true

/foo/g.test('foo'); // -> true
/foo/g.test('foo'); // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
