import React, { CSSProperties, ReactNode, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Flexbox from './Flexbox'
import Icon from './Icon'
import Link from './Link'

export interface ButtonProps {
	children?: ReactNode
	label?: ReactNode
	path?: string
	onClick?: (event?: any) => void
	icon?: IconProp
	color?: string
	full?: boolean
	disabled?: boolean
	type?: 'button' | 'reset' | 'submit'
	className?: string
	style?: CSSProperties
}

const UnstyledButton = (props: ButtonProps) => {
	const { children, label, path, onClick, full, disabled, icon, type = 'button', style, className } = props
	const theme = useContext(ThemeContext)
	const labelNode = (!!children || !!label) && <Flexbox>{children || label}</Flexbox>
	const iconNode = !!icon && (
		<Flexbox>
			<Icon
				icon={icon}
				color={theme.yellow}
			/>
		</Flexbox>
	)

	const buttonInner = (
		<Flexbox
			className={className}
			justify='center'
			align='center'
			marginBetween='small'
			direction='row'
			wrap={false}
			full={full && 'horizontal'}
			onClick={onClick && !disabled ? () => onClick() : undefined }
			tag='button'
			type={type}
			style={style}
		>
			{iconNode}
			{labelNode}
		</Flexbox>
	)

	if (path && !disabled) {
		return (
			<Link
				to={path}
				style={{ width: full ? '100%' : '' }}
			>
				{buttonInner}
			</Link>
		)
	}
	return buttonInner
}

const Button = styled(UnstyledButton)`
	user-select: none;
	border-style: none;
	cursor: pointer;
	padding: 0px 20px;
	border-radius: 10px;
	min-width: 74px;
	height: 44px;
	background-color: white;
	transition: all ease-in-out 200ms;
	opacity: ${({ disabled }) => disabled ? 0.6 : 'inherit'};
	&:focus {
		outline: none;
	}
	/* Button Text */
	color: ${({ theme }) => theme.yellow};
	font-family: 'Koverwatch';
	font-size: 24px;
	letter-spacing: 2px;
	font-style: italic;
	white-space: nowrap;
`

export default Button
