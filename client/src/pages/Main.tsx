import React from 'react'
import { Switch, Route, Redirect, match } from 'react-router-dom'
import styled from 'styled-components'

import { Header, Flexbox, Logo } from '../components'

const MainHeader = styled(Header)`
	background-color: #FA9C1E;
	color: white;
`

const Main = () => (
	<div className='page' >
		<MainHeader
			paddingVertical='medium'
			paddingHorizontal='large'
		>
			<Flexbox
				direction='row'
				align='center'
				marginBetween='small'
			>
				<Logo />
			</Flexbox>

		</MainHeader>
		<Flexbox >
			Main
		</Flexbox>
	</div>
)

export default Main
