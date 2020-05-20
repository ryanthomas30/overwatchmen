import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { Header, Flexbox, Logo, Button } from '../components'

/* Routes */
import Home from './Home'

const MainHeader = styled(Header)`
	background-color: #FA9C1E;
	color: white;
`

const Main = () => {
	const { path } = useRouteMatch()
	return (
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
			<Flexbox align='center' >
				<Switch>
					<Route
						path={`${path}/home`}
						component={Home}
					/>
					<Redirect
						from={path}
						to={`${path}/home`}
					/>
				</Switch>
			</Flexbox>
		</div>
	)
}

export default Main
