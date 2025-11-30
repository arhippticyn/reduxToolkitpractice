import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Theme from './components/Theme'
import TodoForm from './components/Todo/TodoForm'
import Todos from './components/Todo/Todos'
import Modal from './components/Modal/Modal'
import Language from './components/Language/Language'
import Notification from './components/Notification/Notification'

function App() {
  return (
    <>
    {/* <Theme />
    <Counter /> */}
    {/* <TodoForm />
    <Todos /> */}
    {/* <Modal /> */}
    {/* <Language /> */}
    <Notification />
    </>
  )
}

export default App
