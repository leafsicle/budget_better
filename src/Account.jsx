import React, { Component } from 'react'
import axios from 'axios'
import DefaultHeader from './DefaultHeader'

class Account extends Component {
	// state = {
	// 	events: []
	// }

	// componentWillMount() {
	// 	axios
	// 		.get('http://localhost:3001/events.json')
	// 		.then(response => {
	// 			this.setState({ events: response.data })
	// 		})
	// 		.catch(error => console.log(error))
	// }

	render() {
		let deleteaccount = () => {
			alert('Are you sure?')
			axios.delete('http://localhost:3001/events/:id', {
				data: {
					name: 'testing bacon bits',
					due_date: '',
					recurring: {},
					amount_due: 3,
					flow: 'expense',
					was_paid: false,
					notes: ''
				}
			})
		}
		return (
			<div>
				<DefaultHeader />
				{/* Stats and presentation about each account will be here! */}
				this is an account?!
				<button onClick={deleteaccount}> X</button>
			</div>
		)
	}
}

export default Account
