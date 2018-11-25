import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Account from './Account'

class AccountPage extends Component {
	state = {
		id: this.props.id,
		key: this.props.key,
		name: this.props.name,
		dueDate: this.props.due_date,
		frequency: this.props.recurring,
		amount: this.props.amount_due,
		flow: this.props.flow,
		paid: this.props.was_paid,
		notes: this.props.notes,
		events: []
	}

	render() {
		console.log(this.state)
		let testClicks = () => {
			if (window.confirm('Are you sure you wish to delete this item?'))
				this.onCancel(this)
		}
		return (
			<div>
				<DefaultHeader title={this.props.title} />
				<Account />
				<section className="controls">
					<div
						className="button is-danger is-pulled-right"
						onClick={testClicks}
					>
						X
					</div>
					<br />
					<br />
					<br />
					<div className="button is-pulled-right">
						<a href="/accounts">Back</a>
					</div>
				</section>
				<p>I will be a page that displays information about a single account</p>
			</div>
		)
	}
}

export default AccountPage
