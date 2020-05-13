import { SchemaDirectiveVisitor, AuthenticationError, defaultMergedResolver } from 'apollo-server'
import { GraphQLField } from 'graphql'

/**
 * Schema directive that checks the user's role(s) from the context
 * against the required role(s) provided in the directive argument.
 *
 * # Example
 * This user will pass the authorization check.
 * ## Schema
 * ```
 * transactions: [Transaction] @requireAuth(role: "admin")
 * ```
 * ## User
 * ```
 * {
 *  name: 'John Doe',
 *  role: ['admin']
 * }
 * ```
 */
class RequireAuth extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: GraphQLField<any, any>) {
		const { resolve = defaultMergedResolver } = field
		const { role } = this.args
		field.resolve = async (...args: any) => {
			const [, , { user }] = args
			if (user) {
				if (role && (!user.role || !user.role.includes(role))) {
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

export default RequireAuth
