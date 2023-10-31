

import { Task, TaskActionTypes } from '../types/types';

export const addTask = (task: Task): TaskActionTypes => ({
	type: 'ADD_TASK',
	payload: task,
});

export const completeTask = (taskId: string): TaskActionTypes => ({
	type: 'COMPLETE_TASK',
	payload: taskId,
});

export const deleteTask = (taskId: string): TaskActionTypes => ({
	type: 'DELETE_TASK',
	payload: taskId,
});

export const setFilter = (filter: string): TaskActionTypes => ({
	type: 'SET_FILTER',
	payload: filter,
});