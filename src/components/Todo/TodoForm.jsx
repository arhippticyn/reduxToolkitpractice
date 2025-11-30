import React from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/TodoSlice';
const TodoForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const text = form.elements.text.value
        dispatch(AddTodo(text))
        form.reset()
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='text' />
        <button type='submit'>add</button>
    </form>
  )
}

export default TodoForm;