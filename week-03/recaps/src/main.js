const form = document.querySelector("#item-form");
const list = document.querySelector("#item-list");
const input = document.querySelector("#item-input");
const listItems = JSON.parse(localStorage.getItem("list")) || [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.slice(0, 10));
    // data.slice(0, 10).map((item) => addItem(item));
    localStorage.setItem("list", JSON.stringify(data.slice(0, 10)));
  })
  .catch((error) => console.log(error));

const fetchTodos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchTodos("https://jsonplaceholder.typicode.com/todos");
//   async function fetchToDos(url) {};

const EditBtnClass =
  "px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded";
const DeleteBtnClass =
  "px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";

console.log(listItems);

const addItem = (item) => {
  const li = document.createElement("li");
  li.className = "flex justify-between items-center p-4 border-b";
  li.id = item.id;

  const span = document.createElement("span");
  span.textContent = item.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = DeleteBtnClass;
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    const updatedList = listItems.filter((item) => item.id !== li.id);
    localStorage.setItem("list", JSON.stringify(updatedList));
    li.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.className = EditBtnClass;
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Enter new text");
    if (newText) {
      span.textContent = newText.trim();
      const updatedList = listItems.map((item) => {
        if (item.id === li.id) {
          return {
            ...item,
            title: newText.trim(),
          };
        }
        return item;
      });
      localStorage.setItem("list", JSON.stringify(updatedList));
    }
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
};

listItems.forEach((item) => {
  addItem(item);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = input.value.trim();
  if (item) {
    const listItem = {
      id: `${new Date().getTime()}${item}`,
      title: item,
    };
    listItems.push(listItem);
    localStorage.setItem("list", JSON.stringify(listItems));
    addItem(listItem);
    input.value = "";
  }
});



console.log(typeof listItems);
