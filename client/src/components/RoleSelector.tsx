import React from 'react'
import { Header, Title, ResultGrid, RoleBadge, Card } from '.'
import { useField, useFormikContext } from 'formik'

interface RoleInterface {
	name: string
}

const RoleSelector = ({ name = 'role' } : any) => {
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleSelect = (value:string) => {
		setFieldValue(name, value)
	}
	return (
		<>
			<Header>
				<Title
					tag='h1'
					italic
					color='white'
				>
					Role
				</Title>
			</Header>
			<ResultGrid>

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

			</ResultGrid>
		</>
	)
}
export default RoleSelector
