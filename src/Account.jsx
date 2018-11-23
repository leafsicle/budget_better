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
		// 	let deleteAccount = () => {
		// 		alert('Are you sure?')
		// 		axios.delete('http://localhost:3001/events/:id', {
		// 			data: {
		// 				name: '',
		// 				due_date: '',
		// 				recurring: {},
		// 				amount_due: 3,
		// 				flow: 'expense',
		// 				was_paid: false,
		// 				notes: ''
		// 			}
		// 		})

		// name={event.name}
		// dueDate={event.due_date}
		// frequency={event.recurring}
		// amount={event.amount_due}
		// flow={event.flow}
		// paid={event.was_paid}

		return (
			<div className="">
				{/* Stats and presentation about each account will be here! */}
				<h2>Account name: {this.props.name}</h2>
				<p>Due: {this.props.dueDate}</p>
				<p>Type: {this.props.flow}</p>
				<p>Notes: {this.props.notes}</p>
				<p>this has been </p>
			</div>
		)
	}
}

export default Account
