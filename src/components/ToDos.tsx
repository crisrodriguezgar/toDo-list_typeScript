import React from "react";
import { type ListOfTodos } from "../types";
import { ToDo } from "./ToDo";

interface Props {
    todos: ListOfTodos;
    onToggleCompletedTodo: (id: string, completed: boolean) => void
    onRemoveTodo: (id: string) => void;
}

export const ToDos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <ToDo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompletedTodo={onToggleCompletedTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

