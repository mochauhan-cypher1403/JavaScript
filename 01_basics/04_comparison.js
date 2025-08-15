console.log("Comparison Operators in JavaScript");

// They are the ones that did not give the expected results.
console.log(null>0);
console.log(null ==0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// DataTypes brush-up 
console.log("Data Types in JavaScript");
/*
Primitive Data Types: Call by value 
Non Primitive Data Types: Call by Reference 
They are based on how the data is kept into the memory and accessed is how the differentiation is made

Primitive Data Types:
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)
7. BigInt (ES11)

Non Primitive Data Types:
1. Object
2. Array
3. Function
4. Date
5. RegExp
6. Map (ES6)
7. Set (ES6)
8. WeakMap (ES6)
9. WeakSet (ES6)
10. Promise (ES6)
11. Error (ES6)
12. TypedArray (ES6)
13. ArrayBuffer (ES6)
14. DataView (ES6)
15. Intl (ES6)
16. JSON (ES5)
17. Proxy (ES6)
18. Reflect (ES6)
19. Generator (ES6)
20. AsyncFunction (ES8)
21. AsyncGenerator (ES8)
22. AsyncIterator (ES8)
23. SharedArrayBuffer (ES8)
23. Atomics (ES8)
... 
From here what all are really used 
Object, Array, Function, Date, RegExp, Set, Map, Promise, Error, JSON, Proxy and so on 
These are the ones that are used in real world applications.
Non Primitive Data Types are mutable and can be changed, while Primitive Data Types are immutable.
Primitive Data Types are stored in the stack memory, while Non Primitive Data Types are stored in the heap memory.
Primitive Data Types are passed by value, while Non Primitive Data Types are passed by reference
Primitive Data Types are compared by value, while Non Primitive Data Types are compared by reference.

*/