import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from '../box'

const colors = {
	Default: '',
	primary: 'primary',
	info: 'info',
	danger: 'danger',
	warning: 'warning',
	success: 'success',
	white: 'white',
	black: 'black',
	light: 'light',
	dark: 'dark',
	link: 'link',
}

storiesOf('Navbar', module)
	.addDecorator(story => (
		<div>
			{story()}
			<Box style={{ margin: '15px auto', maxWidth: '75vw' }}>
				Check the Know tab to see the behavior of this component
			</Box>
		</div>
	))
	.add('Default', () => {
		return (
			<Navbar
				color={select('Color', colors)}
				fixed={select('Fixed', { default: undefined, top: 'top', bottom: 'bottom' })}
				active={boolean('Active', false)}
				transparent={boolean('Transparent', false)}>
				<Navbar.Brand>
					<Navbar.Item renderAs="a" href="#">
						<img src="./default_icon.png" alt="app logo" width="112" height="28" />
					</Navbar.Item>
					<Navbar.Burger />
				</Navbar.Brand>
				<Navbar.Menu>
					<Navbar.Container>
						<Navbar.Item dropdown hoverable href="#">
							<Navbar.Link arrowless={boolean('Arrowless', false)}>First</Navbar.Link>
							<Navbar.Dropdown>
								<Navbar.Item href="#">Subitem 1</Navbar.Item>
								<Navbar.Item href="#">Subitem 2</Navbar.Item>
							</Navbar.Dropdown>
						</Navbar.Item>
						<Navbar.Item href="#">Second</Navbar.Item>
					</Navbar.Container>
					<Navbar.Container position="end">
						<Navbar.Item href="#">At the end</Navbar.Item>
					</Navbar.Container>
				</Navbar.Menu>
			</Navbar>
		)
	})
