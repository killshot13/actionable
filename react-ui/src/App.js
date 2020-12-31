import jwt_decode from 'jwt-decode'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logoutUser, setCurrentUser } from './actions/authActions'
import rootReducer from './actions/reduce'
import './App.css'
import Dashboard from './components/auth/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute'
import Register from './components/auth/Register'
import Landing from './components/LandingPage'
import Navbar from './components/Navbar'
import setAuthToken from './utils/setAuthToken'
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk))

if (localStorage.jwtToken) {
	const token = localStorage.jwtToken
	setAuthToken(token)
	const decoded = jwt_decode(token)
	store.dispatch(setCurrentUser(decoded))
	const currentTime = Date.now() / 100

	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser())

		window.location.href = './login'
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter
					forceRefresh={false}
					keyLength={12}
					getUserConfirmation={(message, callback) => {
						const allowTransition = window.confirm(message)
						callback(allowTransition)
					}}>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route path='/register' component={Register} />
						<Route path='/login' component={Login} />
						<PrivateRoute path='/dashboard' component={Dashboard} />
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}
export default App
