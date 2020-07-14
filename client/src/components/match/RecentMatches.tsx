import React, { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'

import { RecentMatchCard, Header, Title } from '../'
import { getAuthUser } from '../../localStorage'
import { UserMatches, UserMatchesVariables } from '../../model'
import SparkChart from './SparkChart'

export const GET_USER_MATCHES = gql`
	query UserMatches($userId: ID!) {
		user(userId: $userId) {
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
			<Header>
				<Title
					tag='h2'
					italic
				>
					Tank
				</Title>
			</Header>
			<RecentMatchGrid>
				{data?.user.tankMatches.map(match => (
					<RecentMatchCard
						key={match.id}
						match={match}
					/>
				))}
			</RecentMatchGrid>
			<Header>
				<Title
					tag='h2'
					italic
				>
					Damage
				</Title>
			</Header>
			<RecentMatchGrid>
				{data?.user.damageMatches.map(match => (
					<RecentMatchCard
						key={match.id}
						match={match}
					/>
				))}
			</RecentMatchGrid>
			<Header>
				<Title
					tag='h2'
					italic
				>
					Support
				</Title>
			</Header>
			<RecentMatchGrid>
				{data?.user.supportMatches.map(match => (
					<RecentMatchCard
						key={match.id}
						match={match}
					/>
				))}
			</RecentMatchGrid>
			<SparkChart
				tankMatches={data?.user.tankMatches}
				damageMatches={data?.user.damageMatches}
				supportMatches={data?.user.supportMatches}
			/>
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
