const cunstomerFirstName: string = "Rainers";
const customerSecondName: string = "Sledevskis";
let customerAge: number = 29;

customerAge = "29";

type Customer = {
    name: string, 
    surname: string,
    age: number,
}

const customer: Customer = {
    name: "John",
    surname: "Doe",
    age: 21,
}

// if you will try to remove or add any additional properties, it will not give you this opportunity

const customer2: Customer = {
    name: "John",
    surname: "Doe",
}

const customer3: Customer = {
    name: "John",
    surname: "Doe",
    age: 21,
    language: "latvian"
}
