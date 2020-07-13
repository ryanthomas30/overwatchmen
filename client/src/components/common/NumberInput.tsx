import React, { ChangeEvent, KeyboardEvent, FC } from 'react'
import { useField, useFormikContext } from 'formik'
import numeral from 'numeral'

import { Flexbox, FlexboxProps } from './Flexbox'
import { Input } from './Input'

interface Props extends FlexboxProps {
	name: string
	min?: number
	max?: number
	step?: number
	placeHolder?: string
}

export const NumberInput: FC<Props> = ({ placeHolder, name, min = 0, max = 5000, step = 10, ...other }) => {
	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const up = () => {
		const parsedNumber = numeral(field.value).value()
		const value = parsedNumber + step > max ? max : parsedNumber + step
		setFieldValue(name, value)
	}

	const down = () => {
		const parsedNumber = numeral(field.value).value()
		const value = parsedNumber - step < min ? min : parsedNumber - step
		setFieldValue(name, value)
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.keyCode) {
			case 38:
				event.preventDefault()
				up()
				break
			case 40:
				event.preventDefault()
				down()
				break
			default:
				break
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const parsedNumber = numeral(event.target.value || 0).value()
		const value = parsedNumber > max ? max :
			parsedNumber < min ? min :
				parsedNumber
		setFieldValue(name, value || 0)
	}

	return (
		<Flexbox
			{...other}
		>
			<Input
				type='text'
				placeholder={placeHolder}
				{...field}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</Flexbox>
	)
}
