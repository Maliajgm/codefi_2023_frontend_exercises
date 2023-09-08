/*  https://www.codelabsdash.com/lessons/frontend/javascript/essentional-concepts
    1) Declare a global variable outside of any function.
    2) Create a function that tries to modify that global variable.
    3) Create another function that declares a local variable with the same name.
    4) Observe the behavior when calling both functions.
    */

// Declare a global variable here
const globalVar = 300;

function modifyGlobal() {
    // Try to modify the global variable here
let globalVar = 500;
    function anotherFunction() {
        var globalVar = 700;
        
    }
    return anotherFunction();
}
console.log(modifyGlobal, anotherFunction);