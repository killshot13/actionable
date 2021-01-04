import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Logout extends Component {
	handleLogout = e => {
		e.preventDefault()
		this.props.logoutUser()
	}

	render() {
		return (
			<footer className='footer'>
				<div className='column is-6 is-offset-3'>
					<div className='field is-grouped is-grouped-centered'>
						<div className='box level is-grouped is-grouped-centered mt-5 mr-5 ml-5'>
							<button
								className='control level-item button is-black is-outlined'
								type='submit'
								onClick={this.handleLogout}>
								Logout
							</button>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='content has-text-centered'>
						<p>
							<strong>ACTIONABLE</strong> by{' '}
							<ExternalLink href='https://github.com/killshot13'>Michael R</ExternalLink>.
						</p>
						<p>
							The source code is licensed{' '}
							<ExternalLink href='http://opensource.org/licenses/mit-license.php'>
								MIT
							</ExternalLink>
							.
						</p>
						<p>
							The website content is licensed{' '}
							<ExternalLink href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
								CC BY NC SA 4.0
							</ExternalLink>
							.
						</p>
					</div>
				</div>
			</footer>
		)
	}
}

Logout.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Logout)
