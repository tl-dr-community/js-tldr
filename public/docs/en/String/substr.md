# String.prototype.substr()

```warning
Warning: Although `String.prototype.substr()` is not strictly deprecated (as in "removed from the Web standards"), it is considered a legacy function and should be avoided when possible. It is not part of the core JavaScript language and may be removed in the future. If at all possible, use the `substring()` method instead.
```

The **`substr`** method returns a portion of the `string`, starting at the specified `index` and extending for a given `number` of characters afterward.

## Syntax

```js
const substring = string.substr(start, length);
```

## Usage examples

```js
const string = 'Mozilla';
string.substr(0, 1); // -> 'M'
string.substr(1, 0); // -> ''
string.substr(-1, 1); // -> 'a'
string.substr(1, -1); // -> ''
string.substr(-3); // -> 'lla'
string.substr(1); // -> 'ozilla'
string.substr(-20, 2); // -> 'Mo'
string.substr(20, 2); // -> ''
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
