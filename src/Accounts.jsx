import React, { Component } from 'react'
// import Account from './Account'
import axios from 'axios'

class Accounts extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data })
				// console.log(response.data)
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div>
				{/* This page will be a table of all accounts.*/}
				<section className="hero is-bold is-dark has-text-weight-semibold	">
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
						{/* implement the page header once you render it dynamically */}
					</nav>
				</section>

				{/* Add and edit buttons are here */}
				<div className="nav">
					{/* Add Account button */}
					<button className="add">
						<a href="/NewAccount">
							<i className="fas fa-plus-square fa-3x" />
							<p className="is-hidden-mobile">add account </p>
						</a>
					</button>
				</div>

				{/* Each account will be listed here using a .Map function to generate a <tr> for each */}
				<div className="">
					{/* <Account /> */}
					<a href="/Account">
						{this.state.events.map((event, index) => (
							<p key={index} className="is-centered box is-fullwidth-mobile">
								{event.name}${event.amount_due}
								this is a(n) {event.flow}
								{event.id}
								{event.notes}
							</p>
						))}
					</a>
				</div>
			</div>
		)
	}
}

export default Accounts
