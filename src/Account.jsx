import React, { Component } from 'react'
import axios from 'axios'

class Account extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		console.log(this.props)

		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data })
			})
			.catch(error => console.log(error))
	}
	render() {
		return (
			<a href={`accountPage/${this.props.id}`} className="box is-centered">
				<div className="">
					{/* Stats and presentation about each account will be here! */}
					<h2>
						<strong>{this.props.name}</strong>
					</h2>
				</div>
			</a>
		)
	}
}

export default Account
