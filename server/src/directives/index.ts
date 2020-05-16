import { gql } from 'apollo-server'
import hasRole from './hasRole'

export const SchemaDirectives = gql`
	directive @hasRole(role: String) on FIELD_DEFINITION
`

export const schemaDirectives = {
	hasRole,
}
