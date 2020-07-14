import React, { FC } from 'react'

import { Badge, BadgeProps } from '..'
import { Role } from '../../model'

import tank from '../../assets/roleIcons/tank.png'
import damage from '../../assets/roleIcons/damage.png'
import support from '../../assets/roleIcons/support.png'

const roleMap = {
	tank,
	damage,
	support,
}

interface Props extends BadgeProps {
	role: Role
}

export const RoleBadge: FC<Props> = ({ role, ...other }) => {
	const icon = roleMap[role]
	return (
		<Badge {...other} >
			<img
				src={icon}
				alt={`${role}_icon`}
				height='100%'
				width='100%'
			/>
		</Badge>
	)
}
