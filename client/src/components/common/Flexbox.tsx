import React, { ReactNode, CSSProperties } from 'react'

import styled from 'styled-components'

const sizeMap: any = {
	small: '12px',
	medium: '24px',
	large: '48px',
}

const spacingMap: any = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
}

const getSpacing = (input?: string) => {
	if (!input) return ''
	return input in spacingMap ? spacingMap[input] : input
}

const getSize = (input?: Size) => {
	if (!input) return ''
	return input in sizeMap ? sizeMap[input] : format(input)
}

const format = (value?: string | number) => typeof value === 'number' ? `${value}px` : value

export interface FlexboxProps {
	children?: ReactNode
	direction?: 'row' | 'column'
	justify?: 'start' | 'end' | 'between' | 'center'
	align?: 'start' | 'end' | 'center' | 'baseline'
	center?: boolean
	wrap?: boolean
	flex?: boolean | string | number
	/* Margin */
	margin?: Size
	marginLeft?: Size
	marginRight?: Size
	marginTop?: Size
	marginBottom?: Size
	marginVertical?: Size
	marginHorizontal?: Size
	marginBetween?: Size
	/* Padding */
	padding?: Size
	paddingLeft?: Size
	paddingRight?: Size
	paddingTop?: Size
	paddingBottom?: Size
	paddingVertical?: Size
	paddingHorizontal?: Size
	paddingBetween?: Size
	onClick?: (event?: any) => void
	onBlur?: (event?: any) => void
	shimmer?: boolean
	title?: string
	type?: 'button' | 'reset' | 'submit'
	tag?: 'div' | 'span' | 'form' | 'button'
	className?: string
	height?: number | string
	full?: boolean | 'vertical' | 'horizontal'
	width?: number | string
	minHeight?: number | string
	maxHeight?: number | string
	minWidth?: number | string
	maxWidth?: number | string
	style?: CSSProperties
}

type Size = 'small' | 'medium' | 'large' | number;

const BaseFlexbox = (props: FlexboxProps) => {
	const {
		children,
		justify = '',
		align = 'start',
		center,
		wrap = true,
		/* Margin */
		margin,
		marginLeft,
		marginRight,
		marginTop,
		marginBottom,
		marginVertical,
		marginHorizontal,
		/* Padding */
		padding,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingBottom,
		paddingVertical,
		paddingHorizontal,
		/* Height & Width */
		full,
		height,
		width,
		minHeight,
		maxHeight,
		minWidth,
		maxWidth,
		/* Events */
		onClick,
		onBlur,
		/* Misc */
		shimmer,
		title,
		type,
		tag = 'div',
		className,
		style,
	} = props

	/* FLEX */
	const justifyContent = center ? getSpacing('center') : getSpacing(justify)
	const alignItems = center ? getSpacing('center') : getSpacing(align)
	const flexWrap = wrap ? 'wrap' : 'nowrap'

	/* FULL, HEIGHT, WIDTH */
	interface SizeObject {
		width?: string
		height?: string
		minHeight?: string
		maxHeight?: string
		minWidth?: string
		maxWidth?: string
	}
	const sizeObj: SizeObject = {
		height: format(height),
		width: format(width),
		minHeight: format(minHeight),
		maxHeight: format(maxHeight),
		minWidth: format(minWidth),
		maxWidth: format(maxWidth),
	}

	if (full === true) {
		sizeObj.width = '100%'
		sizeObj.height = '100%'
	} else if (full === 'vertical') {
		sizeObj.height = '100%'
	} else if (full === 'horizontal') {
		sizeObj.width = '100%'
	}

	/* PADDING */
	const paddingObj: any = { padding, paddingLeft, paddingRight, paddingTop, paddingBottom }
	if (paddingVertical) {
		paddingObj.paddingTop = paddingVertical
		paddingObj.paddingBottom = paddingVertical
	}
	if (paddingHorizontal) {
		paddingObj.paddingLeft = paddingHorizontal
		paddingObj.paddingRight = paddingHorizontal
	}
	Object.keys(paddingObj).forEach((k: string) => {
		paddingObj[k] = getSize(paddingObj[k])
	})

	/* MARGIN */
	const marginObj: any = { margin, marginLeft, marginRight, marginTop, marginBottom }
	if (marginVertical) {
		marginObj.marginTop = marginVertical
		marginObj.marginBottom = marginVertical
	}
	if (marginHorizontal) {
		marginObj.marginLeft = marginHorizontal
		marginObj.marginRight = marginHorizontal
	}
	Object.keys(marginObj).forEach(k => {
		marginObj[k] = getSize(marginObj[k])
	})

	/* Merges props with style object */
	const styleObject = {
		display: 'flex',
		boxSizing: 'border-box',
		justifyContent,
		alignItems,
		flexWrap,
		...paddingObj,
		...marginObj,
		...sizeObj,
		...style,
	}

	/* Delete undefined fields */
	Object.keys(styleObject).forEach(key => {
		if (styleObject[key] === undefined || styleObject[key] === '') delete styleObject[key]
	})

	const Element = tag!
	return (
		<Element
			style={styleObject}
			className={`${className}${shimmer ? ' shimmer' : ''}`}
			title={title}
			onClick={onClick}
			onBlur={onBlur}
			type={type}
		>
			{children}
		</Element>
	)
}

export const Flexbox = styled(BaseFlexbox)`
	cursor: ${({ onClick }) => !!onClick && 'pointer'};
	flex-direction: ${({ direction }) => direction || 'column'};
	flex: ${({ flex }) => flex ? 1 : flex};
	> *:not(:last-child) {
		margin-bottom: ${({ direction, marginBetween }) => direction === 'column' || !direction ? getSize(marginBetween) : undefined};
		margin-right: ${({ direction, marginBetween }) => direction === 'row' ? getSize(marginBetween) : undefined};

		padding-bottom: ${({ direction, paddingBetween }) => direction === 'column' || !direction ? getSize(paddingBetween) : undefined};
		padding-right: ${({ direction, paddingBetween }) => direction === 'row' ? getSize(paddingBetween) : undefined};
	}
`
