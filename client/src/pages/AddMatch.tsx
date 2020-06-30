import React from 'react'

import { Page, RoleSelector, Flexbox, MapSelector, SkillRatingInput, Form, MatchResult, HeroSelector, Button } from '../components'

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
					<HeroSelector />
					<MapSelector />
					<SkillRatingInput />
					<MatchResult />
					<Button
						type='submit'
						primary
					>
						Add Match
					</Button>
				</Flexbox>

			</Form>
		</Page>
	)
}

export default AddMatch
