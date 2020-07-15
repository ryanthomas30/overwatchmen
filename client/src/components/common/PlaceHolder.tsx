import React, { FC } from 'react'

import { Card } from '..'

interface Props {
	count?: number
	flat?: boolean
	height?: number
}

export const PlaceHolder: FC<Props> = ({ count = 5, flat = true, height }) => (
	<>
		{Array.from(Array(count), (_, i) => (
			<Card
				flat={flat}
				shimmer
				height={height}
				key={i}
			>
				&nbsp;
			</Card>
		))}
	</>)

