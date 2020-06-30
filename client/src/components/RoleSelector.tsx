import React from 'react'
import { Header, Title, SelectorGrid, RoleBadge, Card } from '.'
import { useField, useFormikContext } from 'formik'

interface Props {
	name: string
}

const RoleSelector = ({ name = 'role' }: Props) => {
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value: string) => {
		setFieldValue(name, value)
		setFieldValue('heroIds', [])
	}
	return (
		<>
			<Header>
				<Title
					tag='h1'
					italic
				>
					Role
				</Title>
			</Header>
			<SelectorGrid>

				<Card
					center
					padding='medium'
					onClick={() => handleSelect('tank')}
				>
					<RoleBadge
						role='tank'
						active={field.value === 'tank'}
					/>
				</Card>

				<Card
					center
					padding='medium'
					onClick={() => handleSelect('damage')}
				>
					<RoleBadge
						role='damage'
						active={field.value === 'damage'}
					/>
				</Card>

				<Card
					center
					padding='medium'
					onClick={() => handleSelect('support')}
				>
					<RoleBadge
						role='support'
						active={field.value === 'support'}
					/>
				</Card>

			</SelectorGrid>
		</>
	)
}
export default RoleSelector
