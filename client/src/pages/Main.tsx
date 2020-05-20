import React from 'react'
// import { Switch, Route, Redirect, match } from 'react-router-dom'
import styled from 'styled-components'

import { Header, Flexbox, Logo, Card, Button } from '../components'

const MainHeader = styled(Header)`
	background-color: #FA9C1E;
	color: white;
`

const Main = () => (
	<div className='page' >
		<MainHeader
			paddingVertical='small'
			paddingHorizontal='large'
			justify='between'
		>
			<Flexbox
				direction='row'
				align='center'
				marginBetween='small'
			>
				<Logo />
			</Flexbox>
			<Button
				label='Add Match'
			/>

		</MainHeader>
		<Flexbox
			align='center'
			justify='center'
		>
			<Card
				padding='medium'
				margin='small'
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</Card>
			<Card
				padding='medium'
				margin='small'
			>
				Card 1
			</Card>
			<Card
				padding='large'
				margin='large'
			>
				Card 1
			</Card>
		</Flexbox>
	</div>
)

export default Main
