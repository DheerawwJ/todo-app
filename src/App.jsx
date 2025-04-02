import { useState } from 'react'
import AddTodo from '../components/addTodo'
import Todos from '../components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
