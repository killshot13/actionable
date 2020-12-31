import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../../actions/authActions.js'
import Logo from '../Logo'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		}
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard')
		}
	}

	componentWillReceiveProps(nextProps) {
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

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		}

		this.props.registerUser(newUser, this.props.history)
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
										<figure className='image mb-5'>
											<Logo />
										</figure>
									</div>
									<div className='title is-4 has-text-black level-item'>
										<strong>GET STARTED WITH A FREE ACCOUNT!</strong>
									</div>

									<div className='field'>
										<label className='label'>Name</label>
										<span className='red-text'>{errors.name}</span>
										<div className='control has-icons-left'>
											<input
												type='text'
												className={classnames('input is-medium', {
													invalid: errors.name,
												})}
												placeholder='John Doe'
												required
												onChange={this.onChange}
												value={this.state.name}
												error={errors.name}
												id='name'
											/>
											<span className='icon is-small is-left'>
												<i className='fa fa-user'></i>
											</span>
										</div>
									</div>
									<div className='field'>
										<label className='label'>Email</label>
										<span className='red-text'>{errors.email}</span>
										<div className='control has-icons-left'>
											<input
												type='email'
												className={classnames('input is-medium', {
													invalid: errors.email,
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
										<span className='red-text'>{errors.password}</span>
										<div className='control has-icons-left'>
											<input
												type='password'
												className={classnames('input is-medium', {
													invalid: errors.password,
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
									<div className='field'>
										<label className='label'>Confirm Password</label>
										<span className='red-text'>{errors.password2}</span>
										<div className='control has-icons-left'>
											<input
												type='password'
												className={classnames('input is-medium', {
													invalid: errors.password,
												})}
												placeholder='*********'
												required
												onChange={this.onChange}
												value={this.state.password2}
												error={errors.password2}
												id='password2'
											/>
											<span className='icon is-small is-left'>
												<i className='fa fa-lock'></i>
											</span>
										</div>
									</div>
									<div className='column is-6 is-offset-3'>
										<div className='box gpBt'>
											<div className='field is-grouped is-grouped-centered'>
												<div className='control level-item'>
													<Link
														to='/'
														className='button is-black is-outlined'
														type='submit'
														onClick={this.onClick}>
														<strong>Register</strong>
													</Link>
												</div>
												<div className='control'>
													<Link to='/' className='button is-ghost is-outlined' type='submit'>
														Cancel
													</Link>
												</div>
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
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
})
export default connect(mapStateToProps, { registerUser })(withRouter(Register))
