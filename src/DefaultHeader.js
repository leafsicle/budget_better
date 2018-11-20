import React, { Component } from 'react'
import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<section className="hero is-bold is-light">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					{/* this is for the name of the page that the user is currently on */}
					<div className="navbar-start navbar-item title">
						<a href="/">{this.props.title} </a>
					</div>

					{/* This holds the date in the middle container of the header */}
					<div className="navbar-item">
						<Moment element="span" format="MMMM" />
						<Moment element="span" format="DD" />
					</div>

					<div className="navbar-end has-text-right-mobile">
						{/* Add Account button */}
						<a href="/NewAccount">
							<i className="fas fa-plus-square fa-3x">
								<button className="add" />
							</i>
							<p className="is-hidden-mobile">add account</p>
						</a>
					</div>
				</nav>
			</section>
		)
	}
}

export default DefaultHeader
