// objects
let customer = {
    firstName: "John",
    lastName: "Doe",
}

//how to access an object value
console.log(customer);

console.log(customer.firstName);
console.log(customer.lastName);

// to change any value inside the object
customer.firstName = "Rainers";
console.log(customer.firstName);

// lets print out both values using interpolation
console.log(`Customer name: ${customer.firstName}. Customer surname: ${customer.lastName}`);

// arrays
let vehicles = ["BMW", "Audi", "Ducati"];
// arrays have indexes 
// [0]     [1]     [2]
// ["BMW", "Audi", "Ducati"];

console.log(vehicles[0])
console.log(vehicles[1])
console.log(vehicles[2]) 
console.log(vehicles[3]) // undefined

vehicles[1] = "Mercees Benz"
console.log(vehicles[1])
console.log(`The index of the Mercedes Benz: ${vehicles.indexOf("Mercees Benz")}`);

let customerUpdated = {
    firstName: "John",
    lastName: "Doe",
    vehicles: ["BMW", "Audi", "Ducati"],
}
console.log(customerUpdated.vehicles[2]);
