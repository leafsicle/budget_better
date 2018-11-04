import React, { Component } from 'react'

class PageHeader extends Component {
	render() {
		return (
			<section className="hero is-bold is-dark has-text-weight-semibold	">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand ">
						<a className="active" aria-current="page" href="/">
							<i className="fas fa-balance-scale fa-3x" />
						</a>
						<div className="hero-body title">
							<h3>Name of page here</h3>
						</div>
					</div>
				</nav>
			</section>
		)
	}
}

export default PageHeader
