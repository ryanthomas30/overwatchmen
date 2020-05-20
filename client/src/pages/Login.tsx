import React from 'react'
import { useFirebase } from '../firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'

const Login = () => {
	const firebase = useFirebase()
	const uiConfig = {
		signInFlow: 'popup',
		signInSuccessUrl: '/app',
		signInOptions: [firebase.googleProvider.providerId],
	}

	const signOut = async () => {
		await firebase.auth.signOut()
	}

	return (
		<div>

			<StyledFirebaseAuth
				uiConfig={uiConfig}
				firebaseAuth={firebase.auth}
			/>
			<button onClick={signOut}> sign out</button>
		</div>
	)
}

export default Login
