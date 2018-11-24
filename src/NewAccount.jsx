import React, { Component } from 'react'
import axios from 'axios'
import DefaultHeader from './DefaultHeader'

class NewAccount extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			due_date: '',
			recurring: '',
			amount_due: 0,
			flow: '',
			was_paid: '',
			notes: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// handleChange(event) {
	// 	this.setState({ name: event.target.value })
	// }
	handleChange(event) {
		// check it out: we get the event.target.name (which will be either "email" or "password")
		// and use it to target the key on our `state` object with the same name, using bracket syntax
		this.setState({ [event.target.name]: event.target.value })
		console.log(this.state)
	}
	handleSubmit(event) {
		event.preventDefault()
	}

	handleClick = () => {
		axios.post('http://localhost:3001/events.json', {
			url: 'http://localhost:3001/events.json',
			data: {
				name: `${this.state.name}`,
				due_date: '',
				recurring: {},
				amount_due: `${this.amount_due}`,
				flow: '',
				was_paid: '',
				notes: ''
			}
		})
	}
	render() {
		return (
			<div className="container">
				<DefaultHeader title="New Account" />
				{/* This is where you will add a new account!! */}

				{/* This is the name of the account to be sent to the back end */}
				{/* when is the account due?*/}
				<form className="field">
					<label className="label">
						Account Name:
						<input
							className="input"
							type="text"
							name="name" //{this.state.name}
							onChange={this.handleChange}
							placeholder="What is this account called?"
						/>
					</label>
				</form>

				<form className="field new-account">
					<div className="control">
						<label className="label">When is this bill due?</label>
						<input
							className="input"
							type="date"
							value={this.state.due_date}
							required
							placeholder=""
						/>
					</div>
				</form>
				{/* This is for how often the bill occurs*/}
				<div className="field ">
					<div className="control">
						<label className="label">Frequency</label>
						<select id="frequency" onChange={this.handleChange}>
							<option value="">How often does this occur?</option>
							<option recurring="testcase">Daily</option>
							{/* <option value="week">Weekly</option>
							<option value="bi-weekly">Bi-weekly</option>
							<option value="monthly">Monthly</option>
							<option value="annual">Annually</option> */}
						</select>
					</div>
				</div>
				{/* Was this bill paid or not paid? */}
				<div className="field">
					<div className="control">
						<label className="label">Was this bill paid?</label>
						<input className="w3-check" type="checkbox" />
					</div>
				</div>
				{/* How much is this bill? */}
				<div className="field" onChange={this.handleChange}>
					<div className="control">
						<label className="label">Amount Due</label>
						<input
							className="input"
							type="number"
							min="0"
							max="10000"
							placeholder="Amount in $"
							name="amount_due"
						/>
					</div>
				</div>
				{/* Notes for the account */}
				<div className="field">
					<div className="control">
						<label className="label">Notes:</label>
						<input
							className="input"
							type="text"
							placeholder="account number etc..."
						/>
						<span className="validity" />
					</div>
				</div>

				<div className="has-text-centered ">
					{/* submit button to post to DB */}
					<a href="/accounts">
						<div className="button is-success" onClick={this.handleClick}>
							Submit
						</div>
					</a>
					{/* Returns back to the accounts page */}
					<a href="/accounts">
						<div className="button is-danger">Cancel</div>
					</a>
				</div>
			</div>
		)
	}
}

export default NewAccount
