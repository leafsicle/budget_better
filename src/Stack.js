import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Card from './Card'
import axios from 'axios'

class Stack extends Component {
	state = {
		events: [],
		totalbudget: {}
	}

	componentWillMount() {
		axios
			.get('http://localhost:3001/events.json')
			.then(response => {
				this.setState({ events: response.data }, () => {
					this.updateTotals()
				})
			})
			.catch(error => console.log(error))
	}

	updateTotals = () => {
		let total = 0
		this.state.events.forEach(event => {
			if (event.flow === 'expense') {
				total -= event.amount_due
			} else {
				total += event.amount_due
			}
		})
		console.log(`the total is ${total}`)

		this.setState({
			totalBudget: total
		})
	}
	render() {
		return (
			<main className="">
				<DefaultHeader title="Better Budget" />

				<div className="container">
					{/* Overall card with working link */}
					<Card cardName={`The total is $${this.props.totalBudget}`} />

					{/* These will be the unpaid accounts possibly */}
					{/* <Card cardName="remaining payments to be made" /> */}

					{/* Accounts card with working link */}
					<Card cardName="Accounts" urlLink="/accounts" />

					{/* Upcoming bills. Needs redirect */}
					<Card cardName="I will be a calendar" urlLink="/Calendar" />
				</div>
			</main>
		)
	}
}

export default Stack
