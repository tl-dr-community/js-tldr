# String.prototype.match()

The `match` method retrieves the result of matching a `string` against a `regular expression`.

## Syntax

```js
const result = string.match(regexp);
```

## Usage examples

```js
'aaa'.match(/b/); // -> null
```

```js
const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
string.match(regexp); // -> ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

```js
const string = 'For more information, see Chapter 3.4.5.1';
const regexp = /see (chapter \d+(\.\d)*)/i;
string.match(regexp); // -> // [
//  'see Chapter 3.4.5.1',
//  'Chapter 3.4.5.1', '.1',
//  index: 22,
//  input: 'For more information, see Chapter 3.4.5.1'
// ]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
