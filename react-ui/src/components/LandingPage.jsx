import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './auth/Login'
import HeaderImg from './HeaderImg'

class LandingPage extends Component {
	render() {
		return (
			<section className='hero is-fullheight is-primary is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen has-text-centered'>
						<div className='column is-6 is-offset-3'>
							<div className='level-item'>
								<Link to='/'>
									<HeaderImg />
								</Link>
							</div>
							<div className='has-text-weight-bold has-text-black-ter mt-3 mb-3'>~</div>
							<div className='subtitle is-3 is-family-monospace has-text-black-ter'>
								Meet Your New Favorite Scheduling App
							</div>
							<div className='has-text-weight-bold has-text-black-ter mt-3 mb-3'>~ ~</div>
							<div className='title is-2 is-family-monospace has-text-weight-bold has-text-black-ter'>
								<strong>"MEET YOUR DEADLINES IN STYLE"</strong>
							</div>
							<div className='has-text-weight-bold has-text-black-ter mt-3 mb-3'>~ ~ ~</div>

							<div className='box'>
								<div className='level'>
									<div className='control level-item'>
										<Link
											to='/register'
											className='button is-black is-outlined is-medium'
											type='submit'>
											<strong>Take Action!</strong>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default LandingPage
