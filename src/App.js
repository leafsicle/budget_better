import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Stack from './Stack'
import Accounts from './Accounts'
import Account from './Account'
import NewAccount from './NewAccount'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<Switch>
						<Route exact path="/" component={Stack} />
						<Route path="/accounts" component={Accounts} />
						<Route path="/account" component={Account} />
						<Route path="/NewAccount" component={NewAccount} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
