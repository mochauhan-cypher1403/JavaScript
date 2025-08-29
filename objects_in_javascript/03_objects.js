//**************************OBJECTS METHODS "THIS"***************************** */
/*
WHAT ARE WE COVERING IN THIS SECTION FILE 
*/
// Example: cartItems object with methods
// A function that is the property of the object is called a method.
// REFERENCE: https://javascript.info/object-methods
"use strict";
const cartItems = {
    items: [],
    addItem(item){
        this.items.push(item);
        console.log(`${item} added to cart.`);
    },
    removeItem(item){
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1); //this keyword to access the object.
            console.log(`${item} removed from cart.`);
        }
    },
    listItems(){
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(`- ${item}`);
        });
    }
}
// Shorter syntax for ibejcts methods 
/*user = {
    sayHello: function() {
        console.log("Hello!");
    }
};
*/
/*
The value of this is determined at the runtime- depending on the context.
*/
// It is also possible to access the object without a this, by referncing it via the outer variable.
let spotifyUser = {
    userName: "Mohini Chauhan",
    sayHello: function() {
        console.log(`Hello, ${this.userName}!`);
    },
    playSongs: function() {
        console.log(`${this.userName} is playing songs.`);
    },
    sayHi() {
        console.log(spotifyUser.userName); // Here we are accessing the object without using this keyword
    }

};
/*
Over here, we are accessing the object without using the this keyword.
Such code is unreliable, as if we decided to copy the user object, the references would break.
This is because if we copy the spotifyUser object, the alert will still refer to the original object, not the copy
*/

let spotifyNewUser = {
    userName: "Mohini Chauhan"
};
let spotifyAdmin = {
    userName: "Admin"
};

function alertUser(){
    console.log(this.userName); // Here this will refer to the global object - window object in browsers
}

// Using the same function in two objects
spotifyNewUser.f = alertUser;
spotifyAdmin.f = alertUser;

// "this" inside the function is the object that calls the function or the object before the dot.
spotifyNewUser.f(); // Mohini Chauhan
spotifyAdmin.f(); // Admin


function anotherAlertUser () {
   console.log(this) // Here this will refer to the global object - window object in browsers
}

let new_user = {
    userName: "Mohini",
    sayHello: function() {
        console.log(`Hello, ${this.userName}!`);
    },
    sayHi() {
        let arrow = () => console.log(this.userName); // Here this will refer to the new_user object
        arrow();
    }
};
new_user.sayHello();
new_user.sayHi();
