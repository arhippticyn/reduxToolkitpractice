import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { ClearTodo, DeleteTodo, ToggleCompeted } from '../../redux/TodoSlice';
const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id) => dispatch(DeleteTodo(id))
    const handleCompleted = (id) => dispatch(ToggleCompeted(id))
    const handleClear = () => dispatch(ClearTodo())
  return (
    <div>
      <p>{todos.length}</p>
      <button onClick={handleClear}>Clear</button>
        <ul>
        {todos.map(todo => {
            return <Todo todo={todo} deletes={handleDelete}  completedTodo={handleCompleted}/>
        })}
        </ul>
    </div>

  )
}

export default Todos;