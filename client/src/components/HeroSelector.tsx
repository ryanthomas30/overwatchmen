import React from 'react'
import { Header, Title, HeroBadge, Card } from '.'
import { HeroName } from './HeroBadge'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

const heroes : HeroName[] = ['bastion', 'dva', 'genji', 'hanzo', 'junkrat', 'lucio', 'mccree', 'mei', 'mercy', 'pharah', 'reaper', 'reinhardt', 'roadhog', 'soldier76', 'symmetra', 'torbjorn', 'tracer', 'widowmaker', 'winston', 'zarya', 'zenyatta']

const HeroGrid = styled.div`
  display:grid;
  width:100%;
  height:100%;
  grid-auto-flow:column;
  gap: 10px;
`
const HeroSelector = () => {
	const [field] = useField('heroIds')
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: HeroName) => {
		if (field.value.includes(value)) {
			setFieldValue('heroIds', field.value.filter((hero:HeroName) => hero !== value))
		} else {
			setFieldValue('heroIds', [...field.value, value])
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
						padding='medium'
						center
						marginBetween='small'
						onClick={()=> { handleSelect(hero) }}
					>
						<HeroBadge
							hero={hero}
							active={field.value.includes(hero)}
						/>
						<Title tag='h2'>
							{hero}
						</Title>
					</Card>))}

			</HeroGrid>
		</>
	)
}

export default HeroSelector

