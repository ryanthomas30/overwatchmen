import React from 'react'

import { Card, Title, Page, HeroBadge } from '../components'

const Home = () => (
	<Page
		align='center'
		justify='center'
		padding='large'
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
	</Page>
)

export default Home
