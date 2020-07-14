import React, { FC } from 'react'
import { useFormikContext, useField } from 'formik'
import { Header, Title, Card, SelectorGrid } from '..'

import { theme } from '../../constants'
import { MatchResult } from '../../model'

interface Props {
	name?: string
}

export const MatchResultSelector: FC<Props> = ({ name = 'result' }) => {
	const [field, { error, touched }] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: string )=> {
		setFieldValue(name, value)
	}

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
					Match Result
				</Title>
				<Title
					tag='h3'
					italic
					color='#e06767'
				>
					{touched && error}
				</Title>
			</Header>
			<SelectorGrid>
				<Card
					center
					transition
					padding='medium'
					active={field.value === MatchResult.win}
					onClick={() => handleSelect(MatchResult.win)}
				>
					<Title
						italic
						color={field.value === MatchResult.win ? 'white' : theme.gray}
					>
						Win
					</Title>
				</Card>
				<Card
					center
					transition
					padding='medium'
					active={field.value === MatchResult.loss}
					onClick={() => handleSelect(MatchResult.loss)}
				>
					<Title
						italic
						color={field.value === MatchResult.loss ? 'white' : theme.gray}
					>
						Loss
					</Title>
				</Card>
				<Card
					center
					transition
					padding='medium'
					active={field.value === MatchResult.draw}
					onClick={() => handleSelect(MatchResult.draw)}
				>
					<Title
						italic
						color={field.value === MatchResult.draw ? 'white' : theme.gray}
					>
						Draw
					</Title>
				</Card>
			</SelectorGrid>
		</>
	)
}
