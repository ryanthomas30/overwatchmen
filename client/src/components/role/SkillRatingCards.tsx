import React, { FC } from 'react'

import { Title, SelectorGrid, Card, RoleBadge, LoadingBoundary, PlaceHolder } from '..'

import { Role } from '../../model'

interface Props {
	/**
	 * Tank skill rating.
	 */
	tank?: number | null
	/**
	 * Damage skill rating.
	 */
	damage?: number | null
	/**
	 * Support skill rating.
	 */
	support?: number | null
	loading?: boolean
}

export const SkillRatingCards: FC<Props> = ({ tank = '--', damage = '--', support = '--', loading }) => (
	<SelectorGrid>
		<LoadingBoundary
			loading={loading}
			fallBack={
				<PlaceHolder
					count={3}
					height={120}
				/>
			}
		>
			<Card
				center
				padding='medium'
				marginBetween='small'
				direction='row'
			>
				<RoleBadge
					role={Role.tank}
				/>
				<Title
					italic
					size={44}
				>
					{tank}
				</Title>
			</Card>
			<Card
				center
				padding='medium'
				marginBetween='small'
				direction='row'
			>
				<RoleBadge
					role={Role.damage}
				/>
				<Title
					italic
					size={44}
				>
					{damage}
				</Title>
			</Card>
			<Card
				center
				padding='medium'
				marginBetween='small'
				direction='row'
			>
				<RoleBadge
					role={Role.support}
				/>
				<Title
					italic
					size={48}
				>
					{support}
				</Title>
			</Card>
		</LoadingBoundary>
	</SelectorGrid>
)
