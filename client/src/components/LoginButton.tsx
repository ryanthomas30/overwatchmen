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
	font-family: 'Nunito Sans';
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	white-space: nowrap;
	&:hover {
		color: #272727;
		background-color: #FAFAFA;
	}
`
