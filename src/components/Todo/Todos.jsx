import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { DeleteTodo, ToggleCompeted } from '../../redux/TodoSlice';
const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id) => dispatch(DeleteTodo(id))
    const handleCompleted = (id) => dispatch(ToggleCompeted(id))
  return (
    <ul>
        {todos.map(todo => {
            return <Todo todo={todo} deletes={handleDelete}  completedTodo={handleCompleted}/>
        })}
    </ul>
  )
}

export default Todos;