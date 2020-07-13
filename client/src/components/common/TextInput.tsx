import React, { ChangeEvent, FC } from 'react'

import { Flexbox, FlexboxProps } from './Flexbox'
import { Input } from './Input'

interface Props extends FlexboxProps {
	value?: string
	placeHolder?: string
	onChange?: ((event: ChangeEvent<HTMLInputElement>) => void)
}

export const TextInput: FC<Props> = ({ onChange, value, placeHolder, ...other }) => (
	<Flexbox
		full='horizontal'
		{...other}
	>
		<Input
			type='text'
			placeholder={placeHolder}
			value={value}
			onChange={onChange}
		/>
	</Flexbox>
)
