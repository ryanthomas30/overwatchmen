import React, { ChangeEvent } from 'react'

import Flexbox, { FlexboxProps } from './Flexbox'
import Input from './Input'

interface TextInput extends FlexboxProps {
	value?: string
	placeHolder?: string
	onChange?: ((event: ChangeEvent<HTMLInputElement>) => void)
}

const TextInput = ({ onChange, value, placeHolder, ...other }: TextInput) => (
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

export default TextInput
