import React, { ReactNode, CSSProperties } from 'react'

import styled from 'styled-components'
import { theme } from '../constants'

type Props = {
	children?: ReactNode
	tag? : 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	error?: boolean
	className?: string
	style?: CSSProperties
	color?: string
	size?: number
	italic?: boolean
}

const Title = ({ children, tag = 'h1', className, style }: Props) => {
	const Element = tag!
	return (
		<Element
			className={className}
			style={style}
		>
			{children}
		</Element>
	)
}

const styledTitle = styled(Title)`
	margin: 0px;
	color: ${({ color = theme.gray }) => color};
	font-size: ${({ size }) => `${size}px`};
	user-select: none;
	font-family: 'Koverwatch';
	letter-spacing: 1px;
	font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
	font-weight: normal;
`

export default styledTitle
