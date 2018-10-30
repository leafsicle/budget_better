import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container">
				<section class="hero">
					<div class="hero-body">
						<h1 class="title">Surp/Def</h1>
						<h2 class="subtitle">Month</h2>
					</div>
				</section>
				<div class="tabs is-small =mobile-only is-fullwidth">
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
			</div>
		)
	}
}

export default App
