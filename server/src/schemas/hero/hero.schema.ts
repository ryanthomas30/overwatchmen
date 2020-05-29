import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Hero = gql`
	# Operations
	extend type Query {
		hero(heroId: ID!): Hero
	}

	# Model
	type Hero {
		id: ID!
		name: String!
	}
`

export const heroResolvers: IResolvers<any, Context> = {
	Query: {
	},
}
