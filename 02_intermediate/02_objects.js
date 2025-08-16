// ------------------Objects in JavaScript---------------------
// Concept of Singleton - When you create an object with constructor function, it is a singleton object.

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

// -----------------Accessing the properties of the object-------------------
console.log(spotifyUser.userId); // Accessing the userId property 
console.log(spotifyUser["userName"]); // Accessing the userName property using bracket notation


const mySymbol = Symbol("key1");
const empoloyeeList = {
    [mySymbol]: "Mohini Chauhan", // Using Symbol as a key
    empId: 6409174,
    empName: "Mohini",
    empAge: 22,
    empCountry: "India",
    empDesignation: "Software Engineer",
    empSalary: 100000,
    // adding the function into the object
    getEmployeeDetails: function() {
        return `Employee Name: ${this.empName}, Employee ID: ${this.empId}, Employee Age: ${this.empAge}, Employee Country: ${this.empCountry}, Employee Designation: ${this.empDesignation}, Employee Salary: ${this.empSalary}`;
    }
}
empoloyeeList.greeting = function(){
    return `Hello, my name is ${this.empName} and I am a ${this.empDesignation} from ${this.empCountry}.`;
};

console.table([
    {
        type: "Employee ID",
        value: empoloyeeList.empId
    },
    {
        type: "Employee Name",
        value: empoloyeeList.empName
    },
    {
        type: "Employee Age",
        value: empoloyeeList.empAge
    },
    {
        type: "Employee Country",
        value: empoloyeeList.empCountry
    },
    {
        type: "Employee Designation",
        value: empoloyeeList.empDesignation
    },
    {
        type: "Employee Salary",
        value: empoloyeeList.empSalary
    },
    {
        type: "Employee Details",
        value: empoloyeeList.getEmployeeDetails()
    },
    {
        type: "Employee Greeting",
        value: empoloyeeList.greeting()
    }
]);

console.log(empoloyeeList[mySymbol]); // Accessing the property using Symbol
console.log(typeof mySymbol);
console.log(typeof empoloyeeList[mySymbol]);

// ----------------- How to change the value of the property of the object -------

// ------- Not allowing the values of the objects to be changed -------
Object.freeze(spotifyUser); // This will freeze the object and prevent any changes to it


// ------- what do we understand by method in functions -------------

let tinderUsers = new Object({}); // Another way to create an object - Singleton Object
// This is a singleton object, it can only have one instance and cannot be created multiple times

tinderUsers = {
    userId: "123456",
    userName: "John Doe",
    userAge: 25,
    userLocation: "New York",
    userInterests: ["Traveling", "Cooking", "Reading"],
    userBio: "Adventure seeker and food lover.",
    userPhotos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
    userMatches: [
        {
            matchId: "654321",
            matchName: "Jane Smith",
            matchAge: 24,
            matchBio: "Nature enthusiast and coffee addict."
        }
    ],
    isLoggedIn: true,
};
//----------------Concept of Optional Chaining-------------------
// This is a way to access nested properties of an object without having to check if the parent properties exist or not.
// It is a way to avoid errors when trying to access properties of an object
console.log(tinderUsers?.userMatches?.[0]?.matchName); // This will return "Jane Smith" if the userMatches array exists and has at least one element, otherwise it will return undefined


//-------------------------Combine Objects----------------
const object_1= {
    name: "Mohini",
    age: 22,
    country: "India"
}
const object_2 = {
    profession: "Software Engineer",
    company: "Tech Solutions",
    experience: 3
}
const combinedObject = {...object_1, ...object_2}; // This will combine both objects into one object
console.log(combinedObject); // { name: 'Mohini', age: 22, country: 'India', profession: 'Software Engineer', company: 'Tech Solutions

//----------------How to access the keys of the object---------------
console.log(Object.keys(tinderUsers)); // This will return an array of the keys of the object

//-----------------How to access the values of the object---------------
console.log(Object.values(tinderUsers)); // This will return an array of the values of the object

//-----------------How to access the entries of the object---------------
console.log(Object.entries(tinderUsers)); // This will return an array of the entries of the object
