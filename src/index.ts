import {TodoItem} from "./todoItem";
import {TodoCollections} from "./todoCollections";

let todos = [
    new TodoItem(1, "Kupić kwiaty"),
    new TodoItem(2, "Odebrać buty"),
    new TodoItem(3, "Zamówić bilety"),
    new TodoItem(4, "Zadzwonić do Jarka :>", true)
];
console.clear();
let collection = new TodoCollections("Adam", todos);
console.log(`Lista ${collection.userName}`)
let newId = collection.addTodo("Iść pobiegać");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
//collection.addTodo(todoItem);

//console.log(JSON.stringify(todoItem));
