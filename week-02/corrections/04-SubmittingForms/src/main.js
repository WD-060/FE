// select form
const contactForm = document.getElementById("contact-form");
const dataDisplay = document.getElementById("output");

const createData = (type, text, ul) => {
  console.log(text);
  console.log(ul);
  const data = document.createElement("li");
  data.textContent = `${type}: ${text}`;
  ul.appendChild(data);
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // select input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validating input values
  console.log(name, email, message);
  if (!name || !email || !message) {
    dataDisplay.textContent = "Please fill out all fields";
    dataDisplay.classList.add("bg-red-400");
    console.log("Please fill out all fields");
    return;
  }

  // Displaying input values
  //   const template = `<ul>
  //                         <li>Name: ${name}</li>
  //                         <li>Email: ${email}</li>
  //                         <li>Message: ${message}</li>
  //                     </ul>`;
  //   dataDisplay.innerHTML = template;

  const ul = document.createElement("ul");
  createData("Name", name, ul);
  createData("Email", email, ul);
  createData("Message", message, ul);
  dataDisplay.appendChild(ul);
  dataDisplay.classList.add("bg-green-500");

  // reset the form
    contactForm.reset();
});
