import React from 'react'
import styled from 'styled-components'
import Flexbox from './Flexbox'
import { theme } from '../constants'

interface CardProps {
	active: boolean
}

const Card = ({ active, ...rest } : any) => (
	<Flexbox {...rest} />
)

const StyledCard = styled(Card)`
	border-radius: 15px;
	background-color: ${({ active }) => active ? theme.yellow : 'white'};
`

export default StyledCard
