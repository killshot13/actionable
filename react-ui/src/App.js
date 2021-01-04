import jwt_decode from 'jwt-decode'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { logoutUser, setCurrentUser } from './actions/authActions'
import './App.css'
import Dashboard from './components/auth/Dashboard'
import Login from './components/auth/Login'
import Planner from './components/auth/Planner'
import PrivateRoute from './components/auth/PrivateRoute'
import Register from './components/auth/Register'
import Landing from './components/LandingPage'
import Navbar from './components/Navbar'
import store from './store'
import setAuthToken from './utils/setAuthToken'

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
				<BrowserRouter>
					<div className='App'>
						<Navbar />
						<Route exact path='/' component={Landing} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Switch>
							<PrivateRoute exact path='/dashboard' component={Dashboard} />
							<PrivateRoute exact path='/planner' component={Planner} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}
export default App
