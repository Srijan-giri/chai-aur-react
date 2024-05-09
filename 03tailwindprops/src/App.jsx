import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  //classNameName --> classNameNameName
  //for ---> hrmlFor

  let myObj = {
    username:"hitesh",
    age:21
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>    
      <Card username="chaiaurcode" someObject={newArr} btnText="Click Me"/>
      <Card username="hitesh" btnText="Visit Me" />
    </>
  )
}

export default App
