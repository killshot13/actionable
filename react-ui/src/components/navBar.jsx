import React, { Component } from 'react'
import Logo from './Logo'

class Navbar extends Component {
	render() {
		return (
			<nav
				className="navbar is-fixed-top is-black"
				role="navigation"
				aria-label="main navigation">
				<div className="navbar-brand">
					<div className="navbar-item">
						<Logo />
					</div>

					<href
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</href>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<href className="navbar-item">Actions</href>

						<div className="navbar-item has-dropdown is-hoverable">
							<href className="navbar-link">More</href>

							<div className="navbar-dropdown is-dark">
								<href className="navbar-item">About</href>
								<href className="navbar-item">Jobs</href>
								<href className="navbar-item">Contact</href>
								<hr className="navbar-divider"></hr>
								<href className="navbar-item">Report an issue</href>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<href className="button is-primary">
									<strong>Sign up</strong>
								</href>
								<href className="button">
									<span class="icon is-small is-right">
										<i class="fas fa-check"></i>
									</span>
									Tweet
								</href>
								<href className="button is-light">Log in</href>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}
export default Navbar
