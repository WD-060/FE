// Getting the elements
const form = document.getElementById("form");
const input = document.getElementById("userInput");
const list = document.getElementById("list");
const reload = document.getElementById("reload");

// Getting the data from the local storage
let data = JSON.parse(localStorage.getItem("data")) || [];

// Function create element
const createNewElement = (task, list) => {
  const li = document.createElement("li");
  li.textContent = task.title;
  // li.id = task.id;
  li.setAttribute("id", task.id);
  li.className = "flex justify-between items-center w-full my-2";
  //   li.classList.add("flex", "justify-between", "items-center", "w-full", "my-2");

  // creatung delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded";

  // deleteBtn event
  deleteBtn.addEventListener("click", () => {
    data = data.filter((task) => task.id !== li.id);
    localStorage.setItem("data", JSON.stringify(data));
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.insertBefore(li, list.childNodes[0]);
};

// submit the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value.trim();

  // Check input has value
  if (!userInput) {
    alert("Please enter a value");
    return;
  }

  // creating the new object
  const newItem = {
    id: `${new Date().getTime()}${userInput}`,
    title: userInput,
  };
  // Create a new list item
  createNewElement(newItem, list);
  data.unshift(newItem);
  localStorage.setItem("data", JSON.stringify(data));
  // Clear the input field
  input.value = "";
});

reload.addEventListener("click", () => {
  window.location.reload();
});

window.addEventListener("load", () => {
  console.log(data);
  data.map((task) => createNewElement(task, list));
});
