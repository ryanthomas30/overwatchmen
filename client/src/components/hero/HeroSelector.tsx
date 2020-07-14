import React, { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

import { Header, Title, HeroBadge, Card } from '..'
import { replaceUnderscores } from '../../util'
import { Heroes } from '../../model'

export const GET_HEROES = gql`
	query Heroes($role: String) {
		heroes(role: $role) {
			id
			name
			role
		}
	}
`

interface Props {
	name?: string
}

export const HeroSelector: FC<Props> = ({ name = 'heroIds' }) => {

	const [field] = useField(name)
	const [roleField] = useField('role')
	const { setFieldValue } = useFormikContext()

	const { loading, data } = useQuery<Heroes>(GET_HEROES, {
		variables: { role: roleField.value },
	})

	const handleSelect = (value: string) => {
		if (field.value.includes(value)) {
			setFieldValue(name, field.value.filter((hero: string) => hero !== value))
		} else {
			setFieldValue(name, [...field.value, value])
		}
	}

	return (
		<>
			{ data?.heroes.length !== 0 &&
				<Header>
					<Title
						tag='h1'
						italic
					>
						Heroes
					</Title>
				</Header>
			}
			<HeroGrid>
				{ !loading && data?.heroes.map((hero) => (
					<Card
						key={hero.id}
						padding='small'
						center
						transition
						marginBetween='small'
						onClick={()=> { handleSelect(hero.id) }}
					>
						<HeroBadge
							hero={hero.name}
							active={field.value.includes(hero.id)}
							size={72}
						/>
						<Title tag='h4' >
							{replaceUnderscores(hero.name)}
						</Title>
					</Card>
				))}
			</HeroGrid>
		</>
	)
}

const HeroGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
	gap: 10px;
`
