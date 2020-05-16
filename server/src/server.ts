/* eslint-disable no-console */
import { ApolloServer, IResolvers } from 'apollo-server'
import { createConnection } from 'typeorm'

/* SCHEMAS & DATASOURCES */
import {
	/* Root */
	Root,
	rootResolvers,
	/* Hero */
	Hero,
	heroResolvers,
	HeroService,
	/* Map */
	Map,
	mapResolvers,
	MapService,
	/* Match */
	Match,
	matchResolvers,
	MatchService,
	/* User */
	User,
	userResolvers,
	UserService,
} from '@/schemas'

/* DIRECTIVES */
import { schemaDirectives, SchemaDirectives } from '@/directives'

/* SCALARS */
import { Scalars, scalarResolvers } from '@/scalars'

/* CONTEXT */
import { context } from '@/context'

/**
 * Object containing all data sources injected into the `Context` by Apollo Server
 */
export interface DataSources {
	heroService: HeroService
	mapService: MapService
	matchService: MatchService
	userService: UserService
}

export const typeDefs = [
	Root,
	Hero,
	Map,
	Match,
	User,
	Scalars,
	SchemaDirectives,
]

export const resolvers = [
	rootResolvers,
	heroResolvers,
	mapResolvers,
	matchResolvers,
	userResolvers,
	scalarResolvers as IResolvers,
]

export const dataSources = {
	heroService: new HeroService(),
	mapService: new MapService(),
	matchService: new MatchService(),
	userService: new UserService(),
}

export const run = async () => {
	await createConnection()

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context,
		schemaDirectives,
		dataSources: () => dataSources,
	})

	const { url } = await server.listen()

	// eslint-disable-next-line
	console.log(`🚀  Server ready at ${url}`)
}
