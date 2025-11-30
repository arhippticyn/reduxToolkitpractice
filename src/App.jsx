import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Theme from './components/Theme'
import TodoForm from './components/Todo/TodoForm'
import Todos from './components/Todo/Todos'

function App() {
  return (
    <>
    {/* <Theme />
    <Counter /> */}
    <TodoForm />
    <Todos />
    </>
  )
}

export default App
