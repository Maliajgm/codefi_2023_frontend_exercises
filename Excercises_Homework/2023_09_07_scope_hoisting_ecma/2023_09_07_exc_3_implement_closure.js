/*  https://www.codelabsdash.com/lessons/frontend/javascript/essentional-concepts

    1) Develop a JS function that returns another function
    2)  The inner function should have access to variables from the outer function's scope */

function firstFunction() {
    let thisVariable = "Somebody";
    console.log(thisVariable);
    
        function secondFunction() {
            let anotherVariable = "Somewhere";
            console.log(thisVariable, anotherVariable);
        }
    return secondFunction;   
} 
const outerFunctionCall = firstFunction();
outerFunctionCall();