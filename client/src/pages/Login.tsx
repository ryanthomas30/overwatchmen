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

	return (
		<div>

			<StyledFirebaseAuth
				uiConfig={uiConfig}
				firebaseAuth={firebase.auth}
			/>
		</div>
	)
}

export default Login
