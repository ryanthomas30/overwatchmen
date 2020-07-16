import { gql } from 'apollo-server'

import hasRole from './hasRole'
import hasUserId from './hasUserId'

export const SchemaDirectives = gql`
	directive @hasRole(role: String) on FIELD_DEFINITION
	directive @hasUserId on FIELD_DEFINITION
`

export const schemaDirectives = {
	hasRole,
	hasUserId,
}
