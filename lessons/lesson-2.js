// Concationation and Interpolation
let messageToPrint1 = "The price for icecream is 5 euros"
console.log(messageToPrint1);

let price = 5;
let product = "icecream";

price = 45000;
product = "car"

let messageToPrint2 = "The price for "+product+" is "+price+" euros" //concationation
console.log(messageToPrint2);

let messageToPrint3 = `The price for ${product} is ${price} euros`; //interpolation
console.log(messageToPrint3);