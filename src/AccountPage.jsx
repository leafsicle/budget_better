import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Account from './Account'
import axios from 'axios'

class AccountPage extends Component {
	state = {
		loading: true
	}
	componentWillMount() {
		const id = this.props.match.params.id

		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				console.log(response.data)
				this.setState({
					account: response.data[id],
					loading: false
				})
			})
			.catch(error => console.log(error))
	}
	render() {
		console.log(this)
		let testClicks = () => {
			if (window.confirm('Are you sure you wish to delete this item?'))
				this.onCancel(this)
		}
		if (this.state.loading) {
			return <DefaultHeader title="Loading..." />
		} else {
			return (
				<div className="container">
					<DefaultHeader title={`${this.state.account.name}`} />
					{/* <Account /> */}
					<div className="card is-centered">
						<p>
							<strong>{this.state.account.amount_due}</strong>
						</p>
						<p>
							<strong>{this.state.account.due_date}</strong>
						</p>
						<p>
							<strong>{this.state.account.was_paid}</strong>
						</p>
					</div>

					<div className="has-text-centered ">
						{/* delete button to remove from DB */}
						<a href="/accounts">
							<div
								className="button is-danger is-pulled-right"
								onClick={testClicks}
							>
								x
							</div>
						</a>
						{/* Returns back to the accounts page */}
						<a href="/accounts">
							<div className="button is-info is-pulled-right">back</div>
						</a>
					</div>
				</div>
			)
		}
	}
}

export default AccountPage
