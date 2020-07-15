import React, { FC } from 'react'

import { Title, SelectorGrid, Card, RoleBadge } from '..'

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
}

export const SkillRatingCards: FC<Props> = ({ tank = '--', damage = '--', support = '--' }) => (
	<SelectorGrid>
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
	</SelectorGrid>
)
