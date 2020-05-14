/* eslint-disable no-console */
import { ApolloServer, IResolvers } from 'apollo-server'
import { createConnection } from 'typeorm'

/* SCHEMAS & DATASOURCES */
import {
	Root,
	rootResolvers,
	User,
	userResolvers,
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

}

export const typeDefs = [
	Root,
	User,
	Scalars,
	SchemaDirectives,
]

export const resolvers = [
	rootResolvers,
	userResolvers,
	scalarResolvers as IResolvers,
]

export const dataSources = {

}

export const run = async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context,
		schemaDirectives,
		dataSources: () => dataSources,
	})

	await createConnection()

	const { url } = await server.listen()

	// eslint-disable-next-line
	console.log(`🚀  Server ready at ${url}`)
}
