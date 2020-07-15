import React, { FC } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

import { Flexbox } from '..'
import { theme } from '../../constants'

export interface BadgeProps {
	active?: boolean
	size?: number
	title?: string
	className?: string
}

const BaseBadge: FC<BadgeProps> = ({ children, size = 72, title, className }) => (
	<Tooltip
		title={title}
		size='small'
	>
		<Flexbox
			align='center'
			justify='center'
			height={size}
			width={size}
			padding={size / 6}
			title={title}
			className={className}
		>
			{children}
		</Flexbox>
	</Tooltip>
)

export const Badge = styled(BaseBadge)`
	border-radius: 50%;
	overflow: hidden;
	transition: ${theme.transition};
	background-color: ${({ active }) => active ? theme.yellow : theme.gray};
`
