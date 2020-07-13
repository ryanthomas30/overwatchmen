import React, { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'

import { RecentMatchCard } from '../index'
import { getAuthUser } from '../../localStorage'
import { UserMatches, UserMatchesVariables } from '../../model'
import SparkChart from './SparkChart'

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
		<>
			<RecentMatchGrid>
				{data?.user.matches.map(match => (
					<RecentMatchCard
						key={match.id}
						match={match}
					/>
				))}
			</RecentMatchGrid>
			<SparkChart recentMatches={data?.user.matches} />
		</>
	)
}

const RecentMatchGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	gap: 24px;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 330px
`
