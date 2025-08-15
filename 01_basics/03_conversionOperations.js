let empId = 6409174;
let typeOfEmpId = typeof empId;

// Let us convert this into string 
empId = "6409174";
let typeOfEmpIdAfterConversion = typeof empId;

let valueInNumberOfEmpId = Number(empId); // This will convert the string into number

console.table([
    empId,
    typeOfEmpId,
    typeOfEmpIdAfterConversion,
    valueInNumberOfEmpId,
    typeof valueInNumberOfEmpId // This will log 'number'
]);

let score = "55dvs";
// Now we will be trying to convert this into number - it will be converted to nan
console.log("Score in number:", Number(score)); // This will log NaN (Not a Number) since the string cannot be converted to a number

let temperature = null;
console.log("Temperature in number:", Number(temperature)); // This will log 0 since null is converted to 0 in number conversion
console.log("Temperature in string:", String(temperature)); // This will log 'null' since null is converted to the string 'null'
console.log(temperature); // This will log null since we are logging the variable directly


let isActive;
console.log("Is Active in number:", Number(isActive)); // This will log 0 since undefined is converted to 0 in number conversion   
console.log("Is Active in string:", String(isActive)); // This will log 'undefined' since undefined is converted to the string 'undefined'