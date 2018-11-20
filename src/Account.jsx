import React, { Component } from 'react'
import axios from 'axios'

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
				{/* Stats and presentation about each account will be here! reference
        Octocats */}
				this is an account?!
				<button onClick={deleteaccount}> X</button>
			</div>
		)
	}
}

export default Account
