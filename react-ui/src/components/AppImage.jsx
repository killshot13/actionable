import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from './Images/actionable_rectangle.jpg'

class Logo extends Component {
	render() {
		return (
			<div>
				<Link to='/'>
					<img src={Image} className='image is-400x225' alt='App Logo' />
				</Link>
			</div>
		)
	}
}
export default Logo
