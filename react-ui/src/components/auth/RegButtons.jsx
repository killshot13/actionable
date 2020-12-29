import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RegButtons extends Component {
	render() {
		return (
			<div className='column is-6 is-offset-3'>
				<div className='box gpBt'>
					<div className='field is-grouped is-grouped-centered'>
						<div className='control level-item'>
							<Link to='/' className='button is-black is-outlined'>
								<strong>Register</strong>
							</Link>
						</div>
						<div className='control'>
							<Link to='/' className='button is-ghost is-outlined'>
								Cancel
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default RegButtons
