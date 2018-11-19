import React, { Component } from 'react'
// import PageHeader from './PageHeader.jsx'
// import Account from './Account'
import axios from 'axios'

class Accounts extends Component {
	state = {
		data: {
			data: {}
		}
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				// console.log(response)
				this.setState({ data: response.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		let account = this.state.data.data
		return (
			<div>
				{/* This page will be a table of all accounts. Possibly in alphabetical order?*/}
				<section className="hero is-bold is-dark has-text-weight-semibold	">
					<nav
						className="navbar"
						role="navigation"
						aria-label="main navigation"
					>
						<section className="hero is-bold is-dark has-text-weight-semibold	">
							<nav
								className="navbar"
								role="navigation"
								aria-label="main navigation"
							>
								<div className="navbar-brand ">
									<a className="active" aria-current="page" href="/">
										<i className="fas fa-balance-scale fa-3x" />
									</a>
									<div className="hero-body title">
										<h3>Accounts</h3>
									</div>
								</div>
							</nav>
						</section>
						{/* implement the page header once you render it dynamically */}
						{/* <PageHeader /> */}
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
					<a href="/Accounts">
						<p className="is-centered box is-fullwidth">
							{account.map(event => {
								console.log(event)
								return { event }
							})}
						</p>
						<p />
					</a>
				</div>
			</div>
		)
	}
}

export default Accounts
