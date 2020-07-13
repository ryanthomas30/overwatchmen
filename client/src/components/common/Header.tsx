import React, { FC } from 'react'

import { Flexbox, FlexboxProps } from './Flexbox'

export const Header: FC<FlexboxProps> = ({ children, ...other }: FlexboxProps) => (
	<Flexbox
		full='horizontal'
		direction='row'
		align='center'
		{...other}
	>
		{children}
	</Flexbox>
)
