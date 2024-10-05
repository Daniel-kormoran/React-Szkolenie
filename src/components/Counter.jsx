import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    console.log("counter re-render")

  return (
    <>    
      <h1>Vite + React = {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default Counter