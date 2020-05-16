import { SchemaDirectiveVisitor, AuthenticationError, defaultMergedResolver } from 'apollo-server'
import { GraphQLField } from 'graphql'

import { Context } from '@/context'

/**
 * Schema directive that checks the user's role(s) from the context
 * against the required role(s) provided in the directive argument.
 *
 * # Example
 * This user will pass the authorization check.
 * ## Schema
 * ```
 * transactions: [Transaction] @hasRole(role: "admin")
 * ```
 * ## User
 * ```
 * {
 *  name: 'John Doe',
 *  role: ['admin']
 * }
 * ```
 */
class HasRole extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: GraphQLField<any, Context>) {
		const { resolve = defaultMergedResolver } = field
		const { role } = this.args
		field.resolve = async (...args) => {
			const [, , { user }] = args
			if (user) {
				if (role && (!user.roles || !user.roles.includes(role))) {
					throw new AuthenticationError(`This resource requires role "${role}" to be viewed.`)
				} else {
					const result = await resolve.apply(this, args)
					return result
				}
			} else {
				throw new AuthenticationError('You must be signed in to view this resource.')
			}
		}
	}
}

export default HasRole
