// src/components/FilterOptions.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/taskActions';

const FilterOptions: React.FC = () => {
	const dispatch = useDispatch();

	const handleFilter = (filter: string) => {
		dispatch(setFilter(filter));
	};

	return (
		<div>
			<button onClick={() => handleFilter('SHOW_ALL')}>Mostrar Todo</button>
			<button onClick={() => handleFilter('SHOW_COMPLETED')}>Mostrar Completadas</button>
			{/* <button onClick={() => handleFilter('SHOW_PENDING')}>Mostrar Pendientes</button> */}
		</div>
	);
};

export default FilterOptions;
