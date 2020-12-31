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
	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard')
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard') // push user to dashboard when they login
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			})
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()

		const userData = {
			email: this.state.email,
			password: this.state.password,
		}
		this.props.loginUser(userData)
	}

	render() {
		const { errors } = this.state
		return (
			<section className='hero is-info is-fullheight is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen'>
						<div className='columns is-5-tablet is-4-desktop is-3-widescreen'>
							<div className='column'>
								<form className='box control' Validate onSubmit={this.onSubmit}>
									<div className='level-item'>
										<figure class='image is-64x64 mb-5'>
											<Logo />
										</figure>
									</div>
									<div className='title is-5 has-text-black level-item'>LOGIN</div>
									<div className='subtitle is-6 has-text-black level-item'>
										Please login to proceed.
									</div>
									<div className='field'>
										<label className='label'>Email</label>
										<span className='red-text'>
											{errors.email}
											{errors.emailnotfound}
										</span>
										<div className='control has-icons-left'>
											<input
												type='email'
												className={classnames('input is-medium', {
													invalid: errors.email || errors.emailnotfound,
												})}
												placeholder='e.g. actionable@outlook.com'
												required
												onChange={this.onChange}
												value={this.state.email}
												error={errors.email}
												id='email'
											/>
											<span className='icon is-small is-left'>
												<i className='fa fa-envelope'></i>
											</span>
										</div>
									</div>
									<div className='field'>
										<label className='label'>Password</label>
										<span className='red-text'>
											{errors.password}
											{errors.passwordincorrect}
										</span>
										<div className='control has-icons-left'>
											<input
												type='password'
												className={classnames('input is-medium', {
													invalid: errors.password || errors.passwordincorrect,
												})}
												placeholder='*********'
												required
												onChange={this.onChange}
												value={this.state.password}
												error={errors.password}
												id='password'
											/>
											<span className='icon is-small is-left'>
												<i className='fa fa-lock'></i>
											</span>
										</div>
									</div>
									<div className='column is-6 is-offset-3'>
										<div className='box gpBt'>
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
