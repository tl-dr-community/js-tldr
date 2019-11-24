# Number.prototype.toLocaleString()

The **`toLocaleString`** method returns a string with a language-sensitive representation of this number.

## Syntax

```js
number.toLocaleString(locales, options)
```

## Usage examples

```js
const number = 123456.789;
// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE'));
// -> 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString('ar-EG'));
// -> ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// -> 1,23,456.789

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// -> 123.456,79 €
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
