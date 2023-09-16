/* https://www.codelabsdash.com/lessons/frontend/javascript/foundations-part-2

JavaScript: Foundations - Functions, Objects, Built-in Objects */


function greet(name) {
    console.log("Hello, " + name);
}
greet("Sue");

/* #2 */

function multiply(a,b) {
    sum = a*b;
    return console.log("This is our result: " + sum);
}

multiply(7,3);



/* #3 */

const person= {
    name: "Weston",
    age: 19,
    gender: "male",
}

console.log(person.age);

/* #4 */

const car=() => {
    make: "Honda";
    model: "Pilot";
    year: 2010;
}

console.log.car;

/* #5 */


function reverseString(string) {
    return string.split("").reverse().join("");
    
};

console.log(reverseString("This is weird!"));

/* #6 */

function calculateArea(radius) {
    const π = Math.PI;
    return π * radius * radius
}

/* #7 */
 
const date = new Date();
console.log(date);

/* #8 */

function random(min, max) {
    result = Math.random() * (max - min) + min;
    console.log(result);
}
random(15, 20);

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
    
}
console.log(randomNum(1, 10));