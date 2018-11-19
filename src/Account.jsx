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
		return (
			<div>
				<a href="/Account/:id">
					{this.state.events.map((event, index) => (
						<p key={index} className="is-centered box is-fullwidth">
							{event.name}
						</p>
					))}
				</a>
			</div>
		)
	}
}

export default Account
