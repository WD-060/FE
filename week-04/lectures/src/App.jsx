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
  return (
    <>
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
      {students.map(({ name, age, city, state }, index) => (
        <Student key={index} name={name} age={age} city={city} state={state} />
      ))}
    </>
  );
};

export default App;
