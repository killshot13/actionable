import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { default as Login, default as Test } from './components/auth/Login'
import Register from './components/auth/Register'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
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
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route path='/Register'>
						<Register />
					</Route>
					<Route path='/Login'>
						<Login />
					</Route>
					<Route path='/Test'>
						<Test />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
