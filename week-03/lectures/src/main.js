const form = document.querySelector("#item-form");
const list = document.querySelector("#item-list");
const input = document.querySelector("#item-input");
const listItems = JSON.parse(localStorage.getItem("list")) || [];

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
      //   const foundItem = listItems.find((item) => item.id === li.id);
      //   foundItem.title = newText.trim();
      //   const updatedList = listItems.filter((item) => item.id !== li.id);
      //   updatedList.push(foundItem);
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

// Local Storage
// const items = localStorage.getItem("list");
// console.log(items);
// localStorage.setItem("token", "Hello World");
// localStorage.setItem("number", 3);
// localStorage.setItem("boolean", true);
// localStorage.setItem("array", [1, 2, 3]);
// localStorage.setItem("object", JSON.stringify({ name: "John Doe" }));
// localStorage.setItem(
//   "list",
//   JSON.stringify([
//     { name: "John Doe" },
//     { name: "Jane Doe" },
//     { name: "Max Doe" },
//   ])
// );
// const object = JSON.parse(localStorage.getItem("object"));
// console.log(object);
// const listStorage = JSON.parse(localStorage.getItem("list"));
// console.log(listStorage);

// const logOut = () => {
//   localStorage.removeItem("token");
//   localStorage.clear();
// };
