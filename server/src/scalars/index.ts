import { gql } from 'apollo-server'
import DateTime from './DateTime'

export const Scalars = gql`
	scalar DateTime
`

export const scalarResolvers = {
	DateTime,
}
