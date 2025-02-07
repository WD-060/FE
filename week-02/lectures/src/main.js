// console.log(document);
// console.log(document.lastChild.firstChild);
// console.log(document.querySelector("ul"));
// console.log(document.querySelector(".list"));
// console.log(document.querySelector("#to-do-list"));
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerHTML);
h1.innerHTML = "Hello, World!";
h1.textContent = "Hello, Class!";


const toDoList = document.getElementById("to-do-list");
console.log(toDoList);
console.log(toDoList.innerHTML);
toDoList.innerHTML = "<li>Buy milk</li><li>Buy eggs</li><li>Buy bread</li>";

const toDoListItems = document.querySelectorAll("li");
console.log("NodeList", toDoListItems);

const toDoListCollection = document.getElementsByClassName("list-item");
console.log("HTMLCollection", toDoListCollection);
