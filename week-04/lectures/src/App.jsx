<<<<<<< HEAD
import "./App.css";
import Student from "./components/Student";
import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  // const [students, setStudents] = useState([
  //   { name: "John", age: 25, city: "New York", state: "NY" },
  //   { name: "Jane", age: 24, city: "Los Angeles", state: "CA" },
  //   { name: "Doe", age: 26, city: "Chicago", state: "IL" },
  //   { name: "Smith", age: 27, city: "Houston", state: "TX" },
  // ]);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const [theme, setTheme] = useState("light");

  console.log(counter);
  console.log(counter2);
  console.log(counter3);
  console.log(theme);
=======
import './App.css';
import Student from './components/Student';
import { useState, useEffect } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {});
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  // console.log(students);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [search]);
  
  console.log(search);
  console.log(pokemon);
>>>>>>> f070a7d9e5811555df34d85ecdd226d3d718a536
  return (
    <div className={theme}>
      <h1>My first React App</h1>
      <p>Welcome to my first React App</p>
      <form>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* <Student name="Jane" age="24" city={city} state={state} /> */}
      {/* {students.map(({ name, age, city, state }, index) => (
        <Student key={index} name={name} age={age} city={city} state={state} />
      ))} */}

      <Counter counter={counter} setCounter={setCounter} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />
      <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>{theme === "light" ? "dark" : "light"}</button>
    </div>
  );
};

export default App;
