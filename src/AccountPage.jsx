import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Account from './Account'

class AccountPage extends Component {
	tate = {
		events: []
	}
	render() {
		let testClicks = () => {
			if (window.confirm('Are you sure you wish to delete this item?'))
				this.onCancel(this)
		}
		return (
			<div>
				<DefaultHeader title={this.props.title} />
				<Account
					key={this.props.index}
					id={this.props.index}
					name={this.props.name}
					dueDate={this.props.due_date}
					frequency={this.props.recurring}
					amount={this.props.amount_due}
					flow={this.props.flow}
					paid={this.props.was_paid}
					notes={this.props.notes}
				/>
				<div className="button is-danger is-pulled-right" onClick={testClicks}>
					X
				</div>
				<p>I will be a page that displays information about a single account</p>
				<button className="is-pulled-right">
					<a href="/accounts">Back</a>
				</button>
			</div>
		)
	}
}

export default AccountPage
