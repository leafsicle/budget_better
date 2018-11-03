import React, { Component } from 'react'
import Moment from 'react-moment'

class Default extends Component {
	render() {
		return (
			<section className="hero is-bold is-dark has-text-weight-semibold	">
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="active" aria-current="page" href="#/">
							<i class="fas fa-balance-scale fa-3x" />
						</a>
						<div className="hero-body title">Better Budget</div>
					</div>
				</nav>

				<h2 className="subtitle">
					<Moment element="span" format="MMMM" />
				</h2>
			</section>
		)
	}
}

export default Default
