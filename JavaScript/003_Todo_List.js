let todoList = []
let command = ""

while (command !== "quit") {
    command = "";
    while (command === "") {
        command = prompt("What would you like to do?");
    }
    if (command === "new") {
        let toDo = ""
        while (toDo === "") {
            toDo = prompt("Enter new todo");
        }
        todoList.push(toDo)
    }
    else if (command === "list") {
        console.log("*****************************");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*****************************")
    }
    else if (command === "remove") {
        let index = ""
        while (index === "") {
            index = prompt("Enter index");
        }
        todoList.remove(index);
        index.sp
    }
}

