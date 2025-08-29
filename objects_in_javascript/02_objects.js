//*************************OBJECT REFERENCES AND COPYING************************* */
/*
WHAT ALL ARE WE COVERYING IN THIS FILE
1. Object References
2. Object Copying
3. Shallow Copy vs Deep Copy
4. Cloning Nested Objects
5. Limitations of Cloning
*/
// REFERENCE: https://javascript.info/object-copy

// In Objects - the variable assigned to the stores not the object itself, but the "address in memory" - " a reference"
let spotifyUserOne = {
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

let spotifyUserTwo = spotifyUserOne; // When an object is getting copied over here, the reference is being assigned to the new object, however the properties are still pointing to the same memory location.
/*
An important side effect of storing objects as reference is that an object declared with "const" can be modified.
*/
const user = {
    name: "Mohini Chauhan",
    age: 22
};
user.name = "John Doe";
console.log(user.name); // John Doe
// It will only give an error if we try to do this user = {};


// How do we copy the object then to get two separate objects ?
/*
Using `Object.assign()` or the spread operator `...` can create a shallow copy of the object.
Object.assign(target,source): over here target(what to apply the sources properties to) and source (object containing the properties to copy the properties you want to apply)
If the copied property name already exists it gets overwritten
*/
let newUser = Object.assign({}, user);

//---------------------Nested Cloning----------------------------------
/*
Untill now, we assumed that all properties of the object are at the first level.
However, if the object has nested objects, the nested objects will still be referenced.
*/

let nestedUser = {
    userName: "Mohini Chauhan",
    userAge: 22,
    userCountry: "India",
    userPlaylists: ["Chill Vibes", "Workout Mix", "Top Hits"],
    userLikedSongs: ["Song1", "Song2", "Song3"],
    userRecentlyPlayed: ["Song4", "Song5", "Song6"],
    userFriends: [ //This is a nested object
        {
            friendId: "123456",
            friendName: "John Doe",
            friendEmail: "johndoe234@mgmail.com"
        },
        {
            friendId: "789012",
            friendName: "Jane Smith",
            friendEmail: "janesmith456@mgmail.com"
        },
        {
            friendId: "345678",
            friendName: "Alice Johnson",
            friendEmail: "alicejohnson789@mgmail.com"
        }
    ],
    "isLoggedIn": true, // This cannot be accessed with dot notation, it can only be accessed with bracket notation

}
let clone = Object.assign({}, nestedUser);
// Both of them are going to share the same user object - to fix that and make them truly separate objects we should be using the cloning loop

console.log(clone.userFriends === nestedUser.userFriends); // true - the nested object is still referenced
//Cloning loop - examines all the values of the nestedUser[key] and if it's an object then replicate the structure as wll. This is called a "Deep Cloning" or "structured cloning"
// Method implementing "Deep Cloning": structuredClone
let deepClone = structuredClone(nestedUser);
console.log(deepClone.userFriends === nestedUser.userFriends); // false - the nested object is now a separate copy

// Is there a situation when deep cloning is not enough?
structuredClone({
    f:function() {}
});
// When an object has function properties, they are not cloned by structuredClone
// To handle these situations - using a combination of cloning methods or for instance _.cloneDeep(obj) from the JavaScript library Lodash.