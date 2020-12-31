import jwt_decode from 'jwt-decode'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logoutUser, setCurrentUser } from './actions/authActions'
import rootReducer from './actions/reduce'
import './App.css'
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute'
import Register from './components/auth/Register'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import setAuthToken from './utils/setAuthToken'

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk))

if (localStorage.jwtToken) {
	const token = localStorage.jwtToken
	setAuthToken(token)
	const decoded = jwt_decode(token)
	store.dispatch(setCurrentUser(decoded))
	const currentTime = Date.now() / 1000

	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser())

		window.location.href = './login'
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Navbar />
						<Switch>
							<Route exact path='/' component={LandingPage} />

							<Route exact path='/register' component={Register} />

							<Route exact path='/login' component={Login} />

							<PrivateRoute exact path='/dashboard' component={Dashboard} />
						</Switch>
					</div>
				</Router>
			</Provider>
		)
	}
}
export default App
