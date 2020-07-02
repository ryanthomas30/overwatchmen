import React from 'react'
import * as Yup from 'yup'

import { DateTimeSelector, Page, RoleSelector, Flexbox, MapSelector, SkillRatingInput, Form, MatchResult, HeroSelector, Button } from '../components'

interface FormValues {
	role: string
	heroIds: string[]
	mapId: string
	skillRating: number
	result: string
	endTime: Date
}

const AddMatch = () => {
	const initialValues: FormValues = {
		skillRating: 0,
		heroIds: [],
		mapId: '',
		role: '',
		result: '',
		endTime: new Date(),
	}

	const validationSchema = Yup.object({
		role: Yup.string()
			.required('Required'),
		skillRating: Yup.number()
			.min(1, 'Must be between 1 and 5000')
			.max(5000, 'Must be between 1 and 5000')
			.required('Required'),
		result: Yup.string()
			.required('Required'),
		endTime: Yup.string()
			.required('Required'),
	})

	const onSubmit = (values: typeof initialValues) => {
		console.log('values:', values)
	}

	return (
		<Page>
			<Form
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors }) =>
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
						<DateTimeSelector />
						<Button
							type='submit'
							primary
							disabled={Object.values(errors).some(e => e !== '')}
						>
							Add Match
						</Button>
					</Flexbox>
				}
			</Form>
		</Page>
	)
}

export default AddMatch
