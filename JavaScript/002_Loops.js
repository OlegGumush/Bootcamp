
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(element => {
    console.log(element);
});

for (let index = 0; index < arr.length; index++) {
    console.log(index, arr[index]);
}

for (const elem of arr) {
    console.log(elem);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

for (let num of numbers) {
    console.log(num * num);
}

const testObj = {
    name: "oleg",
    lastName: "Gumush",
    Age: 32
}

for (const key in testObj) {
    const element = testObj[key];
    console.log(key + ":" + element);
}

let keys = Object.keys(testObj);
let values = Object.values(testObj);

for (const iterator of values) {
    console.log(iterator);
}