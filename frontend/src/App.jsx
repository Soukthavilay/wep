import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Hello/>
      <button className="btn btn-primary">Click me</button>
    </div>
  )
}

export default App
