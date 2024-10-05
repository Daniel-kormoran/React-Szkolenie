import { useEffect, useState } from 'react'

const Dropdown = () => {

    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(true)
    const handleVisibility = () =>  setVisible(!visible)

// Dawne : componentDidUpadte
useEffect(()=> {
  return () =>console.log("odmontowny komponent Dropdown")
},[])

  return (
    <div>
        <button onClick={handleVisibility}>Pokaż treść</button>
        {visible && <h2>Tekst widoczny</h2>}

        <div>
        <button onClick={() =>setShow(!show)}>
            {show ? "Pokaż" : "Ukryj"}
            </button> 
        </div>
    </div>
    
  )
}

export default Dropdown