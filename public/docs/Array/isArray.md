# Array.isArray()

The `isArray` method determines whether the passed value is an **Array**.

## Syntax

```js
Array.isArray(value)
```
## Usage examples

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });

var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // -> [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // -> true

// Considered harmful, because doesn't work through iframes
arr instanceof Array; // -> false
```
