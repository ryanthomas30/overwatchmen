import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Map = gql`
	# Operations
	extend type Query {
		"""Get a map by its ID."""
		map(mapId: ID!): Map
		"""Get all maps."""
		maps: [Map!]!
	}

	extend type Mutation {
		"""Create a new map."""
		createMap(newMap: NewMap!): Map!
	}

	# Model
	type Map {
		"""The ID of the map."""
		id: ID!
		"""The name of the map."""
		name: MapName!
		"""The game mode of the map."""
		type: MapType!
	}

	input NewMap {
		name: String!
		type: MapType!
	}

	enum MapType {
		control
		escort
		assault
		hybrid
	}

	enum MapName {
		Hanamura
		Horizon_Lunar_Colony
		Paris
		Temple_of_Anubis
		Volskaya_Industries
		Dorado
		Havana
		Junkertown
		Rialto
		Route_66
		Watchpoint_Gibraltar
		Blizzard_World
		Eichenwalde
		Hollywood
		Kings_Row
		Numbani
		Busan
		Ilios
		Lijiang_Tower
		Nepal
		Oasis
	}
`

export const mapResolvers: IResolvers<any, Context> = {
	Query: {
		map: (_, { mapId }, { dataSources }) => dataSources.mapService.getOne(mapId),
		maps: (_, __, { dataSources }) => dataSources.mapService.getAll(),
	},
	Mutation: {
		createMap: (_, { newMap }, { dataSources }) => dataSources.mapService.create(newMap),
	},
}
