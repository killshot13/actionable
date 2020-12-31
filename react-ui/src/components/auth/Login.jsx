import React, { Component } from 'react'
import Logo from '../Logo'
import LoginButtons from './LoginButtons'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			errors: {},
		}
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}
	onSubmit = e => {
		e.preventDefault()
		const returningUser = {
			email: this.state.email,
			password: this.state.password,
		}
		console.log(returningUser)
	}

	render() {
		const { errors } = this.state
		return (
			<section className='hero is-info is-fullheight is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen'>
						<div className='columns is-5-tablet is-4-desktop is-3-widescreen'>
							<div className='column'>
								<form className='box control' noValidate onSubmit={this.onSubmit}>
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
										<div className='control has-icons-left'>
											<input
												type='email'
												className='input is-black is-medium'
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
										<div className='control has-icons-left'>
											<input
												type='password'
												className='input is-black is-medium'
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
									<div>
										<LoginButtons />
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
export default Login
