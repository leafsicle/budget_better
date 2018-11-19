import React, { Component } from 'react'
import axios from 'axios'

class Account extends Component {
	state = {
		data: {
			data: {}
		}
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ data: response.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		let account = this.state.data.data

		return (
			<div>
				<a href="/Accounts">
					<p className="is-centered box is-fullwidth">
						{account.map(event => {
							console.log(event)
							return { event }
						})}
					</p>
				</a>
			</div>
		)
	}
}

export default Account
