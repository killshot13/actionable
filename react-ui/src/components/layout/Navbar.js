import React, { Component } from 'react'

class Navbar extends Component {
	render() {
		return (
			<nav
				class="navbar is-fixed-top is-black"
				role="navigation"
				aria-label="main navigation">
				<div class="navbar-brand">
					<div class="navbar-item" href="%PUBLIC_URL%">
						<img
							src="../../components/apple-touch-icon.png"
							width="100"
							height="100"
							alt="app logo"></img>
					</div>

					<href
						role="button"
						class="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</href>
				</div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-start">
						<href class="navbar-item">Home</href>

						<href class="navbar-item">Documentation</href>

						<div class="navbar-item has-dropdown is-hoverable">
							<href class="navbar-link">More</href>

							<div class="navbar-dropdown is-dark">
								<href class="navbar-item">About</href>
								<href class="navbar-item">Jobs</href>
								<href class="navbar-item">Contact</href>
								<hr class="navbar-divider"></hr>
								<href class="navbar-item">Report an issue</href>
							</div>
						</div>
					</div>

					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons">
								<href class="button is-primary">
									<strong>Sign up</strong>
								</href>
								<href class="button is-light">Log in</href>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}
export default Navbar
