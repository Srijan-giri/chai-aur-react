import { useState } from 'react';
import './App.css'
function App() {

  let [counter, setCounter] = useState(15);

  //? let counter = 5;

  const addValue = () => {
    // counter++;

    // if (counter > 20) {
    //   setCounter(0);

    // }
    // else {
      /*
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      */
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    // }
    // console.log("Add Clicked", counter)

  }

  const decreaseValue = () => {
    if (counter < 0) {
      setCounter(0);
    }
    else {
      setCounter(counter - 1);
    }
    // console.log("Decrease Clicked", counter);
  }



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={decreaseValue}>Remove Value</button>
      <br />
      <p>footer :</p>
    </>
  )
}

export default App
