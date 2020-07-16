import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getToken } from '../localStorage'

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_OVERWATCHMEN_API_URL,
})

const authLink = setContext((_, { headers }) => {
	const token = getToken()
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
})

export * from './queries'
