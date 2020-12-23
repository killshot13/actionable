import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navBar'
import LandingPage from './components/landingPage'

function App() {
	return (
		<div className="App">
			<BrowserRouter
				basename={'/'}
				forceRefresh={true}
				getUserConfirmation={(message, callback) => {
					// this is the default behavior
					const allowTransition = window.confirm(message)
					callback(allowTransition)
				}}
				keyLength={12}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/*"></Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
