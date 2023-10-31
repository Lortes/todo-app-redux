// src/store/index.ts

import { createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';

const store = createStore(taskReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
