import React from 'react'
import { Card, Title, Flexbox } from './index'
import styled from 'styled-components'

interface Match {match: any; className?: string}

const HoverableCard = styled(Card)`
  width: 180px;
  height: 300px;
  text-align: center;
  &:hover{
    transition: all .15s;
    background-color:#FA9C1E;
  }
`
const RecentMatchCard = ({ match }: Match) => (
	<HoverableCard
		direction='column'
	>
		<img
			src='https://d1u1mce87gyfbn.cloudfront.net/hero/dva/hero-select-portrait.png'
			style={{ alignSelf: 'center', minWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
			alt='f4'
		>
		</img>
		<Flexbox
			padding='small'
			full='horizontal'
		>
			<Title
				tag='h2'
			>
				match
				{' '}
				{match.id}
			</Title>
			<Flexbox
				width='100%'
				direction='row'
				justify='between'
			>
				<Title tag='h3'>
					{match.result}
				</Title>
				<Title tag='h3'>
					{' '}
					{match.skillRating}
					SR
				</Title>
			</Flexbox>
		</Flexbox>
	</HoverableCard>
)

export default RecentMatchCard
