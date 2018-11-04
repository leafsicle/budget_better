import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Stack from './Stack'
import Accounts from './Accounts'
import NewAccount from './NewAccount'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Stack} />
							<Route path="/accounts" component={Accounts} />
							<Route path="/NewAccount" component={NewAccount} />
							{/* 	<Route path="/INSERT HERE" component={INSERT HERE} /> */}
						</Switch>
					</div>
				</Router>

				{/* <Accounts /> */}
			</div>
		)
	}
}

export default App
