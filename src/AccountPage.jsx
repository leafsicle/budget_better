import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class AccountPage extends Component {
	render() {
		console.log(this.props.match.params)
		// 	let deleteAccount = () => {
		// 		alert('Are you sure?')
		// 		axios.delete('http://localhost:3001/events/:id', {
		// 			data: {
		// 				name: '',
		// 				due_date: '',
		// 				recurring: {},
		// 				amount_due: 3,
		// 				flow: 'expense',
		// 				was_paid: false,
		// 				notes: ''
		// 			}
		// 		})
		return (
			<div>
				<DefaultHeader title={this.props.name} />

				<p>I will be a page that displays information about a single account</p>
				{/* I will be a page that displays information about a single account */}
			</div>
		)
	}
}

export default AccountPage
