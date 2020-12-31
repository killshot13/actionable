import { combineReducers } from 'redux'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'

function auth() {
	const isEmpty = require('is-empty')
	const isAuth = {
		isAuthenticated: false,
		user: {},
		loading: false,
	}
	const authReducer = (state = isAuth, action) => {
		switch (action.type) {
			case SET_CURRENT_USER:
				return {
					...state,
					isAuthenticated: !isEmpty(action.payload),
					user: action.payload,
				}
			case USER_LOADING:
				return {
					...state,
					loading: true,
				}
			default:
				return state
		}
	}
	return authReducer
}

function error() {
	const errorReducer = (state, action) => {
		switch (action.type) {
			case GET_ERRORS:
				return action.payload
			default:
				return state
		}
	}
	return errorReducer
}

const rootReducer = combineReducers({
	auth,
	error,
})

export default rootReducer
