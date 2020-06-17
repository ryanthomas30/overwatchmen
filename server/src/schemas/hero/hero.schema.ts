import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Hero = gql`

	# Operations
	extend type Query {
		hero(heroId: ID!): Hero
		heroes(role: Role): [Hero]
	}

	extend type Mutation {
		createHero(newHero: NewHero!): Hero!
	}

	# Model
	type Hero {
		id: ID!
		name: String!
		role: Role!
	}

	input NewHero {
		name: String!
		role: Role!
	}

`

export const heroResolvers: IResolvers<any, Context> = {
	Query: {
		hero: (_, { heroId }, { dataSources }) => dataSources.heroService.getOne(heroId),
		heroes: (_, { role }, { dataSources }) => dataSources.heroService.getAll(role),
	},
	Mutation: {
		createHero: (_, { newHero }, { dataSources }) => dataSources.heroService.create(newHero),
	},
}

