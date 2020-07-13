import React, { FC } from 'react'
import styled from 'styled-components'

import { Flexbox } from '..'
import { Role } from '../../model'

import tank from '../../assets/roleIcons/tank.png'
import damage from '../../assets/roleIcons/damage.png'
import support from '../../assets/roleIcons/support.png'

const roleMap = {
	tank,
	damage,
	support,
}

interface Props {
	role: Role
	active?: boolean
	size?: number
	className?: string
}

const BaseRoleBadge: FC<Props> = ({ role, size = 72, className }) => {
	const icon = roleMap[role]
	return (
		<Flexbox
			align='center'
			justify='center'
			height={size}
			width={size}
			padding={size / 6}
			className={className}
		>
			<img
				src={icon}
				alt={`${role}_icon`}
				height='100%'
				width='100%'
			/>
		</Flexbox>
	)
}

export const RoleBadge = styled(BaseRoleBadge)`
	border-radius: 50%;
	overflow: hidden;
	background-color: ${({ theme, active }) => active ? theme.yellow : theme.gray};
`
