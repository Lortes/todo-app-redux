import './App.css'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterOptions from './components/FilterOptions';



function App() {

	return (
		<>
			<h2>Lista de tareas</h2>
			<TaskInput />
			<TaskList />
			<FilterOptions />
		</>
	)
}

export default App
