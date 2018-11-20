import React, { Component } from 'react'
import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<section className="hero is-bold is-light has-text-weight-semibold is	">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-start">
						<div className="navbar-item title">
							<a href="/">{this.props.title} </a>
						</div>
						<span className="subtitle">Today is </span>
						<Moment element="span" format="DD" />
						<Moment element="span" format="MMMM" />
					</div>
					<div className="nav">
						{/* Add Account button */}
						<button className="add">
							<a href="/NewAccount">
								<i className="fas fa-plus-square fa-3x" />
								<p className="is-hidden-mobile">add account </p>
							</a>
						</button>
					</div>
				</nav>
			</section>
		)
	}
}

export default DefaultHeader
