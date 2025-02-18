const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

// Select the elements
const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const list = document.getElementById("item-list");

// Add an event listener to the add button
const addItem = (i) => {
  const newItem = document.createElement("li");
  newItem.textContent = tasks[i];
  list.appendChild(newItem);
};

// addBtn.addEventListener("click", () => {
//   const newItem = document.createElement("li");
//   newItem.textContent = tasks[Math.floor(Math.random() * tasks.length - 1)];
//   list.appendChild(newItem);
// });

tasks.forEach((task, i) => {
  addItem(i);
});

addBtn.addEventListener("click", () =>
  addItem(Math.floor(Math.random() * tasks.length - 1))
);


// Alert btn
alertBtn.addEventListener("click", () => alert("Button clicked!"));

// Console btn
consoleBtn.addEventListener("click", () => console.log("Button clicked!"));
