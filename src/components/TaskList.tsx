// src/components/TaskList.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { completeTask, deleteTask } from '../actions/taskActions';

const TaskList: React.FC = () => {

	const tasks = useSelector((state: RootState) => state.tasks);
	const filter = useSelector((state: RootState) => state.filter);
	const dispatch = useDispatch();

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'SHOW_COMPLETED') {
			return task.completed;
		} else if (filter === 'SHOW_PENDING') {
			return !task.completed;
		} else {
			return true; // Mostrar todas las tareas si no hay filtro seleccionado
		}
	});

	const handleComplete = (taskId: string) => {
		dispatch(completeTask(taskId));
	};

	const handleDelete = (taskId: string) => {
		dispatch(deleteTask(taskId));
	};

	return (
		<ul>
			{filteredTasks.map((task) => (
				<li key={task.id}>
					<span className={task.completed ? 'completed' : ''}>{task.title}</span>
					<button onClick={() => handleComplete(task.id)}>Completar</button>
					<button onClick={() => handleDelete(task.id)}>Eliminar</button>
				</li>
			))}
		</ul>
	);
};

export default TaskList;
