import { gql, IResolvers } from "apollo-server";
import { Context } from "@/context";
import { dataSources } from "@/server";

export const Map = gql`
  #Operations
  extend type Query {
    map(mapId: ID!): Map
    maps: [Map]
  }

  extend type Mutation {
    createMap(newMap: NewMap!): Map!
  }

  #Model
  type Map {
    id: ID!
    name: String!
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
`

export const mapResolvers: IResolvers<any, Context> = {
  Query: {
    map: (_, { mapId }, { dataSources }) =>
      dataSources.mapService.getOne(mapId),
    maps: (_, __, { dataSources }) => dataSources.mapService.getAll()
  },
  Mutation: {
    createMap: (_, { newMap }, { dataSources }) =>
      dataSources.mapService.create(newMap)
  }
}
