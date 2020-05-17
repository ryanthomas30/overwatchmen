import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const User = gql`

	# Operations
	extend type Query {
		"""Get a user by their ID."""
		user(userId: ID!): User!
	}

	extend type Mutation {
		"""Create a new user."""
		createUser(newUser: NewUser!): User!
	}

	# Model
	type User {
		"""The ID of the user."""
		id: ID!
		"""The user's full name."""
		fullName: String!
		"""The user's email address."""
		email: String!
		"""The matches that the user has played."""
		matches: [Match!]!
	}

	input NewUser {
		"""The user's full name."""
		fullName: String!
		"""The user's email address."""
		email: String!
	}
`

export const userResolvers: IResolvers<any, Context> = {
	Query: {
		user: (_, { userId }, { dataSources }) => dataSources.userService.get(userId),
	},
	Mutation: {
		createUser: (_, { newUser }, { dataSources }) => dataSources.userService.create(newUser),
	},
	User: {
		matches: (_, { userId }, { dataSources }) => dataSources.matchService.getByUser(userId),
	},
}
