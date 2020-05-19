const AUTH_USER = 'authUser'
const LOGIN_REDIRECT = 'login_redirect'

export const storeAuthUser = (authUser: firebase.User) => {
	localStorage.setItem(AUTH_USER, JSON.stringify(authUser))
}

export const getAuthUser = (): firebase.User | null => {
	const authUserString = localStorage.getItem(AUTH_USER)
	return authUserString ? JSON.parse(authUserString) : null
}

export const removeAuthUser = () => {
	localStorage.removeItem(AUTH_USER)
}

export const setLoginRedirect = (path: string) => {
	localStorage.setItem(LOGIN_REDIRECT, path)
}

export const getLoginRedirect = () => localStorage.getItem(LOGIN_REDIRECT)

