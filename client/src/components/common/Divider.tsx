import React, { FC } from 'react'
import { Flexbox, FlexboxProps } from './Flexbox'

interface Props extends FlexboxProps {
	color?: string
}

export const Divider: FC<Props> = ({ color = '#f0f0f0', ...props }) => (
	<Flexbox
		{...props}
		style={{ flexGrow: 1 }}
	>
		<hr
			style={{
				backgroundColor: color,
				height: 1,
				border: 'none',
				borderRadius: '50px',
				width: '100%',
			}}
		/>
	</Flexbox>
)

