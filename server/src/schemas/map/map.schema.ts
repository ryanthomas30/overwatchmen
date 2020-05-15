import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Map = gql`
	#Operations
	extend type Query {
		map(mapId: ID!): Map
	}

	#Model
	type Map {
		id: ID!
		name: String!
	}
`

export const mapResolvers: IResolvers<any, Context> = {
	Query: {
	},
}
