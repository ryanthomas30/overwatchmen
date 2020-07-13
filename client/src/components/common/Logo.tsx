import React, { FC } from 'react'

import logo from '../../assets/overwatchmen_logo.png'
import { Flexbox } from './Flexbox'
import { Title } from './Title'

interface LogoComponentProps {
	size: number
	className?: string
	inverted?: boolean
}

export const LogoImage = ({ size = 72 }: LogoComponentProps) => (
	<>
		<img
			src={logo}
			width={size}
			height={size}
			alt='overwatchmen_logo'
		/>
	</>
)

interface Props {
	image?: boolean
	title?: boolean
	scale?: number
	onClick?: (event?: any) => void
}

export const Logo: FC<Props> = ({ image = true, title = true, scale = 1, onClick }) => {
	const IMAGE_SIZE = 44
	const TITLE_SIZE = 40
	const MARGIN_BETWEEN = 12
	return (
		<Flexbox
			direction='row'
			align='center'
			marginBetween={MARGIN_BETWEEN * scale}
			onClick={onClick}
		>
			{image && <LogoImage size={IMAGE_SIZE * scale} />}
			{title &&
			<Title
				size={TITLE_SIZE * scale}
				color='white'
			>
				Overwatchmen
			</Title>
			}
		</Flexbox>
	)
}
