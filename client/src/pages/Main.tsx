import React from 'react'
import { Switch, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { useFirebase } from '../firebase'
import { Header, Flexbox, Logo, Button, Auth } from '../components'

/* Routes */
import Home from './Home'
import AddMatch from './AddMatch'

const MainHeader = styled(Header)`
	background-color: ${({ theme }) => theme.lightBlue};
	color: white;
`

const Main = () => {
	const { path } = useRouteMatch()
	const firebase = useFirebase()
	const history = useHistory()

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
					<Logo onClick={() => history.push('/')} />
				</Flexbox>
				<Flexbox
					direction='row'
					marginBetween='small'
				>
					<Button
						label='Add Match'
						path='/app/match/new'
						flat
					/>
					<Button
						label='Logout'
						onClick={signOut}
						flat
					/>
				</Flexbox>

			</MainHeader>
			<Flexbox align='center' >
				<Switch>
					<Route
						path={`${path}/home`}
						component={Auth(Home, 'Home')}
					/>
					<Route
						path={`${path}/match/new`}
						component={Auth(AddMatch, 'Add Match')}
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
