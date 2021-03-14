import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

class ExpenseList extends Component {
	state = {};

	render() {
		const expenses = [
			{ id: 12, name: 'shopping', cost: 40 },
			{ id: 13, name: 'holiday', cost: 400 },
			{ id: 14, name: 'car service', cost: 50 },
		];

		return (
			<ul className="list-group">
				{expenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		);
	}
}

export default ExpenseList;
