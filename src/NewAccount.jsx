import React, { Component } from 'react'
import axios from 'axios'
import DefaultHeader from './DefaultHeader'

class NewAccount extends Component {
	state = {
		data: {
			name: '',
			due_date: '',
			recurring: {},
			amount_due: 0,
			flow: '',
			was_paid: '',
			notes: ''
		}
	}
	render() {
		let handleClick = () => {
			axios.post('http://localhost:3001/events.json', {
				url: 'http://localhost:3001/events.json',
				data: {
					name: '.',
					due_date: '',
					recurring: {},
					amount_due: 0,
					flow: '',
					was_paid: '',
					notes: ''
				}
			})
		}
		let daily = {
			interval: 1,
			until: null,
			count: null,
			validations: null,
			rule_type: 'IceCube::DailyRule'
		}
		let weekly = {
			interval: 1,
			until: null,
			count: null,
			validations: { day: [1] },
			rule_type: 'IceCube::WeeklyRule',
			week_start: 0
		}

		return (
			<div className="container">
				<DefaultHeader title="New Account" />
				{/* This is where you will add a new account!! */}

				{/* This is the name of the account to be sent to the back end */}
				{/* when is the account due?*/}
				<form className="field">
					<div className="control">
						<label className="label">Account Name:</label>
						<input
							className="input"
							type="text"
							value={this.props.name}
							placeholder="What is this account called?"
						/>
						<span className="validity" />
					</div>
				</form>

				<div className="field new-account">
					<div className="control">
						<label className="label">When is this bill due?</label>
						<input
							className="input"
							type="date"
							value={this.props.due_date}
							required
							placeholder=""
						/>
					</div>
				</div>
				{/* This is for how often the bill occurs*/}
				<div className="field ">
					<div className="control">
						<label className="label">Frequency</label>
						<select id="frequency">
							<option value="">How often does this occur?</option>
							<option value={daily}>Daily</option>
							<option value={weekly}>Weekly</option>
							<option value="bi-weekly">Bi-weekly</option>
							<option value="monthly">Monthly</option>
							<option value="annual">Annually</option>
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
				<div className="field">
					<div className="control">
						<label className="label">Amount Due</label>
						<input
							className="input"
							type="number"
							min="0"
							max="10000"
							placeholder="Amount in $"
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
						<div className="button is-success" onClick={handleClick}>
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
