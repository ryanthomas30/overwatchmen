import React, { useContext } from 'react'
import { useMutation, gql } from '@apollo/client'
import styled, { ThemeContext } from 'styled-components'

import { useFirebase } from '../firebase'
import { CreateUser, CreateUserVariables } from '../model'
import { Flexbox, Card, Logo, Title, LoginButton } from '../components'
import genjiImage from '../assets/genji_art.jpg'

const CREATE_USER = gql`
	mutation CreateUser($newUser: NewUser!) {
		createUser(newUser: $newUser) {
			id
			email
			fullName
		}
	}
`

const LoginCard = styled(Card)`
	width: 700px;
	height: 400px;
`

const LoginSection = styled(Flexbox)`
	background-color: ${({ theme }) => theme.lightBlue};
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
	const [createUser] = useMutation<CreateUser, CreateUserVariables>(CREATE_USER)

	const onLogin = async () => {
		const userCredentials = await firebase.googleSignIn()
		const { additionalUserInfo, user } = userCredentials

		if (additionalUserInfo?.isNewUser && user) {
			createUser({
				variables: {
					newUser: {
						id: user.uid,
						email: user.email!,
						fullName: user.displayName!,
					},
				},
			})
		}
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
								color={theme.paleBlue}
							>
								Watch your SR drop
							</Title>
						</Flexbox>
						<LoginButton
							onClick={onLogin}
						/>
					</LoginSection>
					<ImageSection>
						<img
							src={genjiImage}
							object-fit='cover'
							alt='login_image'
						/>
					</ImageSection>
				</LoginCard>
			</Flexbox>
		</div>
	)
}

export default Login
