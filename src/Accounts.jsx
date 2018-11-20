import React, { Component } from 'react'
import Account from './Account'
import axios from 'axios'
import DefaultHeader from './DefaultHeader'

class Accounts extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data }, () => {
					this.updateTotals()
				})
				// console.log(response.data)
			})
			.catch(error => console.log(error))
	}

	updateTotals() {
		let total = 0
		this.state.events.forEach(event => {
			if (event.flow === 'expense') {
				total -= event.amount_due
			} else {
				total += event.amount_due
			}
		})
		this.setState({
			totalBudget: total
		})
	}

	render() {
		return (
			<div>
				<DefaultHeader title="Accounts" />

				{/* This page will be a table of all accounts.*/}
				{/* <section className="hero is-bold is-dark has-text-weight-semibold	">
					<nav
						className="navbar"
						role="navigation"
						aria-label="main navigation"
					>
						<section className="hero has-text-weight-semibold	">
							<nav
								className="navbar"
								role="navigation"
								aria-label="main navigation"
							>
								<div className="navbar-brand ">
									<div className="hero-body title">
										<h3>Accounts</h3>
									</div>
								</div>
							</nav>
						</section>
						implement the page header once you render it dynamically
					</nav>
				</section> */}

				{/* Add and edit buttons are here */}

				{/* Each account will be listed here using a .Map function to generate a <tr> for each */}
				<div className="">
					<Account name="test" />
					<Account name="not a test" />
					<Account name="power" />
					{/* <a href="/Account/{event.id}">
						{this.state.events.map((event, index) => (
							<p key={index} className="is-centered box is-fullwidth-mobile">
								{event.name}${event.amount_due}
								this is a(n) {event.flow}
								{event.id}
								{event.notes}
							</p>
						))}
					</a> */}
				</div>
			</div>
		)
	}
}

export default Accounts
