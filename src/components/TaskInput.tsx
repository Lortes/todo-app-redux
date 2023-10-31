
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid


const TaskInput: React.FC = () => {

	const [task, setTask] = useState<string>('');

	const dispatch = useDispatch();

	const handleAddTask = () => {
		if (task !== '') {
			dispatch(addTask({ id: uuidv4(), title: task, completed: false }));
			setTask('');
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Nueva tarea"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button onClick={handleAddTask}>Agregar</button>
		</div>
	);
};

export default TaskInput;
