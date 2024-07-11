import { printAge } from "../lessons/lesson-8/utils.js"
// Functions

// Declarative function
// printText();
function printText() {
    console.log("Declarative function works");
}
printText();

// Anonymus function
let helloWorld = function () {
    console.log("Anonymus function works");
}
helloWorld();

// The difference is that if we call the Declarative function before the function itself, it will work.
// The Anonymus function can be called only after it is declared

// Arrow function
let hello = () => {
    console.log("Arrow function works");
}
hello();

// Function with argument
function printName(name) {
    console.log(name);
}
printName("John");

//function with several arguments
function printNamSurname (name, surname) {
    console.log(`Name: ${name} Surname: ${surname}`)
} 
printNamSurname("John", "Smith");

//Function with return
function calculate(numberOne, NumberTwo) {
    const result = numberOne * NumberTwo;
    return result
}
const result = calculate(2, 3);
console.log(result);

printAge(29);