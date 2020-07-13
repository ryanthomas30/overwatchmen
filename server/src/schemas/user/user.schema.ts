import { gql } from 'apollo-server'
import { Context } from '@/context'
import { Resolvers } from '@/generated'

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
		matches(limit: Int): [Match!]!
	}

	input NewUser {
		id: ID!
		"""The user's full name."""
		fullName: String!
		"""The user's email address."""
		email: String!
	}
`

export const userResolvers: Resolvers<Context> = {
	Query: {
		// @ts-ignore Codegen issue
		user: (_, { userId }, { dataSources }) => dataSources.userService.getOne(userId),
	},
	Mutation: {
		// @ts-ignore Codegen issue
		createUser: (_, { newUser }, { dataSources }) => dataSources.userService.create(newUser),
	},
	User: {
		// @ts-ignore Codegen issue
		matches: ({ id }, { limit }, { dataSources }) => dataSources.matchService.getAllByUser(id, limit),
	},
}
