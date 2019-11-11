# Array.prototype.find()

The `find()` method **returns** the **value** of the **first element** in array that **satisfies** testing **function**.

## Syntax
```js
array.find(callback(element, index, array):Boolean, thisArgument);
```

## Usage examples
```js
const users = [
    {name:'Michelangelo', country:'Italy'},
    {name:'Vinton Gray Cerf', country:'USA'},
    {name:'Egor Letov', country:'Russia'},
    {name:'Arthur Morgan', country:'USA'},

];
users.find(( {country} ) => country === 'USA' );
// -> {name: "Vinton Gray Cerf", country: "USA"}
```

---

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
