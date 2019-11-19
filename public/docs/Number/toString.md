# Number.prototype.toString()

The `toString()` method returns a string representing the specified Number object.

## Syntax 
```js
number.toString(radix)
```

>NOTE:  The radix is the number of unique digits, including the digit zero, used to represent numbers in a positional numeral system. For example, for the decimal/denary system the radix is ten, because it uses the ten digits from 0 through 9.

## Usage examples
```js
const number = 10;
number.toString();
// -> '10'
number.toString(2);
// -> '1010'
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)