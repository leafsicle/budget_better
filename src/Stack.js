import React, { Component } from 'react'
import DefaultHeader from './DefaultHeader'
import Card from './Card'
import axios from 'axios'

class Stack extends Component {
	state = {
		events: []
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
		this.setState({
			totalBudget: total
		})
	}
	render() {
		return (
			<main className="">
				<DefaultHeader title="Budget Better" />

				<div className="container card-container">
					{/* Overall card with working link */}

					{/* <h1 className="title">
						Overall account balance is ${this.state.totalBudget}
					</h1> */}
					<Card
						className="title"
						cardName="The current total is"
						cardValue={`$${this.state.totalBudget}`}
					/>

					{/* These will be the unpaid accounts possibly */}
					{/* <Card cardName="remaining payments to be made" /> */}

					{/* Accounts card with working link */}
					<Card className="title" cardName="Accounts" urlLink="/accounts" />

					{/* Upcoming bills. Needs redirect */}
					<Card className="title" cardName="Calendar" urlLink="/calendar" />
				</div>
			</main>
		)
	}
}

export default Stack
