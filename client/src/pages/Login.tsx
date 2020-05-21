import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useFirebase } from '../firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { Flexbox, Card, Logo, Title } from '../components'

const LoginCard = styled(Card)`
	width: 700px;
	height: 400px;
`

const LoginSection = styled(Flexbox)`
	background-color: ${({ theme }) => theme.yellow};
	width: 60%;
	height: 100%;
	border-radius: 10px 0px 0px 10px;
`

const ImageSection = styled(Flexbox)`
	background-color: white;
	width: 40%;
	height: 100%;
	border-radius: 0px 10px 10px 0px;
	overflow: hidden;
`

const Login = () => {
	const theme = useContext(ThemeContext)
	const firebase = useFirebase()
	const uiConfig = {
		signInFlow: 'popup',
		signInSuccessUrl: '/app',
		signInOptions: [firebase.googleProvider.providerId],
	}

	return (
		<div className='page' >
			<Flexbox
				align='center'
				justify='center'
				padding='medium'
				full
			>
				<LoginCard
					align='center'
					justify='center'
					direction='row'
				>
					<LoginSection
						padding='large'
						align='center'
						justify='between'
					>
						<Flexbox align='end' >
							<Logo />
							<Title
								size={22}
								italic
								color={theme.paleYellow}
							>
								Watch your SR drop
							</Title>
						</Flexbox>

						<StyledFirebaseAuth
							uiConfig={uiConfig}
							firebaseAuth={firebase.auth}
						/>
					</LoginSection>
					<ImageSection>
						<img
							src='https://picsum.photos/280/400'
							object-fit='cover'
						/>
					</ImageSection>

				</LoginCard>
			</Flexbox>
		</div>
	)
}

export default Login
