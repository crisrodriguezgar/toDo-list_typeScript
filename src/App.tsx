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
        <header>
          <h1 className='title'>Lista de tareas</h1>
        </header>
        {number}
        <button onClick={changeNumber}>Cambia el número</button>
      </div>
    </>
  )
}

export default App
