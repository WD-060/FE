import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponents from './components/FilterComponents';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.id);
          console.log(id);
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  console.log(todos);
  return (
    <div className='container mx-auto p-4'>
      <AddToDo todos={todos} setTodos={setTodos} setError={setError} />
      <FilterComponents filter={filter} setFilter={setFilter} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}

export default App;
