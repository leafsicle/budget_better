import React, { Component } from 'react'
// import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<header className="container is-success is-bold level is-mobile headerChanges">
				{/* this is for the name of the page that the user is currently on */}
				<div className="headerL has-text-left level-item">
					<a href="/">{this.props.title} </a>
				</div>

				<div className="level-item-2 headerR ">
					<a href="/NewAccount" className="button is-hidden-touch">
						<p>add account</p>
					</a>
				</div>

				<div className="level-item-2 is-light headerR ">
					<a href="/NewAccount" className="button is-hidden-desktop">
						+
					</a>
				</div>
			</header>
		)
	}
}

export default DefaultHeader
