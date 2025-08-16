// --------------------- Date and Time in JavaScript --------------------
"use strict";

let myDate = new Date();
console.table([
    myDate,
    typeof myDate
]);

console.log(myDate);
console.log(typeof myDate); // This will log 'object' since Date is a non-primitive data type

// Trying to convert the data into string and various formats 
console.table([
    myDate.toString(), // This will log the date in string format
    myDate.toDateString(), // This will log the date in a more readable format
    myDate.toISOString(), // This will log the date in ISO format
    myDate.toLocaleString(), // This will log the date in the local format
    myDate.toLocaleDateString(), // This will log the date in the local date format
    myDate.toLocaleTimeString() // This will log the time in the local time format
])

let accountOpeningDate = new Date("2023-01-01T10:00:00Z"); // Creating a date object with a specific date and time

// For account opening table
console.table([
    {
        property: 'Full Date',
        value: accountOpeningDate
    },
    {
        property: 'Day',
        value: accountOpeningDate.getDay()
    },
    {
        property: 'Month',
        value: accountOpeningDate.getMonth()
    },
    {
        property: 'Year',
        value: accountOpeningDate.getFullYear()
    },
    {
        property: 'Hours',
        value: accountOpeningDate.getHours()
    },
    {
        property: 'Minutes',
        value: accountOpeningDate.getMinutes()
    },
    {
        property: 'Seconds',
        value: accountOpeningDate.getSeconds()
    },
    {
        property: 'Milliseconds',
        value: accountOpeningDate.getMilliseconds()
    }
]);

// Getting the current timestamp : Useful in polls and other applications 
let currentTimeStamp = Date.now();
console.table([
    {type: "Current Timestamp", value: currentTimeStamp},
    {type: "Current Date from Timestamp", value: new Date(currentTimeStamp)}
]);


