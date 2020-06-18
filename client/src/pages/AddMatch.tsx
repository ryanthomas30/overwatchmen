import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Heroes, Heroes_heroes } from '../model'
import { HeroName } from '../model'

import { Page, RoleSelector, Flexbox, MapSelector, SkillRatingInput, Form, MatchResult, HeroSelector, Button } from '../components'

export const GET_HEROES = gql`
	query Heroes {
		heroes {
			id
			name
			role
		}
	}
`

const AddMatch = () => {
	const initialValues = {
		skillRating: 0,
		heroIds: [],
		mapId: '',
		role: '',
		result: '',
		endTime: new Date(),
	}

	const onSubmit = (values: typeof initialValues) => {
		console.log('values:', values)
	}

	const { loading, error, data } = useQuery<Heroes>(GET_HEROES)
	console.log('data:', data)
	if (!loading) {
		console.log('error:', error)
		console.log('data:', data!.heroes)
	}

	return (
		<Page>
			<Form
				initialValues={initialValues}
				onSubmit={onSubmit}
			>
				<Flexbox
					align='center'
					justify='center'
					padding='large'
					marginBetween='medium'
				>
					<RoleSelector name='role' />
					{ !loading &&
						<HeroSelector heroes={(data?.heroes?.map(hero => hero) as Heroes_heroes[] )} />
					}
					<MapSelector />
					<SkillRatingInput />
					<MatchResult />
					<Button type='submit'>
						Add Match
					</Button>
				</Flexbox>

			</Form>
		</Page>
	)
}

export default AddMatch
