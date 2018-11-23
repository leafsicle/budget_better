import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class AccountPage extends Component {
	render() {
		console.log(this.props)

		return (
			<div>
				<DefaultHeader title="test" />
				words
				<p>I will be a page that displays information about a single account</p>
				{/* I will be a page that displays information about a single account */}
			</div>
		)
	}
}

export default AccountPage
