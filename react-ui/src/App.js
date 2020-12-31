import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import store from './store'

function App() {
	return (
		<Provider store={store}>
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
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route path='/test'>
							<Login />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	)
}

export default App
