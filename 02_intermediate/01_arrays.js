// --------------------- Arrays in JavaScript ---------------------
"use strict";
const cartItems = [];
console.log("Cart Items: ", cartItems); // This will log an empty array

//----------------Adding the elements into the array-----------------------
// The array elements are added using the push method - we can keep data of any data type in the array
cartItems.push("Samsung Headphones");
cartItems.push("Apple iPhone 15 Pro Max");
cartItems.push("Dell XPS 13 Laptop");
cartItems.push(1000); // Adding a number to the array
cartItems.push(true); // Adding a boolean to the array
cartItems.push({ name: "Apple Watch", price: 399 }); // Adding an object
console.log("Cart Items after adding an item: ", cartItems); 

// -----------------Accessing the elements of the array-------------------
console.table([
    {
        type: "First Item of the CartItems",
        value: cartItems[0]
    },
    {
        type: "Last Item of the CartItems",
        value: cartItems[cartItems.length - 1]
    },
    {
        type: "Length of the CartItems",
        value: cartItems.length
    }
])

// -----------------Iterating through the array------------------
// Popping the last item from the array 
cartItems.pop(); // This will remove the last item from the array
console.log("Cart Items after popping the last item: ", cartItems);

// Inserting the item at the begining of the array - this is done using the unshft method.
cartItems.unshift("Sony WH-1000XM5"); // This will add an item to the beginning of the array
console.log("Cart Items after unshifting an item: ", cartItems);


// Join in array - this will join the array elements into a string
console.log("Cart Items joined: ", cartItems.join(", ")); 


//--------------Slice or Splice in Array--------------------
// Slice will return a new array with the selected elements
const slicedItems = cartItems.slice(1, 3); // This will return a new array with the elements from index 1 to 2 (3 is not included)
console.log("Using the Slice Method");
console.table([
    {
        type: "Sliced Items",
        value: slicedItems
    },
    {
        type: "Original Cart Items",
        value: cartItems
    }
]);

// Splice will modify the original array and return the removed elements
const splicedItems = cartItems.splice(1, 2); // This will remove 2 elements from index 1 and return them
console.log("Using the Splice Method");
console.table([
    {
        type: "Spliced Items",
        value: splicedItems
    },
    {
        type: "Cart Items after Splicing",
        value: cartItems
    }
]);

//-------------------Finding the index of the element in the array-------------------
const indexOfItem = cartItems.indexOf("Dell XPS 13 Laptop"); // This will return the index of the item in the array
console.log("Index of 'Dell XPS 13 Laptop': ", indexOfItem);

//-------------------Checking if the item exists in the array-------------------
const isItemInCart = cartItems.includes("Apple iPhone 15 Pro Max"); // This will return true if the item exists in the array
console.log("Is 'Apple iPhone 15 Pro Max' in Cart: ", isItemInCart);

// Let's consider the option of pushing array and joining the array 
let cartItems1 = ["Headphones", "IPhone", "Laptop", "Mouse"];
let cartItems2 = ["Tablet", "SmartWatch", "charger"];

cartItems1.push(cartItems2);
console.log("Cart Items after pushing another array: ", cartItems1); // This will log the array with the second array pushed into it

// Differrence between concat and push is - using concat to add element will not modify the original array it is going to create the new array with the elements of both the arrays.
cartItems1.pop();
cartItems1.push(...cartItems2);
console.log("Cart Items after pushing another array with spread operator: ", cartItems1); // This will log the array with the second array pushed into it using spread operator

//---------------Using the Flat Operator----------------
const another_array = ["Item1", "Item2", ["Item3", "Item4"], "Item5"];
console.log("Another Array: ", another_array);
const flattenedArray = another_array.flat(); // This will flatten the array by one level
console.log("Flattened Array: ", flattenedArray); // This will log the flattened array

//-----------------Checking if the array is array or not-----------------
console.log(Array.isArray(cartItems)); // This will return true if cartItems is an array
console.log(Array.isArray("This is a string")); // This will return false since it is not an array

console.log(Array.from("Hello")); // This will convert the string into an array of characters
console.log(Array.from(6409174)); // This gives emopty array since the number is not iteratable


// --- Copying of Arrays ---
// Shallow copy and deeep copy of the arrays





