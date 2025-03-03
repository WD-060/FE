import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const students = [];
    students.push(name);
    localStorage.setItem("students", JSON.stringify(students));

    setName("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 p-8"
    >
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        id="name"
        name="name"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
