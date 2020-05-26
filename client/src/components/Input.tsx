import styled from 'styled-components'

const Input = styled.input`
	width: -webkit-fill-available;
	padding: 16px 20px;
	border: none;
	border-radius: 10px;
	background-color: white;
	transition: all 200ms ease-in-out;
	font-family: 'Koverwatch';
	font-style: italic;
	font-size: 28px;
	&:focus {
		outline: none;
		background-color: #F0F0F0;
	}
`

export default Input
