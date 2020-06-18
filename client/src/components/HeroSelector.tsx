import React from 'react'
import { Header, Title, HeroBadge, Card } from '.'
import { HeroName, Heroes_heroes } from '../model'
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
	heroes: Heroes_heroes[]
}

const HeroSelector = ({ name = 'heroIds', heroes }: Props) => {
	console.log('heroes:', heroes)
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: String) => {
		if (field.value.includes(value)) {
			setFieldValue(name, field.value.filter((hero: String) => hero !== value))
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
						key={hero.id}
						padding='small'
						center
						marginBetween='small'
						onClick={()=> { handleSelect(hero.id) }}
					>
						<HeroBadge
							hero={hero.name}
							active={field.value.includes(hero.id)}
							size={72}
						/>
						<Title tag='h4' >
							{hero.name}
						</Title>
					</Card>))}
			</HeroGrid>
		</>
	)
}

export default HeroSelector
