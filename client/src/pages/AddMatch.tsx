import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import * as Yup from 'yup'

import { CreateMatch, CreateMatchVariables, Role, MatchResult } from '../model'
import { getAuthUser } from '../localStorage'

import { GET_USER_MATCHES } from '../components/RecentMatches'
import { DateTimeSelector, Page, RoleSelector, Flexbox, MapSelector,
	SkillRatingInput, Form, MatchResultSelector, HeroSelector, Button,
} from '../components'

const CREATE_MATCH = gql`
	mutation CreateMatch($newMatch: NewMatch!, $userId: ID!) {
		addMatchToUser(newMatch: $newMatch, userId: $userId) {
			id
		}
	}
`

interface FormValues {
	role: Role
	heroIds: string[]
	mapId: string
	skillRating: number
	result: MatchResult
	endTime: Date
}

const AddMatch = () => {
	const user = getAuthUser()

	const [createMatch, { loading }] = useMutation<CreateMatch, CreateMatchVariables>(CREATE_MATCH, {
		awaitRefetchQueries: true,
		refetchQueries: [{ query: GET_USER_MATCHES, variables: { userId: user!.uid } }],
		onCompleted: () => {
			history.push('/app/home')
		},
	})

	const history = useHistory()

	const initialValues: FormValues = {
		skillRating: 0,
		heroIds: [],
		mapId: '',
		role: Role.tank,
		result: MatchResult.win,
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
		createMatch({
			variables: {
				newMatch: {
					...values,
				},
				userId: user!.uid,
			},
		})
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
						<MatchResultSelector />
						<DateTimeSelector />
						<Button
							type='submit'
							primary
							disabled={Object.values(errors).some(e => e !== '') || loading}
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
