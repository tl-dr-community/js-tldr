# String.prototype.toLocaleUpperCase()

The `toLocaleUpperCase` method returns the `string` converted to upper case, according to any locale-specific case mappings.

## Syntax

```js
const lowerString = string.toLocaleUpperCase();
const lowerString = string.toLocaleUpperCase(locale);
const lowerString = string.toLocaleUpperCase(locale1, locale2, ..., localeN);
```

## Usage examples

```js
'alphabet'.toLocaleUpperCase(); // -> 'ALPHABET'

'Gesäß'.toLocaleUpperCase(); // -> 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // -> 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // -> 'I'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)
