import React, { Component } from 'react'
import Cal from './Cal'

class Planner extends Component {
	render() {
		return (
			<section className='hero is-info is-fullheight is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen'>
						<div className='columns is-5-tablet is-4-desktop is-3-widescreen'>
							<div className='column'>
								<main>
									<Cal />
								</main>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Planner
