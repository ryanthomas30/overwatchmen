import { gql, useQuery } from '@apollo/client'
import { UserSkillRating, UserSkillRatingVariables } from '../model'

export const GET_USER_SR = gql`
	query UserSkillRating($userId: ID!) {
		user(userId: $userId) {
			id
			skillRating {
				tank
				damage
				support
			}
		}
	}
`
export const useCurrentSkillRating = (userId?: string) => {
	const result = useQuery<UserSkillRating, UserSkillRatingVariables>(GET_USER_SR, {
		skip: !userId,
		variables: {
			userId: userId || '0',
		},
	})
	return result
}

export const GET_USER_MATCHES = gql`
	query UserMatches($userId: ID!) {
		user(userId: $userId) {
			id
			tankMatches: matches(limit: 5, role: "tank") {
				id
				result
				endTime
				heroes {
					id
					name
				}
				role
				map {
					id
					name
					type
				}
				skillRating
			}
			damageMatches: matches(limit: 5, role: "damage") {
				id
				result
				endTime
				heroes {
					id
					name
				}
				role
				map {
					id
					name
					type
				}
				skillRating
			}
			supportMatches: matches(limit: 5, role: "support") {
				id
				result
				endTime
				heroes {
					id
					name
				}
				role
				map {
					id
					name
					type
				}
				skillRating
			}
		}
	}
`
