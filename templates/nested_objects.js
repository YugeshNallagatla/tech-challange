We have a nested object. We would like a function where you pass in the object and a key and
get back the value.

Example Inputs
object = {“a”:{“b”:{“c”:”d”}}}
key = a/b/c
object = {“x”:{“y”:{“z”:”a”}}}
key = x/y/z
value = a

Answer: 

express your keys as an array you can solve this with a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const obj = {"x1":{"y1":{"z1":"a1"}}}

const keys = ['x1', 'y1', 'z1']

const value = keys.reduce((acc,key)=>acc[key], obj)// "a1"

As a function that accepts an array of keys or a string of the form 'x1.y1.z1', with a fallback for undefined values:

const getValueFromKeys = (obj, keys, defaultValue)=> (Array.isArray(keys)?keys:keys.split('.')).reduce((acc,key)=>acc[key] || defaultValue, obj)



Notes: The reduce() method executes a user-supplied "reducer" callback function on each element of the 
array, in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.