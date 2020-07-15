import React, { FC } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import { RecentMatchCard, Header, Title, LoadingBoundary, PlaceHolder, RoleBadge, Flexbox, SparkChart } from '..'
import { getAuthUser } from '../../localStorage'
import { UserMatches, UserMatchesVariables, UserMatches_user_tankMatches,
	UserMatches_user_damageMatches, UserMatches_user_supportMatches, Role,
} from '../../model'
import { GET_USER_MATCHES } from '../../apollo'

type MatchType = UserMatches_user_tankMatches | UserMatches_user_damageMatches | UserMatches_user_supportMatches

const CARD_HEIGHT = 330

export const RecentMatches: FC = () => {
	const user = getAuthUser()
	const { loading, data } = useQuery<UserMatches, UserMatchesVariables>(GET_USER_MATCHES, {
		skip: !user,
		variables: {
			userId: user?.uid || '0',
		},
	})

	const matchCardGrid = (matches?: MatchType[]) => {
		if (!loading && (!matches || matches?.length) === 0) {
			return (
				<Header
					center
					padding='medium'
				>
					<Label>No Recent Matches</Label>
				</Header>
			)
		}
		const matchCards = matches?.map(match => (
			<div key={match.id}>
				<RecentMatchCard
					match={match}
				/>
			</div>
		))
		return (
			<RecentMatchGrid>
				<MatchLoadingBoundary loading={loading} >
					{matchCards}
				</MatchLoadingBoundary>
			</RecentMatchGrid>
		)
	}

	return (
		<Flexbox
			full='horizontal'
			marginBetween='large'
		>
			<Flexbox
				full='horizontal'
				marginBetween='small'
			>
				<Header marginBetween='small' >
					<RoleBadge
						role={Role.tank}
						size={32}
					/>
					<Title
						tag='h2'
						italic
					>
						Tank
					</Title>
				</Header>
				{matchCardGrid(data?.user?.tankMatches)}
			</Flexbox>
			<Flexbox
				full='horizontal'
				marginBetween='small'
			>
				<Header marginBetween='small' >
					<RoleBadge
						role={Role.damage}
						size={32}
					/>
					<Title
						tag='h2'
						italic
					>
						Damage
					</Title>
				</Header>
				{matchCardGrid(data?.user?.damageMatches)}
			</Flexbox>
			<Flexbox
				full='horizontal'
				marginBetween='small'
			>
				<Header marginBetween='small' >
					<RoleBadge
						role={Role.support}
						size={32}
					/>
					<Title
						tag='h2'
						italic
					>
						Support
					</Title>
				</Header>
				{matchCardGrid(data?.user?.supportMatches)}
			</Flexbox>
			<SparkChart
				tankMatches={data?.user.tankMatches}
				damageMatches={data?.user.damageMatches}
				supportMatches={data?.user.supportMatches}
			/>
		</Flexbox>
	)
}

interface MatchLoadingBoundaryProps {
	loading?: boolean
}

const MatchLoadingBoundary: FC<MatchLoadingBoundaryProps> = ({ children, loading }) => (
	<LoadingBoundary
		loading={loading}
		fallBack={
			<PlaceHolder
				count={5}
				height={CARD_HEIGHT}
			/>
		}
	>
		{children}
	</LoadingBoundary>
)

const RecentMatchGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(240px, 240px));
	grid-auto-flow: row;
	grid-template-rows: ${CARD_HEIGHT}px;
`

const Label = styled.label`
	color: #A8A8A8;
	font-size: 14px;
	font-style: italic;
	font-family: 'Nunito Sans';
`
