import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'
import { motion } from 'framer-motion'

interface Props {
	onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header className='header'>
			<h1 className="title">
                Lista de tareas
			</h1>
			<CreateTodo saveTodo={onAddTodo} />
		</header>
	)
}