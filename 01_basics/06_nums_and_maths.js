// ------------------- Numbers and Math Operations -------------------

"use strict";
const accountBalance = 100000; 

// Explicitly definition of number 
const accountNumber = new Number(6409174); // Over here we are creating a new Number object, which is not recommended in modern JavaScript.
console.table([accountBalance, accountNumber, typeof accountNumber]); 
console.log(accountNumber);

// Converting the number to string 
console.log(accountBalance.toString()); // Convert number to string
console.log(accountBalance.toString().length);
console.log(accountBalance.toFixed(2)); // This is going to give the precision of the numbser to 2 decimal places.

const otherNumber = 1345.23;
console.log(otherNumber.toPrecision(2)); // This is going to give the precision of the number to 2 significant digits

otherNumber.toExponential(2); // This is going to give the exponential form of the number with 2 decimal places
console.log(otherNumber.toExponential(2)); // This is going to give the exponential form

const hundreds = 1000000;
console.table([
    hundreds.toLocaleString(), // This is going to give the number in the locale string format
    hundreds.toLocaleString('en-US'), // This is going to give the number in the
    hundreds.toLocaleString('en-IN') // This is going to give the number in the Indian locale string format
])

// --------------------- Math Operations ------------------
// Math object in JavaScript provides various mathematical constants and functions
console.log(Math.PI); // This is going to give the value of pi
console.log(Math.E); // This is going to give the value of e

// Math operations
console.table([
    Math.abs(-10),
    Math.ceil(4.3),
    Math.floor(4.8),
    Math.round(3.4),
    Math.random(),
    (Math.random()*100).toPrecision(2),
    (Math.random()*100+1).toFixed(2),
    Math.max(1, 2, 3, 4, 5),
    Math.min(1, 2, 3, 4, 5),
    Math.sqrt(16), 
]);

console.log(typeof (Math.random()*100+1).toFixed(2)); // This is string over here 
const accountId = new Number((Math.random()*100+1).toFixed(2)); 
console.log(accountId, typeof accountId); // This will show that accountId is a Number

accountId.valueOf(); // This will give the primitive value of the Number object
console.log(accountId.valueOf(), typeof accountId.valueOf()); // This will show that the value of accountId is a number

// Using Random in best possible way 
const min = 10;
const max = 100;
// Generic random number generator function 
Math.random() * (max-min +1)+ min; // This will give a random number between min and max
console.log(Math.floor(Math.random() * (max-min +1)+ min)); // This will give a random integer between min and max

