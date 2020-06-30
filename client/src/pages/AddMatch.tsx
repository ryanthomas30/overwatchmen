import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Heroes, Heroes_heroes } from '../model'

import { Page, RoleSelector, Flexbox, MapSelector, SkillRatingInput, Form, MatchResult, HeroSelector, Button } from '../components'

export const GET_HEROES = gql`
	query Heroes($role: String) {
		heroes(role: $role) {
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

	const [role, setRole] = useState('')
	const { loading, data } = useQuery<Heroes>(GET_HEROES, {
		variables: { role },
	})

	return (
		<Page>
			<Form
				initialValues={initialValues}
				onSubmit={onSubmit}
				validate={(values: typeof initialValues) => setRole(values.role)}
			>
				<Flexbox
					align='center'
					justify='center'
					padding='large'
					marginBetween='medium'
				>
					<RoleSelector name='role' />
					{ !loading && data?.heroes?.length !== 0 &&
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
