import React from "react";
import { type ListOfTodos } from "../types";
import { ToDo } from "./ToDo";

interface Props {
    todos: ListOfTodos;
    onRemoveTodo: (id: string) => void;
}

export const ToDos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <ToDo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

