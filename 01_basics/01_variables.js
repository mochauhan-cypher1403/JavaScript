// How to do through the docs and learning via Investigation 

const accountId = 6409174;
const accountName = "Mohini Chauhan";
const accountBalance = 1000.50;

/*
The variable name should be easily readable and descriptive.
Use camelCase for variable names.
Avoid using reserved keywords as variable names.
*/ 

var accountPassword = "securePassword123";
accountCity = "Delhi"; // A variable can be declared without a keyword also, but it's not recommended

let accountState; // The let keyword allows you to declare a variable that can be reassigned later.
console.log("Account state before assignment:", accountState); // This will log 'undefined' since we haven't assigned a value yet


accountState = "Delhi"; // Now we are assigning a value to the variable accountState - This could be changed. 
console.log("Account state after assignment:", accountState); // This will log 'Delhi'


// In Javascript there are some constant keywords - the syntax is defined in the engine, so this keyword : var, let and const is taking the value and assigning it into the memory block reserved for the variable.

// accountId = 2324; // The const keyword does not allow reassignment, so this will throw an error if uncommented.


console.table([accountId, accountName, accountBalance, accountPassword, accountCity]);

// So we are writing let - this means we are basically a  portion into the memory block and we are assigning a value to it.
// The let keyword allows you to declare variables that can be reassigned later.



// What is the difference between let and var ? 
// The var keyword declares a variable that is function-scoped or globally-scoped, while let declares a block-scoped variable.
// This means that a variable declared with let is only accessible within the block it was defined in
// and not outside of it, whereas a variable declared with var can be accessed anywhere within the function or globally if declared outside of a function.