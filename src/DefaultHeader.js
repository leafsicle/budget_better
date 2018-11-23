import React, { Component } from 'react'
// import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<section className="container is-bold level is-light">
				{/* this is for the name of the page that the user is currently on */}
				<div className="level-item title">
					<a href="/">{this.props.title} </a>
				</div>

				{/* This holds the date in the middle container of the header */}
				<div className="level-item">
					{/* <Moment element="span" format="MMMM" />
						<Moment element="span" format="DD" /> */}
				</div>

				<div className="navbar-end level-item has-text-right-mobile">
					{/* Add Account button */}
					<a href="/NewAccount">
						<i className="fas fa-plus-square fa-2x" />
						<p className="is-hidden-mobile">add account</p>
					</a>
				</div>
			</section>
		)
	}
}

export default DefaultHeader
