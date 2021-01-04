import React, { Component } from 'react'
import Calendar from 'react-calendar'

class Planner extends Component {
	state = {
		date: new Date(),
	}

	onChange = date => this.setState({ date })

	render() {
		return (
			<section className='hero is-info is-fullheight is-bold'>
				<div className='hero-body'>
					<div className='container is-max-widescreen'>
						<div className='columns is-5-tablet is-4-desktop is-3-widescreen'>
							<div className='box control'>
								<main className='level-item'>
									<div>
										<Calendar onChange={this.onChange} value={this.state.date} />
									</div>
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
