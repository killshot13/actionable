import React from 'react'
import { Link } from 'react-router-dom'
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
				<div
					onClick={() => {
						setisActive(!isActive)
					}}
					className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
					aria-label='menu'
					aria-expanded='false'
					data-target='navBurg'>
					<span aria-hidden='true' data-target='navBurg1'></span>
					<span aria-hidden='true' data-target='navBurg2'></span>
					<span aria-hidden='true' data-target='navBurg3'></span>
				</div>
			</div>

			<div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navBurg'>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<Link
							to='/dashboard'
							className='button is-link is-danger is-outlined is-light is-small'
							id='navBurg1'
							type='submit'>
							<strong>Tasks</strong>
						</Link>
					</div>
					<div className='navbar-item'>
						<Link
							to='/planner'
							className='button is-link is-info is-outlined is-light is-small'
							id='navBurg2'
							type='submit'>
							<strong>Calendar</strong>
						</Link>
					</div>
					<div className='navbar-item'>
						<Link
							to='/login'
							className='button is-link is-success is-outlined is-light is-small'
							id='navBurg3'
							type='submit'>
							<strong>Login</strong>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
