import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Card from './Card'

class Stack extends Component {
	render() {
		return (
			<main className="container">
				<DefaultHeader title="Better Budget" />

				<div className="columns">
					{/* Overall card with working link */}
					<Card cardName={`The total is ${this.props.totalBudget}`} />

					{/* Unpaid card with working link */}
					<Card cardName="remaining payments to be made" />

					{/* Accounts card with working link */}
					<Card cardName="Accounts" urlLink="/accounts" />

					{/* Upcoming bills. Needs redirect */}
					<Card cardName="I will be a calendar" />
				</div>
			</main>
		)
	}
}

export default Stack
