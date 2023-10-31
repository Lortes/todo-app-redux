
import { TaskState, TaskActionTypes } from '../types/types';

const initialState: TaskState = {
	tasks: [],
	filter: 'SHOW_ALL', // Estado inicial del filtro
};

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case 'COMPLETE_TASK':
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload
						? { ...task, completed: !task.completed }
						: task
				),
			};
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		case 'SET_FILTER':
			return {
				...state,
				filter: action.payload,
			};
		default:
			return state;
	}
};

export default taskReducer;