import React from 'react';
const Todo = ({todo, deletes, completedTodo}) => {
  return (
    <li key={todo.id}>
        <h2>{todo.text}</h2>
        <button onClick={() => deletes(todo.id)}>Delete</button>
        <input type="checkbox" onClick={() => completedTodo(todo.id)} value={todo.completed} name="" id="" />
    </li>
  )
}

export default Todo;