/*----------------- Immediately Invoked Function Expression (IIFE) ----------------- */
// Wrapping the function in parentheses and invoking it immediately
(function() {
    console.log("This is an IIFE");
})();
/*
1. What are the various scenarios where IIFE can be useful?
- Avoiding global scope pollution
- Creating private variables
- Module pattern implementation
- Initialization code that runs once
*/ 
// (Function Definition)() <- Execution 

(printName => {
    printName("John Doe");
})(name => {
    console.log("Hello, my name is " + name);
});

(
    (name => {
        console.log("Hello, " + name);
    })
)('John Doe');