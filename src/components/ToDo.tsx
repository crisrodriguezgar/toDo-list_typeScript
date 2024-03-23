import React from "react";
import { Todo } from "../types";

interface Props extends Todo {
    onToggleCompletedTodo: (id: string, completed: boolean) => void;
    onRemoveTodo: (id: string) => void;
}

export const ToDo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={(event) => {
                    onToggleCompletedTodo(id, event.target.checked);
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo(id);
                }}
            ></button>
        </div>
    );   
};
