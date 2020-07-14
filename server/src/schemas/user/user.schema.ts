import { gql } from 'apollo-server'
import { Role } from '../match/match.entity'
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
		matches(limit: Int, role: String): [Match!]!
		"""The current skill rating of the player by role."""
		skillRating: SkillRating
	}

	type SkillRating {
		"""SR for tank."""
		tank: Int
		"""SR for damage."""
		damage: Int
		"""SR for support."""
		support: Int
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
		matches: ({ id }, { limit, role }, { dataSources }) => dataSources.matchService.getAllByUser(id, limit, role as Role),
		skillRating: ({ id }, _, { dataSources }) => dataSources.matchService.getSkillRatingByUser(id),
	},
}
