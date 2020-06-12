import { gql } from '@apollo/client'

export const GET_HEROES = gql`
  query Heroes{
    heroes{
      id
      name
      role
    }
  }
`

