import { useState } from "react";
import { ToDos } from "./components/ToDos";


const mockTodos = [
  {
    id: "1",
    title: "Decirle a Dumbledore que tengo sueños raros",
    completed: true
  },
  {
    id: "2",
    title: "Hacer Patronus",
    completed: false
  },
  {
    id: "3",
    title: "Aprender Alohomora",
    completed: false
  },
]

const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id: string, completed: boolean): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (

    <div className="todoapp">
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <ToDos
        onToggleCompletedTodo={handleCompleted}
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
