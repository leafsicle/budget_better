import React, { Component } from 'react'
import axios from 'axios'

class Account extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		// name={event.name}
		// dueDate={event.due_date}
		// frequency={event.recurring}
		// amount={event.amount_due}
		// flow={event.flow}
		// paid={event.was_paid}

		return (
			<div className={this.props.className}>
				{/* Stats and presentation about each account will be here! */}

				<h2>
					{/* <strong>Account name:</strong> */}
					{this.props.name}
				</h2>
				{/* <p>
					<strong>Amount due: </strong>${this.props.amount}
				</p>
				<p>
					<strong>Due date: </strong>
					{this.props.dueDate}
				</p>
				<p>
					<strong>Type: </strong>
					{this.props.flow}
				</p>
				<p>
					<strong>Notes: </strong>
					{this.props.notes}
				</p> */}
			</div>
		)
	}
}

export default Account
