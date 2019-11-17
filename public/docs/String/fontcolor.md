# String.prototype.fontcolor()

The `fontcolor` method creates a <font> HTML element that causes a string to be displayed in the specified font color.
  
## Syntax

```js
str.fontcolor(color)
```

## Usage examples

```js
var worldString = 'Hello, world';

console.log(worldString.fontcolor('red') +  ' is red in this line'); // -> '<font color="red">Hello, world</font> is red in this line'

console.log(worldString.fontcolor('FF00') + ' is red in hexadecimal in this line'); // ->  '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor)
