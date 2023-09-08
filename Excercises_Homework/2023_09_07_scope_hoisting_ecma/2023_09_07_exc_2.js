//Draft a JavaScript function where you call a function before its declaration.
//Analyze the behavior and understand how hoisting impacts the outcome.
//https://www.codelabsdash.com/lessons/frontend/javascript/essentional-concepts//

function mainFunction() {
    
    // Call the hoistedFunction here
    console.log(hoistedFunction);

    // Now declare the hoisted function below
    let hoistedFunction = "Jellybean";
}
mainFunction();

// Answer -- console log showed error becuase the variable was not defined before being called.