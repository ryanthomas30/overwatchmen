import React from 'react'
import styled from 'styled-components'

import Button, { ButtonProps } from './Button'
import { ReactComponent as Google } from '../assets/google.svg'

interface Props extends ButtonProps {
	className?: string
}

const UnstyledLoginButton = ({ className, label = 'Sign in with Google', ...other }: Props) => (
	<Button
		label={label}
		className={className}
		icon={
			<Google
				height={24}
				width={24}
			/>
		}
		{...other}
	/>
)

const LoginButton = styled(UnstyledLoginButton)`
	/* Button Text */
	color: ${({ theme, primary }) => primary ? 'white' : theme.gray};
	font-family: 'Koverwatch';
	font-size: 20px;
	letter-spacing: 2px;
	font-style: italic;
	white-space: nowrap;
	&:hover {
		color: ${({ theme, primary }) => primary ? 'white' : theme.yellow};
	}
`

export default LoginButton
