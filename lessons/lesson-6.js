// Conditionals

// if (condition) {
//     //code executes here
// } else {
//     //code execute here
// }

/*
If hour between 6 and 12, print "Good Morning"
If hour between 12 and 18, print "Good Afternoon"
Otherwise print "Good Evening"
*/

const hour = 18;
if (hour >= 6 && hour < 12) {
    console.log(`Current time is ${hour}. Good Morning!`)
} else if (hour >= 12 && hour < 18) {
    console.log(`Current time is ${hour}. Good Afternoon!`)
} else {
    console.log(`Current time is ${hour}. Good Evening!`)
}

// HERE! Give a task to rewrite the logic from the lesson-5
// Grocery terminal has a validation in order to pay for alcohol

// Grocery terminal has a validation in order to pay for alcohol
let ageIsMoreThanEighteen = true;
let isNotTenPM = true;

if (ageIsMoreThanEighteen && isNotTenPM) {
    console.log(`The customer can buy alcohol`);
} else {
    console.log(`The customer can't buy alcohol`);
}
