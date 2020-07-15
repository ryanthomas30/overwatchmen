import React from 'react'

import { useQuery } from '@apollo/client'

import { getAuthUser } from '../localStorage'
import { Flexbox, Header, Title, Page, RecentMatches, SkillRatingCards } from '../components'
import { UserSkillRating, UserSkillRatingVariables } from '../model'
import { GET_USER_SR } from '../apollo'

const Home = () => {
	const user = getAuthUser()
	const { loading, data } = useQuery<UserSkillRating, UserSkillRatingVariables>(GET_USER_SR, {
		skip: !user,
		variables: {
			userId: user?.uid || '0',
		},
	})
	return (
		<Page
			align='center'
			justify='center'
			padding='large'
			marginBetween='large'
		>
			<Flexbox
				full='horizontal'
				marginBetween='medium'
			>
				<Header>
					<Title
						tag='h1'
						italic
					>
						Current Skill Rating
					</Title>
				</Header>

				<SkillRatingCards
					tank={data?.user.skillRating?.tank}
					damage={data?.user.skillRating?.damage}
					support={data?.user.skillRating?.support}
					loading={loading}
				/>
			</Flexbox>
			<Flexbox
				full='horizontal'
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
			</Flexbox>
		</Page>
	)
}

export default Home
