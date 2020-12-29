import React from 'react'
import { Link } from 'react-router-dom'
import './auth/Login'
import Logo from './Logo'

export default function Navbar() {
	const [isActive, setisActive] = React.useState(false)

	return (
		<nav
			className='navbar is-fixed-top is-black'
			style={{ height: '5vh' }}
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				<div className='navbar-item is-level'>
					<Logo />
				</div>
				<href
					onClick={() => {
						setisActive(!isActive)
					}}
					role='button'
					className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</href>
			</div>

			<div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<Link to='/' className='button is-link is-danger is-outlined is-light is-small'>
							<strong>Tasks</strong>
						</Link>
					</div>
					<div className='navbar-item'>
						<Link to='/' className='button is-link is-info is-outlined is-light is-small'>
							<strong>Calendar</strong>
						</Link>
					</div>
					<div className='navbar-item'>
						<Link
							to='/Login'
							className='button is-link is-success is-outlined is-light is-small'>
							<strong>Login</strong>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
