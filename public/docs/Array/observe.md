# Array.observe()

The `Array.observe` method was used for asynchronously observing changes to Arrays, similar to Object.observe() for objects. It provided a stream of changes in order of occurrence. It's equivalent to Object.observe() invoked with the accept type list ["add", "update", "delete", "splice"]. However, this API has been deprecated and removed from Browsers. You can use the more general Proxy object instead.

## Syntax
```js
Array.observe(arr, callback)
```
## Usage examples

```js
var arr = ['a', 'b', 'c'];

Array.observe(arr, function(changes) {
  console.log(changes);
});

arr[1] = 'B'; // -> [{type: 'update', object: <arr>, name: '1', oldValue: 'b'}]

arr[3] = 'd'; // -> [{type: 'splice', object: <arr>, index: 3, removed: [], addedCount: 1}]

arr.splice(1, 2, 'beta', 'gamma', 'delta'); // -> [{type: 'splice', object: <arr>, index: 1, removed: ['B', 'c'], addedCount: 3}]


```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe)
