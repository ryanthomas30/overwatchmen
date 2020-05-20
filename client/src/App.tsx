import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Flexbox } from './components'
import { theme } from './constants'

/* Routes */
import Login from './pages/Login'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

/* Auth HoC */
import { UnAuth } from './components'

import { useFirebaseAuthListener, AuthProvider } from './firebase'

const App = () => {
	const firebaseUser = useFirebaseAuthListener()
	return (
		<AuthProvider value={firebaseUser} >
			<ThemeProvider theme={theme} >
				<Flexbox
					className='app'
					justify='center'
					align='center'
				>
					<Switch>
						<Route
							exact
							path='/'
							component={UnAuth(Login)}
						/>
						<Route
							path='/app'
							component={Main}
						/>
						<Route component={NotFound} />
					</Switch>
				</Flexbox>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App
