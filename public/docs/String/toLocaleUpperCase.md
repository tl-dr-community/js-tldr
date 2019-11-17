# String.prototype.toLocaleUpperCase()

The `toLocaleUpperCase` method returns the calling string value converted to upper case, according to any locale-specific case mappings.

## Syntax

```js
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale) 
str.toLocaleUpperCase(locale, locale, ...)
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
