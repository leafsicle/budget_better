import React, { Component } from 'react'
import axios from 'axios'

class NewAccount extends Component {
	render() {
		let handleClick = () => {
			axios.post('http://localhost:3001/events.json', {
				url: 'http://localhost:3001/events.json',
				data: {
					name: 'testing bacon bits',
					due_date: '',
					recurring: {},
					amount_due: 3,
					flow: 'expense',
					was_paid: false,
					notes: ''
				}
			})
		}

		return (
			<div className="container">
				<div className="container new-account">
					{/* This is where you will add a new account!! */}
					{/* This is the name of the account to be sent to the backend */}
					<div className="field">
						<div className="control">
							<label className="label">Account Name</label>
							<input
								className="input"
								type="text"
								placeholder="What should we call this account?"
							/>
						</div>
						<p className="help" /> {/* this appears below */}
					</div>

					{/* when is the account due?*/}
					<div className="field">
						<div className="control">
							<label className="label">When is this bill due?</label>
							<input className="input" type="date" required placeholder="" />
						</div>
					</div>
					{/* This is for how often the bill occurs*/}
					<div className="field ">
						<div className="control">
							<label className="label">Frequency</label>
							<select id="frequency">
								<option value="">How often does this occur?</option>
								<option value="daily">Daily</option>
								<option value="weekly">Weekly</option>
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
								max="100"
								placeholder="Amount in $"
							/>
						</div>
					</div>

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
					<input
						className="box"
						onClick={handleClick}
						type="submit"
						value="Submit"
					/>
				</div>
			</div>
		)
	}
}

export default NewAccount
