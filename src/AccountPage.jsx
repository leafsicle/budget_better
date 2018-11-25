import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import { AlertError } from 'material-ui/svg-icons'

class AccountPage extends Component {
	render() {
		let testClicks = () => {
			if (window.confirm('Are you sure you wish to delete this item?'))
				this.onCancel(this)
		}
		return (
			<div>
				<DefaultHeader title={this.props.name} />
				<div className="button is-danger is-pulled-right" onClick={testClicks}>
					X
				</div>
				<p>I will be a page that displays information about a single account</p>
			</div>
		)
	}
}

export default AccountPage
