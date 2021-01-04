import React, { Component } from 'react'
import Logout from './Logout'

class Taskview extends Component {
	render() {
		return (
			<section>
				<div className='columns is-desktop'>
					<div className='column'>
						<div
							className='card'
							style={{ height: '28vh', margin: '1em', marginTop: '12vh' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
					</div>
					<div className='column'>
						<div
							className='card'
							style={{ height: '28vh', margin: '1em', marginTop: '12vh' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
					</div>
					<div className='column'>
						<div
							className='card'
							style={{ height: '28vh', margin: '1em', marginTop: '12vh' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
						<div className='card' style={{ height: '28vh', margin: '1em' }}></div>
					</div>
				</div>
				<Logout />
			</section>
		)
	}
}
export default Taskview
