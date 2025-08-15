"use strict";

// Alert statement
// alert("Hello, World!"); 

let name = "Mohini Chauhan";
let age = 20;
let isLoggedIn = false;
let serverRequest = null; // This is a special value that represents the absence of any value or object.
/*
Different types of data type which are used in Javascript - Primitive Data Types 
1. Number: This is gonna represent the number value
2.Boolean
3. String 
4. Null: This is a special value that represents the absence of any value or object. This is a standalone value.
5. Undefined: This is a special value that represents a variable that has been declared but not assigned a value.
6. Symbol: This is a unique and immutable value that can be used as an identifier for object properties. Mostly used in React and other frameworks for uniqueness 
*/

/*
Non Primitive Data Types
1. Object: This is a collection of key-value pairs, where the keys are strings and the values can be any data type, including other objects or arrays.
2. Array: This is a special type of object that represents a list of values, where each value can be any data type, including other arrays or objects.
3. Function: This is a special type of object that represents a block of reusable code that can be executed when called. Functions can take parameters and return values.
4. Date: This is a built-in object that represents a specific point in time, including the date and time.
5. RegExp: This is a built-in object that represents a regular expression, which is used for pattern matching in strings.
6. Error: This is a built-in object that represents an error that has occurred in the program, including the error message and stack trace.
7. Map: This is a built-in object that represents a collection of key-value pairs,where the keys can be any data type, including objects or functions.
*/
let typeOfname = typeof name;
let typeOfLoggedIn = typeof isLoggedIn;

console.table([
    name,
    age,
    isLoggedIn,
    serverRequest,
    typeOfname,
    typeOfLoggedIn,
    typeof serverRequest
]); 
