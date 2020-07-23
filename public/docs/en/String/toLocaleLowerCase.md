# String.prototype.toLocaleLowerCase()

The **`toLocaleLowerCase`** method returns the `string` converted to lower case, according to any locale-specific case mappings.

## Syntax

```js
const lowerString = string.toLocaleLowerCase()
const lowerString = string.toLocaleLowerCase(locale)
const lowerString = string.toLocaleLowerCase([locale1, ..., localeN])
```

## Usage examples

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i'; // -> true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // -> false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // -> true
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
