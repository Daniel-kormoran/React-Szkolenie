import { useState, useEffect } from 'react'
import './App.css'

import Dropdown from './components/Dropdown'

function OldApp() {

  const [counter , setCounter] = useState(10);
  const [show, setShow] = useState(true)

  console.log("re render");

  useEffect(() => {
    console.log("Wynik to:" + counter);
  },[counter])


  // const [count, setCount] = useState(0)

  return (
    <>    
      <div className="card">
        <h2>Wynik to: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Zwiększ
        </button>
        <button onClick={() =>setShow(!show)}>
            {show ? "Pokaż" : "Ukryj"}
            </button> 
            {show && <Dropdown/>}
      </div>
    </>
  )
}

export default OldApp
