import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Match = gql`
	#Operations
	extend type Query {
		match(matchId: ID!): Match
	}

	#Model
	type Match {
		id: ID!
		map: Map
		hero: Hero
		role: Role
		skillRating: Int
		result: MatchResult
		matchTime: DateTime
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
	},
}
