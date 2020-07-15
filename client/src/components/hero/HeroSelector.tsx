import React, { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

import { Header, Title, HeroBadge, Card, LoadingBoundary, PlaceHolder } from '..'
import { replaceUnderscores } from '../../util'
import { Heroes, Role } from '../../model'

export const GET_HEROES = gql`
	query Heroes($role: String) {
		heroes(role: $role) {
			id
			name
			role
		}
	}
`

const CARD_HEIGHT = 130

interface Props {
	name?: string
}

const getHeroCount = (role: Role): number => {
	switch (role) {
		case Role.tank:
			return 8
		case Role.damage:
			return 17
		case Role.support:
			return 7
		default:
			return 8
	}
}

export const HeroSelector: FC<Props> = ({ name = 'heroIds' }) => {

	const [field] = useField(name)
	const [roleField] = useField('role')
	const { setFieldValue } = useFormikContext()

	const { data, loading } = useQuery<Heroes>(GET_HEROES, {
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
				<LoadingBoundary
					loading={loading}
					fallBack={
						<PlaceHolder
							count={getHeroCount(roleField.value)}
							height={CARD_HEIGHT}
						/>
					}
				>
					{ data?.heroes.map((hero) => (
						<Card
							key={hero.id}
							height={CARD_HEIGHT}
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
				</LoadingBoundary>
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
