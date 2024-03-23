import React, { useState } from "react";
import { ToDos } from "./components/ToDos";
import { TODO_FILTERS } from "./consts";
import { FilterValue } from "./types";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(newTodos);
  };

  const handleFilterChange = (filter) => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleAddTodo = (title) => {
    const newTodo = {
      title,
      id: Math.random().toString(36).substring(7),
      completed: false
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
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
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  );
};

export default App;
