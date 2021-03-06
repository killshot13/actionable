import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Images/actionable_logo.png'

class Logo extends Component {
	render() {
		return (
			<div>
				<figure>
					<Link to='/'>
						<img src={Icon} className='is-32X32' alt='App Logo' />
					</Link>
				</figure>
			</div>
		)
	}
}
export default Logo
