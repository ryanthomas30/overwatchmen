import React, { FC } from 'react'
import styled from 'styled-components'
import { Flexbox, FlexboxProps } from '..'

import { theme } from '../../constants'

interface CardProps extends FlexboxProps {
	active?: boolean
	transition?: boolean
	flat?: boolean
}

const BaseCard: FC<CardProps> = ({ ...other }) => (
	<Flexbox {...other} />
)

export const Card = styled(BaseCard)`
	border-radius: 15px;
	background-color: ${({ active }) => active ? theme.yellow : 'white'};
	box-shadow: ${({ flat = false }) => !flat ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : undefined };
	${({ transition, active }) => transition &&
		`transition: ${theme.transition};
		&:hover {
			background-color: ${active ? theme.yellow : '#FAFAFA'};
		}`}
`
