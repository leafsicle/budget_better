import React, { Component } from 'react'
import PageHeader from './PageHeader'

class NewAccount extends Component {
	render() {
		return (
			<div>
				<PageHeader />
				{/* This is where you will add a new account!! */}
				<div class="field">
					<label class="label">Account Name!</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" />
					</div>
					<p class="help">This is below the box?</p>
				</div>
				<div class="field">
					<label class="label">Label</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" />
					</div>
					<p class="help">This is a help text</p>
				</div>
				<div class="field">
					<label class="label">Label</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" />
					</div>
					<p class="help">This is a help text</p>
				</div>
			</div>
		)
	}
}

export default NewAccount
