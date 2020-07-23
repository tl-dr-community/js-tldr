# String.prototype.matchAll()

The **`matchAll`** method returns an `iterator` of all results matching a `string` against a `regular expression`, including capturing groups.

## Syntax

```js
const iterator = string.matchAll(regexp);
```

## Usage examples

```js
const regexp = RegExp('foo[a-z]*', 'g');
const string = 'table football, foosball';

const matches = string.matchAll(regexp);
for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${match.index +
      match[0].length}.`,
  );
}
// -> "Found football start=6 end=14."
// -> "Found foosball start=16 end=24."

Array.from(string.matchAll(regexp), m => m[0]); // -> [ "football", "foosball"]
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
