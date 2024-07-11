// Loops

console.log("Hello World separate statement");
console.log("Hello World separate statement");
console.log("Hello World separate statement");
console.log("Hello World separate statement");
console.log("Hello World separate statement");

// statement1: initial condition
// statement2: condition for how long we want to execute our loop. When to end
// statement3: what do we need to do after each cycle of the loop
/**
 * for (statement1; statement2, statement3;) {

}
 */

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Hello World loop ${i}`);
}

// for of
const cars = ["Tesla", "BMW", "AUDI"];
for (let car of cars) {
    console.log(car);
}

// condition inside the loop
const cars2 = ["Tesla", "BMW", "AUDI"];
for (let car of cars2) {
    console.log(car);
    if (car === "BMW"){
        console.log("Stopping the loop here");
        break;
    } 
}

// forEach loop

const cars3 = ["Tesla", "BMW", "AUDI"];
 cars3.forEach((car) => {
    console.log(car);
 })