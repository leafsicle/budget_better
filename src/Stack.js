import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class Stack extends Component {
	render() {
		return (
			<main>
				<DefaultHeader />
				<div class="columns container is-gapless is-1-mobile">
					{/* Unpaid card with working link */}
					<div class="column">
						<a href="./">
							<div class="box">
								<h1 className="title has-text-success">$42</h1>
								<h2 className="subtitle">Surplus/Deficit this month</h2>
							</div>
						</a>
					</div>

					{/* Unpaid card with working link */}
					<div class="column">
						<a href="./">
							<div class="box">
								<h1 className="title has-text-danger">
									### Bills remaining this month
								</h1>{' '}
								<h2 className="subtitle">Upcoming bills</h2>
							</div>
						</a>
					</div>

					{/* Accounts card with working link */}
					<div class="column">
						<a href="./Accounts">
							<div class="box">
								<h1 className="title has-text-info">Accounts</h1>
								<h2 className="subtitle">you have 10 account active</h2>
							</div>
						</a>
					</div>

					{/* Upcoming bills. Needs redirect */}
					<div class="column">
						<a href="./">
							<div class="box">
								<h1 className="title has-text-warning ">Upcoming bills</h1>
								<h2 className="subtitle">5 Bills unpaid</h2>
							</div>
						</a>
					</div>
				</div>
			</main>
		)
	}
}

export default Stack
