import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { useFirebase } from '../firebase'
import { Header, Flexbox, Logo, Button, Auth } from '../components'

/* Routes */
import Home from './Home'

const MainHeader = styled(Header)`
	background-color: #FA9C1E;
	color: white;
`

const Main = () => {
	const { path } = useRouteMatch()
	const firebase = useFirebase()

	const signOut = async () => {
		await firebase.signOut()
	}

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
				<Flexbox
					direction='row'
					marginBetween='small'
				>
					<Button
						label='Add Match'
					/>
					<Button
						label='Logout'
						onClick={signOut}
					/>
				</Flexbox>

			</MainHeader>
			<Flexbox align='center' >
				<Switch>
					<Route
						path={`${path}/home`}
						component={Auth(Home, 'Home')}
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
