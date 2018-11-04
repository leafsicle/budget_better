import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class Accounts extends Component {
	render() {
		return (
			<div>
				{/* This page will be a table (?) of all accounts. Possibly in alphabetical order?w
        What I want to show */}
				<section className="hero is-bold is-dark has-text-weight-semibold	">
					<nav
						className="navbar"
						role="navigation"
						aria-label="main navigation"
					>
						<div className="navbar-brand ">
							<a className="active" aria-current="page" href="">
								<i className="fas fa-balance-scale fa-3x" />
							</a>
							<div className="hero-body title">
								<h3>Accounts</h3>
							</div>
						</div>
					</nav>
				</section>

				<div className="nav">
					<button className="editor">
						<i class="fas fa-edit fa-3x is-dark is-hidden-desktop" />
						<p className="is-hidden-mobile">edit</p>
					</button>
					<button className="add">
						<i class="fas fa-plus-square fa-3x is-hidden-desktop" />
						<p className="is-hidden-mobile">add account </p>
					</button>
				</div>
				<table className="table is-fullwidth">
					<thead>
						<tr>
							<th>account name</th>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
						<tr>
							<a href="suncoast.io">account</a>
						</tr>
					</thead>
				</table>
			</div>
		)
	}
}

export default Accounts
