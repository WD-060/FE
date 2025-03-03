
function ToDoItem({ todo, toggleTodo }) {
  return (
    <li className='flex items-center mb-2'>
      <input
        onChange={() => toggleTodo(todo.id)}
        type='checkbox'
        checked={todo.completed}
        className='mr-2'
      />
      {todo.text}
    </li>
  );
}

export default ToDoItem;
