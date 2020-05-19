import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../firebase'
import { setLoginRedirect, getLoginRedirect } from '../localStorage'

export const Auth = (ComposedComponent: any, title?: string) => {
	const Authentication = ({ match, ...props }: any) => {
		const authUser = useAuth()
		const loginRedirect = getLoginRedirect()
		const history = useHistory()

		useEffect(() => {
			document.title = title ? `Overwatchmen | ${title}` : 'Overwatchmen'
			if (!authUser) setLoginRedirect(match.path)
			else if (loginRedirect) {
				setLoginRedirect('')
				history.push(loginRedirect)
			}
		})

		if (!authUser) {
			return <Redirect to='/' />
		}

		return <ComposedComponent {...props} />
	}

	return Authentication
}

export const UnAuth = (ComposedComponent: any) => {
	const Unauthentication = ({ ...props }: any) => {
		const authUser = useAuth()

		useEffect(() => {
			document.title = 'Overwatchmen'
		})

		if (authUser) {
			return <Redirect to='/app/home' />
		}

		return <ComposedComponent {...props} />
	}

	return Unauthentication
}
