import {TodoItem} from "./todoItem";
import {TodoCollections} from "./todoCollections";
import * as inquirer from 'inquirer';

let todos = [
    new TodoItem(1, "Kupić kwiaty"),
    new TodoItem(2, "Odebrać buty"),
    new TodoItem(3, "Zamówić bilety"),
    new TodoItem(4, "Zadzwonić do Jarka :>", true)
];
let collection = new TodoCollections("Adam", todos);

function displayTodoList(): void {
    console.log(`Lista ${collection.userName}a `
    + `liczba zadań pozostałych do zrobienia: ${collection.getItemCounts().incomplete}`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
    Quit = "Koniec"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Wybierz opcje",
            choices: Object.values(Commands)
        }).then(answers => {
            if (answers["command"] !== Commands.Quit) {
                promptUser();
            }
        })
}

promptUser();