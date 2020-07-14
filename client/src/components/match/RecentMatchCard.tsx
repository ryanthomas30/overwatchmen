import React, { FC } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Card, Title, Header, Flexbox, MapCardContent, RoleBadge, HeroBadge } from '../'
import { theme } from '../../constants'
import { UserMatches_user_matches, MatchResult } from '../../model'

interface Props {
	match: UserMatches_user_matches
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
	const hasHeroes = match.heroes?.length !== 0
	return (
		<MatchCard>
			<MapCardContent mapName={match.map?.name} />
			<Flexbox
				flex
				full='horizontal'
			>

				<Flexbox
					flex
					full
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
						wrap
						justify={hasHeroes ? 'start' : 'center'}
						marginBetween='small'
					>
						{ hasHeroes ? match.heroes?.slice(0, 4).map(hero => (
							<HeroBadge
								key={hero?.name!}
								hero={hero?.name!}
								size={36}
							/>
						)) : <Label>No Heroes</Label>}
					</Header>
				</Flexbox>
				<Flexbox
					full='horizontal'
					marginBetween='small'
				>
					<Header
						justify='end'
						paddingHorizontal='small'
					>
						<TimeLabel title={moment(match.endTime).format('M/D/YYYY, h:mmA')} >
							{moment(match.endTime).fromNow(true)}
						</TimeLabel>
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

