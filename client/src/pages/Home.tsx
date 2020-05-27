import React from 'react'

import { Card, Title, Page, HeroBadge, Chart } from '../components'

const Home = () => (
	<Page
		align='center'
		justify='center'
		padding='large'
		marginBetween='medium'
	>
		<Card
			full
			padding='medium'
			direction='row'
			justify='between'
		>
			<Title
				tag='h1'
				italic
			>
				Home
			</Title>
			<HeroBadge
				hero='zenyatta'
				active
			/>
		</Card>
		<Card
			full
			padding='medium'
			justify='between'
		>
			<Chart />
		</Card>
	</Page>
)

export default Home
