import { type Todo as TodoType } from "../types"

type Props = TodoType

export const ToDo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div>
            <input
                className="toggle"
                type="checbox"
                checked={completed}
                onChange={() => { }}
            />
            <label htmlFor="">{title}</label>
            <button className="destroy"
                onClick={() => {
                    onRemoveTodo(id)
                }}></button>
        </div>
    )
}