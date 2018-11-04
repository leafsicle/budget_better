import React, { Component } from 'react'
import PageHeader from './PageHeader.jsx'

class Accounts extends Component {
	render() {
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
					{/* Edit Account button */}
					<button className="editor">
						<i className="fas fa-edit fa-3x is-dark" />
						<p className="is-hidden-mobile">edit</p>
					</button>

					{/* Add Account button */}
					<button className="add">
						<i className="fas fa-plus-square fa-3x" />
						<p className="is-hidden-mobile">add account </p>
					</button>
				</div>
				{/* Each account will be listed here using a .Map function to generate a <tr> for each */}
				<div className="">
					<a href="/">
						<p className="is-centered box is-fullwidth">Power</p>
					</a>
					<a href="/">
						<p className="is-centered box is-fullwidth">water</p>
					</a>
					<a href="/">
						<p className="is-centered box is-fullwidth">rent</p>
					</a>
					<a href="/">
						<p className="is-centered box is-fullwidth">internet</p>
					</a>
					<a href="/">
						<p className="is-centered box is-fullwidth">mobile</p>
					</a>
				</div>
			</div>
		)
	}
}

export default Accounts
