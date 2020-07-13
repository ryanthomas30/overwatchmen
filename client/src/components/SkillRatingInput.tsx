import React, { FC } from 'react'
import { useField } from 'formik'

import { Flexbox, NumberInput, Header, Title } from '.'

interface Props {
	name?: string
}

export const SkillRatingInput: FC<Props> = ({ name = 'skillRating' }) => {
	const [, { error, touched }] = useField(name)
	return (
		<>
			<Header
				align='baseline'
				marginBetween='small'
			>
				<Title
					tag='h1'
					italic
				>
					Skill Rating
				</Title>
				<Title
					tag='h3'
					italic
					color='#e06767'
				>
					{touched && error}
				</Title>
			</Header>
			<Flexbox
				align='start'
				full='horizontal'
			>
				<NumberInput
					name={name}
					width={300}
					placeHolder='Enter a skill rating'
				/>
			</Flexbox>
		</>
	)
}
