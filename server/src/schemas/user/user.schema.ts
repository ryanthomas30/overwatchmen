import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const User = gql`

	# Operations
	extend type Query {
		user(userId: ID!): User
	}

	# Model
	type User {
		id: ID!
	}
`

export const userResolvers: IResolvers<any, Context> = {
	Query: {
		user: (_, { userId }, { dataSources }) => dataSources.userService.getUser(userId),
	},
}
