import React, { Component } from 'react'
import Account from './Account'
import DefaultHeader from './DefaultHeader'
import axios from 'axios'

class Accounts extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data })
				// console.log(response.data)
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="">
				<DefaultHeader title="Accounts" />
				{/* Each account will be listed here using a .Map function to generate a <tr> for each */}
				<div className="">
					<a href="/accountPage" className="">
						{this.state.events.map((event, index) => (
							<Account
								className=""
								key={index}
								name={event.name}
								dueDate={event.due_date}
								frequency={event.recurring}
								amount={event.amount_due}
								flow={event.flow}
								paid={event.was_paid}
								notes={event.notes}
							/>
						))}
					</a>
				</div>
			</div>
		)
	}
}

export default Accounts
