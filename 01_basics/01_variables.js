/* ---------------------- Vairables in JavaScript ---------------------- */
const accountNumber = 6409174;
const accountName = "Saving Account";

let accountHolderName = "Mohini Chauhan";
let accountBalance = 100000;
let isAccountActive;

var accountSafety; 


// Trying to re-declare a const, let and var variable 
//const accountNumber = 123456; // This will throw an error since const cannot be re-declared
// let accountBalance =203535; // This will throw an error since let cannot be re-declared in the same scop
var accountSafety = true; // This will not theow an error since the re-declaration of var is allowed in JavaSCript

// Trying to re-assign a const, let and var variable 
// accountNumber = 123456; // This will throw an error since const cannot be re-assigned
accountBalance = 203535; // This will not throw an error since let can be re-assigned
accountSafety = false; // This will not throw an error since var can be re-assigned.

// Trying to access the variable which is initialised but not assigned.
// const accountLogInState; // We cannot declare a const variable without assigning it a value, this will throw an error
let accountSafetyLockState; 

console.log("Account Safety Lock State: ", accountSafetyLockState); // The value will be assigned the value of `undefined` since the variable is declared but not assigned any value.


// Main Difference between var and let 

// 1. Scope:
if (!accountSafety){
    var x = "Account is not safe"; // var is function scoped or globally scoped
    let y = "Account is not safe"; // let is block scoped
    console.log("Inside if block: ", x, y);
}
console.log("Outside if block: ", x); // This will print the value of x since var is function scoped or globally scoped
// console.log("Outside if block: ", y); // This will throw an error since let is block scoped and y is not accessible outside the if block

// 2. Hoisting:
console.log("Before declaration: ", z); // This will print undefined since var is hoisted
var z = "This is a hoisted variable"; // var is hoisted to the top
console.log("After declaration: ", z); // This will print the value of z
// console.log("Before declaration: ", a); // This will throw an error since let is not hoisted
let a = "This is not a hoisted variable"; // let is not hoisted
console.log("After declaration: ", a); // This will print the value of a   

// 3. Redeclaration:
var b = "This is a var variable"; // var can be redeclared
var b = "This is another var variable"; // This will not throw an error
console.log("Redeclared var: ", b); // This will print the value of b

// let c = "This is a let variable"; // let cannot be redeclared in the same scope
// let c = "This is another let variable"; // This will throw an error
let c = "This is a let variable"; // This will not throw an error
console.log("Let variable: ", c); // This will print the value of c

// 4. Temporal Dead Zone (TDZ):
// console.log("Before declaration: ", d); // This will throw an error since let is in TDZ
let d = "This is a let variable in TDZ"; // let is in TDZ until it is declared
console.log("After declaration: ", d); // This will print the value of d

// Why it is suggested to use let and const instead of var ?
/*
1. Better scoping: Let and Const provide block-scoping, which helps in keeping the variables confined, making the code more predictable and modular.
2. Temporal Dead Zone for early error detection: The TDZ ensures you can't accidentally use a variable before it's declared, which helps catch errors early in the development process.
3. No redeclaration issues: Let and Const prevent accidental redeclarations, which can lead to bugs and confusion in larger codebases.
4. Readability and maintainability: Using Let and Const makes the code more readable and maintainable, as it clearly indicates the intention of the variable's mutability.
*/