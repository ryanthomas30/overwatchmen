import React, { FC } from 'react'
import styled from 'styled-components'

import { Button, ButtonProps } from './common'
import { ReactComponent as Google } from '../assets/google.svg'

interface Props extends ButtonProps {
	className?: string
}

const BaseLoginButton: FC<Props> = ({ className, label = 'Sign in with Google', ...other }) => (
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

export const LoginButton = styled(BaseLoginButton)`
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
