import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import { useDispatch, useSelector } from 'react-redux';
import { Decrements, IncrementByAmount, Increments } from '../redux/CounterSlice';

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => dispatch(Increments())
    const handleDecrement = () => dispatch(Decrements())
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const input = parseInt(form.elements.number.value)
        dispatch(IncrementByAmount(input))
        form.reset();
    }
  return (
    <div>
        <p>Counter: {counter}</p>
        <Increment onClick={handleIncrement} />
        <Decrement onClick={handleDecrement} />
        <form action="" onSubmit={handleSubmit}>
        <input type="number" name="number" id="" />
        <button>Increment</button>
        </form>
    </div>
  )
}

export default Counter;