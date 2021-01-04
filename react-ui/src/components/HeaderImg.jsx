import React, { Component } from 'react'
import Image from './Images/actionable_rectangle.jpg'

class HeaderImg extends Component {
	render() {
		return (
			<div>
				<img src={Image} className='image is-128x20' alt='App Logo' />
			</div>
		)
	}
}
export default HeaderImg
