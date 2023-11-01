import React,{useEffect,useState} from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/todoInput'
import FetchTodo from './components/fetchData.jsx'

function App() {
  return (
    <div>
      <Todos/>
      <FetchTodo/>
    </div>
  )
}

export default App
