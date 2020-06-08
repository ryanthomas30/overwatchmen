import React from 'react'
import { Header, Title, Card, ResultGrid } from '.'
import { useFormikContext, useField } from 'formik'
import { theme } from '../constants'

const MatchResult = ({ name = 'result' }:any) => {
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value:string )=> {
		setFieldValue(name, value)
	}

	return (
		<>
			<Header>
				<Title
					tag='h1'
					italic
					color='white'
				>
					Match Result
				</Title>
			</Header>
			<ResultGrid>
				<Card
					center
					padding='medium'
					active={field.value === 'win'}
					onClick={() => handleSelect('win')}
				>
					<Title
						italic
						color={field.value === 'win' ? 'white' : theme.gray}
					>
						Win

					</Title>
				</Card>
				<Card
					center
					padding='medium'
					active={field.value === 'loss'}
					onClick={() => handleSelect('loss')}
				>
					<Title
						italic
						color={field.value === 'loss' ? 'white' : theme.gray}
					>
						Loss
					</Title>
				</Card>
				<Card
					center
					padding='medium'
					active={field.value === 'draw'}
					onClick={() => handleSelect('draw')}
				>
					<Title
						italic
						color={field.value === 'draw' ? 'white' : theme.gray}
					>
						Draw
					</Title>
				</Card>
			</ResultGrid>
		</>
	)
}

export default MatchResult
