import React, { FC } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'
import moment from 'moment'

import { Card, Title, Header, Flexbox, MapCardContent, RoleBadge, HeroBadge } from '../'
import { theme } from '../../constants'
import { UserMatches_user_tankMatches, UserMatches_user_damageMatches, UserMatches_user_supportMatches, MatchResult } from '../../model'

interface Props {
	match: UserMatches_user_tankMatches | UserMatches_user_damageMatches | UserMatches_user_supportMatches
}

const getResultColor = (result: MatchResult) => {
	switch (result) {
		case MatchResult.win:
			return theme.green
		case MatchResult.loss:
			return theme.red
		case MatchResult.draw:
			return theme.yellow
		default:
			return theme.yellow
	}
}

export const RecentMatchCard: FC<Props> = ({ match }) => {
	const heroes = match.heroes.slice(0, 4)
	const hasHeroes = heroes.length !== 0
	return (
		<MatchCard
			wrap={false}
			full='vertical'
		>
			<MapCardContent mapName={match.map?.name} />
			<Flexbox
				full='horizontal'
				justify='between'
				flex
			>
				<Flexbox
					full='horizontal'
					padding='small'
					marginBetween='medium'
				>
					<Header marginBetween='small' >
						<RoleBadge
							role={match.role}
							size={48}
						/>
						<Title italic >
							{match.skillRating}
						</Title>
					</Header>
					<Header
						justify={hasHeroes ? 'start' : 'center'}
						marginBetween='small'
					>
						{ hasHeroes && heroes ? heroes?.map(hero => (
							<HeroBadge
								key={hero?.name}
								hero={hero?.name}
								size={36}
							/>
						)) : <Label>No Heroes</Label>}
					</Header>
				</Flexbox>
				<Flexbox
					full='horizontal'
					marginBetween='small'
					justify='end'
				>
					<Header
						justify='end'
						paddingHorizontal='small'
					>
						<Tooltip
							title={moment(match.endTime).format('M/D/YYYY, h:mm A')}
							size='small'
						>
							<TimeLabel>
								{moment(match.endTime).fromNow(true)}
							</TimeLabel>
						</Tooltip>
					</Header>
					<Header
						style={{ backgroundColor: getResultColor(match.result) }}
						justify='center'
						paddingVertical={4}
					>
						<Title
							tag='h4'
							color='white'
						>
							{match.result}
						</Title>
					</Header>
				</Flexbox>
			</Flexbox>
		</MatchCard>
	)
}

const MatchCard = styled(Card)`
	overflow: hidden;
	position: relative;
`

const Label = styled.label`
	color: #A8A8A8;
	font-size: 14px;
	font-style: italic;
	font-family: 'Nunito Sans';
`

const TimeLabel = styled(Label)`
	font-size: 12px;
`

