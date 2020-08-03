import styled from 'styled-components'

import { theme } from '../../constants'

export const Input = styled.input`
	width: -webkit-fill-available;
	padding: 16px 20px;
	border: none;
	border-radius: ${theme.borderRadius};
	background-color: #FEFEFE;
	transition: all 200ms ease-in-out;
	font-family: 'Koverwatch';
	font-style: italic;
	font-size: 28px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	&:focus {
		outline: none;
		background-color: white;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
`

