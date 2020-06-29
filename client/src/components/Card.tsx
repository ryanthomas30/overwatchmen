import React from 'react'
import styled from 'styled-components'
import Flexbox, { FlexboxProps } from './Flexbox'
import { theme } from '../constants'

interface CardProps extends FlexboxProps{
	active?: boolean
	key?: string
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const Card = ({ active, key, ...rest } : CardProps) => (
	<Flexbox {...rest} />
)

const StyledCard = styled(Card)`
	border-radius: 15px;
	background-color: ${({ active }) => active ? theme.yellow : 'white'};
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export default StyledCard
