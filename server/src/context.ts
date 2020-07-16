import { AuthenticationError } from 'apollo-server'

import { ContextFunction } from 'apollo-server-core'
import { Request, Response } from 'express'
import { ExecutionParams } from 'subscriptions-transport-ws'
import { auth } from 'firebase-admin'

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
export const context: ContextFunction<ExpressContext, ProducedContext> = async ({ req, connection }) => {
	if (connection) return connection.context
	const authHeader = `${req.headers.authorization}` || ''
	try {
		if (authHeader.startsWith('Bearer ')) {
			const token = authHeader.split(' ')[1]
			const decodedToken = await auth().verifyIdToken(token)
			return {
				user: {
					userId: decodedToken.uid,
					roles: [],
				},
			}
		}
		throw Error
	} catch (err) {
		throw new AuthenticationError('You do not have access to these records')
	}

}
