import React, { Component } from 'react'
import Logo from '../Logo'
import RegButtons from './RegButtons'

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
		console.log(newUser)
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
										<figure className='image mb-5'>
											<Logo />
										</figure>
									</div>
									<div className='title is-4 has-text-black level-item'>
										<strong>GET STARTED WITH A FREE ACCOUNT!</strong>
									</div>

									<div className='field'>
										<label className='label'>Name</label>
										<div className='control has-icons-left'>
											<input
												type='text'
												className='input is-medium'
												placeholder='John Doe'
												required
												onChange={this.onChange}
												value={this.state.name}
												error={errors.name}
												id='text'
											/>
											<span className='icon is-small is-left'>
												<i className='fa fa-user'></i>
											</span>
										</div>
									</div>
									<div className='field'>
										<label className='label'>Email</label>
										<div className='control has-icons-left'>
											<input
												type='email'
												className='input is-medium'
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
												className='input is-medium'
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
										<div className='control has-icons-left'>
											<input
												type='password'
												className='input is-medium'
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
									<div>
										<RegButtons />
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
export default Register
