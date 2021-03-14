import React, { Component } from 'react';

class AddExpenseForm extends Component {
	state = {};
	render() {
		return (
			<form>
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
	}
}

export default AddExpenseForm;
