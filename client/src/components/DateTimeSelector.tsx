import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

import Input from './Input'
import Flexbox from './Flexbox'
import Header from './Header'
import Title from './Title'

interface DateTimeProps {
	name?: string
	className?: string
}

const DateTimeSelector = ({ name = 'endTime', className }: DateTimeProps) => {

	const [field] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleChange = (value: Date) => {
		setFieldValue(name, value)
	}

	return (
		<>
			<Header>
				<Title
					tag='h1'
					italic
				>
					Skill Rating
				</Title>
			</Header>
			<Flexbox
				align='start'
				full='horizontal'
			>
				<DatePicker
					selected={field.value}
					onChange={handleChange}
					showTimeSelect
					timeFormat='h:mm aa'
					timeIntervals={10}
					timeCaption='Time'
					dateFormat='MMMM d, yyyy h:mm aa'
					customInput={<Input placeholder='Enter a date' />}
					showPopperArrow={false}
					className={className}
				/>
			</Flexbox>
		</>
	)
}

const StyledDateTimeSelector = styled(DateTimeSelector)`
`

export default StyledDateTimeSelector
