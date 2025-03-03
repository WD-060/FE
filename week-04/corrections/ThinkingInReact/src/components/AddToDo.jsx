import { useState, useEffect } from 'react';

function AddToDo({ todos, setTodos, setError }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setError('Please enter a to-do');
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: prev.length, text: newTodo, completed: false },
    ]);
    localStorage.setItem(
      'todos',
      JSON.stringify([
        ...todos,
        { id: todos.length, text: newTodo, completed: false },
      ])
    );
    setNewTodo('');
  };

  //   useEffect(() => {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }, [todos]);

  console.log(newTodo);
  return (
    <form onSubmit={handleSubmit} className='flex mb-4'>
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        className='flex-1 border px-2 py-1 mr-2'
        type='text'
        placeholder='Add a new to-do'
        name='todo'
        id='todo'
        value={newTodo}
      />
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        type='submit'
      >
        Add
      </button>
    </form>
  );
}

export default AddToDo;
