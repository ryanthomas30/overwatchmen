import React from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface IconProps extends FontAwesomeIconProps {
	color?: string
	className?: string
}

const UnstyledIcon = ({ color = '#827F7F', className, ...other }: IconProps) => (
	<FontAwesomeIcon
		color={color}
		className={className}
		{...other}
	/>
)

const Icon = styled(UnstyledIcon)`
	cursor: pointer;
`

export default Icon
