import React, { FC } from 'react'
import { Header, Title, SelectorGrid, RoleBadge, Card } from '..'
import { useField, useFormikContext } from 'formik'

import { Role } from '../../model'

interface Props {
	name: string
}

export const RoleSelector: FC<Props> = ({ name = 'role' }) => {
	const [field, { error, touched }] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: Role) => {
		setFieldValue(name, value)
		setFieldValue('heroIds', [])
	}

	return (
		<>
			<Header
				align='baseline'
				marginBetween='small'
			>
				<Title
					tag='h1'
					italic
				>
					Role
				</Title>
				<Title
					tag='h3'
					italic
					color='#e06767'
				>
					{touched && error}
				</Title>
			</Header>
			<SelectorGrid>
				<Card
					center
					padding='medium'
					onClick={() => handleSelect(Role.tank)}
				>
					<RoleBadge
						role={Role.tank}
						active={field.value === Role.tank}
					/>
				</Card>
				<Card
					center
					padding='medium'
					onClick={() => handleSelect(Role.damage)}
				>
					<RoleBadge
						role={Role.damage}
						active={field.value === Role.damage}
					/>
				</Card>
				<Card
					center
					padding='medium'
					onClick={() => handleSelect(Role.support)}
				>
					<RoleBadge
						role={Role.support}
						active={field.value === Role.support}
					/>
				</Card>
			</SelectorGrid>
		</>
	)
}
