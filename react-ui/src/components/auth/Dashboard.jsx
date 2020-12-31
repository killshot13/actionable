import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Dashboard extends Component {
	onLogoutClick = e => {
		e.preventDefault()
		this.props.logoutUser()
	}
	render() {
		const { user } = this.props.auth
		return (
			<div style={{ height: '75vh' }} className='container valign-wrapper'>
				<div className='row'>
					<div className='col s12 center-align'>
						<div title is-2 is-family-monospace has-text-weight-bold has-text-black-ter>
							<strong>Hey there,</strong> {user.name.split(' ')[0]}
							You are logged into ACTIONABLE!
						</div>
						<div className='box'>
							<div className='level'>
								<div className='control level-item'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
	auth: state.auth,
})
export default connect(mapStateToProps, { logoutUser })(Dashboard)
