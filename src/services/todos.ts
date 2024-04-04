import { type TodoList } from '../types'

const API_URL = 'https://api.jsonbin.io/v3/b/66097a41ad19ca34f8529d37'

interface Todo {
  id: string
  title: string
  completed: boolean
  order: number
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL)
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { record: todos } = await res.json() as { record: Todo[] }
  return todos
}

export const updateTodos = async ({ todos }: { todos: TodoList }): Promise<boolean> => {
  console.log(import.meta.env.VITE_API_BIN_KEY)
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': "$2a$10$yZGDmYnAlRJiIoud9t/1wO4Q7oOMdM4CHsFvU4W9Q2hza2hU4xtUe"
    },
    body: JSON.stringify(todos)
  })

  return res.ok
}
