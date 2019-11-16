# TypedArray.prototype.join()

The `join` method joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here.

## Syntax
```js
typedarray.join(separator = ',');
```
## Usage examples
```js
var uint8 = new Uint8Array([1,2,3]);
uint8.join(); // -> '1,2,3'
uint8.join(' / '); // -> '1 / 2 / 3'
uint8.join(''); // -> '123'

if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, 'join', {
    value: Array.prototype.join
  });
}
```
