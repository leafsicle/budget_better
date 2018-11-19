import React, { Component } from 'react'
import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<section className="hero is-bold is-light has-text-weight-semibold	">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-start">
						<div className="navbar-item title">Better Budget</div>
						<span className="subtitle">Today is </span>
						<Moment element="span" format="DD" />
						<span> </span>
						<Moment element="span" format="MMMM" />
					</div>
				</nav>
			</section>
		)
	}
}

export default DefaultHeader
