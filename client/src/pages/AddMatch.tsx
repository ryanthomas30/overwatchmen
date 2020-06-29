import React from 'react'
import moment from 'moment'

import { DateTimePicker, Page, RoleSelector, Flexbox, MapSelector, SkillRatingInput, Form, MatchResult, HeroSelector, Button } from '../components'

interface FormValues {
	skillRating: number
	heroIds: string[]
	mapId: string
	role: string
	result: string
	endTime: string | moment.Moment
}

const AddMatch = () => {
	const initialValues:FormValues = {
		skillRating: 0,
		heroIds: [],
		mapId: '',
		role: '',
		result: '',
		endTime: moment(),
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
					<DateTimePicker />
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
