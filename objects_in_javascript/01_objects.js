//* *************************OBJECTS IN JAVASCRIPT************************************ */
/*
WHAT ALL IS COVERED IN THIS FILE 
1. OBJECTS CREATION - SINGELTON AND OBJECT LITERALS 
2. ACCESSING OBJECT PROPERTIES 

*/
// REFERENCE: https://javascript.info/object

// Concept of Singleton - When you create an object with constructor function, it is a singleton object.
/*
Singleton - is a design pattern that ensures a class or an object has only one instance throghout the application.
Instead of creating multiple instances, you always get the same instance whenever you need it.
- You create the class or object - you restrict its initalization s only one object is ever created. 
- Any code that needs this object gets the same instance.
Useful: For things like configuration settings, logging, or managing shared resources.
*/


/*
Important: Not every object is called an instance - some objects are just created directly, not from a class or a constructor.
When you use a class or an constructor function to create an object, that object is considered an instance of that class.
*/

//-------------------Object Literals----------------------
let spotifyUser ={};
Object.create({}); // This will create an empty object // This is the singleton object 

spotifyUser = {
    userId: "6409174",
    userName: "Mohini Chauhan",
    userEmail: "momochauhan2003@gmail.com",
    userPassword: "Chauhan1403",
    userAge: 22,
    userCountry: "India",
    userSubscription: "Premium",
    userPlaylists: ["Chill Vibes", "Workout Mix", "Top Hits"],
    userLikedSongs: ["Song1", "Song2", "Song3"],
    userRecentlyPlayed: ["Song4", "Song5", "Song6"],
    userFriends: [
        {
            friendId: "123456",
            friendName: "John Doe",
            friendEmail: "johndoe234@mgmail.com"
        },
    ],
    "isLoggedIn": true, // This cannot be accessed with dot notation, it can only be accessed with bracket notation
}


// How to remove the property from the object 
delete spotifyUser.userCountry // To delete the property use the `delete` operator.

console.log(spotifyUser);

// Using multiword property names but then they must be quoted like 
tinderUsers = {
    "user name": "Mohini Chauhan",
    "user age": 22,
    "user phoneNo": "+91 9821806115",
    "isLoggedIn": true
};
// Now how to access multi-word properties - cannot be accessed via the dot notation( the dot notation requires the key to be a valid variable identifier)
console.log(tinderUsers["user name"]);
console.log(tinderUsers["user age"]);
console.log(tinderUsers["user phoneNo"]);
console.log(tinderUsers["isLoggedIn"]);

// An advantage of square notation is that it allows you to use dynamic property names.
let propertyName = "user age"; //This could be calcuated in run-time or depened on the user input - giving great deal of flexibility.
console.log(tinderUsers[propertyName]);
console.log(tinderUsers.propertyName) //undefined

// Property existence test, "in" operator 
/*
In Javascript, reading a non-existing property just returns undefined, there will be no error if the property does not exist.
There is a special operator for this - the "in" operator.
Syntax "key" in object
*/
console.log("user age" in tinderUsers);
console.log("userAge" in spotifyUser);

