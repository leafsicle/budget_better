import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DefaultHeader from './DefaultHeader'
import Stack from './Stack'
import Test from './Test'
import Accounts from './Accounts'

class App extends Component {
	render() {
		return (
			<div className="container app">
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Stack} />
							<Route path="/accounts" component={Accounts} />
						</Switch>
					</div>
				</Router>

				{/* <Test /> */}
				{/* <Accounts /> */}
				{/* <Stack/> */}
			</div>
		)
	}
}

export default App
