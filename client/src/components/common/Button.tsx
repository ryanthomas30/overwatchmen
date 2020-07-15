import React, { CSSProperties, ReactNode, useContext, FC } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { theme } from '../../constants'
import { Flexbox } from './Flexbox'
import { Icon } from './Icon'
import { Link } from './Link'

export interface ButtonProps {
	children?: ReactNode
	label?: ReactNode
	path?: string
	onClick?: (event?: any) => void
	icon?: IconProp | ReactNode
	color?: string
	flat?: boolean
	primary?: boolean
	full?: boolean
	disabled?: boolean
	type?: 'button' | 'reset' | 'submit'
	className?: string
	style?: CSSProperties
}

const BaseButton: FC<ButtonProps> = (props) => {
	const { children, label, path, onClick, full, disabled, icon, type = 'button', style, className } = props
	const theme = useContext(ThemeContext)
	const labelNode = (!!children || !!label) && <Flexbox>{children || label}</Flexbox>
	const iconNode = !!icon && typeof icon === 'string' ? (
		<Flexbox>
			<Icon
				icon={icon as IconProp}
				color={theme.yellow}
			/>
		</Flexbox>
	) : (
		<>{icon}</>
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

export const Button = styled(BaseButton)`
	user-select: none;
	border-style: none;
	cursor: pointer;
	padding: 0px 20px;
	border-radius: 10px;
	min-width: 74px;
	height: 44px;
	background-color: ${({ primary }) => primary ? theme.lightBlue : 'white'};
	box-shadow: ${({ flat }) => !flat ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : undefined};
	transition: ${theme.transition};
	opacity: ${({ disabled }) => disabled ? 0.6 : 'inherit'};
	&:focus {
		outline: none;
	}
	/* Button Text */
	color: ${({ primary }) => primary ? 'white' : theme.gray};
	font-family: 'Nunito Sans';
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: nowrap;
	&:hover {
		color: ${({ primary }) => primary ? 'white' : '#272727'};
		background-color: ${({ primary }) => primary ? '#2C96FF' : '#FAFAFA'};
	}
`
