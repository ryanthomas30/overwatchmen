import { ContextFunction } from 'apollo-server-core'
import { Request, Response } from 'express'
import { ExecutionParams } from 'subscriptions-transport-ws'
import { DataSources } from '@/server'

/**
 * Express context from apollo-server-core.
 */
interface ExpressContext {
	req: Request
	res: Response
	connection?: ExecutionParams
}

/**
 * Context object produced by `ContextFunction`.
 */
export interface ProducedContext {
	user: ContextUser
}

export interface ContextUser {
	userId: string
	roles: string[]
}

/**
 * Full context object generated at runtime by Apollo Server after injecting `DataSources`.
 */
export interface Context extends ProducedContext {
	dataSources: DataSources
}

/**
 * Returns the context object that is available globally throughout the server.
 * The context is injected into resolvers and datasources.
 *
 * Do not include datasources explicitly in the context to avoid circular dependencies.
 * Apollo Server will automatically include datasources in the context at runtime.
 */
export const context: ContextFunction<ExpressContext, ProducedContext> = ({ req, connection }) => {
	if (connection) return connection.context
	const userId = req.headers.userid || ''
	return {
		user: {
			userId,
			roles: [],
		},
	}
}
