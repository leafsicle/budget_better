import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		class Header extends Component {
			state = {
				class: 'hide'
			}

			_openMenu = () => {
				this.setState({
					class: 'open'
				})
			}

			_hideMenu = () => {
				this.setState({
					class: 'hide'
				})
			}
		}
		return (
			<div className="container">
				<section className="hero is-bold is-dark has-text-weight-semibold	">
					<div className="hero-body title">Better Budget</div>
				</section>
				<main>
					<div class="columns container is-gapless is-1-mobile">
						<div class="column ">
							<div class="box">
								<h1 className="title has-text-success">$42</h1>
								<h2 className="subtitle">October</h2>
							</div>
						</div>
						<div class="column ">
							<div class="box">
								<h1 className="title has-text-danger">Upcoming bills</h1>
								<h2 className="subtitle">5 Bills unpaid</h2>
							</div>
						</div>
						<div class="column">
							<div class="box">
								<h1 className="title has-text-info">$9,001</h1>
								<h2 className="subtitle">oiajsdojasd</h2>
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default App
