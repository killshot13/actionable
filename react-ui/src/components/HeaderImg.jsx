import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from './Images/actionable_rectangle.jpg'

class HeaderImg extends Component {
	render() {
		return (
			<div>
				<Link to='/'>
					<img src={Image} className='image is-128x20' alt='App Logo' />
				</Link>
			</div>
		)
	}
}
export default HeaderImg
