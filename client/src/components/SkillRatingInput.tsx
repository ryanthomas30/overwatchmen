import React from 'react'
import { Flexbox, NumberInput, Header, Title } from '.'

const SkillRatingInput = () => (
	<>
		<Header>
			<Title
				tag='h1'
				italic
			>
				Skill Rating
			</Title>
		</Header>
		<Flexbox
			align='start'
			full='horizontal'
		>
			<NumberInput
				name='skillRating'
				width={300}
				placeHolder='Enter a skill rating'
			/>
		</Flexbox>
	</>
)

export default SkillRatingInput
