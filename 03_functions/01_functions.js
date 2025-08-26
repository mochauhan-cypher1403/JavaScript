// Function simply means packaging your code into reusable blocks
// Function definition - 
// Function reference - 
// Function Execution - 


// Basic addition function 
function addTwoNumbers(a,b) {
    return a+b;
    // Anything beyond this line is unreachable code. 
}
// Functions parameteres - the one in the function definition, whatever the input is taken is parameters.
// Functions Arguments - the actual values passed to the function when it is called.
console.log(addTwoNumbers(2,3));
console.log(addTwoNumbers(10,"20")); 
console.log(addTwoNumbers(2,"World"));


let result = addTwoNumbers(5,10);
console.log(result);

// What are the different ways of taking arguments 
function logInUserMessage(userName) {
    return `${userName} just logged in`
};
// This is how arguments are taken in the paramteres for functions execution.
console.log(logInUserMessage("Mohini"));
console.log(logInUserMessage()); // This will be given undefined 

// In order to avoid thi situation check the userName is not undefined
function logInUserMessage(userName) {
    if (userName === undefined) {
        userName = "Guest";
    }
    return `${userName} just logged in`
}

// Other way to handle the undefined situation - giving the default value 
function logInUserMessage(userName = "Guest") {
    return `${userName} just logged in`
}

// Rest Parameters - allow the function to accept an indefinite number of arguments as an array. 
function addCartItems(...items){
    // items over here is an array of all the arguments passed to the function - reduce((total,item) => total+item,0) thiis would go through each item of the array, starting from 0. 
    return items.reduce((total, item) => total + item, 0);
}

// REST Parameters VS Spread Operator
function logInUserMessage(userName = "Guest") {
    return `${userName} just logged in`
}

const userNames = ["Alice", "Bob", "Charlie"];
console.log(logInUserMessage(...userNames)); // Using over here the spread operator 

// Objects in Functions - passed as parameteres
const user = {
    username: "Hitesh",
    price: 100
}

function handleObject(anyObject){
    const { username, price } = anyObject; // Object destructuring 
    console.log(`User: ${username}, Price: ${price}`);
}
// We need to check for that the extracted values are not undefined

handleObject(user);

function handleObjectProfessionally(anyObject) {
    const price = anyObject?.price ?? 0; // Default value if undefined
    const username = anyObject?.username ?? "Unknown";
    console.log(`User: ${username}, Price: ${price}`);
}
handleObjectProfessionally(user);
handleObjectProfessionally({}); // User: Unknown, Price: 0