import React from 'react'
import { Switch, Route, Redirect, match } from 'react-router-dom'
import styled from 'styled-components'

import { Header, Flexbox } from '../components'

const MainHeader = styled(Header)`
	background-color: #FA9C1E;
	color: white;
	font-family: 'Koverwatch';
	letter-spacing: 1px;
	font-size: 48px;
	font-style: italic;
`

const Main = () => (
	<div className='page' >
		<MainHeader
			paddingVertical='medium'
			paddingHorizontal='large'
		>

			Overwatchmen

		</MainHeader>
		<Flexbox >
			Main
		</Flexbox>
	</div>
)

export default Main
