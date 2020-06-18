import React from 'react'
import { Header, Title, HeroBadge, Card } from '.'
import { HeroName } from '../model'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

const HeroGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
	gap: 10px;
`

interface Props {
	name?: string
	heroes: HeroName[]
}

const HeroSelector = ({ name = 'heroIds', heroes }: Props) => {
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: HeroName) => {
		if (field.value.includes(value)) {
			setFieldValue(name, field.value.filter((hero: HeroName) => hero !== value))
		} else {
			setFieldValue(name, [...field.value, value])
		}
	}

	return (
		<>
			<Header>
				<Title
					tag='h1'
					italic
					color='white'
				>
					Heroes
				</Title>
			</Header>
			<HeroGrid>
				{heroes.map(hero =>(
					<Card
						key={hero}
						padding='small'
						center
						marginBetween='small'
						onClick={()=> { handleSelect(hero) }}
					>
						<HeroBadge
							hero={hero}
							active={field.value.includes(hero)}
							size={72}
						/>
						<Title tag='h4' >
							{hero}
						</Title>
					</Card>))}
			</HeroGrid>
		</>
	)
}

export default HeroSelector
