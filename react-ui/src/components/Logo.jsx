import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from './default_icon.png'

class Logo extends Component {
	render() {
		return (
			<div>
				<Link to="/">
					<img src={Icon} is="28x112" alt="App Logo" />
				</Link>
			</div>
		)
	}
}
export default Logo
