import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState<number>(5)

  const changeNumber = () => {
    setNumber(2)
  }
  return (
    <>
      <div>
        {number}
        <button onClick={changeNumber}>Cambia el número</button>
      </div>
    </>
  )
}

export default App
