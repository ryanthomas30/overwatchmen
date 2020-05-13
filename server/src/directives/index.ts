import { gql } from 'apollo-server'
import requireAuth from './requireAuth'

export const SchemaDirectives = gql`
	directive @requireAuth(role: String) on FIELD_DEFINITION
`

export const schemaDirectives = {
	requireAuth,
}
