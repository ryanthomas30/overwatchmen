import React from 'react'

import { Header, Title, Page, RecentMatches } from '../components'

const Home = () => (
	<Page
		align='center'
		justify='center'
		padding='large'
		marginBetween='medium'
	>
		<Header>
			<Title
				tag='h1'
				italic
			>
				Recent Matches
			</Title>
		</Header>
		<RecentMatches />
	</Page>
)

export default Home
