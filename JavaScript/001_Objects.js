//////////////////////////////////// Objects ////////////////////////////////////////////////

const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7,
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`
};

console.log(dog);
console.log("name :" + dog["name"]);
console.log("name :" + dog.name);
// Doesn't work
console.log("name :" + dog["Name"]);
console.log("address :" + dog.address);

// Edit
dog.name = "New Name"
dog.newField = "Inserted new field"
console.log("name :" + dog["name"]);
console.log("New field :" + dog["newField"]);

console.log("Object arrays:")
const shoppingCart = [
    {
        productName: "Potato",
        price: "2$",
    },
    {
        name: "Cucamber",
        breed: "1$",
    },
    {
        name: "Orange",
        breed: "1$",
    }
];

console.log(shoppingCart);
shoppingCart.pop();
console.log(shoppingCart);
