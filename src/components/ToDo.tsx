import { type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleCompletedTodo: (id: string, completed: boolean) => void
    onRemoveTodo: (id: string) => void
}

export const ToDo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    return (
        <div className="view">
            <input
    className="toggle"
    type="checkbox"
    checked={completed}
    onChange={(event) => { 
        onToggleCompletedTodo(id, event.target.checked); // Pasar id y completed por separado
    }}
/>
            <label htmlFor="">{title}</label>
            <button className="destroy"
                onClick={() => {
                    onRemoveTodo(id)
                }}></button>
        </div>
    )   
}