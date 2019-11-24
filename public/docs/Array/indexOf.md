# Array.prototype.indexOf()

The **`indexOf`** method returns the first `index` at which a `search value` can be found in the `array`, or **-1** if it is not present.

## Syntax

```js
const index = array.indexOf(searchValue, fromIndex);
```

## Usage examples

```js
var array = [2, 9, 9];
array.indexOf(2); // -> 0
array.indexOf(7); // -> -1
array.indexOf(9, 2); // ->  2
array.indexOf(2, -1); // -> -1
array.indexOf(2, -3); // -> 0
```
