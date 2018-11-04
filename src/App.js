import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Default from './Default'
import Stack from './Stack'
import Test from './Test'
import Accounts from './Accounts'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<div>
						<Default />
						<Switch>
							<Route exact path="/" component={Stack} />
							<Route path="/accounts" component={Accounts} />
						</Switch>
					</div>
				</Router>

				{/* <Default /> */}
				{/* <Test /> */}
				<Accounts />
				{/* <Stack/> */}
			</div>
		)
	}
}

export default App
