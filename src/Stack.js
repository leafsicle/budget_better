import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'

class Stack extends Component {
	render() {
		return (
			<main>
				<DefaultHeader title="Better Budget" />
				<div className="columns container">
					{/* Overall card with working link */}
					<div className="column ">
						<a href="./">
							<div className="box is-fullwidth-mobile">
								<h1 className="title has-text-success">Dynamic money!</h1>
								{/* <h2 className="subtitle">Surplus/Deficit this month</h2> */}
							</div>
						</a>
					</div>

					{/* Unpaid card with working link */}
					<div className="column ">
						<a href="./">
							<div className="box is-fullwidth-mobile ">
								<h1 className="title has-text-danger">
									remaining payments to be made
								</h1>
								{/* <h2 className="subtitle">Upcoming bills</h2> */}
							</div>
						</a>
					</div>

					{/* Accounts card with working link */}
					<div className="column ">
						<a href="./Accounts">
							<div className="box is-fullwidth-mobile ">
								<h1 className="title has-text-info">Accounts</h1>
								{/* <h2 className="subtitle"></h2> */}
							</div>
						</a>
					</div>

					{/* Upcoming bills. Needs redirect */}
					<div className="column ">
						<a href="./">
							<div className="box is-fullwidth-mobile ">
								<h1 className="title has-text-warning ">
									I will be a calendar
								</h1>
								{/* <h2 className="subtitle">words!</h2> */}
							</div>
						</a>
					</div>
				</div>
			</main>
		)
	}
}

export default Stack
