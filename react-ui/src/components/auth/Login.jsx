import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/authActions'
import Logo from '../Logo'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			errors: {},
		}
	}

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()

		const userData = {
			email: this.state.email,
			password: this.state.password,
		}
		if (this.validateForm()) {
			this.props.loginUser(userData)
		}
	}

	validateForm = () => {
		let errors = {}
		let formIsValid = true

		if (!this.state.email) {
			formIsValid = false
			errors['email'] = '*Please enter your email'
		}
		if (this.state.email) {
			//regular expression for email validation
			let pattern = new RegExp(
				/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			)
			if (!pattern.test(this.state.email)) {
				formIsValid = false
				errors['email'] = '*Please enter valid email'
			}
		}
		if (!this.state.password) {
			formIsValid = false
			errors['password'] = '*Please enter your password'
		}
		this.setState({ errors })
		return formIsValid
	}

	render() {
		const { errors } = this.state

		return (
			<section className='hero is-info is-fullheight is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen'>
						<div className='columns is-5-tablet is-4-desktop is-3-widescreen'>
							<div className='column'>
								<div className='box control'>
									<div className='level-item'>
										<figure className='image is-64x64 mb-5'>
											<Logo />
										</figure>
									</div>
									<div className='title is-5 has-text-black level-item'>LOGIN</div>
									<div className='subtitle is-6 has-text-black level-item'>
										Please login to proceed.
									</div>
									<form id='loginForm' onSubmit={this.handleSubmit}>
										<div className='field'>
											<label className='label'>
												Email
												<div className='errorMsg'>
													{this.state.errors.email}
													{this.state.errors.emailnotfound}
												</div>
												<div className='control has-icons-left'>
													<input
														type='email'
														className={classnames('input is-medium', {
															invalid: errors.email || errors.emailnotfound,
														})}
														placeholder='e.g. actionable@outlook.com'
														required
														onChange={this.handleChange}
														value={this.state.email}
														id='email'
													/>
													<span className='icon is-small is-left'>
														<i className='fa fa-envelope'></i>
													</span>
												</div>
											</label>
										</div>

										<div className='field'>
											<label className='label'>
												Password
												<div className='errorMsg'>
													{this.state.errors.password}
													{this.state.errors.passwordincorrect}
												</div>
												<div className='control has-icons-left'>
													<input
														type='password'
														className={classnames('input is-medium', {
															invalid: errors.password || errors.passwordincorrect,
														})}
														placeholder='*********'
														required
														onChange={this.handleChange}
														value={this.state.password}
														id='password'
													/>

													<span className='icon is-small is-left'>
														<i className='fa fa-lock'></i>
													</span>
												</div>
											</label>
										</div>

										<div className='column is-6 is-offset-3'>
											<div className='box'>
												<div className='field is-grouped is-grouped-centered'>
													<button
														className='control level-item button is-black is-outlined'
														type='submit'>
														<strong>Login</strong>
													</button>
													<Link to='/'>
														<button className='control level-item button is-ghost is-outlined'>
															Cancel
														</button>
													</Link>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(Login)
