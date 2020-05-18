import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Match = gql`
	# Operations
	extend type Query {
		"""Get a match by its ID."""
		match(matchId: ID!): Match
		matches: [Match]
	}

	extend type Mutation {
		"""Add a new match for a user."""
		addMatchToUser(newMatch: NewMatch!, userId: ID!): Match!
	}

	# Model
	type Match {
		"""The ID of the match."""
		id: ID!
		"""The map the match was played on."""
		map: Map
		"""The list of heroes the user played in this match."""
		heroes: [Hero]
		"""The role the user played in this match."""
		role: Role!
		"""The skill rating of the player at the end of this match."""
		skillRating: Int!
		"""Whether the match was a win, loss, or draw."""
		result: MatchResult!
		"""When the match was played."""
		endTime: DateTime!
	}

	input NewMatch {
		mapId: Int
		heroIds: [Int]
		role: Role!
		skillRating: Int
		result: MatchResult!
		endTime: DateTime!
	}

	enum Role {
		tank
		damage
		support
	}

	enum MatchResult {
		win
		loss
		draw
	}
`

export const matchResolvers: IResolvers<any, Context> = {
	Query: {
		match: (_, { matchId }, { dataSources }) => dataSources.matchService.getOne(matchId),
		matches: (_, __, { dataSources }) => dataSources.matchService.getAll(),
	},
	Mutation: {
		addMatchToUser: (_, { newMatch, userId }, { dataSources }) => dataSources.matchService.addToUser(newMatch, userId),
	},
}
