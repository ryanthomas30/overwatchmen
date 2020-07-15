import React, { FC, useEffect } from 'react'
import { useField, useFormikContext } from 'formik'

import { Flexbox, NumberInput, Header, Title } from '.'
import { useCurrentSkillRating } from '../apollo'
import { getAuthUser } from '../localStorage'
import { UserSkillRating_user_skillRating } from '../model'

interface Props {
	name?: string
}

const getSkillRatingByRole = (role: string, skillRating?: UserSkillRating_user_skillRating | null) => {
	switch (role) {
		case 'tank':
			return skillRating?.tank
		case 'damage':
			return skillRating?.damage
		case 'support':
			return skillRating?.support
		default:
			return skillRating?.tank
	}
}

export const SkillRatingInput: FC<Props> = ({ name = 'skillRating' }) => {
	const user = getAuthUser()
	const { setFieldValue } = useFormikContext()
	const { data, loading } = useCurrentSkillRating(user?.uid)
	const [, { error, touched }] = useField(name)
	const [roleField] = useField('role')

	const skillRating = data?.user.skillRating

	useEffect(() => {
		if (!loading) setFieldValue(name, getSkillRatingByRole(roleField.value, skillRating))
	},
	[skillRating, loading, roleField.value, data, name, setFieldValue])

	return (
		<Flexbox
			full='horizontal'
			marginBetween='medium'
		>
			<Header
				align='baseline'
				marginBetween='small'
			>
				<Title
					tag='h1'
					italic
				>
					Skill Rating
				</Title>
				<Title
					tag='h3'
					italic
					color='#e06767'
				>
					{touched && error}
				</Title>
			</Header>
			<Flexbox
				align='start'
				full='horizontal'
			>
				<NumberInput
					name={name}
					width={300}
					placeHolder='Enter a skill rating'
				/>
			</Flexbox>
		</Flexbox>
	)
}
