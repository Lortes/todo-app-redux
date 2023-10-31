export interface Task {
	id: string
	title: string
	completed: boolean
}


export interface TaskState {
	tasks: Task[]
	filter: string
}

export type TaskActionTypes =
	| { type: 'ADD_TASK'; payload: Task }
	| { type: 'COMPLETE_TASK'; payload: string }
	| { type: 'DELETE_TASK'; payload: string }
	| { type: 'SET_FILTER'; payload: string };