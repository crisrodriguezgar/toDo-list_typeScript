import { useState } from "react";
import { ToDos } from "./components/ToDos";
import { TODO_FILTERS } from "./consts";
import { FilterValue } from "./types";
import { Footer } from "./components/Footer";


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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo; 
  });
  
  

  return (

    <div className="todoapp">
      <header>
        <h1 className="title">Lista de tareas</h1>
      </header>
      <ToDos
        onToggleCompletedTodo={handleCompleted}
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={() => { }}
      />

    </div>
  )
}

export default App
