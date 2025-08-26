/* ---------------------------- Arrow Functions ---------------------------- */
/*
this keyword: In regular functions, it talks or refer about the current context. 
*/

const user = {
    username: "Mohini Chauhan",
    price: 999,
    welcomeMessage: function(){
        console.log(this); // This is going to return the object to which it belongs - current context 
        // Here it refers to the current context : over here it refers to the object the method belongs to
        return `Welcome ${this.username}, your account balance is $${this.price}.`;
    }
};

console.log(user.welcomeMessage());

// Over here - this refers to the global object (windows in browser, global in Node.js) 
function show(){
    console.log(this); // In this case it refers to the global object - window object in browsers
}

const showArrow = () => {
    console.log(this); // In this case it refers to the global object - window object in browsers
}

const cartItems = {
    cartItems: ["Samsung Headphone", "AirPods", "XH-500 Game"],
    addItem: function() {
        console.log(this); // In this case it refers to the cartItems object
    },
    addCartItems: () => {
        console.log(this); // In this case it refers to the global object - window object in browsers
    }
}

cartItems.addItem();
cartItems.addCartItems();  


// Arrow Function : they are inherited lexically from the parent scope, they are best for callbacks or when you want to keep the parent this.
() => {
    console.log(this); // In this case it refers to the global object - window object in browsers
}
const addTwo = (num1, num2) => (num1+num2); // Implicit return
// Arrow function needs to be used for callbacks or when ou want to inherit this from the parent scope. 

const myArray = [2,7,4,8];
myArray.forEach((item) => console.log(item*2)); // Here the arrow function is used as a callback function