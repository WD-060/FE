// getting the elements
const form = document.getElementById("form");
const list = document.getElementById("list");
const reload = document.getElementById("reload");
const input = document.getElementById("userInput");
let items = JSON.parse(localStorage.getItem("items")) || [];

// Creating a new element
const createNewElement = (value, list) => {
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
};

// // Load items from local storage
// items.forEach((item) => {
//   createNewElement(item, list);
// });

// Submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value.trim();

  // Check input has value
  if (!userInput) {
    alert("Please enter a value");
    return;
  }

  // Create a new list item
  createNewElement(userInput, list);
  items.push(userInput);
  localStorage.setItem("items", JSON.stringify(items));
  // Clear the input field
  input.value = "";
});

reload.addEventListener("click", () => {
    window.location.reload();
});

window.addEventListener("load", () => {
  // Load items from local storage
  items.forEach((item) => {
    createNewElement(item, list);
  });
});
