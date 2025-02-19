import "./App.css";
import Student from "./components/Student";

// function App(){};

const App = () => {
  const name = "John";
  const age = 25;
  const city = "New York";
  const state = "NY";

  const students = [
    { name: "John", age: 25, city: "New York", state: "NY" },
    { name: "Jane", age: 24, city: "Los Angeles", state: "CA" },
    { name: "Doe", age: 26, city: "Chicago", state: "IL" },
    { name: "Smith", age: 27, city: "Houston", state: "TX" },
  ];
  return (
    <>
      <h1>My first React App</h1>
      <p>Welcome to my first React App</p>
      {/* <Student name="Jane" age="24" city={city} state={state} /> */}
      {students.map(({ name, age, city, state }, index) => (
        <Student key={index} name={name} age={age} city={city} state={state} />
      ))}
    </>
  );
};

export default App;
