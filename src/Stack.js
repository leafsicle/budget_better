import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class Stack extends Component {
	render() {
		return (
			<main>
				<DefaultHeader />
				<div className="columns container is-gapless is-1-mobile">
					{/* Overall card with working link */}
					<div className="column">
						<a href="./">
							<div className="box">
								<h1 className="title has-text-success">$42</h1>
								<h2 className="subtitle">Surplus/Deficit this month</h2>
							</div>
						</a>
					</div>

					{/* Unpaid card with working link */}
					<div className="column">
						<a href="./">
							<div className="box">
								<h1 className="title has-text-danger">
									### Bills remaining this month
								</h1>{' '}
								<h2 className="subtitle">Upcoming bills</h2>
							</div>
						</a>
					</div>

					{/* Accounts card with working link */}
					<div className="column">
						<a href="./Accounts">
							<div className="box">
								<h1 className="title has-text-info">Accounts</h1>
								<h2 className="subtitle">you have 10 account active</h2>
							</div>
						</a>
					</div>

					{/* Upcoming bills. Needs redirect */}
					<div className="column">
						<a href="./">
							<div className="box">
								<h1 className="title has-text-warning ">Calendar!</h1>
								<h2 className="subtitle">words!</h2>
							</div>
						</a>
					</div>
				</div>
			</main>
		)
	}
}

export default Stack
