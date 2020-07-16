import { SchemaDirectiveVisitor, AuthenticationError, defaultMergedResolver } from 'apollo-server'
import { GraphQLField } from 'graphql'

import { Context } from '@/context'

/**
 * Schema directive that checks if the user's ID from the context (JWT)
 * matches the `userId` provided in the query argument.
 *
 * # Example
 * This user will pass the authorization check.
 * ## Schema
 * ```
 * user(userId: ID!): User @hasUserId
 * ```
 * ## Query
 * ```
 * {
 *  user(userId: "12345") {
 *   id
 *   name
 *  }
 * }
 * ```
 * ## User (Context)
 * ```
 * {
 *  userId: '12345',
 * }
 * ```
 */
class HasUserId extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: GraphQLField<any, Context>) {
		const { resolve = defaultMergedResolver } = field
		field.resolve = async (...args) => {
			const [, { userId }, { user }] = args
			if (user) {
				if (userId === user.userId) {
					const result = await resolve.apply(this, args)
					return result
				}
				throw new AuthenticationError('You are not authorized to view this resource.')
			} else {
				throw new AuthenticationError('You must be signed in to view this resource.')
			}
		}
	}
}

export default HasUserId
