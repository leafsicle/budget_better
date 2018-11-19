import React, { Component } from 'react'

class NewAccount extends Component {
	render() {
		return (
			<div className="container">
				<div className="container new-account">
					{/* This is where you will add a new account!! */}
					<div class="field">
						<label class="label">Account Name</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="What should we call this account?"
							/>
						</div>
						<p class="help" /> {/* this appears below */}
					</div>
					<div class="field">
						<label class="label">Amount Due</label>
						<div class="control">
							<input
								class="input"
								type="number"
								min="0"
								max="100"
								placeholder="Amount in $"
							/>
						</div>
						<p class="help" /> {/* this appears below */}
					</div>

					<div class="field">
						<label class="label">When is this bill due?</label>
						<div class="control">
							<input class="input" type="date" required placeholder="" />
						</div>
						<p class="help" /> {/* this appears below */}
					</div>
					<div class="field container">
						<label class="label">Frequency</label>
						<div class="control">
							<select id="frequency">
								<option value="">How often does this occur?</option>
								<option value="dog">Daily</option>
								<option value="cat">Weekly</option>
								<option value="hamster">Bi-weekly</option>
								<option value="parrot">Monthly</option>
								<option value="spider">Quarterly</option>
								<option value="goldfish">Annually</option>
							</select>
						</div>
						<p class="help" /> {/* this appears below */}
					</div>

					<div class="username">
						<label for="uname">Notes:</label>
						<input
							type="text"
							id="notes"
							name="uname"
							required
							minlength="0"
							maxlength="32"
							placeholder="account number etc..."
						/>
						<span class="validity" />
					</div>
					<input className="" type="submit" value="Submit" />
				</div>
			</div>
		)
	}
}

export default NewAccount
