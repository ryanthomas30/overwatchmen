import React, { FC } from 'react'
import { Flexbox, RecentMatchCard } from '../index'
import { useQuery, gql } from '@apollo/client'
import { getAuthUser } from '../../localStorage'
import { UserMatches, UserMatchesVariables } from '../../model'

export const GET_USER_MATCHES = gql`
	query UserMatches($userId: ID!) {
		user(userId:$userId) {
			matches {
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
export const RecentMatches: FC = () => {
	const user = getAuthUser()
	const { loading, data } = useQuery<UserMatches, UserMatchesVariables>(GET_USER_MATCHES, {
		variables: {
			userId: user!.uid,
		},
	})
	if (loading) return null

	return (
		<Flexbox
			full='horizontal'
			direction='row'
			paddingVertical='medium'
			justify='start'
			marginBetween='medium'
			wrap
		>
			{data?.user.matches.map(match => (
				<RecentMatchCard
					key={match.id}
					match={match}
				/>
			))}
		</Flexbox>
	)
}
