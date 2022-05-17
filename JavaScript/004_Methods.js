const math = {
    PI: 3.14159,

    // multiply: function (x, y) {
    //     return x * y;
    // },
    // divide: function (x, y) {
    //     return x / y;
    // },
    // square: function (x, y) {
    //     return x * x;
    // },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    square(x, y) {
        return x * x;
    },
    usePI(x) {
        return x * this.PI;
    }
}

console.log(math.multiply(1, 2));
console.log(math.PI);
console.log(math.usePI(12345));


let numbers = [1, 2, 3, 4, 5];
let strings = ["1asd", "2adg", "3rg"];

function print(elem) {
    console.log(elem);
}
numbers.forEach(print);

numbers.forEach(elem => console.log(elem));
strings = strings.map(elem => elem.toUpperCase());
strings.forEach(elem => {
    console.log(elem)
});


setTimeout(() => {
    console.log(".. Timer");
}, 3000);

let id = setInterval(() => {
    console.log(".. Interval");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 3000);


let filtered = numbers.filter(num => num < 3);
filtered.forEach(elem => console.log(elem));


let every = numbers.every(num => num >= 0);
console.log(every)


let some = numbers.some(num => num == 2);
console.log(some)

console.log("Max " + Math.max(1, 2, 3, 4, 5));

console.log("Max " + Math.max(numbers)); // invalid

console.log("Max " + Math.max(...numbers)); //spread



let s1 = ["1asd", "2adg", "3rg"];
let s2 = ["1asd", "2adg", "3rg"];

let allPets = [...s1, ...s2];
console.log("Spread " + allPets); //spread


// CRAZY
function sum() {
    console.log(arguments);
    // arguments.reduce will not work not an array
}

sum(1, 2, 3, 4);

function sum1(...rest) {
    console.log(rest);
    // rest.reduce // will work
}

sum1(1, 2, 3, 4);




const [firstNumber, secondNumber, thirdNumber, ...rest] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(rest);




const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7,
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`
};

// rename hasAlive: isAlive
const { name, age, hasAlive: isAlive, addr = "Haifa" } = dog;
console.log(name);
console.log(age);
