import React, { FC } from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface IconProps extends FontAwesomeIconProps {
	color?: string
	className?: string
}

const BaseIcon: FC<IconProps> = ({ color = '#827F7F', className, ...other }) => (
	<FontAwesomeIcon
		color={color}
		className={className}
		{...other}
	/>
)

export const Icon = styled(BaseIcon)`
	cursor: pointer;
`

