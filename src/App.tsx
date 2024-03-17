import { useState } from "react";
import { ToDos } from "./components/ToDos";


const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false 
  },
  {
    id: "2",
    title: "todo 2",
    completed: false 
  },
  {
    id: "3",
    title: "todo 3",
    completed: false 
  },
]

const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (

    <div className="todoapp">
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <ToDos
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
