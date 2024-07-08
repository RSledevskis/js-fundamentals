// Logical operators

// "AND" &&
console.log(true && true); // All values have to be TRUE for expression to be TRUE
console.log(true && false); // One of the values is FALSE, so the expression cannot be TRUE

// "OR" ||
console.log(true || false); // One of the values has to be TRUE for expression to be FALSE
console.log(false || false); // Both values are FALSE, so expression cannot be TRUE


// Grocery terminal has a validation in order to pay for alcohol
let ageIsMoreThanEighteen = true;
let isNotTenPM = true;
const isPossibleToPay = ageIsMoreThanEighteen && isNotTenPM;

console.log(`The customer can buy alcohol: ${isPossibleToPay}`);

// "NOT"
console.log(!true);
console.log(!false);
console.log(6 == 10);
console.log(6 !== 10);

