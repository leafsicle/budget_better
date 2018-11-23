import React, { Component } from 'react'
// import Moment from 'react-moment'

class DefaultHeader extends Component {
	render() {
		return (
			<header className="container flex is-bold level is-mobile">
				{/* this is for the name of the page that the user is currently on */}
				<div className="headerL level-item">
					<a href="/">{this.props.title} </a>
				</div>

				<div className="level-item headerR ">
					{/* Add Account button */}
					<a href="/NewAccount">
						<i className="fas fa-plus-square fa-2x" />
						<p className="is-hidden-mobile">add account</p>
					</a>
				</div>
			</header>
		)
	}
}

export default DefaultHeader
