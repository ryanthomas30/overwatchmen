import { gql, IResolvers } from 'apollo-server'
import { Context } from '@/context'

export const Hero = gql`

	# Operations
	extend type Query {
		hero(heroId: ID!): Hero
		heroes(role: String): [Hero]
	}

	extend type Mutation {
		createHero(newHero: NewHero!): Hero!
	}

	# Model
	type Hero {
		id: ID!
		name: HeroName!
		role: Role!
	}

	enum HeroName {
		Ana
		Ashe
		Baptiste
		Bastion
		Brigitte
		Doomfist
		D__Va
		Echo
		Genji
		Hanzo
		Junkrat
		Lucio
		McCree
		Mei
		Mercy
		Moira
		Orisa
		Pharah
		Reaper
		Reinhardt
		Roadhog
		Sigma
		Soldier_76
		Sombra
		Symmetra
		Torbjorn
		Tracer
		Widowmaker
		Winston
		Wrecking_Ball
		Zarya
		Zenyatta
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

