import React, { Component } from 'react'
import Moment from 'react-moment'

class Default extends Component {
	render() {
		return (
			<section className="hero is-bold is-dark has-text-weight-semibold	">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand ">
						<a className="active" aria-current="page" href="">
							<i className="fas fa-balance-scale fa-3x" />
						</a>
						<div className="hero-body title">
							<h3>Better Budget</h3>
							<span className="subtitle">
								<Moment element="span" format="MMMM" />
							</span>
						</div>
					</div>
				</nav>

				{/* <Moment element="span" format="MMMM" /> */}
			</section>
		)
	}
}

export default Default
