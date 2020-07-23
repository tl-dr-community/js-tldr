# String.prototype.localeCompare()

The **`localeCompare`** method returns a number indicating whether a `reference string` comes before or after or is the same as the `compare string` in sort order.

## Syntax

```js
const number = referenceString.localeCompare(compareString, locales, options);
```

See more info on `locales` and `options` parameters at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Parameters).

## Usage examples

<!-- prettier-ignore-start -->
```js
'a'.localeCompare('a'); // -> 0
'a'.localeCompare('c'); // -> -1
'check'.localeCompare('against'); // -> 1

['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'].sort(
  (a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true })
); // -> ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```
<!-- prettier-ignore-end -->

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
