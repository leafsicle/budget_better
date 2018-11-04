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

				<table className="table is-fullwidth">
					<tbody className="">
						<tr className="">
							<a href="/">
								<td>Account Name</td>
							</a>
						</tr>
						<tr className="">
							<a href="/">
								<td>Account Name</td>
							</a>
						</tr>
						<tr className="">
							<a href="/">
								<td>Account Name</td>
							</a>
						</tr>
						<tr className="">
							<a href="/">
								<td>Account Name</td>
							</a>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Accounts
