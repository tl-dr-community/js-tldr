# RegExp.prototype.lastIndex

The **`lastIndex`** is a read/write integer property of `regular expression` instances that specifies the `index` at which to start the next match.

## Usage examples

```js
const regex = new RegExp('foo', 'g');
const string = 'table football, foosball';

regex.test(string);
regex.lastIndex; // -> 9
regex.test(string);
regex.lastIndex; // ->  19
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)
