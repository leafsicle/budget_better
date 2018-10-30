import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container">
				<section class="hero is-bold is-dark has-text-weight-semibold	">
					<div class="hero-body">
						<h1 class="title has-text-success">$42</h1>
						<h2 class="subtitle">October</h2>
					</div>
				</section>
				<div class="tabs is-small is-hidden-mobile desktop-only is-fullwidth ">
					<ul>
						<li class="is-active">
							<a>Overview</a>
						</li>
						<li>
							<a>Monthly</a>
						</li>
						<li>
							<a>Budget</a>
						</li>
					</ul>
				</div>
				<table class="container is-fullwidth">
					<thead>
						<tr>
							<th>Account</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Rent</td>
							<td>$1360</td>
						</tr>
						<tr>
							<td>Electricity</td>
							<td>$80</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Sum</td>
							<td>$180</td>
						</tr>
					</tfoot>
				</table>
			</div>
		)
	}
}

export default App
