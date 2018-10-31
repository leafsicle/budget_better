import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container">
				<section className="hero is-bold is-dark has-text-weight-semibold	">
					<div className="hero-body">
						<h1 className="title has-text-success">$42</h1>
						<h2 className="subtitle">October</h2>
					</div>
				</section>

				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="google.com">
							<img
								src="./images/logo.png"
								width="112"
								height="28"
								alt="This is the logo"
							/>
						</a>

						<a
							role="button"
							className="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item">Home</a>

							<a className="navbar-item">Documentation</a>

							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">More</a>

								<div className="navbar-dropdown">
									<a className="navbar-item">About</a>
									<a className="navbar-item">Jobs</a>
									<a className="navbar-item">Contact</a>
									<hr className="navbar-divider" />
									<a className="navbar-item">Report an issue</a>
								</div>
							</div>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<a className="button is-primary">
										<strong>Sign up</strong>
									</a>
									<a className="button is-light">Log in</a>
								</div>
							</div>
						</div>
					</div>
				</nav>

				<table className="container is-fullwidth">
					<thead>
						<tr>
							<th>Account</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Rent</td>
							<td>$1360</td>
						</tr>
						<tr>
							<td>Electricity</td>
							<td>$80</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Sum</td>
							<td>$180</td>
						</tr>
					</tfoot>
				</table>
			</div>
		)
	}
}

export default App
