let todoList = [];
let command = "";

console.log("Start...");

while (command !== "quit") {

    console.log("Enter command ...");
    command = getFromPromt("What would you like to do?");
    console.log("Command " + command);

    if (command === "new") {
        let toDo = getFromPromt("Enter new todo");
        todoList.push(toDo);
    }
    if (command === "list") {
        console.log("*****************************");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*****************************");
    }
    else if (command === "remove") {
        let index = parseInt(getFromPromt("Enter index"));
        todoList.splice(index, 1);
    }
}

function getFromPromt(message) {

    let toDo = "";
    // while (toDo === "") {
    toDo = prompt(message);
    // }
    return toDo;
}