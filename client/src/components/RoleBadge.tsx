import React from 'react'
import styled from 'styled-components'

import Flexbox from './Flexbox'
import tank from '../assets/roleIcons/tank.png'
import damage from '../assets/roleIcons/damage.png'
import support from '../assets/roleIcons/support.png'

const roleMap = {
	tank,
	damage,
	support,
}

type RoleName = 'tank' | 'damage' | 'support'

interface Props {
	role: RoleName
	active?: boolean
	className?: string
}

const RoleBadge = ({ role, className }: Props) => {
	const icon = roleMap[role]
	return (
		<Flexbox
			align='center'
			justify='center'
			height={72}
			width={72}
			padding='small'
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

const StyledRoleBadge = styled(RoleBadge)`
	border-radius: 50%;
	overflow: hidden;
	background-color: ${({ theme, active }) => active ? theme.yellow : theme.gray};
`

export default StyledRoleBadge
