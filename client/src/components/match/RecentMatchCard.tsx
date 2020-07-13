import React, { FC } from 'react'
import styled from 'styled-components'

import { Card, Title, Header, Flexbox, MapCardContent, RoleBadge, HeroBadge } from '../'
import { theme } from '../../constants'
import { UserMatches_user_matches, MatchResult } from '../../model'

interface Props {
	match: UserMatches_user_matches
}

const HoverableCard = styled(Card)`
	width: 300px;
	height: 350px;
	text-align: center;
	overflow: hidden;
	position: relative;
`

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
	console.log('match:', match)
	return (
		<HoverableCard
			direction='column'
		>
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
							size={54}
						/>
						<Title>
							{match.skillRating}
						</Title>
					</Header>
					<Header
						wrap
						justify='start'
						marginBetween='small'
					>
						{match.heroes?.slice(0, 5).map(hero => (
							<HeroBadge
								hero={hero?.name!}
								size={44}
							/>
						))}
					</Header>
				</Flexbox>
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
		</HoverableCard>
	)
}
