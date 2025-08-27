/*-----------------------------------FUNCTIONS IN JAVASCRIPT----------------------------------*/
/*
wHAT IS THERE IN THIS JS FILE ?
1. Functions in Javascript 
2. Function Declaration
3. Function Definition
4. Function parameters vs Function Arguments
*/

// Function declaration - a specific way to defne the function using the function keyword.
function addToCart(item, quantity){
    // ...code to add the item into the cart
};

// Function Reference - Using the function name without the parenthesis (passing it as callback)
const cartAction = addToCart; // Reference, not execution

// Function Execution - Calling the function
cartAction("Apple", 2);


// Function parameters vs Function Arguments
// Parameters are the variables listed as part of the function's definition.
// Arguments are the actual values you pass to the function when you call it.

// Parameters: item (placeholder for product name), quantity (placeholder for product quantity), price (placeholder for product price)
function checkout(item, quantity, price){
    const subtotal = quantity * price;
    console.log(`You have added ${quantity} ${item}(s) to your cart. Subtotal: $${subtotal}`);
    return subtotal;
    // Anything you write beyond this point won't affect the function's return value
}

// Calling the function with arguments 
const cartSubtotal1 = checkout("Apple", 2, 0.5);
const cartSubtotal2 = checkout("Banana", 3, 0.3);
const cartSubtotal3 = checkout("Orange", 1, 0.8);

// How do we pass arrays as arguments in functions ?
// 1. Passing an array as single argument 
const cartItem = ["Samsung Headphones XH-500", 1, "$199"];
function processCart(cartItem){
    let total =0;
    total += cartItem[1] * parseFloat(cartItem[2].replace("$", ""));
    console.log(`Total for ${cartItem[0]}: $${total}`);
}
processCart(cartItem);
console.log("----------------------------------------------------");
//2. Passing the array elements as individual arguments using the spread operator
const cartItemNew =["Samsugn Headphne", 1, 34.56];
const cartTotal = checkout(...cartItemNew);
console.log(`Cart Total: $${cartTotal}`);

console.log("----------------------------------------------------");

// Higher order array being passed in function as arguments 
let cartTotalValue = 0;
function addToCartItems(item, quantity, price){
    const subtotal = quantity * price;
    cartTotalValue+= subtotal;
    console.log(`You have added ${quantity} ${item}(s) to your cart. Subtotal: $${subtotal}`);
    console.log(`Updated Cart Total: $${cartTotalValue.toFixed(2)}`);
    return subtotal;
};

// Function to process multiple products 
function addMultipleToCart(...cartItems){
    cartItems.forEach(item => {
        addToCartItems(...item);
    });
};

const cartItems = [
    ["Wireless Headphones", 1, 49.99],
    ["Coffee Mug", 2, 7.99]
];

addMultipleToCart(...cartItems);

// How do we pass objects as arguments in functions ?

const newCartItems = {
    cartItems: [
        {name: "Wireless Headphones", quantity:1, price:45.99},
        {name:"MacBook Pro M4", quantity:1, price:200},
        {name:"IPhone Mini", quantity:1, price:100}
    ]
};

function IterateThroughArrayInObject(cartItemObj){
    cartItemObj.cartItems.forEach(item => {
        addToCartItems(item.name, item.quantity, item.price);
    });
}
IterateThroughArrayInObject(newCartItems);


// How do we pass and deal with json responses as arguments in functions ?


// SCENARIO - When user does not provide the arguments 
