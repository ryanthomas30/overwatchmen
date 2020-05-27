import React from "react";
import styled from "styled-components";

import { Card, Title, Page, Header, RoleBadge, Flexbox, NumberInput, Form } from '../components'

const RoleGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const ResultGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(3, 1fr);
	gap: 48px;
`

const AddMatch = () => {
	const initialValues = {
		skillRating: null,
	}

	const onSubmit = (values: typeof initialValues) => {
		console.log('values:', values)
	}

	return (
		<Page>
			<Form
				initialValues={initialValues}
				onSubmit={onSubmit}
			>
				<Flexbox
					align='center'
					justify='center'
					padding='large'
					marginBetween='medium'
				>
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
						>
							<RoleBadge
								role='tank'
								active
							/>
						</Card>
						<Card
							center
							padding='medium'
						>
							<RoleBadge role='damage' />
						</Card>
						<Card
							center
							padding='medium'
						>
							<RoleBadge role='support' />
						</Card>
					</ResultGrid>
					<Header>
						<Title
							tag='h1'
							italic
							color='white'
						>
							Heroes
						</Title>
					</Header>
					<Header>
						<Title
							tag='h1'
							italic
							color='white'
						>
							Map
						</Title>
					</Header>
					<Header>
						<Title
							tag='h1'
							italic
							color='white'
						>
							Skill Rating
						</Title>
					</Header>
					<Flexbox
						align='start'
						full='horizontal'
					>
						<NumberInput
							name='skillRating'
							width={300}
							placeHolder='Enter a skill rating'
						/>
					</Flexbox>
					<Header>
						<Title
							tag='h1'
							italic
							color='white'
						>
							Match Result
						</Title>
					</Header>
					<ResultGrid>
						<Card
							center
							padding='medium'
						>
							<Title italic >Win</Title>
						</Card>
						<Card
							center
							padding='medium'
						>
							<Title italic >Loss</Title>
						</Card>
						<Card
							center
							padding='medium'
						>
							<Title italic >Draw</Title>
						</Card>
					</ResultGrid>
				</Flexbox>
			</Form>
		</Page>
	)
}

export default AddMatch;
