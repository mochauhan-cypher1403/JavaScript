//* *************************OBJECTS IN JAVASCRIPT************************************ */
/*
WHAT ALL IS COVERED IN THIS FILE 
1. OBJECTS CREATION - SINGELTON AND OBJECT LITERALS 
2. ACCESSING OBJECT PROPERTIES 
3. HOW TO DELETE THE PROPERTY OF THE OBJECT
4. THE USE OF IN OPERATOR FOR OBJECTS 
5. USING THE "FOR..IN" LOOP TO ACCESS ALL THE PROPERTIES.
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
// ------------------ Singleton object----------------
// This pattern ensures only one spotifyUser exists and this is shared everywhere in the code.
const spotifyUserSingleton = (function() {
    let instance;
    function createInstance(){
        return {
            userId: "563535",
            userName: "Mohini Chauhan",
            userAge: 22, 
            userCountry: "India",
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
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
const user1 = spotifyUserSingleton.getInstance();
const user2 = spotifyUserSingleton.getInstance();
console.log(user1 === user2); // true - both variables point to the same instance
//-------------------Object Literals----------------------
let spotifyUser ={};
Object.create({}); // This will create an empty object 

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

// Other way of doing the same thing
let key = "userPlaylists";
console.log(key in spotifyUser);

// Why does there is a "in" operator if comparing with undefined is enough?
/*
The "in" operator is more explicit and can be used to check for the existence of a property in an object, regardless of its value (even if it's null or undefined).
This can be particularly useful when you want to differentiate between a property that doesn't exist and one that exists but has an undefined value.
*/

// for..in loop to access all the properties of an object - properties if non-integer are listed in the creation order.
for (let key in spotifyUser) {
    console.log(key + ": " + spotifyUser[key]);
}
