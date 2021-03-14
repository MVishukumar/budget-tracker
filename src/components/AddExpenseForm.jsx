import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({ type: 'ADD_EXPENSE', payload: expense });
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="row">
				<div className="col-sm">
					<label htmlFor="name" for="name">
						Name
					</label>
					<input
						id="name"
						type="text"
						required="required"
						className="form-control"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className="col-sm">
					<label htmlFor="cost" for="cost">
						Cost
					</label>
					<input
						id="cost"
						type="text"
						required="required"
						className="form-control"
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<button className="btn btn-primary mt-3">Save</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
