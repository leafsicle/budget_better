import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class Stack extends Component {
	render() {
		return (
			<main>
				<DefaultHeader />
				<div class="columns container is-gapless is-1-mobile">
					<div class="column ">
						<div class="box">
							<h2 className="title has-text-success">$42</h2>
							<h2 className="subtitle">Surplus/Deficit this month</h2>
						</div>
					</div>
					<div class="column ">
						<div class="box">
							<h1 className="title has-text-danger">
								### Bills remaining this month
							</h1>
							<h2 className="subtitle">Upcoming bills</h2>
						</div>
					</div>
					<div class="column">
						<div class="box">
							<h1 className="title has-text-info">Accounts</h1>
							<h2 className="subtitle">you have 10 account active</h2>
						</div>
					</div>
					<div class="column ">
						<div class="box">
							<h1 className="title has-text-warning ">Upcoming bills</h1>
							<h2 className="subtitle">5 Bills unpaid</h2>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Stack
