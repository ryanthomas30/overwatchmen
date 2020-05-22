import React from 'react'
import styled from 'styled-components'

import { Card, Title, Page, Header, RoleBadge, Flexbox } from '../components'

const RoleGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(3, 1fr);
`

const AddMatch = () => (
	<Page
		align='center'
		justify='center'
		padding='large'
		marginBetween='medium'
	>
		<Header >
			<Title
				tag='h1'
				italic
				color='white'
			>
				Role
			</Title>
		</Header>
		<Card
			full
		>
			<RoleGrid>
				<Flexbox
					center
					padding='medium'
				>
					<RoleBadge
						role='tank'
						active
					/>
				</Flexbox>
				<Flexbox
					center
					padding='medium'
				>
					<RoleBadge role='damage' />
				</Flexbox>
				<Flexbox
					center
					padding='medium'
				>
					<RoleBadge role='support' />
				</Flexbox>
			</RoleGrid>
		</Card>
		<Header>
			<Title
				tag='h1'
				italic
				color='white'
			>
				Map
			</Title>
		</Header>
	</Page>
)

export default AddMatch
