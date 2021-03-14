import React, { Component } from 'react';
import { TiDelete } from 'react-icons/ti';

class ExpenseItem extends Component {
	render() {
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				{this.props.name}
				<div>
					<span className="badge badge-primary badge-pill mr-3">
						Rs.{this.props.cost}
					</span>
					<TiDelete size="1.5em"></TiDelete>
				</div>
			</li>
		);
	}
}

export default ExpenseItem;
