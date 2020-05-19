import React from 'react'

import Flexbox, { FlexboxProps } from './Flexbox'

const Header = ({ children, ...other }: FlexboxProps) => (
	<Flexbox
		full='horizontal'
		direction='row'
		align='center'
		{...other}
	>
		{children}
	</Flexbox>
)

export default Header
