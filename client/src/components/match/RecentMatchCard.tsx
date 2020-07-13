import React, { FC } from 'react'
import styled from 'styled-components'

import { Card, Title, Header, Flexbox, MapCardContent, RoleBadge, HeroBadge, Divider } from '../'
import { theme } from '../../constants'
import { UserMatches_user_matches, MatchResult } from '../../model'

interface Props {
	match: UserMatches_user_matches
}

const MatchCard = styled(Card)`
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
					<Header justify='between' >
						<RoleBadge
							role={match.role}
							size={44}
						/>
						<Divider padding='small' />
						<Title>
							{match.skillRating}
						</Title>
					</Header>
					<Header
						wrap
						justify='start'
						marginBetween='small'
					>
						{match.heroes?.slice(0, 4).map(hero => (
							<HeroBadge
								key={hero?.name!}
								hero={hero?.name!}
								size={36}
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
		</MatchCard>
	)
}
