import React, { Component } from 'react'
import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<section className="hero is-bold is-dark has-text-weight-semibold	">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand ">
						<a className="active" aria-current="page" href="/">
							<i className="fas fa-balance-scale fa-3x" />
						</a>
					</div>
					<div className="navbar-start">
						<div className="navbar-item title">Better Budget</div>
						<span className="subtitle">
							Today is
							<Moment element="span" format="DDMMMMYY" />
							<p> </p>
						</span>
					</div>
				</nav>
			</section>
		)
	}
}

export default DefaultHeader
